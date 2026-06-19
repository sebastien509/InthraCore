// src/components/core/ArticleGrid.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ArticleGrid = ({ articles = [] }) => {
  if (!articles.length) return null;

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, idx) => (
        <motion.article
          key={article.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
          viewport={{ once: true }}
          className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
        >
          <Link to={`/core/articles/${article.slug}`} className="block">
            {article.image && (
              <div className="mb-4 overflow-hidden rounded-xl">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}
            <div className="mb-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-inthra-primary/10 px-2 py-0.5 font-medium text-inthra-primary">
                {article.category || 'Article'}
              </span>
              <span className="text-slate-400">{article.date}</span>
              {article.readingTime && <span className="text-slate-400">{article.readingTime}</span>}
            </div>
            <h3 className="text-xl font-semibold text-slate-900 transition-colors group-hover:text-inthra-primary line-clamp-2">
              {article.title}
            </h3>
            <p className="mt-2 text-slate-600 line-clamp-3">{article.excerpt}</p>
            <div className="mt-4 flex items-center text-sm font-medium text-inthra-primary">
              Read article
              <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
};

export default ArticleGrid;