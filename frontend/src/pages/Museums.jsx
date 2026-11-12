import React, { useMemo, useState } from 'react';
import { Building2, MapPin, ShieldCheck, LayoutGrid, Table2, Plus, X, ExternalLink } from 'lucide-react';
import { getMuseums, getArtifacts, getCurrentUser, addMuseum, updateMuseumStatus } from '../utils/storage';
import { useToast } from '../utils/toast';

const INSTITUTION_MATCH_TOKENS = {
  'inst-001': ['tnsda', 'state department of archaeology'],
  'inst-002': ['government museum, chennai', 'government museum chennai', 'egmore'],
  'inst-003': ['archaeological survey of india', 'asi'],
  'inst-004': ['tamil virtual academy', 'tva'],
  'inst-005': ['central institute of classical tamil', 'cict'],
  'inst-006': ['sarasvati mahal', 'saraswathi mahal'],
  'inst-007': ['poompuhar', 'tnhdc', 'handicrafts'],
  'inst-008': ['ip india', 'gi registry', 'geographical indications'],
  'inst-009': ['keezhadi'],
  'inst-010': ['project madurai']
};

export const Museums = () => {
  const [museums, setMuseums] = useState(() => getMuseums());
  const allArtifacts = useMemo(() => getArtifacts(), []);
  const [viewMode, setViewMode] = useState('table');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMuseum, setNewMuseum] = useState({ name: '', city: '', country: 'India', established: '1900', type: 'Regional Heritage Museum' });

  const enrichedMuseums = useMemo(() => {
    return museums.map((mus) => {
      const tokens = INSTITUTION_MATCH_TOKENS[mus.id] || [
        mus.name?.toLowerCase(),
        mus.shortName?.toLowerCase()
      ].filter(Boolean);

      const linked = allArtifacts.filter((art) => {
        const hay = `${art.institution || ''} ${art.museum || ''} ${art.sourceName || ''}`.toLowerCase();
        return tokens.some((tok) => tok && hay.includes(tok));
      });

      const verifiedCount = linked.filter((a) => a.verificationStatus === 'Verified').length;
      const pendingCount = linked.length - verifiedCount;

      return {
        ...mus,
        artifactsCount: linked.length > 0 ? linked.length : mus.artifacts || 0,
        verifiedCount: linked.length > 0 ? verifiedCount : mus.verified || 0,
        pendingCount: linked.length > 0 ? pendingCount : mus.pending || 0
      };
    });
  }, [museums, allArtifacts]);

  const currentUser = getCurrentUser();
  const isAdmin = currentUser?.role === 'admin';
  const { showToast } = useToast();

  const handleToggleStatus = (mus) => {
    const nextStatus = mus.status === 'Verified Partner' ? 'Pending Audit' : 'Verified Partner';
    setMuseums(updateMuseumStatus(mus.id, nextStatus));
    showToast(`${mus.name} marked as ${nextStatus}.`, 'info', 'Institution Status Updated');
  };

  const handleAddMuseum = (e) => {
    e.preventDefault();
    if (!newMuseum.name.trim() || !newMuseum.country.trim()) {
      showToast('Please enter Institution Name and Country.', 'warning', 'Incomplete Form');
      return;
    }
    addMuseum({
      name: newMuseum.name.trim(),
      city: newMuseum.city.trim() || 'Chennai',
      country: newMuseum.country.trim(),
      type: newMuseum.type.trim() || 'Heritage Repository',
      established: parseInt(newMuseum.established, 10) || 1900
    });
    setMuseums(getMuseums());
    setNewMuseum({ name: '', city: '', country: 'India', established: '1900', type: 'Regional Heritage Museum' });
    setShowAddModal(false);
    showToast(`${newMuseum.name} registered in Institutional Network.`, 'success', 'Institution Added');
  };

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#307082] bg-[#307082]/10 px-3 py-1 rounded-full">
            Custodians, Archives &amp; Statutory Sources
          </span>
          <h1 className="text-3xl font-serif font-bold text-[#12212E] mt-2 flex items-center gap-2">
            <Building2 className="w-8 h-8 text-[#EA9940]" />
            Institutions, Museums &amp; Archives
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Participating Tamil Nadu archaeological agencies, museums, manuscript libraries, craft boards, and statutory registries.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-white border border-slate-200 rounded-xl p-1 flex items-center gap-1 text-xs">
            <button
              onClick={() => setViewMode('table')}
              className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1 font-semibold transition-colors ${
                viewMode === 'table' ? 'bg-[#12212E] text-[#EA9940]' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Table2 className="w-3.5 h-3.5" />
              <span>Table</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1 font-semibold transition-colors ${
                viewMode === 'grid' ? 'bg-[#12212E] text-[#EA9940]' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Cards</span>
            </button>
          </div>

          {isAdmin && (
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2.5 rounded-xl bg-[#EA9940] text-[#12212E] font-bold text-xs hover:bg-[#e0892d] transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Add Institution</span>
            </button>
          )}
        </div>
      </div>

      {/* Table View */}
      {viewMode === 'table' ? (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#12212E] text-white uppercase font-semibold">
                  <th className="p-3.5">Institution &amp; Focus</th>
                  <th className="p-3.5">Region</th>
                  <th className="p-3.5">Records</th>
                  <th className="p-3.5">Verified</th>
                  <th className="p-3.5">Pending</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5 text-right">Reference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {enrichedMuseums.map((mus) => (
                  <tr key={mus.id} className="hover:bg-slate-50">
                    <td className="p-3.5 max-w-sm">
                      <div className="flex items-start gap-2.5">
                        <span className="text-xl shrink-0">{mus.logo || '🏛️'}</span>
                        <div>
                          <p className="font-serif font-bold text-sm text-[#12212E]">{mus.name}</p>
                          <p className="text-[11px] text-slate-500">
                            {mus.type ? `${mus.type} • ` : ''}{mus.city} • Est. {mus.established}
                          </p>
                          {mus.focus && (
                            <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{mus.focus}</p>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="p-3.5 text-slate-700 font-medium">{mus.country}</td>
                    <td className="p-3.5 font-mono font-bold text-[#12212E]">{mus.artifactsCount}</td>
                    <td className="p-3.5 font-mono font-bold text-emerald-700">{mus.verifiedCount}</td>
                    <td className="p-3.5 font-mono font-bold text-amber-700">{mus.pendingCount}</td>
                    <td className="p-3.5">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[11px] font-bold border inline-flex items-center gap-1 whitespace-nowrap ${
                          mus.status === 'Verified Partner'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}
                      >
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {mus.status}
                      </span>
                    </td>
                    <td className="p-3.5 text-right space-x-2 whitespace-nowrap">
                      {mus.officialURL && (
                        <a
                          href={mus.officialURL}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#307082]/10 text-[#307082] hover:bg-[#307082] hover:text-white font-semibold transition-colors"
                        >
                          <span>Portal</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {isAdmin && (
                        <button
                          onClick={() => handleToggleStatus(mus)}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-[#12212E] hover:text-[#EA9940] font-semibold transition-colors"
                        >
                          Toggle Status
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrichedMuseums.map((mus) => (
            <div
              key={mus.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{mus.logo || '🏛️'}</span>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    {mus.status}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-lg text-[#12212E]">{mus.name}</h3>
                  {mus.type && (
                    <span className="inline-block text-[10px] font-mono font-bold text-[#307082] uppercase mt-0.5">
                      {mus.type}
                    </span>
                  )}
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#EA9940]" />
                    {mus.city}, {mus.country} • Est. {mus.established}
                  </p>
                  {mus.focus && (
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">{mus.focus}</p>
                  )}
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-slate-50 p-2 rounded-xl">
                    <span className="text-[10px] text-slate-400 block font-semibold">Records</span>
                    <span className="font-bold text-[#12212E]">{mus.artifactsCount}</span>
                  </div>
                  <div className="bg-emerald-50 p-2 rounded-xl">
                    <span className="text-[10px] text-emerald-600 block font-semibold">Verified</span>
                    <span className="font-bold text-emerald-700">{mus.verifiedCount}</span>
                  </div>
                  <div className="bg-amber-50 p-2 rounded-xl">
                    <span className="text-[10px] text-amber-600 block font-semibold">Pending</span>
                    <span className="font-bold text-amber-700">{mus.pendingCount}</span>
                  </div>
                </div>

                {mus.officialURL && (
                  <a
                    href={mus.officialURL}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-[#12212E] text-[#307082] hover:text-[#EA9940] border border-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Visit Official Source Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Partner Institution Modal (Admin) */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-serif font-bold text-lg text-[#12212E]">Onboard Partner Institution</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleAddMuseum} className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Institution / Archive Name *</label>
                <input
                  type="text"
                  value={newMuseum.name}
                  onChange={(e) => setNewMuseum({ ...newMuseum, name: e.target.value })}
                  placeholder="e.g. Madurai Thirumalai Nayakkar Museum"
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-300 outline-none focus:border-[#307082]"
                />
              </div>
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Institution Type</label>
                <input
                  type="text"
                  value={newMuseum.type}
                  onChange={(e) => setNewMuseum({ ...newMuseum, type: e.target.value })}
                  placeholder="e.g. State Site Museum"
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-300 outline-none focus:border-[#307082]"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">City</label>
                  <input
                    type="text"
                    value={newMuseum.city}
                    onChange={(e) => setNewMuseum({ ...newMuseum, city: e.target.value })}
                    placeholder="Madurai"
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-300 outline-none focus:border-[#307082]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Country *</label>
                  <input
                    type="text"
                    value={newMuseum.country}
                    onChange={(e) => setNewMuseum({ ...newMuseum, country: e.target.value })}
                    placeholder="India"
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-300 outline-none focus:border-[#307082]"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#12212E] text-[#EA9940] font-bold hover:bg-[#307082] hover:text-white"
                >
                  Register Institution
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Museums;
