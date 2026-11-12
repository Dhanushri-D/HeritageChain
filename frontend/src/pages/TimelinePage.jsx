import React, { useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Clock,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  GitCompare,
  Layers,
  CalendarRange,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';
import { getArtifacts, getArtifactById } from '../utils/storage';
import { COLLECTION_CATEGORIES } from '../data/artifacts';
import { HISTORICAL_PERIODS } from '../data/timelineEvents';
import Timeline from '../components/Timeline';
import StatusBadge from '../components/StatusBadge';

const formatYearRange = (start, end) => {
  const fmt = (y) => {
    if (y === undefined || y === null) return '';
    if (y < 0) return `${Math.abs(y)} BCE`;
    return `${y} CE`;
  };
  if (start === undefined && end === undefined) return 'Date Range Estimated';
  if (start === end || end === undefined) return fmt(start);
  return `${fmt(start)} – ${fmt(end)}`;
};

export const TimelinePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const artifacts = getArtifacts();
  const activeArtifact = getArtifactById(id || artifacts[0]?.id);

  const [mode, setMode] = useState(id ? 'discovery' : 'network');
  const [expandedPeriodId, setExpandedPeriodId] = useState(HISTORICAL_PERIODS[1].id);

  // Mode C Controls
  const [zoomLevel, setZoomLevel] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [eraFilter, setEraFilter] = useState('All');
  const [selectedNetworkRecord, setSelectedNetworkRecord] = useState(artifacts[0] || null);
  const [showCompare, setShowCompare] = useState(false);
  const [compareAId, setCompareAId] = useState(artifacts[0]?.id || '');
  const [compareBId, setCompareBId] = useState(artifacts[10]?.id || artifacts[1]?.id || '');

  const eraBuckets = [
    { id: 'All', label: 'All Historical Horizons' },
    { id: 'bce', label: 'Prehistoric & BCE Horizon' },
    { id: 'early_ce', label: 'Early CE & Classical (1–600 CE)' },
    { id: 'medieval', label: 'Pallava–Chola Era (600–1500 CE)' },
    { id: 'modern', label: 'Manuscript Copies, Living Crafts & Modern (1500+ CE)' }
  ];

  const networkRecordsByLane = useMemo(() => {
    const filtered = artifacts.filter((a) => {
      if (categoryFilter !== 'All' && a.category !== categoryFilter) return false;
      const start = a.estimatedDateStart ?? 0;
      if (eraFilter === 'bce' && start >= 0) return false;
      if (eraFilter === 'early_ce' && (start < 0 || start > 600)) return false;
      if (eraFilter === 'medieval' && (start < 600 || start > 1500)) return false;
      if (eraFilter === 'modern' && start < 1500) return false;
      return true;
    });

    return COLLECTION_CATEGORIES.map((col) => ({
      collection: col,
      items: filtered
        .filter((item) => item.category === col.id)
        .sort((a, b) => (a.estimatedDateStart ?? 0) - (b.estimatedDateStart ?? 0))
    })).filter((lane) => categoryFilter === 'All' || lane.collection.id === categoryFilter);
  }, [artifacts, categoryFilter, eraFilter]);

  const compareA = artifacts.find((a) => a.id === compareAId) || artifacts[0];
  const compareB = artifacts.find((a) => a.id === compareBId) || artifacts[1];

  const cardWidthPx = Math.round(230 * zoomLevel);

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#307082] bg-[#307082]/10 px-3 py-1 rounded-full">
            Chronological Heritage Explorer
          </span>
          <h1 className="text-3xl font-serif font-bold text-[#12212E] mt-2 flex items-center gap-2">
            <Clock className="w-8 h-8 text-[#EA9940]" />
            Tamil Heritage Through Time
          </h1>
          <p className="text-xs text-slate-600 mt-1 max-w-2xl">
            Navigate Tamil Nadu’s multi-millennia heritage across historical eras, individual excavation/archival milestones, and a six-lane comparative chronology.
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
          {[
            { id: 'periods', label: 'Mode A: Historical Periods', icon: CalendarRange },
            { id: 'discovery', label: 'Mode B: Discovery Milestones', icon: Clock },
            { id: 'network', label: 'Mode C: Heritage Network Timeline', icon: Layers }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setMode(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  mode === tab.id
                    ? 'bg-[#12212E] text-[#EA9940] shadow-md'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* MODE A: Historical Period Timeline */}
      {mode === 'periods' && (
        <div className="space-y-4">
          <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 text-xs text-amber-950 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#EA9940] shrink-0 mt-0.5" />
            <span>
              Historical periods are presented as scholarly date ranges rather than fabricated single years, reflecting stratified excavations and epigraphic evidence across Tamil Nadu.
            </span>
          </div>

          <div className="relative border-l-2 border-[#307082]/40 pl-6 ml-3 space-y-5">
            {HISTORICAL_PERIODS.map((period) => {
              const isExpanded = expandedPeriodId === period.id;
              const linked = period.linkedIds
                .map((rid) => artifacts.find((a) => a.id === rid))
                .filter(Boolean);
              return (
                <div key={period.id} className="relative">
                  <div
                    className={`absolute -left-[31px] top-4 w-4 h-4 rounded-full border-2 ${
                      isExpanded ? 'bg-[#EA9940] border-[#12212E]' : 'bg-white border-[#307082]'
                    }`}
                  />
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setExpandedPeriodId(isExpanded ? null : period.id)}
                      className="w-full p-5 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/70 transition-colors"
                    >
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono font-bold text-[#EA9940] bg-[#12212E] px-2.5 py-0.5 rounded">
                          {period.dateRange}
                        </span>
                        <h3 className="text-lg font-serif font-bold text-[#12212E] pt-1">{period.era}</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">{period.summary}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#ECE7DC] text-[#12212E]">
                          {linked.length} Key Records
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-slate-500" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-500" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-5 pb-5 pt-3 border-t border-slate-100 bg-slate-50/60 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                          <div className="flex flex-wrap gap-1.5">
                            {period.highlights.map((hl) => (
                              <span
                                key={hl}
                                className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-medium"
                              >
                                {hl}
                              </span>
                            ))}
                          </div>
                          <span className="text-[11px] font-semibold text-[#307082]">
                            Basis: {period.confidence}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {linked.map((rec) => (
                            <Link
                              key={rec.id}
                              to={`/artifact/${rec.id}`}
                              className="p-3 bg-white rounded-xl border border-slate-200 hover:border-[#307082] transition-all flex items-center justify-between gap-2 group"
                            >
                              <div className="min-w-0">
                                <span className="text-[10px] font-mono font-bold text-[#307082] block">
                                  {rec.gai}
                                </span>
                                <span className="text-xs font-bold text-[#12212E] group-hover:text-[#307082] truncate block">
                                  {rec.name}
                                </span>
                              </div>
                              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#EA9940] shrink-0" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* MODE B: Artifact Discovery & Milestone Timeline */}
      {mode === 'discovery' && (
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              {activeArtifact && (
                <>
                  <span className="text-xs font-mono font-bold text-[#EA9940] bg-[#12212E] px-2.5 py-0.5 rounded">
                    {activeArtifact.gai}
                  </span>
                  <h2 className="text-xl font-serif font-bold text-[#12212E] mt-1">
                    {activeArtifact.name}
                  </h2>
                  <p className="text-xs text-slate-500">
                    {activeArtifact.period} • {activeArtifact.institution || activeArtifact.currentLocation}
                  </p>
                </>
              )}
            </div>

            <div className="flex items-center gap-2">
              <label className="text-xs font-semibold text-slate-600 whitespace-nowrap">Select Record:</label>
              <select
                value={activeArtifact?.id || ''}
                onChange={(e) => navigate(`/timeline/${e.target.value}`)}
                className="py-2.5 px-3.5 rounded-xl bg-slate-50 text-xs font-bold text-[#12212E] border border-slate-300 focus:border-[#307082] outline-none max-w-xs"
              >
                {artifacts.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.gai} — {a.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-md">
            <Timeline
              key={activeArtifact?.id}
              timeline={activeArtifact?.timeline}
              selectedArtifact={activeArtifact}
            />
          </div>
        </div>
      )}

      {/* MODE C: Multi-Lane Tamil Heritage Network Timeline */}
      {mode === 'network' && (
        <div className="space-y-6">
          {/* Controls Toolbar */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="py-2 px-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-[#12212E] outline-none"
              >
                <option value="All">All 6 Heritage Lanes</option>
                {COLLECTION_CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>{c.title}</option>
                ))}
              </select>

              <select
                value={eraFilter}
                onChange={(e) => setEraFilter(e.target.value)}
                className="py-2 px-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-[#12212E] outline-none"
              >
                {eraBuckets.map((eb) => (
                  <option key={eb.id} value={eb.id}>{eb.label}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.max(0.75, +(z - 0.15).toFixed(2)))}
                  className="p-1.5 rounded-lg hover:bg-white text-slate-700 transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="px-2 text-[11px] font-mono font-bold text-[#12212E]">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.min(1.5, +(z + 0.15).toFixed(2)))}
                  className="p-1.5 rounded-lg hover:bg-white text-slate-700 transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setZoomLevel(1);
                    setCategoryFilter('All');
                    setEraFilter('All');
                  }}
                  className="p-1.5 rounded-lg hover:bg-white text-slate-700 transition-colors"
                  title="Reset View"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setShowCompare((s) => !s)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-colors border ${
                  showCompare
                    ? 'bg-[#EA9940] text-[#12212E] border-[#EA9940]'
                    : 'bg-[#12212E] text-white border-[#12212E] hover:bg-[#307082]'
                }`}
              >
                <GitCompare className="w-3.5 h-3.5" />
                <span>{showCompare ? 'Hide Side-by-Side Compare' : 'Compare Two Artifacts'}</span>
              </button>
            </div>
          </div>

          {/* Compare Two Artifacts Panel */}
          {showCompare && compareA && compareB && (
            <div className="bg-white rounded-3xl border border-[#EA9940]/50 shadow-lg p-6 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <h3 className="font-serif font-bold text-lg text-[#12212E] flex items-center gap-2">
                  <GitCompare className="w-5 h-5 text-[#EA9940]" />
                  Side-by-Side Heritage Comparison
                </h3>
                <div className="flex flex-wrap gap-2">
                  <select
                    value={compareA.id}
                    onChange={(e) => setCompareAId(e.target.value)}
                    className="py-1.5 px-3 rounded-lg bg-slate-50 border border-slate-300 text-xs font-bold text-[#12212E] max-w-[230px]"
                  >
                    {artifacts.map((a) => (
                      <option key={a.id} value={a.id}>{a.name}</option>
                    ))}
                  </select>
                  <span className="text-xs font-bold text-slate-400 self-center">vs</span>
                  <select
                    value={compareB.id}
                    onChange={(e) => setCompareBId(e.target.value)}
                    className="py-1.5 px-3 rounded-lg bg-slate-50 border border-slate-300 text-xs font-bold text-[#12212E] max-w-[230px]"
                  >
                    {artifacts.map((a) => (
                      <option key={a.id} value={a.id}>{a.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                {[compareA, compareB].map((rec, idx) => (
                  <div key={`${rec.id}-${idx}`} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono font-bold text-[#EA9940] bg-[#12212E] px-2 py-0.5 rounded">
                        {rec.gai}
                      </span>
                      <StatusBadge status={rec.evidenceType || rec.verificationStatus} size="sm" />
                    </div>
                    <div>
                      <h4 className="text-base font-serif font-bold text-[#12212E]">{rec.name}</h4>
                      {rec.tamilName && <p className="text-[#307082] font-medium">{rec.tamilName}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-slate-400 block">Collection</span>
                        <span className="font-semibold text-slate-800">{rec.category}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-slate-400 block">Date Span</span>
                        <span className="font-semibold text-slate-800">
                          {formatYearRange(rec.estimatedDateStart, rec.estimatedDateEnd)}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-slate-400 block">Material</span>
                        <span className="font-semibold text-slate-800">{rec.material}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-slate-400 block">District / Origin</span>
                        <span className="font-semibold text-slate-800">{rec.district || rec.origin}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-[10px] font-bold uppercase text-slate-400 block">Custodian / Source</span>
                        <span className="font-semibold text-[#307082]">{rec.institution}</span>
                      </div>
                    </div>
                    <Link
                      to={`/artifact/${rec.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#307082] hover:text-[#12212E]"
                    >
                      <span>Open Full Digital Passport</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6 Horizontal Scrollable Category Lanes */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-600">
                Scroll horizontally inside each lane to browse dated heritage items chronologically. Click any card to inspect its summary below.
              </p>
              <span className="text-[11px] font-mono text-[#307082] font-bold">
                {networkRecordsByLane.reduce((acc, l) => acc + l.items.length, 0)} Items Shown
              </span>
            </div>

            <div className="space-y-5">
              {networkRecordsByLane.map(({ collection, items }) => (
                <div key={collection.id} className="space-y-2 border-b border-slate-100 pb-4 last:border-b-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: collection.accent }}
                      />
                      <h3 className="font-serif font-bold text-sm text-[#12212E]">{collection.title}</h3>
                      <span className="text-[11px] text-slate-400 font-medium">{collection.tamilTitle}</span>
                    </div>
                    <span className="text-[11px] font-bold text-slate-500">{items.length} records</span>
                  </div>

                  {items.length > 0 ? (
                    <div className="flex gap-3 overflow-x-auto pb-2 pt-1">
                      {items.map((item) => {
                        const isPicked = selectedNetworkRecord?.id === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setSelectedNetworkRecord(item)}
                            style={{ minWidth: `${cardWidthPx}px`, maxWidth: `${cardWidthPx}px` }}
                            className={`text-left p-3.5 rounded-xl border transition-all shrink-0 ${
                              isPicked
                                ? 'bg-[#12212E] text-white border-[#EA9940] shadow-md'
                                : 'bg-slate-50 hover:bg-[#ECE7DC]/50 text-[#12212E] border-slate-200'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-1 mb-1">
                              <span
                                className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                                  isPicked ? 'bg-[#EA9940] text-[#12212E]' : 'bg-white text-[#307082] border border-slate-200'
                                }`}
                              >
                                {formatYearRange(item.estimatedDateStart, item.estimatedDateEnd)}
                              </span>
                              {item.confidenceLevel && (
                                <span className={`text-[9px] font-bold uppercase ${isPicked ? 'text-slate-300' : 'text-slate-400'}`}>
                                  {item.confidenceLevel}
                                </span>
                              )}
                            </div>
                            <p className={`text-xs font-bold line-clamp-1 ${isPicked ? 'text-white' : 'text-[#12212E]'}`}>
                              {item.name}
                            </p>
                            <p className={`text-[10px] truncate mt-0.5 ${isPicked ? 'text-slate-300' : 'text-slate-500'}`}>
                              {item.district || item.origin}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-400 italic py-2">
                      No records in this lane match the selected historical horizon filter.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Selected Item Inspector Drawer */}
          {selectedNetworkRecord && (
            <div className="bg-white rounded-2xl border border-[#307082]/30 shadow-md p-6 flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[#12212E] text-[#EA9940]">
                    {selectedNetworkRecord.gai}
                  </span>
                  <span className="text-xs font-bold text-[#307082]">
                    {formatYearRange(selectedNetworkRecord.estimatedDateStart, selectedNetworkRecord.estimatedDateEnd)}
                  </span>
                  <StatusBadge status={selectedNetworkRecord.evidenceType || selectedNetworkRecord.verificationStatus} size="sm" />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#12212E]">
                  {selectedNetworkRecord.name}{' '}
                  {selectedNetworkRecord.tamilName && (
                    <span className="text-sm font-sans text-[#307082] font-normal">
                      ({selectedNetworkRecord.tamilName})
                    </span>
                  )}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">{selectedNetworkRecord.description}</p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
                <Link
                  to={`/artifact/${selectedNetworkRecord.id}`}
                  className="px-4 py-2.5 rounded-xl bg-[#12212E] text-[#EA9940] text-xs font-bold hover:bg-[#307082] hover:text-white transition-colors text-center"
                >
                  Open Digital Passport
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    navigate(`/timeline/${selectedNetworkRecord.id}`);
                    setMode('discovery');
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors"
                >
                  Inspect Milestones
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TimelinePage;
