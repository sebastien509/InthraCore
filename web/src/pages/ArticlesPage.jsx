import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import articlesData from '../data/articles.json';

// Same floating particle and animated background as NewsPage hero for consistency
const particles = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  size: Math.random() * 8 + 4,
  duration: Math.random() * 5 + 7,
  delay: Math.random() * 2,
}));

export default function ArticlesPage() {
  return (
    <>
      <SEO title="Research & Articles – InthraCore" description="Scientific proofs, frameworks, and ROI analyses for privacy-first AI." />

      {/* ============== HERO ============== */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#06231C] via-[#0a3b2e] to-[#10B981]">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity }}
          />
        ))}
        <motion.div
          className="absolute -left-32 top-1/3 w-72 h-72 bg-[#10B981]/20 rounded-full blur-3xl"
          animate={{ x: [0, 60, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute -right-32 bottom-1/3 w-96 h-96 bg-[#06231C]/40 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm tracking-[0.3em] uppercase text-[#10B981] font-medium mb-4"
          >
            Scientific Rigour
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Research & Articles
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Mathematical frameworks, privacy proofs, and ROI analyses – no hype, just substance.
          </motion.p>
        </div>
      </section>

      {/* ============== ARTICLES GRID ============== */}
      <section className="py-20 bg-[#F7F7F3]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-[#06231C] mb-10"
          >
            Latest Research
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articlesData.articles.map((article, idx) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <Link to={`/articles/${article.slug}`} className="block">
                  <div className="aspect-[16/10] bg-[#E5E7EB] relative overflow-hidden">
                    {article.thumbnail ? (
                      <img
                        src={article.thumbnail}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#10B981]/20 to-[#06231C]/20 flex items-center justify-center">
                        <span className="text-[#10B981] text-4xl font-bold">R</span>
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#06231C] text-white text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wider">
                        {article.category || 'Research'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#06231C] mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-[#6B7280] mb-4 line-clamp-3">{article.excerpt || article.hook}</p>
                    <div className="flex justify-between items-center text-sm text-[#6B7280]">
                      <span>{article.date} · {article.readingTime} min read</span>
                      <span className="text-[#10B981] font-medium">Read →</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}