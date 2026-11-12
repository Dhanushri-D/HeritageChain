import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Edit3, GitCommit, Clock, ShieldCheck } from 'lucide-react';
import StatusBadge from './StatusBadge';
import ArtifactImage from './ArtifactImage';

export const ArtifactTable = ({ artifacts = [], onEdit }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#12212E] text-white text-xs font-semibold uppercase tracking-wider">
              <th className="py-3.5 px-4">Artifact Name &amp; Image</th>
              <th className="py-3.5 px-4">GAI Identifier</th>
              <th className="py-3.5 px-4">Date Registered</th>
              <th className="py-3.5 px-4">Status</th>
              <th className="py-3.5 px-4">Blockchain Ledger</th>
              <th className="py-3.5 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-700 font-medium">
            {artifacts.map((artifact) => (
              <tr key={artifact.id} className="hover:bg-slate-50/80 transition-colors">
                {/* Artifact Info */}
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-3">
                    <ArtifactImage
                      src={artifact.image}
                      alt={artifact.name}
                      recordType={artifact.recordType}
                      category={artifact.category}
                      subCategory={artifact.subCategory}
                      tamilName={artifact.tamilName}
                      compact
                      className="w-10 h-10 rounded-lg object-cover bg-slate-100 border border-slate-200 shrink-0"
                    />
                    <div>
                      <h4 className="font-bold text-[#12212E] text-sm font-serif">{artifact.name}</h4>
                      <p className="text-[11px] text-slate-500 truncate max-w-[180px]">
                        {artifact.institution || artifact.museum || 'Tamil Heritage Archive'}
                      </p>
                    </div>
                  </div>
                </td>

                {/* GAI */}
                <td className="py-3.5 px-4 font-mono font-bold text-[#EA9940]">
                  <span className="px-2.5 py-1 rounded bg-[#12212E] border border-[#EA9940]/30 shadow-xs">
                    {artifact.gai}
                  </span>
                </td>

                {/* Date Registered */}
                <td className="py-3.5 px-4 text-slate-600 font-mono">
                  {artifact.registrationDate || artifact.accessDate || '15 Mar 2026'}
                </td>

                {/* Status */}
                <td className="py-3.5 px-4">
                  <StatusBadge status={artifact.verificationStatus} size="sm" />
                </td>

                {/* Blockchain */}
                <td className="py-3.5 px-4 font-mono text-[11px]">
                  {artifact.blockchain ? (
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1 w-max">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      {artifact.blockchain.status || 'Confirmed'}
                    </span>
                  ) : (
                    <span className="text-slate-400">Unregistered</span>
                  )}
                </td>

                {/* Actions: View, Edit, Provenance, Timeline */}
                <td className="py-3.5 px-4 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Link
                      to={`/artifact/${artifact.id}`}
                      title="View Digital Passport"
                      className="p-2 rounded-lg text-slate-600 hover:text-[#307082] hover:bg-[#307082]/10 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                    {onEdit && (
                      <button
                        onClick={() => onEdit(artifact)}
                        title="Edit Metadata"
                        className="p-2 rounded-lg text-slate-600 hover:text-[#307082] hover:bg-[#307082]/10 transition-colors"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                    )}
                    <Link
                      to={`/provenance/${artifact.id}`}
                      title="View Provenance Chain"
                      className="p-2 rounded-lg text-slate-600 hover:text-[#EA9940] hover:bg-[#EA9940]/10 transition-colors"
                    >
                      <GitCommit className="w-4 h-4" />
                    </Link>
                    <Link
                      to={`/timeline/${artifact.id}`}
                      title="View Historical Timeline"
                      className="p-2 rounded-lg text-slate-600 hover:text-[#12212E] hover:bg-slate-200/70 transition-colors"
                    >
                      <Clock className="w-4 h-4" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArtifactTable;
