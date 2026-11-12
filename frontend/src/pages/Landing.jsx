import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  Compass,
  PlusCircle,
  Play,
  Cpu,
  GitCommit,
  Network,
  MapPin,
  ArrowRight,
  Globe,
  Sparkles,
  Lock,
  Landmark,
  Shield,
  LogIn,
  Library
} from 'lucide-react';
import { getArtifacts, setCurrentUser, getUsers } from '../utils/storage';
import { COLLECTION_CATEGORIES, computeCollectionCounts } from '../data/artifacts';
import ArtifactCard from '../components/ArtifactCard';
import HeritageArtwork from '../components/HeritageArtwork';
import { useToast } from '../utils/toast';

export const Landing = () => {
  const allArtifacts = getArtifacts();
  const collectionCounts = computeCollectionCounts(allArtifacts);
  const featuredIds = ['art-001', 'arch-001', 'sculp-001', 'craft-002'];
  const featuredArtifacts = featuredIds
    .map((fid) => allArtifacts.find((a) => a.id === fid))
    .filter(Boolean);
  const artifacts = featuredArtifacts.length > 0 ? featuredArtifacts : allArtifacts.slice(0, 4);

  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleQuickEnter = (role) => {
    const users = getUsers();
    const targetUser = users.find((u) => u.role === role) || users[0];
    setCurrentUser(targetUser);
    showToast(`Signed in as ${targetUser.name} (${targetUser.roleLabel})`, 'success', 'Session Active');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#12212E]">
      {/* Top Public Landing Navigation */}
      <nav className="bg-[#12212E]/95 backdrop-blur-md text-white border-b border-slate-800/80 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#EA9940] to-[#307082] flex items-center justify-center text-[#12212E] shadow-md">
              <Shield className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="font-serif font-bold text-lg text-white tracking-tight">
                Heritage<span className="text-[#EA9940]">Chain</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#6CA3A2] block font-mono">
                Tamil Heritage Digital Registry
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-300">
            <Link to="/collections" className="hover:text-[#EA9940] transition-colors">
              Tamil Heritage Collections
            </Link>
            <Link to="/explore" className="hover:text-[#EA9940] transition-colors">
              Explore Registry
            </Link>
            <Link to="/timeline" className="hover:text-[#EA9940] transition-colors">
              Timeline
            </Link>
            <Link to="/journey" className="hover:text-[#EA9940] transition-colors">
              Heritage Map
            </Link>
            <Link to="/about" className="hover:text-[#EA9940] transition-colors">
              About
            </Link>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              to="/login"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white border border-slate-700 hover:border-[#6CA3A2] transition-colors flex items-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5 text-[#EA9940]" />
              <span>Login</span>
            </Link>
            <button
              onClick={() => handleQuickEnter('admin')}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-[#EA9940] text-[#12212E] hover:bg-[#e0892d] transition-colors shadow-sm"
            >
              Launch Console
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#12212E] via-[#1a3042] to-[#307082] text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#EA9940_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#EA9940]/20 text-[#EA9940] border border-[#EA9940]/30 backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              <span>Multi-Category Tamil Heritage Digital Registry</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-tight">
              Every Artifact Has a Story. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA9940] via-[#ECE7DC] to-[#6CA3A2]">
                Give It a Trusted Identity.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl font-light">
              From Adichanallur urns and Tamil-Brahmi inscriptions to Chola bronzes, GI crafts, and Sangam palm-leaf manuscripts—HeritageChain anchors Tamil Nadu’s multi-category cultural legacy in verifiable digital passports.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/collections"
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#EA9940] text-[#12212E] hover:bg-[#e0892d] transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Library className="w-4 h-4" />
                <span>Browse 6 Collections</span>
              </Link>
              <Link
                to="/explore"
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all flex items-center gap-2 backdrop-blur-md"
              >
                <Compass className="w-4 h-4 text-[#EA9940]" />
                <span>Explore Artifacts</span>
              </Link>
              <button
                onClick={() => {
                  const users = getUsers();
                  const curator = users.find((u) => u.role === 'curator') || users[1];
                  setCurrentUser(curator);
                  navigate('/register');
                }}
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-[#307082] text-white hover:bg-[#6CA3A2] transition-all flex items-center gap-2 shadow-md"
              >
                <PlusCircle className="w-4 h-4 text-[#EA9940]" />
                <span>Register Artifact</span>
              </button>
            </div>

            <div className="pt-4 border-t border-slate-700/60 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Quick Role Access:</span>
              <button
                onClick={() => handleQuickEnter('public')}
                className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700 font-mono transition-colors"
              >
                Public Role
              </button>
              <button
                onClick={() => handleQuickEnter('curator')}
                className="px-2.5 py-1 rounded-md bg-slate-800 text-[#6CA3A2] hover:bg-slate-700 font-mono transition-colors"
              >
                Curator Role
              </button>
              <button
                onClick={() => handleQuickEnter('researcher')}
                className="px-2.5 py-1 rounded-md bg-slate-800 text-emerald-300 hover:bg-slate-700 font-mono transition-colors"
              >
                Researcher Role
              </button>
              <button
                onClick={() => handleQuickEnter('admin')}
                className="px-2.5 py-1 rounded-md bg-slate-800 text-purple-300 hover:bg-slate-700 font-mono transition-colors"
              >
                Admin Role
              </button>
            </div>
          </div>

          {/* Hero Visual Card (Tamil Heritage Digital Passport) */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#EA9940] to-[#307082] rounded-3xl blur-xl opacity-40 animate-pulse" />

            <div className="relative bg-[#12212E] rounded-2xl p-6 border border-slate-700 shadow-2xl text-white space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#EA9940]/20 text-[#EA9940] border border-[#EA9940]/30 flex items-center justify-center font-bold font-serif text-lg">
                    🏺
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#EA9940] bg-black/40 px-2 py-0.5 rounded">
                      GAI-TN-ARCH-0001
                    </span>
                    <h3 className="font-serif font-bold text-lg text-white">Adichanallur Burial Urns</h3>
                    <p className="text-[11px] text-[#6CA3A2]">ஆதிச்சநல்லூர் முதுமக்கள் தாழி</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  ✓ Verified Record
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Institution</span>
                  <span className="font-semibold text-slate-200">Govt Museum Chennai / ASI</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[10px]">Archaeological Period</span>
                  <span className="font-semibold text-slate-200">Iron Age (c. 900–300 BCE)</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 col-span-2">
                  <span className="text-slate-400 block text-[10px]">District &amp; River Basin</span>
                  <span className="font-semibold text-slate-200 block">
                    Adichanallur, Thoothukudi District • Tamiraparani Basin
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-[#EA9940]">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Officially Documented • High Confidence
                </span>
                <Link
                  to="/artifact/arch-001"
                  className="text-slate-300 hover:text-white font-mono text-[11px] underline"
                >
                  Open Passport →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Tamil Heritage Collections Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#307082]">
              Six Curated Collections
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#12212E] mt-1">
              Tamil Heritage Collections
            </h2>
          </div>
          <Link
            to="/collections"
            className="text-xs font-bold text-[#307082] hover:text-[#12212E] flex items-center gap-1"
          >
            <span>Explore All 6 Collections ({allArtifacts.length} Records)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COLLECTION_CATEGORIES.map((col) => (
            <Link
              key={col.id}
              to={`/collections?category=${encodeURIComponent(col.id)}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col"
            >
              <div className="h-44 overflow-hidden bg-[#F4F1EA]">
                {col.coverImage ? (
                  <img
                    src={col.coverImage}
                    alt={col.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <HeritageArtwork
                    recordType={col.artworkType}
                    category={col.id}
                    title={col.title}
                    tamilName={col.tamilTitle}
                    subCategory={`${collectionCounts[col.id] || 0} Records`}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-serif font-bold text-base text-[#12212E] group-hover:text-[#307082]">
                    {col.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1">{col.description}</p>
                </div>
                <span className="text-xs font-bold text-[#307082] flex items-center gap-1 pt-1">
                  Explore {collectionCounts[col.id] || 0} records <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why HeritageChain (4 Core Innovation Cards) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#307082] bg-[#307082]/10 px-3 py-1 rounded-full">
            Core Innovations
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#12212E]">
            Why HeritageChain?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Uniting archaeological evidence, epigraphic translations, GI craft status verification, and classical Tamil manuscripts under transparent provenance architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#12212E] text-[#EA9940] flex items-center justify-center font-bold shadow-md">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#12212E]">Global Artifact Identity</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Assigns unique typed GAI identifiers across archaeological artifacts, inscriptions, coins, sculptures, crafts, and texts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#307082] text-white flex items-center justify-center font-bold shadow-md">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#12212E]">AI Identity Matching</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Semantic bilingual matching compares submitted descriptions, districts, and materials across existing registry collections.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#EA9940] text-[#12212E] flex items-center justify-center font-bold shadow-md">
              <GitCommit className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#12212E]">Source-Verified Provenance</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Separates primary excavation reports, GI Registry statuses, and uncertain attributions from ledger hashes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#6CA3A2] text-white flex items-center justify-center font-bold shadow-md">
              <Network className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#12212E]">Knowledge Graph &amp; Maps</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Explores Tamil Nadu’s excavation sites, living artisan towns, and interconnected literary manuscripts in space and time.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-[#12212E] text-white px-4 sm:px-6 lg:px-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-serif font-bold text-white">How It Works</h2>
            <p className="text-xs text-slate-400">End-to-End Cultural Identity &amp; Spatio-Temporal Protocol</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { step: '01', title: 'Collection Intake', icon: Landmark, desc: 'Curator submits evidence & metadata' },
              { step: '02', title: 'AI Identity Match', icon: Cpu, desc: 'Semantic cross-registry check' },
              { step: '03', title: 'GAI Assignment', icon: Globe, desc: 'Typed GAI-TN passport issued' },
              { step: '04', title: 'Ledger Provenance', icon: Lock, desc: 'Custody & verification recorded' },
              { step: '05', title: 'Knowledge Graph', icon: Network, desc: 'Link sites, texts & traditions' },
              { step: '06', title: 'Timeline & Atlas', icon: MapPin, desc: 'Chronological & TN map exploration' }
            ].map((st, i) => {
              const Icon = st.icon;
              return (
                <div
                  key={i}
                  className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2 hover:border-[#EA9940]/50 transition-colors"
                >
                  <span className="text-[10px] font-mono font-bold text-[#EA9940] bg-[#EA9940]/10 px-2 py-0.5 rounded">
                    {st.step}
                  </span>
                  <div className="w-10 h-10 mx-auto rounded-lg bg-[#307082]/20 text-[#6CA3A2] flex items-center justify-center mt-1">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-xs text-white">{st.title}</h4>
                  <p className="text-[11px] text-slate-400 leading-tight">{st.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Heritage Records */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#307082]">
              Cross-Collection Highlights
            </span>
            <h2 className="text-3xl font-serif font-bold text-[#12212E] mt-1">
              Featured Tamil Heritage Records
            </h2>
          </div>
          <Link
            to="/explore"
            className="text-xs font-bold text-[#307082] hover:text-[#12212E] flex items-center gap-1 transition-colors"
          >
            <span>Browse Full Registry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artifacts.map((artifact) => (
            <ArtifactCard key={artifact.id} artifact={artifact} />
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#12212E] via-[#307082] to-[#12212E] text-white text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold">
            Explore the Tamil Heritage Network
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Navigate all six Tamil heritage collections, compare eras chronologically, map archaeological sites and GI craft clusters, and inspect provenance passports.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to="/collections"
              className="px-8 py-3.5 rounded-xl font-bold text-sm bg-[#EA9940] text-[#12212E] hover:bg-[#e0892d] transition-all shadow-lg"
            >
              Open Tamil Heritage Collections
            </Link>
            <button
              onClick={() => handleQuickEnter('admin')}
              className="px-8 py-3.5 rounded-xl font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all backdrop-blur-md flex items-center gap-2"
            >
              <Play className="w-4 h-4 text-[#EA9940]" />
              <span>Admin Console</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
