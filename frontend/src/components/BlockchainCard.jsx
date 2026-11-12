import React, { useState } from 'react';
import { ShieldCheck, ExternalLink, Hash, Clock, Cpu, FileCode2, Copy, Check } from 'lucide-react';
import BlockchainModal from './BlockchainModal';
import { useToast } from '../utils/toast';

export const BlockchainCard = ({ blockchain, artifactName, gai }) => {
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { showToast } = useToast();

  const handleCopy = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopied(true);
    showToast('Transaction hash copied to clipboard.', 'info');
    setTimeout(() => setCopied(false), 2000);
  };

  if (!blockchain) return null;

  return (
    <>
      <div className="bg-gradient-to-br from-[#12212E] to-[#1e3447] text-white rounded-2xl p-6 border border-[#6CA3A2]/20 shadow-lg space-y-5 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#307082]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex items-center justify-between border-b border-slate-700/60 pb-4 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#EA9940]/20 text-[#EA9940] border border-[#EA9940]/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-[#ECE7DC] text-base font-serif">Blockchain Record</h3>
              <p className="text-xs text-slate-400">Decentralized &amp; Tamper-Proof Provenance</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
            {blockchain.status || 'Verified'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/50 space-y-1">
            <span className="text-slate-400 flex items-center gap-1.5 font-medium">
              <Cpu className="w-3.5 h-3.5 text-[#6CA3A2]" />
              Network
            </span>
            <p className="font-semibold text-white font-mono text-sm">
              {blockchain.network || 'Polygon Amoy Testnet'}
            </p>
          </div>

          <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/50 space-y-1">
            <span className="text-slate-400 flex items-center gap-1.5 font-medium">
              <Hash className="w-3.5 h-3.5 text-[#EA9940]" />
              Block
            </span>
            <p className="font-semibold text-[#EA9940] font-mono text-sm">
              #{blockchain.blockNumber || 28473921}
            </p>
          </div>

          <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/50 space-y-1 md:col-span-2">
            <span className="text-slate-400 flex items-center justify-between font-medium">
              <span className="flex items-center gap-1.5">
                <FileCode2 className="w-3.5 h-3.5 text-[#307082]" />
                Transaction Hash
              </span>
              <button
                onClick={() => handleCopy(blockchain.txHash)}
                className="text-slate-400 hover:text-white flex items-center gap-1 text-[11px] font-sans transition-colors"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </span>
            <p className="font-mono text-slate-300 text-xs truncate bg-black/40 p-2 rounded border border-slate-800">
              {blockchain.txHash}
            </p>
          </div>

          <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/50 space-y-1">
            <span className="text-slate-400 flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Timestamp
            </span>
            <p className="font-medium text-slate-200">
              {blockchain.timestamp || '15 Mar 2026, 14:32:05 UTC'}
            </p>
          </div>

          <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/50 space-y-1">
            <span className="text-slate-400 flex items-center gap-1.5 font-medium">
              <FileCode2 className="w-3.5 h-3.5 text-emerald-400" />
              Smart Contract
            </span>
            <p className="font-mono text-slate-300 truncate">
              {blockchain.contractAddress || '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7'}
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#307082] to-[#6CA3A2] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-md"
        >
          <span>View Blockchain Record</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      {showModal && (
        <BlockchainModal
          blockchain={blockchain}
          artifactName={artifactName}
          gai={gai}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default BlockchainCard;
