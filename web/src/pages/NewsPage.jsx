import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import newsData from '../data/news.json';

// Floating particles configuration
const particles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  size: Math.random() * 6 + 4,
  duration: Math.random() * 4 + 6,
  delay: Math.random() * 2,
}));

export default function NewsPage() {
  return (
    <>
      <SEO title="Newsroom – InthraCore" description="Decrypting global AI regulations and sovereign AI news." />

      {/* ============== HERO (half page) ============== */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#06231C] via-[#0a3b2e] to-[#10B981]">
        {/* Floating particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Animated background shapes */}
        <motion.div
          className="absolute top-1/4 -left-20 w-64 h-64 bg-[#10B981]/20 rounded-full blur-3xl"
          animate={{ x: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#06231C]/30 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm tracking-[0.3em] uppercase text-[#10B981] font-medium mb-4"
          >
            Stay Informed
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            The Newsroom
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Operational updates, regulation analysis, and industry insights – decrypted for builders.
          </motion.p>
        </div>
      </section>

      {/* ============== ARTICLES GRID ============== */}
      <section className="py-20 bg-[#F7F7F3]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-[#06231C] mb-10"
          >
            Latest News
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.news.map((article, idx) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <Link to={`/news/${article.slug}`} className="block">
                  <div className="aspect-[16/9] bg-[#E5E7EB] relative overflow-hidden">
                    {article.thumbnail ? (
                      <img
                        src={article.thumbnail}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#10B981]/20 to-[#06231C]/20 flex items-center justify-center">
                        <span className="text-[#10B981] text-4xl font-bold">N</span>
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#10B981] text-white text-xs px-3 py-1 rounded-full font-medium uppercase tracking-wider">
                        News
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#06231C] mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-[#6B7280] mb-4 line-clamp-3">{article.excerpt || article.hook}</p>
                    <div className="flex justify-between items-center text-sm text-[#6B7280]">
                      <span>{article.date}</span>
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