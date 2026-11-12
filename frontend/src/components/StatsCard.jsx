import React from 'react';

export const StatsCard = ({ title, value, change, changeType = 'positive', icon: Icon, color = 'teal' }) => {
  const colorMap = {
    teal: 'bg-[#307082]/10 text-[#307082] border-[#307082]/20',
    gold: 'bg-[#EA9940]/10 text-[#EA9940] border-[#EA9940]/20',
    navy: 'bg-[#12212E]/10 text-[#12212E] border-[#12212E]/20',
    soft: 'bg-[#6CA3A2]/10 text-[#6CA3A2] border-[#6CA3A2]/20',
    emerald: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
  };

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{title}</span>
        {Icon && (
          <div className={`p-2.5 rounded-lg border ${colorMap[color] || colorMap.teal}`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>
      <div className="flex items-baseline justify-between">
        <span className="text-2xl font-bold text-[#12212E] tracking-tight">{value}</span>
        {change && (
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
            changeType === 'positive' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'
          }`}>
            {change}
          </span>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
