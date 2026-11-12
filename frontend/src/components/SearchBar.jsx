import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Landmark, ArrowRight } from 'lucide-react';
import { getArtifacts } from '../utils/storage';
import ArtifactImage from './ArtifactImage';

export const SearchBar = ({
  placeholder = 'Search English or Tamil name, GAI, district, category, institution...',
  value,
  onChange,
  variant = 'light'
}) => {
  const [internalQuery, setInternalQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const isDark = variant === 'dark';
  const query = value !== undefined ? value : internalQuery;

  const setQuery = (val) => {
    if (onChange) {
      onChange(val);
    } else {
      setInternalQuery(val);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const artifacts = getArtifacts();

  const results =
    query.trim() === ''
      ? []
      : artifacts.filter((item) => {
          const q = query.toLowerCase();
          return (
            (item.name && item.name.toLowerCase().includes(q)) ||
            (item.tamilName && item.tamilName.toLowerCase().includes(q)) ||
            (item.gai && item.gai.toLowerCase().includes(q)) ||
            (item.category && item.category.toLowerCase().includes(q)) ||
            (item.subCategory && item.subCategory.toLowerCase().includes(q)) ||
            (item.institution && item.institution.toLowerCase().includes(q)) ||
            (item.museum && item.museum.toLowerCase().includes(q)) ||
            (item.district && item.district.toLowerCase().includes(q)) ||
            (item.origin && item.origin.toLowerCase().includes(q)) ||
            (item.material && item.material.toLowerCase().includes(q)) ||
            (item.period && item.period.toLowerCase().includes(q))
          );
        });

  const handleSelect = (id) => {
    setQuery('');
    setIsOpen(false);
    navigate(`/artifact/${id}`);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl">
      <div className="relative flex items-center">
        <Search
          className={`absolute pointer-events-none ${
            isDark ? 'w-4 h-4 left-3.5 text-[#EA9940]' : 'w-5 h-5 left-4 text-slate-400'
          }`}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className={
            isDark
              ? 'w-full pl-10 pr-9 py-2 rounded-xl bg-slate-900/90 text-white placeholder:text-slate-400 text-xs border border-slate-700/80 focus:border-[#EA9940] focus:ring-2 focus:ring-[#EA9940]/20 shadow-inner transition-all outline-none'
              : 'w-full pl-12 pr-10 py-3 rounded-xl bg-white text-slate-900 text-sm border border-slate-300 focus:border-[#307082] focus:ring-2 focus:ring-[#307082]/20 shadow-sm transition-all outline-none'
          }
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            aria-label="Clear search"
            className={`absolute right-2.5 p-1 rounded-full transition-colors ${
              isDark
                ? 'text-slate-400 hover:text-white hover:bg-slate-800'
                : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
            }`}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {isOpen && query.trim() !== '' && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden z-50 animate-fade-in max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="divide-y divide-slate-100">
              <div className="px-4 py-2 bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Found {results.length} Heritage {results.length === 1 ? 'Record' : 'Records'}
              </div>
              {results.slice(0, 12).map((art) => (
                <div
                  key={art.id}
                  onClick={() => handleSelect(art.id)}
                  className="p-3 hover:bg-[#ECE7DC]/40 cursor-pointer flex items-center gap-3 transition-colors group"
                >
                  <ArtifactImage
                    src={art.image}
                    alt={art.name}
                    recordType={art.recordType}
                    category={art.category}
                    tamilName={art.tamilName}
                    subCategory={art.subCategory}
                    compact
                    className="w-12 h-12 rounded-lg object-cover shrink-0 border border-slate-200"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-bold text-[#EA9940] bg-[#12212E] px-2 py-0.5 rounded shrink-0">
                        {art.gai}
                      </span>
                      <h4 className="font-bold text-[#12212E] text-sm truncate group-hover:text-[#307082] transition-colors">
                        {art.name}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-500 truncate mt-0.5">
                      {art.tamilName ? `${art.tamilName} • ` : ''}
                      {art.category} • {art.district || art.origin}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#307082] group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center space-y-2">
              <Landmark className="w-10 h-10 mx-auto text-slate-300" />
              <p className="font-semibold text-slate-800 text-sm">No heritage record found</p>
              <p className="text-xs text-slate-500">
                Try Adichanallur, Thirukkural, Swamimalai, Keezhadi, or a GAI code like GAI-TN-ARCH-0001.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
