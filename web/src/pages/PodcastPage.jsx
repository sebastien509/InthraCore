import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import podcastData from '../data/podcast.json';

export default function PodcastPage() {
  const [activeEpisode, setActiveEpisode] = useState(null);

  const playEpisode = (episode) => {
    setActiveEpisode(episode);
  };

  return (
    <>
      <SEO title="Podcasts – InthraCore" description="Unfiltered dialogues on sovereign AI, privacy, and enterprise intelligence." />

      {/* ============== HERO ============== */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#06231C] via-[#0a3b2e] to-[#10B981]">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 30% 50%, rgba(16,185,129,0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 30%, rgba(16,185,129,0.4) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm tracking-[0.3em] uppercase text-[#10B981] font-medium mb-4"
          >
            Unfiltered Dialogues
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            The Podcast
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Engineers, skeptics, and ethics experts debate the future of privacy‑first AI.
          </motion.p>
        </div>
      </section>

      {/* ============== PLAYER (sticky when active) ============== */}
      <AnimatePresence>
        {activeEpisode && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl bg-white rounded-2xl shadow-2xl p-4 border border-[#E5E7EB]"
          >
            <div className="flex items-center gap-4">
              <img
                src={activeEpisode.thumbnail}
                alt={activeEpisode.title}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-[#06231C] truncate">{activeEpisode.title}</h3>
                <p className="text-sm text-[#6B7280]">{activeEpisode.host} · {activeEpisode.duration}</p>
              </div>
              <audio controls autoPlay className="w-48 md:w-64">
                <source src={activeEpisode.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <button
                onClick={() => setActiveEpisode(null)}
                className="text-[#6B7280] hover:text-[#06231C] ml-2"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============== EPISODES LIST ============== */}
      <section className="py-20 bg-[#F7F7F3]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-[#06231C] mb-10"
          >
            All Episodes
          </motion.h2>

          <div className="space-y-6">
            {podcastData.podcasts.map((ep, idx) => (
              <motion.div
                key={ep.slug}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                whileHover={{ scale: 1.01 }}
                className="bg-white rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center shadow-sm hover:shadow-lg transition-shadow"
              >
                <img
                  src={ep.thumbnail}
                  alt={ep.title}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover"
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-[#06231C]">{ep.title}</h3>
                  <p className="text-[#6B7280] mt-1">{ep.host} with {ep.guest}</p>
                  <p className="text-[#6B7280] text-sm mt-2 line-clamp-2">{ep.excerpt}</p>
                  <div className="flex justify-center md:justify-start gap-4 mt-3 items-center">
                    <span className="text-sm text-[#6B7280]">{ep.duration}</span>
                    <button
                      onClick={() => playEpisode(ep)}
                      className="inline-flex items-center gap-2 bg-[#10B981] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#059669] transition"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      Listen
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}