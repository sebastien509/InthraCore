import { useParams } from 'react-router-dom';
import { useState, useMemo } from 'react';
import Layout from '../components/ui/Layout';
import SEO from '../components/SEO';
import ArticleGrid from '../components/ArticleGrid';
import { Link } from 'react-router-dom';

// Mock data - in real app, this would come from API
const allContent = [
  // Guides
  {
    id: 1,
    title: "SLMs vs LLMs: When small models win on the edge",
    excerpt: "A practical framework for choosing small, local models for edge deployment.",
    type: "guide",
    tags: ["SLM", "Edge AI", "Privacy"],
    date: "2025-09-23",
    readingTime: "8 min",
    slug: "slms-vs-llms"
  },
  {
    id: 2,
    title: "Privacy Receipts: Runtime Evidence for AI Compliance",
    excerpt: "Implementing verifiable privacy receipts for GDPR compliance.",
    type: "guide",
    tags: ["Privacy", "Compliance", "GDPR"],
    date: "2025-09-30",
    readingTime: "10 min",
    slug: "privacy-receipts-compliance"
  },
  // News
  {
    id: 3,
    title: "InthraOS speaks at Edge Summit",
    excerpt: "Talk on privacy receipts and on-device inference.",
    type: "news",
    tags: ["Events", "Edge AI"],
    date: "2025-10-02",
    readingTime: "4 min",
    slug: "edge-summit-appearance"
  },
  {
    id: 4,
    title: "New Healthcare Partnership",
    excerpt: "Collaborating with major healthcare provider.",
    type: "news",
    tags: ["Partnership", "Healthcare"],
    date: "2025-09-28",
    readingTime: "3 min",
    slug: "healthcare-partnership"
  },
  // Podcasts
  {
    id: 5,
    title: "Why privacy receipts matter",
    excerpt: "Runtime evidence beats promises for AI compliance.",
    type: "podcast",
    tags: ["Privacy", "Compliance", "Edge AI"],
    date: "2025-10-10",
    readingTime: "45 min",
    slug: "ep-03-privacy-receipts"
  }
];

const popularTags = [
  "Edge AI", "Privacy", "Compliance", "SLM", "Events", 
  "Healthcare", "Partnership", "AI Ethics", "Research"
];

export default function TagsPage() {
  const { tag } = useParams();
  const [selectedType, setSelectedType] = useState('all');

  const filteredContent = useMemo(() => {
    let filtered = allContent.filter(item => 
      item.tags.map(t => t.toLowerCase()).includes(tag?.toLowerCase())
    );

    if (selectedType !== 'all') {
      filtered = filtered.filter(item => item.type === selectedType);
    }

    return filtered;
  }, [tag, selectedType]);

  const contentTypes = [
    { value: 'all', label: 'All Content', count: filteredContent.length },
    { value: 'guide', label: 'Guides', count: allContent.filter(item => item.type === 'guide' && item.tags.map(t => t.toLowerCase()).includes(tag?.toLowerCase())).length },
    { value: 'news', label: 'News', count: allContent.filter(item => item.type === 'news' && item.tags.map(t => t.toLowerCase()).includes(tag?.toLowerCase())).length },
    { value: 'podcast', label: 'Podcasts', count: allContent.filter(item => item.type === 'podcast' && item.tags.map(t => t.toLowerCase()).includes(tag?.toLowerCase())).length }
  ];

  if (!tag) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-blackOlive mb-4">Tag Not Specified</h1>
          <Link to="/" className="text-brand hover:text-brand-80">
            Back to Home
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`#${tag} - InthraCore`}
        description={`Explore content tagged with ${tag} on InthraCore.`}
        canonical={`/tags/${tag}`}
      />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-brand/5 to-brand/10 py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-brand/20 text-brand px-4 py-2 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              Tag
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-blackOlive mb-4">#{tag}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredContent.length} piece{filteredContent.length !== 1 ? 's' : ''} of content tagged with {tag}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Filters */}
            <div className="glass rounded-2xl p-6 mb-8 border border-brand-40">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="flex gap-2 flex-wrap">
                  {contentTypes.map(type => (
                    <button
                      key={type.value}
                      onClick={() => setSelectedType(type.value)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                        selectedType === type.value 
                          ? 'bg-brand-80 text-white' 
                          : 'glass border border-brand-40 text-blackOlive hover:bg-brand-40'
                      }`}
                    >
                      {type.label} ({type.count})
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results */}
            {filteredContent.length > 0 ? (
              <ArticleGrid articles={filteredContent} />
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No content found</h3>
                <p className="text-gray-500 mb-4">No {selectedType !== 'all' ? selectedType : ''} content tagged with {tag}</p>
                <Link 
                  to="/"
                  className="text-brand hover:text-brand-80 font-medium"
                >
                  Browse all content →
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 space-y-6">
              {/* Popular Tags */}
              <div className="glass rounded-2xl p-6 border border-brand-40">
                <h3 className="text-lg font-semibold text-blackOlive mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map(popularTag => (
                    <Link
                      key={popularTag}
                      to={`/tags/${popularTag.toLowerCase()}`}
                      className={`bg-brand-40 hover:bg-brand-60 text-blackOlive px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                        popularTag.toLowerCase() === tag.toLowerCase() ? 'ring-2 ring-brand-80' : ''
                      }`}
                    >
                      #{popularTag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="glass rounded-2xl p-6 border border-brand-40">
                <h3 className="text-lg font-semibold text-blackOlive mb-3">Stay Updated</h3>
                <p className="text-gray-600 text-sm mb-4">Get new content on topics you care about</p>
                <Link 
                  to="/newsletter" 
                  className="block w-full bg-gradient-to-r from-brand-80 to-brand-60 hover:from-brand-60 hover:to-brand-80 text-white py-3 px-4 rounded-xl text-sm font-medium text-center transition-all duration-200 hover:shadow-lg"
                >
                  Subscribe to Newsletter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}