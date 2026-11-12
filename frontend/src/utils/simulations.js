/**
 * Frontend helpers for AI Identity Matching and Polygon Blockchain Verification.
 * Structured cleanly so live ML/Web3 endpoints can plug directly into these functions.
 */

export const AI_PROCESSING_STEPS = [
  'Extracting metadata & spectral vectors',
  'Generating 1536-dim semantic representation',
  'Searching Tamil heritage & global vector registry',
  'Calculating cosine similarity coefficient',
  'Generating identity recommendation'
];

export const BLOCKCHAIN_MINT_STEPS = [
  'Connecting to Polygon Amoy...',
  'Creating artifact hash...',
  'Submitting transaction...',
  'Transaction confirmed.'
];

const tokenize = (text = '') =>
  text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 1);

/**
 * Computes multi-attribute semantic similarity against existing registry records.
 */
export const computeArtifactSimilarity = (input, artifacts = []) => {
  const inputNameTokens = tokenize(`${input.name || ''} ${input.tamilName || ''}`);
  const inputDescTokens = tokenize(`${input.description || ''} ${input.category || ''} ${input.subCategory || ''}`);
  const inputOriginTokens = tokenize(`${input.origin || ''} ${input.district || ''}`);
  const inputMaterialTokens = tokenize(input.material || '');
  const inputPeriodTokens = tokenize(input.period || '');

  const scored = artifacts.map((art) => {
    const artNameTokens = new Set(tokenize(`${art.name || ''} ${art.tamilName || ''}`));
    const artDescTokens = new Set(
      tokenize(`${art.description || ''} ${art.category || ''} ${art.subCategory || ''} ${art.institution || ''}`)
    );
    const artOriginTokens = new Set(tokenize(`${art.origin || ''} ${art.district || ''}`));
    const artMaterialTokens = new Set(tokenize(art.material || ''));
    const artPeriodTokens = new Set(tokenize(art.period || ''));

    const overlapRatio = (tokens, targetSet) => {
      if (tokens.length === 0 || targetSet.size === 0) return 0;
      const hits = tokens.filter((t) => targetSet.has(t)).length;
      return hits / Math.max(tokens.length, 1);
    };

    const nameScore = overlapRatio(inputNameTokens, artNameTokens) * 42;
    const descScore = overlapRatio(inputDescTokens, artDescTokens) * 26;
    const originScore = overlapRatio(inputOriginTokens, artOriginTokens) * 14;
    const materialScore = overlapRatio(inputMaterialTokens, artMaterialTokens) * 12;
    const periodScore = overlapRatio(inputPeriodTokens, artPeriodTokens) * 6;

    let rawScore = Math.round(nameScore + descScore + originScore + materialScore + periodScore);

    if (
      input.name &&
      (art.name.toLowerCase().includes(input.name.toLowerCase()) ||
        input.name.toLowerCase().includes(art.name.split(' ')[0].toLowerCase()))
    ) {
      rawScore = Math.max(rawScore, 91);
    }

    const finalScore = Math.min(98, Math.max(12, rawScore));

    return {
      artifact: art,
      score: finalScore,
      breakdown: {
        visualMetadata: Math.min(99, Math.round(finalScore * 0.98)),
        originMatch: Math.round(overlapRatio(inputOriginTokens, artOriginTokens) * 100),
        materialMatch: Math.round(overlapRatio(inputMaterialTokens, artMaterialTokens) * 100)
      }
    };
  });

  scored.sort((a, b) => b.score - a.score);
  const topMatch = scored[0] || null;
  const isStrongMatch = topMatch && topMatch.score >= 70;

  return {
    topMatch,
    candidates: scored.slice(0, 3),
    isDuplicateLikely: isStrongMatch,
    recommendation: isStrongMatch
      ? `Strong archive alignment detected (${topMatch.artifact.gai} — ${topMatch.artifact.name}). Review existing provenance or cross-link this entry before issuing a new identity.`
      : 'No closely matching heritage record found in the registry. Ready to issue a new Global Artifact Identity (GAI).'
  };
};

export const generateMockTxHash = () => {
  const chars = '0123456789abcdef';
  let hash = '0x82af';
  for (let i = 0; i < 56; i++) {
    hash += chars[Math.floor(Math.random() * chars.length)];
  }
  return `${hash}92bc`;
};

export const generateMockBlockNumber = () => 28495000 + Math.floor(Math.random() * 5000);

const LOCATION_COORDS = [
  { keywords: ['adichanallur', 'athichanallur'], lat: 8.6347, lng: 77.8768 },
  { keywords: ['sivagalai'], lat: 8.6222, lng: 77.9719 },
  { keywords: ['keezhadi', 'keeladi'], lat: 9.8515, lng: 78.1985 },
  { keywords: ['arikamedu'], lat: 11.9019, lng: 79.8211 },
  { keywords: ['kodumanal'], lat: 11.1144, lng: 77.5236 },
  { keywords: ['korkai'], lat: 8.6470, lng: 78.0600 },
  { keywords: ['poompuhar', 'kaveripoompattinam'], lat: 11.1470, lng: 79.8520 },
  { keywords: ['uraiyur'], lat: 10.8240, lng: 78.6740 },
  { keywords: ['alagankulam'], lat: 9.3547, lng: 78.9692 },
  { keywords: ['mahabalipuram', 'mamallapuram', 'chengalpattu'], lat: 12.6165, lng: 80.1927 },
  { keywords: ['swamimalai', 'kumbakonam'], lat: 10.9557, lng: 79.3338 },
  { keywords: ['nachiarkoil'], lat: 10.9167, lng: 79.4422 },
  { keywords: ['athangudi', 'karaikudi', 'sivaganga'], lat: 10.1235, lng: 78.8287 },
  { keywords: ['nagercoil', 'vadasery', 'kanniyakumari', 'kanyakumari'], lat: 8.1833, lng: 77.4119 },
  { keywords: ['kallakurichi'], lat: 11.7384, lng: 78.9639 },
  { keywords: ['arumbavur', 'perambalur'], lat: 11.3917, lng: 78.7364 },
  { keywords: ['pathamadai', 'pattamadai', 'tirunelveli'], lat: 8.6656, lng: 77.5714 },
  { keywords: ['mangulam'], lat: 10.0258, lng: 78.2347 },
  { keywords: ['jambai', 'villupuram'], lat: 11.9667, lng: 79.1333 },
  { keywords: ['sittannavasal', 'pudukkottai'], lat: 10.4567, lng: 78.7253 },
  { keywords: ['pugalur', 'karur'], lat: 11.0785, lng: 78.0067 },
  { keywords: ['anaimalai'], lat: 9.9347, lng: 78.2028 },
  { keywords: ['tiruvalangadu', 'tiruvallur'], lat: 13.1286, lng: 79.7764 },
  { keywords: ['thanjavur', 'tanjore'], lat: 10.7870, lng: 79.1378 },
  { keywords: ['kanchipuram'], lat: 12.8342, lng: 79.7036 },
  { keywords: ['madurai'], lat: 9.9252, lng: 78.1198 },
  { keywords: ['thoothukudi', 'tuticorin'], lat: 8.7642, lng: 78.1348 },
  { keywords: ['erode'], lat: 11.3410, lng: 77.7172 },
  { keywords: ['nilgiris', 'ooty'], lat: 11.4102, lng: 76.6950 },
  { keywords: ['chidambaram', 'cuddalore'], lat: 11.3992, lng: 79.6935 },
  { keywords: ['puducherry', 'pondicherry'], lat: 11.9338, lng: 79.8350 },
  { keywords: ['tiruchirappalli', 'trichy'], lat: 10.7905, lng: 78.7047 },
  { keywords: ['chennai', 'madras', 'attirampakkam'], lat: 13.0732, lng: 80.2609 },
  { keywords: ['tamil nadu', 'tamilakam'], lat: 11.1271, lng: 78.6569 },
  { keywords: ['india'], lat: 20.5937, lng: 78.9629 }
];

export const resolveLocationCoords = (locationText = '', fallback = [11.1271, 78.6569]) => {
  const lower = locationText.toLowerCase();
  const match = LOCATION_COORDS.find((entry) => entry.keywords.some((kw) => lower.includes(kw)));
  return match ? [match.lat, match.lng] : fallback;
};
