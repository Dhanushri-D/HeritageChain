import React, { useState } from 'react';
import { Filter, ShieldCheck, Clock, Layers } from 'lucide-react';

export const Timeline = ({ timeline = [], selectedArtifact = null }) => {
  const [activeFilter, setActiveFilter] = useState('All Events');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const categories = [
    'All Events',
    'Origin',
    'Location',
    'Exhibition',
    'Verification',
    'Ownership',
    'Transfer'
  ];

  const filteredTimeline =
    activeFilter === 'All Events'
      ? timeline
      : timeline.filter((item) => item.category?.toLowerCase() === activeFilter.toLowerCase());

  if (!timeline || timeline.length === 0) {
    return (
      <div className="p-12 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300 space-y-2">
        <Clock className="w-10 h-10 mx-auto text-slate-300" />
        <h4 className="font-serif font-bold text-[#12212E] text-base">No Timeline Events Available</h4>
        <p className="text-xs text-slate-500">
          No chronological milestones have been logged for this heritage record yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {selectedArtifact && (
        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
          <Layers className="w-4 h-4 text-[#EA9940] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Chronological Distinction Notice:</span> Creation / historical use periods are separated from later excavation, physical manuscript copying, museum accession, and digital registry milestones.
          </div>
        </div>
      )}

      {/* Filters Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#12212E]">
          <Filter className="w-4 h-4 text-[#307082]" />
          <span>Filter Milestones:</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                activeFilter === cat
                  ? 'bg-[#12212E] text-[#EA9940] shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Vertical Interactive Timeline Stream */}
      {filteredTimeline.length > 0 ? (
        <div className="relative border-l-2 border-[#307082]/30 pl-6 space-y-6 my-4 ml-3">
          {filteredTimeline.map((event, idx) => {
            const isSelected = selectedEvent?.title === event.title && selectedEvent?.date === event.date;
            return (
              <div
                key={`${event.date}-${idx}`}
                onClick={() => setSelectedEvent(isSelected ? null : event)}
                className={`relative cursor-pointer group transition-all duration-200 ${
                  isSelected ? 'scale-[1.01]' : ''
                }`}
              >
                <div
                  className={`absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 transition-colors ${
                    isSelected
                      ? 'bg-[#EA9940] border-[#12212E] ring-4 ring-[#EA9940]/20'
                      : 'bg-white border-[#307082] group-hover:border-[#EA9940]'
                  }`}
                />

                <div
                  className={`p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-[#12212E] text-white border-[#307082] shadow-lg'
                      : 'bg-white text-slate-900 border-slate-200 hover:border-[#307082]/40 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-mono font-bold ${
                          isSelected ? 'bg-[#EA9940] text-[#12212E]' : 'bg-slate-100 text-[#307082]'
                        }`}
                      >
                        {event.date}
                      </span>
                      {event.milestoneType && (
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            isSelected
                              ? 'bg-[#307082] text-white'
                              : 'bg-[#ECE7DC] text-[#12212E]'
                          }`}
                        >
                          {event.milestoneType}
                        </span>
                      )}
                      <h4 className={`font-bold font-serif text-sm ${isSelected ? 'text-white' : 'text-[#12212E]'}`}>
                        {event.title}
                      </h4>
                    </div>
                    <span
                      className={`text-[11px] font-medium px-2 py-0.5 rounded-full shrink-0 ${
                        isSelected ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {event.category || 'Milestone'}
                    </span>
                  </div>

                  <p className={`text-xs mt-2 leading-relaxed ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                    {event.details}
                  </p>

                  {isSelected && (
                    <div className="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-[#EA9940]">
                      <span className="flex items-center gap-1 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Logged in Spatio-Temporal Heritage Ledger
                      </span>
                      <span className="text-slate-400 text-[11px]">Click to collapse</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-10 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200 space-y-2">
          <p className="text-xs font-semibold text-slate-600">
            No timeline events found under &ldquo;{activeFilter}&rdquo;.
          </p>
          <button
            onClick={() => setActiveFilter('All Events')}
            className="text-xs font-bold text-[#307082] hover:underline"
          >
            Show All Events
          </button>
        </div>
      )}
    </div>
  );
};

export default Timeline;
