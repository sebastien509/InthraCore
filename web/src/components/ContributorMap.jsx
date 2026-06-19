// src/components/ContributorMap.jsx
import { useState } from "react";
import { motion } from "framer-motion";

// Mock data for contributor locations
const contributors = [
  { city: "San Francisco", country: "USA", x: 35, y: 25, role: "Core Dev", name: "Alice" },
  { city: "Berlin", country: "Germany", x: 55, y: 30, role: "Researcher", name: "Klaus" },
  { city: "Nairobi", country: "Kenya", x: 52, y: 55, role: "Educator", name: "Wanjiku" },
  { city: "São Paulo", country: "Brazil", x: 30, y: 68, role: "Advocate", name: "Carlos" },
  { city: "Mumbai", country: "India", x: 68, y: 45, role: "Documentation", name: "Priya" },
  { city: "Seoul", country: "Korea", x: 75, y: 32, role: "Compliance", name: "Min-jun" },
  { city: "Sydney", country: "Australia", x: 85, y: 70, role: "Community Lead", name: "Zoe" },
  { city: "Cape Town", country: "South Africa", x: 55, y: 68, role: "Translator", name: "Thabo" },
];

const ContributorMap = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">Global Contributor Map</h2>
        <p className="mx-auto mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
          Over 200 contributors from 25+ countries building the movement.
        </p>
        <div className="relative mx-auto mt-8 w-full max-w-4xl overflow-hidden rounded-2xl border border-indigo-100 bg-white/50 p-4 shadow-md dark:border-indigo-800/50 dark:bg-slate-900/50">
          <svg viewBox="0 0 800 500" className="h-auto w-full bg-[url('/world-map.svg')] bg-cover">
            {/* Background map placeholder – you can replace with actual world map SVG */}
            <rect width="800" height="500" fill="#e2e8f0" className="dark:fill-slate-800" rx="16" />
            <text x="400" y="250" textAnchor="middle" fill="#94a3b8" fontSize="14">🌍 Interactive map placeholder</text>
            {contributors.map((c, idx) => (
              <g key={idx}>
                <circle
                  cx={c.x * 7.5 + 20}
                  cy={c.y * 5 + 20}
                  r="8"
                  fill="#4f46e5"
                  className="cursor-pointer transition-all hover:r-12 dark:fill-indigo-500"
                  onMouseEnter={() => setHovered(c)}
                  onMouseLeave={() => setHovered(null)}
                />
                {hovered === c && (
                  <foreignObject x={c.x * 7.5} y={c.y * 5 - 30} width="140" height="50">
                    <div className="rounded-lg bg-white p-2 text-xs shadow-lg dark:bg-slate-800">
                      <p className="font-bold">{c.name}</p>
                      <p>{c.role}</p>
                      <p className="text-slate-500">{c.city}, {c.country}</p>
                    </div>
                  </foreignObject>
                )}
              </g>
            ))}
          </svg>
        </div>
        <p className="mt-4 text-sm text-slate-500">Hover over any dot to see contributor role</p>
      </div>
    </motion.section>
  );
};

export default ContributorMap;