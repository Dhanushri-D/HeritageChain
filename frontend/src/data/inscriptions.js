export const INSCRIPTIONS = [
  {
    id: 'insc-001',
    gai: 'GAI-TN-INSC-0001',
    name: 'Tamil-Brahmi Rock Inscriptions (Mangulam)',
    tamilName: 'மாங்குளம் தமிழ்-பிராமி கல்வெட்டுகள்',
    category: 'Inscriptions and Epigraphical Records',
    subCategory: 'Cave Epigraphy',
    recordType: 'inscription',
    description:
      'Earliest datable Tamil-Brahmi cave inscriptions engraved on the drip-ledges of Jain rock beds at Mangulam (Meenakshipuram) near Madurai, recording rock-bed endowments linked to Pandya ruler Nedunjeliyan.',
    material: 'Natural Granite Rock Shelter',
    origin: 'Mangulam, Madurai District, Tamil Nadu',
    district: 'Madurai',
    period: 'Early Historic (c. 3rd–2nd Century BCE)',
    estimatedDateStart: -250,
    estimatedDateEnd: -100,
    currentLocation: 'In situ at Mangulam Hill (ASI / TNSDA Protected)',
    institution: 'Archaeological Survey of India / TNSDA',
    image: '',
    sourceName: 'Iravatham Mahadevan, Early Tamil Epigraphy (Cre-A / Harvard)',
    sourceURL: 'https://www.tnarch.gov.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      script: 'Early Tamil-Brahmi (Tamili)',
      language: 'Old Tamil',
      inscriptionLocation: 'Mangulam (Ovamalai / Kalugumalai), Madurai District',
      transcription: 'kaṇi nanta asiriyikuvē āṅkaṭuṇkō neṭuñceḻiyaṉ paṇa’aṉ kaṭalaṉ vaḻuttiy koṭupitta paḷi’i',
      translation: 'This monastery/rock-bed was caused to be given by Kadalan Vazhuthi, an officer of Pandya Nedunjeliyan, to the Jain monk Kani Nanda.',
      epigraphicalDate: 'c. 3rd–2nd Century BCE (Mahadevan / Epigraphia Indica)',
      documentationSource: 'Annual Report on Indian Epigraphy (1906); I. Mahadevan, Early Tamil Epigraphy (2003)'
    },
    provenance: [
      { year: 'c. 2nd c. BCE', title: 'Rock-Bed Endowment Engraving', custodian: 'Jain Ascetic Community & Pandya Court', location: 'Mangulam, Madurai', event: 'Chiseled along polished granite drip-ledge above natural cavern.', verified: true, hash: '0x1e01...9a01' },
      { year: '1906 / 1966', title: 'Epigraphical Decipherment', custodian: 'ASI Epigraphy & Iravatham Mahadevan', location: 'Madurai / Chennai', event: 'Estampages copied and definitively read as Old Tamil in Tamil-Brahmi script.', verified: true, hash: '0x1e02...9a02' }
    ],
    timeline: [
      { date: 'c. 2nd c. BCE', milestoneType: 'Creation / Use', title: 'Cavern Bed Dedicated', category: 'Origin', details: 'Engraved during early Pandya era.' },
      { date: '1906', milestoneType: 'Discovery', title: 'Reported in Epigraphy Survey', category: 'Location', details: 'Copied by K.V. Subrahmanya Aiyer.' },
      { date: '2003', milestoneType: 'Publication', title: 'Catalogued in Early Tamil Epigraphy', category: 'Verification', details: 'Standard corpus entry by I. Mahadevan.' }
    ],
    journey: [
      { title: 'Mangulam Hill Caverns', year: 'c. 2nd c. BCE–Present', lat: 10.0258, lng: 78.2347, location: 'Mangulam, Madurai, Tamil Nadu', custodian: 'TNSDA Protected Monument', description: 'In situ rock shelter inscriptions.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Mangulam Tamil-Brahmi', type: 'inscription', color: '#EA9940' },
        { id: 'n1', label: 'Tamil-Brahmi Script', type: 'script', color: '#307082' },
        { id: 'n2', label: 'Nedunjeliyan (Pandya)', type: 'person', color: '#12212E' },
        { id: 'n3', label: 'Mangulam, Madurai', type: 'location', color: '#6CA3A2' },
        { id: 'n4', label: 'Iravatham Mahadevan Corpus', type: 'institution', color: '#307082' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Script' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Mentions Ruler' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Engraved At' },
        { id: 'e4', source: 'root', target: 'n4', label: 'Catalogued In' }
      ]
    },
    relatedIds: ['insc-002', 'insc-003', 'insc-004'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x8b109a01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef11',
      blockNumber: 28491201,
      timestamp: '12 Nov 2026, 09:45:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'insc-002',
    gai: 'GAI-TN-INSC-0002',
    name: 'Jambai Inscription',
    tamilName: 'ஜம்பை தமிழ்-பிராமி கல்வெட்டு',
    category: 'Inscriptions and Epigraphical Records',
    subCategory: 'Sangam Chieftain Epigraph',
    recordType: 'inscription',
    description:
      'Landmark 1st-century CE Tamil-Brahmi rock inscription at Jambai (Tirukkoyilur taluk) mentioning Satyaputo Atiyan Neduman Anci — corroborating both Ashokan Edicts (Satiyaputa) and Sangam poetry.',
    material: 'Granite Rock Shelter Overhang',
    origin: 'Jambai, Kallakurichi (formerly Villupuram) District, Tamil Nadu',
    district: 'Kallakurichi',
    period: 'Early Historic (c. 1st Century CE)',
    estimatedDateStart: 1,
    estimatedDateEnd: 100,
    currentLocation: 'In situ at Jambai (TNSDA Protected)',
    institution: 'Tamil Nadu Department of Archaeology',
    image: '',
    sourceName: 'Tamil Nadu Department of Archaeology (1981 Discovery)',
    sourceURL: 'https://www.tnarch.gov.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      script: 'Tamil-Brahmi',
      language: 'Old Tamil',
      inscriptionLocation: 'Jambai Village, South Pennar River Bank, Kallakurichi District',
      transcription: 'satiyaputō atiyaṉ neṭumāṉ añci ītta pāḷi',
      translation: 'The hermitage (pali) given by Satyaputo Atiyan Neduman Anci.',
      epigraphicalDate: 'c. 1st Century CE',
      documentationSource: 'TNSDA Discovery (1981); I. Mahadevan, Early Tamil Epigraphy, Inscription No. 59'
    },
    provenance: [
      { year: 'c. 1st c. CE', title: 'Endowment by Atiyan Neduman Anci', custodian: 'Atiyaman Dynasty of Tagadur', location: 'Jambai', event: 'Inscribed recording gift of a Jain rock shelter; confirms title Satyaputo.', verified: true, hash: '0x2e01...8b01' },
      { year: '1981', title: 'TNSDA Epigraphical Discovery', custodian: 'Tamil Nadu Dept of Archaeology', location: 'Jambai', event: 'Discovered and deciphered by TNSDA epigraphists.', verified: true, hash: '0x2e02...8b02' }
    ],
    timeline: [
      { date: 'c. 1st c. CE', milestoneType: 'Creation / Use', title: 'Atiyan Neduman Anci Endowment', category: 'Origin', details: 'Links epigraphic record to Sangam patron Atiyaman.' },
      { date: '1981', milestoneType: 'Discovery', title: 'Documented by TNSDA', category: 'Verification', details: 'Recognized as key synchronization between Ashokan Edicts and Sangam corpus.' }
    ],
    journey: [
      { title: 'Jambai Rock Shelter', year: 'c. 1st c. CE–Present', lat: 11.9839, lng: 79.1669, location: 'Jambai, Kallakurichi, TN', custodian: 'TNSDA Protected Site', description: 'In situ Tamil-Brahmi inscription.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Jambai Inscription', type: 'inscription', color: '#EA9940' },
        { id: 'n1', label: 'Tamil-Brahmi Script', type: 'script', color: '#307082' },
        { id: 'n2', label: 'Atiyan Neduman Anci', type: 'person', color: '#12212E' },
        { id: 'n3', label: 'Jambai (Kallakurichi)', type: 'location', color: '#6CA3A2' },
        { id: 'n4', label: 'Sangam / Ashokan Link', type: 'record', color: '#ECE7DC' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Script' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Endowed By' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Location' },
        { id: 'e4', source: 'root', target: 'n4', label: 'Corroborates' }
      ]
    },
    relatedIds: ['insc-001', 'insc-005', 'lit-006'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x8b208b01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef12',
      blockNumber: 28491215,
      timestamp: '12 Nov 2026, 09:48:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'insc-003',
    gai: 'GAI-TN-INSC-0003',
    name: 'Sittannavasal Inscription',
    tamilName: 'சித்தன்னவாசல் கல்வெட்டுகள்',
    category: 'Inscriptions and Epigraphical Records',
    subCategory: 'Cave & Temple Epigraphy',
    recordType: 'inscription',
    description:
      'Tamil-Brahmi inscriptions on the Ezhadippattam stone beds (c. 2nd–1st century BCE) alongside later Early Pandya Tamil Vatteluttu/Tamil inscriptions in the Arivar Koil rock-cut cave temple famous for fresco paintings.',
    material: 'Granite Hillock & Rock-Cut Cave Wall',
    origin: 'Sittannavasal, Pudukkottai District, Tamil Nadu',
    district: 'Pudukkottai',
    period: 'Early Historic (c. 2nd c. BCE) & Pandya Era (9th c. CE)',
    estimatedDateStart: -200,
    estimatedDateEnd: 900,
    currentLocation: 'In situ at Sittannavasal (ASI Protected Monument)',
    institution: 'Archaeological Survey of India',
    image: '',
    sourceName: 'Archaeological Survey of India & Early Tamil Epigraphy',
    sourceURL: 'https://asi.nic.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      script: 'Tamil-Brahmi (Ezhadippattam) & Tamil / Grantha (Cave Temple)',
      language: 'Old Tamil & Medieval Tamil',
      inscriptionLocation: 'Sittannavasal, Pudukkottai District',
      transcription: 'e’umi nāṭṭuk kumuṭṭūr piṟanta kāvuṭi itēṉuku ciṟupocil iḷayar ceyta aṭiṭṭāṉam',
      translation: 'The stone bed (adittanam) made by Ilayar of Siruposil for Kavudi Iten, born at Kumuttur in Eumi-nadu.',
      epigraphicalDate: 'c. 2nd–1st Century BCE (Beds); 9th Century CE (Cave)',
      documentationSource: 'ASI Epigraphical Survey & Sittannavasal Guide'
    },
    provenance: [
      { year: 'c. 2nd c. BCE', title: 'Ezhadippattam Bed Inscription', custodian: 'Jain Monastic Site', location: 'Sittannavasal', event: 'Seventeen polished rock beds carved with Tamil-Brahmi donor label.', verified: true, hash: '0x3e01...7c01' },
      { year: '9th c. CE', title: 'Pandya Cave Renovation Record', custodian: 'Avanipasekhara Sri Vallabha Pandya', location: 'Sittannavasal', event: 'Records renovation and painting of Arivar Koil by Ilam Gautaman of Madurai.', verified: true, hash: '0x3e02...7c02' }
    ],
    timeline: [
      { date: 'c. 2nd c. BCE', milestoneType: 'Creation / Use', title: 'Ezhadippattam Rock Beds', category: 'Origin', details: 'Old Tamil-Brahmi inscription carved on stone bed.' },
      { date: '9th c. CE', milestoneType: 'Expansion', title: 'Pandya Arivar Koil Inscription', category: 'Exhibition', details: 'Documents cave murals and renovation.' }
    ],
    journey: [
      { title: 'Sittannavasal Complex', year: 'c. 2nd c. BCE–Present', lat: 10.4533, lng: 78.7244, location: 'Sittannavasal, Pudukkottai, TN', custodian: 'ASI Protected Monument', description: 'In situ epigraphs and mural cave.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Sittannavasal Inscription', type: 'inscription', color: '#EA9940' },
        { id: 'n1', label: 'Tamil-Brahmi & Tamil', type: 'script', color: '#307082' },
        { id: 'n2', label: 'Sittannavasal (Pudukkottai)', type: 'location', color: '#6CA3A2' },
        { id: 'n3', label: 'Arivar Koil Murals', type: 'site', color: '#12212E' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Scripts' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Located At' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Associated With' }
      ]
    },
    relatedIds: ['insc-001', 'insc-009'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x8b307c01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef13',
      blockNumber: 28491228,
      timestamp: '12 Nov 2026, 09:50:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'insc-004',
    gai: 'GAI-TN-INSC-0004',
    name: 'Anaimalai Tamil-Brahmi Inscription',
    tamilName: 'ஆனைமலை தமிழ்-பிராமி கல்வெட்டு',
    category: 'Inscriptions and Epigraphical Records',
    subCategory: 'Cavern Epigraphy',
    recordType: 'inscription',
    description:
      'Early Historic Tamil-Brahmi inscription in the natural cavern atop Anaimalai hill near Madurai, documenting stone beds carved for Jain ascetics by donors from nearby Kunrattur.',
    material: 'Granite Cavern Ledge',
    origin: 'Anaimalai, Madurai District, Tamil Nadu',
    district: 'Madurai',
    period: 'Early Historic (c. 1st–2nd Century CE)',
    estimatedDateStart: 50,
    estimatedDateEnd: 200,
    currentLocation: 'In situ at Anaimalai Hill (ASI Protected)',
    institution: 'Archaeological Survey of India',
    image: '',
    sourceName: 'Early Tamil Epigraphy & ASI',
    sourceURL: 'https://asi.nic.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      script: 'Tamil-Brahmi',
      language: 'Old Tamil',
      inscriptionLocation: 'Anaimalai Hillock, Madurai District',
      transcription: 'iva kuṉṟattūṟ uṟaiyuḷ pātaṉ tāṉa eri āritaṉ attuvāyi aṟaṭṭa kāyipaṉ',
      translation: 'Gift of stone beds at this Kunrattur dwelling for Eri Aritan, Attuvayi, and Aratta Kayipan.',
      epigraphicalDate: 'c. 1st–2nd Century CE',
      documentationSource: 'Annual Report on Epigraphy; I. Mahadevan Corpus No. 61'
    },
    provenance: [
      { year: 'c. 1st–2nd c. CE', title: 'Cavern Bed Engraving', custodian: 'Anaimalai Monastic Complex', location: 'Anaimalai, Madurai', event: 'Engraved above rock-cut monastic beds.', verified: true, hash: '0x4e01...6d01' }
    ],
    timeline: [
      { date: 'c. 1st–2nd c. CE', milestoneType: 'Creation / Use', title: 'Engraved in Granite Cavern', category: 'Origin', details: 'Records names of early Tamil monks and donors.' },
      { date: '1906', milestoneType: 'Discovery', title: 'Epigraphical Estampage Recorded', category: 'Verification', details: 'Copied by ASI Epigraphy Branch.' }
    ],
    journey: [
      { title: 'Anaimalai Cavern', year: 'c. 1st–2nd c. CE–Present', lat: 9.9544, lng: 78.2039, location: 'Anaimalai, Madurai, TN', custodian: 'ASI Protected Site', description: 'Granite hillock near Madurai.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Anaimalai Inscription', type: 'inscription', color: '#EA9940' },
        { id: 'n1', label: 'Tamil-Brahmi', type: 'script', color: '#307082' },
        { id: 'n2', label: 'Anaimalai, Madurai', type: 'location', color: '#6CA3A2' },
        { id: 'n3', label: 'ASI Epigraphy', type: 'institution', color: '#12212E' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Script' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Location' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Documented By' }
      ]
    },
    relatedIds: ['insc-001', 'insc-005'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x8b406d01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef14',
      blockNumber: 28491241,
      timestamp: '12 Nov 2026, 09:52:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'insc-005',
    gai: 'GAI-TN-INSC-0005',
    name: 'Pugalur Inscription (Arunattarmalai)',
    tamilName: 'புகளூர் தமிழ்-பிராமி கல்வெட்டு',
    category: 'Inscriptions and Epigraphical Records',
    subCategory: 'Chera Genealogy Epigraph',
    recordType: 'inscription',
    description:
      'Crucial Tamil-Brahmi inscriptions at Arunattarmalai in Pugalur (Karur district) naming three generations of Chera kings — Ko Athan Cheral Irumporai, his son Perumkadungo, and grandson Ilamkadungo — matching Sangam Patirruppattu.',
    material: 'Granite Hillock Cavern',
    origin: 'Pugalur, Karur District, Tamil Nadu',
    district: 'Karur',
    period: 'Early Historic (c. 2nd–3rd Century CE)',
    estimatedDateStart: 100,
    estimatedDateEnd: 300,
    currentLocation: 'In situ at Arunattarmalai, Pugalur',
    institution: 'Tamil Nadu Department of Archaeology / ASI',
    image: '',
    sourceName: 'I. Mahadevan, Early Tamil Epigraphy & TNSDA',
    sourceURL: 'https://www.tnarch.gov.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      script: 'Tamil-Brahmi',
      language: 'Old Tamil',
      inscriptionLocation: 'Arunattarmalai, Pugalur, Karur District',
      transcription: 'mūta amaṇṇaṉ yāṟṟūr ceṅkāyapaṉ uṟaiyuḷ kō ātaṉ cellirumpoṟai makaṉ peruṅkaṭuṅkōṉ makaṉ iḷaṅkaṭuṅkō iḷaṅkō āka aṟutta kal',
      translation: 'The stone (abode) cut when Ilamkadungo, son of Perumkadungo, son of King Athan Cheral Irumporai, became heir-apparent for the senior monk Chenkayapan of Yarrur.',
      epigraphicalDate: 'c. 2nd–3rd Century CE',
      documentationSource: 'Annual Report on Indian Epigraphy (1927–28); Early Tamil Epigraphy Nos. 56–57'
    },
    provenance: [
      { year: 'c. 2nd–3rd c. CE', title: 'Chera Royal Cavern Dedication', custodian: 'Irumporai Chera Lineage', location: 'Pugalur (near Karuvur)', event: 'Records three generations of Chera rulers attested in Sangam literature.', verified: true, hash: '0x5e01...5f01' },
      { year: '1927–1965', title: 'Epigraphical Verification', custodian: 'ASI & I. Mahadevan', location: 'Karur', event: 'Estampages correlated with Patirruppattu colophons.', verified: true, hash: '0x5e02...5f02' }
    ],
    timeline: [
      { date: 'c. 2nd–3rd c. CE', milestoneType: 'Creation / Use', title: 'Ilamkadungo Accession Record', category: 'Origin', details: 'Anchor for Sangam Chera chronology.' },
      { date: '1927', milestoneType: 'Discovery', title: 'Copied by Epigraphy Survey', category: 'Verification', details: 'Published in South Indian Inscriptions.' }
    ],
    journey: [
      { title: 'Arunattarmalai (Pugalur)', year: 'c. 2nd–3rd c. CE–Present', lat: 11.0695, lng: 77.9978, location: 'Pugalur, Karur, Tamil Nadu', custodian: 'Protected Epigraphical Site', description: 'Granite hill overlooking Kaveri valley.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Pugalur Inscription', type: 'inscription', color: '#EA9940' },
        { id: 'n1', label: 'Chera Irumporai Lineage', type: 'dynasty', color: '#12212E' },
        { id: 'n2', label: 'Tamil-Brahmi Script', type: 'script', color: '#307082' },
        { id: 'n3', label: 'Pugalur (Karur)', type: 'location', color: '#6CA3A2' },
        { id: 'n4', label: 'Patirruppattu Corpus', type: 'literature', color: '#ECE7DC' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Documents' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Script' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Engraved At' },
        { id: 'e4', source: 'n1', target: 'n4', label: 'Corroborated By' }
      ]
    },
    relatedIds: ['insc-002', 'coin-005'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x8b505f01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef15',
      blockNumber: 28491254,
      timestamp: '12 Nov 2026, 09:55:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'insc-006',
    gai: 'GAI-TN-INSC-0006',
    name: 'Tamil-Brahmi Inscribed Pottery',
    tamilName: 'தமிழ்-பிராமி எழுத்துப் பொறித்த பானை ஓடுகள்',
    category: 'Inscriptions and Epigraphical Records',
    subCategory: 'Ceramic Graffiti & Literacy',
    recordType: 'inscription',
    description:
      'Post-firing personal names and kinship labels etched in Tamil-Brahmi script on Black-and-Red Ware and russet-coated pottery from Keezhadi, Kodumanal, Porunthal, Alagankulam, and overseas port Berenike.',
    material: 'Fired Earthenware Potsherds',
    origin: 'Keezhadi (Sivaganga) & Kodumanal (Erode), Tamil Nadu',
    district: 'Sivaganga / Erode',
    period: 'Early Historic (c. 6th Century BCE – 3rd Century CE)',
    estimatedDateStart: -580,
    estimatedDateEnd: 300,
    currentLocation: 'Keezhadi Museum & TNSDA Repositories',
    institution: 'Tamil Nadu Department of Archaeology',
    image: '',
    sourceName: 'Tamil Nadu Department of Archaeology (Keeladi & Porunthal Reports)',
    sourceURL: 'https://www.tnarch.gov.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      script: 'Tamil-Brahmi',
      language: 'Old Tamil (with occasional Prakrit personal names)',
      inscriptionLocation: 'Keezhadi, Kodumanal, Porunthal, Alagankulam',
      transcription: 'ātaṉ (Aadhan), kuviraṉ-ātaṉ (Kuviran Aadhan), tiśaṉ (Tisan), vāyirā (Vayira)',
      translation: 'Personal owner marks engraved on domestic ceramic vessels after firing.',
      epigraphicalDate: 'c. 6th Century BCE – 3rd Century CE',
      documentationSource: 'TNSDA Keeladi Report (2019); K. Rajan, Early Writing System in Tamil Nadu'
    },
    provenance: [
      { year: 'c. 6th c. BCE–3rd c. CE', title: 'Domestic Literacy Etchings', custodian: 'Pottery Owners', location: 'Vaigai & Noyyal Basins', event: 'Personal names scratched on pottery rims post-firing.', verified: true, hash: '0x6e01...4a01' },
      { year: '2015–2023', title: 'Stratigraphic Recovery', custodian: 'TNSDA & ASI', location: 'Keezhadi / Kodumanal', event: 'Over 1,000 inscribed sherds documented across Tamil Nadu.', verified: true, hash: '0x6e02...4a02' }
    ],
    timeline: [
      { date: 'c. 580 BCE–300 CE', milestoneType: 'Creation / Use', title: 'Everyday Literacy Evidence', category: 'Origin', details: 'Demonstrates widespread literacy among ordinary pottery users.' },
      { date: '2019', milestoneType: 'Publication', title: 'TNSDA Keeladi Radiocarbon Release', category: 'Verification', details: 'Published AMS dates associated with inscribed layers.' }
    ],
    journey: [
      { title: 'Keezhadi & Kodumanal', year: 'c. 580 BCE–300 CE', lat: 9.8527, lng: 78.1879, location: 'Keezhadi, Sivaganga, TN', custodian: 'TNSDA', description: 'Primary habitation trench context.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Tamil-Brahmi Pottery', type: 'inscription', color: '#EA9940' },
        { id: 'n1', label: 'Tamil-Brahmi Script', type: 'script', color: '#307082' },
        { id: 'n2', label: 'Keezhadi & Kodumanal', type: 'site', color: '#6CA3A2' },
        { id: 'n3', label: 'TNSDA Monograph', type: 'institution', color: '#12212E' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Script' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Excavated At' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Published By' }
      ]
    },
    relatedIds: ['arch-008', 'arch-007', 'insc-001'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x8b604a01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef16',
      blockNumber: 28491268,
      timestamp: '12 Nov 2026, 09:58:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'insc-007',
    gai: 'GAI-TN-INSC-0007',
    name: 'Ancient Tamil Coins with Inscriptions',
    tamilName: 'எழுத்துப் பொறித்த சங்ககாலத் தமிழ் நாணயங்கள்',
    category: 'Inscriptions and Epigraphical Records',
    subCategory: 'Numismatic Epigraphy',
    recordType: 'inscription',
    description:
      'Rare Early Historic silver and copper coins bearing Tamil-Brahmi legends such as "Peruvazhuthi", "Kollippurai", "Makkotai", and "Kuttuvan Kotai", linking Sangam royal titles directly to numismatics.',
    material: 'Silver & Copper Alloy',
    origin: 'Karur (Amaravathi Riverbed) & Madurai Region, Tamil Nadu',
    district: 'Karur / Madurai',
    period: 'Early Historic (c. 2nd Century BCE – 3rd Century CE)',
    estimatedDateStart: -150,
    estimatedDateEnd: 300,
    currentLocation: 'Government Museum Chennai & Institutional Numismatic Archives',
    institution: 'Tamil Nadu Government Museum / Numismatic Scholars',
    image: '',
    sourceName: 'R. Krishnamurthy, Sangam Age Tamil Coins; Govt Museum Chennai',
    sourceURL: 'https://govtmuseumchennai.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Scholarly Reference',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      script: 'Tamil-Brahmi (Numismatic Legends)',
      language: 'Old Tamil',
      inscriptionLocation: 'Amaravathi Riverbed (Karur) & Vaigai Region',
      transcription: 'Peruvaluti (பெருவழுதி), Kollippurai (கொல்லிப்புறை), Makkotai (மாக்கோதை)',
      translation: 'Royal titles/names corresponding to Sangam-era Pandya and Chera rulers.',
      epigraphicalDate: 'c. 2nd Century BCE – 3rd Century CE',
      documentationSource: 'R. Krishnamurthy, Sangam Age Tamil Coins (1997); Early Tamil Epigraphy'
    },
    provenance: [
      { year: 'c. 2nd c. BCE–3rd c. CE', title: 'Early Coin Minting', custodian: 'Sangam Polities', location: 'Karur & Madurai', event: 'Struck with Tamil-Brahmi legends alongside dynastic emblems.', verified: true, hash: '0x7e01...3b01' },
      { year: '1980s–1997', title: 'Numismatic Decipherment', custodian: 'Numismatic Society & R. Krishnamurthy', location: 'Chennai', event: 'Legends authenticated and published in scholarly monographs.', verified: true, hash: '0x7e02...3b02' }
    ],
    timeline: [
      { date: 'c. 2nd c. BCE–3rd c. CE', milestoneType: 'Creation / Use', title: 'Inscribed Sangam Coinage', category: 'Origin', details: 'Combines Tamil-Brahmi script with portrait/emblem motifs.' },
      { date: '1997', milestoneType: 'Documentation', title: 'Published in Numismatic Corpus', category: 'Verification', details: 'Palaeographic dating verified against cave inscriptions.' }
    ],
    journey: [
      { title: 'Karur (Amaravathi Riverbed)', year: 'c. 1st–3rd c. CE', lat: 10.9601, lng: 78.0766, location: 'Karur, Tamil Nadu', custodian: 'Riverbed Discovery Context', description: 'Major findspot for Makkotai and Kollippurai coins.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Inscribed Tamil Coins', type: 'inscription', color: '#EA9940' },
        { id: 'n1', label: 'Tamil-Brahmi Legends', type: 'script', color: '#307082' },
        { id: 'n2', label: 'Karur & Madurai', type: 'location', color: '#6CA3A2' },
        { id: 'n3', label: 'Makkotai / Peruvaluti', type: 'record', color: '#12212E' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Script' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Found Near' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Bears Legend' }
      ]
    },
    relatedIds: ['coin-005', 'coin-007', 'insc-005'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x8b703b01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef17',
      blockNumber: 28491281,
      timestamp: '12 Nov 2026, 10:01:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'insc-008',
    gai: 'GAI-TN-INSC-0008',
    name: 'Chola Copper Plate Records (Thiruvalangadu & Leiden Plates)',
    tamilName: 'சோழர் செப்பேடுகள் (திருவாலங்காடு செப்பேடு)',
    category: 'Inscriptions and Epigraphical Records',
    subCategory: 'Royal Copper-Plate Charters',
    recordType: 'inscription',
    description:
      'Monumental bilingual Sanskrit and Tamil copper-plate charters (such as the Thiruvalangadu Plates of Rajendra Chola I, 31 leaves strung on a massive bronze ring with royal Chola seal) recording land grants and royal genealogy.',
    material: 'Hammered Copper Plates & Bronze Royal Seal',
    origin: 'Thiruvalangadu, Tiruvallur District, Tamil Nadu',
    district: 'Tiruvallur',
    period: 'Imperial Chola Period (11th Century CE)',
    estimatedDateStart: 1018,
    estimatedDateEnd: 1044,
    currentLocation: 'Government Museum Chennai (Epigraphy / Copper Plates Gallery)',
    institution: 'Tamil Nadu Government Museum',
    image: '',
    sourceName: 'South Indian Inscriptions Vol. III & Govt Museum Chennai',
    sourceURL: 'https://govtmuseumchennai.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Institutionally Catalogued',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      script: 'Grantha (Sanskrit Prasasti) & Medieval Tamil',
      language: 'Sanskrit & Tamil',
      inscriptionLocation: 'Thiruvalangadu, Tiruvallur District (now at Government Museum Chennai)',
      transcription: 'Svasti Sri — Grant of Palaiyanur village by Rajendra Chola I (6th regnal year, 1018 CE).',
      translation: 'Bilingual royal charter detailing Chola genealogy in Sanskrit and administrative boundaries in Tamil.',
      epigraphicalDate: '1018 CE (6th Regnal Year of Rajendra Chola I)',
      documentationSource: 'South Indian Inscriptions (SII) Vol. III, Part III, No. 205; Government Museum Chennai'
    },
    provenance: [
      { year: '1018 CE', title: 'Royal Charter Issued', custodian: 'Rajendra Chola I Chancellery', location: 'Thiruvalangadu', event: 'Engraved on 31 copper sheets weighing over 40 kg.', verified: true, hash: '0x8e01...2c01' },
      { year: '1905', title: 'Discovered & Transferred to Museum', custodian: 'Government Museum Chennai', location: 'Chennai', event: 'Discovered in temple premises and moved to Chennai Museum.', verified: true, hash: '0x8e02...2c02' }
    ],
    timeline: [
      { date: '1018 CE', milestoneType: 'Creation / Use', title: 'Issued by Rajendra Chola I', category: 'Origin', details: 'Records royal genealogy and Palaiyanur temple grant.' },
      { date: '1905', milestoneType: 'Discovery & Acquisition', title: 'Accessioned at Govt Museum Chennai', category: 'Location', details: 'Preserved alongside Chola bronzes.' },
      { date: '1920', milestoneType: 'Publication', title: 'Published in SII Vol. III', category: 'Verification', details: 'Full text and translation edited by H. Krishna Sastri.' }
    ],
    journey: [
      { title: 'Thiruvalangadu Temple', year: '1018–1905', lat: 13.1250, lng: 79.7890, location: 'Thiruvalangadu, Tiruvallur, TN', custodian: 'Vadaranyeswarar Temple', description: 'Original charter repository.' },
      { title: 'Government Museum Chennai', year: '1905–Present', lat: 13.0732, lng: 80.2609, location: 'Chennai, Tamil Nadu', custodian: 'Government Museum Chennai', description: 'Displayed in Copper Plate Collection.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Chola Copper Plates', type: 'inscription', color: '#EA9940' },
        { id: 'n1', label: 'Grantha & Tamil Scripts', type: 'script', color: '#307082' },
        { id: 'n2', label: 'Rajendra Chola I', type: 'person', color: '#12212E' },
        { id: 'n3', label: 'Govt Museum Chennai', type: 'institution', color: '#307082' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Written In' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Issued By' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Preserved At' }
      ]
    },
    relatedIds: ['sculp-001', 'coin-006'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x8b802c01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef18',
      blockNumber: 28491294,
      timestamp: '12 Nov 2026, 10:04:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'insc-009',
    gai: 'GAI-TN-INSC-0009',
    name: 'Pandya Inscriptions (Velvikudi & Vatteluttu Corpus)',
    tamilName: 'பாண்டியர் கல்வெட்டுகள் மற்றும் வேள்விக்குடிச் செப்பேடு',
    category: 'Inscriptions and Epigraphical Records',
    subCategory: 'Vatteluttu & Pandya Charters',
    recordType: 'inscription',
    description:
      'Early and Imperial Pandya records in Vatteluttu, Tamil, and Grantha scripts — exemplified by the Velvikudi Copper Plates (769–770 CE) and Kalugumalai/Tirunelveli stone inscriptions.',
    material: 'Copper Plates & Temple Granite Stone',
    origin: 'Madurai & Tirunelveli Regions, Tamil Nadu',
    district: 'Madurai / Tirunelveli / Thoothukudi',
    period: 'Early Pandya & Later Pandya (8th–14th Century CE)',
    estimatedDateStart: 769,
    estimatedDateEnd: 1340,
    currentLocation: 'ASI Epigraphy Archive / Temple Walls In Situ',
    institution: 'Archaeological Survey of India / TNSDA',
    image: '',
    sourceName: 'Epigraphia Indica Vol. XVII & ASI',
    sourceURL: 'https://asi.nic.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      script: 'Vatteluttu, Grantha & Tamil',
      language: 'Tamil & Sanskrit',
      inscriptionLocation: 'Madurai / Kalugumalai / Nellaiappar Temple, Tirunelveli',
      transcription: 'Velvikudi Grant of Nedunjadaiyan Parantaka (3rd regnal year, c. 769–770 CE).',
      translation: 'Records restoration of Velvikudi village grant originally made by Early Pandya Palyagasalai Mudukudumi Peruvaluthi.',
      epigraphicalDate: 'c. 769 CE (Velvikudi) to 14th Century CE',
      documentationSource: 'Epigraphia Indica Vol. XVII (H. Krishna Sastri); South Indian Inscriptions'
    },
    provenance: [
      { year: '769–770 CE', title: 'Velvikudi Charter Issued', custodian: 'Parantaka Nedunjadaiyan', location: 'Madurai Region', event: 'Bridges Sangam-era Palyagasalai Mudukudumi with 8th-century Pandya history.', verified: true, hash: '0x9e01...1d01' },
      { year: '1923', title: 'Epigraphia Indica Publication', custodian: 'ASI Epigraphy', location: 'Ootacamund / Mysore', event: 'Critically edited and published.', verified: true, hash: '0x9e02...1d02' }
    ],
    timeline: [
      { date: '769–770 CE', milestoneType: 'Creation / Use', title: 'Velvikudi Copper Plate Grant', category: 'Origin', details: 'Key Vatteluttu charter of early medieval Tamilakam.' },
      { date: '1923', milestoneType: 'Publication', title: 'Published in Epigraphia Indica', category: 'Verification', details: 'Standard epigraphical edition.' }
    ],
    journey: [
      { title: 'Madurai Pandya Heartland', year: '8th–14th c. CE', lat: 9.9252, lng: 78.1198, location: 'Madurai, Tamil Nadu', custodian: 'Pandya Epigraphic Corpus', description: 'Core region of Pandya inscriptions.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Pandya Inscriptions', type: 'inscription', color: '#EA9940' },
        { id: 'n1', label: 'Vatteluttu Script', type: 'script', color: '#307082' },
        { id: 'n2', label: 'Velvikudi Grant (769 CE)', type: 'record', color: '#12212E' },
        { id: 'n3', label: 'Madurai & Tirunelveli', type: 'location', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Written In' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Includes' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Provenance' }
      ]
    },
    relatedIds: ['insc-001', 'insc-003', 'coin-007'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x8b901d01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef19',
      blockNumber: 28491308,
      timestamp: '12 Nov 2026, 10:07:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'insc-010',
    gai: 'GAI-TN-INSC-0010',
    name: 'Pallava Temple Inscriptions (Mandagapattu & Mahabalipuram)',
    tamilName: 'பல்லவர் கோயில் கல்வெட்டுகள் (மண்டகப்பட்டு)',
    category: 'Inscriptions and Epigraphical Records',
    subCategory: 'Rock-Cut Temple Epigraphy',
    recordType: 'inscription',
    description:
      'Sanskrit and Tamil temple inscriptions in Pallava-Grantha and Tamil scripts, beginning with Mahendravarman I’s Mandagapattu rock-cut shrine inscription declaring the first stone temple built without brick, timber, metal, or mortar.',
    material: 'Granite Cave & Structural Temple Walls',
    origin: 'Mandagapattu (Villupuram) & Mahabalipuram (Chengalpattu), Tamil Nadu',
    district: 'Villupuram / Chengalpattu',
    period: 'Pallava Period (7th–9th Century CE)',
    estimatedDateStart: 600,
    estimatedDateEnd: 890,
    currentLocation: 'In situ at Mandagapattu & Mahabalipuram (ASI Protected)',
    institution: 'Archaeological Survey of India',
    image: '',
    sourceName: 'Archaeological Survey of India & Epigraphia Indica Vol. XVII',
    sourceURL: 'https://asi.nic.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      script: 'Pallava-Grantha & Early Tamil',
      language: 'Sanskrit & Tamil',
      inscriptionLocation: 'Mandagapattu Trimurti Cave, Villupuram & Mahabalipuram',
      transcription: 'Etad-aniṣṭakam-adrumam-aloham-asudham vichitrachittena / nirmāpitam-nṛpeṇa brahmeśvara-viṣṇu-lakṣitāyatanam',
      translation: 'This temple dedicated to Brahma, Isvara, and Vishnu was caused to be made by King Vichitrachitta (Mahendravarman I) without brick, timber, metal, or mortar.',
      epigraphicalDate: 'c. 600–630 CE (Mahendravarman I)',
      documentationSource: 'Epigraphia Indica Vol. XVII; ASI South Indian Temple Inscriptions'
    },
    provenance: [
      { year: 'c. 600–630 CE', title: 'Mandagapattu Foundation Epigraph', custodian: 'Pallava King Mahendravarman I', location: 'Mandagapattu', event: 'Marks the birth of granite rock-cut temple architecture in Tamilakam.', verified: true, hash: '0x0e01...0f01' }
    ],
    timeline: [
      { date: 'c. 600–630 CE', milestoneType: 'Creation / Use', title: 'Vichitrachitta Inscription', category: 'Origin', details: 'Inaugurates stone rock-cut shrines in Tamil Nadu.' },
      { date: 'c. 700–728 CE', milestoneType: 'Expansion', title: 'Rajasimha Inscriptions at Mamallapuram & Kanchi', category: 'Exhibition', details: 'Shore Temple and Kailasanatha foundation records.' }
    ],
    journey: [
      { title: 'Mandagapattu & Mahabalipuram', year: '7th–9th c. CE–Present', lat: 12.6208, lng: 80.1945, location: 'Mahabalipuram, Chengalpattu, TN', custodian: 'ASI World Heritage / Protected Sites', description: 'Pallava epigraphic heartland.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Pallava Temple Inscriptions', type: 'inscription', color: '#EA9940' },
        { id: 'n1', label: 'Pallava-Grantha Script', type: 'script', color: '#307082' },
        { id: 'n2', label: 'Mahendravarman I', type: 'person', color: '#12212E' },
        { id: 'n3', label: 'Mandagapattu & Mamallapuram', type: 'location', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Script' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Commissioned By' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Location' }
      ]
    },
    relatedIds: ['sculp-005', 'sculp-006'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x8b000f01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef20',
      blockNumber: 28491322,
      timestamp: '12 Nov 2026, 10:10:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  }
];

