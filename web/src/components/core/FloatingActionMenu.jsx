// src/components/core/FloatingActionMenu.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { name: 'Newsletter', icon: '📧', link: '/newsletter' },
    { name: 'GitHub', icon: '🐙', link: 'https://github.com/inthraos', external: true },
    { name: 'Discord', icon: '💬', link: 'https://discord.gg/inthraos', external: true },
    { name: 'Contributor Map', icon: '🌍', link: '#contributor-map' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-16 right-0 mb-2 flex flex-col gap-2"
          >
            {actions.map((action, idx) => (
              <motion.a
                key={action.name}
                href={action.link}
                target={action.external ? '_blank' : '_self'}
                rel="noopener noreferrer"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-lg ring-1 ring-slate-200 transition-all hover:bg-inthra-primary/5 hover:text-inthra-primary hover:ring-inthra-primary/30"
              >
                <span>{action.icon}</span> {action.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-inthra-primary text-2xl text-white shadow-xl transition-all hover:scale-105 hover:bg-inthra-primary/90 focus:outline-none focus:ring-2 focus:ring-inthra-primary focus:ring-offset-2"
        aria-label="Menu"
      >
        <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }}>
          ➕
        </motion.div>
      </button>
    </div>
  );
};

export default FloatingActionMenu;