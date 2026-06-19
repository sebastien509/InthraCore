import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PeopleGrid({ people }) {
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
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {people.map((person, index) => (
        <motion.div
          key={person.id}
          variants={item}
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to={`/people/${person.slug}`}
            className="glass rounded-2xl p-6 border border-brand-40 hover:border-brand-60 hover:shadow-xl transition-all duration-300 group block h-full"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className="relative w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-white/30 group-hover:ring-brand/40 transition-all duration-300"
              >
                <div className="w-full h-full bg-gradient-to-br from-brand-60 to-brand-80 flex items-center justify-center text-white font-semibold text-lg">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </div>
              </motion.div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-blackOlive group-hover:text-brand transition-colors line-clamp-1">
                  {person.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-1">{person.role}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1">
              {person.tags.map(tag => (
                <span
                  key={tag}
                  className="bg-brand-40 text-blackOlive px-2 py-1 rounded-lg text-xs font-medium transition-colors group-hover:bg-brand-60"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Hover indicator */}
            <motion.div
              className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: 10 }}
              whileHover={{ x: 0 }}
            >
              <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}