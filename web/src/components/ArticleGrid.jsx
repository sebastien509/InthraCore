import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ArticleGrid({ articles, title, showViewAll = true }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="w-full">
      {title && (
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-blackOlive">{title}</h2>
          {showViewAll && (
            <Link 
              to="/guides" 
              className="glass border border-brand-40 px-6 py-3 rounded-2xl text-blackOlive hover:bg-brand-40 transition-all duration-200 hover:scale-105"
            >
              View All
            </Link>
          )}
        </div>
      )}
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {articles.map((article, index) => (
          <motion.article
            key={article.id}
            variants={item}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="glass rounded-2xl overflow-hidden border border-brand-40 hover:border-brand-60 hover:shadow-xl transition-all duration-300 group"
          >
            {/* Image */}
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
              {article.image ? (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
              
              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-brand-80 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {article.category}
                </span>
              </div>
              
              {/* Reading Time */}
              {article.readingTime && (
                <div className="absolute top-3 right-3">
                  <span className="bg-black/60 text-white px-2 py-1 rounded text-xs">
                    {article.readingTime}
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                <span>{article.date}</span>
                {article.author && (
                  <>
                    <span>•</span>
                    <span>By {article.author}</span>
                  </>
                )}
              </div>

              <h3 className="font-semibold text-blackOlive mb-3 group-hover:text-brand transition-colors line-clamp-2 text-lg">
                <Link to={`/${article.type === 'news' ? 'news' : 'guides'}/${article.slug}`}>
                  {article.title}
                </Link>
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                {article.excerpt}
              </p>

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 3).map(tag => (
                    <Link
                      key={tag}
                      to={`/tags/${tag.toLowerCase()}`}
                      className="bg-brand-40 text-blackOlive px-2 py-1 rounded-lg text-xs font-medium hover:bg-brand-60 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                  {article.tags.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs">
                      +{article.tags.length - 3}
                    </span>
                  )}
                </div>
              )}

              {/* Read More Link */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <Link
                  to={`/${article.type === 'news' ? 'news' : 'guides'}/${article.slug}`}
                  className="text-brand hover:text-brand-80 font-medium text-sm flex items-center gap-1 group/link"
                >
                  Read More
                  <svg 
                    className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                {/* Save/Bookmark Button */}
                <button className="text-gray-400 hover:text-brand transition-colors p-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Empty State */}
      {articles.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📝</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
          <p className="text-gray-500">Check back later for new content</p>
        </div>
      )}
    </section>
  );
}