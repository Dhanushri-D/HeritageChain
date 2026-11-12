import React, { useState } from 'react';
import { Users as UsersIcon, CheckCircle2, PauseCircle } from 'lucide-react';
import { getUsers, updateUserStatus } from '../utils/storage';
import { useToast } from '../utils/toast';

export const Users = () => {
  const [usersList, setUsersList] = useState(() => getUsers());
  const [roleFilter, setRoleFilter] = useState('all');
  const { showToast } = useToast();

  const roles = ['all', 'admin', 'curator', 'researcher', 'public'];
  const filteredUsers =
    roleFilter === 'all' ? usersList : usersList.filter((u) => u.role === roleFilter);

  const handleToggleUserStatus = (user) => {
    const nextStatus = user.status === 'Active' ? 'Suspended' : 'Active';
    setUsersList(updateUserStatus(user.id, nextStatus));
    showToast(`${user.name} status set to ${nextStatus}.`, 'info', 'User Registry Updated');
  };

  const roleBadgeClass = {
    admin: 'bg-purple-900 text-purple-200 border-purple-500/40',
    curator: 'bg-[#12212E] text-[#EA9940] border-[#EA9940]/40',
    researcher: 'bg-emerald-900 text-emerald-200 border-emerald-500/40',
    public: 'bg-slate-700 text-slate-200 border-slate-500/40'
  };

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#307082] bg-[#307082]/10 px-3 py-1 rounded-full">
            Identity &amp; Role Access Protocol
          </span>
          <h1 className="text-3xl font-serif font-bold text-[#12212E] mt-2 flex items-center gap-2">
            <UsersIcon className="w-8 h-8 text-[#EA9940]" />
            User Management
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Registered institutional curators, researchers, administrators, and public registry explorers.
          </p>
        </div>

        {/* Role Filter Pills */}
        <div className="flex flex-wrap gap-1.5 bg-white p-1.5 rounded-xl border border-slate-200 text-xs">
          {roles.map((r) => (
            <button
              key={r}
              onClick={() => setRoleFilter(r)}
              className={`px-3 py-1.5 rounded-lg font-semibold capitalize transition-colors ${
                roleFilter === r ? 'bg-[#12212E] text-[#EA9940]' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#12212E] text-white uppercase font-semibold">
                <th className="p-3.5">Name</th>
                <th className="p-3.5">Role</th>
                <th className="p-3.5">Institution</th>
                <th className="p-3.5">Artifacts</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredUsers.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50">
                  <td className="p-3.5">
                    <div className="flex items-center gap-3 font-bold text-[#12212E]">
                      <img
                        src={u.avatar}
                        alt={u.name}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                        className="w-9 h-9 rounded-full object-cover border border-slate-200 bg-[#307082] shrink-0"
                      />
                      <div>
                        <p className="font-serif text-sm">{u.name}</p>
                        <p className="text-[11px] text-slate-500 font-sans font-normal">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3.5">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold font-mono uppercase border ${
                        roleBadgeClass[u.role] || roleBadgeClass.public
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td className="p-3.5 text-slate-700 font-medium">{u.institution}</td>
                  <td className="p-3.5 font-bold font-mono text-[#307082]">{u.artifactsCount || 0}</td>
                  <td className="p-3.5">
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-bold border flex items-center gap-1 w-max ${
                        u.status === 'Active'
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border-amber-200'
                      }`}
                    >
                      {u.status === 'Active' ? (
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      ) : (
                        <PauseCircle className="w-3 h-3 text-amber-600" />
                      )}
                      {u.status}
                    </span>
                  </td>
                  <td className="p-3.5 text-right">
                    <button
                      onClick={() => handleToggleUserStatus(u)}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#12212E] hover:text-[#EA9940] font-semibold transition-colors"
                    >
                      {u.status === 'Active' ? 'Suspend' : 'Activate'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
