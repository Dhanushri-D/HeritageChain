import React from 'react';
import { Shield, Globe, Cpu, GitCommit, Network, Landmark, Code2, MapPin, ArrowDown } from 'lucide-react';

export const About = () => {
  return (
    <div className="space-y-10 p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto text-[#12212E] animate-fade-in">
      {/* Title */}
      <div className="text-center space-y-3 border-b border-slate-200 pb-8">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-[#EA9940] to-[#307082] flex items-center justify-center text-[#12212E] shadow-xl">
          <Shield className="w-8 h-8 fill-current" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold">About HeritageChain</h1>
        <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
          Decentralized Artifact Registry with Global Artifact Identity, Provenance Tracking &amp; Spatio-Temporal Knowledge Visualization.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h3 className="font-serif font-bold text-lg text-[#12212E] flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#307082]" />
            What is HeritageChain?
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            HeritageChain is a multi-category Tamil Heritage Digital Registry unifying six heritage domains — Archaeological Discoveries, Epigraphical Inscriptions, Ancient Coins &amp; Trade Objects, Sculpture &amp; Temple Art, Traditional Tamil Crafts &amp; GI Heritage, and Tamil Literature &amp; Manuscripts — within a verifiable digital passport framework.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h3 className="font-serif font-bold text-lg text-[#12212E] flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#EA9940]" />
            Core Innovation: Global Artifact Identity &amp; Evidence Rigor
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Every record receives a canonical Global Artifact Identity (GAI-TN-TYPE-XXXX), separating historical works from living GI crafts, manuscripts from literary texts, and clearly stating scholarly attribution, date-range uncertainty, and official institutional sources (TNSDA, ASI, Government Museum Chennai, TVA, CICT, and IP India GI Registry).
          </p>
        </div>
      </div>

      {/* Core Technologies */}
      <div className="space-y-4">
        <h2 className="text-2xl font-serif font-bold text-[#12212E] text-center">Core Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <Cpu className="w-6 h-6 text-[#307082]" />
            <h4 className="font-serif font-bold text-sm">AI Matching</h4>
            <p className="text-slate-600">Multimodal similarity matching to identify matching or disputed artifact registrations.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <GitCommit className="w-6 h-6 text-[#EA9940]" />
            <h4 className="font-serif font-bold text-sm">Blockchain</h4>
            <p className="text-slate-600">Polygon Amoy cryptographic anchoring for tamper-evident provenance logs.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <Network className="w-6 h-6 text-[#307082]" />
            <h4 className="font-serif font-bold text-sm">Knowledge Graph</h4>
            <p className="text-slate-600">Interactive React Flow graph connecting dynasties, figures, origins, and museums.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <MapPin className="w-6 h-6 text-[#EA9940]" />
            <h4 className="font-serif font-bold text-sm">Spatio-Temporal Visualization</h4>
            <p className="text-slate-600">Interactive Leaflet journey maps and chronological timelines across centuries.</p>
          </div>
        </div>
      </div>

      {/* Architecture Visualization */}
      <div className="bg-[#12212E] text-white p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-mono text-[#EA9940] font-bold uppercase tracking-widest">
            Planned Full-Stack Architecture
          </span>
          <h3 className="text-2xl font-serif font-bold text-white">System Architecture Flow</h3>
        </div>

        <div className="max-w-xl mx-auto space-y-3 text-center text-xs">
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 flex items-center justify-center gap-3">
            <Landmark className="w-5 h-5 text-[#EA9940]" />
            <span className="font-bold text-sm">User (Public, Curator, Researcher, Admin)</span>
          </div>
          <ArrowDown className="w-5 h-5 text-[#EA9940] mx-auto" />
          <div className="bg-slate-900 p-4 rounded-xl border border-[#307082] flex items-center justify-center gap-3">
            <Code2 className="w-5 h-5 text-[#6CA3A2]" />
            <span className="font-bold text-sm">HeritageChain Frontend Platform (React + Vite)</span>
          </div>
          <ArrowDown className="w-5 h-5 text-[#EA9940] mx-auto" />
          <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 flex items-center justify-center gap-3">
            <Cpu className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-sm">AI + MongoDB + Neo4j + Blockchain (Target Stack)</span>
          </div>
          <ArrowDown className="w-5 h-5 text-[#EA9940] mx-auto" />
          <div className="bg-gradient-to-r from-[#307082] to-[#1a3042] p-4 rounded-xl border border-[#EA9940]/40 flex items-center justify-center gap-3">
            <Network className="w-5 h-5 text-[#EA9940]" />
            <span className="font-bold text-sm">Artifact Passport + Historical Visualization</span>
          </div>
        </div>

        <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 text-center text-xs text-slate-300 font-mono">
          Architecture Note: This frontend application runs with local browser storage and client-side workflows. Backend APIs, MongoDB, Neo4j, and live smart contract integrations are planned for full deployment.
        </div>
      </div>
    </div>
  );
};

export default About;
