// src/components/WorkingGroups.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const groups = [
  { id: 1, name: "Privacy Research", icon: "🔐", members: 120, desc: "Advance differential privacy and local inference techniques." },
  { id: 2, name: "Education", icon: "📚", members: 89, desc: "Create open curricula, tutorials, and certification paths." },
  { id: 3, name: "Healthcare", icon: "🏥", members: 64, desc: "Build compliance toolkits for medical edge AI." },
  { id: 4, name: "Audit & Accountability", icon: "📊", members: 45, desc: "Develop verifiable audit trails and receipts." },
];

const WorkingGroups = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">Working Groups</h2>
          <Link to="/community/working-groups" className="text-indigo-600 hover:underline">View all →</Link>
        </div>
        <div className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6">
          {groups.map((group) => (
            <div
              key={group.id}
              className="min-w-[280px] snap-start rounded-2xl border border-indigo-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-indigo-800 dark:bg-slate-900"
            >
              <div className="mb-3 text-4xl">{group.icon}</div>
              <h3 className="text-xl font-semibold dark:text-white">{group.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{group.members} members</p>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{group.desc}</p>
              <Link
                to={`/community/working-groups/${group.name.toLowerCase().replace(/\s/g, "-")}`}
                className="mt-4 inline-block text-sm font-medium text-indigo-600 hover:underline"
              >
                Join this group →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WorkingGroups;