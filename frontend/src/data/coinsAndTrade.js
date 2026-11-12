export const COINS_AND_TRADE = [
  {
    id: 'coin-001',
    gai: 'GAI-TN-COIN-0001',
    name: 'Punch-Marked Silver Coins (Karshapana)',
    tamilName: 'முத்திரை பொறித்த வெள்ளி நாணயங்கள்',
    category: 'Ancient Coins and Trade Objects',
    subCategory: 'Early Monetary Currency',
    recordType: 'coin',
    description:
      'Silver punch-marked coins (Karshapana) stamped with sun, six-armed symbol, hill, tree, and animal punches recovered in hoards across Tamil Nadu (Bodinaickanur, Mambalam, Keezhadi, Kodumanal). Often attributed to Mauryan/Pan-Indian trade circulation or local Pandya/regional imitations.',
    material: 'Silver Alloy',
    origin: 'Bodinaickanur (Theni), Mambalam (Chennai) & Keezhadi, Tamil Nadu',
    district: 'Theni / Chennai / Sivaganga',
    period: 'Early Historic (c. 4th Century BCE – 1st Century CE)',
    estimatedDateStart: -400,
    estimatedDateEnd: 100,
    currentLocation: 'Government Museum Chennai & Keezhadi Museum',
    institution: 'Tamil Nadu Government Museum / TNSDA',
    image: '',
    sourceName: 'T.G. Aravamuthan & Government Museum Chennai Numismatics',
    sourceURL: 'https://govtmuseumchennai.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Institutionally Catalogued',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      metal: 'Silver (approx. 75–90% purity)',
      weight: 'c. 2.9 – 3.4 g (Standard 32-ratti Karshapana range)',
      diameter: '12 – 18 mm (rectangular/irregular flan)',
      symbol: 'Sun, Six-armed symbol (Shadarachakra), Three-arched hill, Tree-in-railing',
      inscription: 'Uninscribed (punch-marked symbols only)',
      attribution: 'Pan-Indian Imperial/Trade circulation and local Pandya-region punch-marked issues; exact issuing authority remains debated among numismatists.',
      discoveryLocation: 'Bodinaickanur Hoard, Mambalam Hoard, Keezhadi'
    },
    provenance: [
      { year: 'c. 4th c. BCE–1st c. CE', title: 'Circulation in Tamilakam Trade', custodian: 'Regional & Long-Distance Merchants', location: 'Tamil Nadu', event: 'Circulated along overland and coastal exchange corridors.', verified: true, hash: '0x1c01...aa01' },
      { year: '1930s–2019', title: 'Hoard & Trench Recoveries', custodian: 'Government Museum Chennai & TNSDA', location: 'Chennai / Theni / Keezhadi', event: 'Catalogued in state treasure-trove and excavation registers.', verified: true, hash: '0x1c02...aa02' }
    ],
    timeline: [
      { date: 'c. 4th c. BCE–1st c. CE', milestoneType: 'Creation / Use', title: 'Silver Punch-Marked Circulation', category: 'Origin', details: 'Earliest metallic currency attested in Tamil Nadu.' },
      { date: '2018', milestoneType: 'Excavation', title: 'Keezhadi Silver Punch-Marked Coin', category: 'Verification', details: 'Recovered in stratified Sangam habitation layer.' }
    ],
    journey: [
      { title: 'Bodinaickanur & Keezhadi Findspots', year: 'c. 300 BCE–100 CE', lat: 10.0106, lng: 77.3497, location: 'Theni / Sivaganga, TN', custodian: 'Archaeological Hoard Context', description: 'Major silver punch-marked coin hoard region.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Punch-Marked Silver Coins', type: 'coin', color: '#EA9940' },
        { id: 'n1', label: 'Silver Alloy', type: 'material', color: '#ECE7DC' },
        { id: 'n2', label: 'Sun & Shadarachakra', type: 'symbol', color: '#6CA3A2' },
        { id: 'n3', label: 'Govt Museum Chennai', type: 'institution', color: '#307082' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Metal' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Punch Symbols' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Catalogued At' }
      ]
    },
    relatedIds: ['coin-004', 'arch-008'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x9c10aa01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef21',
      blockNumber: 28491401,
      timestamp: '12 Nov 2026, 10:14:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'coin-002',
    gai: 'GAI-TN-COIN-0002',
    name: 'Ancient Tamil Copper Coins',
    tamilName: 'பண்டைய தமிழ் செப்பு நாணயங்கள்',
    category: 'Ancient Coins and Trade Objects',
    subCategory: 'Copper Coinage',
    recordType: 'coin',
    description:
      'Square and circular die-struck and cast copper coins recovered from riverbeds (Amaravathi, Vaigai, Kaveri) featuring elephants, horses, sacred trees, and stylized motifs. Used for everyday local commerce.',
    material: 'Copper / Bronze Alloy',
    origin: 'Karur, Madurai & Kaveripattinam, Tamil Nadu',
    district: 'Karur / Madurai / Mayiladuthurai',
    period: 'Early Historic (c. 2nd Century BCE – 3rd Century CE)',
    estimatedDateStart: -200,
    estimatedDateEnd: 300,
    currentLocation: 'Government Museum Chennai & Regional Collections',
    institution: 'Tamil Nadu Government Museum',
    image: '',
    sourceName: 'Government Museum Chennai & R. Krishnamurthy',
    sourceURL: 'https://govtmuseumchennai.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Scholarly Reference',
    confidenceLevel: 'Medium',
    verificationStatus: 'Verified',
    typeMetadata: {
      metal: 'Copper',
      weight: 'Documented specimens vary (typically 1.5 – 4.8 g)',
      diameter: '14 – 20 mm (square/round)',
      symbol: 'Elephant, Sacred Tree in railing, Bow/Arrow, Stylized Fish, Bull',
      inscription: 'Mostly uninscribed; some bear short Tamil-Brahmi letters',
      attribution: 'Scholarly attribution links specific motifs to Sangam-era regional polities (Chera, Chola, Pandya, Malayaman), though uninscribed surface finds carry attribution uncertainty.',
      discoveryLocation: 'Amaravathi Riverbed (Karur), Vaigai Basin, Kaveripoompattinam'
    },
    provenance: [
      { year: 'c. 200 BCE–300 CE', title: 'Local Market Circulation', custodian: 'Early Historic Towns', location: 'Tamilakam', event: 'Low-denomination copper currency facilitating urban retail trade.', verified: true, hash: '0x2c01...bb01' }
    ],
    timeline: [
      { date: 'c. 200 BCE–300 CE', milestoneType: 'Creation / Use', title: 'Regional Copper Issues', category: 'Origin', details: 'Die-struck copper pieces recovered in riverbed and mound contexts.' }
    ],
    journey: [
      { title: 'Karur & Vaigai Riverbeds', year: 'c. 200 BCE–300 CE', lat: 10.9601, lng: 78.0766, location: 'Karur, Tamil Nadu', custodian: 'Archaeological Context', description: 'Primary copper coin recovery zone.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Ancient Tamil Copper Coins', type: 'coin', color: '#EA9940' },
        { id: 'n1', label: 'Copper Alloy', type: 'material', color: '#ECE7DC' },
        { id: 'n2', label: 'Scholarly Attribution Note', type: 'record', color: '#12212E' },
        { id: 'n3', label: 'Karur & Madurai', type: 'location', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Metal' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Attribution Status' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Discovery Zone' }
      ]
    },
    relatedIds: ['coin-005', 'coin-006', 'coin-007'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x9c20bb01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef22',
      blockNumber: 28491415,
      timestamp: '12 Nov 2026, 10:16:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'coin-003',
    gai: 'GAI-TN-COIN-0003',
    name: 'Ancient Lead Coins (Korkai & Alagankulam)',
    tamilName: 'பண்டைய ஈய நாணயங்கள்',
    category: 'Ancient Coins and Trade Objects',
    subCategory: 'Lead Coinage',
    recordType: 'coin',
    description:
      'Circular and irregular cast/struck lead coins recovered from Early Historic coastal and inland Tamil sites, reflecting Satavahana-era trade links and local small-change currency.',
    material: 'Lead / Lead-Tin Alloy',
    origin: 'Alagankulam (Ramanathapuram) & Korkai (Thoothukudi), Tamil Nadu',
    district: 'Ramanathapuram / Thoothukudi',
    period: 'Early Historic (c. 1st Century BCE – 3rd Century CE)',
    estimatedDateStart: -100,
    estimatedDateEnd: 300,
    currentLocation: 'Tamil Nadu State Department of Archaeology Collections',
    institution: 'Tamil Nadu Department of Archaeology',
    image: '',
    sourceName: 'TNSDA Alagankulam Excavation Reports',
    sourceURL: 'https://www.tnarch.gov.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'Medium',
    verificationStatus: 'Verified',
    typeMetadata: {
      metal: 'Lead',
      weight: 'Documented specimens ~2.0 – 5.5 g (varies by issue)',
      diameter: '13 – 19 mm',
      symbol: 'Elephant, Bull, Ship / Geometric motifs (often worn due to soft metal)',
      inscription: 'Uninscribed or weathered legend fragments',
      attribution: 'Associated with Early Historic coastal trade networks; direct dynastic attribution remains tentative when legends are absent.',
      discoveryLocation: 'Alagankulam, Korkai, Andipatti'
    },
    provenance: [
      { year: 'c. 100 BCE–300 CE', title: 'Coastal Port Currency', custodian: 'Port Settlements', location: 'Alagankulam & Korkai', event: 'Used in coastal port transactions.', verified: true, hash: '0x3c01...cc01' }
    ],
    timeline: [
      { date: 'c. 100 BCE–300 CE', milestoneType: 'Creation / Use', title: 'Coastal Lead Coinage', category: 'Origin', details: 'Excavated from stratified port layers.' }
    ],
    journey: [
      { title: 'Alagankulam Port Mound', year: 'c. 100 BCE–300 CE', lat: 9.3547, lng: 78.9675, location: 'Alagankulam, Ramanathapuram, TN', custodian: 'TNSDA', description: 'Vaigai estuary port.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Ancient Lead Coins', type: 'coin', color: '#EA9940' },
        { id: 'n1', label: 'Lead Alloy', type: 'material', color: '#ECE7DC' },
        { id: 'n2', label: 'Alagankulam & Korkai', type: 'site', color: '#307082' },
        { id: 'n3', label: 'TNSDA Excavations', type: 'institution', color: '#12212E' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Metal' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Excavated At' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Documented By' }
      ]
    },
    relatedIds: ['coin-008', 'coin-012'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x9c30cc01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef23',
      blockNumber: 28491429,
      timestamp: '12 Nov 2026, 10:18:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'coin-004',
    gai: 'GAI-TN-COIN-0004',
    name: 'Early Historic & Medieval Silver Coins',
    tamilName: 'பண்டைய மற்றும் இடைக்கால வெள்ளி நாணயங்கள்',
    category: 'Ancient Coins and Trade Objects',
    subCategory: 'Silver Coinage',
    recordType: 'coin',
    description:
      'Silver portrait issues (Makkotai/Kollippurai) and medieval silver Kahavanu/fanams documented in Tamil Nadu hoards, reflecting high-value monetary reserves and inter-regional trade.',
    material: 'Silver',
    origin: 'Karur, Madurai & Thanjavur Regions, Tamil Nadu',
    district: 'Karur / Madurai / Thanjavur',
    period: 'Early Historic to Medieval (c. 1st–12th Century CE)',
    estimatedDateStart: 50,
    estimatedDateEnd: 1200,
    currentLocation: 'Government Museum Chennai',
    institution: 'Tamil Nadu Government Museum',
    image: '',
    sourceName: 'Government Museum Chennai Numismatic Catalogue',
    sourceURL: 'https://govtmuseumchennai.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Institutionally Catalogued',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      metal: 'Silver',
      weight: '2.0 – 4.2 g depending on series',
      diameter: '14 – 19 mm',
      symbol: 'Portrait bust (Early Chera silver) or standing king / lamp motifs (Medieval)',
      inscription: 'Tamil-Brahmi (Early series) or Grantha/Nagari (Medieval Chola issues)',
      attribution: 'Early portrait types carry Tamil-Brahmi inscriptions (e.g. Makkotai); uninscribed silver pieces are attributed cautiously by fabric and hoard context.',
      discoveryLocation: 'Karur & Central Tamil Nadu Hoards'
    },
    provenance: [
      { year: 'c. 1st–12th c. CE', title: 'High-Value Trade Coinage', custodian: 'Regional Treasuries & Merchant Guilds', location: 'Tamil Nadu', event: 'Used in wholesale commerce and temple endowments.', verified: true, hash: '0x4c01...dd01' }
    ],
    timeline: [
      { date: 'c. 1st–3rd c. CE', milestoneType: 'Creation / Use', title: 'Early Silver Portrait Coins', category: 'Origin', details: 'Struck in Karur region.' },
      { date: 'c. 10th–12th c. CE', milestoneType: 'Evolution', title: 'Medieval Silver & Base-Gold Issues', category: 'Exhibition', details: 'Imperial Chola monetary expansion.' }
    ],
    journey: [
      { title: 'Government Museum Chennai', year: 'Catalogued', lat: 13.0732, lng: 80.2609, location: 'Chennai, Tamil Nadu', custodian: 'Govt Museum Chennai', description: 'Numismatic vault.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Silver Coins of Tamilakam', type: 'coin', color: '#EA9940' },
        { id: 'n1', label: 'Silver Metal', type: 'material', color: '#ECE7DC' },
        { id: 'n2', label: 'Govt Museum Chennai', type: 'institution', color: '#307082' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Metal' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Housed At' }
      ]
    },
    relatedIds: ['coin-001', 'insc-007'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x9c40dd01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef24',
      blockNumber: 28491441,
      timestamp: '12 Nov 2026, 10:20:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'coin-005',
    gai: 'GAI-TN-COIN-0005',
    name: 'Chera-Associated Coin Types',
    tamilName: 'சேரர் தொடர்புடைய நாணய வகைகள்',
    category: 'Ancient Coins and Trade Objects',
    subCategory: 'Regional Coin Typology',
    recordType: 'coin',
    description:
      'Copper and silver coins from Karur (ancient Karuvur/Vanchi) displaying bow-and-arrow motifs on the reverse and elephant/portrait motifs on the obverse. Only inscribed coins (Makkotai, Kollippurai) bear direct Chera attribution; uninscribed bow-and-arrow coins are cautiously classified as Chera-associated.',
    material: 'Copper & Silver',
    origin: 'Karur (Amaravathi Riverbed), Tamil Nadu',
    district: 'Karur',
    period: 'Early Historic (c. 1st Century BCE – 3rd Century CE)',
    estimatedDateStart: -100,
    estimatedDateEnd: 300,
    currentLocation: 'Government Museum Chennai & Karur District Museum',
    institution: 'Tamil Nadu Government Museum / Numismatic Collections',
    image: '',
    sourceName: 'R. Krishnamurthy, Sangam Age Tamil Coins; TNSDA',
    sourceURL: 'https://www.tnarch.gov.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Scholarly Reference',
    confidenceLevel: 'Medium',
    verificationStatus: 'Verified',
    typeMetadata: {
      metal: 'Copper / Silver',
      weight: 'Approx. 2.1 – 3.8 g (varies across square/round issues)',
      diameter: '14 – 18 mm',
      symbol: 'Bow and Arrow (reverse), Tusker Elephant / Ancestral symbols (obverse)',
      inscription: 'Uninscribed on common copper types; Makkotai / Kollippurai on rare silver types',
      attribution: 'Scholarly Attribution Note: Bow-and-arrow is traditionally associated with the Chera emblem, but uninscribed specimens cannot be assigned to a specific king without stratigraphic/epigraphic context.',
      discoveryLocation: 'Amaravathi Riverbed, Karur'
    },
    provenance: [
      { year: 'c. 100 BCE–300 CE', title: 'Karuvur Minting Tradition', custodian: 'Kongu / Chera Sphere', location: 'Karur', event: 'Struck in the Chera capital region of Karuvur.', verified: true, hash: '0x5c01...ee01' }
    ],
    timeline: [
      { date: 'c. 100 BCE–300 CE', milestoneType: 'Creation / Use', title: 'Bow-and-Arrow Coin Series', category: 'Origin', details: 'Distinguished between inscribed royal silver and uninscribed copper.' }
    ],
    journey: [
      { title: 'Karur (Karuvur)', year: 'c. 100 BCE–300 CE', lat: 10.9601, lng: 78.0766, location: 'Karur, Tamil Nadu', custodian: 'Riverbed & Archaeological Context', description: 'Ancient Chera inland capital.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Chera-Associated Coins', type: 'coin', color: '#EA9940' },
        { id: 'n1', label: 'Bow & Arrow Motif', type: 'symbol', color: '#6CA3A2' },
        { id: 'n2', label: 'Karur (Karuvur)', type: 'location', color: '#307082' },
        { id: 'n3', label: 'Attribution Uncertainty Note', type: 'record', color: '#12212E' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Bears Motif' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Findspot' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Scholarly Caution' }
      ]
    },
    relatedIds: ['insc-005', 'insc-007', 'coin-002'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x9c50ee01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef25',
      blockNumber: 28491455,
      timestamp: '12 Nov 2026, 10:22:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'coin-006',
    gai: 'GAI-TN-COIN-0006',
    name: 'Chola-Associated Coin Types (Early Tiger & Imperial Kahavanu)',
    tamilName: 'சோழர் தொடர்புடைய நாணய வகைகள்',
    category: 'Ancient Coins and Trade Objects',
    subCategory: 'Early & Imperial Chola Coinage',
    recordType: 'coin',
    description:
      'Spanning uninscribed Early Historic copper coins with standing tiger/elephant motifs from Kaveripoompattinam & Uraiyur (tentatively associated with early Chola tradition) and well-documented Imperial Chola gold/silver/copper coins bearing Rajaraja I and Rajendra I legends.',
    material: 'Copper, Silver & Gold',
    origin: 'Poompuhar, Uraiyur & Gangaikonda Cholapuram, Tamil Nadu',
    district: 'Mayiladuthurai / Tiruchirappalli / Ariyalur',
    period: 'Early Historic (c. 1st–3rd c. CE) & Imperial Chola (10th–13th c. CE)',
    estimatedDateStart: 1,
    estimatedDateEnd: 1279,
    currentLocation: 'Government Museum Chennai & Thanjavur',
    institution: 'Tamil Nadu Government Museum',
    image: '',
    sourceName: 'Government Museum Chennai & B.D. Chattopadhyaya / R. Krishnamurthy',
    sourceURL: 'https://govtmuseumchennai.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Institutionally Catalogued',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      metal: 'Copper (Early); Gold/Silver/Copper (Imperial Chola)',
      weight: 'Early copper ~2.5–4.0 g; Imperial gold Kahavanu ~4.2–4.4 g',
      diameter: '15 – 20 mm',
      symbol: 'Standing Tiger / Elephant (Early); Seated/Standing King & Tiger-Fish-Bow emblem (Imperial)',
      inscription: 'Uninscribed (Early Tiger types); Nagari "Sri Rajaraja" / "Uttama Chola" (Imperial)',
      attribution: 'Early uninscribed tiger-motif copper coins are cautiously associated with the Kaveri delta polity; Imperial issues (985–1279 CE) carry explicit royal legends.',
      discoveryLocation: 'Kaveripoompattinam, Uraiyur, Thanjavur'
    },
    provenance: [
      { year: 'c. 1st–3rd c. CE', title: 'Early Kaveri Basin Issues', custodian: 'Early Historic Kaveri Towns', location: 'Poompuhar / Uraiyur', event: 'Square copper pieces with tiger emblem.', verified: true, hash: '0x6c01...ff01' },
      { year: '985–1279 CE', title: 'Imperial Chola Monetary Standard', custodian: 'Imperial Chola Treasury', location: 'Thanjavur / Gangaikonda Cholapuram', event: 'Standardized coinage circulated across South India and Sri Lanka.', verified: true, hash: '0x6c02...ff02' }
    ],
    timeline: [
      { date: 'c. 1st–3rd c. CE', milestoneType: 'Creation / Use', title: 'Early Tiger-Motif Copper Coins', category: 'Origin', details: 'Uninscribed; scholarly attribution remains cautious.' },
      { date: '985–1044 CE', milestoneType: 'Imperial Issue', title: 'Rajaraja I & Rajendra I Gold/Copper', category: 'Verification', details: 'Explicitly inscribed imperial legends.' }
    ],
    journey: [
      { title: 'Kaveri Delta & Thanjavur', year: '1st–13th c. CE', lat: 10.7870, lng: 79.1378, location: 'Thanjavur, Tamil Nadu', custodian: 'Imperial Chola Heartland', description: 'Core circulation area.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Chola-Associated Coins', type: 'coin', color: '#EA9940' },
        { id: 'n1', label: 'Tiger Emblem', type: 'symbol', color: '#6CA3A2' },
        { id: 'n2', label: 'Kaveri Basin / Thanjavur', type: 'location', color: '#307082' },
        { id: 'n3', label: 'Govt Museum Chennai', type: 'institution', color: '#12212E' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Iconography' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Region' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Preserved At' }
      ]
    },
    relatedIds: ['sculp-001', 'insc-008'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x9c60ff01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef26',
      blockNumber: 28491470,
      timestamp: '12 Nov 2026, 10:25:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'coin-007',
    gai: 'GAI-TN-COIN-0007',
    name: 'Pandya-Associated Coin Types',
    tamilName: 'பாண்டியர் தொடர்புடைய நாணய வகைகள்',
    category: 'Ancient Coins and Trade Objects',
    subCategory: 'Pandya Numismatics',
    recordType: 'coin',
    description:
      'Square copper coins featuring elephant, sacred tree, and stylized fish motifs from Madurai, Korkai, and Alagankulam, alongside rare inscribed "Peruvaluti" issues and later medieval Pandya double-fish copper coins.',
    material: 'Copper & Silver',
    origin: 'Madurai, Korkai & Alagankulam, Tamil Nadu',
    district: 'Madurai / Thoothukudi / Ramanathapuram',
    period: 'Early Historic to Later Pandya (c. 2nd c. BCE – 14th c. CE)',
    estimatedDateStart: -200,
    estimatedDateEnd: 1345,
    currentLocation: 'Government Museum Chennai & Madurai Tirumalai Nayak Museum',
    institution: 'Tamil Nadu Government Museum / TNSDA',
    image: '',
    sourceName: 'Government Museum Chennai & TNSDA Publications',
    sourceURL: 'https://www.tnarch.gov.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Scholarly Reference',
    confidenceLevel: 'Medium',
    verificationStatus: 'Verified',
    typeMetadata: {
      metal: 'Copper (primary) / Silver (rare)',
      weight: '1.8 – 4.5 g',
      diameter: '14 – 19 mm',
      symbol: 'Stylized Fish (Meen), Elephant, Horse, Boar (later issues)',
      inscription: 'Uninscribed on many early square coppers; "Peruvaluti" on inscribed issues',
      attribution: 'Fish symbolism is historically linked to Pandya sovereignty, but uninscribed early copper coins are labeled Pandya-associated pending stratified confirmation.',
      discoveryLocation: 'Vaigai & Tamiraparani Basins (Madurai, Korkai, Alagankulam)'
    },
    provenance: [
      { year: 'c. 200 BCE–1345 CE', title: 'Southern Tamilakam Currency', custodian: 'Madurai & Korkai Markets', location: 'Madurai / Korkai', event: 'Continuous regional numismatic tradition using fish emblems.', verified: true, hash: '0x7c01...ab01' }
    ],
    timeline: [
      { date: 'c. 200 BCE–300 CE', milestoneType: 'Creation / Use', title: 'Early Square Copper & Peruvaluti Issues', category: 'Origin', details: 'Recovered at Korkai and Madurai.' },
      { date: '12th–14th c. CE', milestoneType: 'Evolution', title: 'Imperial Pandya Double-Fish Coinage', category: 'Exhibition', details: 'Bearing Tamil legends like Sundara Pandya.' }
    ],
    journey: [
      { title: 'Korkai & Madurai', year: 'c. 200 BCE–14th c. CE', lat: 8.6411, lng: 78.0631, location: 'Korkai, Thoothukudi, TN', custodian: 'Ancient Pandya Port', description: 'Early pearl-fishery port of Korkai.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Pandya-Associated Coins', type: 'coin', color: '#EA9940' },
        { id: 'n1', label: 'Fish Emblem', type: 'symbol', color: '#6CA3A2' },
        { id: 'n2', label: 'Korkai & Madurai', type: 'location', color: '#307082' },
        { id: 'n3', label: 'Scholarly Attribution Note', type: 'record', color: '#12212E' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Emblem' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Discovery Zone' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Evidence Caveat' }
      ]
    },
    relatedIds: ['insc-007', 'insc-009', 'coin-002'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x9c70ab01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef27',
      blockNumber: 28491485,
      timestamp: '12 Nov 2026, 10:28:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'coin-008',
    gai: 'GAI-TN-COIN-0008',
    name: 'Roman Coins Found in Tamil Nadu',
    tamilName: 'தமிழ்நாட்டில் கண்டெடுக்கப்பட்ட ரோமானிய நாணயங்கள்',
    category: 'Ancient Coins and Trade Objects',
    subCategory: 'Indo-Roman Bullion & Trade',
    recordType: 'coin',
    description:
      'Gold Aurei and silver Denarii of Emperors Augustus, Tiberius, Nero, and later Roman copper issues discovered in rich hoards across Coimbatore, Karur, Vellalur, Pollachi, and Pudukkottai, attesting to high-volume pepper and beryl trade.',
    material: 'Gold (Aureus), Silver (Denarius) & Late Roman Copper',
    origin: 'Coimbatore (Vellalur), Karur & Alagankulam, Tamil Nadu',
    district: 'Coimbatore / Karur / Ramanathapuram',
    period: 'Early Historic (1st Century BCE – 5th Century CE)',
    estimatedDateStart: -27,
    estimatedDateEnd: 450,
    currentLocation: 'Government Museum Chennai & Coimbatore Museum',
    institution: 'Tamil Nadu Government Museum / ASI',
    image: '',
    sourceName: 'Paula Turner, Roman Coins from India; Govt Museum Chennai',
    sourceURL: 'https://govtmuseumchennai.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      metal: 'Gold (Aureus ~7.8 g), Silver (Denarius ~3.8 g), Late Bronze',
      weight: 'c. 3.5 – 7.9 g',
      diameter: '18 – 21 mm',
      symbol: 'Imperial portrait of Augustus / Tiberius; Pax / Livia seated reverse',
      inscription: 'Latin legends (e.g., CAESAR AVGVSTVS DIVI F PATER PATRIAE)',
      attribution: 'Minted in Rome/Lugdunum; imported into Tamilakam via Red Sea–Indian Ocean monsoon trade (some bear slash marks for bullion verification).',
      discoveryLocation: 'Vellalur (Coimbatore), Karur, Pudukkottai, Alagankulam'
    },
    provenance: [
      { year: '1st–5th c. CE', title: 'Indian Ocean Spice & Gem Trade', custodian: 'Mediterranean & Tamil Merchants', location: 'Muziris–Karur–Madurai Corridor', event: 'Brought to South India in exchange for black pepper, beryl, pearls, and textiles.', verified: true, hash: '0x8c01...bc01' },
      { year: '1842–1939', title: 'Treasure Trove Hoard Recoveries', custodian: 'Madras Presidency / Govt Museum Chennai', location: 'Vellalur / Pollachi / Karur', event: 'Catalogued in Government Museum treasure trove records.', verified: true, hash: '0x8c02...bc02' }
    ],
    timeline: [
      { date: '27 BCE–68 CE', milestoneType: 'Creation / Use', title: 'Julio-Claudian Aurei & Denarii Minted', category: 'Origin', details: 'Augustus and Tiberius issues dominate Tamil Nadu hoards.' },
      { date: '1842 / 1891 / 1931', milestoneType: 'Discovery', title: 'Vellalur & Karur Hoards', category: 'Location', details: 'Hundreds of Roman coins documented under Treasure Trove Act.' }
    ],
    journey: [
      { title: 'Vellalur (Coimbatore) Hoard Site', year: '1st–2nd c. CE', lat: 10.9765, lng: 77.0156, location: 'Vellalur, Coimbatore, TN', custodian: 'Treasure Trove Findspot', description: 'Located along Palghat Gap trade route.' },
      { title: 'Government Museum Chennai', year: '19th–20th c. CE', lat: 13.0732, lng: 80.2609, location: 'Chennai, Tamil Nadu', custodian: 'Government Museum Chennai', description: 'Part of world-renowned Roman coin collection.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Roman Coins in Tamil Nadu', type: 'coin', color: '#EA9940' },
        { id: 'n1', label: 'Augustus & Tiberius', type: 'person', color: '#12212E' },
        { id: 'n2', label: 'Vellalur & Karur Hoards', type: 'location', color: '#307082' },
        { id: 'n3', label: 'Indo-Roman Trade', type: 'event', color: '#6CA3A2' },
        { id: 'n4', label: 'Govt Museum Chennai', type: 'institution', color: '#307082' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Issued Under' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Discovered At' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Evidence Of' },
        { id: 'e4', source: 'root', target: 'n4', label: 'Preserved At' }
      ]
    },
    relatedIds: ['arch-006', 'arch-007', 'coin-009'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x9c80bc01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef28',
      blockNumber: 28491501,
      timestamp: '12 Nov 2026, 10:30:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'coin-009',
    gai: 'GAI-TN-COIN-0009',
    name: 'Ancient Trade Beads (Indo-Pacific Glass & Etched Beads)',
    tamilName: 'பண்டைய வணிகக் கண்ணாடி மற்றும் கல் மணிகள்',
    category: 'Ancient Coins and Trade Objects',
    subCategory: 'Bead Trade Networks',
    recordType: 'coin',
    description:
      'Drawn monochrome Indo-Pacific glass beads, gold-foil glass beads, and banded agate beads manufactured at Arikamedu and Karaikadu and exported across Southeast Asia and the Red Sea.',
    material: 'Silica Glass & Banded Agate',
    origin: 'Arikamedu (Puducherry), Keezhadi & Kodumanal, Tamil Nadu',
    district: 'Puducherry / Sivaganga / Erode',
    period: 'Early Historic (c. 3rd Century BCE – 4th Century CE)',
    estimatedDateStart: -300,
    estimatedDateEnd: 400,
    currentLocation: 'Puducherry Museum & Keezhadi Museum',
    institution: 'ASI / Puducherry Museum / TNSDA',
    image: '',
    sourceName: 'Peter Francis Jr., Asia’s Maritime Bead Trade; TNSDA',
    sourceURL: 'https://asi.nic.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      metal: 'Silica Glass & Semi-Precious Stone (Non-metallic trade object)',
      weight: 'Variable (0.2 – 3.5 g per bead)',
      diameter: '3 – 14 mm',
      symbol: 'Drawn tubular glass & alkali-etched geometric bands',
      inscription: 'None',
      attribution: 'Chemical LA-ICP-MS and workshop debitage confirm local Tamil coastal manufacture and transoceanic trade.',
      discoveryLocation: 'Arikamedu, Karaikadu, Keezhadi, Kodumanal'
    },
    provenance: [
      { year: 'c. 300 BCE–400 CE', title: 'Indo-Pacific Bead Production', custodian: 'Coastal & Inland Bead Makers', location: 'Arikamedu / Kodumanal', event: 'Manufactured from glass canes and exported as maritime trade goods.', verified: true, hash: '0x9c01...cd01' }
    ],
    timeline: [
      { date: 'c. 300 BCE–400 CE', milestoneType: 'Creation / Use', title: 'Maritime Bead Export Era', category: 'Origin', details: 'Arikamedu identified as premier Indo-Pacific bead center.' }
    ],
    journey: [
      { title: 'Arikamedu Bead Workshops', year: 'c. 3rd c. BCE–4th c. CE', lat: 11.9019, lng: 79.8206, location: 'Arikamedu, Puducherry', custodian: 'ASI Protected Site', description: 'Glass-cane drawing debris site.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Ancient Trade Beads', type: 'coin', color: '#EA9940' },
        { id: 'n1', label: 'Indo-Pacific Glass', type: 'material', color: '#ECE7DC' },
        { id: 'n2', label: 'Arikamedu & Keezhadi', type: 'site', color: '#307082' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Material' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Workshop Sites' }
      ]
    },
    relatedIds: ['arch-006', 'coin-010'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x9c90cd01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef29',
      blockNumber: 28491515,
      timestamp: '12 Nov 2026, 10:33:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'coin-010',
    gai: 'GAI-TN-COIN-0010',
    name: 'Carnelian Beads (Etched & Barrel Types)',
    tamilName: 'கார்னீலியன் கல் மணிகள் (சூதுபவள மணிகள்)',
    category: 'Ancient Coins and Trade Objects',
    subCategory: 'Lapidary Trade Objects',
    recordType: 'coin',
    description:
      'Polished red carnelian and white-etched carnelian beads recovered from Iron Age burials (Kodumanal, Adichanallur) and Early Historic settlements (Keezhadi), reflecting pan-Indian lapidary exchange.',
    material: 'Carnelian (Chalcedony Quartz)',
    origin: 'Kodumanal (Erode) & Keezhadi (Sivaganga), Tamil Nadu',
    district: 'Erode / Sivaganga',
    period: 'Iron Age to Early Historic (c. 500 BCE – 300 CE)',
    estimatedDateStart: -500,
    estimatedDateEnd: 300,
    currentLocation: 'TNSDA Museums & Government Museum Chennai',
    institution: 'Tamil Nadu Department of Archaeology',
    image: '',
    sourceName: 'TNSDA Kodumanal & Keezhadi Reports',
    sourceURL: 'https://www.tnarch.gov.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      metal: 'Carnelian Stone (Chalcedony)',
      weight: '1.0 – 6.2 g',
      diameter: '6 – 22 mm (spherical & barrel)',
      symbol: 'Alkali-etched white geometric lines on red carnelian',
      inscription: 'None',
      attribution: 'Raw carnelian nodules originated largely in western India (Gujarat) and were traded to Tamil Nadu lapidary hubs like Kodumanal.',
      discoveryLocation: 'Kodumanal, Keezhadi, Porunthal, Adichanallur'
    },
    provenance: [
      { year: 'c. 500 BCE–300 CE', title: 'Overland Trade & Lapidary Drilling', custodian: 'Kodumanal Bead Artisans', location: 'Kodumanal / Keezhadi', event: 'Drilled and polished for burial offerings and elite adornment.', verified: true, hash: '0x10c1...de01' }
    ],
    timeline: [
      { date: 'c. 500 BCE–300 CE', milestoneType: 'Creation / Use', title: 'Etched Carnelian Prestige Beads', category: 'Origin', details: 'Evidence of pan-subcontinental exchange networks.' }
    ],
    journey: [
      { title: 'Kodumanal Lapidary Site', year: 'c. 500 BCE–300 CE', lat: 11.1112, lng: 77.4547, location: 'Kodumanal, Erode, TN', custodian: 'TNSDA', description: 'Major lapidary workshop.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Carnelian Beads', type: 'coin', color: '#EA9940' },
        { id: 'n1', label: 'Carnelian Quartz', type: 'material', color: '#ECE7DC' },
        { id: 'n2', label: 'Kodumanal & Keezhadi', type: 'site', color: '#307082' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Material' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Excavated At' }
      ]
    },
    relatedIds: ['arch-007', 'coin-009'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x9ca0de01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef30',
      blockNumber: 28491529,
      timestamp: '12 Nov 2026, 10:35:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'coin-011',
    gai: 'GAI-TN-COIN-0011',
    name: 'Shell Ornaments (Chank Bangles & Sawn Conch)',
    tamilName: 'சங்கு வளையல்கள் மற்றும் அணிகலன்கள்',
    category: 'Ancient Coins and Trade Objects',
    subCategory: 'Marine Shell Industry',
    recordType: 'coin',
    description:
      'Sawn Turbinella pyrum (sacred chank) bangles, incised shell rings, and manufacturing wasters excavated at Korkai, Alagankulam, Poompuhar, and Keezhadi — echoing Sangam poetry on chank-cutters (Valai-pozhi-nar).',
    material: 'Marine Chank Shell (Turbinella pyrum)',
    origin: 'Korkai (Thoothukudi) & Alagankulam (Ramanathapuram), Tamil Nadu',
    district: 'Thoothukudi / Ramanathapuram / Sivaganga',
    period: 'Early Historic (c. 4th Century BCE – 4th Century CE)',
    estimatedDateStart: -400,
    estimatedDateEnd: 400,
    currentLocation: 'TNSDA Korkai & Keezhadi Museums',
    institution: 'Tamil Nadu Department of Archaeology',
    image: '',
    sourceName: 'TNSDA Korkai & Alagankulam Reports',
    sourceURL: 'https://www.tnarch.gov.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      metal: 'Marine Chank Shell (Calcium Carbonate)',
      weight: '8 – 32 g (finished bangle fragments)',
      diameter: '55 – 75 mm',
      symbol: 'Incised chevron & linear grooves on exterior shell',
      inscription: 'None',
      attribution: 'Gulf of Mannar pearl and chank harvesting documented in Sangam texts (Maduraikkanchi) and archaeological shell-sawing debris.',
      discoveryLocation: 'Korkai, Alagankulam, Keezhadi, Kodumanal'
    },
    provenance: [
      { year: 'c. 400 BCE–400 CE', title: 'Gulf of Mannar Shell Working', custodian: 'Coastal Chank Artisans', location: 'Korkai & Alagankulam', event: 'Chank shells harvested from Gulf of Mannar and sawn into bangles.', verified: true, hash: '0x11c1...ef01' }
    ],
    timeline: [
      { date: 'c. 400 BCE–400 CE', milestoneType: 'Creation / Use', title: 'Chank Bangle Craft & Trade', category: 'Origin', details: 'Distributed inland to Keezhadi and Kodumanal.' }
    ],
    journey: [
      { title: 'Korkai Coastal Port', year: 'c. 400 BCE–400 CE', lat: 8.6411, lng: 78.0631, location: 'Korkai, Thoothukudi, TN', custodian: 'TNSDA', description: 'Gulf of Mannar chank workshop site.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Shell Ornaments', type: 'coin', color: '#EA9940' },
        { id: 'n1', label: 'Turbinella pyrum Shell', type: 'material', color: '#ECE7DC' },
        { id: 'n2', label: 'Korkai & Gulf of Mannar', type: 'location', color: '#307082' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Material' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Harvest & Craft Site' }
      ]
    },
    relatedIds: ['arch-008', 'coin-009'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x9cb0ef01b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef31',
      blockNumber: 28491542,
      timestamp: '12 Nov 2026, 10:38:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'coin-012',
    gai: 'GAI-TN-COIN-0012',
    name: 'Ancient Pottery with Trade Marks (Graffiti & Rouletted Ware)',
    tamilName: 'வணிகக் குறியீடுகள் பொறித்த பண்டைய பானைகள்',
    category: 'Ancient Coins and Trade Objects',
    subCategory: 'Trade-Marked Ceramics',
    recordType: 'coin',
    description:
      'Megalithic and Early Historic pottery bearing non-scriptural geometric graffiti marks (possibly guild, clan, or consignment marks) alongside Mediterranean amphorae and Rouletted Ware from Arikamedu, Alagankulam, and Keezhadi.',
    material: 'Terracotta & Fine-Paste Rouletted Ware',
    origin: 'Alagankulam, Arikamedu, Keezhadi & Kodumanal',
    district: 'Ramanathapuram / Puducherry / Sivaganga',
    period: 'Iron Age to Early Historic (c. 600 BCE – 300 CE)',
    estimatedDateStart: -600,
    estimatedDateEnd: 300,
    currentLocation: 'TNSDA Museums & Puducherry Museum',
    institution: 'Tamil Nadu Department of Archaeology / ASI',
    image: '',
    sourceName: 'TNSDA Excavation Reports & K. Rajan Graffiti Corpus',
    sourceURL: 'https://www.tnarch.gov.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      metal: 'Ceramic / Terracotta (Trade container & marked tableware)',
      weight: 'Shard fragments',
      diameter: 'Rim diameters 120 – 340 mm',
      symbol: 'Trident-like, ladder, swastika, bow, and intersecting line graffiti marks',
      inscription: 'Non-linguistic trade/clan marks (distinct from Tamil-Brahmi script)',
      attribution: 'Scholars interpret post-firing graffiti as merchant, potter, or kin emblems; exact semantic decoding remains under active study.',
      discoveryLocation: 'Alagankulam, Arikamedu, Keezhadi, Kodumanal'
    },
    provenance: [
      { year: 'c. 600 BCE–300 CE', title: 'Marked Trade & Domestic Ceramics', custodian: 'Regional Potter & Merchant Networks', location: 'Tamil Nadu Ports & Towns', event: 'Engraved with distinctive trade/ownership symbols.', verified: true, hash: '0x12c1...f101' }
    ],
    timeline: [
      { date: 'c. 600 BCE–300 CE', milestoneType: 'Creation / Use', title: 'Graffiti-Marked & Rouletted Ware Horizon', category: 'Origin', details: 'Links inland craft hubs with maritime ports.' }
    ],
    journey: [
      { title: 'Alagankulam & Arikamedu', year: 'c. 200 BCE–300 CE', lat: 9.3547, lng: 78.9675, location: 'Alagankulam, Ramanathapuram, TN', custodian: 'TNSDA', description: 'High concentration of Rouletted Ware and trade pottery.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Pottery with Trade Marks', type: 'coin', color: '#EA9940' },
        { id: 'n1', label: 'Graffiti Consignment Marks', type: 'symbol', color: '#6CA3A2' },
        { id: 'n2', label: 'Alagankulam & Keezhadi', type: 'site', color: '#307082' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Bears' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Found At' }
      ]
    },
    relatedIds: ['arch-004', 'arch-006', 'insc-006'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0x9cc0f101b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef32',
      blockNumber: 28491558,
      timestamp: '12 Nov 2026, 10:40:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  }
];

