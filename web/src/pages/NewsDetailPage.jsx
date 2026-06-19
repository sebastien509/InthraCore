import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import newsData from '../data/news.json';

export default function NewsDetailPage() {
  const { slug } = useParams();
  const article = newsData.news.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F7F3]">
        <p className="text-[#06231C] text-xl">Article not found.</p>
      </div>
    );
  }

  return (
    <>
      <SEO title={article.title} description={article.description} canonical={`/news/${article.slug}`} />

      {/* Hero with background image */}
      <div
        className="relative bg-cover bg-center bg-no-repeat py-20"
        style={{ backgroundImage: `url(${article.image || article.thumbnail})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#06231C]/90 to-[#06231C]/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-white">
          <Link to="/news" className="text-white/70 hover:text-white text-sm mb-4 inline-block">
            ← Back to Newsroom
          </Link>
          <p className="text-sm uppercase tracking-[0.3em] text-[#10B981] mt-4">{article.category}</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">{article.title}</h1>
          <div className="flex gap-4 mt-4 text-sm text-white/70">
            <span>{article.date}</span>
            <span>{article.readingTime}</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            {/* Hook */}
            {article.hook && (
              <p className="lead text-2xl text-[#06231C] font-medium mb-8 border-l-4 border-[#10B981] pl-4">
                {article.hook}
              </p>
            )}

            {/* Body */}
            {article.body.map((paragraph, idx) => (
              <p key={idx} className="text-[#06231C] leading-relaxed mb-6">{paragraph}</p>
            ))}

            {/* Closing */}
            {article.closing && (
              <blockquote className="border-l-4 border-[#10B981] pl-4 italic text-[#06231C]/80 mb-8">
                {article.closing}
              </blockquote>
            )}

            {/* Quotes */}
            {article.quotes && article.quotes.length > 0 && (
              <div className="my-10 space-y-6">
                <h2 className="text-xl font-bold text-[#06231C]">What They’re Saying</h2>
                {article.quotes.map((q, i) => (
                  <div key={i} className="bg-[#F7F7F3] p-6 rounded-2xl">
                    <p className="italic text-[#06231C]">“{q.quote}”</p>
                    <p className="mt-3 text-sm text-[#6B7280]">
                      – {q.name}, {q.title}, {q.company}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Technical Highlights */}
            {article.technicalHighlights && article.technicalHighlights.length > 0 && (
              <div className="my-10">
                <h2 className="text-xl font-bold text-[#06231C] mb-4">Technical Highlights</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {article.technicalHighlights.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#06231C]">
                      <svg className="w-5 h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Industry Context */}
            {article.industryContext && (
              <div className="my-10 bg-[#F7F7F3] rounded-2xl p-6">
                <h2 className="text-xl font-bold text-[#06231C] mb-4">Industry Context</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[#10B981]">Problem</p>
                    <p className="text-[#6B7280]">{article.industryContext.problem}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#10B981]">Trend</p>
                    <p className="text-[#6B7280]">{article.industryContext.trend}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#10B981]">Impact</p>
                    <p className="text-[#6B7280]">{article.industryContext.impact}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tags */}
          {article.tags && (
            <div className="mt-8 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="bg-[#F7F7F3] text-[#06231C] px-3 py-1 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </>
  );
}