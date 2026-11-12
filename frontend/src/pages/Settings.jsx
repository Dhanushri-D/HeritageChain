import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings as SettingsIcon, RefreshCw, Shield, Database, UserCheck } from 'lucide-react';
import {
  getCurrentUser,
  setCurrentUser,
  getUsers,
  getArtifacts,
  getMuseums,
  getNotifications,
  resetDemoData
} from '../utils/storage';
import { useToast } from '../utils/toast';

export const Settings = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();

  const currentUser = getCurrentUser();
  const users = getUsers();
  const artifacts = getArtifacts();
  const museums = getMuseums();
  const notifications = getNotifications();

  const handleRoleSwitch = (user) => {
    setCurrentUser(user);
    showToast(`Active role switched to ${user.roleLabel}`, 'success', 'Role Updated');
    navigate('/dashboard');
  };

  const handleResetRegistry = () => {
    resetDemoData();
    showToast('All registry data has been restored to initial defaults.', 'success', 'Registry Reset');
    setTimeout(() => window.location.reload(), 600);
  };

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#307082] bg-[#307082]/10 px-3 py-1 rounded-full">
          System Configuration
        </span>
        <h1 className="text-3xl font-serif font-bold text-[#12212E] mt-2 flex items-center gap-2">
          <SettingsIcon className="w-8 h-8 text-[#EA9940]" />
          Settings &amp; Persistence
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Switch active roles instantaneously, inspect local storage state, or reset registry data.
        </p>
      </div>

      {/* Quick Role Switcher */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <UserCheck className="w-5 h-5 text-[#307082]" />
          <div>
            <h3 className="font-serif font-bold text-base text-[#12212E]">Presentation Role Switcher</h3>
            <p className="text-xs text-slate-500">
              Current active user: <span className="font-bold text-[#12212E]">{currentUser?.name || 'Guest'}</span> ({currentUser?.role || 'public'})
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          {users.slice(0, 4).map((u) => {
            const isCurrent = currentUser?.id === u.id;
            return (
              <button
                key={u.id}
                onClick={() => handleRoleSwitch(u)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isCurrent
                    ? 'bg-[#12212E] text-white border-[#EA9940] shadow-md'
                    : 'bg-slate-50 text-[#12212E] border-slate-200 hover:border-[#307082]'
                }`}
              >
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-[#EA9940] text-[#12212E] inline-block mb-2">
                  {u.role}
                </span>
                <p className="font-bold font-serif text-sm truncate">{u.name}</p>
                <p className={`text-[11px] truncate ${isCurrent ? 'text-slate-300' : 'text-slate-500'}`}>
                  {u.institution}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* LocalStorage Persistence Stats & Reset */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <Database className="w-5 h-5 text-[#EA9940]" />
            <h3 className="font-serif font-bold text-base text-[#12212E]">LocalStorage State</h3>
          </div>
          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg">
              <span className="text-slate-600">Stored Artifacts</span>
              <span className="font-mono font-bold text-[#12212E]">{artifacts.length}</span>
            </div>
            <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg">
              <span className="text-slate-600">Registered Museums</span>
              <span className="font-mono font-bold text-[#12212E]">{museums.length}</span>
            </div>
            <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg">
              <span className="text-slate-600">Registered User Accounts</span>
              <span className="font-mono font-bold text-[#12212E]">{users.length}</span>
            </div>
            <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg">
              <span className="text-slate-600">Active Notifications</span>
              <span className="font-mono font-bold text-[#12212E]">{notifications.length}</span>
            </div>
          </div>
        </div>

        <div className="bg-[#12212E] text-white rounded-2xl border border-slate-800 shadow-sm p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#EA9940]">
              <Shield className="w-5 h-5" />
              <h3 className="font-serif font-bold text-base text-white">Reset Registry Data</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Restore all artifacts, newly minted GAI passports, verification approvals, researcher references, and notifications back to the original registry dataset.
            </p>
          </div>

          <button
            onClick={handleResetRegistry}
            className="w-full py-3 px-4 rounded-xl bg-[#EA9940] text-[#12212E] font-bold text-xs uppercase tracking-wider hover:bg-[#e0892d] transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Reset Registry Data</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
