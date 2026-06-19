// src/components/core/VoicesFromCommunity.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VoicesFromCommunity = ({ testimonials = [] }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!testimonials.length) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (!testimonials.length) return null;

  return (
    <div className="rounded-2xl bg-slate-50/50 p-6 md:p-8">
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <div className="mx-auto mb-4 h-14 w-14 overflow-hidden rounded-full bg-inthra-primary/10 p-1">
              {testimonials[active].avatar ? (
                <img src={testimonials[active].avatar} alt={testimonials[active].name} className="h-full w-full rounded-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-xl font-semibold text-inthra-primary">
                  {(testimonials[active].name?.[0] || '?')}
                </div>
              )}
            </div>
            <p className="text-lg italic text-slate-700">
              <span className="text-inthra-accent text-2xl">“</span>
              {testimonials[active].quote}
              <span className="text-inthra-accent text-2xl">”</span>
            </p>
            <p className="mt-4 font-semibold text-inthra-primary">{testimonials[active].name}</p>
            <p className="text-sm text-slate-500">{testimonials[active].role}</p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`h-2 rounded-full transition-all ${active === idx ? 'w-6 bg-inthra-primary' : 'w-2 bg-slate-300'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoicesFromCommunity;