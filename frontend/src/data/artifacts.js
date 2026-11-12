import { ARCHAEOLOGICAL_ARTIFACTS } from './archaeologicalArtifacts';
import { INSCRIPTIONS } from './inscriptions';
import { COINS_AND_TRADE } from './coinsAndTrade';
import { SCULPTURES } from './sculptures';
import { TRADITIONAL_CRAFTS } from './traditionalCrafts';
import { LITERARY_WORKS } from './literaryWorks';
import { MANUSCRIPTS } from './manuscripts';
import { FEATURED_HERITAGE_ARTIFACTS } from './featuredArtifacts';

export const COLLECTION_CATEGORIES = [
  {
    id: 'Archaeological Discoveries',
    title: 'Archaeological Discoveries',
    tamilTitle: 'தொல்லியல் கண்டுபிடிப்புகள்',
    shortLabel: 'Archaeology',
    artworkType: 'archaeological',
    coverImage: '/images/artifacts/keezhadi-site.jpg',
    description:
      'Iron Age urn burials, wrought-iron implements, prehistoric bronzes, and Early Historic urban excavations across Adichanallur, Sivagalai, Keezhadi, Kodumanal, and Arikamedu.',
    accent: '#EA9940'
  },
  {
    id: 'Inscriptions and Epigraphical Records',
    title: 'Inscriptions and Epigraphical Records',
    tamilTitle: 'கல்வெட்டுகள் & செப்பேடுகள்',
    shortLabel: 'Epigraphy',
    artworkType: 'inscription',
    coverImage: '/images/artifacts/tamil-brahmi-rock.jpg',
    description:
      'Early Tamil-Brahmi cavern drip-ledge edicts (Mangulam, Jambai, Sittannavasal, Pugalur), inscribed potsherds, copper-plate charters, and temple epigraphs.',
    accent: '#307082'
  },
  {
    id: 'Ancient Coins and Trade Objects',
    title: 'Ancient Coins and Trade Objects',
    tamilTitle: 'பண்டைய நாணயங்கள் & வணிகப் பொருட்கள்',
    shortLabel: 'Coins & Trade',
    artworkType: 'coin',
    coverImage: '/images/artifacts/roman-sangam-coins.jpg',
    description:
      'Punch-marked silver Karshapanas, early Tamil copper and lead issues, Roman gold and silver trade hoards, carnelian and Indo-Pacific beads, shankh ornaments, and historic trade treasures including Koh-i-Noor Diamond.',
    accent: '#D97706'
  },
  {
    id: 'Sculpture, Temple Art and Traditional Objects',
    title: 'Sculpture, Temple Art and Traditional Objects',
    tamilTitle: 'சிற்பங்கள் & கோவில் கலைகள்',
    shortLabel: 'Sculpture & Art',
    artworkType: 'sculpture',
    coverImage: '/images/artifacts/chola-bronze-nataraja.jpg',
    description:
      'Imperial Chola lost-wax bronzes, Pallava granite reliefs at Mahabalipuram and Kanchipuram, living folk Ayyanar terracottas, and traditional Thanjavur & Marapachchi craft figurines.',
    accent: '#6CA3A2'
  },
  {
    id: 'Traditional Tamil Crafts and GI Heritage',
    title: 'Traditional Tamil Crafts and GI Heritage',
    tamilTitle: 'பாரம்பரிய கைவினைகள் & புவிசார் குறியீடு',
    shortLabel: 'Crafts & GI',
    artworkType: 'craft',
    coverImage: '/images/artifacts/thanjavur-painting-jewellery.jpg',
    description:
      'Living Tamil Nadu artisan traditions including Swamimalai bronzes, Thanjavur paintings, Nachiarkoil Kuthuvilakku, Pathamadai mats, Toda embroidery, and Athangudi tiles with verified IP India GI Registry status labels.',
    accent: '#10B981'
  },
  {
    id: 'Tamil Literary and Manuscript Heritage',
    title: 'Tamil Literary and Manuscript Heritage',
    tamilTitle: 'தமிழ் இலக்கியம் & ஓலைச்சுவடிகள்',
    shortLabel: 'Literature & MSS',
    artworkType: 'literature',
    coverImage: '/images/artifacts/tamil-manuscripts.svg',
    description:
      'Classical literary canons (Thirukkural, Tolkappiyam, Silappathikaram, Sangam anthologies, Tirumurai) cleanly separated from and cross-linked to physical Olai Chuvadi palm-leaf copies and early printed editions.',
    accent: '#8B5CF6'
  }
];

const ARTIFACT_IMAGE_MAP = {
  'art-001': '/images/artifacts/kohinoor-diamond.svg',
  'arch-001': '/images/artifacts/adichanallur-urns.svg',
  'arch-002': '/images/artifacts/adichanallur-iron-bronze.jpg',
  'arch-003': '/images/artifacts/adichanallur-iron-bronze.jpg',
  'arch-004': '/images/artifacts/adichanallur-urns.svg',
  'arch-005': '/images/artifacts/adichanallur-iron-bronze.jpg',
  'arch-006': '/images/artifacts/trade-beads-shells.svg',
  'arch-007': '/images/artifacts/kodumanal-excavations.jpg',
  'arch-008': '/images/artifacts/keezhadi-site.jpg',
  'arch-009': '/images/artifacts/stone-tools.svg',
  'arch-010': '/images/artifacts/stone-tools.svg',
  'insc-001': '/images/artifacts/tamil-brahmi-rock.jpg',
  'insc-002': '/images/artifacts/tamil-brahmi-rock.jpg',
  'insc-003': '/images/artifacts/tamil-brahmi-rock.jpg',
  'insc-004': '/images/artifacts/tamil-brahmi-rock.jpg',
  'insc-005': '/images/artifacts/tamil-brahmi-rock.jpg',
  'insc-006': '/images/artifacts/keezhadi-site.jpg',
  'insc-007': '/images/artifacts/roman-sangam-coins.jpg',
  'insc-008': '/images/artifacts/copper-temple-records.jpg',
  'insc-009': '/images/artifacts/chola-copper-plates.jpg',
  'insc-010': '/images/artifacts/copper-temple-records.jpg',
  'coin-001': '/images/artifacts/ancient-coins.jpg',
  'coin-002': '/images/artifacts/roman-sangam-coins.jpg',
  'coin-003': '/images/artifacts/ancient-coins.jpg',
  'coin-004': '/images/artifacts/ancient-coins.jpg',
  'coin-005': '/images/artifacts/roman-sangam-coins.jpg',
  'coin-006': '/images/artifacts/roman-sangam-coins.jpg',
  'coin-007': '/images/artifacts/ancient-coins.jpg',
  'coin-008': '/images/artifacts/ancient-coins.jpg',
  'coin-009': '/images/artifacts/trade-beads-shells.svg',
  'coin-010': '/images/artifacts/trade-beads-shells.svg',
  'coin-011': '/images/artifacts/trade-beads-shells.svg',
  'coin-012': '/images/artifacts/kodumanal-excavations.jpg',
  'sculp-001': '/images/artifacts/chola-bronze-nataraja.jpg',
  'sculp-002': '/images/artifacts/chola-bronze-nataraja.jpg',
  'sculp-003': '/images/artifacts/chola-bronze-nataraja.jpg',
  'sculp-004': '/images/artifacts/chola-bronze-nataraja.jpg',
  'sculp-005': '/images/artifacts/pallava-granite-sculpture.svg',
  'sculp-006': '/images/artifacts/pallava-granite-sculpture.svg',
  'sculp-007': '/images/artifacts/pallava-granite-sculpture.svg',
  'sculp-008': '/images/artifacts/thanjavur-dolls-ayyanar.jpg',
  'sculp-009': '/images/artifacts/thanjavur-dolls-ayyanar.jpg',
  'sculp-010': '/images/artifacts/thanjavur-dolls-ayyanar.jpg',
  'craft-001': '/images/artifacts/metalwork-crafts.jpg',
  'craft-002': '/images/artifacts/thanjavur-painting-jewellery.jpg',
  'craft-003': '/images/artifacts/thanjavur-painting-jewellery.jpg',
  'craft-004': '/images/artifacts/metalwork-crafts.jpg',
  'craft-005': '/images/artifacts/metalwork-crafts.jpg',
  'craft-006': '/images/artifacts/thanjavur-dolls-ayyanar.jpg',
  'craft-007': '/images/artifacts/textile-veenai-craft.svg',
  'craft-008': '/images/artifacts/pallava-granite-sculpture.svg',
  'craft-009': '/images/artifacts/textile-veenai-craft.svg',
  'craft-010': '/images/artifacts/textile-veenai-craft.svg',
  'craft-011': '/images/artifacts/textile-veenai-craft.svg',
  'craft-012': '/images/artifacts/textile-veenai-craft.svg',
  'craft-013': '/images/artifacts/textile-veenai-craft.svg',
  'craft-014': '/images/artifacts/textile-veenai-craft.svg',
  'craft-015': '/images/artifacts/textile-veenai-craft.svg'
};

const withResolvedImage = (item) => {
  if (item.image) return item;
  if (ARTIFACT_IMAGE_MAP[item.id]) {
    return { ...item, image: ARTIFACT_IMAGE_MAP[item.id] };
  }
  if (item.recordType === 'manuscript') {
    return { ...item, image: '/images/artifacts/tamil-manuscripts.svg' };
  }
  if (item.recordType === 'literature') {
    return { ...item, image: '/images/artifacts/tamil-literature.svg' };
  }
  return item;
};

export const INITIAL_ARTIFACTS = [
  ...ARCHAEOLOGICAL_ARTIFACTS,
  ...INSCRIPTIONS,
  ...COINS_AND_TRADE,
  ...FEATURED_HERITAGE_ARTIFACTS,
  ...SCULPTURES,
  ...TRADITIONAL_CRAFTS,
  ...LITERARY_WORKS,
  ...MANUSCRIPTS
].map(withResolvedImage);

export const computeCollectionCounts = (artifacts = INITIAL_ARTIFACTS) => {
  const counts = {};
  COLLECTION_CATEGORIES.forEach((cat) => {
    counts[cat.id] = 0;
  });
  artifacts.forEach((item) => {
    if (counts[item.category] !== undefined) {
      counts[item.category] += 1;
    }
  });
  return counts;
};
