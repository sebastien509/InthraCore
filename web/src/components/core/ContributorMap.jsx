 // src/components/core/ContributorMap.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

const contributors = [
  { city: 'San Francisco', country: 'USA', x: 35, y: 25, role: 'Core Dev', name: 'Alice' },
  { city: 'Berlin', country: 'Germany', x: 55, y: 30, role: 'Researcher', name: 'Klaus' },
  { city: 'Nairobi', country: 'Kenya', x: 52, y: 55, role: 'Educator', name: 'Wanjiku' },
  { city: 'São Paulo', country: 'Brazil', x: 30, y: 68, role: 'Advocate', name: 'Carlos' },
  { city: 'Mumbai', country: 'India', x: 68, y: 45, role: 'Documentation', name: 'Priya' },
  { city: 'Seoul', country: 'Korea', x: 75, y: 32, role: 'Compliance', name: 'Min-jun' },
  { city: 'Sydney', country: 'Australia', x: 85, y: 70, role: 'Community Lead', name: 'Zoe' },
  { city: 'Cape Town', country: 'South Africa', x: 55, y: 68, role: 'Translator', name: 'Thabo' },
];

const ContributorMap = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
    >
      <svg viewBox="0 0 800 500" className="h-auto w-full">
        <rect width="800" height="500" fill="#f8fafc" className="dark:fill-slate-800" rx="16" />
        <text x="400" y="250" textAnchor="middle" fill="#94a3b8" fontSize="14">🌍 World map placeholder</text>
        {contributors.map((c, idx) => (
          <g key={idx}>
            <circle
              cx={c.x * 7.5 + 20}
              cy={c.y * 5 + 20}
              r="8"
              fill="#4CAF50"  // inthra-primary
              className="cursor-pointer transition-all hover:r-12"
              onMouseEnter={() => setHovered(c)}
              onMouseLeave={() => setHovered(null)}
            />
            {hovered === c && (
              <foreignObject x={c.x * 7.5} y={c.y * 5 - 30} width="160" height="60">
                <div className="rounded-lg bg-white p-2 text-xs shadow-lg ring-1 ring-slate-200">
                  <p className="font-bold text-inthra-primary">{c.name}</p>
                  <p className="text-slate-600">{c.role}</p>
                  <p className="text-slate-400">{c.city}, {c.country}</p>
                </div>
              </foreignObject>
            )}
          </g>
        ))}
      </svg>
      <p className="mt-4 text-center text-xs text-slate-400">Hover over any dot to see contributor details</p>
    </motion.div>
  );
};

export default ContributorMap;