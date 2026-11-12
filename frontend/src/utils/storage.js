import { INITIAL_ARTIFACTS } from '../data/artifacts';
import { DEMO_USERS } from '../data/users';
import { DEMO_MUSEUMS } from '../data/museums';

const DATASET_VERSION = 'tn_heritage_v5';

const STORAGE_KEYS = {
  INITIALIZED: 'heritagechain_initialized',
  DATASET_VERSION: 'heritagechain_dataset_version',
  ARTIFACTS: 'heritagechain_artifacts',
  USERS: 'heritagechain_users',
  MUSEUMS: 'heritagechain_museums',
  CURRENT_USER: 'heritagechain_current_user',
  NOTIFICATIONS: 'heritagechain_notifications'
};

const INITIAL_NOTIFICATIONS = [
  {
    id: 'notif-001',
    title: 'GAI Record Anchored',
    message: 'Adichanallur Burial Urns (GAI-TN-ARCH-0001) verified with ASI & Government Museum Chennai provenance.',
    time: '12 mins ago',
    read: false,
    type: 'blockchain',
    link: '/artifact/arch-001'
  },
  {
    id: 'notif-002',
    title: 'Epigraphic Match Linked',
    message: 'Jambai Tamil-Brahmi Inscription (GAI-TN-INSC-0002) cross-linked to Purananuru Sangam attestations.',
    time: '45 mins ago',
    read: false,
    type: 'ai',
    link: '/artifact/insc-002'
  },
  {
    id: 'notif-003',
    title: 'GI Status Check Pending',
    message: 'Athangudi Tiles (GAI-TN-CRAFT-0012) marked Registration Not Verified pending live IP India GI Registry check.',
    time: '2 hours ago',
    read: false,
    type: 'verification',
    link: '/artifact/craft-012'
  },
  {
    id: 'notif-004',
    title: 'Manuscript Archive Indexed',
    message: 'Tolkappiyam Palm-Leaf Witness (GAI-TN-MS-0003) linked to classical text entry GAI-TN-LIT-0002.',
    time: '5 hours ago',
    read: true,
    type: 'blockchain',
    link: '/artifact/ms-003'
  }
];

export const initStorage = () => {
  const isInitialized = localStorage.getItem(STORAGE_KEYS.INITIALIZED);
  const currentVersion = localStorage.getItem(STORAGE_KEYS.DATASET_VERSION);

  if (currentVersion !== DATASET_VERSION) {
    localStorage.setItem(STORAGE_KEYS.ARTIFACTS, JSON.stringify(INITIAL_ARTIFACTS));
    localStorage.setItem(STORAGE_KEYS.MUSEUMS, JSON.stringify(DEMO_MUSEUMS));
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(INITIAL_NOTIFICATIONS));
    localStorage.setItem(STORAGE_KEYS.DATASET_VERSION, DATASET_VERSION);
  } else {
    if (!localStorage.getItem(STORAGE_KEYS.ARTIFACTS)) {
      localStorage.setItem(STORAGE_KEYS.ARTIFACTS, JSON.stringify(INITIAL_ARTIFACTS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.MUSEUMS)) {
      localStorage.setItem(STORAGE_KEYS.MUSEUMS, JSON.stringify(DEMO_MUSEUMS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS)) {
      localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(INITIAL_NOTIFICATIONS));
    }
  }

  if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(DEMO_USERS));
  }

  // Only set default initial user on the very first visit so explicit logout stays logged out
  if (!isInitialized) {
    if (!localStorage.getItem(STORAGE_KEYS.CURRENT_USER)) {
      localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(DEMO_USERS[1]));
    }
    localStorage.setItem(STORAGE_KEYS.INITIALIZED, 'true');
  }
};

export const getArtifacts = () => {
  initStorage();
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.ARTIFACTS)) || INITIAL_ARTIFACTS;
  } catch {
    return INITIAL_ARTIFACTS;
  }
};

export const getArtifactById = (id) => {
  const artifacts = getArtifacts();
  return artifacts.find((a) => a.id === id || a.gai === id);
};

export const getNextGaiCode = (recordType = 'GEN') => {
  const prefixMap = {
    archaeological: 'ARCH',
    inscription: 'INSC',
    coin: 'COIN',
    sculpture: 'SCULP',
    craft: 'CRAFT',
    literature: 'LIT',
    manuscript: 'MS'
  };
  const typeTag = prefixMap[recordType] || 'REG';
  const artifacts = getArtifacts();
  let maxNum = artifacts.length;
  artifacts.forEach((a) => {
    const match = a.gai?.match(/(\d+)$/);
    if (match) {
      const parsed = parseInt(match[1], 10);
      if (parsed > maxNum) maxNum = parsed;
    }
  });
  return `GAI-TN-${typeTag}-${String(maxNum + 1).padStart(4, '0')}`;
};

export const saveArtifact = (newArtifact) => {
  const artifacts = getArtifacts();
  const index = artifacts.findIndex((a) => a.id === newArtifact.id);
  if (index >= 0) {
    artifacts[index] = newArtifact;
  } else {
    artifacts.unshift(newArtifact);
  }
  localStorage.setItem(STORAGE_KEYS.ARTIFACTS, JSON.stringify(artifacts));
  return newArtifact;
};

export const updateArtifact = (id, updates) => {
  const artifacts = getArtifacts();
  const index = artifacts.findIndex((a) => a.id === id || a.gai === id);
  if (index >= 0) {
    artifacts[index] = { ...artifacts[index], ...updates };
    localStorage.setItem(STORAGE_KEYS.ARTIFACTS, JSON.stringify(artifacts));
    return artifacts[index];
  }
  return null;
};

export const updateArtifactVerification = (id, status) => {
  const artifacts = getArtifacts();
  const artifact = artifacts.find((a) => a.id === id || a.gai === id);
  if (artifact) {
    artifact.verificationStatus = status;
    if (artifact.blockchain) {
      artifact.blockchain.status = status === 'Verified' ? 'Verified & Immutable' : status;
    }
    localStorage.setItem(STORAGE_KEYS.ARTIFACTS, JSON.stringify(artifacts));
  }
  return artifact;
};

export const addArtifactReference = (id, reference) => {
  const artifacts = getArtifacts();
  const artifact = artifacts.find((a) => a.id === id || a.gai === id);
  if (artifact) {
    const existingRefs = artifact.references || [];
    const newRef = {
      id: `ref-${Date.now()}`,
      addedAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      ...reference
    };
    artifact.references = [newRef, ...existingRefs];
    localStorage.setItem(STORAGE_KEYS.ARTIFACTS, JSON.stringify(artifacts));
    return newRef;
  }
  return null;
};

export const addArtifactCorrection = (id, correction) => {
  const artifacts = getArtifacts();
  const artifact = artifacts.find((a) => a.id === id || a.gai === id);
  if (artifact) {
    const existingCorrections = artifact.corrections || [];
    const newCorrection = {
      id: `corr-${Date.now()}`,
      status: 'Pending Review',
      submittedAt: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      ...correction
    };
    artifact.corrections = [newCorrection, ...existingCorrections];
    localStorage.setItem(STORAGE_KEYS.ARTIFACTS, JSON.stringify(artifacts));
    return newCorrection;
  }
  return null;
};

export const getCurrentUser = () => {
  initStorage();
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const AUTH_CHANGE_EVENT = 'heritagechain:auth-change';
export const NOTIF_CHANGE_EVENT = 'heritagechain:notif-change';

const emitAuthChange = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
  }
};

const emitNotifChange = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(NOTIF_CHANGE_EVENT));
  }
};

export const setCurrentUser = (user) => {
  localStorage.setItem(STORAGE_KEYS.INITIALIZED, 'true');
  localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
  emitAuthChange();
};

export const logoutUser = () => {
  localStorage.setItem(STORAGE_KEYS.INITIALIZED, 'true');
  localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  emitAuthChange();
};

export const getUsers = () => {
  initStorage();
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || DEMO_USERS;
  } catch {
    return DEMO_USERS;
  }
};

export const updateUserStatus = (userId, status) => {
  const users = getUsers();
  const target = users.find((u) => u.id === userId);
  if (target) {
    target.status = status;
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  }
  return users;
};

export const getMuseums = () => {
  initStorage();
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.MUSEUMS)) || DEMO_MUSEUMS;
  } catch {
    return DEMO_MUSEUMS;
  }
};

export const addMuseum = (museum) => {
  const museums = getMuseums();
  const newMuseum = {
    id: `mus-${Date.now()}`,
    artifacts: 0,
    verified: 0,
    pending: 0,
    status: 'Verified Partner',
    logo: '🏛️',
    ...museum
  };
  museums.unshift(newMuseum);
  localStorage.setItem(STORAGE_KEYS.MUSEUMS, JSON.stringify(museums));
  return newMuseum;
};

export const updateMuseumStatus = (museumId, status) => {
  const museums = getMuseums();
  const target = museums.find((m) => m.id === museumId);
  if (target) {
    target.status = status;
    localStorage.setItem(STORAGE_KEYS.MUSEUMS, JSON.stringify(museums));
  }
  return museums;
};

export const getNotifications = () => {
  initStorage();
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS)) || INITIAL_NOTIFICATIONS;
  } catch {
    return INITIAL_NOTIFICATIONS;
  }
};

export const addNotification = (notif) => {
  const notifications = getNotifications();
  const newNotif = {
    id: `notif-${Date.now()}`,
    time: 'Just now',
    read: false,
    ...notif
  };
  notifications.unshift(newNotif);
  localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifications));
  emitNotifChange();
  return newNotif;
};

export const markNotificationAsRead = (id) => {
  const notifications = getNotifications();
  const target = notifications.find((n) => n.id === id);
  if (target) {
    target.read = true;
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifications));
    emitNotifChange();
  }
};

export const markAllNotificationsAsRead = () => {
  const notifications = getNotifications().map((n) => ({ ...n, read: true }));
  localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifications));
  emitNotifChange();
  return notifications;
};

export const resetDemoData = () => {
  localStorage.setItem(STORAGE_KEYS.INITIALIZED, 'true');
  localStorage.setItem(STORAGE_KEYS.DATASET_VERSION, DATASET_VERSION);
  localStorage.setItem(STORAGE_KEYS.ARTIFACTS, JSON.stringify(INITIAL_ARTIFACTS));
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(DEMO_USERS));
  localStorage.setItem(STORAGE_KEYS.MUSEUMS, JSON.stringify(DEMO_MUSEUMS));
  localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(INITIAL_NOTIFICATIONS));
  localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(DEMO_USERS[1]));
  emitAuthChange();
  emitNotifChange();
};
