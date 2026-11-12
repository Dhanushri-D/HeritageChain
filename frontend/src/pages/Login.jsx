import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Key, Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import { getUsers, setCurrentUser } from '../utils/storage';
import { useToast } from '../utils/toast';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { showToast } = useToast();

  const roleProfiles = getUsers().slice(0, 4);

  const handleQuickLogin = (user) => {
    setCurrentUser(user);
    showToast(`Signed in as ${user.name} (${user.role.toUpperCase()})`, 'success', 'Sign In Successful');
    navigate('/dashboard');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !trimmedEmail.includes('@')) {
      const msg = 'Please enter a valid institutional email address or select a 1-Click Role.';
      setError(msg);
      showToast(msg, 'error', 'Invalid Login');
      return;
    }

    if (!password || password.length < 4) {
      const msg = 'Please enter a password (at least 4 characters).';
      setError(msg);
      showToast(msg, 'error', 'Invalid Credentials');
      return;
    }

    const users = getUsers();
    const matchedUser = users.find((u) => u.email.toLowerCase() === trimmedEmail.toLowerCase());

    if (matchedUser) {
      setCurrentUser(matchedUser);
      showToast(`Welcome back, ${matchedUser.name}`, 'success', 'Authenticated');
      navigate('/dashboard');
    } else {
      const msg = 'No matching account found. Select one of the 1-Click Role profiles above.';
      setError(msg);
      showToast(msg, 'warning', 'Account Not Found');
    }
  };

  return (
    <div className="min-h-screen bg-[#12212E] flex items-center justify-center p-4 relative overflow-hidden text-white">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#307082]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#EA9940]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-lg w-full space-y-6 relative z-10 my-8">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-xs text-slate-400 hover:text-[#EA9940] flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <Link to="/explore" className="text-xs text-[#6CA3A2] hover:text-white transition-colors">
            Public Explorer →
          </Link>
        </div>

        {/* Logo Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#EA9940] to-[#307082] flex items-center justify-center text-[#12212E] shadow-xl">
            <Shield className="w-8 h-8 fill-current" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-white tracking-tight">
            Heritage<span className="text-[#EA9940]">Chain</span>
          </h1>
          <p className="text-xs text-slate-400">Decentralized Artifact Registry • Institutional Access Portal</p>
        </div>

        {/* Card */}
        <div className="bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-2xl space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-lg font-bold text-white font-serif">Institutional Authentication</h2>
            <p className="text-xs text-slate-400">Select a role below for instant workspace access</p>
          </div>

          {/* Quick Role Access Buttons */}
          <div className="space-y-2.5">
            <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#EA9940] block">
              1-Click Role Access
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {roleProfiles.map((user) => (
                <button
                  key={user.id}
                  type="button"
                  onClick={() => handleQuickLogin(user)}
                  className="p-3 rounded-xl bg-slate-800/80 hover:bg-[#307082] border border-slate-700 hover:border-[#EA9940]/40 text-left transition-all group"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-black/40 text-[#EA9940]">
                      {user.role}
                    </span>
                    <span className="text-[10px] text-slate-400 group-hover:text-white font-mono">
                      1-Click →
                    </span>
                  </div>
                  <span className="font-bold text-xs text-white block truncate">{user.name}</span>
                  <span className="text-[10px] text-slate-400 group-hover:text-slate-200 block truncate">
                    {user.email}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center my-4">
            <div className="border-t border-slate-800 w-full"></div>
            <span className="bg-slate-900 px-3 text-[10px] text-slate-500 uppercase tracking-widest font-mono shrink-0">
              Or Sign In With Email
            </span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/30 text-rose-300 text-xs">
                {error}
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Institutional Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="curator@nationalmuseum.gov.in"
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-black/50 text-white text-xs border border-slate-700 focus:border-[#EA9940] focus:ring-1 focus:ring-[#EA9940] outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Password</label>
              <div className="relative">
                <Key className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-black/50 text-white text-xs border border-slate-700 focus:border-[#EA9940] focus:ring-1 focus:ring-[#EA9940] outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-xs bg-[#EA9940] text-[#12212E] hover:bg-[#e0892d] transition-colors shadow-lg flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <span>Sign In To Registry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
