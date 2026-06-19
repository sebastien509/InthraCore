// src/components/core/TrustBar.jsx
import { motion } from 'framer-motion';

const TrustBar = ({ badges = [] }) => {
  const defaultBadges = [
    { name: 'Privacy First', icon: '🔒' },
    { name: 'Accountability', icon: '📋' },
    { name: 'Open Source', icon: '🔄' },
    { name: 'Community Driven', icon: '🌍' },
  ];

  const items = badges.length ? badges : defaultBadges;

  return (
    <div className="border-b border-slate-100 bg-white/80 py-3 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          {items.map((badge, idx) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm"
            >
              <span>{badge.icon}</span> {badge.name}
            </motion.div>
          ))}
        </div>
        <div className="hidden text-xs text-slate-400 sm:block">
          Trusted by 450+ community members
        </div>
      </div>
    </div>
  );
};

export default TrustBar;