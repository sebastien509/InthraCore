// src/lib/content.js
// MDX loader – replace with your actual data source later

// ---------- Mock data (replace with real MDX imports when ready) ----------
const mockGuides = [
  {
    slug: 'slms-vs-llms',
    title: 'SLMs vs LLMs: When small models win on the edge',
    excerpt: 'A practical framework for choosing small, local models for edge deployment.',
    content: '<h2>Introduction</h2><p>Small Language Models (SLMs) are revolutionizing edge AI...</p>',
    date: '2025-09-23',
    author: 'Sebastien Fenelon',
    tags: ['SLM', 'Edge AI', 'Privacy']
  },
  {
    slug: 'privacy-receipts-compliance',
    title: 'Privacy Receipts: Building Trust Through Transparency',
    excerpt: 'Implement verifiable privacy receipts for GDPR and EU AI Act compliance.',
    content: '<p>Privacy receipts provide runtime evidence...</p>',
    date: '2025-09-30',
    author: 'Sebastien Fenelon',
    tags: ['Privacy', 'GDPR', 'Compliance']
  }
];

const mockNews = [
  {
    slug: 'edge-summit-appearance',
    title: 'InthraOS speaks at Edge Summit',
    excerpt: 'Talk on privacy receipts and on-device inference at the Edge AI Conference.',
    content: '<p>We recently presented at the Edge AI Conference 2025...</p>',
    date: '2025-10-02'
  },
  {
    slug: 'healthcare-partnership',
    title: 'New Partnership: Healthcare AI Integration',
    excerpt: 'Collaborating with major healthcare provider for on-premise AI deployment.',
    content: '<p>We are excited to announce...</p>',
    date: '2025-09-28'
  }
];

const mockPodcasts = [
  {
    slug: 'privacy-receipts-deep-dive',
    title: 'Privacy Receipts Deep Dive',
    excerpt: 'How to prove compliance without leaking data.',
    content: '<p>Show notes and transcript...</p>',
    date: '2025-10-15',
    duration: '42:15',
    audioUrl: '/podcasts/ep3.mp3'
  }
];

const mockPeople = [
  {
    slug: 'sebastien-fenelon',
    name: 'Sebastien Fenelon',
    role: 'Founder, InthraOS / InthraCore',
    bio: 'Building privacy-first, edge-native AI systems.',
    tags: ['Founder', 'Edge AI', 'Privacy']
  }
];

// ---------- Generic getters ----------
function getAll(type) {
  switch (type) {
    case 'guides': return mockGuides;
    case 'news': return mockNews;
    case 'podcasts': return mockPodcasts;
    case 'people': return mockPeople;
    default: return [];
  }
}

function getBySlug(type, slug) {
  const items = getAll(type);
  return items.find(item => item.slug === slug);
}

// ---------- Named exports for each content type ----------
export const getAllGuides = () => getAll('guides');
export const getGuideBySlug = (slug) => getBySlug('guides', slug);

export const getAllNews = () => getAll('news');
export const getNewsBySlug = (slug) => getBySlug('news', slug);

export const getAllPodcasts = () => getAll('podcasts');
export const getPodcastBySlug = (slug) => getBySlug('podcasts', slug);

export const getAllPeople = () => getAll('people');
export const getPersonBySlug = (slug) => getBySlug('people', slug);