import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Map, MapPin, ExternalLink, Compass, Layers } from 'lucide-react';
import { getArtifacts, getArtifactById } from '../utils/storage';
import { HERITAGE_LOCATIONS } from '../data/heritageLocations';
import JourneyMap from '../components/JourneyMap';

const CATEGORY_COLORS = {
  Archaeological: '#EA9940',
  'Traditional Craft': '#10B981',
  Epigraphical: '#307082',
  'Museum & Archive': '#6CA3A2'
};

const createSiteIcon = (category, isSelected) => {
  const fill = CATEGORY_COLORS[category] || '#307082';
  return L.divIcon({
    className: 'tn-site-marker',
    html: `<div style="
      width: ${isSelected ? 22 : 16}px;
      height: ${isSelected ? 22 : 16}px;
      border-radius: 9999px;
      background: ${fill};
      border: 3px solid ${isSelected ? '#12212E' : '#FFFFFF'};
      box-shadow: 0 3px 10px rgba(18, 33, 46, 0.45);
    "></div>`,
    iconSize: [isSelected ? 22 : 16, isSelected ? 22 : 16],
    iconAnchor: [isSelected ? 11 : 8, isSelected ? 11 : 8],
    popupAnchor: [0, -10]
  });
};

const SiteMapFlyTo = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    if (typeof lat === 'number' && typeof lng === 'number') {
      map.flyTo([lat, lng], 8, { duration: 0.9 });
    }
  }, [lat, lng, map]);
  return null;
};

export const JourneyMapPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const artifacts = getArtifacts();
  const activeArtifact = getArtifactById(id || artifacts[0]?.id);

  const [viewMode, setViewMode] = useState(id ? 'artifact' : 'tamilnadu');
  const [siteCategory, setSiteCategory] = useState('All');
  const [selectedSite, setSelectedSite] = useState(HERITAGE_LOCATIONS[0]);

  const visibleSites = useMemo(() => {
    if (siteCategory === 'All') return HERITAGE_LOCATIONS;
    return HERITAGE_LOCATIONS.filter((loc) => loc.category === siteCategory);
  }, [siteCategory]);

  const currentSite = visibleSites.some((s) => s.id === selectedSite?.id)
    ? selectedSite
    : visibleSites[0] || HERITAGE_LOCATIONS[0];

  const linkedSiteRecords = useMemo(() => {
    if (!currentSite) return [];
    return (currentSite.relatedRecordIds || [])
      .map((rid) => artifacts.find((a) => a.id === rid))
      .filter(Boolean);
  }, [currentSite, artifacts]);

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#307082] bg-[#307082]/10 px-3 py-1 rounded-full">
            Tamil Nadu Heritage Cartography
          </span>
          <h1 className="text-3xl font-serif font-bold text-[#12212E] mt-2 flex items-center gap-2">
            <Map className="w-8 h-8 text-[#EA9940]" />
            Tamil Nadu Heritage &amp; Journey Map
          </h1>
          <p className="text-xs text-slate-600 mt-1 max-w-2xl">
            Explore authentic archaeological sites, epigraphical hills, traditional craft clusters, and museum custodians across Tamil Nadu—or inspect an individual artifact’s documented transit history.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
          <button
            onClick={() => setViewMode('tamilnadu')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              viewMode === 'tamilnadu'
                ? 'bg-[#12212E] text-[#EA9940] shadow-md'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Tamil Nadu Heritage Atlas ({HERITAGE_LOCATIONS.length})</span>
          </button>
          <button
            onClick={() => setViewMode('artifact')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              viewMode === 'artifact'
                ? 'bg-[#12212E] text-[#EA9940] shadow-md'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Single Record Locations</span>
          </button>
        </div>
      </div>

      {/* Mode 1: Tamil Nadu Heritage Atlas (No unrelated connecting polylines) */}
      {viewMode === 'tamilnadu' && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex flex-wrap gap-2">
              {['All', 'Archaeological', 'Traditional Craft', 'Epigraphical', 'Museum & Archive'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSiteCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold border transition-colors ${
                    siteCategory === cat
                      ? 'bg-[#12212E] text-[#EA9940] border-[#12212E]'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-[#307082]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <span className="text-[11px] text-slate-500 font-medium">
              Independent site markers plotted without artificial transit lines
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[620px]">
            {/* Map */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-300 shadow-md h-[420px] lg:h-full relative">
              <MapContainer
                center={[10.8, 78.7]}
                zoom={7}
                scrollWheelZoom={false}
                className="w-full h-full"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />
                {currentSite && <SiteMapFlyTo lat={currentSite.lat} lng={currentSite.lng} />}

                {visibleSites.map((loc) => {
                  const isSel = currentSite?.id === loc.id;
                  return (
                    <Marker
                      key={loc.id}
                      position={[loc.lat, loc.lng]}
                      icon={createSiteIcon(loc.category, isSel)}
                      eventHandlers={{ click: () => setSelectedSite(loc) }}
                    >
                      <Popup>
                        <div className="p-1 max-w-xs space-y-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#307082]">
                            {loc.category} • {loc.district}
                          </span>
                          <h4 className="font-serif font-bold text-sm text-[#12212E]">
                            {loc.name} ({loc.tamilName})
                          </h4>
                          <p className="text-[11px] text-slate-600 leading-relaxed">{loc.significance}</p>
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}
              </MapContainer>
            </div>

            {/* Site Inspector & List */}
            <div className="lg:col-span-5 flex flex-col gap-4 lg:h-full overflow-hidden">
              {currentSite && (
                <div className="bg-white rounded-2xl border border-[#307082]/30 shadow-sm p-5 space-y-3 shrink-0">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: CATEGORY_COLORS[currentSite.category] || '#307082' }}
                    >
                      {currentSite.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {currentSite.district} District
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl font-serif font-bold text-[#12212E]">{currentSite.name}</h2>
                    <p className="text-xs font-medium text-[#307082]">{currentSite.tamilName}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">{currentSite.significance}</p>

                  <div className="text-xs pt-2 border-t border-slate-100 space-y-2">
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">
                      Linked Registry Records ({linkedSiteRecords.length})
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {linkedSiteRecords.map((rec) => (
                        <Link
                          key={rec.id}
                          to={`/artifact/${rec.id}`}
                          className="px-2.5 py-1 rounded-lg bg-[#ECE7DC]/70 hover:bg-[#12212E] hover:text-[#EA9940] text-[#12212E] text-[11px] font-bold transition-colors flex items-center gap-1"
                        >
                          <span>{rec.name}</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-500 truncate">{currentSite.sourceName}</span>
                    {currentSite.sourceURL && (
                      <a
                        href={currentSite.sourceURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#307082] font-bold hover:underline flex items-center gap-1 shrink-0"
                      >
                        Source <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 flex-1 overflow-y-auto space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">
                  All Plotted Heritage Locations ({visibleSites.length})
                </p>
                {visibleSites.map((loc) => {
                  const isSel = currentSite?.id === loc.id;
                  return (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => setSelectedSite(loc)}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between gap-2 ${
                        isSel
                          ? 'bg-[#12212E] text-white border-[#EA9940]'
                          : 'bg-slate-50 hover:bg-slate-100 text-[#12212E] border-slate-200'
                      }`}
                    >
                      <div className="min-w-0">
                        <p className="text-xs font-bold truncate">{loc.name}</p>
                        <p className={`text-[11px] truncate ${isSel ? 'text-slate-300' : 'text-slate-500'}`}>
                          {loc.district} • {loc.category}
                        </p>
                      </div>
                      <MapPin className={`w-4 h-4 shrink-0 ${isSel ? 'text-[#EA9940]' : 'text-[#307082]'}`} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mode 2: Single Record Spatial Context */}
      {viewMode === 'artifact' && (
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-slate-600">
              Showing documented findspot and repository coordinates for <span className="font-bold text-[#12212E]">{activeArtifact?.name}</span>.
            </p>
            <div className="flex items-center gap-2">
              <label className="text-xs font-semibold text-slate-600 whitespace-nowrap">Select Record:</label>
              <select
                value={activeArtifact?.id || ''}
                onChange={(e) => navigate(`/journey/${e.target.value}`)}
                className="py-2 px-3 rounded-xl bg-slate-50 text-xs font-bold text-[#12212E] border border-slate-300 focus:border-[#307082] outline-none max-w-xs"
              >
                {artifacts.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.gai} — {a.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <JourneyMap
            journey={activeArtifact?.journey}
            artifactName={activeArtifact?.name}
            showMovementLine={(activeArtifact?.journey?.length || 0) > 1}
          />
        </div>
      )}
    </div>
  );
};

export default JourneyMapPage;
