import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Landmark, ArrowRight, GitCommit, Network, Layers } from 'lucide-react';
import StatusBadge from './StatusBadge';
import ArtifactImage from './ArtifactImage';

export const ArtifactCard = ({ artifact }) => {
  const custodian = artifact.institution || artifact.museum || artifact.currentLocation;
  const giBadge = artifact.giStatus || artifact.typeMetadata?.giStatus;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      {/* Crystal-Clear Unobstructed Image Showcase */}
      <Link to={`/artifact/${artifact.id}`} className="relative h-56 overflow-hidden bg-[#F4F1EA] block">
        <ArtifactImage
          src={artifact.image}
          alt={artifact.name}
          recordType={artifact.recordType}
          category={artifact.category}
          tamilName={artifact.tamilName}
          subCategory={artifact.subCategory}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Subtle Top Corner Badges (minimal footprint so the object remains completely clear) */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2 flex-wrap pointer-events-none">
          <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-[#12212E]/90 text-[#EA9940] border border-[#EA9940]/30 shadow-sm">
            {artifact.gai}
          </span>
          <StatusBadge status={artifact.verificationStatus} size="sm" />
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <span className="text-[10px] uppercase tracking-wider text-[#307082] font-bold block truncate">
            {artifact.period}
          </span>
          <Link to={`/artifact/${artifact.id}`} className="block">
            <h3 className="text-base font-bold text-[#12212E] leading-snug font-serif group-hover:text-[#307082] transition-colors line-clamp-2">
              {artifact.name}
            </h3>
          </Link>
          {artifact.tamilName && (
            <p className="text-xs text-[#307082] font-medium truncate">{artifact.tamilName}</p>
          )}

          <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#ECE7DC]/70 text-[#12212E]">
              <Layers className="w-2.5 h-2.5 text-[#307082]" />
              {artifact.category}
            </span>
            {giBadge && <StatusBadge status={giBadge} size="sm" />}
          </div>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {artifact.description}
          </p>
        </div>

        <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
          <div className="flex items-center gap-2">
            <Landmark className="w-3.5 h-3.5 text-[#307082] shrink-0" />
            <span className="truncate font-medium text-slate-800">{custodian}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#EA9940] shrink-0" />
            <span className="truncate text-slate-600">{artifact.origin}</span>
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
          <Link
            to={`/artifact/${artifact.id}`}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-[#12212E] text-white hover:bg-[#307082] transition-colors col-span-2 shadow-sm"
          >
            <span>View Digital Passport</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            to={`/provenance/${artifact.id}`}
            className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg text-[11px] font-medium bg-slate-100 text-slate-700 hover:bg-[#ECE7DC] hover:text-[#12212E] transition-colors"
          >
            <GitCommit className="w-3 h-3 text-[#307082]" />
            <span>Provenance</span>
          </Link>
          <Link
            to={`/graph/${artifact.id}`}
            className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg text-[11px] font-medium bg-slate-100 text-slate-700 hover:bg-[#ECE7DC] hover:text-[#12212E] transition-colors"
          >
            <Network className="w-3 h-3 text-[#EA9940]" />
            <span>Knowledge Graph</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtifactCard;
