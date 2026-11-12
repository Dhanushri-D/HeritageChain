export const SCULPTURES = [
  {
    id: 'sculp-001',
    gai: 'GAI-TN-SCULP-0001',
    name: 'Chola Bronze Nataraja (Tiruvalangadu)',
    tamilName: 'சோழர் கால வெண்கல நடராஜர்',
    category: 'Sculpture, Temple Art and Traditional Objects',
    subCategory: 'Historical Chola Bronze',
    recordType: 'sculpture',
    description:
      'Iconic Chola-period lost-wax (Madhuchista Vidhana) bronze sculpture of Shiva as Nataraja performing the Ananda Tandava within an aureole of flames (Tiruvachi), balancing on Apasmara Purusha. Dated to the 11th century CE from Tiruvalangadu.',
    material: 'Copper-Rich Bronze Alloy (Lost-Wax Cast)',
    origin: 'Tiruvalangadu, Tiruvallur District, Tamil Nadu',
    district: 'Tiruvallur',
    period: 'Imperial Chola Period (c. 11th Century CE)',
    estimatedDateStart: 1000,
    estimatedDateEnd: 1075,
    currentLocation: 'Bronze Gallery, Government Museum Chennai',
    institution: 'Tamil Nadu Government Museum',
    image: '',
    sourceName: 'Government Museum Chennai Bronze Gallery & C. Sivaramamurti (South Indian Bronzes)',
    sourceURL: 'https://govtmuseumchennai.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Institutionally Catalogued',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      classification: 'Historical Archaeological / Temple Bronze',
      artisticStyle: 'Imperial Chola Lost-Wax Sculpture',
      associatedTradition: 'Shaiva Siddhanta & Temple Processional Utsavamurti',
      materialDetails: 'Solid lost-wax cast copper-tin-lead bronze alloy',
      productionPeriod: 'c. 11th Century CE',
      placeOfOrigin: 'Tiruvalangadu, Tamil Nadu',
      currentLocation: 'Government Museum Chennai',
      livingCraftDistinction: 'Historical temple-era bronze (distinct from contemporary Swamimalai workshop icons).'
    },
    provenance: [
      { year: 'c. 11th c. CE', title: 'Chola Royal Guild Casting', custodian: 'Tiruvalangadu Temple Trust', location: 'Tiruvalangadu, Tamil Nadu', event: 'Cast as sacred processional image (Utsava Vigraha) using Cire Perdue method.', verified: true, hash: '0x1d01...c901' },
      { year: '1905', title: 'Treasure-Trove Recovery & Museum Accession', custodian: 'Government Museum Chennai', location: 'Egmore, Chennai', event: 'Unearthed as buried temple hoard and accessioned into Madras Government Museum.', verified: true, hash: '0x1d02...c902' }
    ],
    timeline: [
      { date: 'c. 1020–1050 CE', milestoneType: 'Creation / Use', title: 'Chola Lost-Wax Casting', category: 'Origin', details: 'Cast during high Imperial Chola metallurgical zenith.' },
      { date: '1905', milestoneType: 'Discovery & Accession', title: 'Unearthed at Tiruvalangadu', category: 'Location', details: 'Recovered and conserved at Government Museum Chennai.' },
      { date: '2026', milestoneType: 'Digital Registration', title: 'GAI-TN-SCULP-0001 Anchored', category: 'Verification', details: 'Indexed with full metallurgical & art-historical attribution.' }
    ],
    journey: [
      { title: 'Tiruvalangadu Temple Site', year: 'c. 11th c. CE–1905', lat: 13.1286, lng: 79.7764, location: 'Tiruvalangadu, Tiruvallur, TN', custodian: 'Historic Temple Context', description: 'Original place of worship and subterranean burial safeguard.' },
      { title: 'Government Museum Chennai', year: '1905–Present', lat: 13.0732, lng: 80.2609, location: 'Egmore, Chennai, TN', custodian: 'Government Museum Chennai', description: 'Flagship piece of the National Bronze Gallery.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Chola Bronze Nataraja', type: 'sculpture', color: '#EA9940' },
        { id: 'n1', label: 'Tiruvalangadu', type: 'location', color: '#6CA3A2' },
        { id: 'n2', label: 'Chola Lost-Wax Tradition', type: 'technique', color: '#307082' },
        { id: 'n3', label: 'Govt Museum Chennai', type: 'institution', color: '#307082' },
        { id: 'n4', label: 'Swamimalai Craft Lineage', type: 'craft', color: '#ECE7DC' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Unearthed At' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Crafted Using' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Exhibited At' },
        { id: 'e4', source: 'root', target: 'n4', label: 'Inspired Living Craft' }
      ]
    },
    relatedIds: ['sculp-002', 'sculp-003', 'craft-001', 'lit-009'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xa410c901b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef31',
      blockNumber: 28491510,
      timestamp: '12 Nov 2026, 10:30:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'sculp-002',
    gai: 'GAI-TN-SCULP-0002',
    name: 'Shiva Bronze Icons (Somaskanda & Vrishabhavahana)',
    tamilName: 'சிவன் வெண்கலச் சிலைகள் (சோமாஸ்கந்தர்)',
    category: 'Sculpture, Temple Art and Traditional Objects',
    subCategory: 'Historical Chola & Pallava Bronze',
    recordType: 'sculpture',
    description:
      'Classical Shaiva bronze processional sculptures from Kaveri delta temples including Somaskanda (Shiva seated with Uma and child Skanda) and Vrishabhavahana (standing beside Nandi), celebrated for anatomical poise and drapery.',
    material: 'Copper Alloy Bronze (Cire Perdue)',
    origin: 'Thanjavur & Nagapattinam Regions, Tamil Nadu',
    district: 'Thanjavur / Nagapattinam',
    period: 'Chola Period (c. 10th–12th Century CE)',
    estimatedDateStart: 950,
    estimatedDateEnd: 1200,
    currentLocation: 'Thanjavur Art Gallery & Government Museum Chennai',
    institution: 'Rajarajan Palace Art Gallery / Government Museum Chennai',
    image: '',
    sourceName: 'Thanjavur Art Gallery & Government Museum Chennai Records',
    sourceURL: 'https://govtmuseumchennai.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Institutionally Catalogued',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      classification: 'Historical Archaeological / Temple Bronze',
      artisticStyle: 'Early & Middle Chola Bronze Iconography',
      associatedTradition: 'Agamic Temple Ritual & Tirumurai Devotion',
      materialDetails: 'Solid-cast copper-rich bronze with chased ornamentation',
      productionPeriod: 'c. 10th–12th Century CE',
      placeOfOrigin: 'Kaveri Delta (Thanjavur / Tiruvarur / Nagapattinam)',
      currentLocation: 'Thanjavur Palace Art Gallery & Chennai Museum',
      livingCraftDistinction: 'Historical museum & temple heritage sculptures.'
    },
    provenance: [
      { year: 'c. 1000–1150 CE', title: 'Chola Temple Consecration', custodian: 'Kaveri Basin Temples', location: 'Thanjavur / Nagapattinam', event: 'Commissioned for Brahmotsavam street processions.', verified: true, hash: '0x2d01...c911' },
      { year: '1951–Present', title: 'Public Heritage Gallery Display', custodian: 'Thanjavur Art Gallery & Govt Museum Chennai', location: 'Thanjavur / Chennai', event: 'Catalogued under state antiquity protection.', verified: true, hash: '0x2d02...c912' }
    ],
    timeline: [
      { date: 'c. 10th–12th c. CE', milestoneType: 'Creation / Use', title: 'Iconographic Casting', category: 'Origin', details: 'Vrishabhavahana and Somaskanda bronzes cast in Chola workshops.' },
      { date: '1951', milestoneType: 'Cataloguing', title: 'Thanjavur Art Gallery Established', category: 'Exhibition', details: 'Regional temple bronzes gathered for secure curation.' }
    ],
    journey: [
      { title: 'Thanjavur Palace Art Gallery', year: '1951–Present', lat: 10.7905, lng: 79.1369, location: 'Thanjavur, Tamil Nadu', custodian: 'Thanjavur Art Gallery', description: 'Major repository of Chola Vrishabhavahana and Somaskanda bronzes.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Shiva Bronze Icons', type: 'sculpture', color: '#EA9940' },
        { id: 'n1', label: 'Kaveri Delta', type: 'location', color: '#6CA3A2' },
        { id: 'n2', label: 'Thanjavur Art Gallery', type: 'institution', color: '#307082' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Originated In' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Curated At' }
      ]
    },
    relatedIds: ['sculp-001', 'sculp-003', 'insc-008'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xa420c911b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef32',
      blockNumber: 28491522,
      timestamp: '12 Nov 2026, 10:33:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'sculp-003',
    gai: 'GAI-TN-SCULP-0003',
    name: 'Parvati Bronze Icons (Uma Paramesvari & Sivakami)',
    tamilName: 'பார்வதி / சிவகாமி வெண்கலச் சிலைகள்',
    category: 'Sculpture, Temple Art and Traditional Objects',
    subCategory: 'Historical Chola Bronze',
    recordType: 'sculpture',
    description:
      'Graceful tribhanga (three-fold flexion) bronze icons of Devi as Uma Paramesvari and Sivakami Amman, originally cast as consort images accompanying Shiva Nataraja or Vrishabhavahana during Chola rule.',
    material: 'Copper-Tin Bronze Alloy',
    origin: 'Mayiladuthurai & Thanjavur Districts, Tamil Nadu',
    district: 'Mayiladuthurai / Thanjavur',
    period: 'Chola Period (c. 10th–13th Century CE)',
    estimatedDateStart: 980,
    estimatedDateEnd: 1250,
    currentLocation: 'Government Museum Chennai & Regional Collections',
    institution: 'Tamil Nadu Government Museum',
    image: '',
    sourceName: 'Government Museum Chennai Bronze Catalogue',
    sourceURL: 'https://govtmuseumchennai.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Institutionally Catalogued',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      classification: 'Historical Archaeological / Temple Bronze',
      artisticStyle: 'Sembiyan Mahadevi & Imperial Chola Classicism',
      associatedTradition: 'Shaiva & Shakta Temple Iconography',
      materialDetails: 'Solid lost-wax cast bronze with kataka hasta gesture',
      productionPeriod: 'c. 10th–13th Century CE',
      placeOfOrigin: 'Kaveri Delta, Tamil Nadu',
      currentLocation: 'Government Museum Chennai',
      livingCraftDistinction: 'Historical bronze sculpture documented in museum holdings.'
    },
    provenance: [
      { year: 'c. 10th–13th c. CE', title: 'Patronage under Sembiyan Mahadevi Era', custodian: 'Chola Temple Trusts', location: 'Mayiladuthurai / Thanjavur', event: 'Cast to Shilpa Shastra proportions (Navatala / Ashtatala canons).', verified: true, hash: '0x3d01...c921' },
      { year: '20th Century', title: 'State Museum Conservation', custodian: 'Government Museum Chennai', location: 'Chennai', event: 'Documented and stabilized against bronze disease.', verified: true, hash: '0x3d02...c922' }
    ],
    timeline: [
      { date: 'c. 980–1250 CE', milestoneType: 'Creation / Use', title: 'Chola Devi Bronzes Cast', category: 'Origin', details: 'Exemplifies Tribhanga sculptural balance.' },
      { date: '1960s', milestoneType: 'Cataloguing', title: 'Documented in Chola Bronze Corpus', category: 'Verification', details: 'Photographic and chemical conservation records.' }
    ],
    journey: [
      { title: 'Government Museum Chennai', year: 'Modern Curation', lat: 13.0732, lng: 80.2609, location: 'Egmore, Chennai, TN', custodian: 'Government Museum Chennai', description: 'Displayed in South Indian Bronzes wing.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Parvati Bronze Icons', type: 'sculpture', color: '#EA9940' },
        { id: 'n1', label: 'Tribhanga Posture', type: 'technique', color: '#307082' },
        { id: 'n2', label: 'Govt Museum Chennai', type: 'institution', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Iconographic Form' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Preserved At' }
      ]
    },
    relatedIds: ['sculp-001', 'sculp-002', 'craft-001'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xa430c921b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef33',
      blockNumber: 28491535,
      timestamp: '12 Nov 2026, 10:36:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'sculp-004',
    gai: 'GAI-TN-SCULP-0004',
    name: 'Vishnu Sculptures (Perumal Bronzes & Stone Images)',
    tamilName: 'திருமால் / பெருமாள் சிற்பங்கள்',
    category: 'Sculpture, Temple Art and Traditional Objects',
    subCategory: 'Vaishnava Iconography',
    recordType: 'sculpture',
    description:
      'Pallava and Chola period bronze and granite sculptures of Vishnu (Perumal) holding Sankha (conch) and Chakra (discus), flanked by Sri Devi and Bhu Devi, recovered across Kanchipuram, Tiruchirappalli, and Nagapattinam.',
    material: 'Bronze & Carved Granite',
    origin: 'Kanchipuram, Srirangam & Kaveri Basin, Tamil Nadu',
    district: 'Kanchipuram / Tiruchirappalli',
    period: 'Pallava to Chola Period (c. 8th–12th Century CE)',
    estimatedDateStart: 750,
    estimatedDateEnd: 1200,
    currentLocation: 'Government Museum Chennai & Temple Sanctuaries',
    institution: 'Tamil Nadu Government Museum / HR&CE Collections',
    image: '',
    sourceName: 'Government Museum Chennai Vaishnava Bronze Catalogue',
    sourceURL: 'https://govtmuseumchennai.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Institutionally Catalogued',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      classification: 'Historical Archaeological / Temple Sculpture',
      artisticStyle: 'Pallava-Chola Transitional & High Chola Style',
      associatedTradition: 'Vaishnava Alvar & Divya Desam Tradition',
      materialDetails: 'Black basalt/granite and lost-wax cast bronze',
      productionPeriod: 'c. 8th–12th Century CE',
      placeOfOrigin: 'Tondaimandalam & Cholamandalam, Tamil Nadu',
      currentLocation: 'Government Museum Chennai & Regional Museums',
      livingCraftDistinction: 'Historical temple-era sculptures distinct from contemporary workshop reproductions.'
    },
    provenance: [
      { year: 'c. 8th–12th c. CE', title: 'Pallava & Chola Vaishnava Patronage', custodian: 'Vaishnava Temples', location: 'Kanchipuram / Tiruchirappalli', event: 'Consecrated in Divya Desam shrines and stone mandapas.', verified: true, hash: '0x4d01...c931' },
      { year: '19th–20th c.', title: 'Museum Hoard Cataloguing', custodian: 'Government Museum Chennai', location: 'Chennai', event: 'Early Pallava Vishnu bronzes catalogued for scholarly study.', verified: true, hash: '0x4d02...c932' }
    ],
    timeline: [
      { date: 'c. 750–900 CE', milestoneType: 'Creation / Use', title: 'Early Pallava Vishnu Bronzes', category: 'Origin', details: 'Smaller portable bronzes marking earliest Tamil bronze style.' },
      { date: 'c. 10th–12th c. CE', milestoneType: 'Evolution', title: 'Chola Srinivasa Triads', category: 'Origin', details: 'Vishnu with Sridevi and Bhudevi in grand proportions.' }
    ],
    journey: [
      { title: 'Kanchipuram Heritage Zone', year: 'c. 8th c. CE', lat: 12.8342, lng: 79.7036, location: 'Kanchipuram, Tamil Nadu', custodian: 'Pallava Temple Context', description: 'Center of early Vaishnava sculptural production.' },
      { title: 'Government Museum Chennai', year: 'Modern Era', lat: 13.0732, lng: 80.2609, location: 'Chennai, Tamil Nadu', custodian: 'Government Museum Chennai', description: 'Exhibits rare Pallava & Chola Vishnu bronzes.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Vishnu Sculptures', type: 'sculpture', color: '#EA9940' },
        { id: 'n1', label: 'Pallava-Chola Art', type: 'period', color: '#6CA3A2' },
        { id: 'n2', label: 'Kanchipuram', type: 'location', color: '#307082' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Dated To' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Originated Near' }
      ]
    },
    relatedIds: ['sculp-005', 'insc-010'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xa440c931b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef34',
      blockNumber: 28491548,
      timestamp: '12 Nov 2026, 10:39:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'sculp-005',
    gai: 'GAI-TN-SCULP-0005',
    name: 'Pallava Stone Sculptures (Kanchipuram & Cave Temples)',
    tamilName: 'பல்லவர் கால கற்சிற்பங்கள்',
    category: 'Sculpture, Temple Art and Traditional Objects',
    subCategory: 'Historical Stone Architecture',
    recordType: 'sculpture',
    description:
      'Pioneering South Indian granite and sandstone rock-cut and structural temple sculptures erected under Pallava kings Mahendravarman I, Narasimhavarman I, and Rajasimha across Mandagapattu, Trichy Rockfort, and Kanchipuram Kailasanatha.',
    material: 'Hard Granite & Sandstone',
    origin: 'Kanchipuram, Villupuram & Tiruchirappalli, Tamil Nadu',
    district: 'Kanchipuram / Villupuram',
    period: 'Pallava Period (c. 7th–9th Century CE)',
    estimatedDateStart: 600,
    estimatedDateEnd: 850,
    currentLocation: 'In situ in Protected Temple Monuments (ASI)',
    institution: 'Archaeological Survey of India',
    image: '',
    sourceName: 'ASI Pallava Monuments & K.R. Srinivasan (Cave-Temples of the Pallavas)',
    sourceURL: 'https://asi.nic.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      classification: 'Historical Architectural Stone Sculpture',
      artisticStyle: 'Early & Rajasimha Pallava Dravida Stone Carving',
      associatedTradition: 'Rock-Cut Mandapa & Structural Temple Tradition',
      materialDetails: 'Chiseled charnockite granite and sandstone panels',
      productionPeriod: 'c. 600–850 CE',
      placeOfOrigin: 'Tondaimandalam (Kanchipuram & Mandagapattu)',
      currentLocation: 'ASI Protected Monuments across Northern Tamil Nadu',
      livingCraftDistinction: 'Ancient immovable stone heritage distinct from modern workshop carving.'
    },
    provenance: [
      { year: 'c. 600–728 CE', title: 'Pallava Royal Temple Commissions', custodian: 'Pallava Dynasty', location: 'Kanchipuram / Mandagapattu', event: 'Transitioned South Indian temple building from perishable brick/wood to enduring stone.', verified: true, hash: '0x5d01...c941' },
      { year: '20th Century', title: 'ASI National Monument Protection', custodian: 'Archaeological Survey of India', location: 'Tamil Nadu', event: 'Conserved as Monuments of National Importance.', verified: true, hash: '0x5d02...c942' }
    ],
    timeline: [
      { date: 'c. 610 CE', milestoneType: 'Creation / Use', title: 'Mandagapattu Rock-Cut Shrine', category: 'Origin', details: 'Mahendravarman I declares creation of non-perishable stone temple.' },
      { date: 'c. 700–728 CE', milestoneType: 'Creation / Use', title: 'Kailasanatha Temple Reliefs', category: 'Origin', details: 'Structural sandstone & granite iconography at Kanchipuram.' }
    ],
    journey: [
      { title: 'Kailasanatha Temple, Kanchipuram', year: 'c. 700 CE–Present', lat: 12.8422, lng: 79.6897, location: 'Kanchipuram, Tamil Nadu', custodian: 'ASI Protected Monument', description: 'Rich narrative stone reliefs of Pallava artistry.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Pallava Stone Sculptures', type: 'sculpture', color: '#EA9940' },
        { id: 'n1', label: 'Kanchipuram', type: 'location', color: '#6CA3A2' },
        { id: 'n2', label: 'ASI Monuments', type: 'institution', color: '#307082' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Concentrated At' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Protected By' }
      ]
    },
    relatedIds: ['sculp-006', 'insc-010'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xa450c941b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef35',
      blockNumber: 28491560,
      timestamp: '12 Nov 2026, 10:42:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'sculp-006',
    gai: 'GAI-TN-SCULP-0006',
    name: 'Mahabalipuram Stone Carvings (UNESCO Monuments)',
    tamilName: 'மாமல்லபுரம் கற்சிற்பங்கள்',
    category: 'Sculpture, Temple Art and Traditional Objects',
    subCategory: 'Monolithic & Bas-Relief Art',
    recordType: 'sculpture',
    description:
      'World-renowned 7th–8th century CE Pallava monolithic rathas, cave mandapas, Shore Temple sculptures, and the colossal open-air bas-relief "Descent of the Ganges / Arjuna’s Penance" carved directly into coastal granite outcrops.',
    material: 'Coastal Charnockite Granite',
    origin: 'Mamallapuram (Mahabalipuram), Chengalpattu District, Tamil Nadu',
    district: 'Chengalpattu',
    period: 'Pallava Period (c. 7th–8th Century CE)',
    estimatedDateStart: 630,
    estimatedDateEnd: 730,
    currentLocation: 'In situ at Group of Monuments at Mahabalipuram (UNESCO World Heritage)',
    institution: 'Archaeological Survey of India / UNESCO',
    image: '',
    sourceName: 'ASI World Heritage Dossier — Group of Monuments at Mahabalipuram',
    sourceURL: 'https://asi.nic.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      classification: 'Historical Monumental Bas-Relief & Monoliths',
      artisticStyle: 'Mamalla & Rajasimha Pallava Classical Stone Sculpture',
      associatedTradition: 'Royal Pallava Port Art & Pancha Rathas Tradition',
      materialDetails: 'In-situ bedrock coastal charnockite granite',
      productionPeriod: 'c. 630–730 CE',
      placeOfOrigin: 'Mamallapuram, Tamil Nadu',
      currentLocation: 'Mahabalipuram UNESCO World Heritage Complex',
      livingCraftDistinction: 'Historic 7th–8th century monuments; inspires modern GI-registered Mahabalipuram stone carving workshops.'
    },
    provenance: [
      { year: 'c. 630–728 CE', title: 'Pallava Carving under Narasimhavarman I & Rajasimha', custodian: 'Pallava Kingdom', location: 'Mamallapuram', event: 'Monolithic chariots and narrative reliefs carved along granite hillocks.', verified: true, hash: '0x6d01...c951' },
      { year: '1984', title: 'UNESCO World Heritage Inscription', custodian: 'ASI & UNESCO', location: 'Mahabalipuram, Chengalpattu', event: 'Designated Group of Monuments at Mahabalipuram World Heritage Site.', verified: true, hash: '0x6d02...c952' }
    ],
    timeline: [
      { date: 'c. 630–700 CE', milestoneType: 'Creation / Use', title: 'Pancha Rathas & Descent of Ganges', category: 'Origin', details: 'Carved during Mamalla dynasty zenith.' },
      { date: '1984', milestoneType: 'Recognition', title: 'UNESCO World Heritage Site', category: 'Verification', details: 'Global cultural protection status conferred.' }
    ],
    journey: [
      { title: 'Mahabalipuram Monument Complex', year: 'c. 630 CE–Present', lat: 12.6165, lng: 80.1927, location: 'Mahabalipuram, Chengalpattu, TN', custodian: 'ASI / UNESCO', description: 'In-situ coastal rock carvings and Shore Temple.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Mahabalipuram Stone Carvings', type: 'sculpture', color: '#EA9940' },
        { id: 'n1', label: 'UNESCO Heritage Site', type: 'institution', color: '#307082' },
        { id: 'n2', label: 'Modern Mahabalipuram Craft', type: 'craft', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Protected As' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Sustains Living Lineage' }
      ]
    },
    relatedIds: ['sculp-005', 'craft-008', 'insc-010'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xa460c951b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef36',
      blockNumber: 28491572,
      timestamp: '12 Nov 2026, 10:45:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'sculp-007',
    gai: 'GAI-TN-SCULP-0007',
    name: 'Great Living Chola Temple Sculptures',
    tamilName: 'பெருவுடையார் & சோழர் கோவில் சிற்பங்கள்',
    category: 'Sculpture, Temple Art and Traditional Objects',
    subCategory: 'Temple Architectural Sculpture',
    recordType: 'sculpture',
    description:
      'Monumental granite koshta (niche) sculptures, dwarapalakas, Tripurantaka figures, and 81 surviving Bharatanatyam karana panels adorning Brihadisvara Temple (Thanjavur), Gangaikondacholapuram, and Airavatesvara (Darasuram).',
    material: 'Carved Granite',
    origin: 'Thanjavur, Ariyalur & Darasuram, Tamil Nadu',
    district: 'Thanjavur / Ariyalur',
    period: 'Imperial Chola Period (11th–12th Century CE)',
    estimatedDateStart: 1003,
    estimatedDateEnd: 1173,
    currentLocation: 'In situ at Great Living Chola Temples (UNESCO)',
    institution: 'Archaeological Survey of India / HR&CE',
    image: '',
    sourceName: 'ASI Great Living Chola Temples Documentation',
    sourceURL: 'https://asi.nic.in/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      classification: 'Historical Temple Architectural Sculpture',
      artisticStyle: 'High Chola Dravida Vimana Sculpture',
      associatedTradition: 'Shaiva Temple Architecture & Performing Arts (Karana)',
      materialDetails: 'Fine-grained granite transported from Pudukkottai quarries',
      productionPeriod: '1010 CE (Thanjavur), 1035 CE (Gangaikondacholapuram), 1166 CE (Darasuram)',
      placeOfOrigin: 'Kaveri Delta, Tamil Nadu',
      currentLocation: 'Thanjavur, Gangaikondacholapuram & Darasuram',
      livingCraftDistinction: 'Architectural monument sculptures integral to historic temple fabric.'
    },
    provenance: [
      { year: '1010–1166 CE', title: 'Imperial Chola Constructions', custodian: 'Rajaraja I, Rajendra I & Rajaraja II', location: 'Thanjavur / Ariyalur', event: 'Monumental granite sculptures integrated into temple vimanas.', verified: true, hash: '0x7d01...c961' },
      { year: '1987 / 2004', title: 'UNESCO Serial World Heritage Recognition', custodian: 'ASI & UNESCO', location: 'Tamil Nadu', event: 'Recognized globally as Great Living Chola Temples.', verified: true, hash: '0x7d02...c962' }
    ],
    timeline: [
      { date: '1010 CE', milestoneType: 'Creation / Use', title: 'Thanjavur Brihadisvara Consecrated', category: 'Origin', details: 'Dwarapalakas and 81 karana dance reliefs completed.' },
      { date: '1987–2004', milestoneType: 'Recognition', title: 'UNESCO Serial Inscription', category: 'Verification', details: 'Thanjavur, Gangaikondacholapuram, and Darasuram inscribed.' }
    ],
    journey: [
      { title: 'Brihadisvara Temple, Thanjavur', year: '1010 CE–Present', lat: 10.7828, lng: 79.1318, location: 'Thanjavur, Tamil Nadu', custodian: 'ASI / Living Temple', description: 'Flagship Chola temple sculpture complex.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Chola Temple Sculptures', type: 'sculpture', color: '#EA9940' },
        { id: 'n1', label: 'Brihadisvara (1010 CE)', type: 'location', color: '#6CA3A2' },
        { id: 'n2', label: 'UNESCO / ASI', type: 'institution', color: '#307082' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Located At' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Documented By' }
      ]
    },
    relatedIds: ['sculp-001', 'insc-008'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xa470c961b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef37',
      blockNumber: 28491585,
      timestamp: '12 Nov 2026, 10:48:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'sculp-008',
    gai: 'GAI-TN-SCULP-0008',
    name: 'Ayyanar Terracotta Sculptures',
    tamilName: 'அய்யனார் சுடுமண் குதிரை & காவல் தெய்வ சிற்பங்கள்',
    category: 'Sculpture, Temple Art and Traditional Objects',
    subCategory: 'Living Folk Ritual Sculpture',
    recordType: 'sculpture',
    description:
      'Monumental hand-built fired-clay (terracotta) horses, elephants, and guardian figures crafted by village Velar (potter-priest) communities and offered at rural Ayyanar shrines (Kaaval Deivam) across Pudukkottai, Sivaganga, Madurai, and Villupuram.',
    material: 'Kiln-Fired Alluvial Terracotta Clay & Mineral Pigments',
    origin: 'Pudukkottai, Sivaganga, Madurai & Cuddalore Rural Shrines, Tamil Nadu',
    district: 'Pudukkottai / Sivaganga',
    period: 'Continuous Living Folk Tradition (Historical Roots – Present)',
    estimatedDateStart: 1600,
    estimatedDateEnd: 2026,
    currentLocation: 'Open-Air Rural Shrines & Government Museum Chennai Folk Gallery',
    institution: 'Living Community Shrines / Government Museum Chennai',
    image: '',
    sourceName: 'Government Museum Chennai Folk Art Gallery & Stephen Inglis / V. Jayakumar Studies',
    sourceURL: 'https://govtmuseumchennai.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Scholarly Reference',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      classification: 'Living Folk Ritual Terracotta Tradition (Multi-Generational)',
      artisticStyle: 'Rural Tamil Velar Hand-Coiled Terracotta',
      associatedTradition: 'Village Guardian Deity (Ayyanar / Karuppasamy) Votive Offerings',
      materialDetails: 'Locally tempered river clay, hollow-coiled and open-pit fired',
      productionPeriod: 'Multi-century continuing ritual tradition into present day',
      placeOfOrigin: 'Rural Tamil Nadu (Manamadurai, Pudukkottai, Villupuram)',
      currentLocation: 'Village Shrines & Museum Ethnographic Collections',
      livingCraftDistinction: 'Ongoing living folk ritual art — distinct from both ancient Chola bronzes and secular commercial souvenirs.'
    },
    provenance: [
      { year: 'Historical–Present', title: 'Votive Offerings by Velar Potters', custodian: 'Village Shrine Communities', location: 'Rural Tamil Nadu', event: 'Crafted annually for temple festivals and open-air shrine protection.', verified: true, hash: '0x8d01...c971' },
      { year: '20th Century', title: 'Ethnographic Documentation', custodian: 'Government Museum Chennai', location: 'Chennai', event: 'Representative figures documented in Contemporary & Folk Art collections.', verified: true, hash: '0x8d02...c972' }
    ],
    timeline: [
      { date: 'Pre-Modern – Present', milestoneType: 'Living Tradition', title: 'Continuous Velar Terracotta Craft', category: 'Origin', details: 'Unbroken hereditary potting and firing technique.' },
      { date: '1980s–Present', milestoneType: 'Documentation', title: 'Museum & Anthropological Records', category: 'Verification', details: 'Catalogued as living Tamil folk sculpture.' }
    ],
    journey: [
      { title: 'Pudukkottai & Sivaganga Shrines', year: 'Continuous Tradition', lat: 10.3797, lng: 78.8208, location: 'Pudukkottai / Sivaganga, TN', custodian: 'Village Shrine Communities', description: 'Open-air groves of votive terracotta horses.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Ayyanar Terracotta Sculptures', type: 'sculpture', color: '#EA9940' },
        { id: 'n1', label: 'Velar Artisan Community', type: 'person', color: '#12212E' },
        { id: 'n2', label: 'Terracotta Tradition', type: 'material', color: '#ECE7DC' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Crafted By' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Continuity With' }
      ]
    },
    relatedIds: ['arch-009'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xa480c971b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef38',
      blockNumber: 28491598,
      timestamp: '12 Nov 2026, 10:51:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'sculp-009',
    gai: 'GAI-TN-SCULP-0009',
    name: 'Traditional Thanjavur Dolls (Thalaiyatti Bommai)',
    tamilName: 'தஞ்சாவூர் தலையாட்டி பொம்மை',
    category: 'Sculpture, Temple Art and Traditional Objects',
    subCategory: 'Contemporary Traditional Craft Object',
    recordType: 'sculpture',
    description:
      'Iconic roly-poly and bobble-head painted terracotta and papier-mâché figurines weighted at the base so they oscillate gracefully without toppling. A 19th-century-origin living traditional craft — explicitly categorized here as a contemporary traditional craft product rather than an ancient excavated sculpture.',
    material: 'Terracotta Clay / Papier-Mâché & Natural Paints',
    origin: 'Thanjavur, Thanjavur District, Tamil Nadu',
    district: 'Thanjavur',
    period: 'Modern Living Traditional Craft (19th Century Roots – Present)',
    estimatedDateStart: 1850,
    estimatedDateEnd: 2026,
    currentLocation: 'Thanjavur Artisan Workshops & Poompuhar Emporia',
    institution: 'Tamil Nadu Handicrafts Development Corporation (Poompuhar)',
    image: '',
    sourceName: 'Tamil Nadu Handicrafts Development Corporation & IP India GI Registry',
    sourceURL: 'https://tnhdc.poompuhar.com/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      classification: 'Contemporary Traditional Craft Object (Non-Archaeological)',
      artisticStyle: 'Roly-Poly Weighted Folk Figurine (Saraboji Court Lineage)',
      associatedTradition: 'Navaratri Golu & Tamil Domestic Craft Culture',
      materialDetails: 'Hand-molded river clay/sago paste with bright hand-painted finishes',
      productionPeriod: '19th Century Maratha-period patronage to Contemporary Craft',
      placeOfOrigin: 'Thanjavur, Tamil Nadu',
      currentLocation: 'Thanjavur Artisan Workshops & State Handicraft Showrooms',
      livingCraftDistinction: 'Contemporary Living Craft Product — cross-listed in Collection 5 GI Heritage (not an ancient archaeological antiquity).'
    },
    provenance: [
      { year: '19th Century', title: 'Early Thanjavur Patronage', custodian: 'Thanjavur Clay Artisans', location: 'Thanjavur, Tamil Nadu', event: 'Craft matured under Raja Serfoji II court patronage.', verified: true, hash: '0x9d01...c981' },
      { year: 'Contemporary', title: 'GI Heritage Recognition', custodian: 'Thanjavur Doll Artisans Society', location: 'Thanjavur', event: 'Recognized under Indian Geographical Indications framework.', verified: true, hash: '0x9d02...c982' }
    ],
    timeline: [
      { date: '19th Century', milestoneType: 'Tradition Origin', title: 'Development in Thanjavur', category: 'Origin', details: 'Weighted kinetic terracotta dolls popularized.' },
      { date: 'Contemporary', milestoneType: 'Living Heritage', title: 'GI & Poompuhar Promotion', category: 'Verification', details: 'Sustained by hereditary artisan families in Thanjavur.' }
    ],
    journey: [
      { title: 'Thanjavur Doll Workshops', year: '19th c.–Present', lat: 10.7870, lng: 79.1378, location: 'Thanjavur, Tamil Nadu', custodian: 'Hereditary Artisan Guilds', description: 'Active craft production hub.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Traditional Thanjavur Dolls', type: 'craft', color: '#EA9940' },
        { id: 'n1', label: 'Thanjavur', type: 'location', color: '#6CA3A2' },
        { id: 'n2', label: 'Poompuhar / GI Craft', type: 'gi', color: '#307082' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Crafted In' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Documented By' }
      ]
    },
    relatedIds: ['craft-006', 'sculp-010'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xa490c981b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef39',
      blockNumber: 28491610,
      timestamp: '12 Nov 2026, 10:54:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'sculp-010',
    gai: 'GAI-TN-SCULP-0010',
    name: 'Marapachchi Wooden Dolls',
    tamilName: 'மரப்பாச்சி பொம்மைகள்',
    category: 'Sculpture, Temple Art and Traditional Objects',
    subCategory: 'Contemporary Traditional Craft Object',
    recordType: 'sculpture',
    description:
      'Traditional hand-carved male and female wooden dolls typically made from red sandalwood (Rakta Chandanam) or rosewood and gifted during South Indian weddings and Navaratri Golu displays. Categorized strictly as a traditional household craft rather than an archaeological monument.',
    material: 'Red Sandalwood / Rosewood / Country Wood',
    origin: 'Tirupati–Chennai Belt, Madurai & Thanjavur, Tamil Nadu',
    district: 'Madurai / Thanjavur',
    period: 'Traditional Household Craft (Pre-Modern – Present)',
    estimatedDateStart: 1800,
    estimatedDateEnd: 2026,
    currentLocation: 'Tamil Heritage Households, Craft Museums & Poompuhar',
    institution: 'Tamil Nadu Handicrafts Development Corporation (Poompuhar)',
    image: '',
    sourceName: 'Poompuhar Craft Documentation & Regional Ethnographic Museums',
    sourceURL: 'https://tnhdc.poompuhar.com/',
    accessDate: '2026-11-12',
    evidenceType: 'Scholarly Reference',
    confidenceLevel: 'Medium',
    verificationStatus: 'Verified',
    typeMetadata: {
      classification: 'Contemporary Traditional Wooden Craft Object',
      artisticStyle: 'Stylized Paired Wooden Figurine Carving',
      associatedTradition: 'Navaratri Bommai Kolu & Tamil Wedding Heirloom Gift',
      materialDetails: 'Turned and hand-chiseled red sandalwood / medicinal wood',
      productionPeriod: 'Traditional living craft into contemporary practice',
      placeOfOrigin: 'Tamil Nadu & Andhra Border Craft Clusters',
      currentLocation: 'Regional Craft Repositories & Households',
      livingCraftDistinction: 'Contemporary & heirloom folk craft product — clearly distinguished from ancient stone/bronze temple antiquities.'
    },
    provenance: [
      { year: '19th c.–Present', title: 'Heirloom Wedding & Golu Tradition', custodian: 'Tamil Artisan Woodcarvers & Families', location: 'Tamil Nadu', event: 'Carved in unjoined paired forms, dressed in miniature silk garments for Golu.', verified: true, hash: '0x0d01...c991' }
    ],
    timeline: [
      { date: 'Pre-Modern – Present', milestoneType: 'Living Tradition', title: 'Marapachchi Carving & Golu Custom', category: 'Origin', details: 'Passed across generations in Tamil households.' }
    ],
    journey: [
      { title: 'Madurai & Thanjavur Craft Centers', year: 'Living Tradition', lat: 9.9252, lng: 78.1198, location: 'Madurai / Thanjavur, TN', custodian: 'Woodworking Artisans', description: 'Traditional wooden figurine production.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Marapachchi Wooden Dolls', type: 'craft', color: '#EA9940' },
        { id: 'n1', label: 'Navaratri Kolu Tradition', type: 'tradition', color: '#6CA3A2' },
        { id: 'n2', label: 'Poompuhar', type: 'institution', color: '#307082' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Featured In' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Retained Craft Info' }
      ]
    },
    relatedIds: ['sculp-009', 'craft-006'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xa4a0c991b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef3a',
      blockNumber: 28491625,
      timestamp: '12 Nov 2026, 10:57:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  }
];

