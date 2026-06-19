// src/components/core/PeopleGrid.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PeopleGrid({ people }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {people.map((person) => (
        <motion.div
          key={person.id}
          variants={item}
          whileHover={{ y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link
            to={`/people/${person.slug}`}
            className="group relative block h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-gradient-to-br from-inthra-primary/20 to-inthra-secondary/20 ring-2 ring-white">
                {person.avatar ? (
                  <img src={person.avatar} alt={person.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-lg font-semibold text-inthra-primary">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 transition-colors group-hover:text-inthra-primary line-clamp-1">
                  {person.name}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-1">{person.role}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-1">
              {person.tags?.slice(0, 3).map(tag => (
                <span
                  key={tag}
                  className="rounded-full bg-inthra-primary/5 px-2 py-0.5 text-xs font-medium text-inthra-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="absolute bottom-4 right-4 opacity-0 transition-opacity group-hover:opacity-100">
              <svg className="h-5 w-5 text-inthra-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}