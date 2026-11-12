import React from 'react';
import { ShieldCheck, MapPin, User, CheckCircle2, Lock, FileCode, AlertCircle } from 'lucide-react';

export const ProvenanceChain = ({ provenance = [] }) => {
  if (!provenance || provenance.length === 0) {
    return (
      <div className="p-8 text-center text-slate-500 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
        <AlertCircle className="w-8 h-8 mx-auto text-slate-400 mb-2" />
        <p className="text-sm font-medium">No provenance records logged yet.</p>
      </div>
    );
  }

  const allVerified = provenance.every((p) => p.verified);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-[#12212E] font-serif flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#307082]" />
            Tamper-Evident Provenance History
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Chronological cryptographic chain of custody records back to artifact origin.
          </p>
        </div>
        <span
          className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
            allVerified
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
              : 'bg-amber-50 text-amber-700 border-amber-200'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          {allVerified ? '100% Chain Integrity Verified' : 'Custody Audit Pending'}
        </span>
      </div>

      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#307082] via-[#6CA3A2] to-[#EA9940]">
        {provenance.map((item, index) => (
          <div key={index} className="relative group">
            {/* Node Icon */}
            <div
              className={`absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 bg-white ${
                item.verified
                  ? 'border-[#307082] text-[#307082] shadow-sm'
                  : 'border-amber-500 text-amber-500'
              }`}
            >
              {index === provenance.length - 1 ? (
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#EA9940]" />
              ) : (
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#307082]" />
              )}
            </div>

            {/* Card Content */}
            <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all group-hover:border-[#307082]/40">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold font-mono bg-[#12212E] text-[#EA9940]">
                    {item.year}
                  </span>
                  <h4 className="font-bold text-[#12212E] text-base font-serif">{item.title}</h4>
                </div>
                {item.verified ? (
                  <span className="text-[11px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Custody
                  </span>
                ) : (
                  <span className="text-[11px] font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                    Pending Review
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.event}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2 text-slate-700">
                  <User className="w-3.5 h-3.5 text-[#307082] shrink-0" />
                  <span className="font-semibold text-slate-900">{item.custodian}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin className="w-3.5 h-3.5 text-[#EA9940] shrink-0" />
                  <span>{item.location}</span>
                </div>
              </div>

              {item.hash && (
                <div className="mt-3 pt-2 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                  <span className="flex items-center gap-1 text-slate-500">
                    <FileCode className="w-3 h-3 text-[#6CA3A2]" />
                    Block Record Hash
                  </span>
                  <span className="truncate max-w-[180px] sm:max-w-none font-semibold text-slate-700">
                    {item.hash}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProvenanceChain;
