import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FolderKanban, PlusCircle, ShieldCheck, Clock, Cpu, X, Save } from 'lucide-react';
import { getArtifacts, getCurrentUser, updateArtifact, addNotification } from '../utils/storage';
import ArtifactTable from '../components/ArtifactTable';
import StatsCard from '../components/StatsCard';
import { useToast } from '../utils/toast';

export const MyArtifacts = () => {
  const currentUser = getCurrentUser();
  const { showToast } = useToast();

  const [artifacts, setArtifacts] = useState(() => getArtifacts());
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingArtifact, setEditingArtifact] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '',
    description: '',
    institution: '',
    currentLocation: '',
    period: '',
    material: '',
    dynasty: ''
  });

  const totalCount = artifacts.length;
  const verifiedCount = artifacts.filter((a) => a.verificationStatus === 'Verified').length;
  const pendingCount = artifacts.filter((a) => a.verificationStatus !== 'Verified').length;
  const aiMatchedCount = artifacts.filter((a) => (a.aiSimilarity?.score || 0) > 90).length;

  const filteredArtifacts = artifacts.filter((a) => {
    const matchesStatus =
      statusFilter === 'All' ||
      (statusFilter === 'Verified' && a.verificationStatus === 'Verified') ||
      (statusFilter === 'Pending' && a.verificationStatus !== 'Verified' && a.verificationStatus !== 'Flagged') ||
      (statusFilter === 'Flagged' && a.verificationStatus === 'Flagged');
    const q = searchQuery.trim().toLowerCase();
    const cust = (a.institution || a.museum || '').toLowerCase();
    const matchesQuery =
      !q ||
      a.name.toLowerCase().includes(q) ||
      (a.tamilName || '').toLowerCase().includes(q) ||
      a.gai.toLowerCase().includes(q) ||
      cust.includes(q);
    return matchesStatus && matchesQuery;
  });

  const openEditModal = (artifact) => {
    setEditingArtifact(artifact);
    setEditForm({
      name: artifact.name || '',
      description: artifact.description || '',
      institution: artifact.institution || artifact.museum || '',
      currentLocation: artifact.currentLocation || '',
      period: artifact.period || '',
      material: artifact.material || '',
      dynasty: artifact.dynasty || ''
    });
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (!editForm.name.trim() || !editForm.institution.trim()) {
      showToast('Artifact Name and Holding Institution cannot be empty.', 'error', 'Validation Error');
      return;
    }
    updateArtifact(editingArtifact.id, {
      ...editForm,
      museum: editForm.institution
    });
    setArtifacts(getArtifacts());
    addNotification({
      title: 'Metadata Updated',
      message: `${editingArtifact.gai} (${editForm.name}) metadata updated by ${currentUser?.name || 'Curator'}.`,
      type: 'verification',
      link: `/artifact/${editingArtifact.id}`
    });
    showToast(`Updated metadata for ${editingArtifact.gai}`, 'success', 'Changes Saved');
    setEditingArtifact(null);
  };

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto animate-fade-in">
      {/* Page Title & Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#307082] bg-[#307082]/10 px-3 py-1 rounded-full">
            Curator Collection Portal
          </span>
          <h1 className="text-3xl font-serif font-bold text-[#12212E] mt-2 flex items-center gap-2">
            <FolderKanban className="w-8 h-8 text-[#EA9940]" />
            My Artifacts
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Registered collection portfolio for{' '}
            <span className="font-semibold text-[#12212E]">{currentUser?.institution || 'Institutional Registry'}</span>.
          </p>
        </div>

        <Link
          to="/register"
          className="px-5 py-3 rounded-xl bg-[#EA9940] text-[#12212E] font-bold text-xs hover:bg-[#e0892d] transition-colors shadow-md flex items-center gap-2 self-start sm:self-auto"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Register New Artifact</span>
        </Link>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="My Artifacts" value={totalCount} change="Registry Portfolio" icon={FolderKanban} color="navy" />
        <StatsCard title="Verified" value={verifiedCount} change="Immutable GAI" icon={ShieldCheck} color="emerald" />
        <StatsCard title="Pending" value={pendingCount} change="Review Queue" icon={Clock} color="gold" />
        <StatsCard title="AI Matched" value={aiMatchedCount} change="High Confidence" icon={Cpu} color="teal" />
      </div>

      {/* Table */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-serif font-bold text-lg text-[#12212E]">Institutional Collection Registry</h3>
            <span className="text-xs text-slate-500 font-mono">
              Showing {filteredArtifacts.length} of {totalCount} Items Logged
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by name, GAI..."
              className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 focus:border-[#307082] outline-none"
            />
            <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200">
              {['All', 'Verified', 'Pending', 'Flagged'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setStatusFilter(tab)}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-colors ${
                    statusFilter === tab
                      ? 'bg-[#12212E] text-[#EA9940]'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <ArtifactTable artifacts={filteredArtifacts} onEdit={openEditModal} />
      </div>

      {/* Edit Metadata Modal */}
      {editingArtifact && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-5 border border-slate-200 shadow-2xl my-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#EA9940] bg-[#12212E] px-2 py-0.5 rounded">
                  {editingArtifact.gai}
                </span>
                <h3 className="font-serif font-bold text-lg text-[#12212E] mt-1">
                  Update Artifact Metadata
                </h3>
              </div>
              <button
                onClick={() => setEditingArtifact(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Artifact Name *</label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Description</label>
                <textarea
                  rows={3}
                  value={editForm.description}
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Institution / Museum *</label>
                  <input
                    type="text"
                    value={editForm.institution}
                    onChange={(e) => setEditForm({ ...editForm, institution: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Current Location</label>
                  <input
                    type="text"
                    value={editForm.currentLocation}
                    onChange={(e) => setEditForm({ ...editForm, currentLocation: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Historical Period</label>
                  <input
                    type="text"
                    value={editForm.period}
                    onChange={(e) => setEditForm({ ...editForm, period: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Material</label>
                  <input
                    type="text"
                    value={editForm.material}
                    onChange={(e) => setEditForm({ ...editForm, material: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingArtifact(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#12212E] text-[#EA9940] font-bold hover:bg-[#307082] hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Metadata</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyArtifacts;
