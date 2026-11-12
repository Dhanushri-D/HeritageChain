export const LITERARY_WORKS = [
  {
    id: 'lit-001',
    gai: 'GAI-TN-LIT-0001',
    name: 'Thirukkural',
    tamilName: 'திருக்குறள்',
    category: 'Tamil Literary and Manuscript Heritage',
    subCategory: 'Ethical Classic (Padinenkilkanakku)',
    recordType: 'literature',
    description:
      'Universal Tamil ethical treatise authored by Thiruvalluvar comprising 1,330 couplets (Kural venpa) organized into 133 chapters across three books: Aram (Virtue), Porul (Polity & Wealth), and Inbam (Love). Abstract literary composition distinct from specific manuscript witnesses.',
    material: 'Literary Composition (Transmitted via Palm-Leaf & Print)',
    origin: 'Tamilakam (Traditionally associated with Mylapore / Madurai)',
    district: 'Chennai / Madurai',
    period: 'Post-Sangam Classical Period (c. 3rd–6th Century CE)',
    estimatedDateStart: 300,
    estimatedDateEnd: 550,
    currentLocation: 'Universal Digital & Print Corpus (Tamil Virtual Academy / CICT)',
    institution: 'Tamil Virtual Academy / CICT',
    image: '',
    sourceName: 'Tamil Virtual Academy & Central Institute of Classical Tamil',
    sourceURL: 'https://www.tamilvu.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      workTitle: 'Thirukkural (Muppal)',
      authorOrCompiler: 'Thiruvalluvar',
      literaryGenre: 'Didactic & Ethical Treatise (1,330 Kural couplets)',
      estimatedCompositionPeriod: 'c. 3rd–6th Century CE (scholarly consensus range)',
      structure: '3 Books (Aram, Porul, Inbam) • 133 Adhikarams • 1,330 Couplets',
      preservationForm: 'Commentarial tradition (Manakudavar, Parimelazhagar), Olai Chuvadi manuscripts, and global prints',
      canonicalEditionNote: 'Literary work metadata tracked separately from individual palm-leaf copies (see GAI-TN-MS-0004).'
    },
    provenance: [
      { year: 'c. 3rd–6th c. CE', title: 'Classical Composition', custodian: 'Tamil Literary Tradition', location: 'Tamilakam', event: 'Composed in concise Kural venpa metre.', verified: true, hash: '0x1l01...e101' },
      { year: '13th c. CE', title: 'Parimelazhagar Commentary', custodian: 'Kanchipuram / Tamil Scholars', location: 'Tamil Nadu', event: 'Standardized authoritative medieval exegesis.', verified: true, hash: '0x1l02...e102' },
      { year: '1812 / 2000s', title: 'First Print & Digital Archiving', custodian: 'Ellis / Tamil Virtual Academy', location: 'Chennai', event: 'Printed in Madras (1812) and digitized in Unicode open corpus.', verified: true, hash: '0x1l03...e103' }
    ],
    timeline: [
      { date: 'c. 300–550 CE', milestoneType: 'Composition', title: 'Composition of Thirukkural', category: 'Origin', details: '1,330 couplets across Virtue, Polity, and Love.' },
      { date: 'c. 13th c. CE', milestoneType: 'Commentary', title: 'Parimelazhagar Urai Written', category: 'Verification', details: 'Most influential classical commentary.' },
      { date: '1812', milestoneType: 'Early Print', title: 'Early Madras Printed Editions', category: 'Exhibition', details: 'Printed by Francis Whyte Ellis & Thanjavur Malaiyappan.' }
    ],
    journey: [
      { title: 'Chennai (Tamil Virtual Academy & CICT)', year: 'Modern Digital Corpus', lat: 13.0068, lng: 80.2423, location: 'Chennai, Tamil Nadu', custodian: 'Tamil Virtual Academy / CICT', description: 'Open critical digital edition & research repository.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Thirukkural', type: 'literature', color: '#EA9940' },
        { id: 'n1', label: 'Thiruvalluvar', type: 'person', color: '#12212E' },
        { id: 'n2', label: 'Thirukkural Manuscript Witness', type: 'manuscript', color: '#307082' },
        { id: 'n3', label: 'Parimelazhagar Commentary', type: 'literature', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Authored By' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Physical Witness' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Explicated In' }
      ]
    },
    relatedIds: ['ms-004', 'lit-011', 'lit-012'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xc610e101b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef51',
      blockNumber: 28491901,
      timestamp: '12 Nov 2026, 11:45:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'lit-002',
    gai: 'GAI-TN-LIT-0002',
    name: 'Tolkappiyam',
    tamilName: 'தொல்காப்பியம்',
    category: 'Tamil Literary and Manuscript Heritage',
    subCategory: 'Classical Grammar & Poetics',
    recordType: 'literature',
    description:
      'Earliest extant comprehensive treatise on Tamil grammar, phonology, morphology, syntax, and poetics (Akam and Puram), traditionally ascribed to Tolkappiyar. Divides human experience into Tinai ecological landscapes.',
    material: 'Literary Treatise (Oral & Manuscript Transmission)',
    origin: 'Tamilakam',
    district: 'Madurai / Thanjavur',
    period: 'Early Classical / Sangam Core (c. 3rd Century BCE – 5th Century CE stratified layers)',
    estimatedDateStart: -200,
    estimatedDateEnd: 450,
    currentLocation: 'CICT & Tamil Virtual Academy Critical Corpus',
    institution: 'Central Institute of Classical Tamil (CICT)',
    image: '',
    sourceName: 'Central Institute of Classical Tamil & Kamil Zvelebil',
    sourceURL: 'https://www.cict.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      workTitle: 'Tolkappiyam',
      authorOrCompiler: 'Tolkappiyar',
      literaryGenre: 'Grammar, Linguistics & Tinai Poetics (1,610 Nulpa aphorisms)',
      estimatedCompositionPeriod: 'Stratified early layers (c. 2nd c. BCE – 4th/5th c. CE)',
      structure: 'Ezhuttatikaram (Phonology), Sollatikaram (Morphology), Porulatikaram (Poetics)',
      preservationForm: 'Commentaries of Ilampuranar, Senavaraiyar, Perasiriyar, Nachinarkiniyar; Olai Chuvadi copies',
      canonicalEditionNote: 'Work metadata separated from surviving palm-leaf manuscript witnesses (GAI-TN-MS-0003).'
    },
    provenance: [
      { year: 'Early Classical Era', title: 'Canonical Grammar Codification', custodian: 'Tamil Sangam Tradition', location: 'Tamilakam', event: 'Codified Tamil phonology and Akam-Puram poetics.', verified: true, hash: '0x2l01...e111' },
      { year: '11th–14th c. CE', title: 'Medieval Commentators', custodian: 'Ilampuranar & Nachinarkiniyar', location: 'Tamil Nadu', event: 'Commentaries ensured transmission of technical sutras.', verified: true, hash: '0x2l02...e112' }
    ],
    timeline: [
      { date: 'c. 200 BCE–450 CE', milestoneType: 'Composition', title: 'Tolkappiyam Sutras Codified', category: 'Origin', details: 'Earliest surviving Tamil grammatical grammar.' },
      { date: '1847–1868', milestoneType: 'Early Print', title: 'First Printed Editions', category: 'Exhibition', details: 'Published in Madras by Mazhavai Mahalingaiyar & C.W. Damodaram Pillai.' }
    ],
    journey: [
      { title: 'CICT, Chennai', year: 'Modern Critical Study', lat: 12.9056, lng: 80.2289, location: 'Sholinganallur, Chennai, TN', custodian: 'Central Institute of Classical Tamil', description: 'Dedicated classical Tamil research center.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Tolkappiyam', type: 'literature', color: '#EA9940' },
        { id: 'n1', label: 'Tolkappiyar', type: 'person', color: '#12212E' },
        { id: 'n2', label: 'Tolkappiyam Palm-Leaf Copy', type: 'manuscript', color: '#307082' },
        { id: 'n3', label: 'Tinai Poetics', type: 'concept', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Attributed To' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Physical Witness' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Defines' }
      ]
    },
    relatedIds: ['ms-003', 'lit-011'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xc620e111b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef52',
      blockNumber: 28491915,
      timestamp: '12 Nov 2026, 11:48:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'lit-003',
    gai: 'GAI-TN-LIT-0003',
    name: 'Silappathikaram',
    tamilName: 'சிலப்பதிகாரம்',
    category: 'Tamil Literary and Manuscript Heritage',
    subCategory: 'Five Great Epics (Aimperunkappiyam)',
    recordType: 'literature',
    description:
      'Foremost of the Five Great Tamil Epics attributed to Ilango Adigal, chronicling Kannagi and Kovalan across the Chola port of Puhar (Poompuhar), Pandya Madurai, and Chera Vanchi—an unrivalled cultural map of early Tamil urbanization, music, and dance.',
    material: 'Literary Epic (30 Cantos in Akaval & Mixed Metres)',
    origin: 'Poompuhar / Madurai / Vanchi (Tamilakam)',
    district: 'Mayiladuthurai / Madurai',
    period: 'Post-Sangam Epic Period (c. 5th–6th Century CE)',
    estimatedDateStart: 400,
    estimatedDateEnd: 600,
    currentLocation: 'Tamil Virtual Academy & U.V. Swaminatha Iyer Editions',
    institution: 'Tamil Virtual Academy / UVSL Library',
    image: '',
    sourceName: 'Tamil Virtual Academy & U.V. Swaminatha Iyer Critical Edition (1892)',
    sourceURL: 'https://www.tamilvu.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      workTitle: 'Silappathikaram (The Tale of an Anklet)',
      authorOrCompiler: 'Ilango Adigal',
      literaryGenre: 'Classical Epic (Muthamizh Kavyam — Literature, Music, Drama)',
      estimatedCompositionPeriod: 'c. 5th–6th Century CE',
      structure: '3 Cantos (Puharkkandam, Maduraikkandam, Vanchikkandam) • 30 Kadai chapters',
      preservationForm: 'Commentaries of Arumpadavurai & Adiyarkkunallar; rescued via palm-leaf collation by U.V.S.',
      canonicalEditionNote: 'Linked to physical manuscripts recovered during 19th-century palm-leaf preservation.'
    },
    provenance: [
      { year: 'c. 5th–6th c. CE', title: 'Epic Composition', custodian: 'Ilango Adigal', location: 'Vanchi / Tamilakam', event: 'Woven around the three Tamil kingdoms.', verified: true, hash: '0x3l01...e121' },
      { year: '1892', title: 'U.V. Swaminatha Iyer First Complete Print', custodian: 'U.V. Swaminatha Iyer', location: 'Madras', event: 'Edited from crumbling palm-leaf manuscripts with Adiyarkkunallar commentary.', verified: true, hash: '0x3l02...e122' }
    ],
    timeline: [
      { date: 'c. 450–550 CE', milestoneType: 'Composition', title: 'Silappathikaram Composed', category: 'Origin', details: 'Celebrates Poompuhar trade, musicology, and justice.' },
      { date: '1892', milestoneType: 'Critical Print', title: 'Published by U.V. Swaminatha Iyer', category: 'Verification', details: 'Milestone of the Tamil Renaissance print era.' }
    ],
    journey: [
      { title: 'Poompuhar & Madurai Cultural Axis', year: 'Narrative Geography', lat: 11.1470, lng: 79.8520, location: 'Poompuhar to Madurai, TN', custodian: 'Literary Setting', description: 'Follows Kannagi’s journey across Chola, Pandya, and Chera realms.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Silappathikaram', type: 'literature', color: '#EA9940' },
        { id: 'n1', label: 'Ilango Adigal', type: 'person', color: '#12212E' },
        { id: 'n2', label: 'Poompuhar Maritime Port', type: 'site', color: '#307082' },
        { id: 'n3', label: 'Manimekalai (Twin Epic)', type: 'literature', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Authored By' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Depicts' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Twin Epic' }
      ]
    },
    relatedIds: ['lit-004', 'ms-001', 'ms-002'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xc630e121b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef53',
      blockNumber: 28491928,
      timestamp: '12 Nov 2026, 11:51:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'lit-004',
    gai: 'GAI-TN-LIT-0004',
    name: 'Manimekalai',
    tamilName: 'மணிமேகலை',
    category: 'Tamil Literary and Manuscript Heritage',
    subCategory: 'Five Great Epics (Buddhist Epic)',
    recordType: 'literature',
    description:
      'Buddhist philosophical epic composed by Sattanar (Seethalai Sattanar) serving as a sequel to Silappathikaram, following Manimekalai from Poompuhar through Kanchipuram while preserving rare early Indian logical and philosophical debates.',
    material: 'Literary Epic (30 Cantos in Akavarpa Metre)',
    origin: 'Poompuhar & Kanchipuram, Tamil Nadu',
    district: 'Kanchipuram / Mayiladuthurai',
    period: 'Post-Sangam Period (c. 6th Century CE)',
    estimatedDateStart: 500,
    estimatedDateEnd: 600,
    currentLocation: 'Tamil Virtual Academy & U.V.S. Library Collections',
    institution: 'Tamil Virtual Academy / UVSL Library',
    image: '',
    sourceName: 'Tamil Virtual Academy & U.V. Swaminatha Iyer Edition (1898)',
    sourceURL: 'https://www.tamilvu.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      workTitle: 'Manimekalai',
      authorOrCompiler: 'Seethalai Sattanar',
      literaryGenre: 'Buddhist Philosophical & Narrative Epic',
      estimatedCompositionPeriod: 'c. 6th Century CE',
      structure: '30 Kadai chapters featuring Canto 27 & 29 on Pramana epistemology',
      preservationForm: 'Palm-leaf manuscripts collated by U.V. Swaminatha Iyer (1898 print)',
      canonicalEditionNote: 'Documents Buddhist presence in coastal Poompuhar and Kanchipuram.'
    },
    provenance: [
      { year: 'c. 6th c. CE', title: 'Composition by Sattanar', custodian: 'Tamil Literary Heritage', location: 'Madurai / Kanchipuram', event: 'Composed narrative epic with philosophical cantos.', verified: true, hash: '0x4l01...e131' },
      { year: '1898', title: 'First Critical Print Edition', custodian: 'U.V. Swaminatha Iyer', location: 'Madras', event: 'Rescued and printed from palm-leaf manuscripts.', verified: true, hash: '0x4l02...e132' }
    ],
    timeline: [
      { date: 'c. 500–600 CE', milestoneType: 'Composition', title: 'Manimekalai Composed', category: 'Origin', details: 'Twin epic to Silappathikaram.' },
      { date: '1898', milestoneType: 'Critical Print', title: 'Printed by U.V.S.', category: 'Verification', details: 'First complete critical print.' }
    ],
    journey: [
      { title: 'Kanchipuram Monastery Setting', year: 'Literary Geography', lat: 12.8342, lng: 79.7036, location: 'Kanchipuram, Tamil Nadu', custodian: 'Buddhist Learning Hub', description: 'Final setting of Manimekalai’s philosophical instruction.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Manimekalai', type: 'literature', color: '#EA9940' },
        { id: 'n1', label: 'Seethalai Sattanar', type: 'person', color: '#12212E' },
        { id: 'n2', label: 'Kanchipuram', type: 'location', color: '#307082' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Authored By' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Centers On' }
      ]
    },
    relatedIds: ['lit-003', 'ms-002'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xc640e131b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef54',
      blockNumber: 28491940,
      timestamp: '12 Nov 2026, 11:54:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'lit-005',
    gai: 'GAI-TN-LIT-0005',
    name: 'Akananuru',
    tamilName: 'அகநானூறு (நெடுந்தொகை)',
    category: 'Tamil Literary and Manuscript Heritage',
    subCategory: 'Sangam Anthology (Ettuthokai)',
    recordType: 'literature',
    description:
      'Classical Sangam anthology of 400 long love (Akam) poems organized mathematically by the five Tinai landscapes (Kurinji, Mullai, Marutham, Neythal, Palai), compiled by Uruthirasanmanar under Pandya Ukkirap Peruvazhuthi.',
    material: 'Classical Poetic Anthology (400 Akam Poems)',
    origin: 'Madurai / Tamilakam',
    district: 'Madurai',
    period: 'Sangam Classical Period (c. 1st Century BCE – 3rd Century CE)',
    estimatedDateStart: -100,
    estimatedDateEnd: 300,
    currentLocation: 'CICT & Tamil Virtual Academy Open Corpus',
    institution: 'Central Institute of Classical Tamil (CICT)',
    image: '',
    sourceName: 'Central Institute of Classical Tamil & Project Madurai',
    sourceURL: 'https://www.cict.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      workTitle: 'Akananuru (Nedunthogai)',
      authorOrCompiler: 'Compiled by Uruthirasanmanar (145 poets)',
      literaryGenre: 'Sangam Akam Anthology (Ettuthokai)',
      estimatedCompositionPeriod: 'c. 1st Century BCE – 3rd Century CE',
      structure: '3 sections (Kalitriyanaimirai, Manimidaipavalam, Nittilakovai) • 400 poems',
      preservationForm: 'Palm-leaf manuscripts first printed in 1923 by Rajagopala Aiyangar',
      canonicalEditionNote: 'Richly references Roman Yavana trade at Muziris, pearl fisheries, and Sangam kings.'
    },
    provenance: [
      { year: 'c. 1st–3rd c. CE', title: 'Sangam Compilation', custodian: 'Madurai Sangam Compilers', location: 'Madurai', event: 'Anthologized by strict numeric Tinai pattern (odd=Palai, 2/8=Kurinji, etc.).', verified: true, hash: '0x5l01...e141' },
      { year: '1923', title: 'First Printed Edition', custodian: 'V. Rajagopala Aiyangar', location: 'Madras', event: 'Transcribed from surviving palm-leaf manuscripts.', verified: true, hash: '0x5l02...e142' }
    ],
    timeline: [
      { date: 'c. 100 BCE–300 CE', milestoneType: 'Composition', title: 'Sangam Akam Poetry', category: 'Origin', details: 'Preserves ecological & maritime references.' },
      { date: '1923', milestoneType: 'Early Print', title: 'First Critical Print', category: 'Verification', details: 'Published in Chennai.' }
    ],
    journey: [
      { title: 'Madurai Classical Corpus', year: 'Sangam Era', lat: 9.9252, lng: 78.1198, location: 'Madurai, Tamil Nadu', custodian: 'Sangam Compilation', description: 'Core Pandya scholarly tradition.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Akananuru', type: 'literature', color: '#EA9940' },
        { id: 'n1', label: 'Ettuthokai Corpus', type: 'literature', color: '#307082' },
        { id: 'n2', label: 'Purananuru', type: 'literature', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Part Of' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Companion Work' }
      ]
    },
    relatedIds: ['lit-006', 'lit-007', 'lit-008', 'ms-001'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xc650e141b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef55',
      blockNumber: 28491952,
      timestamp: '12 Nov 2026, 11:57:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'lit-006',
    gai: 'GAI-TN-LIT-0006',
    name: 'Purananuru',
    tamilName: 'புறநானூறு',
    category: 'Tamil Literary and Manuscript Heritage',
    subCategory: 'Sangam Anthology (Puram / History)',
    recordType: 'literature',
    description:
      'Classical Sangam anthology of 400 heroic and ethical Puram poems composed by 150+ poets (Avvaiyar, Kapilar, Paranar, Kaniyan Pungundranar), serving as a primary historical record of Tamil kings, chieftains, warfare, and cosmopolitan ethics ("Yaadhum Oore Yaavarum Kelir").',
    material: 'Classical Poetic Anthology (400 Puram Poems)',
    origin: 'Tamilakam',
    district: 'Madurai / Karur',
    period: 'Sangam Classical Period (c. 1st Century BCE – 3rd Century CE)',
    estimatedDateStart: -100,
    estimatedDateEnd: 300,
    currentLocation: 'CICT, Tamil Virtual Academy & UVSL Corpus',
    institution: 'Tamil Virtual Academy / CICT',
    image: '',
    sourceName: 'U.V. Swaminatha Iyer Edition (1894) & CICT',
    sourceURL: 'https://www.cict.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      workTitle: 'Purananuru',
      authorOrCompiler: '150+ Sangam Poets (Avvaiyar, Kapilar, Kaniyan Pungundranar, etc.)',
      literaryGenre: 'Sangam Puram Anthology (Heroism, Kingship, Ethics)',
      estimatedCompositionPeriod: 'c. 1st Century BCE – 3rd Century CE',
      structure: '400 verses (398 extant with colophons naming rulers & poets)',
      preservationForm: 'Palm-leaf manuscripts edited and published by U.V. Swaminatha Iyer in 1894',
      canonicalEditionNote: 'Corroborated archaeologically by Jambai (Adiyaman) and Pugalur (Chera) Tamil-Brahmi inscriptions.'
    },
    provenance: [
      { year: 'c. 1st–3rd c. CE', title: 'Sangam Era Heroic Anthology', custodian: 'Tamil Literary Tradition', location: 'Tamilakam', event: 'Preserved direct royal names verified in epigraphy.', verified: true, hash: '0x6l01...e151' },
      { year: '1894', title: 'U.V. Swaminatha Iyer Edition', custodian: 'U.V. Swaminatha Iyer', location: 'Madras', event: 'First complete critical print edition.', verified: true, hash: '0x6l02...e152' }
    ],
    timeline: [
      { date: 'c. 100 BCE–300 CE', milestoneType: 'Composition', title: 'Purananuru Verses Composed', category: 'Origin', details: 'Poets praised Chera, Chola, Pandya, and Velir chieftains.' },
      { date: '1894', milestoneType: 'Critical Print', title: 'Published by U.V.S.', category: 'Verification', details: 'Restored Sangam historical consciousness.' }
    ],
    journey: [
      { title: 'Chennai (U.V.S. Manuscript Library)', year: 'Modern Archive', lat: 12.9998, lng: 80.2645, location: 'Besant Nagar, Chennai, TN', custodian: 'U.V. Swaminatha Iyer Library', description: 'Preserves collated Sangam palm-leaf manuscripts.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Purananuru', type: 'literature', color: '#EA9940' },
        { id: 'n1', label: 'Jambai & Pugalur Inscriptions', type: 'inscription', color: '#307082' },
        { id: 'n2', label: 'U.V.S. 1894 Print', type: 'edition', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Epigraphically Corroborated' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Published In' }
      ]
    },
    relatedIds: ['insc-002', 'insc-005', 'lit-005', 'ms-002'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xc660e151b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef56',
      blockNumber: 28491964,
      timestamp: '12 Nov 2026, 12:00:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'lit-007',
    gai: 'GAI-TN-LIT-0007',
    name: 'Kurunthogai',
    tamilName: 'குறுந்தொகை',
    category: 'Tamil Literary and Manuscript Heritage',
    subCategory: 'Sangam Anthology (Ettuthokai)',
    recordType: 'literature',
    description:
      'Celebrated Sangam anthology of 401 short Akam love lyrics (4 to 8 lines each) compiled by Poorikko, renowned for compressed emotional imagery, botanical precision (including the red-earth-and-rain simile "Yaaivum Nyaayum"), and poetic brevity.',
    material: 'Classical Poetic Anthology (401 Short Verses)',
    origin: 'Tamilakam',
    district: 'Madurai / Thanjavur',
    period: 'Sangam Classical Period (c. 1st–3rd Century CE)',
    estimatedDateStart: -50,
    estimatedDateEnd: 300,
    currentLocation: 'Tamil Virtual Academy & Project Madurai',
    institution: 'Tamil Virtual Academy / CICT',
    image: '',
    sourceName: 'U.V. Swaminatha Iyer Edition (1937) & Tamil Virtual Academy',
    sourceURL: 'https://www.tamilvu.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      workTitle: 'Kurunthogai',
      authorOrCompiler: 'Compiled by Poorikko (205 poets)',
      literaryGenre: 'Sangam Short Lyric Anthology',
      estimatedCompositionPeriod: 'c. 1st–3rd Century CE',
      structure: '401 four-to-eight-line Akavarpa poems',
      preservationForm: 'Edited in print by Sowriperumal Aranganar (1915) & U.V.S. (1937); translated by A.K. Ramanujan',
      canonicalEditionNote: 'Widely translated into world languages as an apex of classical lyric minimalism.'
    },
    provenance: [
      { year: 'c. 1st–3rd c. CE', title: 'Sangam Anthology Compilation', custodian: 'Poorikko / Tamil Tradition', location: 'Tamilakam', event: 'Collected concise love verses across ecological settings.', verified: true, hash: '0x7l01...e161' },
      { year: '1937', title: 'U.V. Swaminatha Iyer Commentary Print', custodian: 'U.V.S.', location: 'Madras', event: 'Standard scholarly print with historical annotations.', verified: true, hash: '0x7l02...e162' }
    ],
    timeline: [
      { date: 'c. 50 BCE–300 CE', milestoneType: 'Composition', title: 'Kurunthogai Lyrics Composed', category: 'Origin', details: 'Concise four-to-eight-line poems.' },
      { date: '1967', milestoneType: 'Translation', title: 'A.K. Ramanujan Interior Landscape', category: 'Exhibition', details: 'Introduced Kurunthogai to global comparative literature.' }
    ],
    journey: [
      { title: 'Chennai Critical Archive', year: 'Print & Digital', lat: 13.0068, lng: 80.2423, location: 'Chennai, Tamil Nadu', custodian: 'Tamil Virtual Academy', description: 'Digitized critical text.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Kurunthogai', type: 'literature', color: '#EA9940' },
        { id: 'n1', label: 'Tamil Translations', type: 'literature', color: '#307082' },
        { id: 'n2', label: 'Natrinai', type: 'literature', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Globally Translated' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Sibling Anthology' }
      ]
    },
    relatedIds: ['lit-008', 'lit-012'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xc670e161b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef57',
      blockNumber: 28491975,
      timestamp: '12 Nov 2026, 12:03:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'lit-008',
    gai: 'GAI-TN-LIT-0008',
    name: 'Natrinai',
    tamilName: 'நற்றிணை',
    category: 'Tamil Literary and Manuscript Heritage',
    subCategory: 'Sangam Anthology (Ettuthokai)',
    recordType: 'literature',
    description:
      'First named anthology in the traditional Ettuthokai (Eight Anthologies) list, containing 400 medium-length Akam poems (9 to 12 lines) compiled under Pandya king Pannadu Thanda Pandyan Maran Vazhuthi.',
    material: 'Classical Poetic Anthology (400 Verses)',
    origin: 'Madurai / Tamilakam',
    district: 'Madurai',
    period: 'Sangam Classical Period (c. 1st–3rd Century CE)',
    estimatedDateStart: -50,
    estimatedDateEnd: 300,
    currentLocation: 'CICT & Tamil Virtual Academy Corpus',
    institution: 'Central Institute of Classical Tamil (CICT)',
    image: '',
    sourceName: 'Pinnathur Narayanaswami Aiyar Edition (1914) & CICT',
    sourceURL: 'https://www.cict.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      workTitle: 'Natrinai (Nallatrinai)',
      authorOrCompiler: 'Patronized by Pandyan Maran Vazhuthi (175 poets)',
      literaryGenre: 'Sangam Akam Anthology (Ettuthokai)',
      estimatedCompositionPeriod: 'c. 1st–3rd Century CE',
      structure: '400 poems of 9 to 12 lines',
      preservationForm: 'First printed in 1914 with Pinnathur Narayanaswami Aiyar commentary',
      canonicalEditionNote: 'Bridges Kurunthogai’s brevity and Akananuru’s longer dramatic monologues.'
    },
    provenance: [
      { year: 'c. 1st–3rd c. CE', title: 'Pandya Royal Patronage Compilation', custodian: 'Tamil Sangam Tradition', location: 'Madurai', event: 'Anthologized under Maran Vazhuthi.', verified: true, hash: '0x8l01...e171' },
      { year: '1914', title: 'First Printed Edition', custodian: 'Pinnathur Narayanaswami Aiyar', location: 'Tamil Nadu', event: 'Critical print from manuscript sources.', verified: true, hash: '0x8l02...e172' }
    ],
    timeline: [
      { date: 'c. 1st–3rd c. CE', milestoneType: 'Composition', title: 'Natrinai Compiled', category: 'Origin', details: '9–12 line Tinai love poetry.' },
      { date: '1914', milestoneType: 'Critical Print', title: 'Printed with Modern Commentary', category: 'Verification', details: 'Published early 20th century.' }
    ],
    journey: [
      { title: 'Chennai & Madurai Corpus', year: 'Critical Edition', lat: 13.0068, lng: 80.2423, location: 'Chennai, Tamil Nadu', custodian: 'CICT', description: 'Digitized and lexically indexed.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Natrinai', type: 'literature', color: '#EA9940' },
        { id: 'n1', label: 'Ettuthokai', type: 'literature', color: '#307082' },
        { id: 'n2', label: 'Kurunthogai', type: 'literature', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Part Of' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Related To' }
      ]
    },
    relatedIds: ['lit-005', 'lit-007'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xc680e171b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef58',
      blockNumber: 28491986,
      timestamp: '12 Nov 2026, 12:06:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'lit-009',
    gai: 'GAI-TN-LIT-0009',
    name: 'Thevaram (Tirumurai I–VII)',
    tamilName: 'தேவாரம் (திருமுறை 1–7)',
    category: 'Tamil Literary and Manuscript Heritage',
    subCategory: 'Bhakti Devotional Hymnody',
    recordType: 'literature',
    description:
      'First seven volumes of the twelve-book Shaiva Tirumurai canon comprising musical Tamil devotional hymns composed in temple-bound Paṇ (raga) melodies by Thirugnanasambandar, Thirunavukkarasar (Appar), and Sundarar, rediscovered in Chidambaram and codified by Nambiyandar Nambi under Chola patronage.',
    material: 'Musical Tamil Hymnody (796 Pathigams / Over 8,000 Verses)',
    origin: 'Sirkazhi, Tiruvamur, Chidambaram & Kaveri Delta, Tamil Nadu',
    district: 'Mayiladuthurai / Cuddalore / Thanjavur',
    period: 'Pallava Bhakti Era (c. 7th–8th Century CE; Codified 10th–11th c. CE)',
    estimatedDateStart: 600,
    estimatedDateEnd: 825,
    currentLocation: 'Chidambaram Tradition, Tamil Virtual Academy & Temple Archives',
    institution: 'Tamil Virtual Academy / Dharmapuram & Thiruvavaduthurai Adheenams',
    image: '',
    sourceName: 'Tamil Virtual Academy Panniru Tirumurai Corpus & French Institute of Pondicherry',
    sourceURL: 'https://www.tamilvu.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      workTitle: 'Thevaram (Panniru Tirumurai Books 1–7)',
      authorOrCompiler: 'Sambandar, Appar (Tirunavukkarasar), Sundarar; compiled by Nambiyandar Nambi',
      literaryGenre: 'Musical Bhakti Devotional Poetry (Pann Isai Tradition)',
      estimatedCompositionPeriod: 'c. 7th–8th Century CE (compiled c. 1000 CE under Rajaraja Chola I)',
      structure: 'Tirumurai 1–3 (Sambandar), 4–6 (Appar), 7 (Sundarar)',
      preservationForm: 'Living Oduvar temple singing, Chidambaram copper/palm-leaf retrieval tradition, EFEO/IFP archives',
      canonicalEditionNote: 'Maps 275 sacred Paadal Petra Sthalams across ancient Tamil landscape.'
    },
    provenance: [
      { year: 'c. 7th–8th c. CE', title: 'Nayanmar Hymns Composed', custodian: 'Sambandar, Appar & Sundarar', location: 'Tamil Nadu Temples', event: 'Sung in classical Tamil Paṇ music across Shiva temples.', verified: true, hash: '0x9l01...e181' },
      { year: 'c. 1000 CE', title: 'Chidambaram Rediscovery & Rajaraja Chola Codification', custodian: 'Rajaraja Chola I & Nambiyandar Nambi', location: 'Chidambaram / Thanjavur', event: 'Retrieved from Chidambaram temple chamber and set into Oduvar liturgy.', verified: true, hash: '0x9l02...e182' }
    ],
    timeline: [
      { date: 'c. 600–800 CE', milestoneType: 'Composition', title: 'Moovar Tamil Bhakti Hymns', category: 'Origin', details: 'Core foundation of South Indian Bhakti movement.' },
      { date: 'c. 1000 CE', milestoneType: 'Codification', title: 'Tirumurai Anthologization', category: 'Verification', details: 'Compiled under Rajaraja Chola I patronage.' }
    ],
    journey: [
      { title: 'Chidambaram & Thanjavur Temple Belt', year: '7th c.–Present', lat: 11.3992, lng: 79.6935, location: 'Chidambaram, Cuddalore, TN', custodian: 'Oduvar Musical Tradition', description: 'Historic retrieval and continuous daily chanting.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Thevaram', type: 'literature', color: '#EA9940' },
        { id: 'n1', label: 'Rajaraja Chola I Codification', type: 'person', color: '#12212E' },
        { id: 'n2', label: 'Thevaram Palm-Leaf Copy', type: 'manuscript', color: '#307082' },
        { id: 'n3', label: 'Thiruvasagam', type: 'literature', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Patronized By' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Physical Witness' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Tirumurai Companion' }
      ]
    },
    relatedIds: ['lit-010', 'ms-005', 'sculp-007'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xc690e181b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef59',
      blockNumber: 28491998,
      timestamp: '12 Nov 2026, 12:09:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'lit-010',
    gai: 'GAI-TN-LIT-0010',
    name: 'Thiruvasagam (Tirumurai VIII)',
    tamilName: 'திருவாசகம்',
    category: 'Tamil Literary and Manuscript Heritage',
    subCategory: 'Mystical Bhakti Poetry',
    recordType: 'literature',
    description:
      'Profoundly lyrical 9th-century mystical collection of 51 Tamil hymns (656 verses) authored by Manickavasagar, forming Volume 8 of the Tirumurai and integrating Tamil folk song forms (Ammanai, Undiyar, Thiruvempavai).',
    material: 'Devotional Lyric Collection (51 Hymns)',
    origin: 'Avudaiyarkoil / Tiruvadavur / Chidambaram, Tamil Nadu',
    district: 'Madurai / Pudukkottai / Cuddalore',
    period: 'Pandya-Chola Transition (c. 9th Century CE)',
    estimatedDateStart: 850,
    estimatedDateEnd: 920,
    currentLocation: 'Tamil Virtual Academy & Global Literary Translations',
    institution: 'Tamil Virtual Academy / Madurai Heritage Corpus',
    image: '',
    sourceName: 'Tamil Virtual Academy & G.U. Pope Critical Edition (1900)',
    sourceURL: 'https://www.tamilvu.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      workTitle: 'Thiruvasagam',
      authorOrCompiler: 'Manickavasagar',
      literaryGenre: 'Mystical Bhakti Poetry (Tirumurai VIII)',
      estimatedCompositionPeriod: 'c. 9th Century CE',
      structure: '51 hymns including Sivapuranam and Thiruvempavai',
      preservationForm: 'Palm-leaf manuscripts, Oduvar recitation, 1900 G.U. Pope bilingual edition',
      canonicalEditionNote: 'Celebrated in the proverb "Thiruvasagathukku urugar oru vasagathukkum urugar".'
    },
    provenance: [
      { year: 'c. 9th c. CE', title: 'Composition by Manickavasagar', custodian: 'Manickavasagar Tradition', location: 'Madurai / Chidambaram', event: 'Composed mystical songs blending folk metres with metaphysics.', verified: true, hash: '0xal01...e191' },
      { year: '1900', title: 'G.U. Pope Clarendon Press Bilingual Edition', custodian: 'Oxford University Press', location: 'Oxford / Madras', event: 'Published full Tamil text, grammar notes, and English translation.', verified: true, hash: '0xal02...e192' }
    ],
    timeline: [
      { date: 'c. 850–900 CE', milestoneType: 'Composition', title: 'Manickavasagar Composes Thiruvasagam', category: 'Origin', details: 'Landmark in Tamil devotional mysticism.' },
      { date: '1900', milestoneType: 'Translation & Print', title: 'G.U. Pope Critical Edition', category: 'Exhibition', details: 'Landmark Tamil-English philological translation.' }
    ],
    journey: [
      { title: 'Tiruvadavur & Chidambaram', year: '9th c. CE', lat: 10.0485, lng: 78.3082, location: 'Tiruvadavur, Madurai, TN', custodian: 'Literary Birthplace', description: 'Birthplace of Manickavasagar.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Thiruvasagam', type: 'literature', color: '#EA9940' },
        { id: 'n1', label: 'Manickavasagar', type: 'person', color: '#12212E' },
        { id: 'n2', label: 'Thevaram', type: 'literature', color: '#307082' },
        { id: 'n3', label: 'G.U. Pope 1900 Translation', type: 'edition', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Authored By' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Canon Sibling' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Translated In' }
      ]
    },
    relatedIds: ['lit-009', 'lit-012'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xc6a0e191b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef5a',
      blockNumber: 28492010,
      timestamp: '12 Nov 2026, 12:12:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'lit-011',
    gai: 'GAI-TN-LIT-0011',
    name: 'Classical Tamil Commentaries (Urainool Tradition)',
    tamilName: 'பண்டைய தமிழ் உரைநூல் மரபு',
    category: 'Tamil Literary and Manuscript Heritage',
    subCategory: 'Exegesis & Prose Commentary',
    recordType: 'literature',
    description:
      'Medieval Tamil commentarial scholarship (11th–15th century CE) by masters such as Ilampuranar, Parimelazhagar, Nachinarkiniyar, Senavaraiyar, and Adiyarkkunallar, whose prose glosses preserved grammar, archaic vocabulary, musicology, and vanished treatises.',
    material: 'Classical Tamil Prose Commentarial Corpus',
    origin: 'Kanchipuram, Madurai & Kaveri Delta, Tamil Nadu',
    district: 'Kanchipuram / Thanjavur',
    period: 'Medieval Commentarial Age (c. 11th–15th Century CE)',
    estimatedDateStart: 1050,
    estimatedDateEnd: 1450,
    currentLocation: 'Government Oriental Manuscripts Library & Tamil Virtual Academy',
    institution: 'Tamil Virtual Academy / GOML Chennai',
    image: '',
    sourceName: 'Tamil Virtual Academy & Iravatham Mahadevan / Zvelebil History of Tamil Literature',
    sourceURL: 'https://www.tamilvu.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Scholarly Reference',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      workTitle: 'Classical Tamil Commentaries (Urainool)',
      authorOrCompiler: 'Ilampuranar, Parimelazhagar, Nachinarkiniyar, Adiyarkkunallar, Senavaraiyar',
      literaryGenre: 'Philological Exegesis & Old Tamil Prose History',
      estimatedCompositionPeriod: 'c. 11th–15th Century CE',
      structure: 'Word-by-word padavurai, structural pozhippurai, and cross-textual citations',
      preservationForm: 'Co-transmitted with root texts in palm-leaf bundles and 19th-century editions',
      canonicalEditionNote: 'Without Urainool glosses, dozens of Old Tamil lexical and musical terms would be lost.'
    },
    provenance: [
      { year: '11th–15th c. CE', title: 'Medieval Scholarly Synthesis', custodian: 'Uraiyasiriyar Tradition', location: 'Tamil Nadu', event: 'Preserved ancient Tinai poetics and lost Sangam music theory.', verified: true, hash: '0xbl01...e1a1' }
    ],
    timeline: [
      { date: '11th–14th c. CE', milestoneType: 'Composition', title: 'Golden Age of Tamil Commentators', category: 'Origin', details: 'Ilampuranar, Parimelazhagar, and Nachinarkiniyar flourish.' }
    ],
    journey: [
      { title: 'Chennai Manuscript & Literary Archives', year: 'Archival Preservation', lat: 13.0695, lng: 80.2407, location: 'Madras University / GOML, Chennai', custodian: 'Oriental Manuscripts Library', description: 'Stores commentary palm-leaf bundles.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Tamil Commentaries (Urainool)', type: 'literature', color: '#EA9940' },
        { id: 'n1', label: 'Tolkappiyam', type: 'literature', color: '#307082' },
        { id: 'n2', label: 'Thirukkural', type: 'literature', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Glosses' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Glosses' }
      ]
    },
    relatedIds: ['lit-001', 'lit-002', 'lit-003'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xc6b0e1a1b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef5b',
      blockNumber: 28492022,
      timestamp: '12 Nov 2026, 12:15:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'lit-012',
    gai: 'GAI-TN-LIT-0012',
    name: 'Tamil Literary Translations (Global Corpus)',
    tamilName: 'தமிழ் இலக்கிய மொழிபெயர்ப்புகள்',
    category: 'Tamil Literary and Manuscript Heritage',
    subCategory: 'Multilingual Translation Heritage',
    recordType: 'literature',
    description:
      'Milestone translations of classical Tamil works into Latin, German, French, English, and Indian languages—spanning Constanzo Beschi (1730), Karl Graul, G.U. Pope, V.V.S. Aiyar, and A.K. Ramanujan—connecting Tamil literature to global scholarship.',
    material: 'Printed & Digital Multilingual Editions',
    origin: 'Chennai, Puducherry, London, Halle & Chicago',
    district: 'Chennai / Puducherry',
    period: 'Modern Era (18th Century – Present)',
    estimatedDateStart: 1730,
    estimatedDateEnd: 2026,
    currentLocation: 'Tamil Virtual Academy & Project Madurai Multilingual Index',
    institution: 'Tamil Virtual Academy / CICT / Project Madurai',
    image: '',
    sourceName: 'Central Institute of Classical Tamil Translation Archive & Project Madurai',
    sourceURL: 'https://www.cict.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Scholarly Reference',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      workTitle: 'Tamil Literary Translations Corpus',
      authorOrCompiler: 'Beschi, F.W. Ellis, Karl Graul, G.U. Pope, A.K. Ramanujan, George L. Hart',
      literaryGenre: 'Cross-Cultural Philological & Poetic Translation',
      estimatedCompositionPeriod: '1730 CE – Present',
      structure: 'Translations of Thirukkural (40+ languages), Sangam Anthologies, and Tirumurai',
      preservationForm: 'Historical prints & digitized open-access editions',
      canonicalEditionNote: 'Separately indexed from source Tamil texts and manuscript copies.'
    },
    provenance: [
      { year: '1730–1886', title: 'Early European Translations of Thirukkural', custodian: 'Beschi, Graul & G.U. Pope', location: 'Tamilakam / Europe', event: 'Translated Aram & Porul into Latin, German, and complete Kural into English.', verified: true, hash: '0xcl01...e1b1' },
      { year: '1967–Present', title: 'Modern Sangam Poetic Translations', custodian: 'A.K. Ramanujan, George Hart, Vaidehi Herbert', location: 'Global Universities & CICT', event: 'Brought Akam and Puram poetry to worldwide readership.', verified: true, hash: '0xcl02...e1b2' }
    ],
    timeline: [
      { date: '1730 / 1886', milestoneType: 'Translation', title: 'Latin & Complete English Thirukkural', category: 'Exhibition', details: 'Beschi (Latin) and G.U. Pope (English).' },
      { date: '1967–1999', milestoneType: 'Translation', title: 'Sangam Poetry Global Editions', category: 'Exhibition', details: 'Ramanujan and Hart translations.' }
    ],
    journey: [
      { title: 'Chennai & Global Archival Network', year: '1730–Present', lat: 13.0068, lng: 80.2423, location: 'Chennai, Tamil Nadu', custodian: 'CICT Translation Division', description: 'Hub for multilingual Tamil classics.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Tamil Literary Translations', type: 'literature', color: '#EA9940' },
        { id: 'n1', label: 'Thirukkural', type: 'literature', color: '#307082' },
        { id: 'n2', label: 'Kurunthogai', type: 'literature', color: '#6CA3A2' },
        { id: 'n3', label: 'Thiruvasagam', type: 'literature', color: '#307082' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Translates' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Translates' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Translates' }
      ]
    },
    relatedIds: ['lit-001', 'lit-007', 'lit-010'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xc6c0e1b1b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef5c',
      blockNumber: 28492035,
      timestamp: '12 Nov 2026, 12:18:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  }
];

