import React from 'react';
import {
  CheckCircle2,
  Clock,
  AlertTriangle,
  ShieldCheck,
  Cpu,
  Award,
  BookOpen,
  HelpCircle
} from 'lucide-react';

export const StatusBadge = ({ status, showIcon = true, size = 'md' }) => {
  let styleClasses = 'bg-gray-100 text-gray-700 border-gray-300';
  let Icon = Clock;
  let label = status || 'Pending';

  switch (status?.toLowerCase()) {
    case 'verified':
    case 'verified & immutable':
      styleClasses = 'bg-emerald-50 text-emerald-800 border-emerald-300';
      Icon = ShieldCheck;
      label = 'Verified';
      break;
    case 'gi registered':
      styleClasses = 'bg-teal-50 text-teal-800 border-teal-300';
      Icon = Award;
      label = 'GI Registered';
      break;
    case 'traditional craft':
      styleClasses = 'bg-amber-50 text-amber-800 border-amber-300';
      Icon = Award;
      label = 'Traditional Craft';
      break;
    case 'registration not verified':
      styleClasses = 'bg-slate-100 text-slate-700 border-slate-300';
      Icon = HelpCircle;
      label = 'Registration Not Verified';
      break;
    case 'officially documented':
      styleClasses = 'bg-emerald-50 text-emerald-800 border-emerald-300';
      Icon = CheckCircle2;
      label = 'Officially Documented';
      break;
    case 'institutionally catalogued':
      styleClasses = 'bg-sky-50 text-sky-800 border-sky-300';
      Icon = BookOpen;
      label = 'Institutionally Catalogued';
      break;
    case 'scholarly reference':
      styleClasses = 'bg-indigo-50 text-indigo-800 border-indigo-300';
      Icon = BookOpen;
      label = 'Scholarly Reference';
      break;
    case 'publicly reported':
      styleClasses = 'bg-slate-100 text-slate-700 border-slate-300';
      Icon = Clock;
      label = 'Publicly Reported';
      break;
    case 'estimated':
      styleClasses = 'bg-amber-50 text-amber-800 border-amber-300';
      Icon = HelpCircle;
      label = 'Estimated';
      break;
    case 'pending':
    case 'pending verification':
    case 'pending institutional verification':
      styleClasses = 'bg-amber-50 text-amber-800 border-amber-300';
      Icon = Clock;
      label = 'Pending Verification';
      break;
    case 'ai matched':
    case 'ai matched found':
      styleClasses = 'bg-sky-50 text-sky-800 border-sky-300';
      Icon = Cpu;
      label = 'AI Identity Matched';
      break;
    case 'blockchain registered':
    case 'registered':
      styleClasses = 'bg-teal-50 text-teal-800 border-teal-300';
      Icon = CheckCircle2;
      label = 'Blockchain Registered';
      break;
    case 'flagged':
    case 'rejected':
      styleClasses = 'bg-rose-50 text-rose-800 border-rose-300';
      Icon = AlertTriangle;
      label = 'Action Required';
      break;
    default:
      styleClasses = 'bg-gray-100 text-gray-800 border-gray-300';
      Icon = Clock;
      break;
  }

  const paddingClasses = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-3 py-1 text-xs';

  return (
    <span className={`inline-flex items-center gap-1 font-semibold rounded-full border ${paddingClasses} ${styleClasses}`}>
      {showIcon && <Icon className={size === 'sm' ? 'w-3 h-3 shrink-0' : 'w-3.5 h-3.5 shrink-0'} />}
      <span>{label}</span>
    </span>
  );
};

export default StatusBadge;
