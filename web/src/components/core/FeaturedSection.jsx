// src/components/core/FeaturedSection.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FeaturedSection = ({ title, articles = [] }) => {
  if (!articles.length) return null;

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-baseline justify-between border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            {title}
          </h2>
          <Link to="/core/articles" className="text-sm font-medium text-inthra-primary hover:text-inthra-primary/80">
            View all →
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 3).map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <Link to={`/core/articles/${article.slug}`} className="block">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-full bg-inthra-primary/10 px-2.5 py-0.5 text-xs font-medium text-inthra-primary">
                    {article.category || 'Research'}
                  </span>
                  <span className="text-xs text-slate-400">{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 transition-colors group-hover:text-inthra-primary">
                  {article.title}
                </h3>
                <p className="mt-2 text-slate-600 line-clamp-2">{article.excerpt}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-inthra-primary">
                  Read more
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;