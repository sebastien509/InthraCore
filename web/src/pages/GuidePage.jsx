import { useState, useMemo } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ArticleGrid from '../components/ArticleGrid';
import { Link } from 'react-router-dom';

// Mock data
const allGuides = [
  {
    id: 1,
    title: "SLMs vs LLMs: When small models win on the edge",
    excerpt: "A practical framework for choosing small, local models for edge deployment.",
    image: "/covers/slms.jpg",
    category: "AI",
    date: "2025-09-23",
    author: "Sebastien Fenelon",
    slug: "slms-vs-llms",
    readingTime: "8 min",
    tags: ["SLM", "Edge AI", "Privacy"]
  },
  {
    id: 2,
    title: "Privacy Receipts: Runtime Evidence for AI Compliance",
    excerpt: "Implementing verifiable privacy receipts for GDPR and EU AI Act compliance.",
    image: "/covers/privacy-receipts.jpg",
    category: "Compliance",
    date: "2025-09-30",
    author: "Sebastien Fenelon",
    slug: "privacy-receipts-compliance",
    readingTime: "10 min",
    tags: ["Privacy", "Compliance", "GDPR"]
  }
];

const allTags = ["SLM", "Edge AI", "Privacy", "Compliance", "GDPR", "Healthcare", "Industrial"];

export default function GuidesPage() {
  const [selectedTag, setSelectedTag] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGuides = useMemo(() => {
    return allGuides.filter(guide => {
      const matchesTag = selectedTag === 'all' || guide.tags.includes(selectedTag);
      const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          guide.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [selectedTag, searchQuery]);

  return (
    <Layout>
      <SEO
        title="Guides & Tutorials - InthraCore"
        description="Comprehensive guides on edge AI, privacy receipts, and sovereign AI systems."
        canonical="/guides"
      />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-blackOlive/5 to-blackOlive/10 py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-blackOlive mb-4">Guides</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth tutorials and frameworks for building privacy-first, edge-native AI systems.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Filters */}
            <div className="glass rounded-2xl p-6 mb-8 border border-brand-40">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search guides..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-white/50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-60"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => setSelectedTag('all')}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      selectedTag === 'all' 
                        ? 'bg-brand-80 text-white' 
                        : 'glass border border-brand-40 text-blackOlive hover:bg-brand-40'
                    }`}
                  >
                    All
                  </button>
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                        selectedTag === tag 
                          ? 'bg-brand-80 text-white' 
                          : 'glass border border-brand-40 text-blackOlive hover:bg-brand-40'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  {filteredGuides.length} guide{filteredGuides.length !== 1 ? 's' : ''} found
                </p>
                <select className="glass border border-brand-40 px-4 py-2 rounded-xl text-sm">
                  <option>Newest First</option>
                  <option>Most Read</option>
                </select>
              </div>
              
              {filteredGuides.length > 0 ? (
                <ArticleGrid articles={filteredGuides} />
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No guides found</h3>
                  <p className="text-gray-500">Try adjusting your search or filters</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4 space-y-6">
            {/* Newsletter */}
            <div className="glass border border-brand-40 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-blackOlive mb-3">Get New Guides</h3>
              <p className="text-gray-600 text-sm mb-4">Weekly insights on edge AI and privacy</p>
              <Link 
                to="/newsletter" 
                className="block w-full bg-gradient-to-r from-brand-80 to-brand-60 hover:from-brand-60 hover:to-brand-80 text-white py-3 px-4 rounded-xl text-sm font-medium text-center transition-all duration-200 hover:shadow-lg"
              >
                Subscribe
              </Link>
            </div>

            {/* Popular Tags */}
            <div className="glass border border-brand-40 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-blackOlive mb-3">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.slice(0, 8).map(tag => (
                  <Link
                    key={tag}
                    to={`/tags/${tag.toLowerCase()}`}
                    className="bg-brand-40 hover:bg-brand-60 text-blackOlive px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}