import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Sidebar({ isOpen, onClose }) {
  const mainLinks = [
    { name: 'Newsroom', path: '/news' },
    { name: 'Podcasts', path: '/podcast' },
    { name: 'People', path: '/people' },
  ];

  const resources = [
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
  ];

  return (
    <>
      {/* Overlay (mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -320, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -320, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 z-50 h-full w-80 max-w-[85vw]"
          >
            <div className="h-full overflow-y-auto custom-scrollbar">
              <div className="h-full p-6 border-r border-white/20 backdrop-blur-2xl bg-white/90">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#06231C] to-[#10B981] bg-clip-text text-transparent">
                    InthraCore
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="text-[#06231C] hover:text-[#10B981] p-2 rounded-lg hover:bg-white/50"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                {/* Main Navigation */}
                <nav className="space-y-1 mb-8">
                  {mainLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <Link
                        to={link.path}
                        onClick={onClose}
                        className="flex items-center gap-3 px-4 py-3 text-[#06231C] hover:text-[#10B981] rounded-xl font-medium transition-colors hover:bg-white/60"
                      >
                        <span>{link.name}</span>
                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Featured SADS Card */}
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-[#10B981] to-[#047857] rounded-2xl p-5 mb-8 shadow-lg"
                >
                  <div className="aspect-[16/10] bg-white/10 rounded-xl mb-4 flex items-center justify-center">
                    <span className="text-white/40 text-sm">SADS Program</span>
                  </div>
                  <h3 className="text-white font-bold text-lg">Sovereign AI Accelerator</h3>
                  <p className="text-white/80 text-sm mt-1">
                    Privacy‑first, 6‑week sprint for regulated AI.
                  </p>
                  <Link
                    to="/sads"
                    onClick={onClose}
                    className="inline-block mt-4 bg-white text-[#10B981] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-white/90 transition"
                  >
                    Apply Now
                  </Link>
                </motion.div>

                {/* Resources */}
                <div className="mb-8">
                  <p className="text-xs text-[#6B7280] uppercase tracking-wider font-semibold mb-3 px-4">
                    Resources
                  </p>
                  <div className="space-y-1">
                    {resources.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <Link
                          to={item.path}
                          onClick={onClose}
                          className="block px-4 py-2 text-[#6B7280] hover:text-[#06231C] rounded-lg hover:bg-white/60 transition-colors text-sm"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer movement CTA */}
                <Link
                  to="/newsletter"
                  onClick={onClose}
                  className="w-full bg-[#06231C] text-white py-3 px-4 rounded-xl text-center font-semibold hover:bg-[#10B981] transition"
                >
                  Join the Movement
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}