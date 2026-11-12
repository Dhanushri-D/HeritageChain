import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, RefreshCw, Compass, Landmark, ArrowUpDown } from 'lucide-react';
import { getArtifacts } from '../utils/storage';
import { COLLECTION_CATEGORIES } from '../data/artifacts';
import ArtifactCard from '../components/ArtifactCard';
import SearchBar from '../components/SearchBar';

export const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPeriod, setSelectedPeriod] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [selectedInstitution, setSelectedInstitution] = useState('All');
  const [selectedGiStatus, setSelectedGiStatus] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [sortBy, setSortBy] = useState('oldest');

  const artifacts = getArtifacts();

  const periods = ['All', ...new Set(artifacts.map((a) => a.period).filter(Boolean))];
  const districts = ['All', ...new Set(artifacts.map((a) => a.district).filter(Boolean))];
  const materials = ['All', ...new Set(artifacts.map((a) => a.material).filter(Boolean))];
  const institutions = ['All', ...new Set(artifacts.map((a) => a.institution || a.museum).filter(Boolean))];
  const giStatuses = [
    'All',
    ...new Set(artifacts.map((a) => a.giStatus || a.typeMetadata?.giStatus).filter(Boolean))
  ];
  const statuses = ['All', ...new Set(artifacts.map((a) => a.verificationStatus).filter(Boolean))];

  const filteredArtifacts = useMemo(() => {
    const filtered = artifacts.filter((art) => {
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesQuery =
          (art.name && art.name.toLowerCase().includes(q)) ||
          (art.tamilName && art.tamilName.toLowerCase().includes(q)) ||
          (art.gai && art.gai.toLowerCase().includes(q)) ||
          (art.category && art.category.toLowerCase().includes(q)) ||
          (art.subCategory && art.subCategory.toLowerCase().includes(q)) ||
          (art.institution && art.institution.toLowerCase().includes(q)) ||
          (art.museum && art.museum.toLowerCase().includes(q)) ||
          (art.origin && art.origin.toLowerCase().includes(q)) ||
          (art.district && art.district.toLowerCase().includes(q)) ||
          (art.material && art.material.toLowerCase().includes(q)) ||
          (art.currentLocation && art.currentLocation.toLowerCase().includes(q));
        if (!matchesQuery) return false;
      }
      if (selectedCategory !== 'All' && art.category !== selectedCategory) return false;
      if (selectedPeriod !== 'All' && art.period !== selectedPeriod) return false;
      if (selectedDistrict !== 'All' && art.district !== selectedDistrict) return false;
      if (selectedMaterial !== 'All' && art.material !== selectedMaterial) return false;
      if (selectedInstitution !== 'All' && (art.institution || art.museum) !== selectedInstitution) return false;
      const itemGi = art.giStatus || art.typeMetadata?.giStatus || '';
      if (selectedGiStatus !== 'All' && itemGi !== selectedGiStatus) return false;
      if (selectedStatus !== 'All' && art.verificationStatus !== selectedStatus) return false;
      return true;
    });

    const sorted = [...filtered];
    if (sortBy === 'oldest') {
      sorted.sort((a, b) => (a.estimatedDateStart ?? 0) - (b.estimatedDateStart ?? 0));
    } else if (sortBy === 'newest') {
      sorted.sort((a, b) => (b.estimatedDateEnd ?? b.estimatedDateStart ?? 0) - (a.estimatedDateEnd ?? a.estimatedDateStart ?? 0));
    } else if (sortBy === 'alphabetical') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    return sorted;
  }, [
    artifacts,
    searchQuery,
    selectedCategory,
    selectedPeriod,
    selectedDistrict,
    selectedMaterial,
    selectedInstitution,
    selectedGiStatus,
    selectedStatus,
    sortBy
  ]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedPeriod('All');
    setSelectedDistrict('All');
    setSelectedMaterial('All');
    setSelectedInstitution('All');
    setSelectedGiStatus('All');
    setSelectedStatus('All');
    setSortBy('oldest');
  };

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto animate-fade-in">
      {/* Header & Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#307082] bg-[#307082]/10 px-3 py-1 rounded-full">
            Tamil Heritage Ledger
          </span>
          <h1 className="text-3xl font-serif font-bold text-[#12212E] mt-2 flex items-center gap-2">
            <Compass className="w-8 h-8 text-[#EA9940]" />
            Public Artifact &amp; Heritage Explorer
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Browse cryptographic digital passports, source citations, provenance histories, and knowledge graphs across {artifacts.length} catalogued Tamil heritage records.
          </p>
        </div>

        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      {/* Category Quick Pills */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors border ${
            selectedCategory === 'All'
              ? 'bg-[#12212E] text-[#EA9940] border-[#12212E]'
              : 'bg-white text-slate-600 border-slate-200 hover:border-[#307082]'
          }`}
        >
          All Categories ({artifacts.length})
        </button>
        {COLLECTION_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors border ${
              selectedCategory === cat.id
                ? 'bg-[#307082] text-white border-[#307082]'
                : 'bg-white text-slate-600 border-slate-200 hover:border-[#307082]'
            }`}
          >
            {cat.shortLabel}
          </button>
        ))}
      </div>

      {/* Filter & Sort Bar */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#12212E]">
            <SlidersHorizontal className="w-4 h-4 text-[#307082]" />
            <span>Refine Discovery ({filteredArtifacts.length} shown)</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="py-1.5 px-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-[#12212E] outline-none"
              >
                <option value="oldest">Sort: Oldest Period</option>
                <option value="newest">Sort: Newest Period</option>
                <option value="alphabetical">Sort: Alphabetical</option>
                <option value="recent">Sort: Recently Added</option>
              </select>
            </div>

            <button
              onClick={handleResetFilters}
              className="text-xs text-slate-500 hover:text-[#EA9940] flex items-center gap-1 font-medium transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-2 px-3 rounded-xl bg-slate-50 text-xs border border-slate-200 focus:border-[#307082] outline-none"
            >
              <option value="All">All Categories</option>
              {COLLECTION_CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>{c.title}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Historical Period</label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="w-full py-2 px-3 rounded-xl bg-slate-50 text-xs border border-slate-200 focus:border-[#307082] outline-none"
            >
              {periods.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">District</label>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full py-2 px-3 rounded-xl bg-slate-50 text-xs border border-slate-200 focus:border-[#307082] outline-none"
            >
              {districts.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Material</label>
            <select
              value={selectedMaterial}
              onChange={(e) => setSelectedMaterial(e.target.value)}
              className="w-full py-2 px-3 rounded-xl bg-slate-50 text-xs border border-slate-200 focus:border-[#307082] outline-none"
            >
              {materials.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Institution</label>
            <select
              value={selectedInstitution}
              onChange={(e) => setSelectedInstitution(e.target.value)}
              className="w-full py-2 px-3 rounded-xl bg-slate-50 text-xs border border-slate-200 focus:border-[#307082] outline-none"
            >
              {institutions.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">GI Status</label>
            <select
              value={selectedGiStatus}
              onChange={(e) => setSelectedGiStatus(e.target.value)}
              className="w-full py-2 px-3 rounded-xl bg-slate-50 text-xs border border-slate-200 focus:border-[#307082] outline-none"
            >
              {giStatuses.map((gi) => (
                <option key={gi} value={gi}>{gi}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1 sm:col-span-2">
            <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Verification Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full py-2 px-3 rounded-xl bg-slate-50 text-xs border border-slate-200 focus:border-[#307082] outline-none"
            >
              {statuses.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Artifact Grid */}
      {filteredArtifacts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredArtifacts.map((artifact) => (
            <ArtifactCard key={artifact.id} artifact={artifact} />
          ))}
        </div>
      ) : (
        <div className="p-16 text-center bg-white rounded-2xl border border-slate-200 space-y-3">
          <Landmark className="w-12 h-12 mx-auto text-slate-300" />
          <h3 className="font-serif font-bold text-lg text-[#12212E]">No heritage record found</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Try searching in English or Tamil, by GAI identifier, or reset your active filters.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-4 py-2 rounded-xl bg-[#307082] text-white text-xs font-bold hover:bg-[#6CA3A2] transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Explore;
