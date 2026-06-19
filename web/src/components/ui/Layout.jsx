import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  // Sidebar only on news detail and article detail pages
  const showSidebar =
    location.pathname.startsWith('/news/') ||
    location.pathname.startsWith('/articles/');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        onMenuToggle={toggleSidebar}
        isSidebarOpen={sidebarOpen && showSidebar}
      />
      {showSidebar && (
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      )}
      <main className="flex-1 pt-24">
        {children}

        {/* ========== NEWSLETTER SIGNUP ========== */}
        <section className="bg-[#F7F7F3] border-t border-slate-200 py-12 mt-20">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#06231C] mb-3">
              Stay ahead of sovereign AI
            </h2>
            <p className="text-slate-600 mb-6 text-sm md:text-base">
              Get research, newsroom updates, and event invitations straight to your inbox.
            </p>
            <form
              action="https://formspree.io/f/your-newsletter-form-id"
              method="POST"
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                required
                className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#10B981] w-full sm:w-64"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#10B981] text-white rounded-xl font-semibold hover:bg-[#059669] transition shadow-sm"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-slate-400 mt-4">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>

      {/* ========== GLOBAL FOOTER ========== */}
      <footer className="bg-[#06231C] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src="https://res.cloudinary.com/dvcmopd4q/image/upload/v1780240008/INHRA_7_rwqkeq.png"
                alt="InthraCore"
                className="h-6 w-auto"
              />
              <span className="text-sm font-semibold">InthraCore</span>
            </div>
            <div className="flex gap-6 text-sm text-slate-300">
              <Link to="/privacy" className="hover:text-white transition">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition">Terms</Link>
              <Link to="/contact" className="hover:text-white transition">Contact</Link>
              <Link to="/press" className="hover:text-white transition">Press</Link>
            </div>
            <p className="text-xs text-slate-400">
              &copy; {new Date().getFullYear()} InthraCore. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}