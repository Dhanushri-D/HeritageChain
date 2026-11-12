import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapPin, Navigation, Landmark, ChevronRight, User } from 'lucide-react';

const createHeritageMarkerIcon = (stepNumber, isSelected) =>
  L.divIcon({
    className: 'heritage-div-icon',
    html: `<div style="
      width: 30px;
      height: 30px;
      border-radius: 9999px;
      background: ${isSelected ? '#EA9940' : '#12212E'};
      color: ${isSelected ? '#12212E' : '#FFFFFF'};
      border: 3px solid ${isSelected ? '#12212E' : '#EA9940'};
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 12px;
      font-family: ui-monospace, SFMono-Regular, monospace;
      box-shadow: 0 4px 12px rgba(18, 33, 46, 0.45);
    ">${stepNumber}</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -16]
  });

const MapRecenter = ({ lat, lng, zoom = 6 }) => {
  const map = useMap();

  useEffect(() => {
    if (typeof lat === 'number' && typeof lng === 'number') {
      map.flyTo([lat, lng], zoom, { duration: 1.0 });
    }
  }, [lat, lng, zoom, map]);

  return null;
};

export const JourneyMap = ({
  journey = [],
  artifactName = 'Documented Heritage Context',
  showMovementLine = true
}) => {
  const [selectedPoint, setSelectedPoint] = useState(null);

  if (!journey || journey.length === 0) {
    return (
      <div className="p-12 text-center text-slate-500 bg-slate-100 rounded-2xl">
        <MapPin className="w-10 h-10 mx-auto text-slate-400 mb-2" />
        <p className="font-semibold text-[#12212E]">No spatial coordinates recorded.</p>
      </div>
    );
  }

  const activePoint =
    selectedPoint && journey.some((j) => j.title === selectedPoint.title && j.year === selectedPoint.year)
      ? selectedPoint
      : journey[0];

  const polylineCoords = journey.map((item) => [item.lat, item.lng]);
  const defaultCenter = [journey[0].lat, journey[0].lng];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
      <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-slate-300 shadow-md relative h-[380px] lg:h-full">
        <MapContainer
          center={defaultCenter}
          zoom={7}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />

          <MapRecenter lat={activePoint?.lat} lng={activePoint?.lng} zoom={7} />

          {showMovementLine && polylineCoords.length > 1 && (
            <Polyline
              positions={polylineCoords}
              pathOptions={{ color: '#EA9940', weight: 4, dashArray: '8, 8', opacity: 0.9 }}
            />
          )}

          {journey.map((pt, idx) => {
            const isSelected = activePoint?.title === pt.title && activePoint?.year === pt.year;
            return (
              <Marker
                key={`${pt.title}-${idx}`}
                position={[pt.lat, pt.lng]}
                icon={createHeritageMarkerIcon(idx + 1, isSelected)}
                eventHandlers={{
                  click: () => setSelectedPoint(pt)
                }}
              >
                <Popup className="font-sans">
                  <div className="p-1 max-w-xs space-y-1.5">
                    <span className="text-[10px] font-mono font-bold text-[#EA9940] px-1.5 py-0.5 rounded bg-[#12212E]">
                      Point {idx + 1}: {pt.year}
                    </span>
                    <h4 className="font-bold text-[#12212E] text-sm mt-1">{pt.title}</h4>
                    <p className="text-xs text-slate-600 font-medium">{pt.location}</p>
                    {pt.custodian && (
                      <p className="text-[11px] text-[#307082] font-semibold">
                        Custodian: {pt.custodian}
                      </p>
                    )}
                    {pt.description && (
                      <p className="text-[11px] text-slate-500 border-t border-slate-100 pt-1">
                        {pt.description}
                      </p>
                    )}
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>

        <div className="absolute top-4 left-4 z-20 bg-[#12212E]/90 backdrop-blur-md text-white px-3.5 py-2 rounded-xl text-xs border border-slate-700 shadow-lg flex items-center gap-2 pointer-events-none">
          <Navigation className="w-4 h-4 text-[#EA9940]" />
          <div>
            <span className="font-bold block text-[#EA9940]">Documented Spatial Context</span>
            <span className="text-[10px] text-slate-300">{journey.length} Documented Location(s)</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-md flex flex-col h-[420px] lg:h-full overflow-hidden">
        <div className="pb-4 border-b border-slate-100">
          <h3 className="font-serif font-bold text-[#12212E] text-lg flex items-center gap-2">
            <Landmark className="w-5 h-5 text-[#307082]" />
            Documented Locations
          </h3>
          <p className="text-xs text-slate-500">{artifactName}</p>
        </div>

        <div className="flex-1 overflow-y-auto py-4 space-y-3 pr-1">
          {journey.map((step, idx) => {
            const isSelected = activePoint?.title === step.title && activePoint?.year === step.year;
            return (
              <div
                key={idx}
                onClick={() => setSelectedPoint(step)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[#12212E] text-white border-[#EA9940] shadow-md'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-[#307082]'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span
                    className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                      isSelected ? 'bg-[#EA9940] text-[#12212E]' : 'bg-[#307082]/10 text-[#307082]'
                    }`}
                  >
                    Location {idx + 1} • {step.year}
                  </span>
                  <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-[#EA9940]' : 'text-slate-400'}`} />
                </div>

                <h4 className={`font-bold text-sm font-serif ${isSelected ? 'text-white' : 'text-[#12212E]'}`}>
                  {step.title}
                </h4>
                <p className={`text-xs mt-0.5 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  {step.location}
                </p>

                {step.custodian && (
                  <div className={`flex items-center gap-1.5 text-[11px] mt-2 pt-2 border-t ${isSelected ? 'border-slate-700 text-[#6CA3A2]' : 'border-slate-200/80 text-[#307082]'}`}>
                    <User className="w-3 h-3" />
                    <span className="font-medium truncate">{step.custodian}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JourneyMap;
