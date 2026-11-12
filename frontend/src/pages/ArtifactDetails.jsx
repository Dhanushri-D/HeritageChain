import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ShieldCheck,
  Clock,
  GitCommit,
  Map,
  Network,
  Cpu,
  ArrowLeft,
  Award,
  BookOpen,
  MessageSquarePlus,
  ExternalLink,
  CheckCircle2,
  FileCheck2,
  AlertCircle,
  Link2,
  ZoomIn,
  X
} from 'lucide-react';
import {
  getArtifactById,
  getArtifacts,
  getCurrentUser,
  addArtifactReference,
  addArtifactCorrection,
  addNotification
} from '../utils/storage';
import StatusBadge from '../components/StatusBadge';
import ProvenanceChain from '../components/ProvenanceChain';
import Timeline from '../components/Timeline';
import JourneyMap from '../components/JourneyMap';
import KnowledgeGraph from '../components/KnowledgeGraph';
import BlockchainCard from '../components/BlockchainCard';
import ArtifactImage from '../components/ArtifactImage';
import { useToast } from '../utils/toast';

const Field = ({ label, value, span2 = false, highlight = false }) => {
  if (!value) return null;
  return (
    <div
      className={`p-3.5 rounded-xl border ${
        highlight
          ? 'bg-amber-50/70 border-amber-200 text-amber-950'
          : 'bg-slate-50 border-slate-200/70 text-[#12212E]'
      } ${span2 ? 'sm:col-span-2' : ''}`}
    >
      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
        {label}
      </span>
      <span className="text-xs font-semibold leading-relaxed block">{value}</span>
    </div>
  );
};

const TypeSpecificMetadataPanel = ({ artifact }) => {
  const meta = artifact.typeMetadata || {};
  const recordType = artifact.recordType;

  if (!Object.keys(meta).length) return null;

  if (recordType === 'archaeological') {
    return (
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <h3 className="font-serif font-bold text-lg text-[#12212E]">
          Archaeological Excavation Dossier
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="Excavation Site" value={meta.excavationSite} />
          <Field label="District" value={meta.district || artifact.district} />
          <Field label="Excavation Year / Season" value={meta.excavationYear} />
          <Field label="Archaeological Period" value={meta.archaeologicalPeriod || artifact.period} />
          <Field label="Estimated Date Range" value={meta.estimatedDate} span2 />
          <Field label="Excavation Report Reference" value={meta.excavationReport} span2 />
          <Field label="Current Collection" value={meta.currentCollection || artifact.currentLocation} span2 />
        </div>
      </div>
    );
  }

  if (recordType === 'inscription') {
    return (
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <h3 className="font-serif font-bold text-lg text-[#12212E]">
          Epigraphical Record Profile
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="Script" value={meta.script} />
          <Field label="Language" value={meta.language} />
          <Field label="Inscription Location" value={meta.inscriptionLocation} />
          <Field label="Epigraphical Date" value={meta.epigraphicalDate} />
          <Field label="Transliteration / Text" value={meta.transcription} span2 highlight />
          <Field label="Translation / Summary" value={meta.translation} span2 />
          <Field label="Documentation Source" value={meta.documentationSource} span2 />
        </div>
      </div>
    );
  }

  if (recordType === 'coin') {
    return (
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <h3 className="font-serif font-bold text-lg text-[#12212E]">
          Numismatic &amp; Trade Object Specification
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="Metal / Material" value={meta.metal || artifact.material} />
          <Field label="Weight" value={meta.weight} />
          <Field label="Diameter / Dimensions" value={meta.diameter} />
          <Field label="Discovery Location" value={meta.discoveryLocation} />
          <Field label="Symbol / Motif" value={meta.symbol} span2 />
          <Field label="Legend / Inscription" value={meta.inscription} span2 />
          <Field label="Scholarly Attribution & Uncertainty" value={meta.attribution} span2 highlight />
        </div>
      </div>
    );
  }

  if (recordType === 'sculpture') {
    return (
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-serif font-bold text-lg text-[#12212E]">
            Sculpture &amp; Traditional Object Profile
          </h3>
          {meta.classification && (
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#ECE7DC] text-[#12212E]">
              {meta.classification}
            </span>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="Artistic Style" value={meta.artisticStyle} />
          <Field label="Associated Tradition" value={meta.associatedTradition} />
          <Field label="Material Details" value={meta.materialDetails || artifact.material} />
          <Field label="Production Period" value={meta.productionPeriod || artifact.period} />
          <Field label="Place of Origin" value={meta.placeOfOrigin || artifact.origin} />
          <Field label="Current Location" value={meta.currentLocation || artifact.currentLocation} />
          <Field label="Historical vs Living Craft Note" value={meta.livingCraftDistinction} span2 highlight />
        </div>
      </div>
    );
  }

  if (recordType === 'craft') {
    const giBadge = artifact.giStatus || meta.giStatus;
    return (
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="font-serif font-bold text-lg text-[#12212E]">
            Living Craft &amp; GI Heritage Record
          </h3>
          {giBadge && <StatusBadge status={giBadge} />}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="Craft Name" value={meta.craftName || artifact.name} />
          <Field label="Tamil Name" value={meta.tamilName || artifact.tamilName} />
          <Field label="Place of Origin" value={meta.placeOfOrigin || artifact.origin} />
          <Field label="Artisan Community" value={meta.artisanCommunity} />
          <Field label="Crafting Technique" value={meta.craftingTechnique} span2 />
          <Field label="Cultural Significance" value={meta.culturalSignificance} span2 />
          <Field label="GI Registry Reference" value={meta.giReference} span2 highlight />
        </div>
        {meta.officialLink && (
          <a
            href={meta.officialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#307082] hover:text-[#12212E] underline"
          >
            <span>Verify Live Status on Official IP India GI / Poompuhar Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    );
  }

  if (recordType === 'literature') {
    return (
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <h3 className="font-serif font-bold text-lg text-[#12212E]">
          Classical Literary Work Profile
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Field label="Work Title" value={meta.workTitle || artifact.name} />
          <Field label="Author / Compiler" value={meta.authorOrCompiler} />
          <Field label="Literary Genre" value={meta.literaryGenre} />
          <Field label="Estimated Composition Period" value={meta.estimatedCompositionPeriod} />
          <Field label="Textual Structure" value={meta.structure} span2 />
          <Field label="Transmission & Preservation Form" value={meta.preservationForm} span2 />
          <Field label="Work vs Physical Copy Separation Note" value={meta.canonicalEditionNote} span2 highlight />
        </div>
      </div>
    );
  }

  // manuscript
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
      <h3 className="font-serif font-bold text-lg text-[#12212E]">
        Physical Manuscript &amp; Print Witness Profile
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label="Physical Object Type" value={meta.objectType} />
        <Field label="Script" value={meta.script} />
        <Field label="Copying / Imprint Period" value={meta.copyingPeriod} />
        <Field label="Preservation Institution" value={meta.preservationInstitution} />
        <Field label="Catalogue Reference" value={meta.catalogueReference} span2 />
        <Field label="Physical Condition" value={meta.physicalCondition} span2 />
        <Field label="Material Witness Distinction" value={meta.distinctionNote} span2 highlight />
      </div>
    </div>
  );
};

export const ArtifactDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const currentUser = getCurrentUser();

  const [, setRefreshCount] = useState(0);
  const [activeTabState, setActiveTabState] = useState({ id: null, tab: 'overview' });

  const allArtifacts = getArtifacts();
  const artifact = id ? getArtifactById(id) : allArtifacts[0];
  const activeTab = activeTabState.id === id ? activeTabState.tab : 'overview';
  const setActiveTab = (tab) => setActiveTabState({ id, tab });

  const [refTitle, setRefTitle] = useState('');
  const [refCitation, setRefCitation] = useState('');
  const [correctionField, setCorrectionField] = useState('Historical Period');
  const [correctionNote, setCorrectionNote] = useState('');
  const [showImageLightbox, setShowImageLightbox] = useState(false);

  if (!artifact) {
    return (
      <div className="p-12 text-center max-w-xl mx-auto space-y-4">
        <h2 className="text-2xl font-serif font-bold text-[#12212E]">Heritage Record Not Found</h2>
        <p className="text-xs text-slate-500">
          The requested GAI identifier or record ID could not be located in the registry.
        </p>
        <button
          onClick={() => navigate('/collections')}
          className="px-5 py-2.5 rounded-xl bg-[#307082] text-white font-bold text-xs hover:bg-[#12212E] transition-colors"
        >
          Browse Heritage Collections
        </button>
      </div>
    );
  }

  const isVerified = artifact.verificationStatus === 'Verified';
  const canContributeResearch =
    currentUser && ['researcher', 'curator', 'admin'].includes(currentUser.role);
  const relatedRecords = (artifact.relatedIds || [])
    .map((relId) => allArtifacts.find((a) => a.id === relId || a.gai === relId))
    .filter(Boolean);

  const handleAddReference = (e) => {
    e.preventDefault();
    if (!refTitle.trim() || !refCitation.trim()) {
      showToast('Please enter both a reference title and citation/DOI.', 'warning', 'Empty Form');
      return;
    }
    addArtifactReference(artifact.id, {
      title: refTitle.trim(),
      citation: refCitation.trim(),
      author: currentUser?.name || 'Researcher'
    });
    setRefreshCount((c) => c + 1);
    setRefTitle('');
    setRefCitation('');
    showToast('Academic reference linked to Digital Passport.', 'success', 'Reference Added');
  };

  const handleSuggestCorrection = (e) => {
    e.preventDefault();
    if (!correctionNote.trim()) {
      showToast('Please describe the suggested metadata correction.', 'warning', 'Empty Form');
      return;
    }
    addArtifactCorrection(artifact.id, {
      field: correctionField,
      suggestion: correctionNote.trim(),
      submittedBy: currentUser?.name || 'Researcher'
    });
    addNotification({
      title: 'Metadata Correction Suggested',
      message: `${currentUser?.name || 'Researcher'} suggested a ${correctionField} update for ${artifact.gai}.`,
      type: 'verification',
      link: `/artifact/${artifact.id}`
    });
    setRefreshCount((c) => c + 1);
    setCorrectionNote('');
    showToast('Correction proposal submitted for Curator & Admin review.', 'success', 'Proposal Logged');
  };

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto animate-fade-in">
      {/* Back button & GAI Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-xs font-semibold text-[#307082] hover:text-[#12212E] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Registry</span>
        </button>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-[#12212E] text-[#EA9940] border border-[#EA9940]/40 shadow-sm">
            {artifact.gai}
          </span>
          {(artifact.giStatus || artifact.typeMetadata?.giStatus) && (
            <StatusBadge status={artifact.giStatus || artifact.typeMetadata?.giStatus} />
          )}
          <StatusBadge status={artifact.verificationStatus} />
        </div>
      </div>

      {/* Main Hero Card: Digital Heritage Passport */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-5 relative bg-[#F4F1EA] flex flex-col justify-between min-h-[360px]">
          <div
            onClick={() => setShowImageLightbox(true)}
            className="relative flex-1 min-h-[300px] overflow-hidden cursor-zoom-in group"
            title="Click to inspect full high-resolution visual"
          >
            <ArtifactImage
              src={artifact.image}
              alt={artifact.name}
              recordType={artifact.recordType}
              category={artifact.category}
              tamilName={artifact.tamilName}
              subCategory={artifact.subCategory}
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />

            <div
              className={`absolute top-4 left-4 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold border flex items-center gap-2 shadow-lg ${
                isVerified
                  ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/40'
                  : 'bg-amber-950/90 text-amber-300 border-amber-500/40'
              }`}
            >
              {isVerified ? (
                <>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified Record</span>
                </>
              ) : (
                <>
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>{artifact.verificationStatus}</span>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowImageLightbox(true);
              }}
              className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-[#12212E]/90 text-[#EA9940] text-[11px] font-bold flex items-center gap-1.5 shadow-md hover:bg-[#307082] hover:text-white transition-colors"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              <span>HD View</span>
            </button>
          </div>

          <div className="bg-[#12212E] px-6 py-4 text-white space-y-0.5 border-t border-slate-800">
            <span className="text-[11px] uppercase tracking-widest font-mono text-[#EA9940] block">
              {artifact.period}
            </span>
            <h1 className="text-xl sm:text-2xl font-serif font-bold leading-tight">
              {artifact.name}
            </h1>
            {artifact.tamilName && (
              <p className="text-xs text-[#ECE7DC] font-medium">{artifact.tamilName}</p>
            )}
            <p className="text-[11px] text-slate-300 pt-0.5">{artifact.currentLocation}</p>
          </div>
        </div>

        <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 gap-3">
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                  Digital Heritage Passport • {artifact.category}
                </span>
                <h2 className="text-xl font-bold font-serif text-[#12212E]">{artifact.name}</h2>
              </div>
              <div className="text-right shrink-0">
                <span className="text-[10px] font-mono text-slate-400 block">Access / Updated</span>
                <span className="text-xs font-semibold text-slate-700">
                  {artifact.accessDate || artifact.registrationDate || '2026-11-12'}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">{artifact.description}</p>

            {/* Core Passport Fields */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-2">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                <span className="text-slate-400 text-[10px] font-semibold block uppercase">Origin</span>
                <span className="font-bold text-[#12212E] line-clamp-2" title={artifact.origin}>
                  {artifact.origin}
                </span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                <span className="text-slate-400 text-[10px] font-semibold block uppercase">District</span>
                <span className="font-bold text-[#12212E] truncate block">
                  {artifact.district || 'Tamil Nadu'}
                </span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                <span className="text-slate-400 text-[10px] font-semibold block uppercase">Material / Medium</span>
                <span className="font-bold text-[#12212E] line-clamp-2" title={artifact.material}>
                  {artifact.material}
                </span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60 sm:col-span-2">
                <span className="text-slate-400 text-[10px] font-semibold block uppercase">Custodian / Institution</span>
                <span className="font-bold text-[#307082] truncate block">
                  {artifact.institution || artifact.museum}
                </span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                <span className="text-slate-400 text-[10px] font-semibold block uppercase">Evidence Level</span>
                <span className="font-bold text-[#12212E] truncate block">
                  {artifact.evidenceType || 'Scholarly Reference'}
                </span>
              </div>
            </div>
          </div>

          {/* Tab Navigation Controls */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
            {[
              { id: 'overview', label: 'Passport Overview', icon: Award },
              { id: 'provenance', label: 'Provenance', icon: GitCommit },
              { id: 'timeline', label: 'Timeline', icon: Clock },
              { id: 'journey', label: 'Location Map', icon: Map },
              { id: 'graph', label: 'Knowledge Graph', icon: Network },
              { id: 'research', label: 'References & Corrections', icon: BookOpen }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#12212E] text-[#EA9940] shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content Display */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            {/* Dynamic Type-Specific Metadata Card */}
            <TypeSpecificMetadataPanel artifact={artifact} />

            {/* Provenance Preview Chain */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <ProvenanceChain provenance={artifact.provenance} />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Source & Evidence Authenticity Panel */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-serif font-bold text-base text-[#12212E] flex items-center gap-2">
                  <FileCheck2 className="w-5 h-5 text-[#307082]" />
                  Source &amp; Evidence Authenticity
                </h3>
                {artifact.evidenceType && <StatusBadge status={artifact.evidenceType} size="sm" />}
              </div>

              <div className="space-y-2.5 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <div>
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Primary Citation / Institution</span>
                  <span className="font-bold text-[#12212E]">{artifact.sourceName || artifact.institution}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">Confidence Level</span>
                    <span className="font-bold text-[#307082]">{artifact.confidenceLevel || 'High'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">Source Accessed</span>
                    <span className="font-mono font-semibold text-slate-700">{artifact.accessDate || '2026-11-12'}</span>
                  </div>
                </div>
                {artifact.sourceURL && (
                  <div className="pt-2 border-t border-slate-200">
                    <a
                      href={artifact.sourceURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#307082] hover:text-[#12212E] underline break-all"
                    >
                      <span>{artifact.sourceURL}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </div>
                )}
              </div>

              <p className="text-[11px] text-slate-500 flex items-start gap-1.5 leading-relaxed">
                <AlertCircle className="w-3.5 h-3.5 text-[#EA9940] shrink-0 mt-0.5" />
                <span>
                  Scholarly historical metadata is kept distinct from cryptographic ledger anchoring below. Uncertain attributions are explicitly annotated.
                </span>
              </p>
            </div>

            {/* Related Records */}
            {relatedRecords.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
                <h3 className="font-serif font-bold text-base text-[#12212E] flex items-center gap-2">
                  <Link2 className="w-4 h-4 text-[#EA9940]" />
                  Cross-Linked Heritage Records
                </h3>
                <div className="space-y-2">
                  {relatedRecords.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/artifact/${rel.id}`}
                      className="flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-50 hover:bg-[#ECE7DC]/60 border border-slate-200/80 transition-colors group"
                    >
                      <div className="min-w-0">
                        <span className="text-[10px] font-mono font-bold text-[#EA9940] bg-[#12212E] px-1.5 py-0.5 rounded">
                          {rel.gai}
                        </span>
                        <p className="text-xs font-bold text-[#12212E] group-hover:text-[#307082] truncate mt-1">
                          {rel.name}
                        </p>
                        <p className="text-[11px] text-slate-500 truncate">{rel.category}</p>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#307082] shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <BlockchainCard
              blockchain={artifact.blockchain}
              artifactName={artifact.name}
              gai={artifact.gai}
            />

            {artifact.aiSimilarity && (
              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sky-900 font-bold text-sm font-serif">
                    <Cpu className="w-5 h-5 text-sky-600" />
                    AI Identity Similarity Audit
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-sky-200 text-sky-900">
                    {artifact.aiSimilarity.score}% Score
                  </span>
                </div>
                <p className="text-xs text-sky-800 leading-relaxed">{artifact.aiSimilarity.notes}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'provenance' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <ProvenanceChain provenance={artifact.provenance} />
        </div>
      )}

      {activeTab === 'timeline' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <Timeline key={artifact.id} timeline={artifact.timeline} selectedArtifact={artifact} />
        </div>
      )}

      {activeTab === 'journey' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <JourneyMap key={artifact.id} journey={artifact.journey} artifactName={artifact.name} />
        </div>
      )}

      {activeTab === 'graph' && (
        <KnowledgeGraph key={artifact.id} relationships={artifact.relationships} artifactName={artifact.name} />
      )}

      {activeTab === 'research' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="font-serif font-bold text-lg text-[#12212E] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#307082]" />
                Scholarly References &amp; Citations
              </h3>
              <p className="text-xs text-slate-500">
                Archaeological papers, epigraphy corpora, and archive citations linked to {artifact.gai}.
              </p>
            </div>

            {canContributeResearch ? (
              <form onSubmit={handleAddReference} className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
                <p className="font-bold text-[#12212E]">Add Academic Reference</p>
                <input
                  type="text"
                  value={refTitle}
                  onChange={(e) => setRefTitle(e.target.value)}
                  placeholder="Publication or Archive Title"
                  className="w-full p-2.5 rounded-lg bg-white border border-slate-300 outline-none focus:border-[#307082]"
                />
                <input
                  type="text"
                  value={refCitation}
                  onChange={(e) => setRefCitation(e.target.value)}
                  placeholder="Journal, Year, DOI or Catalog ID (e.g., TNSDA Report 2019)"
                  className="w-full p-2.5 rounded-lg bg-white border border-slate-300 outline-none focus:border-[#307082]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#12212E] text-white font-bold hover:bg-[#307082] transition-colors"
                >
                  Link Reference
                </button>
              </form>
            ) : (
              <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200">
                Sign in as a <span className="font-bold">Researcher</span> or <span className="font-bold">Curator</span> to add scholarly references.
              </p>
            )}

            <div className="space-y-2.5">
              {(artifact.references || []).length > 0 ? (
                artifact.references.map((ref) => (
                  <div key={ref.id} className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#12212E]">{ref.title}</span>
                      <span className="text-[10px] font-mono text-slate-400">{ref.addedAt}</span>
                    </div>
                    <p className="text-slate-600">{ref.citation}</p>
                    <p className="text-[11px] text-[#307082] font-medium">Added by {ref.author}</p>
                  </div>
                ))
              ) : (
                <p className="text-xs text-slate-400 italic">No user-submitted citations added yet.</p>
              )}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <h3 className="font-serif font-bold text-lg text-[#12212E] flex items-center gap-2">
                <MessageSquarePlus className="w-5 h-5 text-[#EA9940]" />
                Suggest Metadata Corrections
              </h3>
              <p className="text-xs text-slate-500">
                Propose historical dating, origin, GI status, or attribution refinements for verification.
              </p>
            </div>

            {canContributeResearch ? (
              <form onSubmit={handleSuggestCorrection} className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Target Field</label>
                  <select
                    value={correctionField}
                    onChange={(e) => setCorrectionField(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-white border border-slate-300 outline-none focus:border-[#307082]"
                  >
                    <option value="Historical Period">Historical Period</option>
                    <option value="Geographical Origin">Geographical Origin</option>
                    <option value="Material Composition">Material Composition</option>
                    <option value="Scholarly Attribution">Scholarly Attribution</option>
                    <option value="GI Registration Status">GI Registration Status</option>
                  </select>
                </div>
                <textarea
                  rows={3}
                  value={correctionNote}
                  onChange={(e) => setCorrectionNote(e.target.value)}
                  placeholder="Provide historical evidence or correction details..."
                  className="w-full p-2.5 rounded-lg bg-white border border-slate-300 outline-none focus:border-[#307082]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#EA9940] text-[#12212E] font-bold hover:bg-[#e0892d] transition-colors"
                >
                  Submit Correction Proposal
                </button>
              </form>
            ) : (
              <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200">
                Sign in as a <span className="font-bold">Researcher</span> or <span className="font-bold">Curator</span> to propose corrections.
              </p>
            )}

            <div className="space-y-2.5">
              {(artifact.corrections || []).length > 0 ? (
                artifact.corrections.map((corr) => (
                  <div key={corr.id} className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/40 space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#12212E]">{corr.field}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-800 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        {corr.status}
                      </span>
                    </div>
                    <p className="text-slate-700">{corr.suggestion}</p>
                    <p className="text-[11px] text-slate-500">
                      Submitted by {corr.submittedBy} • {corr.submittedAt}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-xs text-slate-400 italic">No pending correction proposals for this record.</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* High-Resolution Image Inspection Lightbox */}
      {showImageLightbox && (
        <div
          onClick={() => setShowImageLightbox(false)}
          className="fixed inset-0 z-50 bg-[#0A131C]/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-[#12212E] rounded-3xl border border-slate-700 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 text-white">
              <div className="min-w-0">
                <span className="text-[11px] font-mono text-[#EA9940] font-bold">{artifact.gai}</span>
                <h3 className="font-serif font-bold text-base sm:text-lg truncate">{artifact.name}</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowImageLightbox(false)}
                className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close image zoom"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-[#0B141D] flex items-center justify-center max-h-[76vh] overflow-hidden p-4">
              <ArtifactImage
                src={artifact.image}
                alt={artifact.name}
                recordType={artifact.recordType}
                category={artifact.category}
                tamilName={artifact.tamilName}
                subCategory={artifact.subCategory}
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtifactDetails;
