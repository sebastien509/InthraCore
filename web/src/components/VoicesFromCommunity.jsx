// src/components/VoicesFromCommunity.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const quotesData = [
  { id: 1, name: "Arjun K.", role: "ML Engineer", quote: "InthraCore's privacy receipts changed how we think about compliance.", avatar: "/avatars/arjun.jpg" },
  { id: 2, name: "Elena M.", role: "Educator", quote: "The community working groups are the most inclusive I've ever seen.", avatar: "/avatars/elena.jpg" },
  { id: 3, name: "Carlos R.", role: "Researcher", quote: "Finally, an AI platform that respects sovereignty and local control.", avatar: "/avatars/carlos.jpg" },
  { id: 4, name: "Aisha B.", role: "Advocate", quote: "The autonomy-first design is revolutionary for offline communities.", avatar: "/avatars/aisha.jpg" },
];

const VoicesFromCommunity = () => {
  const [active, setActive] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-indigo-50/30 to-transparent py-16 dark:from-indigo-950/20"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">Voices from the Community</h2>
        <div className="relative mt-12 overflow-hidden rounded-2xl bg-white p-8 shadow-xl dark:bg-slate-900">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {quotesData.map((q) => (
              <div key={q.id} className="w-full flex-shrink-0 px-4 text-center">
                <div className="mx-auto mb-4 h-16 w-16 overflow-hidden rounded-full bg-gray-200">
                  <img src={q.avatar} alt={q.name} className="h-full w-full object-cover" />
                </div>
                <p className="text-lg italic text-slate-700 dark:text-slate-300">“{q.quote}”</p>
                <p className="mt-4 font-semibold text-indigo-700 dark:text-indigo-300">{q.name}</p>
                <p className="text-sm text-slate-500">{q.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {quotesData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`h-2 w-2 rounded-full transition-all ${active === idx ? "w-6 bg-indigo-600" : "bg-indigo-300"}`}
              />
            ))}
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-500">Join the community and share your story</p>
      </div>
    </motion.section>
  );
};

export default VoicesFromCommunity;