import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { GitCommit, ShieldCheck, ExternalLink } from 'lucide-react';
import { getArtifacts, getArtifactById } from '../utils/storage';
import ProvenanceChain from '../components/ProvenanceChain';
import BlockchainCard from '../components/BlockchainCard';

export const Provenance = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const artifacts = getArtifacts();
  const activeArtifact = getArtifactById(id || artifacts[0]?.id);

  const verifiedSteps = (activeArtifact?.provenance || []).filter((p) => p.verified).length;
  const totalSteps = activeArtifact?.provenance?.length || 0;
  const confidencePct = totalSteps > 0 ? Math.round((verifiedSteps / totalSteps) * 100) : 0;

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#307082] bg-[#307082]/10 px-3 py-1 rounded-full">
            Immutable Audit Trail
          </span>
          <h1 className="text-3xl font-serif font-bold text-[#12212E] mt-2 flex items-center gap-2">
            <GitCommit className="w-8 h-8 text-[#EA9940]" />
            Provenance Explorer
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Tamper-evident provenance history, excavation/custody records, and cryptographic anchor metadata.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-slate-600 whitespace-nowrap">Select Record:</label>
          <select
            value={activeArtifact?.id || ''}
            onChange={(e) => navigate(`/provenance/${e.target.value}`)}
            className="py-2.5 px-3.5 rounded-xl bg-white text-xs font-bold text-[#12212E] border border-slate-300 shadow-sm focus:border-[#307082] outline-none max-w-xs"
          >
            {artifacts.map((a) => (
              <option key={a.id} value={a.id}>
                {a.gai} — {a.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {activeArtifact && (
        <div className="bg-[#12212E] text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[#EA9940] text-[#12212E]">
                {activeArtifact.gai}
              </span>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-500/40 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Provenance Confidence: {confidencePct}%
              </span>
              <Link
                to={`/artifact/${activeArtifact.id}`}
                className="text-xs font-semibold text-[#6CA3A2] hover:text-white flex items-center gap-1 ml-1"
              >
                <span>Open Passport</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
            <h2 className="text-2xl font-serif font-bold text-white">{activeArtifact.name}</h2>
            <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
              {activeArtifact.description}
            </p>
          </div>

          <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 text-xs space-y-3">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">Custodian Institution</span>
              <span className="font-bold text-[#EA9940] text-right">
                {activeArtifact.institution || activeArtifact.museum}
              </span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-slate-400">Logged Custody Steps</span>
              <span className="font-bold text-white font-mono">
                {verifiedSteps} / {totalSteps} Logged
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Polygon Amoy Block</span>
              <span className="font-bold text-emerald-400 font-mono">
                #{activeArtifact.blockchain?.blockNumber || '28491011'}
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-md">
          <ProvenanceChain provenance={activeArtifact?.provenance} />
        </div>
        <div className="lg:col-span-4">
          <BlockchainCard
            blockchain={activeArtifact?.blockchain}
            artifactName={activeArtifact?.name}
            gai={activeArtifact?.gai}
          />
        </div>
      </div>
    </div>
  );
};

export default Provenance;
