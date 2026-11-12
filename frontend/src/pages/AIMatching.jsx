import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Cpu,
  Sparkles,
  CheckCircle2,
  Link as LinkIcon,
  Plus,
  SearchCheck,
  X
} from 'lucide-react';
import { getArtifacts } from '../utils/storage';
import { computeArtifactSimilarity, AI_PROCESSING_STEPS } from '../utils/simulations';
import { useToast } from '../utils/toast';

export const AIMatching = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const artifacts = getArtifacts();

  const [inputName, setInputName] = useState('Adichanallur Burial Urns');
  const [inputDescription, setInputDescription] = useState(
    'Large handmade Iron Age terracotta pyriform burial urns (Muthumakkal Thaazhi) excavated from Thamirabarani river basin with grave pottery and bronze offerings.'
  );
  const [inputOrigin, setInputOrigin] = useState('Adichanallur, Thoothukudi District, Tamil Nadu');
  const [inputPeriod, setInputPeriod] = useState('Iron Age / Megalithic (c. 1000–300 BCE)');
  const [inputMaterial, setInputMaterial] = useState('Fired Terracotta & Red-and-Black Ware');
  const [inputMuseum, setInputMuseum] = useState('Government Museum, Chennai');

  const [analyzing, setAnalyzing] = useState(false);
  const [step, setStep] = useState(0);
  const [matchResult, setMatchResult] = useState(null);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!inputName.trim() || !inputDescription.trim()) {
      showToast('Please enter at least an Artifact Name and Description to analyze.', 'warning', 'Incomplete Form');
      return;
    }

    setAnalyzing(true);
    setMatchResult(null);
    setStep(1);

    const computed = computeArtifactSimilarity(
      {
        name: inputName,
        description: inputDescription,
        origin: inputOrigin,
        period: inputPeriod,
        material: inputMaterial,
        institution: inputMuseum,
        museum: inputMuseum
      },
      artifacts
    );

    setTimeout(() => setStep(2), 550);
    setTimeout(() => setStep(3), 1100);
    setTimeout(() => setStep(4), 1650);
    setTimeout(() => {
      setStep(5);
      setAnalyzing(false);
      setMatchResult(computed);
      showToast(
        computed.isDuplicateLikely
          ? `Potential match found: ${computed.topMatch.artifact.gai} (${computed.topMatch.score}%)`
          : 'No matching artifact found in registry.',
        computed.isDuplicateLikely ? 'warning' : 'success',
        'AI Analysis Complete'
      );
    }, 2250);
  };

  const handleCreateNewGai = () => {
    navigate('/register', {
      state: {
        prefill: {
          name: inputName,
          description: inputDescription,
          origin: inputOrigin,
          period: inputPeriod,
          material: inputMaterial,
          institution: inputMuseum,
          museum: inputMuseum
        }
      }
    });
  };

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto animate-fade-in">
      {/* Title */}
      <div className="border-b border-slate-200 pb-6">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#307082] bg-[#307082]/10 px-3 py-1 rounded-full">
          Computer Vision &amp; Vector Similarity Engine
        </span>
        <h1 className="text-3xl font-serif font-bold text-[#12212E] mt-2 flex items-center gap-2">
          <Cpu className="w-8 h-8 text-[#EA9940]" />
          AI Artifact Identity Matching
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Identify stolen antiquities, identical physical catalog records, and matching GAI registrations globally.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Form: Input Metadata */}
        <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-serif font-bold text-base text-[#12212E]">Artifact Metadata Input</h3>
            <button
              type="button"
              onClick={() => {
                setInputName('Uttiramerur Kudavolai Chola Stone Record');
                setInputDescription(
                  'Early 10th-century Tamil stone inscription detailing sabha electoral governance and village committees under Parantaka Chola I.'
                );
                setInputOrigin('Uttiramerur, Kancheepuram District, Tamil Nadu');
                setInputPeriod('919–921 CE (Chola Period)');
                setInputMaterial('Granite Temple Wall Slab');
                setInputMuseum('Archaeological Survey of India — Chennai Circle');
              }}
              className="text-[11px] font-semibold text-[#307082] hover:underline"
            >
              Load Novel Tamil Sample
            </button>
          </div>

          <form onSubmit={handleAnalyze} className="space-y-3 text-xs">
            <div className="space-y-1">
              <label className="font-semibold text-slate-700">Artifact Name *</label>
              <input
                type="text"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="font-semibold text-slate-700">Description *</label>
              <textarea
                rows={3}
                value={inputDescription}
                onChange={(e) => setInputDescription(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Origin</label>
                <input
                  type="text"
                  value={inputOrigin}
                  onChange={(e) => setInputOrigin(e.target.value)}
                  className="w-full p-2 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Period</label>
                <input
                  type="text"
                  value={inputPeriod}
                  onChange={(e) => setInputPeriod(e.target.value)}
                  className="w-full p-2 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Material</label>
                <input
                  type="text"
                  value={inputMaterial}
                  onChange={(e) => setInputMaterial(e.target.value)}
                  className="w-full p-2 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Holding Institution</label>
                <input
                  type="text"
                  value={inputMuseum}
                  onChange={(e) => setInputMuseum(e.target.value)}
                  className="w-full p-2 rounded-xl bg-slate-50 border border-slate-300 focus:border-[#307082] outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={analyzing}
              className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-[#12212E] to-[#307082] text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 disabled:opacity-60 transition-opacity shadow-md flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#EA9940]" />
              <span>{analyzing ? 'Analyzing Artifact...' : 'Analyze Artifact'}</span>
            </button>
          </form>
        </div>

        {/* Right Side: Animated Analysis Steps & Match Output */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-[#12212E] text-white p-6 rounded-2xl border border-slate-800 shadow-md space-y-4">
            <h3 className="font-serif font-bold text-sm text-[#EA9940] flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              AI Processing Pipeline
            </h3>

            <div className="space-y-2.5 font-mono text-xs">
              {AI_PROCESSING_STEPS.map((label, idx) => {
                const stepNum = idx + 1;
                const isReached = step >= stepNum;
                const isFinal = stepNum === 5 && isReached;
                return (
                  <div
                    key={label}
                    className={`flex items-center gap-2 p-2.5 rounded-lg transition-colors ${
                      isFinal
                        ? 'bg-[#EA9940]/20 text-[#EA9940] border border-[#EA9940]/40 font-bold'
                        : isReached
                        ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'
                        : 'text-slate-500'
                    }`}
                  >
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 ${
                        isFinal ? 'text-[#EA9940]' : isReached ? 'text-emerald-400' : 'text-slate-600'
                      }`}
                    />
                    <span>{label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI Match Result Box */}
          {matchResult && matchResult.topMatch && (
            <div
              className={`border p-6 rounded-2xl space-y-4 shadow-lg animate-fade-in ${
                matchResult.isDuplicateLikely
                  ? 'bg-sky-50 border-sky-300'
                  : 'bg-emerald-50 border-emerald-300'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    matchResult.isDuplicateLikely
                      ? 'text-sky-900 bg-sky-200'
                      : 'text-emerald-900 bg-emerald-200'
                  }`}
                >
                  {matchResult.isDuplicateLikely
                    ? 'Potential Existing Artifact Found'
                    : 'Unique Artifact Profile'}
                </span>
                <span className="text-sm font-bold text-[#12212E] font-mono">
                  {matchResult.topMatch.score}% Similarity
                </span>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#12212E] text-sm font-serif">
                    {matchResult.topMatch.artifact.name}
                  </span>
                  <span className="font-mono text-[#EA9940] bg-[#12212E] px-2 py-0.5 rounded text-[11px]">
                    {matchResult.topMatch.artifact.gai}
                  </span>
                </div>
                <p className="text-slate-600 line-clamp-2">{matchResult.topMatch.artifact.description}</p>
                <p className="text-[11px] text-slate-500 font-medium">
                  Holding Institution:{' '}
                  <span className="text-[#307082]">
                    {matchResult.topMatch.artifact.institution || matchResult.topMatch.artifact.museum}
                  </span>
                </p>
              </div>

              <div className="bg-amber-100/60 border border-amber-300 p-3 rounded-xl text-xs text-amber-900">
                <span className="font-bold block">Recommendation:</span>
                {matchResult.recommendation}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <button
                  onClick={() => {
                    showToast(
                      `Linked record to ${matchResult.topMatch.artifact.gai}`,
                      'success',
                      'GAI Linked'
                    );
                    navigate(`/artifact/${matchResult.topMatch.artifact.id}`);
                  }}
                  className="py-2.5 px-3 rounded-xl bg-[#12212E] text-white font-bold hover:bg-[#307082] transition-colors flex items-center justify-center gap-1.5"
                >
                  <LinkIcon className="w-3.5 h-3.5 text-[#EA9940]" />
                  <span>Link Existing GAI</span>
                </button>
                <button
                  onClick={handleCreateNewGai}
                  className="py-2.5 px-3 rounded-xl bg-[#EA9940] text-[#12212E] font-bold hover:bg-[#e0892d] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Create New GAI</span>
                </button>
                <button
                  onClick={() => setShowReviewModal(true)}
                  className="py-2.5 px-3 rounded-xl bg-white border border-slate-300 text-[#12212E] font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-1.5"
                >
                  <SearchCheck className="w-3.5 h-3.5 text-[#307082]" />
                  <span>Review Matches</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Review Top Candidate Matches Modal */}
      {showReviewModal && matchResult && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-serif font-bold text-lg text-[#12212E]">
                Top Registry Similarity Candidates
              </h3>
              <button
                onClick={() => setShowReviewModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {matchResult.candidates.map((cand, i) => (
                <div
                  key={cand.artifact.id}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-[#EA9940] bg-[#12212E] px-2 py-0.5 rounded">
                        #{i + 1} • {cand.artifact.gai}
                      </span>
                      <span className="font-serif font-bold text-sm text-[#12212E]">
                        {cand.artifact.name}
                      </span>
                    </div>
                    <p className="text-slate-500">
                      {cand.artifact.institution || cand.artifact.museum} • {cand.artifact.origin}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="px-2.5 py-1 rounded-full font-mono font-bold bg-sky-100 text-sky-900">
                      {cand.score}% Match
                    </span>
                    <button
                      onClick={() => {
                        setShowReviewModal(false);
                        navigate(`/artifact/${cand.artifact.id}`);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[#307082] text-white font-bold hover:bg-[#12212E]"
                    >
                      Inspect
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIMatching;
