import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function FeaturedSection({ articles }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
    >
      {articles.map((article, index) => (
        <motion.article
          key={article.id}
          variants={item}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="group relative"
        >
          <Link
            to={`/${article.type === 'news' ? 'news' : 'guides'}/${article.slug}`}
            className="block"
          >
            {/* Main Card */}
            <div className="glass rounded-3xl overflow-hidden border-2 border-white/30 hover:border-brand/40 transition-all duration-500 shadow-xl hover:shadow-2xl">
              
              {/* Image Section */}
              <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                {article.image ? (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-80 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {article.category}
                  </span>
                </div>
                
                {/* Featured Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-heritageRed to-burntOrange text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                    Featured
                  </span>
                </div>

                {/* Reading Time */}
                {article.readingTime && (
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black/70 text-white px-3 py-1 rounded-lg text-sm backdrop-blur-sm">
                      {article.readingTime}
                    </span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <span>{article.date}</span>
                  {article.author && (
                    <>
                      <span>•</span>
                      <span className="text-brand font-medium">By {article.author}</span>
                    </>
                  )}
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-blackOlive mb-4 group-hover:text-brand transition-colors leading-tight">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Tags */}
                {article.tags && article.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="bg-brand-40 text-blackOlive px-3 py-1 rounded-lg text-sm font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Read More CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-brand font-semibold text-lg flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Read Full Guide
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  
                  {/* Save/Bookmark */}
                  <button 
                    className="text-gray-400 hover:text-brand transition-colors p-2 hover:bg-brand-40 rounded-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      // Handle save functionality
                    }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-brand/20 to-heritageRed/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
          </Link>
        </motion.article>
      ))}
    </motion.section>
  );
}