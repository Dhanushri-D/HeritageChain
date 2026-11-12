export const ARCHAEOLOGICAL_ARTIFACTS = [
  {
    id: 'arch-001',
    gai: 'GAI-TN-ARCH-0001',
    name: 'Adichanallur Burial Urns',
    tamilName: 'ஆதிச்சநல்லூர் முதுமக்கள் தாழி',
    category: 'Archaeological Discoveries',
    subCategory: 'Funerary Urns',
    recordType: 'archaeological',
    description:
      'Large handmade coarse red-and-black ware funerary urns excavated from the Iron Age urn-burial site of Adichanallur along the Tamiraparani river basin. Used for primary and secondary burials accompanied by grave pottery, iron implements, and bronze ornaments.',
    material: 'Coarse Terracotta Clay (Black-and-Red Ware)',
    origin: 'Adichanallur, Thoothukudi District, Tamil Nadu',
    district: 'Thoothukudi',
    period: 'Iron Age / Megalithic Period',
    estimatedDateStart: -900,
    estimatedDateEnd: -300,
    currentLocation: 'Government Museum Chennai & ASI Site Museum, Adichanallur',
    institution: 'Tamil Nadu Government Museum / ASI',
    image: '',
    sourceName: 'Archaeological Survey of India & Government Museum Chennai',
    sourceURL: 'https://asi.nic.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      excavationSite: 'Adichanallur (Tamiraparani Basin)',
      district: 'Thoothukudi',
      excavationYear: '1876 (Jagor), 1899–1905 (Alexander Rea), 2004–2005 (ASI), 2020–2023 (TN Archaeology)',
      archaeologicalPeriod: 'Iron Age / Megalithic',
      estimatedDate: 'c. 900 BCE – 300 BCE (radiocarbon dates up to c. 905 BCE reported in ASI/TN studies)',
      excavationReport: 'Alexander Rea, Catalogue of the Prehistoric Antiquities from Adichanallur and Perumbair (1915); ASI Excavation Summary (2004–05)',
      currentCollection: 'Government Museum Chennai (Prehistory Gallery) & Adichanallur On-Site Museum'
    },
    provenance: [
      { year: 'c. 900–300 BCE', title: 'Iron Age Funerary Use', custodian: 'Iron Age Tamiraparani Community', location: 'Adichanallur, Thoothukudi', event: 'Urns manufactured and interred in extensive urn-burial necropolis.', verified: true, hash: '0x1a01...ad01' },
      { year: '1899–1905', title: 'ASI Archaeological Excavation', custodian: 'Alexander Rea (Archaeological Survey of India)', location: 'Adichanallur, Tirunelveli/Thoothukudi', event: 'Systematic excavation documenting hundreds of burial urns and grave goods.', verified: true, hash: '0x1a02...ad02' },
      { year: '1915', title: 'Museum Cataloguing', custodian: 'Government Museum Chennai', location: 'Egmore, Chennai', event: 'Catalogued in Prehistoric Antiquities collection.', verified: true, hash: '0x1a03...ad03' },
      { year: '2026', title: 'HeritageChain GAI Registration', custodian: 'Tamil Heritage Digital Registry', location: 'Chennai / Thoothukudi', event: 'Assigned canonical GAI-TN-ARCH-0001 with excavation provenance.', verified: true, hash: '0x1a04...ad04' }
    ],
    timeline: [
      { date: 'c. 900–300 BCE', milestoneType: 'Creation / Use', title: 'Iron Age Burial Interments', category: 'Origin', details: 'Urns placed in lateritic gravel pits with grave offerings.' },
      { date: '1876 / 1899–1905', milestoneType: 'Discovery & Excavation', title: 'Early Explorations & Rea Excavations', category: 'Location', details: 'Excavated by Dr. Jagor (1876) and Alexander Rea (1899–1905).' },
      { date: '2004–2005', milestoneType: 'Re-Excavation', title: 'ASI Stratigraphic Excavation', category: 'Verification', details: 'T. Satyamurthy led ASI excavations revealing 160+ urns and radiocarbon samples.' },
      { date: '2023', milestoneType: 'Site Museum', title: 'Adichanallur On-Site Museum Initiated', category: 'Exhibition', details: 'In-situ burial conservation and public display.' },
      { date: '2026', milestoneType: 'Digital Registration', title: 'GAI-TN-ARCH-0001 Anchored', category: 'Verification', details: 'Digitized and indexed on HeritageChain.' }
    ],
    journey: [
      { title: 'Adichanallur Urn Field', year: 'c. 900–300 BCE', lat: 8.6347, lng: 77.8768, location: 'Adichanallur, Thoothukudi, Tamil Nadu', custodian: 'Archaeological Site', description: 'Original Iron Age burial ground on the southern bank of Tamiraparani.' },
      { title: 'Government Museum Chennai', year: '1905–Present', lat: 13.0732, lng: 80.2609, location: 'Egmore, Chennai, Tamil Nadu', custodian: 'Tamil Nadu Government Museum', description: 'Selected excavated urns conserved and exhibited.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Adichanallur Burial Urns', type: 'artifact', color: '#EA9940' },
        { id: 'n1', label: 'Adichanallur Site', type: 'site', color: '#307082' },
        { id: 'n2', label: 'Thoothukudi District', type: 'district', color: '#6CA3A2' },
        { id: 'n3', label: 'ASI & Rea Report (1915)', type: 'report', color: '#12212E' },
        { id: 'n4', label: 'Govt Museum Chennai', type: 'institution', color: '#307082' },
        { id: 'n5', label: 'Iron Age / Megalithic', type: 'period', color: '#ECE7DC' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Excavated At' },
        { id: 'e2', source: 'n1', target: 'n2', label: 'Located In' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Documented In' },
        { id: 'e4', source: 'root', target: 'n4', label: 'Preserved At' },
        { id: 'e5', source: 'root', target: 'n5', label: 'Dated To' }
      ]
    },
    relatedIds: ['arch-002', 'arch-003', 'arch-005'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x7a10ad01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef01',
      blockNumber: 28491011,
      timestamp: '12 Nov 2026, 09:15:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'arch-002',
    gai: 'GAI-TN-ARCH-0002',
    name: 'Iron Implements from Adichanallur',
    tamilName: 'ஆதிச்சநல்லூர் இரும்புக் கருவிகள்',
    category: 'Archaeological Discoveries',
    subCategory: 'Iron Age Metallurgy',
    recordType: 'archaeological',
    description:
      'Forged iron agricultural tools, swords, daggers, spearheads, tridents, and chisels recovered inside and around Adichanallur burial urns, demonstrating advanced Iron Age smelting and blacksmithing in southern Tamil Nadu.',
    material: 'Wrought Iron (High-Carbon Smelted Iron)',
    origin: 'Adichanallur, Thoothukudi District, Tamil Nadu',
    district: 'Thoothukudi',
    period: 'Iron Age / Megalithic Period',
    estimatedDateStart: -800,
    estimatedDateEnd: -200,
    currentLocation: 'Prehistory Gallery, Government Museum Chennai',
    institution: 'Tamil Nadu Government Museum',
    image: '',
    sourceName: 'Government Museum Chennai Catalogue',
    sourceURL: 'https://govtmuseumchennai.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Institutionally Catalogued',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      excavationSite: 'Adichanallur',
      district: 'Thoothukudi',
      excavationYear: '1899–1905; 2004–2005',
      archaeologicalPeriod: 'Iron Age',
      estimatedDate: 'c. 800 BCE – 200 BCE',
      excavationReport: 'Alexander Rea (1915) Prehistoric Antiquities Catalogue, Nos. 1–120',
      currentCollection: 'Government Museum Chennai'
    },
    provenance: [
      { year: 'c. 800–200 BCE', title: 'Iron Forging & Burial Deposit', custodian: 'Iron Age Artisans', location: 'Adichanallur, Thoothukudi', event: 'Forged iron weapons and agricultural blades placed as grave offerings.', verified: true, hash: '0x2b01...fe11' },
      { year: '1905', title: 'Transferred to Madras Museum', custodian: 'Government Museum Chennai', location: 'Chennai, Tamil Nadu', event: 'Accessioned following Alexander Rea excavations.', verified: true, hash: '0x2b02...fe12' }
    ],
    timeline: [
      { date: 'c. 800–200 BCE', milestoneType: 'Creation / Use', title: 'Iron Smelting & Forging', category: 'Origin', details: 'Produced in Iron Age Tamiraparani region.' },
      { date: '1904', milestoneType: 'Excavation', title: 'Excavated from Urn Burials', category: 'Location', details: 'Recovered alongside bronze lids and pottery.' },
      { date: '1915', milestoneType: 'Cataloguing', title: 'Published in Museum Catalogue', category: 'Verification', details: 'Documented by Government Museum Chennai.' }
    ],
    journey: [
      { title: 'Adichanallur Excavation Site', year: 'c. 800 BCE', lat: 8.6347, lng: 77.8768, location: 'Adichanallur, Thoothukudi', custodian: 'Archaeological Context', description: 'Grave deposit context.' },
      { title: 'Government Museum Chennai', year: '1905–Present', lat: 13.0732, lng: 80.2609, location: 'Chennai, Tamil Nadu', custodian: 'Government Museum Chennai', description: 'Conserved in Prehistory Collection.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Iron Implements (Adichanallur)', type: 'artifact', color: '#EA9940' },
        { id: 'n1', label: 'Adichanallur', type: 'site', color: '#307082' },
        { id: 'n2', label: 'Wrought Iron Metallurgy', type: 'material', color: '#ECE7DC' },
        { id: 'n3', label: 'Govt Museum Chennai', type: 'institution', color: '#307082' },
        { id: 'n4', label: 'Iron Age', type: 'period', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Excavated At' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Crafted From' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Catalogued At' },
        { id: 'e4', source: 'root', target: 'n4', label: 'Dated To' }
      ]
    },
    relatedIds: ['arch-001', 'arch-003', 'arch-005'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x7a20fe11b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef02',
      blockNumber: 28491025,
      timestamp: '12 Nov 2026, 09:18:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'arch-003',
    gai: 'GAI-TN-ARCH-0003',
    name: 'Bronze Objects from Adichanallur',
    tamilName: 'ஆதிச்சநல்லூர் வெண்கலப் பொருட்கள்',
    category: 'Archaeological Discoveries',
    subCategory: 'Prehistoric Bronzes',
    recordType: 'archaeological',
    description:
      'High-tin bronze bowls, ornamental jar lids topped with animal and bird finials (buffalo, cock, antelope), and thin gold/bronze diadems excavated from Adichanallur urn burials.',
    material: 'High-Tin Bronze Alloy (Copper-Tin)',
    origin: 'Adichanallur, Thoothukudi District, Tamil Nadu',
    district: 'Thoothukudi',
    period: 'Iron Age / Early Historic Transition',
    estimatedDateStart: -800,
    estimatedDateEnd: -200,
    currentLocation: 'Government Museum Chennai',
    institution: 'Tamil Nadu Government Museum',
    image: '',
    sourceName: 'Government Museum Chennai & ASI',
    sourceURL: 'https://govtmuseumchennai.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      excavationSite: 'Adichanallur',
      district: 'Thoothukudi',
      excavationYear: '1899–1905',
      archaeologicalPeriod: 'Iron Age',
      estimatedDate: 'c. 800 BCE – 200 BCE',
      excavationReport: 'Alexander Rea (1915) Prehistoric Antiquities; Bronze Lids & Diadems',
      currentCollection: 'Government Museum Chennai'
    },
    provenance: [
      { year: 'c. 800–200 BCE', title: 'High-Tin Bronze Casting', custodian: 'Ancient Metalworkers', location: 'Adichanallur, Thoothukudi', event: 'Cast and beaten bronze vessels and animal finials interred in elite burials.', verified: true, hash: '0x3c01...ab21' },
      { year: '1905', title: 'Museum Accession', custodian: 'Government Museum Chennai', location: 'Chennai', event: 'Added to permanent prehistoric metalware collection.', verified: true, hash: '0x3c02...ab22' }
    ],
    timeline: [
      { date: 'c. 800–200 BCE', milestoneType: 'Creation / Use', title: 'High-Tin Bronze Manufacture', category: 'Origin', details: 'Fine bronze finials and bowls produced.' },
      { date: '1903–1905', milestoneType: 'Excavation', title: 'Recovered by Alexander Rea', category: 'Location', details: 'Unearthed inside burial urns.' },
      { date: '2026', milestoneType: 'Digital Registration', title: 'HeritageChain Record Created', category: 'Verification', details: 'Indexed under GAI-TN-ARCH-0003.' }
    ],
    journey: [
      { title: 'Adichanallur', year: 'c. 800–200 BCE', lat: 8.6347, lng: 77.8768, location: 'Adichanallur, Thoothukudi', custodian: 'Archaeological Site', description: 'Burial urn context.' },
      { title: 'Government Museum Chennai', year: '1905–Present', lat: 13.0732, lng: 80.2609, location: 'Chennai, Tamil Nadu', custodian: 'Government Museum Chennai', description: 'On institutional display.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Adichanallur Bronze Objects', type: 'artifact', color: '#EA9940' },
        { id: 'n1', label: 'Adichanallur', type: 'site', color: '#307082' },
        { id: 'n2', label: 'High-Tin Bronze', type: 'material', color: '#ECE7DC' },
        { id: 'n3', label: 'Govt Museum Chennai', type: 'institution', color: '#307082' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Found At' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Alloy' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Held By' }
      ]
    },
    relatedIds: ['arch-001', 'arch-002', 'craft-001'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x7a30ab21b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef03',
      blockNumber: 28491038,
      timestamp: '12 Nov 2026, 09:20:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'arch-004',
    gai: 'GAI-TN-ARCH-0004',
    name: 'Burial Pottery and Grave Goods',
    tamilName: 'ஈமத்தாழி மட்பாண்டங்கள் மற்றும் ஈமப் பொருட்கள்',
    category: 'Archaeological Discoveries',
    subCategory: 'Megalithic Ceramics',
    recordType: 'archaeological',
    description:
      'Black-and-Red Ware (BRW) bowls, ring-stands, conical vases, and miniature ritual pots placed inside and outside Iron Age megalithic burials across Tamil Nadu.',
    material: 'Wheel-Thrown Black-and-Red Ware Terracotta',
    origin: 'Adichanallur & Kodumanal, Tamil Nadu',
    district: 'Thoothukudi / Erode',
    period: 'Iron Age / Early Historic',
    estimatedDateStart: -800,
    estimatedDateEnd: 100,
    currentLocation: 'Tamil Nadu State Archaeology & Govt Museum Chennai',
    institution: 'Tamil Nadu Department of Archaeology',
    image: '',
    sourceName: 'Tamil Nadu Department of Archaeology',
    sourceURL: 'https://www.tnarch.gov.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      excavationSite: 'Adichanallur / Kodumanal / Perumbair',
      district: 'Thoothukudi / Erode / Chengalpattu',
      excavationYear: '1904–2023',
      archaeologicalPeriod: 'Iron Age – Early Historic',
      estimatedDate: 'c. 800 BCE – 100 CE',
      excavationReport: 'TNSDA Megalithic Burial & Pottery Documentation',
      currentCollection: 'Tamil Nadu State Archaeology Museums'
    },
    provenance: [
      { year: 'c. 800 BCE–100 CE', title: 'Inverted Firing Ceramic Production', custodian: 'Megalithic Potters', location: 'Tamil Nadu', event: 'Fired using inverted reduction technique to produce glossy black interior and red exterior.', verified: true, hash: '0x4d01...cc11' },
      { year: '2020–2023', title: 'Stratigraphic Documentation', custodian: 'Tamil Nadu Department of Archaeology', location: 'Chennai / Site Museums', event: 'Documented with high-resolution profile drawings and radiocarbon context.', verified: true, hash: '0x4d02...cc12' }
    ],
    timeline: [
      { date: 'c. 800 BCE–100 CE', milestoneType: 'Creation / Use', title: 'Black-and-Red Ware Tradition', category: 'Origin', details: 'Signature ceramic horizon of Iron Age South India.' },
      { date: '2020–2023', milestoneType: 'Documentation', title: 'TNSDA Typological Archiving', category: 'Verification', details: 'Classified by rim shape and graffito marks.' }
    ],
    journey: [
      { title: 'Adichanallur & Kodumanal Sites', year: 'c. 800 BCE', lat: 11.1112, lng: 77.4547, location: 'Kodumanal & Adichanallur, TN', custodian: 'Archaeological Context', description: 'Primary burial pottery assemblage.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Burial Pottery & Grave Goods', type: 'artifact', color: '#EA9940' },
        { id: 'n1', label: 'Black-and-Red Ware', type: 'material', color: '#ECE7DC' },
        { id: 'n2', label: 'TN Dept of Archaeology', type: 'institution', color: '#307082' },
        { id: 'n3', label: 'Iron Age Megalithic', type: 'period', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Ceramic Type' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Documented By' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Cultural Horizon' }
      ]
    },
    relatedIds: ['arch-001', 'arch-005', 'insc-006'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x7a40cc11b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef04',
      blockNumber: 28491049,
      timestamp: '12 Nov 2026, 09:23:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'arch-005',
    gai: 'GAI-TN-ARCH-0005',
    name: 'Sivagalai Iron Age Archaeological Finds',
    tamilName: 'சிவகளை இரும்புக் காலத் தொல்பொருட்கள்',
    category: 'Archaeological Discoveries',
    subCategory: 'Iron Age Urns & Paddy Husk',
    recordType: 'archaeological',
    description:
      'Urn burials, iron objects, and carbonized paddy husk recovered from Sivagalai in Thoothukudi district, yielding notable AMS radiocarbon dates pointing to deep antiquity of Iron Age settlement in the Tamiraparani valley.',
    material: 'Terracotta, Iron, Carbonized Botanical Remains',
    origin: 'Sivagalai, Thoothukudi District, Tamil Nadu',
    district: 'Thoothukudi',
    period: 'Iron Age',
    estimatedDateStart: -1155,
    estimatedDateEnd: -400,
    currentLocation: 'Tamil Nadu State Department of Archaeology / Porunai Museum Plan',
    institution: 'Tamil Nadu Department of Archaeology',
    image: '',
    sourceName: 'Tamil Nadu State Department of Archaeology (TNSDA)',
    sourceURL: 'https://www.tnarch.gov.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      excavationSite: 'Sivagalai (Parambu & Habitation Mound)',
      district: 'Thoothukudi',
      excavationYear: '2020–2023',
      archaeologicalPeriod: 'Iron Age',
      estimatedDate: 'c. 1155 BCE – 400 BCE (per Beta Analytic AMS dates on paddy husk from urns)',
      excavationReport: 'TNSDA Sivagalai Excavation Reports (2020–2023); Porunai Civilization Publications',
      currentCollection: 'Tamil Nadu Department of Archaeology Repository'
    },
    provenance: [
      { year: 'c. 1155–400 BCE', title: 'Tamiraparani Iron Age Settlement', custodian: 'Early Agrarian & Iron-Using Communities', location: 'Sivagalai, Thoothukudi', event: 'Paddy grains placed inside funerary urns alongside iron implements.', verified: true, hash: '0x5e01...dd51' },
      { year: '2020–2023', title: 'TNSDA Excavation & AMS Dating', custodian: 'Tamil Nadu Department of Archaeology', location: 'Sivagalai, Thoothukudi', event: 'Excavated multi-phase urn burials and habitation mound; AMS radiocarbon tests conducted.', verified: true, hash: '0x5e02...dd52' }
    ],
    timeline: [
      { date: 'c. 1155 BCE (AMS Range)', milestoneType: 'Creation / Use', title: 'Urn Burial with Paddy Offerings', category: 'Origin', details: 'Carbonized paddy husk sealed inside funerary urn.' },
      { date: '2020–2023', milestoneType: 'Excavation', title: 'TNSDA Field Seasons', category: 'Location', details: 'Excavated across Parambu and habitation trenches.' },
      { date: '2021–2025', milestoneType: 'Scientific Analysis', title: 'Radiocarbon & Metallurgical Reports', category: 'Verification', details: 'Published in TNSDA official monographs.' }
    ],
    journey: [
      { title: 'Sivagalai Excavation Site', year: 'c. 1155 BCE – 2023', lat: 8.6625, lng: 77.9344, location: 'Sivagalai, Thoothukudi, TN', custodian: 'Tamil Nadu Dept of Archaeology', description: 'Primary excavation site.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Sivagalai Iron Age Finds', type: 'artifact', color: '#EA9940' },
        { id: 'n1', label: 'Sivagalai', type: 'site', color: '#307082' },
        { id: 'n2', label: 'Thoothukudi District', type: 'district', color: '#6CA3A2' },
        { id: 'n3', label: 'Tamiraparani Basin', type: 'origin', color: '#12212E' },
        { id: 'n4', label: 'TN Dept of Archaeology', type: 'institution', color: '#307082' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Excavated At' },
        { id: 'e2', source: 'n1', target: 'n2', label: 'District' },
        { id: 'e3', source: 'n1', target: 'n3', label: 'River Basin' },
        { id: 'e4', source: 'root', target: 'n4', label: 'Investigated By' }
      ]
    },
    relatedIds: ['arch-001', 'arch-002', 'arch-004'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x7a50dd51b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef05',
      blockNumber: 28491061,
      timestamp: '12 Nov 2026, 09:26:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'arch-006',
    gai: 'GAI-TN-ARCH-0006',
    name: 'Arikamedu Beads and Trade Objects',
    tamilName: 'அரிக்கமேடு மணிகள் மற்றும் வணிகப் பொருட்கள்',
    category: 'Archaeological Discoveries',
    subCategory: 'Indo-Roman Maritime Port',
    recordType: 'archaeological',
    description:
      'Indo-Pacific glass beads, semi-precious stone beads, Roman amphora sherds, Arretine ware, and dyeing vats excavated at Arikamedu (Poduke), a major Coromandel Coast maritime emporium.',
    material: 'Glass, Semi-Precious Stone, Terracotta Amphorae',
    origin: 'Arikamedu, Puducherry (Coromandel Coast)',
    district: 'Puducherry',
    period: 'Early Historic / Sangam Trade Era',
    estimatedDateStart: -200,
    estimatedDateEnd: 300,
    currentLocation: 'Puducherry Museum & ASI Collections',
    institution: 'Archaeological Survey of India / Puducherry Museum',
    image: '',
    sourceName: 'Archaeological Survey of India (Ancient India Vol. 2)',
    sourceURL: 'https://asi.nic.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      excavationSite: 'Arikamedu (Ariyankuppam Riverbank)',
      district: 'Puducherry',
      excavationYear: '1945 (Mortimer Wheeler), 1947–48 (Casal), 1989–92 (Vimala Begley)',
      archaeologicalPeriod: 'Early Historic',
      estimatedDate: 'c. 200 BCE – 300 CE',
      excavationReport: 'R.E.M. Wheeler, Ancient India No. 2 (1946); Vimala Begley (1996) The Ancient Port of Arikamedu',
      currentCollection: 'Puducherry Museum & ASI Purana Qila / Madras Collections'
    },
    provenance: [
      { year: 'c. 200 BCE–300 CE', title: 'Maritime Bead Workshop & Port Activity', custodian: 'Coromandel Artisans & Merchants', location: 'Arikamedu (Poduke)', event: 'Glass and stone beads produced for local and Indian Ocean trade alongside Mediterranean imports.', verified: true, hash: '0x6f01...ee61' },
      { year: '1945–1992', title: 'Multi-Phase Excavations', custodian: 'ASI & University Museum Teams', location: 'Arikamedu, Puducherry', event: 'Stratigraphic confirmation of Mediterranean amphorae and Indo-Pacific bead manufacturing.', verified: true, hash: '0x6f02...ee62' }
    ],
    timeline: [
      { date: 'c. 200 BCE–300 CE', milestoneType: 'Creation / Use', title: 'Active Indo-Roman Trade Port', category: 'Origin', details: 'Mentioned as Poduke in the Periplus of the Erythraean Sea.' },
      { date: '1945', milestoneType: 'Excavation', title: 'Mortimer Wheeler Excavations', category: 'Location', details: 'Established archaeological benchmark for South Indian Early Historic chronology.' },
      { date: '1989–1992', milestoneType: 'Re-Excavation', title: 'Vimala Begley Investigations', category: 'Verification', details: 'Refined bead-making chronology and port occupation phases.' }
    ],
    journey: [
      { title: 'Arikamedu Port Site', year: 'c. 200 BCE–300 CE', lat: 11.9019, lng: 79.8206, location: 'Arikamedu, Puducherry', custodian: 'ASI Protected Monument', description: 'Coastal emporium & bead workshop.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Arikamedu Trade Objects', type: 'artifact', color: '#EA9940' },
        { id: 'n1', label: 'Arikamedu (Poduke)', type: 'site', color: '#307082' },
        { id: 'n2', label: 'Indo-Roman Maritime Trade', type: 'event', color: '#6CA3A2' },
        { id: 'n3', label: 'Wheeler Report (1946)', type: 'report', color: '#12212E' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Excavated At' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Evidence Of' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Published In' }
      ]
    },
    relatedIds: ['coin-008', 'coin-009', 'coin-010'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x7a60ee61b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef06',
      blockNumber: 28491075,
      timestamp: '12 Nov 2026, 09:29:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'arch-007',
    gai: 'GAI-TN-ARCH-0007',
    name: 'Kodumanal Archaeological Objects',
    tamilName: 'கொடுமணல் தொல்பொருட்கள்',
    category: 'Archaeological Discoveries',
    subCategory: 'Industrial & Bead-Making Settlement',
    recordType: 'archaeological',
    description:
      'Crucibles for wootz steel production, semi-precious gemstone beads (quartz, beryl, carnelian), Tamil-Brahmi inscribed potsherds, and megalithic cairn-circle burials excavated along the Noyyal river at Kodumanal.',
    material: 'Quartz, Carnelian, Steel Crucibles, Black-and-Red Ware',
    origin: 'Kodumanal, Erode District, Tamil Nadu',
    district: 'Erode',
    period: 'Early Historic / Sangam Industrial Era',
    estimatedDateStart: -500,
    estimatedDateEnd: 300,
    currentLocation: 'Erode Government Museum & Tamil University Thanjavur',
    institution: 'Tamil Nadu Department of Archaeology / Tamil University',
    image: '',
    sourceName: 'Tamil Nadu Department of Archaeology (Kodumanal Excavations)',
    sourceURL: 'https://www.tnarch.gov.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      excavationSite: 'Kodumanal (Ancient Kodumanam)',
      district: 'Erode',
      excavationYear: '1985–1990 (Tamil University), 1997–1998 & 2012–2021 (TNSDA / Pondicherry Univ)',
      archaeologicalPeriod: 'Iron Age – Early Historic',
      estimatedDate: 'c. 500 BCE – 300 CE',
      excavationReport: 'K. Rajan, Kodumanal Excavations; TNSDA Seasonal Reports (2020–21)',
      currentCollection: 'Tamil University Thanjavur & TNSDA Museum'
    },
    provenance: [
      { year: 'c. 500 BCE–300 CE', title: 'Gemstone & Steel Production Hub', custodian: 'Kongu Region Guilds', location: 'Kodumanal, Erode', event: 'Crafted beryl/carnelian beads and crucible steel along the Chera trade corridor.', verified: true, hash: '0x7a01...ff71' },
      { year: '1985–2021', title: 'University & State Excavations', custodian: 'Tamil University & TNSDA', location: 'Kodumanal, Erode', event: 'Over 150 trenches and megalithic burials excavated systematically.', verified: true, hash: '0x7a02...ff72' }
    ],
    timeline: [
      { date: 'c. 500 BCE–300 CE', milestoneType: 'Creation / Use', title: 'Bead & Crucible Steel Workshops', category: 'Origin', details: 'Mentioned as Kodumanam in Sangam text Patirruppattu.' },
      { date: '1985–1990', milestoneType: 'Excavation', title: 'Initial Tamil University Seasons', category: 'Location', details: 'Revealed industrial furnaces and Tamil-Brahmi sherds.' },
      { date: '2020–2021', milestoneType: 'Re-Excavation', title: 'TNSDA Recent Trenches', category: 'Verification', details: 'Further step-well and burial findings documented.' }
    ],
    journey: [
      { title: 'Kodumanal Excavation Mound', year: 'c. 500 BCE–300 CE', lat: 11.1112, lng: 77.4547, location: 'Kodumanal, Erode, Tamil Nadu', custodian: 'TNSDA Protected Site', description: 'Industrial bead and steel site.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Kodumanal Finds', type: 'artifact', color: '#EA9940' },
        { id: 'n1', label: 'Kodumanal (Noyyal Basin)', type: 'site', color: '#307082' },
        { id: 'n2', label: 'Erode District', type: 'district', color: '#6CA3A2' },
        { id: 'n3', label: 'Wootz Crucible Steel', type: 'material', color: '#ECE7DC' },
        { id: 'n4', label: 'Patirruppattu Reference', type: 'literature', color: '#12212E' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Excavated At' },
        { id: 'e2', source: 'n1', target: 'n2', label: 'Located In' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Industrial Evidence' },
        { id: 'e4', source: 'n1', target: 'n4', label: 'Attested In' }
      ]
    },
    relatedIds: ['insc-006', 'coin-010', 'lit-005'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x7a70ff71b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef07',
      blockNumber: 28491089,
      timestamp: '12 Nov 2026, 09:32:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'arch-008',
    gai: 'GAI-TN-ARCH-0008',
    name: 'Keezhadi Excavation Finds',
    tamilName: 'கீழடி அகழாய்வுத் தொல்பொருட்கள்',
    category: 'Archaeological Discoveries',
    subCategory: 'Sangam Urban Settlement',
    recordType: 'archaeological',
    description:
      'Fired-brick structural remains, terracotta ring wells, bone dice, spindle whorls, gold ornaments, agate beads, and Tamil-Brahmi inscribed potsherds from the Vaigai valley urban settlement at Keezhadi.',
    material: 'Terracotta, Fired Brick, Bone, Gold, Semi-Precious Stones',
    origin: 'Keezhadi, Sivaganga District, Tamil Nadu',
    district: 'Sivaganga',
    period: 'Sangam / Early Historic Urban Phase',
    estimatedDateStart: -600,
    estimatedDateEnd: 200,
    currentLocation: 'Keezhadi Museum, Sivaganga',
    institution: 'Tamil Nadu Department of Archaeology',
    image: '',
    sourceName: 'Tamil Nadu Department of Archaeology (Keeladi Report)',
    sourceURL: 'https://www.tnarch.gov.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      excavationSite: 'Keezhadi (Vaigai River Valley)',
      district: 'Sivaganga',
      excavationYear: '2015–2017 (ASI Phases 1–3); 2018–2024 (TNSDA Phases 4–10)',
      archaeologicalPeriod: 'Early Historic / Sangam Age',
      estimatedDate: 'c. 6th Century BCE – 2nd Century CE (AMS radiocarbon dated)',
      excavationReport: 'Keeladi: An Urban Settlement of Sangam Age on the Banks of River Vaigai (TNSDA, 2019)',
      currentCollection: 'Keezhadi Site Museum, Sivaganga'
    },
    provenance: [
      { year: 'c. 6th c. BCE–2nd c. CE', title: 'Vaigai Urban Habitation', custodian: 'Ancient Vaigai Urban Community', location: 'Keezhadi, Sivaganga', event: 'Planned brick structures, drainage channels, and literate artisan households flourished.', verified: true, hash: '0x8b01...aa81' },
      { year: '2015–2024', title: 'ASI & TNSDA Excavations', custodian: 'ASI & Tamil Nadu Dept of Archaeology', location: 'Keezhadi, Sivaganga', event: 'Ten phases of systematic excavation uncovering thousands of antiquities.', verified: true, hash: '0x8b02...aa82' },
      { year: '2023', title: 'Keezhadi Museum Inauguration', custodian: 'Keezhadi Museum', location: 'Keezhadi, Sivaganga', event: 'Dedicated six-block museum opened for public display and preservation.', verified: true, hash: '0x8b03...aa83' }
    ],
    timeline: [
      { date: 'c. 6th c. BCE', milestoneType: 'Creation / Use', title: 'Early Urban Occupation Layer', category: 'Origin', details: 'Radiocarbon dates place early Tamil-Brahmi levels to c. 580 BCE.' },
      { date: '2015–2017', milestoneType: 'Discovery & Excavation', title: 'ASI Phases I–III', category: 'Location', details: 'Initial discovery of brick structures and inscribed pottery.' },
      { date: '2018–2024', milestoneType: 'Excavation', title: 'TNSDA Phases IV–X', category: 'Verification', details: 'Expanded industrial, terracotta, and bone object documentation.' },
      { date: '2023', milestoneType: 'Museum Collection', title: 'Keezhadi Museum Opened', category: 'Exhibition', details: 'Permanent gallery for Vaigai valley heritage.' }
    ],
    journey: [
      { title: 'Keezhadi Excavation Trenches', year: 'c. 6th c. BCE–2024', lat: 9.8527, lng: 78.1879, location: 'Keezhadi, Sivaganga, TN', custodian: 'TNSDA / Keezhadi Museum', description: 'Excavation mound and adjacent site museum.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Keezhadi Excavation Finds', type: 'artifact', color: '#EA9940' },
        { id: 'n1', label: 'Keezhadi (Vaigai Basin)', type: 'site', color: '#307082' },
        { id: 'n2', label: 'Sivaganga District', type: 'district', color: '#6CA3A2' },
        { id: 'n3', label: 'TNSDA Keeladi Report (2019)', type: 'report', color: '#12212E' },
        { id: 'n4', label: 'Keezhadi Museum', type: 'institution', color: '#307082' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Excavated At' },
        { id: 'e2', source: 'n1', target: 'n2', label: 'District' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Published In' },
        { id: 'e4', source: 'root', target: 'n4', label: 'Housed At' }
      ]
    },
    relatedIds: ['insc-006', 'coin-001', 'arch-009'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x7a80aa81b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef08',
      blockNumber: 28491102,
      timestamp: '12 Nov 2026, 09:35:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'arch-009',
    gai: 'GAI-TN-ARCH-0009',
    name: 'Ancient Terracotta Objects',
    tamilName: 'பண்டைய சுடுமண் சிற்பங்கள் மற்றும் பொருட்கள்',
    category: 'Archaeological Discoveries',
    subCategory: 'Terracotta Figurines & Ear Ornaments',
    recordType: 'archaeological',
    description:
      'Hand-modelled terracotta figurines, ear ornaments (kammal), gamesmen, spindle whorls, and animal figures recovered from Early Historic levels at Keezhadi, Kaveripoompattinam (Poompuhar), and Uraiyur.',
    material: 'Baked Terracotta Clay',
    origin: 'Keezhadi, Poompuhar & Uraiyur, Tamil Nadu',
    district: 'Sivaganga / Mayiladuthurai / Tiruchirappalli',
    period: 'Early Historic Period',
    estimatedDateStart: -400,
    estimatedDateEnd: 300,
    currentLocation: 'Keezhadi Museum & TNSDA Site Museums',
    institution: 'Tamil Nadu Department of Archaeology',
    image: '',
    sourceName: 'Tamil Nadu Department of Archaeology',
    sourceURL: 'https://www.tnarch.gov.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      excavationSite: 'Keezhadi / Poompuhar / Uraiyur',
      district: 'Sivaganga / Mayiladuthurai / Tiruchirappalli',
      excavationYear: '1964–2023',
      archaeologicalPeriod: 'Early Historic',
      estimatedDate: 'c. 400 BCE – 300 CE',
      excavationReport: 'ASI & TNSDA Excavations at Kaveripattinam, Uraiyur & Keezhadi',
      currentCollection: 'TNSDA Site Museums'
    },
    provenance: [
      { year: 'c. 400 BCE–300 CE', title: 'Early Historic Craft Production', custodian: 'Urban Terracotta Artisans', location: 'Vaigai & Kaveri Basins', event: 'Crafted ornaments, toys, and votive terracotta figurines.', verified: true, hash: '0x9c01...bb91' },
      { year: '2018–2023', title: 'Museum Archiving', custodian: 'TNSDA', location: 'Tamil Nadu', event: 'Conserved and catalogued for public exhibition.', verified: true, hash: '0x9c02...bb92' }
    ],
    timeline: [
      { date: 'c. 400 BCE–300 CE', milestoneType: 'Creation / Use', title: 'Early Historic Terracotta Craft', category: 'Origin', details: 'Domestic ornaments and votive figurines.' },
      { date: '2019–2023', milestoneType: 'Cataloguing', title: 'State Archaeology Inventory', category: 'Verification', details: 'Documented in official excavation volumes.' }
    ],
    journey: [
      { title: 'Uraiyur & Keezhadi Contexts', year: 'c. 400 BCE–300 CE', lat: 10.8286, lng: 78.6746, location: 'Uraiyur, Tiruchirappalli, TN', custodian: 'Archaeological Context', description: 'Early Chola capital archaeological mound.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Ancient Terracotta Objects', type: 'artifact', color: '#EA9940' },
        { id: 'n1', label: 'Terracotta Clay', type: 'material', color: '#ECE7DC' },
        { id: 'n2', label: 'TN Dept of Archaeology', type: 'institution', color: '#307082' },
        { id: 'n3', label: 'Early Historic Period', type: 'period', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Material' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Curated By' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Period' }
      ]
    },
    relatedIds: ['arch-008', 'sculp-008'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x7a90bb91b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef09',
      blockNumber: 28491114,
      timestamp: '12 Nov 2026, 09:38:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'arch-010',
    gai: 'GAI-TN-ARCH-0010',
    name: 'Ancient Stone Tools (Pallavaram & Attirampakkam)',
    tamilName: 'பழங்கற்காலக் கற்கருவிகள்',
    category: 'Archaeological Discoveries',
    subCategory: 'Prehistoric Lithics',
    recordType: 'archaeological',
    description:
      'Lower Palaeolithic Acheulean handaxes, cleavers, and Neolithic polished celts recovered from lateritic gravels and river terraces of Kortallayar (Attirampakkam) and Pallavaram near Chennai, foundational to Indian prehistory.',
    material: 'Quartzite & Basalt Stone',
    origin: 'Attirampakkam (Tiruvallur) & Pallavaram (Chengalpattu), Tamil Nadu',
    district: 'Tiruvallur / Chengalpattu',
    period: 'Prehistoric (Palaeolithic to Neolithic)',
    estimatedDateStart: -1500000,
    estimatedDateEnd: -1500,
    currentLocation: 'Government Museum Chennai & Sharma Centre for Heritage Education',
    institution: 'Government Museum Chennai / ASI',
    image: '',
    sourceName: 'Government Museum Chennai & ASI Prehistory Archives',
    sourceURL: 'https://govtmuseumchennai.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Scholarly Reference',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      excavationSite: 'Attirampakkam & Pallavaram',
      district: 'Tiruvallur / Chengalpattu',
      excavationYear: '1863 (Robert Bruce Foote); 1999–2018 (Shanti Pappu et al.)',
      archaeologicalPeriod: 'Lower & Middle Palaeolithic / Neolithic',
      estimatedDate: 'c. 1.5 Million Years BP (Attirampakkam Acheulean) – c. 1500 BCE (Neolithic celts)',
      excavationReport: 'Robert Bruce Foote (1866); Pappu et al., Science (2011) & Nature (2018)',
      currentCollection: 'Government Museum Chennai (Prehistory Gallery)'
    },
    provenance: [
      { year: 'Prehistoric Era', title: 'Hominin Lithic Tool Making', custodian: 'Prehistoric Populations', location: 'Kortallayar Basin', event: 'Quartzite Acheulean handaxes and cleavers flaked along ancient river terraces.', verified: true, hash: '0x0a01...1101' },
      { year: '1863', title: 'Discovery at Pallavaram & Attirampakkam', custodian: 'Robert Bruce Foote (Geological Survey of India)', location: 'Chennai Region', event: 'First documented Palaeolithic handaxe discovery in South Asia.', verified: true, hash: '0x0a02...1102' },
      { year: '1999–2018', title: 'Modern Cosmogenic & OSL Dating', custodian: 'Sharma Centre for Heritage Education', location: 'Attirampakkam', event: 'Stratigraphic excavations establishing deep Palaeolithic chronology.', verified: true, hash: '0x0a03...1103' }
    ],
    timeline: [
      { date: 'c. 1.5M – 100k BCE', milestoneType: 'Creation / Use', title: 'Palaeolithic Tool Horizons', category: 'Origin', details: 'Acheulean and Middle Palaeolithic stone industries.' },
      { date: '1863', milestoneType: 'Discovery', title: 'Robert Bruce Foote Discovery', category: 'Location', details: 'Pallavaram handaxe found in laterite pit.' },
      { date: '2011–2018', milestoneType: 'Scientific Dating', title: 'Peer-Reviewed Chronology Published', category: 'Verification', details: 'Burial dating published in Science and Nature.' }
    ],
    journey: [
      { title: 'Attirampakkam Prehistoric Terrace', year: 'Prehistoric', lat: 13.2347, lng: 79.8878, location: 'Attirampakkam, Tiruvallur, TN', custodian: 'Prehistoric Site', description: 'Kortallayar river terrace.' },
      { title: 'Government Museum Chennai', year: '1863–Present', lat: 13.0732, lng: 80.2609, location: 'Chennai, Tamil Nadu', custodian: 'Government Museum Chennai', description: 'Bruce Foote collection exhibited.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Ancient Stone Tools', type: 'artifact', color: '#EA9940' },
        { id: 'n1', label: 'Attirampakkam & Pallavaram', type: 'site', color: '#307082' },
        { id: 'n2', label: 'Robert Bruce Foote (1863)', type: 'person', color: '#12212E' },
        { id: 'n3', label: 'Quartzite Lithics', type: 'material', color: '#ECE7DC' },
        { id: 'n4', label: 'Govt Museum Chennai', type: 'institution', color: '#307082' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Recovered At' },
        { id: 'e2', source: 'n2', target: 'root', label: 'First Identified' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Material' },
        { id: 'e4', source: 'root', target: 'n4', label: 'Preserved At' }
      ]
    },
    relatedIds: ['arch-001', 'arch-005'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x7a001101b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef10',
      blockNumber: 28491129,
      timestamp: '12 Nov 2026, 09:41:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  }
];

