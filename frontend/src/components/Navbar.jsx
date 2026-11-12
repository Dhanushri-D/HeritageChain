import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, Menu, X, Shield, User, LogOut, RefreshCw, Settings, LogIn } from 'lucide-react';
import {
  getCurrentUser,
  logoutUser,
  resetDemoData,
  getNotifications,
  AUTH_CHANGE_EVENT,
  NOTIF_CHANGE_EVENT
} from '../utils/storage';
import NotificationPanel from './NotificationPanel';
import SearchBar from './SearchBar';
import { useToast } from '../utils/toast';

export const Navbar = ({ toggleSidebar, sidebarOpen }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [notifications, setNotifications] = useState(() => getNotifications());
  const [currentUser, setCurrentUserState] = useState(() => getCurrentUser());
  const [avatarFailed, setAvatarFailed] = useState(false);

  const notifRef = useRef(null);
  const profileRef = useRef(null);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const navigate = useNavigate();
  const { showToast } = useToast();

  const refreshNotifications = () => {
    setNotifications(getNotifications());
  };

  useEffect(() => {
    const syncAuth = () => {
      setCurrentUserState(getCurrentUser());
      setAvatarFailed(false);
    };
    const syncNotifs = () => setNotifications(getNotifications());

    window.addEventListener(AUTH_CHANGE_EVENT, syncAuth);
    window.addEventListener(NOTIF_CHANGE_EVENT, syncNotifs);
    return () => {
      window.removeEventListener(AUTH_CHANGE_EVENT, syncAuth);
      window.removeEventListener(NOTIF_CHANGE_EVENT, syncNotifs);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logoutUser();
    setShowProfileMenu(false);
    showToast('Signed out of your session.', 'info', 'Session Ended');
    navigate('/login');
  };

  const handleReset = () => {
    resetDemoData();
    setShowProfileMenu(false);
    showToast('Registry artifacts, users, and ledger restored to defaults.', 'success', 'Registry Reset');
    setTimeout(() => window.location.reload(), 600);
  };

  const roleColors = {
    admin: 'bg-purple-900/40 text-purple-300 border-purple-500/30',
    curator: 'bg-[#307082]/40 text-[#6CA3A2] border-[#307082]/50',
    researcher: 'bg-emerald-900/40 text-emerald-300 border-emerald-500/30',
    public: 'bg-slate-800 text-slate-300 border-slate-700'
  };

  return (
    <header className="bg-[#12212E] text-white border-b border-slate-800 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left Logo & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 lg:hidden transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#EA9940] to-[#307082] flex items-center justify-center text-[#12212E] shadow-md group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="font-serif font-bold text-lg text-white tracking-tight flex items-center gap-1">
                Heritage<span className="text-[#EA9940]">Chain</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#6CA3A2] block font-mono">
                Decentralized Registry
              </span>
            </div>
          </Link>
        </div>

        {/* Global live artifact search */}
        <div className="hidden md:flex flex-1 max-w-md mx-6">
          <SearchBar
            variant="dark"
            placeholder="Search artifact name, GAI, museum, dynasty..."
          />
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleReset}
            title="Reset Registry Data"
            className="p-2 rounded-xl text-slate-400 hover:text-[#EA9940] hover:bg-slate-800 transition-colors hidden sm:flex items-center gap-1.5 text-xs"
          >
            <RefreshCw className="w-4 h-4" />
            <span className="hidden xl:inline text-[11px]">Reset Data</span>
          </button>

          {/* Role Pill */}
          <span
            className={`hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${
              roleColors[currentUser?.role] || roleColors.public
            }`}
          >
            {currentUser?.role || 'Public Guest'}
          </span>

          {/* Notifications Dropdown */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => {
                refreshNotifications();
                setShowNotifications((prev) => !prev);
                setShowProfileMenu(false);
              }}
              aria-label="Toggle notifications"
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors relative"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#EA9940] text-[#12212E] font-bold text-[10px] flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 z-50">
                <NotificationPanel
                  onClose={() => setShowNotifications(false)}
                  onUpdate={refreshNotifications}
                />
              </div>
            )}
          </div>

          {/* User Profile or Login */}
          {currentUser ? (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => {
                  setShowProfileMenu((prev) => !prev);
                  setShowNotifications(false);
                }}
                className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-800 transition-colors"
              >
                {currentUser.avatar && !avatarFailed ? (
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    onError={() => setAvatarFailed(true)}
                    className="w-8 h-8 rounded-lg object-cover border border-[#EA9940]/40 bg-slate-800"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-lg border border-[#EA9940]/40 bg-[#307082] text-white font-bold text-xs flex items-center justify-center">
                    {currentUser.name?.charAt(0) || 'U'}
                  </div>
                )}
                <span className="hidden md:block text-xs font-semibold text-white truncate max-w-[120px]">
                  {currentUser.name}
                </span>
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-60 bg-white text-slate-900 rounded-2xl border border-slate-200 shadow-2xl p-2 z-50 animate-fade-in text-xs">
                  <div className="p-3 border-b border-slate-100 bg-slate-50 rounded-xl mb-1">
                    <p className="font-bold text-[#12212E]">{currentUser.name}</p>
                    <p className="text-slate-500 truncate text-[11px]">{currentUser.email}</p>
                    <p className="text-[10px] font-mono text-[#307082] mt-1 font-semibold">
                      {currentUser.institution}
                    </p>
                  </div>

                  <Link
                    to="/dashboard"
                    onClick={() => setShowProfileMenu(false)}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 font-medium flex items-center gap-2 text-slate-700"
                  >
                    <User className="w-4 h-4 text-[#307082]" />
                    Dashboard Overview
                  </Link>

                  <Link
                    to="/settings"
                    onClick={() => setShowProfileMenu(false)}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 font-medium flex items-center gap-2 text-slate-700"
                  >
                    <Settings className="w-4 h-4 text-[#307082]" />
                    Role &amp; Settings
                  </Link>

                  <button
                    onClick={handleReset}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 font-medium flex items-center gap-2 text-slate-700 sm:hidden"
                  >
                    <RefreshCw className="w-4 h-4 text-[#EA9940]" />
                    Reset Registry Data
                  </button>

                  <div className="border-t border-slate-100 my-1"></div>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-rose-50 text-rose-600 font-medium flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="px-3.5 py-2 rounded-xl bg-[#EA9940] text-[#12212E] font-bold text-xs hover:bg-[#e0892d] transition-colors flex items-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Sign In</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
