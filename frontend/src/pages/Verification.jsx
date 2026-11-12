import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, AlertTriangle, X } from 'lucide-react';
import { getArtifacts, updateArtifactVerification, addNotification } from '../utils/storage';
import StatusBadge from '../components/StatusBadge';
import ArtifactImage from '../components/ArtifactImage';
import { useToast } from '../utils/toast';

export const Verification = () => {
  const [artifacts, setArtifacts] = useState(() => getArtifacts());
  const [selectedArtifact, setSelectedArtifact] = useState(null);
  const { showToast } = useToast();

  const pendingList = artifacts.filter((a) => a.verificationStatus !== 'Verified');
  const verifiedList = artifacts.filter((a) => a.verificationStatus === 'Verified');

  const handleApprove = (id, gai, name) => {
    updateArtifactVerification(id, 'Verified');
    setArtifacts(getArtifacts());
    addNotification({
      title: 'Artifact Approved',
      message: `Artifact ${gai} (${name}) verified & approved by Admin.`,
      type: 'blockchain',
      link: `/artifact/${id}`
    });
    showToast(`${gai} (${name}) approved and anchored.`, 'success', 'Artifact Verified');
    if (selectedArtifact?.id === id) setSelectedArtifact(null);
  };

  const handleReject = (id, gai, name) => {
    updateArtifactVerification(id, 'Flagged');
    setArtifacts(getArtifacts());
    addNotification({
      title: 'Artifact Flagged',
      message: `Artifact ${gai} (${name}) flagged for provenance review.`,
      type: 'verification',
      link: `/artifact/${id}`
    });
    showToast(`${gai} (${name}) flagged for provenance audit.`, 'warning', 'Verification Rejected');
    if (selectedArtifact?.id === id) setSelectedArtifact(null);
  };

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto animate-fade-in">
      {/* Title Header */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#307082] bg-[#307082]/10 px-3 py-1 rounded-full">
          Administrator Governance
        </span>
        <h1 className="text-3xl font-serif font-bold text-[#12212E] mt-2 flex items-center gap-2">
          <ShieldCheck className="w-8 h-8 text-[#EA9940]" />
          Artifact Verification Portal
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Review pending GAI passports, AI similarity reports, and institutional provenance submissions.
        </p>
      </div>

      {/* Pending Items Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif font-bold text-lg text-[#12212E] flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#EA9940]" />
            Pending Verification Queue ({pendingList.length})
          </h3>
        </div>

        {pendingList.length > 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#12212E] text-white uppercase font-semibold">
                    <th className="p-3.5">Artifact</th>
                    <th className="p-3.5">GAI</th>
                    <th className="p-3.5">Museum</th>
                    <th className="p-3.5">Submitted By</th>
                    <th className="p-3.5">AI Similarity Score</th>
                    <th className="p-3.5">Provenance Status</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pendingList.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold font-serif text-[#12212E]">
                        <div className="flex items-center gap-2.5">
                          <ArtifactImage
                            src={item.image}
                            alt={item.name}
                            recordType={item.recordType}
                            category={item.category}
                            subCategory={item.subCategory}
                            tamilName={item.tamilName}
                            compact
                            className="w-9 h-9 rounded-lg object-cover shrink-0"
                          />
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td className="p-3.5 font-mono text-[#EA9940] font-bold">{item.gai}</td>
                      <td className="p-3.5 text-slate-700">{item.institution || item.museum}</td>
                      <td className="p-3.5 text-slate-600">{item.registeredBy || 'Curator'}</td>
                      <td className="p-3.5">
                        <span className="px-2 py-0.5 rounded font-mono font-bold bg-sky-100 text-sky-800">
                          {item.aiSimilarity?.score || 91.5}% Score
                        </span>
                      </td>
                      <td className="p-3.5">
                        <StatusBadge status={item.verificationStatus} size="sm" />
                      </td>
                      <td className="p-3.5 text-right space-x-1.5 whitespace-nowrap">
                        <button
                          onClick={() => setSelectedArtifact(item)}
                          className="px-2.5 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold"
                        >
                          Review
                        </button>
                        <button
                          onClick={() => handleApprove(item.id, item.gai, item.name)}
                          className="px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(item.id, item.gai, item.name)}
                          className="px-2.5 py-1.5 rounded-lg bg-rose-600 text-white font-bold hover:bg-rose-700"
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs space-y-2">
            <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-500" />
            <p className="font-semibold text-[#12212E]">All caught up!</p>
            <p>No pending artifact verification requests in the queue.</p>
          </div>
        )}
      </div>

      {/* Verified Registry Archive */}
      <div className="space-y-4">
        <h3 className="font-serif font-bold text-lg text-[#12212E] flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          Recently Verified Passports ({verifiedList.length})
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {verifiedList.slice(0, 6).map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedArtifact(item)}
              className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-[#307082] cursor-pointer flex items-center gap-3 shadow-xs transition-all"
            >
              <ArtifactImage
                src={item.image}
                alt={item.name}
                recordType={item.recordType}
                category={item.category}
                subCategory={item.subCategory}
                tamilName={item.tamilName}
                compact
                className="w-12 h-12 rounded-xl object-cover shrink-0"
              />
              <div className="min-w-0 flex-1">
                <span className="text-[10px] font-mono font-bold text-[#EA9940] bg-[#12212E] px-2 py-0.5 rounded">
                  {item.gai}
                </span>
                <h4 className="font-serif font-bold text-sm text-[#12212E] truncate mt-1">
                  {item.name}
                </h4>
                <p className="text-[11px] text-slate-500 truncate">{item.institution || item.museum}</p>
              </div>
              <StatusBadge status={item.verificationStatus} size="sm" showIcon={false} />
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Verification Review Modal */}
      {selectedArtifact && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 space-y-5 text-slate-900 border border-slate-300 shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#EA9940] bg-[#12212E] px-2 py-0.5 rounded">
                  {selectedArtifact.gai}
                </span>
                <h3 className="font-serif font-bold text-lg text-[#12212E] mt-1">
                  Verification Review: {selectedArtifact.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedArtifact(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-start gap-4">
              <ArtifactImage
                src={selectedArtifact.image}
                alt={selectedArtifact.name}
                recordType={selectedArtifact.recordType}
                category={selectedArtifact.category}
                subCategory={selectedArtifact.subCategory}
                tamilName={selectedArtifact.tamilName}
                className="w-24 h-24 rounded-xl object-cover shrink-0 border border-slate-200"
              />
              <div className="space-y-1.5 text-xs text-slate-600">
                <p>
                  <span className="font-bold text-[#12212E]">Holding Institution:</span>{' '}
                  {selectedArtifact.institution || selectedArtifact.museum}
                </p>
                <p>
                  <span className="font-bold text-[#12212E]">Submitted By:</span> {selectedArtifact.registeredBy || 'Curator'}
                </p>
                <p>
                  <span className="font-bold text-[#12212E]">Period:</span> {selectedArtifact.period}
                </p>
                <p>
                  <span className="font-bold text-[#12212E]">AI Similarity Score:</span>{' '}
                  {selectedArtifact.aiSimilarity?.score || 91.5}%
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-900">
              <span className="font-bold block mb-1">AI &amp; Provenance Notes:</span>
              {selectedArtifact.aiSimilarity?.notes || 'Ready for administrative verification.'}
            </div>

            <div className="pt-2 flex justify-end gap-2 text-xs">
              <button
                onClick={() => setSelectedArtifact(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-semibold hover:bg-slate-200"
              >
                Close
              </button>
              <button
                onClick={() => handleReject(selectedArtifact.id, selectedArtifact.gai, selectedArtifact.name)}
                className="px-4 py-2 rounded-xl bg-rose-600 text-white font-bold hover:bg-rose-700"
              >
                Flag / Reject
              </button>
              <button
                onClick={() => handleApprove(selectedArtifact.id, selectedArtifact.gai, selectedArtifact.name)}
                className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700"
              >
                Approve &amp; Verify
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Verification;
