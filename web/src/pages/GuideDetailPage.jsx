import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import InlineCTA from '../components/InlineCTA';
import TableOfContents from '../components/TableOfContents';
import AuthorCard from '../components/AuthorCard';
import RelatedArticles from '../components/RelatedArticles';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Mock data - in real app, this would come from MDX
const guideData = {
  'slms-vs-llms': {
    id: 1,
    title: "SLMs vs LLMs: When small models win on the edge",
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Small Language Models (SLMs) are revolutionizing edge AI deployment by offering comparable performance to larger models while maintaining efficiency and privacy.</p>
      
      <h2 id="performance-benchmarks">Performance Benchmarks</h2>
      <p>Recent studies show that SLMs can achieve 80% of the performance of larger models while using only 10% of the computational resources.</p>
      
      <h2 id="implementation-strategy">Implementation Strategy</h2>
      <p>When deploying SLMs at the edge, consider these key factors for optimal performance and user experience.</p>
    `,
    excerpt: "A practical framework for choosing small, local models for edge deployment.",
    image: "/covers/slms.jpg",
    category: "AI",
    date: "2025-09-23",
    author: "Sebastien Fenelon",
    slug: "slms-vs-llms",
    readingTime: "8 min",
    tags: ["SLM", "Edge AI", "Privacy", "Machine Learning", "Optimization"],
    cta: {
      label: "Download Edge AI Checklist",
      href: "/assets/edge-checklist.pdf"
    }
  }
};

const relatedGuides = [
  {
    id: 2,
    title: "Privacy Receipts: Runtime Evidence for AI Compliance",
    excerpt: "Implementing verifiable privacy receipts for GDPR and EU AI Act compliance in edge AI systems.",
    slug: "privacy-receipts-compliance",
    readingTime: "10 min",
    date: "2025-09-30"
  },
  {
    id: 3,
    title: "Edge Computing Architecture for AI Workloads",
    excerpt: "Design patterns and best practices for deploying AI models at the edge with minimal latency.",
    slug: "edge-computing-architecture",
    readingTime: "12 min",
    date: "2025-09-25"
  },
  {
    id: 4,
    title: "Model Optimization Techniques for Resource-Constrained Devices",
    excerpt: "Advanced techniques for reducing model size and improving inference speed on edge devices.",
    slug: "model-optimization-techniques",
    readingTime: "15 min",
    date: "2025-09-20"
  }
];

export default function GuideDetailPage() {
  const { slug } = useParams();
  const guide = guideData[slug];

  if (!guide) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-blackOlive mb-4">Guide Not Found</h1>
          <Link to="/guides" className="text-brand hover:text-brand-80">
            Back to Guides
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={guide.title}
        description={guide.excerpt}
        canonical={`/guides/${slug}`}
        type="article"
        publishedTime={guide.date}
        author={guide.author}
        tags={guide.tags}
      />
      
      <article className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <nav className="mb-8 flex items-center text-sm text-gray-500">
                <Link to="/" className="hover:text-brand transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/guides" className="hover:text-brand transition-colors">Guides</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-400 truncate">{guide.title}</span>
              </nav>

              {/* Article Header */}
              <header className="mb-8">
                <div className="flex items-center gap-4 mb-4 flex-wrap">
                  <span className="bg-brand-80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {guide.category}
                  </span>
                  <span className="text-gray-500">{guide.date}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500">{guide.readingTime}</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-blackOlive mb-6 leading-tight">
                  {guide.title}
                </h1>
                
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {guide.excerpt}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {guide.tags.map(tag => (
                    <Link
                      key={tag}
                      to={`/tags/${tag.toLowerCase()}`}
                      className="bg-brand-40 hover:bg-brand-60 text-blackOlive px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>

                <AuthorCard author={guide.author} />
              </header>

              {/* Featured Image */}
              <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p>Guide Cover Image</p>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none mb-8">
                <div dangerouslySetInnerHTML={{ __html: guide.content }} />
                
                {/* Inline CTA */}
                <InlineCTA 
                  label={guide.cta?.label} 
                  href={guide.cta?.href}
                  note="Get our comprehensive checklist for edge AI deployment."
                />
              </div>

              {/* Article Footer */}
              <footer className="pt-8 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-brand transition-colors p-2 rounded-lg hover:bg-gray-100">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>Save</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-brand transition-colors p-2 rounded-lg hover:bg-gray-100">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      <span>Share</span>
                    </button>
                  </div>
                  
                  <Link 
                    to="/guides"
                    className="bg-brand-80 hover:bg-brand-60 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  >
                    Back to Guides
                  </Link>
                </div>
              </footer>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-6">
              <TableOfContents content={guide.content} />
              <RelatedArticles articles={relatedGuides} />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}