import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function RelatedArticles({ articles, title = "Related Articles", maxItems = 3 }) {
  if (!articles || articles.length === 0) {
    return null;
  }

  const displayedArticles = articles.slice(0, maxItems);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="glass rounded-2xl p-6 border border-brand-40"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-2 h-2 bg-brand rounded-full"></div>
        <h3 className="font-semibold text-blackOlive text-lg">{title}</h3>
      </div>

      {/* Articles List */}
      <div className="space-y-4">
        {displayedArticles.map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            className="group"
          >
            <Link
              to={`/guides/${article.slug}`}
              className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/50 transition-all duration-200 group-hover:scale-[1.02]"
            >
              {/* Article Number/Icon */}
              <div className="flex-shrink-0 w-8 h-8 bg-brand-40 text-blackOlive rounded-lg flex items-center justify-center text-sm font-semibold group-hover:bg-brand-60 transition-colors">
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-blackOlive group-hover:text-brand transition-colors line-clamp-2 text-sm leading-snug mb-1">
                  {article.title}
                </h4>
                <p className="text-gray-600 text-xs line-clamp-2 mb-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  {article.readingTime && (
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {article.readingTime}
                    </span>
                  )}
                  {article.date && (
                    <span>{article.date}</span>
                  )}
                </div>
              </div>

              {/* Arrow Indicator */}
              <motion.div
                className="flex-shrink-0 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                whileHover={{ x: 2 }}
              >
                <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </Link>
          </motion.article>
        ))}
      </div>

      {/* View All Link */}
      {articles.length > maxItems && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="pt-4 mt-4 border-t border-gray-200"
        >
          <Link
            to="/guides"
            className="flex items-center justify-center gap-2 text-brand hover:text-brand-80 text-sm font-medium transition-colors group/link"
          >
            View All Articles
            <svg 
              className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      )}

      {/* Empty State (shouldn't show due to early return, but good practice) */}
      {displayedArticles.length === 0 && (
        <div className="text-center py-4">
          <div className="text-gray-400 text-3xl mb-2">📚</div>
          <p className="text-gray-500 text-sm">No related articles found</p>
        </div>
      )}
    </motion.div>
  );
}