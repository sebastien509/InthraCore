import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onMenuToggle, isSidebarOpen }) {
  const navLinks = [
    { name: 'Newsroom', path: '/news' },
    { name: 'Podcasts', path: '/podcast' },
    { name: 'Inthraos', path: '/' },
    { name: 'SADS', path: '/sads' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-3 left-1/2 -translate-x-1/2 z-50 glass border border-white/20 rounded-2xl shadow-2xl"
      style={{
        width: 'calc(100% - 3rem)',
        maxWidth: '1200px',
      }}
    >
      <div className="mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Menu button + Logo */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onMenuToggle}
              className="text-[#06231C] hover:text-[#10B981] p-2 transition-colors hover:bg-white/50 rounded-xl"
            >
              <AnimatePresence mode="wait">
                {isSidebarOpen ? (
                  <motion.svg
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    className="h-6 w-6"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    className="h-6 w-6"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>

            <Link to="/" className="group/logo flex items-center gap-2">
              <img
                src="https://res.cloudinary.com/dvcmopd4q/image/upload/v1780240008/INHRA_7_rwqkeq.png"
                alt="InthraCore Logo"
                className="h-12 w-auto object-contain"
              />
              <span className="hidden sm:block text-2xl font-bold bg-gradient-to-r from-[#06231C] to-[#10B981] bg-clip-text text-transparent">
                InthraCore
              </span>
            </Link>
          </div>

          {/* Center: Navigation Links (hidden on mobile) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-[#06231C] hover:text-[#10B981] px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-white/50 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#06231C] to-[#10B981] rounded-full group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right: CTA */}
          <div className="flex items-center gap-3">
            <Link
              to="/sads"
              className="hidden sm:inline-flex items-center border border-[#06231C] text-[#06231C] hover:bg-[#06231C] hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-all"
            >
              SADS Program
            </Link>
            <Link
              to="/newsletter"
              className="bg-[#10B981] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#059669] transition-all shadow-lg hover:shadow-xl hidden sm:inline-flex"
            >
              Join Movement
            </Link>
            {/* Mobile CTA (simplified) */}
            <Link
              to="/sads"
              className="sm:hidden bg-[#10B981] text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              SADS
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}