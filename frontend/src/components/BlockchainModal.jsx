import React from 'react';
import { X, CheckCircle2, Code2 } from 'lucide-react';

export const BlockchainModal = ({ blockchain, artifactName, gai, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-[#12212E] text-white rounded-2xl max-w-2xl w-full border border-slate-700 shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse"></div>
            <span className="font-mono text-xs text-purple-400 font-bold uppercase tracking-wider">
              Polygon Amoy Explorer (Testnet)
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close explorer modal"
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 text-sm">
          <div className="bg-emerald-950/50 border border-emerald-500/30 rounded-xl p-4 flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-emerald-300">Transaction Confirmed &amp; Mined</h4>
              <p className="text-xs text-emerald-200/80 mt-1">
                Artifact identity <span className="font-mono text-[#EA9940]">{gai}</span> successfully registered with cryptographic spatio-temporal merkle root.
              </p>
            </div>
          </div>

          <div className="space-y-3 bg-slate-900/80 rounded-xl p-4 border border-slate-800 font-mono text-xs">
            <div className="grid grid-cols-3 gap-2 py-2 border-b border-slate-800">
              <span className="text-slate-400">Transaction Hash</span>
              <span className="col-span-2 text-purple-300 truncate">{blockchain.txHash}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-2 border-b border-slate-800">
              <span className="text-slate-400">Status</span>
              <span className="col-span-2 text-emerald-400 font-bold">SUCCESS (12 Block Confirmations)</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-2 border-b border-slate-800">
              <span className="text-slate-400">Block Number</span>
              <span className="col-span-2 text-white">#{blockchain.blockNumber}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-2 border-b border-slate-800">
              <span className="text-slate-400">Timestamp</span>
              <span className="col-span-2 text-slate-300">{blockchain.timestamp}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-2 border-b border-slate-800">
              <span className="text-slate-400">Smart Contract</span>
              <span className="col-span-2 text-slate-300 truncate">{blockchain.contractAddress}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-2 border-b border-slate-800">
              <span className="text-slate-400">Artifact Target</span>
              <span className="col-span-2 text-[#EA9940]">
                {artifactName} ({gai})
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-2">
              <span className="text-slate-400">Gas Used</span>
              <span className="col-span-2 text-slate-400">142,891 POL (0.0024 POL)</span>
            </div>
          </div>

          <div className="space-y-2">
            <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-[#307082]" />
              Emitted Smart Contract Event Logs
            </h5>
            <div className="bg-black/60 font-mono text-[11px] p-3 rounded-xl border border-slate-800 text-slate-300 space-y-1 overflow-x-auto">
              <p className="text-emerald-400">
                event ArtifactIdentityMinted(bytes32 indexed gaiHash, address indexed curator, uint256 timestamp)
              </p>
              <p className="text-slate-500">
                Topic 0: 0x8a92f7c00192e4827d09214b7890a8c2d109f3e45012a9810b4291c890123ef4
              </p>
              <p className="text-slate-400">
                Data: GAI={gai} | ProvenanceHash=0x7a83b92f7e... | Registry=HeritageChainRegistry
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-900 px-6 py-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#307082] text-white font-medium text-xs hover:bg-[#6CA3A2] transition-colors"
          >
            Close Explorer View
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlockchainModal;
