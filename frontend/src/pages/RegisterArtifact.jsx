import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  PlusCircle,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Upload,
  Loader2,
  FileText
} from 'lucide-react';
import {
  saveArtifact,
  getArtifacts,
  getCurrentUser,
  getNextGaiCode,
  addNotification
} from '../utils/storage';
import {
  computeArtifactSimilarity,
  generateMockTxHash,
  generateMockBlockNumber,
  resolveLocationCoords
} from '../utils/simulations';
import ArtifactImage from '../components/ArtifactImage';
import { COLLECTION_CATEGORIES } from '../data/artifacts';
import { useToast } from '../utils/toast';

export const RegisterArtifact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useToast();
  const currentUser = getCurrentUser();

  const [currentStep, setCurrentStep] = useState(1);

  // Form State (supports prefill when coming from AI Matching page)
  const [formData, setFormData] = useState(() => ({
    category: 'Inscriptions and Epigraphical Records',
    recordType: 'inscription',
    subCategory: 'Chola Stone Inscription',
    name: 'Uttiramerur Kudavolai Chola Inscription',
    tamilName: 'உத்திரமேரூர் குடவோலைக் கல்வெட்டு',
    description:
      'Early 10th-century Tamil granite temple wall inscription issued under Parantaka Chola I detailing village sabha electoral governance and Kudavolai ballot rules.',
    material: 'Carved Granite Wall Inscription',
    period: '919–921 CE (Chola Period)',
    dynasty: 'Early Imperial Chola',
    origin: 'Uttiramerur, Kancheepuram District, Tamil Nadu',
    district: 'Kancheepuram',
    institution: 'Archaeological Survey of India — Chennai Circle',
    collection: 'Chola Temple Epigraphy Collection',
    currentLocation: 'Vaikunta Perumal Temple Precinct, Uttiramerur',
    giStatus: 'Not Applicable',
    sourceName: 'Archaeological Survey of India (ASI) & Epigraphia Indica',
    sourceURL: 'https://asi.nic.in/',
    previousOwner: 'Temple Sabha & Endowment Records',
    transferDate: '1904',
    transferLocation: 'Documented In-Situ by ASI Epigraphy Branch',
    historicalEvent: 'Cleaned, stamped (estamppage), and transcribed into South Indian Inscriptions.',
    image: '',
    supportingDoc: 'ASI_Uttiramerur_Epigraphy_Record.pdf',
    ...(location.state?.prefill || {})
  }));

  // AI Processing State
  const [aiRunning, setAiRunning] = useState(false);
  const [aiStep, setAiStep] = useState(0);
  const [aiComplete, setAiComplete] = useState(false);
  const [aiReport, setAiReport] = useState(null);

  // Blockchain Minting State
  const [bcRunning, setBcRunning] = useState(false);
  const [bcStep, setBcStep] = useState(0);
  const [bcComplete, setBcComplete] = useState(false);
  const [generatedResult, setGeneratedResult] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => {
      if (field === 'category') {
        const matchedCat = COLLECTION_CATEGORIES.find((c) => c.id === value);
        return {
          ...prev,
          category: value,
          recordType: matchedCat?.artworkType || prev.recordType,
          giStatus:
            value === 'Traditional Tamil Crafts and GI Heritage'
              ? 'Traditional Craft'
              : 'Not Applicable'
        };
      }
      return { ...prev, [field]: value };
    });
  };

  const handleImageFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        handleInputChange('image', reader.result);
        showToast(`Loaded image preview: ${file.name}`, 'success');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDocFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    handleInputChange('supportingDoc', file.name);
    showToast(`Attached supporting document: ${file.name}`, 'info');
  };

  const validateCurrentStep = () => {
    if (currentStep === 1) {
      if (!formData.name.trim() || !formData.description.trim() || !formData.material.trim() || !formData.period.trim() || !formData.origin.trim()) {
        showToast('Please fill in all required artifact metadata fields before continuing.', 'error', 'Missing Information');
        return false;
      }
    }
    if (currentStep === 2) {
      if (!formData.institution.trim() || !formData.currentLocation.trim()) {
        showToast('Please provide the holding institution and current location.', 'error', 'Missing Institution Info');
        return false;
      }
    }
    return true;
  };

  const handleNextStep = () => {
    if (!validateCurrentStep()) return;
    setCurrentStep((prev) => Math.min(prev + 1, 6));
  };

  // Trigger AI Similarity Analysis
  const runAiMatching = () => {
    setAiRunning(true);
    setAiComplete(false);
    setAiStep(1);

    const existingArtifacts = getArtifacts();
    const report = computeArtifactSimilarity(formData, existingArtifacts);

    setTimeout(() => setAiStep(2), 650);
    setTimeout(() => setAiStep(3), 1300);
    setTimeout(() => setAiStep(4), 1950);
    setTimeout(() => {
      setAiStep(5);
      setAiRunning(false);
      setAiComplete(true);
      setAiReport(report);
      showToast('AI vector similarity analysis completed.', 'success', 'AI Scan Complete');
    }, 2600);
  };

  // Trigger Polygon Amoy Blockchain Minting
  const runBlockchainRegistration = () => {
    setBcRunning(true);
    setBcStep(1);

    const newGai = getNextGaiCode(formData.recordType);
    const mockTx = generateMockTxHash();
    const mockBlock = generateMockBlockNumber();

    setTimeout(() => setBcStep(2), 700);
    setTimeout(() => setBcStep(3), 1400);
    setTimeout(() => setBcStep(4), 2100);
    setTimeout(() => {
      setBcStep(5);
      setBcRunning(false);
      setBcComplete(true);

      const nowStr = new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });

      const originCoords = resolveLocationCoords(
        `${formData.origin} ${formData.district}`,
        [10.7905, 79.1369]
      );
      const transferCoords = resolveLocationCoords(formData.transferLocation, originCoords);
      const currentCoords = resolveLocationCoords(
        `${formData.currentLocation} ${formData.institution}`,
        [13.0732, 80.2609]
      );

      const newArtifact = {
        id: `tn-${Date.now()}`,
        gai: newGai,
        recordType: formData.recordType || 'archaeological',
        category: formData.category,
        subCategory: formData.subCategory?.trim() || formData.category,
        name: formData.name.trim(),
        tamilName: formData.tamilName.trim() || undefined,
        description: formData.description.trim(),
        origin: formData.origin.trim(),
        district: formData.district.trim() || 'Tamil Nadu',
        period: formData.period.trim(),
        dynasty: formData.dynasty.trim() || 'Tamil Heritage Era',
        material: formData.material.trim(),
        institution: formData.institution.trim(),
        museum: formData.institution.trim(),
        collection: formData.collection.trim(),
        currentLocation: formData.currentLocation.trim(),
        giStatus:
          formData.category === 'Traditional Tamil Crafts and GI Heritage'
            ? formData.giStatus || 'Traditional Craft'
            : undefined,
        sourceName: formData.sourceName.trim() || formData.institution.trim(),
        sourceURL: formData.sourceURL.trim() || 'https://www.tnarch.gov.in/',
        accessDate: nowStr,
        evidenceType: 'Institutionally Catalogued',
        confidenceLevel: 'Medium',
        image: formData.image.trim(),
        supportingDoc: formData.supportingDoc,
        verificationStatus: 'Verified',
        registrationDate: nowStr,
        registeredBy: currentUser?.name || 'Institutional Curator',
        aiSimilarity: {
          score: aiReport?.topMatch?.score || 92.4,
          status: aiReport?.isDuplicateLikely ? 'Potential Match Reviewed' : 'AI Verified Unique',
          matchedGai: aiReport?.isDuplicateLikely ? aiReport.topMatch.artifact.gai : newGai,
          notes:
            aiReport?.recommendation ||
            'Semantic representation verified against Tamil Heritage registry records.'
        },
        blockchain: {
          network: 'Polygon Amoy Testnet',
          txHash: mockTx,
          blockNumber: mockBlock,
          timestamp: `${nowStr}, ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} UTC`,
          contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
          status: 'Confirmed'
        },
        provenance: [
          {
            year: formData.period.trim(),
            title: 'Documented Origin',
            custodian: 'Regional Heritage Creators / Community',
            location: formData.origin.trim(),
            event: 'Historical origin or craft lineage recorded.',
            verified: true,
            hash: '0xa1...0001'
          },
          {
            year: formData.transferDate.trim() || '1950',
            title: 'Archival Documentation',
            custodian: formData.previousOwner.trim() || 'Institutional Survey',
            location: formData.transferLocation.trim() || formData.origin.trim(),
            event: formData.historicalEvent.trim() || 'Documented archival cataloging.',
            verified: true,
            hash: '0xb2...0002'
          },
          {
            year: '2026',
            title: 'HeritageChain Digital Passport Minted',
            custodian: formData.institution.trim(),
            location: formData.currentLocation.trim(),
            event: 'Cryptographic GAI badge minted and indexed on Polygon testnet.',
            verified: true,
            hash: `${mockTx.substring(0, 8)}...${mockTx.slice(-4)}`
          }
        ],
        timeline: [
          {
            date: formData.period.trim(),
            title: 'Historical Origin',
            category: 'Origin',
            details: `Attributed to ${formData.origin.trim()}.`
          },
          {
            date: formData.transferDate.trim() || '1950',
            title: 'Documentation Milestone',
            category: 'Documentation',
            details: formData.historicalEvent.trim() || 'Recorded by heritage custodian.'
          },
          {
            date: '2026',
            title: 'Digital Registration',
            category: 'Verification',
            details: `Minted Global Artifact Identity ${newGai} on Polygon Amoy.`
          }
        ],
        journey: [
          {
            title: 'Documented Origin',
            year: formData.period.trim(),
            lat: originCoords[0],
            lng: originCoords[1],
            location: formData.origin.trim(),
            custodian: 'Historical Site / Origin',
            description: 'Original site of creation or discovery.'
          },
          {
            title: 'Archival Survey',
            year: formData.transferDate.trim() || '1950',
            lat: transferCoords[0],
            lng: transferCoords[1],
            location: formData.transferLocation.trim() || formData.origin.trim(),
            custodian: formData.previousOwner.trim() || 'Institutional Archive',
            description: formData.historicalEvent.trim() || 'Documented custody record.'
          },
          {
            title: 'Current Institution',
            year: '2026',
            lat: currentCoords[0],
            lng: currentCoords[1],
            location: formData.currentLocation.trim(),
            custodian: formData.institution.trim(),
            description: 'Permanent exhibition & digital passport.'
          }
        ],
        relationships: {
          nodes: [
            { id: 'root', label: formData.name.trim(), type: formData.recordType || 'artifact', color: '#EA9940' },
            { id: 'n1', label: formData.district.trim() || formData.origin.trim(), type: 'district', color: '#307082' },
            { id: 'n2', label: formData.dynasty.trim() || formData.category, type: 'dynasty', color: '#6CA3A2' },
            { id: 'n3', label: formData.material.trim(), type: 'material', color: '#ECE7DC' },
            { id: 'n4', label: formData.institution.trim(), type: 'institution', color: '#307082' }
          ],
          edges: [
            { id: 'e1', source: 'root', target: 'n1', label: 'Located In' },
            { id: 'e2', source: 'root', target: 'n2', label: 'Context' },
            { id: 'e3', source: 'root', target: 'n3', label: 'Material' },
            { id: 'e4', source: 'root', target: 'n4', label: 'Preserved By' }
          ]
        }
      };

      saveArtifact(newArtifact);
      addNotification({
        title: 'Blockchain Registration Completed',
        message: `Artifact ${newGai} (${newArtifact.name}) registered & confirmed on Polygon Amoy.`,
        type: 'blockchain',
        link: `/artifact/${newArtifact.id}`
      });

      setGeneratedResult(newArtifact);
      showToast(`Passport ${newGai} minted on Polygon Amoy!`, 'success', 'Registered & Verified');
    }, 2800);
  };

  const steps = [
    '1. Basic Information',
    '2. Institution',
    '3. Provenance',
    '4. Media',
    '5. AI Verification',
    '6. Blockchain Registration'
  ];

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto animate-fade-in">
      {/* Page Title */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#307082] bg-[#307082]/10 px-3 py-1 rounded-full">
          Curator Registry Portal
        </span>
        <h1 className="text-3xl font-serif font-bold text-[#12212E] mt-2 flex items-center gap-2">
          <PlusCircle className="w-8 h-8 text-[#EA9940]" />
          Register New Artifact
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Mint a new Global Artifact Identity (GAI) with AI similarity screening and Polygon blockchain verification.
        </p>
      </div>

      {/* Progress Stepper Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {steps.map((st, idx) => {
          const stepNum = idx + 1;
          const isActive = currentStep === stepNum;
          const isDone = currentStep > stepNum;
          return (
            <button
              key={idx}
              type="button"
              disabled={!isDone}
              onClick={() => isDone && setCurrentStep(stepNum)}
              className={`p-3 rounded-xl border text-xs font-semibold transition-all text-left ${
                isActive
                  ? 'bg-[#12212E] text-[#EA9940] border-[#307082] shadow-md'
                  : isDone
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300 cursor-pointer'
                  : 'bg-white text-slate-400 border-slate-200 cursor-default'
              }`}
            >
              <div className="flex items-center gap-1.5">
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                ) : (
                  <span className="w-4 h-4 rounded-full bg-slate-200 text-[#12212E] flex items-center justify-center text-[10px] font-bold shrink-0">
                    {stepNum}
                  </span>
                )}
                <span className="truncate">{st.split('. ')[1]}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Form Steps Card Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
        {/* Step 1: Basic Information */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-serif font-bold text-lg text-[#12212E]">Step 1: Basic Information</h3>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <button
                  type="button"
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      category: 'Archaeological Discoveries',
                      recordType: 'archaeological',
                      subCategory: 'Iron Age Urn Burial',
                      name: 'Adichanallur Burial Urns',
                      tamilName: 'ஆதிச்சநல்லூர் முதுமக்கள் தாழி',
                      description:
                        'Large handmade Iron Age terracotta pyriform burial urns (Muthumakkal Thaazhi) excavated from Thamirabarani river basin with grave pottery and bronze offerings.',
                      material: 'Fired Terracotta & Red-and-Black Ware',
                      period: 'Iron Age / Megalithic (c. 1000–300 BCE)',
                      dynasty: 'Iron Age / Early Sangam Culture',
                      origin: 'Adichanallur, Thoothukudi District, Tamil Nadu',
                      district: 'Thoothukudi',
                      institution: 'Government Museum, Chennai',
                      currentLocation: 'Bronze & Archaeology Wing, Government Museum Chennai'
                    }));
                    setAiComplete(false);
                    setAiReport(null);
                    showToast('Loaded Adichanallur sample — Step 5 will demonstrate high-confidence AI matching!', 'info', 'Sample Loaded');
                  }}
                  className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100 font-semibold transition-colors"
                >
                  Load Adichanallur Sample
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      category: 'Inscriptions and Epigraphical Records',
                      recordType: 'inscription',
                      subCategory: 'Chola Stone Inscription',
                      name: 'Uttiramerur Kudavolai Chola Inscription',
                      tamilName: 'உத்திரமேரூர் குடவோலைக் கல்வெட்டு',
                      description:
                        'Early 10th-century Tamil granite temple wall inscription issued under Parantaka Chola I detailing village sabha electoral governance and Kudavolai ballot rules.',
                      material: 'Carved Granite Wall Inscription',
                      period: '919–921 CE (Chola Period)',
                      dynasty: 'Early Imperial Chola',
                      origin: 'Uttiramerur, Kancheepuram District, Tamil Nadu',
                      district: 'Kancheepuram',
                      institution: 'Archaeological Survey of India — Chennai Circle',
                      currentLocation: 'Vaikunta Perumal Temple Precinct, Uttiramerur'
                    }));
                    setAiComplete(false);
                    setAiReport(null);
                    showToast('Loaded Uttiramerur Kudavolai sample.', 'info', 'Sample Loaded');
                  }}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 font-semibold transition-colors"
                >
                  Load Uttiramerur Sample
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Collection Category *</label>
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none text-slate-900"
                >
                  {COLLECTION_CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Tamil Name (தமிழ் பெயர்)</label>
                <input
                  type="text"
                  value={formData.tamilName}
                  onChange={(e) => handleInputChange('tamilName', e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none text-slate-900"
                  placeholder="Optional Tamil title..."
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="font-semibold text-slate-700">Artifact / Heritage Record Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none text-slate-900"
                  placeholder="e.g. Uttiramerur Kudavolai Chola Inscription"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="font-semibold text-slate-700">Description *</label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none text-slate-900"
                  placeholder="Historical description and cultural significance..."
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Material *</label>
                <input
                  type="text"
                  value={formData.material}
                  onChange={(e) => handleInputChange('material', e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Period / Era *</label>
                <input
                  type="text"
                  value={formData.period}
                  onChange={(e) => handleInputChange('period', e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Dynasty / Cultural Tradition</label>
                <input
                  type="text"
                  value={formData.dynasty}
                  onChange={(e) => handleInputChange('dynasty', e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">District (Tamil Nadu / Region)</label>
                <input
                  type="text"
                  value={formData.district}
                  onChange={(e) => handleInputChange('district', e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                  placeholder="e.g. Thanjavur, Sivaganga, Thoothukudi"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="font-semibold text-slate-700">Origin / Excavation Site *</label>
                <input
                  type="text"
                  value={formData.origin}
                  onChange={(e) => handleInputChange('origin', e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Institution & Source Verification */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="font-serif font-bold text-lg text-[#12212E]">Step 2: Institution &amp; Source Attribution</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Custodian Institution / Archive *</label>
                <input
                  type="text"
                  value={formData.institution}
                  onChange={(e) => handleInputChange('institution', e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Sub-Collection</label>
                <input
                  type="text"
                  value={formData.collection}
                  onChange={(e) => handleInputChange('collection', e.target.value)}
                  placeholder="e.g. Chola Temple Epigraphy Collection"
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="font-semibold text-slate-700">Current Location *</label>
                <input
                  type="text"
                  value={formData.currentLocation}
                  onChange={(e) => handleInputChange('currentLocation', e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Primary Reference Source</label>
                <input
                  type="text"
                  value={formData.sourceName}
                  onChange={(e) => handleInputChange('sourceName', e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Official Source URL</label>
                <input
                  type="url"
                  value={formData.sourceURL}
                  onChange={(e) => handleInputChange('sourceURL', e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                />
              </div>

              {formData.category === 'Traditional Tamil Crafts and GI Heritage' && (
                <div className="space-y-1 sm:col-span-2">
                  <label className="font-semibold text-slate-700">IP India GI Registry Status</label>
                  <select
                    value={formData.giStatus}
                    onChange={(e) => handleInputChange('giStatus', e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                  >
                    <option value="GI Registered">GI Registered</option>
                    <option value="Traditional Craft">Traditional Craft</option>
                    <option value="Registration Not Verified">Registration Not Verified</option>
                  </select>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Provenance */}
        {currentStep === 3 && (
          <div className="space-y-4 animate-fade-in">
            <h3 className="font-serif font-bold text-lg text-[#12212E]">Step 3: Provenance</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Previous Owner</label>
                <input
                  type="text"
                  value={formData.previousOwner}
                  onChange={(e) => handleInputChange('previousOwner', e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Transfer Date</label>
                <input
                  type="text"
                  value={formData.transferDate}
                  onChange={(e) => handleInputChange('transferDate', e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="font-semibold text-slate-700">Transfer Location</label>
                <input
                  type="text"
                  value={formData.transferLocation}
                  onChange={(e) => handleInputChange('transferLocation', e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="font-semibold text-slate-700">Historical Event</label>
                <textarea
                  rows={2}
                  value={formData.historicalEvent}
                  onChange={(e) => handleInputChange('historicalEvent', e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Media */}
        {currentStep === 4 && (
          <div className="space-y-5 animate-fade-in">
            <h3 className="font-serif font-bold text-lg text-[#12212E]">Step 4: Media</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="space-y-3">
                <label className="font-semibold text-slate-700 block">Artifact Image URL or Upload</label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => handleInputChange('image', e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                  placeholder="https://images.unsplash.com/..."
                />
                <label className="p-4 border-2 border-dashed border-slate-300 rounded-2xl bg-slate-50 hover:border-[#307082] text-center space-y-2 block cursor-pointer transition-colors">
                  <Upload className="w-7 h-7 mx-auto text-[#307082]" />
                  <p className="text-slate-700 font-semibold">Upload Image (JPG, PNG, WEBP)</p>
                  <input type="file" accept="image/*" onChange={handleImageFileUpload} className="hidden" />
                </label>

                <label className="p-3.5 border border-slate-200 rounded-xl bg-slate-50 hover:border-[#307082] flex items-center justify-between cursor-pointer">
                  <span className="flex items-center gap-2 font-medium text-slate-700 truncate">
                    <FileText className="w-4 h-4 text-[#EA9940] shrink-0" />
                    <span className="truncate">{formData.supportingDoc || 'Upload Supporting Document'}</span>
                  </span>
                  <span className="text-[#307082] font-bold shrink-0 ml-2">Browse</span>
                  <input type="file" onChange={handleDocFileUpload} className="hidden" />
                </label>
              </div>

              <div className="space-y-2">
                <span className="font-semibold text-slate-700 block">Passport Image Preview</span>
                <div className="h-56 rounded-2xl overflow-hidden border border-slate-200 bg-slate-900">
                  <ArtifactImage
                    src={formData.image}
                    alt={formData.name || 'Artifact Preview'}
                    recordType={formData.recordType}
                    category={formData.category}
                    subCategory={formData.subCategory}
                    tamilName={formData.tamilName}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 5: AI Verification */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fade-in text-center">
            <div className="max-w-md mx-auto space-y-2">
              <Cpu className="w-12 h-12 mx-auto text-[#307082]" />
              <h3 className="font-serif font-bold text-xl text-[#12212E]">Step 5: AI Verification</h3>
              <p className="text-xs text-slate-500">
                Execute automated semantic similarity analysis against the global artifact registry before minting.
              </p>
            </div>

            {!aiComplete ? (
              <div className="max-w-md mx-auto space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                {aiRunning ? (
                  <div className="space-y-4 text-xs text-left">
                    <div className="flex items-center gap-2 text-[#307082] font-semibold">
                      <Loader2 className="w-4 h-4 animate-spin text-[#EA9940]" />
                      <span>Analyzing artifact features in real-time...</span>
                    </div>

                    <div className="space-y-2 font-mono text-[11px]">
                      <p className={aiStep >= 1 ? 'text-emerald-700 font-bold' : 'text-slate-400'}>
                        {aiStep >= 1 ? '✓ Extracting metadata' : '○ Extracting metadata'}
                      </p>
                      <p className={aiStep >= 2 ? 'text-emerald-700 font-bold' : 'text-slate-400'}>
                        {aiStep >= 2 ? '✓ Generating semantic representation' : '○ Generating semantic representation'}
                      </p>
                      <p className={aiStep >= 3 ? 'text-emerald-700 font-bold' : 'text-slate-400'}>
                        {aiStep >= 3 ? '✓ Searching artifact registry' : '○ Searching artifact registry'}
                      </p>
                      <p className={aiStep >= 4 ? 'text-emerald-700 font-bold' : 'text-slate-400'}>
                        {aiStep >= 4 ? '✓ Calculating similarity' : '○ Calculating similarity'}
                      </p>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={runAiMatching}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#12212E] to-[#307082] text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4 text-[#EA9940]" />
                    <span>Run AI Artifact Matching</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="max-w-lg mx-auto bg-sky-50 border border-sky-300 p-6 rounded-2xl text-left space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-sky-900 bg-sky-200 px-3 py-1 rounded-full">
                    {aiReport?.isDuplicateLikely ? 'Potential Existing Match Found' : 'AI Uniqueness Verified'}
                  </span>
                  <span className="text-sm font-bold text-emerald-700 font-mono">
                    {aiReport?.topMatch?.score || 92}% Similarity
                  </span>
                </div>
                {aiReport?.topMatch && (
                  <div className="p-3 bg-white rounded-xl border border-sky-200 text-xs space-y-1">
                    <p className="font-bold text-[#12212E]">
                      Closest Registry Record: {aiReport.topMatch.artifact.name} ({aiReport.topMatch.artifact.gai})
                    </p>
                    <p className="text-slate-600">{aiReport.recommendation}</p>
                  </div>
                )}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                  <span className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Ready for Blockchain Registration
                  </span>
                  <div className="flex items-center gap-3">
                    {aiReport?.isDuplicateLikely && aiReport?.topMatch && (
                      <button
                        type="button"
                        onClick={() => {
                          showToast(
                            `Linked submission to existing ${aiReport.topMatch.artifact.gai}`,
                            'success',
                            'Existing GAI Linked'
                          );
                          navigate(`/artifact/${aiReport.topMatch.artifact.id}`);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#12212E] text-[#EA9940] text-xs font-bold hover:bg-[#307082] hover:text-white transition-colors"
                      >
                        Link Existing GAI
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={runAiMatching}
                      className="text-xs font-bold text-[#307082] hover:underline"
                    >
                      Re-run Scan
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 6: Blockchain Registration */}
        {currentStep === 6 && (
          <div className="space-y-6 animate-fade-in text-center">
            <div className="max-w-md mx-auto space-y-2">
              <ShieldCheck className="w-12 h-12 mx-auto text-[#EA9940]" />
              <h3 className="font-serif font-bold text-xl text-[#12212E]">Step 6: Blockchain Registration</h3>
              <p className="text-xs text-slate-500">
                Mint cryptographic Global Artifact Identity (GAI) and commit spatio-temporal provenance hash on Polygon Amoy.
              </p>
            </div>

            {!bcComplete ? (
              <div className="max-w-md mx-auto space-y-4 bg-slate-900 text-white p-6 rounded-2xl border border-slate-800">
                {bcRunning ? (
                  <div className="space-y-4 text-xs text-left">
                    <div className="flex items-center gap-2 text-[#EA9940] font-semibold">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Anchoring on Polygon Amoy...</span>
                    </div>

                    <div className="space-y-2 font-mono text-[11px]">
                      <p className={bcStep >= 1 ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                        {bcStep >= 1 ? '✓ Connecting to Polygon Amoy...' : '○ Connecting to Polygon Amoy...'}
                      </p>
                      <p className={bcStep >= 2 ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                        {bcStep >= 2 ? '✓ Creating artifact hash...' : '○ Creating artifact hash...'}
                      </p>
                      <p className={bcStep >= 3 ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                        {bcStep >= 3 ? '✓ Submitting transaction...' : '○ Submitting transaction...'}
                      </p>
                      <p className={bcStep >= 4 ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                        {bcStep >= 4 ? '✓ Transaction confirmed.' : '○ Transaction confirmed.'}
                      </p>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={runBlockchainRegistration}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#EA9940] to-[#307082] text-[#12212E] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Generate Artifact Passport</span>
                  </button>
                )}
              </div>
            ) : (
              <div className="max-w-lg mx-auto bg-emerald-950 text-white border border-emerald-500/40 p-6 rounded-2xl text-left space-y-4 shadow-xl">
                <div className="flex items-center gap-2 text-emerald-300 font-bold font-serif text-base">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  <span>Blockchain Status: Confirmed</span>
                </div>

                <div className="text-xs font-mono text-emerald-200 space-y-1">
                  <p>✓ GAI Generated</p>
                  <p>✓ Metadata Hash Created</p>
                  <p>✓ Provenance Prepared</p>
                  <p>✓ Blockchain Registration Successful</p>
                </div>

                <div className="bg-black/50 p-4 rounded-xl font-mono text-xs space-y-2 border border-emerald-500/30">
                  <div className="flex justify-between">
                    <span className="text-slate-400">GAI:</span>
                    <span className="text-[#EA9940] font-bold">{generatedResult?.gai}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span className="text-slate-400 shrink-0">Transaction:</span>
                    <span className="text-emerald-300 truncate">{generatedResult?.blockchain?.txHash}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Status:</span>
                    <span className="text-emerald-300 font-bold">Registered &amp; Verified</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => navigate(`/artifact/${generatedResult?.id}`)}
                  className="w-full py-3 px-4 rounded-xl bg-[#EA9940] text-[#12212E] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:bg-[#e0892d] transition-colors"
                >
                  <span>Open Digital Artifact Passport</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Stepper Navigation Buttons */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            disabled={currentStep === 1 || bcRunning || aiRunning}
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-100 disabled:opacity-40 transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous Step</span>
          </button>

          {currentStep < 6 && (
            <button
              type="button"
              disabled={aiRunning}
              onClick={handleNextStep}
              className="px-6 py-2.5 rounded-xl bg-[#12212E] text-white text-xs font-semibold hover:bg-[#307082] disabled:opacity-40 transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>Next Step</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterArtifact;
