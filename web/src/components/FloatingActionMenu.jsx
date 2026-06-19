// src/components/FloatingActionMenu.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingActionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { name: "Newsletter", icon: "📧", link: "/newsletter", color: "bg-indigo-500" },
    { name: "GitHub", icon: "🐙", link: "https://github.com/inthraos", external: true, color: "bg-slate-700" },
    { name: "Discord", icon: "💬", link: "https://discord.gg/inthraos", external: true, color: "bg-indigo-600" },
    { name: "Contributor Map", icon: "🌍", link: "#contributor-map", color: "bg-emerald-500" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-16 right-0 mb-2 flex flex-col gap-2"
          >
            {actions.map((action, idx) => (
              <motion.a
                key={action.name}
                href={action.link}
                target={action.external ? "_blank" : "_self"}
                rel="noopener noreferrer"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                className={`flex items-center gap-2 rounded-full ${action.color} px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:scale-105`}
              >
                <span>{action.icon}</span> {action.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-2xl text-white shadow-xl transition-all hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {isOpen ? "✕" : "➕"}
      </button>
    </div>
  );
};

export default FloatingActionMenu;