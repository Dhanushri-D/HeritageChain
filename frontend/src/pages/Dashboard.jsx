import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';
import {
  FolderKanban,
  ShieldCheck,
  Clock,
  Cpu,
  GitCommit,
  PlusCircle,
  Activity,
  Compass,
  Network,
  Map,
  Users,
  CheckCircle2,
  Landmark,
  ScrollText,
  Coins,
  Palette,
  BookOpen,
  FileText,
  Library,
  ArrowRight
} from 'lucide-react';
import { getCurrentUser, getArtifacts, getMuseums, getNotifications } from '../utils/storage';
import { COLLECTION_CATEGORIES, computeCollectionCounts } from '../data/artifacts';
import StatsCard from '../components/StatsCard';
import ArtifactImage from '../components/ArtifactImage';
import StatusBadge from '../components/StatusBadge';

const MATERIAL_GROUP = (material = '') => {
  const m = material.toLowerCase();
  if (m.includes('terracotta') || m.includes('clay') || m.includes('ceramic') || m.includes('pottery')) return 'Clay & Pottery';
  if (m.includes('granite') || m.includes('stone') || m.includes('sandstone') || m.includes('carnelian')) return 'Stone & Mineral';
  if (m.includes('bronze') || m.includes('iron') || m.includes('brass') || m.includes('copper') || m.includes('silver') || m.includes('gold') || m.includes('lead') || m.includes('metal')) return 'Metals & Coins';
  if (m.includes('palm') || m.includes('paper') || m.includes('literary') || m.includes('poetic') || m.includes('print') || m.includes('hymn') || m.includes('prose')) return 'Text & Manuscript';
  return 'Wood, Fibre & Craft';
};

const PERIOD_BUCKET = (startYear = 0) => {
  if (startYear < -300) return 'Prehistoric & Iron Age';
  if (startYear <= 300) return 'Sangam & Early Historic';
  if (startYear <= 900) return 'Post-Sangam & Pallava';
  if (startYear <= 1500) return 'Imperial Chola & Pandya';
  return 'Nayak, Modern & Living';
};

export const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const currentUser = getCurrentUser();
  const artifacts = getArtifacts();
  const museums = getMuseums();
  const notifications = getNotifications();
  const role = currentUser?.role || 'public';

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 250);
    return () => clearTimeout(timer);
  }, []);

  const stats = useMemo(() => {
    const countsByCollection = computeCollectionCounts(artifacts);
    const literaryWorks = artifacts.filter((a) => a.recordType === 'literature').length;
    const manuscripts = artifacts.filter((a) => a.recordType === 'manuscript').length;
    const verified = artifacts.filter((a) => a.verificationStatus === 'Verified').length;
    const pending = artifacts.filter((a) => a.verificationStatus !== 'Verified').length;

    return {
      total: artifacts.length,
      archaeological: countsByCollection['Archaeological Discoveries'] || 0,
      inscriptions: countsByCollection['Inscriptions and Epigraphical Records'] || 0,
      coins: countsByCollection['Ancient Coins and Trade Objects'] || 0,
      sculptures: countsByCollection['Sculpture, Temple Art and Traditional Objects'] || 0,
      crafts: countsByCollection['Traditional Tamil Crafts and GI Heritage'] || 0,
      literaryWorks,
      manuscripts,
      verified,
      pending
    };
  }, [artifacts]);

  // 5 Recharts datasets derived live from the dataset
  const collectionChartData = useMemo(
    () =>
      COLLECTION_CATEGORIES.map((col) => ({
        name: col.shortLabel,
        count: artifacts.filter((a) => a.category === col.id).length
      })),
    [artifacts]
  );

  const periodChartData = useMemo(() => {
    const order = [
      'Prehistoric & Iron Age',
      'Sangam & Early Historic',
      'Post-Sangam & Pallava',
      'Imperial Chola & Pandya',
      'Nayak, Modern & Living'
    ];
    const map = {};
    order.forEach((p) => {
      map[p] = 0;
    });
    artifacts.forEach((a) => {
      const bucket = PERIOD_BUCKET(a.estimatedDateStart ?? 0);
      map[bucket] = (map[bucket] || 0) + 1;
    });
    return order.map((period) => ({ period, count: map[period] }));
  }, [artifacts]);

  const districtChartData = useMemo(() => {
    const counts = {};
    artifacts.forEach((a) => {
      const primaryDistrict = (a.district || 'Tamil Nadu').split('/')[0].trim();
      counts[primaryDistrict] = (counts[primaryDistrict] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([district, count]) => ({ district, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);
  }, [artifacts]);

  const materialChartData = useMemo(() => {
    const counts = {};
    artifacts.forEach((a) => {
      const group = MATERIAL_GROUP(a.material);
      counts[group] = (counts[group] || 0) + 1;
    });
    return Object.entries(counts).map(([material, count]) => ({ material, count }));
  }, [artifacts]);

  const verificationPieData = useMemo(
    () => [
      { name: 'Verified', value: stats.verified, color: '#307082' },
      { name: 'Pending Verification', value: stats.pending, color: '#EA9940' },
      {
        name: 'GI Registered Crafts',
        value: artifacts.filter((a) => (a.giStatus || a.typeMetadata?.giStatus) === 'GI Registered').length,
        color: '#10B981'
      }
    ],
    [artifacts, stats]
  );

  const recentRecords = useMemo(() => artifacts.slice(0, 6), [artifacts]);

  if (loading) {
    return (
      <div className="space-y-6 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        <div className="h-24 rounded-2xl bg-slate-200 animate-shimmer" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((k) => (
            <div key={k} className="h-28 rounded-xl bg-slate-200 animate-shimmer" />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="h-72 rounded-2xl bg-slate-200 animate-shimmer" />
          <div className="h-72 rounded-2xl bg-slate-200 animate-shimmer" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto animate-fade-in">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#307082] bg-[#307082]/10 px-3 py-1 rounded-full">
            Tamil Heritage Analytics • {currentUser?.roleLabel || 'Public Explorer'}
          </span>
          <h1 className="text-3xl font-serif font-bold text-[#12212E] mt-2 flex items-center gap-2">
            <Activity className="w-8 h-8 text-[#EA9940]" />
            HeritageChain Registry Dashboard
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Signed in as <span className="font-bold text-[#12212E]">{currentUser?.name || 'Guest Explorer'}</span> ({currentUser?.institution || 'Public Access'}) • {museums.length} Partner Institutions
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            to="/collections"
            className="px-4 py-2.5 rounded-xl bg-[#12212E] text-white font-bold text-xs hover:bg-[#307082] transition-colors shadow-sm flex items-center gap-1.5"
          >
            <Library className="w-4 h-4 text-[#EA9940]" />
            <span>Heritage Collections</span>
          </Link>
          {(role === 'admin' || role === 'curator') && (
            <Link
              to="/register"
              className="px-4 py-2.5 rounded-xl bg-[#EA9940] text-[#12212E] font-bold text-xs hover:bg-[#e0892d] transition-colors shadow-sm flex items-center gap-1.5"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Register Record</span>
            </Link>
          )}
          {role === 'admin' && (
            <Link
              to="/verification"
              className="px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-[#12212E] font-bold text-xs hover:border-[#307082] transition-colors shadow-sm flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4 text-[#307082]" />
              <span>Verify Queue ({stats.pending})</span>
            </Link>
          )}
        </div>
      </div>

      {/* 10 KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatsCard title="Total Heritage Records" value={stats.total} change="6 Collections" icon={FolderKanban} color="navy" />
        <StatsCard title="Archaeological Artifacts" value={stats.archaeological} change="Excavated Sites" icon={Landmark} color="gold" />
        <StatsCard title="Inscriptions" value={stats.inscriptions} change="Epigraphy Corpus" icon={ScrollText} color="teal" />
        <StatsCard title="Coins & Trade Objects" value={stats.coins} change="Numismatics" icon={Coins} color="gold" />
        <StatsCard title="Sculptures" value={stats.sculptures} change="Bronzes & Stone" icon={Compass} color="soft" />
        <StatsCard title="Traditional Crafts" value={stats.crafts} change="GI & Living Crafts" icon={Palette} color="emerald" />
        <StatsCard title="Literary Works" value={stats.literaryWorks} change="Canonical Texts" icon={BookOpen} color="navy" />
        <StatsCard title="Manuscripts & Prints" value={stats.manuscripts} change="Olai Chuvadi" icon={FileText} color="teal" />
        <StatsCard title="Verified Records" value={stats.verified} change="Documented" icon={ShieldCheck} color="emerald" />
        <StatsCard title="Pending Verification" value={stats.pending} change="Review Needed" icon={Clock} color="gold" />
      </div>

      {/* Role Quick Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
        <Link to="/explore" className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-[#307082] shadow-sm flex items-center gap-3 transition-all">
          <Compass className="w-5 h-5 text-[#EA9940] shrink-0" />
          <div>
            <p className="font-serif font-bold text-[#12212E]">Explore Registry</p>
            <p className="text-[11px] text-slate-500">Filter by district &amp; GI status</p>
          </div>
        </Link>
        <Link to="/timeline" className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-[#307082] shadow-sm flex items-center gap-3 transition-all">
          <Clock className="w-5 h-5 text-[#307082] shrink-0" />
          <div>
            <p className="font-serif font-bold text-[#12212E]">Through Time</p>
            <p className="text-[11px] text-slate-500">3 chronological modes</p>
          </div>
        </Link>
        <Link to="/journey" className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-[#307082] shadow-sm flex items-center gap-3 transition-all">
          <Map className="w-5 h-5 text-[#EA9940] shrink-0" />
          <div>
            <p className="font-serif font-bold text-[#12212E]">Tamil Heritage Map</p>
            <p className="text-[11px] text-slate-500">Sites &amp; craft clusters</p>
          </div>
        </Link>
        <Link
          to={role === 'admin' ? '/users' : role === 'public' ? '/graph/arch-001' : '/ai-matching'}
          className="bg-white p-4 rounded-2xl border border-slate-200 hover:border-[#307082] shadow-sm flex items-center gap-3 transition-all"
        >
          {role === 'admin' ? (
            <Users className="w-5 h-5 text-[#307082] shrink-0" />
          ) : role === 'public' ? (
            <Network className="w-5 h-5 text-[#307082] shrink-0" />
          ) : (
            <Cpu className="w-5 h-5 text-[#307082] shrink-0" />
          )}
          <div>
            <p className="font-serif font-bold text-[#12212E]">
              {role === 'admin' ? 'Manage Users' : role === 'public' ? 'Knowledge Graph' : 'AI Identity Matching'}
            </p>
            <p className="text-[11px] text-slate-500">
              {role === 'admin' ? 'Role governance' : role === 'public' ? 'Entity relationships' : 'Semantic record check'}
            </p>
          </div>
        </Link>
      </div>

      {/* 5 Recharts Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chart 1: Records by Collection */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="font-serif font-bold text-[#12212E] text-base">Records by Collection</h3>
            <p className="text-xs text-slate-500">Distribution across the 6 Tamil heritage categories</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={collectionChartData}>
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: '#12212E', color: '#fff', borderRadius: '12px', fontSize: '12px' }} />
                <Bar dataKey="count" fill="#307082" radius={[6, 6, 0, 0]} name="Records" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Verification & GI Status */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="font-serif font-bold text-[#12212E] text-base">Verification &amp; GI Status</h3>
            <p className="text-xs text-slate-500">Verification states &amp; authenticated GI craft coverage</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={verificationPieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={52}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {verificationPieData.map((entry, idx) => (
                    <Cell key={idx} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#12212E', color: '#fff', borderRadius: '12px', fontSize: '12px' }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 3: Records by Historical Period */}
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="font-serif font-bold text-[#12212E] text-base">Records by Historical Period</h3>
            <p className="text-xs text-slate-500">Chronological horizon distribution</p>
          </div>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={periodChartData}>
                <XAxis dataKey="period" stroke="#94a3b8" fontSize={9} />
                <YAxis stroke="#94a3b8" fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: '#12212E', color: '#fff', borderRadius: '12px', fontSize: '12px' }} />
                <Bar dataKey="count" fill="#EA9940" radius={[6, 6, 0, 0]} name="Records" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 4: Records by District */}
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="font-serif font-bold text-[#12212E] text-base">Records by District</h3>
            <p className="text-xs text-slate-500">Top Tamil Nadu &amp; Puducherry heritage districts</p>
          </div>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={districtChartData} layout="vertical">
                <XAxis type="number" stroke="#94a3b8" fontSize={11} />
                <YAxis dataKey="district" type="category" stroke="#94a3b8" fontSize={10} width={95} />
                <Tooltip contentStyle={{ backgroundColor: '#12212E', color: '#fff', borderRadius: '12px', fontSize: '12px' }} />
                <Bar dataKey="count" fill="#6CA3A2" radius={[0, 6, 6, 0]} name="Records" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 5: Material Distribution */}
        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="font-serif font-bold text-[#12212E] text-base">Material Distribution</h3>
            <p className="text-xs text-slate-500">Clay, stone, metals, textiles &amp; literary media</p>
          </div>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={materialChartData}>
                <XAxis dataKey="material" stroke="#94a3b8" fontSize={9} />
                <YAxis stroke="#94a3b8" fontSize={11} />
                <Tooltip contentStyle={{ backgroundColor: '#12212E', color: '#fff', borderRadius: '12px', fontSize: '12px' }} />
                <Bar dataKey="count" fill="#12212E" radius={[6, 6, 0, 0]} name="Records" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recently Added Records with Images / Visuals */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="font-serif font-bold text-[#12212E] text-lg">Recently Indexed Heritage Records</h3>
            <p className="text-xs text-slate-500">Visual cards from across the multi-category Tamil registry</p>
          </div>
          <Link to="/explore" className="text-xs font-bold text-[#307082] hover:underline flex items-center gap-1">
            <span>View All ({artifacts.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentRecords.map((rec) => (
            <Link
              key={rec.id}
              to={`/artifact/${rec.id}`}
              className="flex items-center gap-3.5 p-3 rounded-2xl border border-slate-200 hover:border-[#307082] hover:shadow-md transition-all group bg-slate-50/50"
            >
              <ArtifactImage
                src={rec.image}
                alt={rec.name}
                recordType={rec.recordType}
                category={rec.category}
                tamilName={rec.tamilName}
                subCategory={rec.subCategory}
                compact
                className="w-20 h-20 rounded-xl object-cover shrink-0 border border-slate-200"
              />
              <div className="min-w-0 flex-1 space-y-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#12212E] text-[#EA9940]">
                    {rec.gai}
                  </span>
                  <StatusBadge status={rec.verificationStatus} size="sm" />
                </div>
                <h4 className="font-serif font-bold text-sm text-[#12212E] group-hover:text-[#307082] truncate">
                  {rec.name}
                </h4>
                <p className="text-[11px] text-slate-500 truncate">
                  {rec.category} • {rec.district || rec.origin}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Live Ledger Activity Feed */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-serif font-bold text-[#12212E] text-base">Recent Registry &amp; Verification Updates</h3>
          <span className="text-xs font-mono text-emerald-600 font-bold flex items-center gap-1">
            <GitCommit className="w-3.5 h-3.5" /> Registry Synced
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {notifications.slice(0, 5).map((act) => (
            <Link
              key={act.id}
              to={act.link || '/explore'}
              className="py-3 flex items-center justify-between gap-4 text-xs hover:bg-slate-50 px-2 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-2 h-2 rounded-full bg-[#EA9940] shrink-0" />
                <span className="font-medium text-slate-800 truncate">{act.message}</span>
              </div>
              <span className="text-slate-400 font-mono shrink-0">{act.time}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
