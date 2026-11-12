import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Library,
  ArrowRight,
  SlidersHorizontal,
  RefreshCw,
  ArrowUpDown,
  Landmark,
  CheckCircle2
} from 'lucide-react';
import { getArtifacts } from '../utils/storage';
import { COLLECTION_CATEGORIES, computeCollectionCounts } from '../data/artifacts';
import ArtifactCard from '../components/ArtifactCard';
import HeritageArtwork from '../components/HeritageArtwork';
import SearchBar from '../components/SearchBar';

export const Collections = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [selectedInstitution, setSelectedInstitution] = useState('All');
  const [selectedGiStatus, setSelectedGiStatus] = useState('All');
  const [selectedVerification, setSelectedVerification] = useState('All');
  const [sortBy, setSortBy] = useState('oldest');

  const artifacts = getArtifacts();
  const collectionCounts = useMemo(() => computeCollectionCounts(artifacts), [artifacts]);

  const handleSelectCollection = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: catId });
    }
    const gridEl = document.getElementById('collection-records-section');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const baseRecords = useMemo(() => {
    if (selectedCategory === 'All') return artifacts;
    return artifacts.filter((a) => a.category === selectedCategory);
  }, [artifacts, selectedCategory]);

  const periods = ['All', ...new Set(baseRecords.map((a) => a.period).filter(Boolean))];
  const districts = ['All', ...new Set(baseRecords.map((a) => a.district).filter(Boolean))];
  const materials = ['All', ...new Set(baseRecords.map((a) => a.material).filter(Boolean))];
  const institutions = ['All', ...new Set(baseRecords.map((a) => a.institution || a.museum).filter(Boolean))];
  const giStatuses = [
    'All',
    ...new Set(baseRecords.map((a) => a.giStatus || a.typeMetadata?.giStatus).filter(Boolean))
  ];
  const verifications = ['All', ...new Set(baseRecords.map((a) => a.verificationStatus).filter(Boolean))];

  const filteredRecords = useMemo(() => {
    const filtered = baseRecords.filter((art) => {
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesQuery =
          (art.name && art.name.toLowerCase().includes(q)) ||
          (art.tamilName && art.tamilName.toLowerCase().includes(q)) ||
          (art.gai && art.gai.toLowerCase().includes(q)) ||
          (art.district && art.district.toLowerCase().includes(q)) ||
          (art.origin && art.origin.toLowerCase().includes(q)) ||
          (art.material && art.material.toLowerCase().includes(q)) ||
          (art.institution && art.institution.toLowerCase().includes(q)) ||
          (art.subCategory && art.subCategory.toLowerCase().includes(q));
        if (!matchesQuery) return false;
      }
      if (selectedPeriod !== 'All' && art.period !== selectedPeriod) return false;
      if (selectedDistrict !== 'All' && art.district !== selectedDistrict) return false;
      if (selectedMaterial !== 'All' && art.material !== selectedMaterial) return false;
      if (selectedInstitution !== 'All' && (art.institution || art.museum) !== selectedInstitution) return false;
      const itemGi = art.giStatus || art.typeMetadata?.giStatus || '';
      if (selectedGiStatus !== 'All' && itemGi !== selectedGiStatus) return false;
      if (selectedVerification !== 'All' && art.verificationStatus !== selectedVerification) return false;
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
    baseRecords,
    searchQuery,
    selectedPeriod,
    selectedDistrict,
    selectedMaterial,
    selectedInstitution,
    selectedGiStatus,
    selectedVerification,
    sortBy
  ]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchParams({});
    setSearchQuery('');
    setSelectedPeriod('All');
    setSelectedDistrict('All');
    setSelectedMaterial('All');
    setSelectedInstitution('All');
    setSelectedGiStatus('All');
    setSelectedVerification('All');
    setSortBy('oldest');
  };

  return (
    <div className="space-y-10 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#307082] bg-[#307082]/10 px-3 py-1 rounded-full">
            Multi-Category Digital Registry
          </span>
          <h1 className="text-3xl font-serif font-bold text-[#12212E] mt-2 flex items-center gap-2.5">
            <Library className="w-8 h-8 text-[#EA9940]" />
            Tamil Heritage Collections
          </h1>
          <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
            Explore six curated collections spanning Tamil Nadu archaeology, Tamil-Brahmi and temple epigraphy,
            ancient trade coinage, sculptural masterworks, living GI crafts, and classical literary manuscripts.
          </p>
        </div>

        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      {/* Six Museum Gallery Collection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COLLECTION_CATEGORIES.map((col) => {
          const isActive = selectedCategory === col.id;
          const count = collectionCounts[col.id] || 0;
          return (
            <div
              key={col.id}
              onClick={() => handleSelectCollection(isActive ? 'All' : col.id)}
              className={`cursor-pointer rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col bg-white group ${
                isActive
                  ? 'border-[#EA9940] ring-2 ring-[#EA9940]/30 shadow-xl -translate-y-0.5'
                  : 'border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-0.5'
              }`}
            >
              <div className="relative h-48 overflow-hidden bg-[#F4F1EA]">
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
                    subCategory={`${count} Catalogued Records`}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {isActive && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#EA9940] text-[#12212E] flex items-center gap-1 shadow">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Selected
                  </span>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#307082]">
                      {col.shortLabel}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#ECE7DC] text-[#12212E]">
                      {count} {count === 1 ? 'Record' : 'Records'}
                    </span>
                  </div>
                  <h2 className="text-lg font-serif font-bold text-[#12212E] group-hover:text-[#307082] transition-colors">
                    {col.title}
                  </h2>
                  <p className="text-xs text-[#307082] font-medium">{col.tamilTitle}</p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">{col.description}</p>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectCollection(col.id);
                  }}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors ${
                    isActive
                      ? 'bg-[#EA9940] text-[#12212E]'
                      : 'bg-[#12212E] text-white group-hover:bg-[#307082]'
                  }`}
                >
                  <span>{isActive ? 'Viewing This Collection' : 'Explore Collection'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filter & Record Browser */}
      <div id="collection-records-section" className="space-y-6 pt-2">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#12212E]">
              <SlidersHorizontal className="w-4 h-4 text-[#307082]" />
              <span>
                {selectedCategory === 'All' ? 'All Heritage Collections' : selectedCategory} ({filteredRecords.length}{' '}
                {filteredRecords.length === 1 ? 'record' : 'records'})
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs">
                <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="py-1.5 px-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-[#12212E] outline-none"
                >
                  <option value="oldest">Chronological: Oldest First</option>
                  <option value="newest">Chronological: Latest First</option>
                  <option value="alphabetical">Alphabetical (A–Z)</option>
                  <option value="recent">Registry Order / Recently Added</option>
                </select>
              </div>

              <button
                onClick={handleResetFilters}
                className="text-xs text-slate-500 hover:text-[#EA9940] flex items-center gap-1 font-medium transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset All</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => handleSelectCollection(e.target.value)}
                className="w-full py-2 px-3 rounded-xl bg-slate-50 text-xs border border-slate-200 focus:border-[#307082] outline-none"
              >
                <option value="All">All 6 Collections</option>
                {COLLECTION_CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
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
                  <option key={p} value={p}>
                    {p}
                  </option>
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
                  <option key={d} value={d}>
                    {d}
                  </option>
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
                  <option key={m} value={m}>
                    {m}
                  </option>
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
                {institutions.map((inst) => (
                  <option key={inst} value={inst}>
                    {inst}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">GI Heritage Status</label>
              <select
                value={selectedGiStatus}
                onChange={(e) => setSelectedGiStatus(e.target.value)}
                className="w-full py-2 px-3 rounded-xl bg-slate-50 text-xs border border-slate-200 focus:border-[#307082] outline-none"
              >
                {giStatuses.map((gi) => (
                  <option key={gi} value={gi}>
                    {gi}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1 sm:col-span-2 lg:col-span-2">
              <label className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Verification Status</label>
              <select
                value={selectedVerification}
                onChange={(e) => setSelectedVerification(e.target.value)}
                className="w-full py-2 px-3 rounded-xl bg-slate-50 text-xs border border-slate-200 focus:border-[#307082] outline-none"
              >
                {verifications.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Records Grid */}
        {filteredRecords.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRecords.map((artifact) => (
              <ArtifactCard key={artifact.id} artifact={artifact} />
            ))}
          </div>
        ) : (
          <div className="p-16 text-center bg-white rounded-2xl border border-slate-200 space-y-3">
            <Landmark className="w-12 h-12 mx-auto text-slate-300" />
            <h3 className="font-serif font-bold text-lg text-[#12212E]">No matching heritage records</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Adjust your category, district, GI status, or search filter to explore all Tamil heritage entries.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 rounded-xl bg-[#307082] text-white text-xs font-bold hover:bg-[#6CA3A2] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collections;

