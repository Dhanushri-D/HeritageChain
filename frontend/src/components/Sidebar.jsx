import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Library,
  Compass,
  PlusCircle,
  FolderKanban,
  GitCommit,
  Clock,
  Map,
  Network,
  Cpu,
  ShieldCheck,
  Users,
  Building2,
  Info,
  Shield,
  Settings
} from 'lucide-react';
import { getCurrentUser, AUTH_CHANGE_EVENT } from '../utils/storage';

export const Sidebar = ({ isOpen, onClose }) => {
  const [currentUser, setCurrentUserState] = useState(() => getCurrentUser());
  const location = useLocation();

  useEffect(() => {
    const syncAuth = () => setCurrentUserState(getCurrentUser());
    window.addEventListener(AUTH_CHANGE_EVENT, syncAuth);
    return () => window.removeEventListener(AUTH_CHANGE_EVENT, syncAuth);
  }, []);

  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard', matchPrefix: '/dashboard', roles: ['admin', 'curator', 'researcher', 'public'] },
    { label: 'Tamil Heritage Collections', icon: Library, path: '/collections', matchPrefix: '/collections', roles: ['admin', 'curator', 'researcher', 'public'] },
    { label: 'Explore Artifacts', icon: Compass, path: '/explore', matchPrefix: '/explore', roles: ['admin', 'curator', 'researcher', 'public'] },
    { label: 'Register Artifact', icon: PlusCircle, path: '/register', matchPrefix: '/register', roles: ['admin', 'curator'] },
    { label: 'My Artifacts', icon: FolderKanban, path: '/my-artifacts', matchPrefix: '/my-artifacts', roles: ['admin', 'curator'] },
    { label: 'Provenance', icon: GitCommit, path: '/provenance/arch-001', matchPrefix: '/provenance', roles: ['admin', 'curator', 'researcher', 'public'] },
    { label: 'Timeline', icon: Clock, path: '/timeline', matchPrefix: '/timeline', roles: ['admin', 'curator', 'researcher', 'public'] },
    { label: 'Journey Map', icon: Map, path: '/journey', matchPrefix: '/journey', roles: ['admin', 'curator', 'researcher', 'public'] },
    { label: 'Knowledge Graph', icon: Network, path: '/graph/arch-001', matchPrefix: '/graph', roles: ['admin', 'curator', 'researcher', 'public'] },
    { label: 'AI Matching', icon: Cpu, path: '/ai-matching', matchPrefix: '/ai-matching', roles: ['admin', 'curator', 'researcher'] },
    { label: 'Verification', icon: ShieldCheck, path: '/verification', matchPrefix: '/verification', roles: ['admin'] },
    { label: 'Institutions & Museums', icon: Building2, path: '/museums', matchPrefix: '/museums', roles: ['admin', 'curator', 'researcher', 'public'] },
    { label: 'Users', icon: Users, path: '/users', matchPrefix: '/users', roles: ['admin'] },
    { label: 'Settings', icon: Settings, path: '/settings', matchPrefix: '/settings', roles: ['admin', 'curator', 'researcher', 'public'] },
    { label: 'About HeritageChain', icon: Info, path: '/about', matchPrefix: '/about', roles: ['admin', 'curator', 'researcher', 'public'] }
  ];

  const userRole = currentUser?.role || 'public';
  const visibleNav = navItems.filter((item) => item.roles.includes(userRole));

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-30 lg:hidden"
        />
      )}

      <aside
        className={`fixed lg:static top-16 bottom-0 left-0 w-64 bg-[#12212E] border-r border-slate-800/80 text-white z-30 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } flex flex-col justify-between overflow-y-auto shrink-0`}
      >
        <div className="p-4 space-y-6">
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#6CA3A2]">
                Active Role
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <div className="font-bold text-sm text-[#ECE7DC] font-serif capitalize flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#EA9940]" />
              {currentUser?.roleLabel || 'Public Explorer'}
            </div>
            <p className="text-[11px] text-slate-400 truncate">
              {currentUser?.institution || 'Public Heritage Access'}
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 px-3 block mb-2">
              Tamil Heritage Registry
            </span>
            {visibleNav.map((item) => {
              const Icon = item.icon;
              const isRouteActive = location.pathname.startsWith(item.matchPrefix);
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={() =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      isRouteActive
                        ? 'bg-gradient-to-r from-[#307082] to-[#6CA3A2] text-white shadow-md font-bold'
                        : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                    }`
                  }
                >
                  <Icon className="w-4 h-4 text-[#EA9940] shrink-0" />
                  <span className="truncate">{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </div>

        <div className="p-4 border-t border-slate-800/80 bg-slate-900/40 text-[11px] text-slate-400 space-y-1 text-center">
          <p className="font-mono text-[#6CA3A2]">HeritageChain • Tamil Registry</p>
          <p className="text-[10px]">6 Collections • GAI Provenance</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
