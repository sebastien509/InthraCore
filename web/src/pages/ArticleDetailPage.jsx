import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import articlesData from '../data/articles.json';

export default function ArticleDetailPage() {
  const { slug } = useParams();
  const article = articlesData.articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F7F3]">
        <p className="text-[#06231C] text-xl">Article not found.</p>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt || article.hook}
        canonical={`/articles/${article.slug}`}
        type="article"
        publishedTime={article.date}
        author={article.author}
        tags={article.tags || []}
      />

      {/* ============ HERO ============ */}
      <section className="relative min-h-[50vh] flex items-end pb-16 bg-gradient-to-br from-[#06231C] to-[#10B981]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-black/30"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
          <Link to="/articles" className="text-white/70 hover:text-white text-sm mb-4 inline-block">
            ← Back to Research
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {article.title}
          </motion.h1>
          <div className="flex gap-4 text-white/80 text-sm">
            <span>{article.date}</span>
            <span>by {article.author}</span>
            <span>{article.readingTime} min read</span>
          </div>
        </div>
      </section>

      {/* ============ CONTENT ============ */}
      <section className="py-16 bg-[#F7F7F3]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-sm"
          >
            {article.image && (
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
              />
            )}
            <div className="prose prose-lg max-w-none">
              {article.body.map((paragraph, idx) => (
                <p key={idx} className="text-[#06231C] leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
              {article.closing && (
                <blockquote className="border-l-4 border-[#10B981] pl-4 italic text-[#06231C]/80">
                  {article.closing}
                </blockquote>
              )}
            </div>
            {article.tags && (
              <div className="flex flex-wrap gap-2 mt-8">
                {article.tags.map((tag) => (
                  <span key={tag} className="bg-[#F7F7F3] text-[#06231C] px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}