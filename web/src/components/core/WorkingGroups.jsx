// src/components/core/WorkingGroups.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WorkingGroups = ({ groups = [] }) => {
  if (!groups.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8"
    >
      <div className="flex items-baseline justify-between border-b border-slate-200 pb-4">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Working Groups</h2>
        <Link to="/community/working-groups" className="text-sm font-medium text-inthra-primary hover:text-inthra-primary/80">
          View all →
        </Link>
      </div>
      <div className="mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6">
        {groups.map((group) => (
          <div
            key={group.id}
            className="min-w-[280px] snap-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="mb-3 text-4xl">{group.icon || '🤝'}</div>
            <h3 className="text-xl font-semibold text-slate-900">{group.name}</h3>
            <p className="mt-1 text-sm text-slate-500">{group.members || 0} members</p>
            <p className="mt-2 text-slate-600 line-clamp-2">{group.description}</p>
            <Link
              to={`/community/working-groups/${group.slug || group.name.toLowerCase().replace(/\s/g, '-')}`}
              className="mt-4 inline-flex items-center text-sm font-medium text-inthra-primary hover:underline"
            >
              Join this group
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkingGroups;