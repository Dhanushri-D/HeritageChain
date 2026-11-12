import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShieldAlert, Lock, ArrowLeft, Sparkles } from 'lucide-react';
import { getCurrentUser, getUsers, setCurrentUser, AUTH_CHANGE_EVENT } from '../utils/storage';
import { useToast } from '../utils/toast';

export const ProtectedRoute = ({ allowedRoles = [], children }) => {
  const [currentUser, setCurrentUserState] = useState(() => getCurrentUser());
  const navigate = useNavigate();
  const { showToast } = useToast();

  useEffect(() => {
    const syncAuth = () => setCurrentUserState(getCurrentUser());
    window.addEventListener(AUTH_CHANGE_EVENT, syncAuth);
    return () => window.removeEventListener(AUTH_CHANGE_EVENT, syncAuth);
  }, []);

  if (!currentUser) {
    return (
      <div className="p-6 sm:p-12 max-w-lg mx-auto my-12 bg-white rounded-3xl border border-slate-200 shadow-xl text-center space-y-5 animate-fade-in">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-[#12212E] text-[#EA9940] flex items-center justify-center shadow-md">
          <Lock className="w-7 h-7" />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-serif font-bold text-[#12212E]">Authentication Required</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Please sign in with an authorized institutional role on the login portal to access this workspace.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            to="/login"
            className="px-6 py-2.5 rounded-xl bg-[#EA9940] text-[#12212E] font-bold text-xs hover:bg-[#e0892d] transition-colors shadow-sm"
          >
            Go to Sign In
          </Link>
          <Link
            to="/explore"
            className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200 transition-colors"
          >
            Browse Public Explorer
          </Link>
        </div>
      </div>
    );
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(currentUser.role)) {
    const users = getUsers();
    const suggestedUser = users.find((u) => allowedRoles.includes(u.role));

    const handleQuickSwitch = () => {
      if (suggestedUser) {
        setCurrentUser(suggestedUser);
        setCurrentUserState(suggestedUser);
        showToast(`Switched active role to ${suggestedUser.roleLabel}`, 'success', 'Role Updated');
      }
    };

    return (
      <div className="p-6 sm:p-12 max-w-xl mx-auto my-10 bg-white rounded-3xl border border-amber-200 shadow-xl text-center space-y-5 animate-fade-in">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-100 text-[#EA9940] border border-amber-300 flex items-center justify-center">
          <ShieldAlert className="w-7 h-7" />
        </div>
        <div className="space-y-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#307082] bg-[#307082]/10 px-3 py-1 rounded-full">
            Role Access Guard
          </span>
          <h2 className="text-2xl font-serif font-bold text-[#12212E]">Restricted Role Workspace</h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Your current active role is <span className="font-bold text-[#12212E] uppercase">{currentUser.role}</span>.
            This page requires <span className="font-bold text-[#307082] uppercase">{allowedRoles.join(' or ')}</span> permissions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          {suggestedUser && (
            <button
              onClick={handleQuickSwitch}
              className="px-5 py-2.5 rounded-xl bg-[#12212E] text-[#EA9940] font-bold text-xs hover:bg-[#307082] hover:text-white transition-colors flex items-center gap-1.5 shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Switch to {suggestedUser.role.toUpperCase()}</span>
            </button>
          )}
          <button
            onClick={() => navigate('/dashboard')}
            className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs hover:bg-slate-200 transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
