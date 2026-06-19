// src/components/core/PodcastPlayer.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PodcastPlayer = ({ episode }) => {
  const [showTranscript, setShowTranscript] = useState(false);

  if (!episode) return null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-slate-900">{episode.title}</h3>
          <p className="mt-1 text-sm text-slate-500">{episode.date} · {episode.duration}</p>
          <p className="mt-2 text-slate-600">{episode.description}</p>
        </div>
        <audio controls src={episode.audioUrl} className="h-12 w-full max-w-md rounded-lg" />
      </div>
      
      {episode.transcript && (
        <div className="mt-4">
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="flex items-center gap-2 text-sm font-medium text-inthra-primary hover:text-inthra-primary/80"
          >
            <span>{showTranscript ? 'Hide' : 'Show'} transcript</span>
            <svg className={`h-4 w-4 transition-transform ${showTranscript ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <AnimatePresence>
            {showTranscript && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm text-slate-700"
              >
                {episode.transcript}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default PodcastPlayer;