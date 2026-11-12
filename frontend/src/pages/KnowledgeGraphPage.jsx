import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Network } from 'lucide-react';
import { getArtifacts, getArtifactById } from '../utils/storage';
import KnowledgeGraph from '../components/KnowledgeGraph';

export const KnowledgeGraphPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const artifacts = getArtifacts();
  const activeArtifact = getArtifactById(id || artifacts[0]?.id);

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#307082] bg-[#307082]/10 px-3 py-1 rounded-full">
            Knowledge Graph Engine
          </span>
          <h1 className="text-3xl font-serif font-bold text-[#12212E] mt-2 flex items-center gap-2">
            <Network className="w-8 h-8 text-[#EA9940]" />
            Tamil Heritage Knowledge Graph Explorer
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Visualizing interconnected sites, scripts, artisans, GI tags, literary works, manuscript copies, and custodian institutions.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-slate-600 whitespace-nowrap">Select Record:</label>
          <select
            value={activeArtifact?.id || ''}
            onChange={(e) => navigate(`/graph/${e.target.value}`)}
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

      <KnowledgeGraph
        key={activeArtifact?.id}
        relationships={activeArtifact?.relationships}
        artifactName={activeArtifact?.name}
      />
    </div>
  );
};

export default KnowledgeGraphPage;
