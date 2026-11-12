export const HISTORICAL_PERIODS = [
  {
    id: 'period-01',
    era: 'Prehistoric Stone Age',
    dateRange: 'Paleolithic to Neolithic (before c. 1500 BCE)',
    startYear: -3000,
    endYear: -1500,
    summary: 'Lower Paleolithic hand-axes (Attirampakkam, Pallavaram), microlithic teri dune industries, and Neolithic polished celts (Paiyampalli).',
    highlights: ['Kortallayar Acheulean hand-axes', 'Polished Neolithic ground stone axes'],
    linkedIds: ['arch-010'],
    confidence: 'Established Archaeological Horizon'
  },
  {
    id: 'period-02',
    era: 'Iron Age & Megalithic Culture',
    dateRange: 'c. 1200 BCE – 300 BCE',
    startYear: -1200,
    endYear: -300,
    summary: 'Tamiraparani and Kaveri urn-burial and megalithic cist traditions marked by Black-and-Red Ware, wrought-iron weaponry/agricultural implements, and high-tin bronze lids.',
    highlights: ['Adichanallur urn necropolis', 'Sivagalai AMS-dated iron & rice husks', 'Kodumanal iron smelting'],
    linkedIds: ['arch-001', 'arch-002', 'arch-003', 'arch-004', 'arch-005'],
    confidence: 'Radiocarbon & Stratigraphic Evidence'
  },
  {
    id: 'period-03',
    era: 'Early Historic & Tamil-Brahmi Literacy',
    dateRange: 'c. 6th/3rd Century BCE – 3rd Century CE',
    startYear: -600,
    endYear: 300,
    summary: 'Emergence of urban brick settlements (Keezhadi), widespread Tamili (Tamil-Brahmi) literacy on cave drip-ledges and potsherds, punch-marked silver and Sangam copper/lead coinages.',
    highlights: ['Keezhadi urban brick architecture', 'Mangulam, Jambai & Pugalur Tamil-Brahmi inscriptions', 'Punch-marked & Chera/Chola/Pandya issues'],
    linkedIds: ['arch-008', 'insc-001', 'insc-002', 'insc-005', 'insc-006', 'coin-001'],
    confidence: 'Epigraphic & Radiocarbon Corroboration'
  },
  {
    id: 'period-04',
    era: 'Sangam Classical & Indo-Roman Maritime Era',
    dateRange: 'c. 1st Century BCE – 3rd Century CE',
    startYear: -100,
    endYear: 300,
    summary: 'Golden age of Akam and Puram poetry (Ettuthokai anthologies, Tolkappiyam core) paired with intense Indian Ocean & Roman maritime commerce at Arikamedu, Korkai, Poompuhar, and Alagankulam.',
    highlights: ['Arikamedu Indo-Pacific glass beads', 'Roman Aurei & Denarii hoards', 'Akananuru, Purananuru, Kurunthogai, Natrinai'],
    linkedIds: ['arch-006', 'arch-007', 'coin-008', 'coin-009', 'coin-010', 'lit-002', 'lit-005', 'lit-006', 'lit-007', 'lit-008'],
    confidence: 'Literary, Numismatic & Archaeological Convergence'
  },
  {
    id: 'period-05',
    era: 'Post-Sangam Didactic & Epic Age',
    dateRange: 'c. 3rd – 6th Century CE',
    startYear: 250,
    endYear: 600,
    summary: 'Composition of ethical treatises led by Thirukkural and the twin classical Tamil epics Silappathikaram and Manimekalai illuminating urban port society and philosophical schools.',
    highlights: ['Thirukkural (1,330 couplets)', 'Silappathikaram', 'Manimekalai'],
    linkedIds: ['lit-001', 'lit-003', 'lit-004'],
    confidence: 'Scholarly Literary Consensus Range'
  },
  {
    id: 'period-06',
    era: 'Pallava & Early Pandya Rock-Cut / Bhakti Era',
    dateRange: 'c. 6th – 9th Century CE',
    startYear: 550,
    endYear: 900,
    summary: 'Transition to enduring granite architecture at Mahabalipuram and Kanchipuram alongside sweeping Tamil Bhakti hymnody (Thevaram, Thiruvasagam) and bilingual copper/stone grants.',
    highlights: ['Mahabalipuram UNESCO monuments', 'Pallava temple inscriptions', 'Thevaram & Thiruvasagam'],
    linkedIds: ['sculp-005', 'sculp-006', 'insc-009', 'insc-010', 'lit-009', 'lit-010'],
    confidence: 'Dated Monumental & Epigraphic Records'
  },
  {
    id: 'period-07',
    era: 'Imperial Chola Golden Age',
    dateRange: 'c. 9th – 13th Century CE',
    startYear: 850,
    endYear: 1280,
    summary: 'Apex of lost-wax Panchaloha bronze casting (Nataraja, Somaskanda, Uma), monumental granite temple vimanas, Tirumurai codification, and royal copper-plate charters.',
    highlights: ['Tiruvalangadu Nataraja bronze', 'Great Living Chola Temples', 'Chola copper plates', 'Classical Urainool commentaries'],
    linkedIds: ['sculp-001', 'sculp-002', 'sculp-003', 'sculp-007', 'insc-008', 'lit-011'],
    confidence: 'Exact Regnal Dates & Temple Inscriptions'
  },
  {
    id: 'period-08',
    era: 'Nayak & Maratha Guild Craft Flourishing',
    dateRange: '16th – 19th Century CE',
    startYear: 1500,
    endYear: 1900,
    summary: 'Expansion of Thanjavur courts and Sarasvati Mahal palm-leaf repositories alongside gilded Thanjavur paintings, Veenai luthier crafts, Kuthuvilakku foundries, and surviving Olai Chuvadi copying.',
    highlights: ['Sarasvati Mahal Library palm-leaf collections', 'Thanjavur Paintings & Art Plates', 'Thanjavur Veenai & Dolls'],
    linkedIds: ['ms-001', 'ms-003', 'craft-002', 'craft-005', 'craft-007', 'craft-014'],
    confidence: 'Archival & Royal Court Records'
  },
  {
    id: 'period-09',
    era: 'Modern Print Renaissance, GI Protection & Digital Heritage',
    dateRange: '19th Century CE – Present',
    startYear: 1812,
    endYear: 2026,
    summary: 'Rescue and critical printing of Sangam classics by Damodaram Pillai & U.V. Swaminatha Iyer, systematic ASI/TNSDA excavations, Geographical Indication (GI) protection for Tamil artisans, and open digital archiving.',
    highlights: ['1812 Thirukkural & 1894 Purananuru prints', 'GI registration of Tamil handicrafts', 'Tamil Virtual Academy & Keezhadi Museum'],
    linkedIds: ['ms-002', 'ms-004', 'ms-005', 'lit-012', 'craft-001', 'craft-011', 'craft-013'],
    confidence: 'Documented Modern Historical & Institutional Records'
  }
];

