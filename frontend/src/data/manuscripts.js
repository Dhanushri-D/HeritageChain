export const MANUSCRIPTS = [
  {
    id: 'ms-001',
    gai: 'GAI-TN-MS-0001',
    name: 'Tamil Palm-Leaf Manuscripts (Olai Chuvadi Corpus)',
    tamilName: 'தமிழ் ஓலைச்சுவடிகள்',
    category: 'Tamil Literary and Manuscript Heritage',
    subCategory: 'Physical Palm-Leaf Manuscript Repository',
    recordType: 'manuscript',
    description:
      'Physical Talipot (Corypha umbraculifera) and Palmyra (Borassus flabellifer) palm-leaf manuscripts incised with iron styli (Ezhuthaani) and smeared with turmeric-charcoal soot. Preserves literary, Siddha medical, astronomical, and temple records in institutions like Sarasvati Mahal Library and GOML.',
    material: 'Seasoned Palmyra / Talipot Palm Leaf, Iron Stylus Incision, Cotton Cord & Wooden Covers (Sattam)',
    origin: 'Thanjavur, Tirunelveli, Madurai & Kanchipuram, Tamil Nadu',
    district: 'Thanjavur / Chennai',
    period: 'Surviving Physical Copies (16th–19th Century CE)',
    estimatedDateStart: 1550,
    estimatedDateEnd: 1920,
    currentLocation: 'Thanjavur Maharaja Serfoji’s Sarasvati Mahal Library & GOML Chennai',
    institution: 'Sarasvati Mahal Library / Government Oriental Manuscripts Library',
    image: '',
    sourceName: 'Government Oriental Manuscripts Library (GOML) & National Mission for Manuscripts',
    sourceURL: 'https://www.tamilvu.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Institutionally Catalogued',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      objectType: 'Physical Palm-Leaf Manuscript Bundles (Olai Chuvadi)',
      script: 'Tamil Script & Grantha Script (with occasional Vatteluttu)',
      copyingPeriod: 'Mostly 17th–19th Century CE (copied cyclically due to tropical humidity)',
      catalogueReference: 'Institutional Bundles Catalogued in TMSSM Library & GOML Madras',
      preservationInstitution: 'Thanjavur Sarasvati Mahal Library / GOML / U.V.S. Library / IFP Pondicherry',
      physicalCondition: 'Bound between wooden sattam planks; treated with citronella/lemongrass conservation oil & digitized',
      distinctionNote: 'Physical manuscript artifacts are materially centuries younger than the ancient Sangam texts they transmit.'
    },
    provenance: [
      { year: '17th–19th c. CE', title: 'Monastic & Court Recopying', custodian: 'Adheenams & Thanjavur Palace', location: 'Thanjavur / Tirunelveli', event: 'Scribes recopied older decaying leaves onto fresh seasoned palmyra strips.', verified: true, hash: '0x1m01...f101' },
      { year: '1869–Present', title: 'Modern Archival Cataloguing & Digitization', custodian: 'GOML Chennai & Sarasvati Mahal Library', location: 'Chennai / Thanjavur', event: 'Microfilmed and digitally scanned for permanent open preservation.', verified: true, hash: '0x1m02...f102' }
    ],
    timeline: [
      { date: '16th–19th c. CE', milestoneType: 'Copying Date', title: 'Surviving Olai Chuvadi Copies Written', category: 'Origin', details: 'Physical leaf copies created by hereditary scribes.' },
      { date: '1880s–1930s', milestoneType: 'Archival Collection', title: 'Collected by U.V.S. & Madras GOML', category: 'Location', details: 'Rescued from private attics across Tamil villages.' },
      { date: '2003–Present', milestoneType: 'Digitization', title: 'National Manuscript Digitization', category: 'Verification', details: 'Scanned for global academic inspection.' }
    ],
    journey: [
      { title: 'Sarasvati Mahal Library, Thanjavur', year: '16th c.–Present', lat: 10.7905, lng: 79.1369, location: 'Thanjavur, Tamil Nadu', custodian: 'TMSSM Library', description: 'Houses thousands of Tamil, Sanskrit & Modi manuscripts.' },
      { title: 'GOML & U.V.S. Library, Chennai', year: '1869–Present', lat: 13.0695, lng: 80.2407, location: 'Chennai, Tamil Nadu', custodian: 'GOML / UVSL', description: 'Major manuscript conservation & digitization center.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Olai Chuvadi Corpus', type: 'manuscript', color: '#EA9940' },
        { id: 'n1', label: 'Sarasvati Mahal Library', type: 'institution', color: '#307082' },
        { id: 'n2', label: 'Tolkappiyam', type: 'literature', color: '#6CA3A2' },
        { id: 'n3', label: 'Silappathikaram', type: 'literature', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Preserved At' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Transmits' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Transmits' }
      ]
    },
    relatedIds: ['lit-001', 'lit-002', 'lit-003', 'ms-002'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xd710f101b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef61',
      blockNumber: 28492101,
      timestamp: '12 Nov 2026, 12:22:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'ms-002',
    gai: 'GAI-TN-MS-0002',
    name: 'Historical Printed Editions (Tamil Renaissance Print Heritage)',
    tamilName: 'வரலாற்றுத் தமிழ் அச்சுப் பதிப்புகள்',
    category: 'Tamil Literary and Manuscript Heritage',
    subCategory: 'Early Printed Book Editions',
    recordType: 'manuscript',
    description:
      'Physical first and early printed editions of Tamil classics (18th–early 20th century CE), including 1812 Madras prints, C.W. Damodaram Pillai’s Kalithokai (1887), and U.V. Swaminatha Iyer’s critical Sangam & Epic imprints printed on rag paper using movable Tamil type.',
    material: 'Hand-Made Rag Paper, Movable Lead Tamil Type & Cloth/Leather Binding',
    origin: 'Chennai (Madras), Tharangambadi (Tranquebar) & Thanjavur, Tamil Nadu',
    district: 'Chennai / Mayiladuthurai',
    period: 'Modern Print Heritage (1578 / 1712 / 1812 – Early 20th Century CE)',
    estimatedDateStart: 1712,
    estimatedDateEnd: 1937,
    currentLocation: 'Roja Muthiah Research Library, Connemara Public Library & U.V.S. Library',
    institution: 'Roja Muthiah Research Library / Connemara Library / UVSL',
    image: '',
    sourceName: 'Roja Muthiah Research Library & Tamil Virtual Academy Archival Prints',
    sourceURL: 'https://www.tamilvu.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Institutionally Catalogued',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      objectType: 'Historical Printed Book Imprints (First & Critical Editions)',
      script: 'Printed Tamil Movable Type (reformed with pulli punctuation)',
      copyingPeriod: '19th to Early 20th Century CE Imprints (building on 1578 Thambiran Vanakkam)',
      catalogueReference: 'Preserved in Rare Book Wings at RMRL & Connemara Public Library, Chennai',
      preservationInstitution: 'Roja Muthiah Research Library / Connemara Public Library / British Library',
      physicalCondition: 'Acid-neutralized rare print volumes undergoing microfilming & PDF archiving',
      distinctionNote: 'Represents physical print witnesses created by 19th-century Tamil Renaissance editors.'
    },
    provenance: [
      { year: '1812–1937', title: 'Early Critical Tamil Printing', custodian: 'Madras Printing Presses & Scholars', location: 'Madras (Chennai)', event: 'Transformed fragile palm-leaf holdings into permanent printed volumes.', verified: true, hash: '0x2m01...f111' },
      { year: '1994–Present', title: 'Rare Book Preservation at RMRL', custodian: 'Roja Muthiah Research Library', location: 'Taramani, Chennai', event: 'Preserved rare 19th/20th-century Tamil print heritage.', verified: true, hash: '0x2m02...f112' }
    ],
    timeline: [
      { date: '1578', milestoneType: 'Early Print Milestone', title: 'Thambiran Vanakkam (First Tamil Printed Book)', category: 'Origin', details: 'Printed in Quilon/Goa in Tamil script.' },
      { date: '1887–1904', milestoneType: 'Critical Print', title: 'Damodaram Pillai & U.V.S. Sangam Prints', category: 'Verification', details: 'First printed editions of Kalithokai, Purananuru, Silappathikaram.' }
    ],
    journey: [
      { title: 'Roja Muthiah Research Library, Chennai', year: '1994–Present', lat: 12.9901, lng: 80.2442, location: 'Taramani, Chennai, TN', custodian: 'RMRL', description: 'Houses hundreds of thousands of rare Tamil printed books and periodicals.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Historical Printed Editions', type: 'edition', color: '#EA9940' },
        { id: 'n1', label: 'Purananuru (1894 Print)', type: 'literature', color: '#307082' },
        { id: 'n2', label: 'Silappathikaram (1892 Print)', type: 'literature', color: '#307082' },
        { id: 'n3', label: 'RMRL & UVSL Archives', type: 'institution', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Published' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Published' },
        { id: 'e3', source: 'root', target: 'n3', label: 'Archived At' }
      ]
    },
    relatedIds: ['ms-001', 'lit-003', 'lit-006'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xd720f111b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef62',
      blockNumber: 28492114,
      timestamp: '12 Nov 2026, 12:25:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'ms-003',
    gai: 'GAI-TN-MS-0003',
    name: 'Tolkappiyam Palm-Leaf Manuscript Witness (Sarasvati Mahal)',
    tamilName: 'தொல்காப்பிய ஓலைச்சுவடிப் பிரதி',
    category: 'Tamil Literary and Manuscript Heritage',
    subCategory: 'Individual Manuscript Copy',
    recordType: 'manuscript',
    description:
      'Physical 18th–19th century palmyra-leaf manuscript witness containing Tolkappiyam sutras along with Ilampuranar/Nachinarkiniyar commentarial excerpts, catalogued in the Thanjavur Sarasvati Mahal Tamil manuscript collection.',
    material: 'Palmyra Palm Leaf (Incised Tamil Script without Pulli dots)',
    origin: 'Kaveri Delta, Thanjavur District, Tamil Nadu',
    district: 'Thanjavur',
    period: 'Surviving Physical Copy (c. 18th–19th Century CE)',
    estimatedDateStart: 1750,
    estimatedDateEnd: 1870,
    currentLocation: 'Thanjavur Maharaja Serfoji’s Sarasvati Mahal Library',
    institution: 'Sarasvati Mahal Library, Thanjavur',
    image: '',
    sourceName: 'Thanjavur Sarasvati Mahal Library Descriptive Tamil Catalogue',
    sourceURL: 'https://www.tamilvu.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Institutionally Catalogued',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      objectType: 'Physical Palm-Leaf Copy of Tolkappiyam',
      script: 'Pre-print Tamil Manuscript Orthography (un-dotted consonants)',
      copyingPeriod: 'c. 18th–19th Century CE (distinct from Ancient text composition date)',
      catalogueReference: 'Catalogued in Thanjavur Sarasvati Mahal Tamil Manuscript Descriptive Register',
      preservationInstitution: 'Thanjavur Sarasvati Mahal Library',
      physicalCondition: 'Complete folio bundle with wooden protective covers',
      distinctionNote: 'Physical copy record linked directly to parent Literary Work GAI-TN-LIT-0002 (Tolkappiyam).'
    },
    provenance: [
      { year: 'c. 18th–19th c.', title: 'Scribe Transcription', custodian: 'Thanjavur Scholarly Lineage', location: 'Thanjavur', event: 'Incised on cured palmyra strips for palace library archive.', verified: true, hash: '0x3m01...f121' },
      { year: '1918–Present', title: 'Public Palace Library Custody', custodian: 'TMSSM Library', location: 'Thanjavur', event: 'Catalogued and preserved for philological comparison.', verified: true, hash: '0x3m02...f122' }
    ],
    timeline: [
      { date: 'c. 18th–19th c.', milestoneType: 'Copying Date', title: 'Palm-Leaf Copy Prepared', category: 'Origin', details: 'Physical copy of older grammatical tradition.' },
      { date: '20th Century', milestoneType: 'Cataloguing', title: 'Catalogued at Sarasvati Mahal', category: 'Verification', details: 'Indexed in Tamil Descriptive Manuscript Catalogue.' }
    ],
    journey: [
      { title: 'Sarasvati Mahal Library, Thanjavur', year: '19th c.–Present', lat: 10.7905, lng: 79.1369, location: 'Thanjavur, Tamil Nadu', custodian: 'TMSSM Library', description: 'Permanent manuscript repository.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Tolkappiyam Olai Witness', type: 'manuscript', color: '#EA9940' },
        { id: 'n1', label: 'Tolkappiyam (Work)', type: 'literature', color: '#307082' },
        { id: 'n2', label: 'Sarasvati Mahal Library', type: 'institution', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Physical Witness Of' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Housed At' }
      ]
    },
    relatedIds: ['lit-002', 'ms-001'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xd730f121b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef63',
      blockNumber: 28492128,
      timestamp: '12 Nov 2026, 12:28:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'ms-004',
    gai: 'GAI-TN-MS-0004',
    name: 'Thirukkural Palm-Leaf & 1812 Madras Print Witness',
    tamilName: 'திருக்குறள் ஓலைச்சுவடி & 1812 அச்சுப் பிரதி',
    category: 'Tamil Literary and Manuscript Heritage',
    subCategory: 'Individual Manuscript & First Print Witness',
    recordType: 'manuscript',
    description:
      'Preserved palm-leaf witnesses and the landmark 1812 Madras first printed edition of Thirukkural (compiled with Naladiyar by Malaiyappan under Tanjore/Madras initiative), illustrating the transition of Kural couplets from palm leaf to movable print.',
    material: 'Palmyra Leaf Witness & 1812 Paper Imprint',
    origin: 'Thanjavur & Chennai (Madras), Tamil Nadu',
    district: 'Chennai / Thanjavur',
    period: 'Late Manuscript & Early Print Era (c. 18th Century – 1812 CE)',
    estimatedDateStart: 1750,
    estimatedDateEnd: 1812,
    currentLocation: 'Government Oriental Manuscripts Library / Tamil Virtual Academy Digital Archive',
    institution: 'GOML Chennai / Tamil Virtual Academy',
    image: '',
    sourceName: 'Tamil Virtual Academy Rare Print & Manuscript Digital Library',
    sourceURL: 'https://www.tamilvu.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Institutionally Catalogued',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      objectType: 'Manuscript & 1812 Early Print Witness of Thirukkural',
      script: 'Tamil Script',
      copyingPeriod: '18th c. CE manuscript witness / 1812 CE First Print Edition',
      catalogueReference: 'Archived in GOML Chennai & Tamil Virtual Academy Rare Digital Repository',
      preservationInstitution: 'GOML Chennai / Connemara / British Library Rare Books',
      physicalCondition: 'Digitally scanned folios and bound 1812 imprint',
      distinctionNote: 'Material transmission copy separated cleanly from Thirukkural literary entry GAI-TN-LIT-0001.'
    },
    provenance: [
      { year: '1812', title: 'First Printed Thirukkural Issued in Madras', custodian: 'Madras Press / Ellis Circle', location: 'Madras (Chennai)', event: 'First printed book edition of Thirukkural derived from manuscript collation.', verified: true, hash: '0x4m01...f131' }
    ],
    timeline: [
      { date: '18th c. CE', milestoneType: 'Copying Date', title: 'Palm-Leaf Exemplars Copied', category: 'Origin', details: 'Included Parimelazhagar commentary leaves.' },
      { date: '1812', milestoneType: 'Early Print', title: 'Madras First Print of Thirukkural', category: 'Verification', details: 'Milestone transition to movable type.' }
    ],
    journey: [
      { title: 'GOML & Rare Books Archive, Chennai', year: '1812–Present', lat: 13.0695, lng: 80.2407, location: 'Chennai, Tamil Nadu', custodian: 'GOML / TVA', description: 'Preserves early Kural print and manuscript holdings.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Thirukkural Witness (1812)', type: 'manuscript', color: '#EA9940' },
        { id: 'n1', label: 'Thirukkural (Work)', type: 'literature', color: '#307082' },
        { id: 'n2', label: 'GOML Chennai', type: 'institution', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Physical Witness Of' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Archived At' }
      ]
    },
    relatedIds: ['lit-001', 'ms-002'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xd740f131b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef64',
      blockNumber: 28492140,
      timestamp: '12 Nov 2026, 12:31:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  },
  {
    id: 'ms-005',
    gai: 'GAI-TN-MS-0005',
    name: 'Thevaram Palm-Leaf & UNESCO Memory Manuscript Archive (IFP)',
    tamilName: 'தேவார ஓலைச்சுவடி ஆவணம்',
    category: 'Tamil Literary and Manuscript Heritage',
    subCategory: 'UNESCO Memory of the World Manuscript Collection',
    recordType: 'manuscript',
    description:
      'Extensive collection of Shaiva Agamic & Thevaram palm-leaf manuscripts preserved and digitized at the French Institute of Pondicherry (IFP) and Muktabodha/EFEO archives, whose broader Shaiva Siddhanta manuscript archive is recognized under UNESCO Memory of the World.',
    material: 'Palmyra Palm-Leaf Folios with Paṇ Musical Annotations',
    origin: 'Puducherry, Chidambaram & Kaveri Delta Adheenams',
    district: 'Puducherry / Thanjavur',
    period: 'Surviving Copies (17th–19th Century CE)',
    estimatedDateStart: 1650,
    estimatedDateEnd: 1890,
    currentLocation: 'French Institute of Pondicherry (IFP) & Temple Adheenam Libraries',
    institution: 'French Institute of Pondicherry (IFP) / Tamil Virtual Academy',
    image: '',
    sourceName: 'French Institute of Pondicherry (IFP) Manuscript Catalogue & UNESCO Memory of the World',
    sourceURL: 'https://www.tamilvu.org/',
    accessDate: '2026-11-12',
    evidenceType: 'Officially Documented',
    confidenceLevel: 'High',
    verificationStatus: 'Verified',
    typeMetadata: {
      objectType: 'Physical Shaiva & Thevaram Palm-Leaf Archive',
      script: 'Tamil & Grantha Scripts',
      copyingPeriod: 'c. 17th–19th Century CE',
      catalogueReference: 'IFP Manuscript Archive (UNESCO Memory of the World Register, 2005)',
      preservationInstitution: 'French Institute of Pondicherry & Dharmapuram Adheenam',
      physicalCondition: 'Conserved climate-controlled leaves & high-resolution digital scans',
      distinctionNote: 'Physical manuscript repository linked to the 7th–8th century Thevaram literary corpus (GAI-TN-LIT-0009).'
    },
    provenance: [
      { year: '17th–19th c.', title: 'Adheenam Temple Copying', custodian: 'Shaiva Monastic Libraries', location: 'Kaveri Delta', event: 'Preserved liturgical pathigams with musical Paṇ labels.', verified: true, hash: '0x5m01...f141' },
      { year: '2005', title: 'UNESCO Memory of the World Register', custodian: 'IFP Pondicherry', location: 'Puducherry', event: 'Shaiva manuscript collection inscribed in UNESCO international register.', verified: true, hash: '0x5m02...f142' }
    ],
    timeline: [
      { date: '17th–19th c.', milestoneType: 'Copying Date', title: 'Monastic Palm-Leaf Preservation', category: 'Origin', details: 'Copied across Shaiva monasteries.' },
      { date: '2005', milestoneType: 'Recognition', title: 'UNESCO Memory of the World', category: 'Verification', details: 'IFP Shaiva manuscript holdings globally recognized.' }
    ],
    journey: [
      { title: 'French Institute of Pondicherry', year: '1955–Present', lat: 11.9338, lng: 79.8350, location: 'Puducherry', custodian: 'IFP Manuscript Archive', description: 'Climate-controlled conservation and digitization facility.' }
    ],
    relationships: {
      nodes: [
        { id: 'root', label: 'Thevaram Palm-Leaf Archive', type: 'manuscript', color: '#EA9940' },
        { id: 'n1', label: 'Thevaram (Literary Canon)', type: 'literature', color: '#307082' },
        { id: 'n2', label: 'IFP / UNESCO Register', type: 'institution', color: '#6CA3A2' }
      ],
      edges: [
        { id: 'e1', source: 'root', target: 'n1', label: 'Physical Witness Of' },
        { id: 'e2', source: 'root', target: 'n2', label: 'Preserved At' }
      ]
    },
    relatedIds: ['lit-009', 'ms-001'],
    blockchain: {
      network: 'Polygon Amoy Testnet',
      txHash: '0xd750f141b92f7e1c4a03982e5b7194f1082c91fd380b2a7593c61d821a9aef65',
      blockNumber: 28492154,
      timestamp: '12 Nov 2026, 12:34:00 UTC',
      contractAddress: '0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7',
      status: 'Verified & Immutable'
    }
  }
];

