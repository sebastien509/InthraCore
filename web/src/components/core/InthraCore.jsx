import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import contentData from "../../data/contents.json";

import TrustBar from "./TrustBar";
import WorkingGroups from "./WorkingGroups";
import ContributorMap from "./ContributorMap";
import FloatingActionMenu from "./FloatingActionMenu";
import VoicesFromCommunity from "./VoicesFromCommunity";

/* ---------------------------
   Animation Helpers
---------------------------- */
const FadeIn = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

/* ---------------------------
   Section Card Wrapper
---------------------------- */
const Card = ({ children }) => (
  <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
    {children}
  </div>
);

/* ---------------------------
   Main Component
---------------------------- */
const InthraCore = () => {
  const {
    hero,
    featured,
    articles,
    newsroom,
    podcasts,
    people,
    testimonials,
  } = contentData;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      {/* ================= TRUST ================= */}
      <TrustBar
        badges={[
          { name: "Privacy First" },
          { name: "Auditable AI" },
          { name: "Enterprise Grade" },
          { name: "Sovereign Systems" },
        ]}
      />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src={hero.videoBackground} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-white" />
        </div>

        <div className="relative max-w-4xl text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-emerald-600 font-medium">
            Sovereign AI Research Collective
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
            {hero.title}
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-600 mt-4">
            {hero.subtitle}
          </h2>

          <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg">
            {hero.description}
          </p>

          <div className="flex justify-center gap-4 mt-10">
            <button className="px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition">
              {hero.ctaPrimary}
            </button>
            <button className="px-6 py-3 border border-slate-300 rounded-full hover:bg-slate-100 transition">
              {hero.ctaSecondary}
            </button>
          </div>
        </div>
      </section>

      {/* ================= MANIFESTO ================= */}
      <FadeIn>
        <section className="max-w-5xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold mb-6">
            Why InthraCore Exists
          </h2>

          <p className="text-slate-700 leading-relaxed text-lg">
            AI is becoming infrastructure — but most systems remain opaque,
            centralized, and difficult to audit.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              "Privacy by Design",
              "Accountability by Default",
              "Operational Transparency",
            ].map((t) => (
              <Card key={t}>
                <div className="p-6 text-center font-medium">{t}</div>
              </Card>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ================= FEATURED ================= */}
      <FadeIn>
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold mb-8">Featured Research</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {featured.map((item) => (
              <Card key={item.id}>
                <img
                  src={item.thumbnail}
                  className="w-full h-60 object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <p className="text-sm text-emerald-600 uppercase">
                    {item.category}
                  </p>
                  <h3 className="text-xl font-semibold mt-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 mt-3">{item.excerpt}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ================= ARTICLES (5) ================= */}
      <FadeIn>
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold mb-8">
            Research Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[...featured, ...articles].slice(0, 5).map((a) => (
              <Card key={a.id}>
                <img
                  src={a.thumbnail}
                  className="h-44 w-full object-cover rounded-t-2xl"
                />
                <div className="p-5">
                  <p className="text-xs text-emerald-600 uppercase">
                    {a.category}
                  </p>
                  <h3 className="font-semibold mt-2">{a.title}</h3>

                  <p className="text-sm text-slate-600 mt-2">
                    {a.hook}
                  </p>

                  <div className="mt-4 text-xs text-slate-500 line-clamp-3">
                    {a.closing}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ================= NEWSROOM (5) ================= */}
      <FadeIn>
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold mb-8">Newsroom</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: 5 })
              .map((_, i) => newsroom[0])
              .map((n, i) => (
                <Card key={i}>
                  <img
                    src={n.thumbnail}
                    className="h-44 w-full object-cover rounded-t-2xl"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold">{n.title}</h3>
                    <p className="text-sm text-slate-600 mt-2">
                      {n.hook}
                    </p>
                    <p className="text-xs text-slate-500 mt-3">
                      {n.closing}
                    </p>
                  </div>
                </Card>
              ))}
          </div>
        </section>
      </FadeIn>

      {/* ================= PODCASTS (3) ================= */}
      <FadeIn>
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold mb-8">
            Podcast Series
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[...podcasts, ...podcasts, ...podcasts].slice(0, 3).map((p, i) => (
              <Card key={i}>
                <img
                  src={p.thumbnail}
                  className="h-44 w-full object-cover rounded-t-2xl"
                />

                <div className="p-5">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-slate-600 mt-2">
                    {p.excerpt}
                  </p>

                  <audio
                    controls
                    className="w-full mt-4"
                    src={p.audioUrl}
                  />
                </div>
              </Card>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ================= COMMUNITY ================= */}
      <FadeIn>
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold mb-8">
            Community Voices
          </h2>

          <VoicesFromCommunity testimonials={testimonials} />
        </section>
      </FadeIn>

      {/* ================= CONTRIBUTORS ================= */}
      <FadeIn>
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold mb-8">
            Global Contributors
          </h2>

          <ContributorMap />
        </section>
      </FadeIn>

      {/* ================= CTA ================= */}
      <section className="bg-emerald-600 text-white py-24 text-center mt-20">
        <h2 className="text-4xl font-bold">
          Join the Sovereign AI Movement
        </h2>

        <p className="mt-4 text-white/80 max-w-xl mx-auto">
          Build the future of privacy-first, auditable intelligence systems.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-emerald-700 rounded-full">
            Join Community
          </button>
          <button className="px-6 py-3 border border-white/40 rounded-full">
            Read Research
          </button>
        </div>
      </section>

      {/* ================= FLOATING MENU ================= */}
      <FloatingActionMenu />
    </div>
  );
};

export default InthraCore;