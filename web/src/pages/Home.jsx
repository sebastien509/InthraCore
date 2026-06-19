import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import articlesData from '../data/articles.json';
import newsData from '../data/news.json';
import podcastData from '../data/podcast.json';
import peopleData from "../data/people.json";
import testimonialsData from "../data/testimonials.json";

// ------------------------- HERO SLIDES -------------------------
const slides = [
  {
    type: 'main',
    video: 'https://videos.pexels.com/video-files/3130182/3130182-uhd_2560_1440_30fps.mp4',
    badge: 'Sovereign AI Research Collective',
    title: 'InthraCore',
    subtitle: 'The Sovereign AI Intelligence Hub',
    description:
      'Research, operational intelligence, privacy-first infrastructure, and auditable AI systems shaping the next era of enterprise intelligence.',
    ctaPrimary: 'Explore Research',
    ctaSecondary: 'Join the Movement',
  },
  {
    type: 'newsroom',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2400&auto=format&fit=crop',
    title: 'Latest from the Newsroom',
    description: 'Decrypting global AI regulations, InthraOS updates, and industry analysis.',
    articles: newsData.news.slice(0, 2),
    bgImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop'
  },
  {
    type: 'sads',
    image: 'https://res.cloudinary.com/dvcmopd4q/image/upload/v1780240409/SADS_Presentation_1_untkdx.jpg',
    title: 'Sovereign AI Accelerator',
    description: '6‑week sprint turning privacy into your competitive edge. Apply now.',
    cta: 'View Program',
    link: '/sads',
  },
];

// ------------------------- FADE SLIDE COMPONENT -------------------------
function HeroSlide({ slide, isActive }) {
  if (slide.type === 'main') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          src={slide.video}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 px-4 w-full max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-black/40 backdrop-blur-sm rounded-3xl p-6 md:p-12 inline-block"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-[#10B981] font-medium">
              {slide.badge}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-4 text-white leading-tight">
              {slide.title}
            </h1>
            <h2 className="text-xl md:text-3xl text-white/80 mt-3">
              {slide.subtitle}
            </h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto text-base md:text-lg">
              {slide.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
              <Link
                to="/articles"
                className="px-6 py-3 bg-[#10B981] text-white rounded-full hover:bg-[#059669] transition text-sm md:text-base"
              >
                {slide.ctaPrimary}
              </Link>
              <Link
                to="/newsletter"
                className="px-6 py-3 border border-white/80 text-white rounded-full hover:bg-white hover:text-[#06231C] transition text-sm md:text-base"
              >
                {slide.ctaSecondary}
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  if (slide.type === 'newsroom') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <img
          src={slide.bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 w-full max-w-6xl px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={slide.image}
              alt="Newsroom"
              className="rounded-2xl shadow-lg object-cover w-full h-64 md:h-80"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 md:p-8">
              <p className="text-sm tracking-[0.3em] uppercase text-[#10B981] font-medium">
                Newsroom
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                {slide.title}
              </h2>
              <p className="text-white/80 mt-3 text-sm md:text-base">{slide.description}</p>
              <div className="mt-6 space-y-4">
                {slide.articles.map((article) => (
                  <Link
                    key={article.slug}
                    to={`/news/${article.slug}`}
                    className="block bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow hover:shadow-md transition"
                  >
                    <h3 className="font-semibold text-[#06231C] text-sm md:text-base">{article.title}</h3>
                    <div className="flex gap-3 mt-2 text-xs text-[#6B7280]">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (slide.type === 'sads') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <img
          src={slide.image}
          alt="SADS"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/30" />
        <div className="relative z-10 max-w-3xl text-center px-4">
          <p className="text-sm tracking-[0.3em] uppercase text-[#10B981] font-medium">
            SADS Program
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#06231C] mt-4">
            {slide.title}
          </h2>
          <p className="text-[#6B7280] mt-3 text-base md:text-xl">{slide.description}</p>
          <Link
            to={slide.link}
            className="inline-block mt-6 px-8 py-3 bg-[#10B981] text-white rounded-full hover:bg-[#059669] transition text-sm md:text-base"
          >
            {slide.cta}
          </Link>
        </div>
      </motion.div>
    );
  }

  return null;
}

// ------------------------- SECTION WRAPPER -------------------------
function AnimatedSection({ children, className = '' }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`py-12 md:py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return (
    <>
      <SEO title="InthraCore – Sovereign AI Intelligence Hub" />

    {/* ==================== HERO CAROUSEL ==================== */}
{isMobile ? (
  /* Mobile: only the main slide, no rotation */
  <section className="relative h-screen overflow-hidden">
    <HeroSlide slide={slides[0]} isActive={true} />
  </section>
) : (
  /* Desktop: full carousel with auto‑rotate */
  <section className="relative h-screen overflow-hidden">
    {slides.map((slide, i) => (
      <HeroSlide key={i} slide={slide} isActive={i === currentSlide} />
    ))}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
      {slides.map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentSlide(i)}
          className={`w-3 h-3 rounded-full transition-all ${
            i === currentSlide ? 'bg-[#10B981] scale-125' : 'bg-[#06231C]/30'
          }`}
        />
      ))}
    </div>
  </section>
)}

      {/* ==================== PRESS & CREDIBILITY ==================== */}
      <AnimatedSection className="bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#06231C] mb-10">As Featured In</h2>
          <p className="text-[#6B7280] mb-8 max-w-xl mx-auto text-sm md:text-base">
            Trusted by leading publications and industry voices
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <img
              src="https://res.cloudinary.com/dvcmopd4q/image/upload/v1780250086/500408512_17957846972947945_7603901437035032172_n_b9xgdv.jpg"
              alt="Press logo"
              className="h-8 md:h-14 opacity-80 hover:opacity-100 transition"
            />
            <img
              src="https://res.cloudinary.com/dvcmopd4q/image/upload/v1780249443/Medium-Logo_ce6hrv.png"
              alt="Medium"
              className="h-12 md:h-20 opacity-80 hover:opacity-100 transition"
            />
            <img
              src="https://res.cloudinary.com/dvcmopd4q/image/upload/v1780249246/Black-Brainz-Magazine-Logo-360x203_fobxu8.png"
              alt="Black Brainz Magazine"
              className="h-12 md:h-20 opacity-80 hover:opacity-100 transition"
            />
            <img
              src="https://res.cloudinary.com/dvcmopd4q/image/upload/v1780249755/Estrateji-Symbol-blacktext_wi682e.png"
              alt="Estrateji"
              className="h-6 md:h-10 opacity-80 hover:opacity-100 transition"
            />
            <img
              src="https://res.cloudinary.com/dvcmopd4q/image/upload/v1780249246/images_3_prkge6.png"
              alt="Press logo"
              className="h-6 md:h-8 opacity-80 hover:opacity-100 transition"
            />
          </div>
        </div>
        <hr className="mt-12 border-[#E5E7EB]" />
      </AnimatedSection>

      {/* ==================== IMPACT NUMBERS ==================== */}
      <AnimatedSection className="bg-white -mt-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: '24', label: 'Articles Published' },
              { number: '12', label: 'Podcast Episodes' },
              { number: '8', label: 'Research Papers' },
              { number: '1.2k', label: 'Community Members' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="p-4 md:p-6 rounded-xl bg-[#F7F7F3]"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#10B981]">{stat.number}</div>
                <div className="mt-2 text-xs md:text-sm text-[#6B7280]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ==================== SADS PROGRAM TEASER ==================== */}
      <AnimatedSection className="bg-[#F7F7F3]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="https://res.cloudinary.com/dvcmopd4q/image/upload/v1780247823/SADS_Presentation_2_okbpsb.jpg"
              alt="SADS Program"
              className="rounded-2xl shadow-lg object-cover w-full h-56 md:h-80"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-[#10B981] font-medium">
              SADS Program
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#06231C] mt-4">
              Sovereign AI. Regulated Ready.
            </h2>
            <p className="text-[#6B7280] mt-4 text-base md:text-lg">
              6‑week accelerator turning privacy into your competitive edge. Auditable AI, zero equity, $120k in‑kind support.
            </p>
            <Link
              to="/sads"
              className="inline-block mt-6 px-6 py-3 bg-[#10B981] text-white rounded-full hover:bg-[#059669] transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* ==================== NEWSROOM TEASER ==================== */}
      <AnimatedSection className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#06231C]">Latest from the Newsroom</h2>
            <Link
              to="/news"
              className="hidden sm:inline-flex items-center gap-2 text-[#10B981] hover:text-[#059669] font-medium text-sm"
            >
              View all
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {newsData.news.slice(0, 3).map((article, idx) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className="group flex gap-4 bg-[#F7F7F3] rounded-xl p-4 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-200"
              >
                <Link
                  to={`/news/${article.slug}`}
                  className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden"
                >
                  <img
                    src={article.thumbnail || article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </Link>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981]">
                    News
                  </span>
                  <h3 className="mt-1 font-bold text-[#06231C] leading-snug group-hover:text-[#10B981] transition-colors text-sm line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">{article.date}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ==================== ARTICLES & RESEARCH ==================== */}
      <AnimatedSection className="bg-[#F7F7F3]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#06231C]">Research & Articles</h2>
            <Link
              to="/articles"
              className="hidden sm:inline-flex items-center gap-2 text-[#10B981] hover:text-[#059669] font-medium text-sm"
            >
              View all research
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Mobile: vertical stack; Desktop: horizontal scrollable row */}
          <div className="flex flex-col md:flex-row md:space-x-5 md:overflow-x-auto md:pb-4 md:snap-x md:snap-mandatory gap-4 md:gap-0">
            {articlesData.articles.slice(0, 5).map((article, idx) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="snap-start shrink-0 w-full md:w-[320px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <Link to={`/articles/${article.slug}`} className="flex-1 flex flex-col">
                  <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                    <img
                      src={article.thumbnail || article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-[#06231C] text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                        {article.category || 'Research'}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-bold text-[#06231C] leading-snug mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2 mb-3 flex-1">
                      {article.excerpt || article.hook}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-400 mt-auto pt-3 border-t border-slate-100">
                      <span>{article.date}</span>
                      <span>{article.readingTime} min read</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ==================== PODCAST ==================== */}
      <AnimatedSection className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#06231C] mb-8">Latest Podcast</h2>
          <div className="bg-[#F7F7F3] rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2">
              <img
                src={podcastData.podcasts[0]?.coverImage || podcastData.podcasts[0]?.thumbnail}
                alt="Podcast Cover"
                className="rounded-xl shadow object-cover w-full h-48 md:h-60"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-sm text-[#10B981] uppercase tracking-wide mb-2">Podcast</p>
              <h3 className="text-xl md:text-2xl font-bold text-[#06231C]">
                {podcastData.podcasts[0]?.title}
              </h3>
              <p className="text-[#6B7280] mt-2 text-sm md:text-base">
                {podcastData.podcasts[0]?.excerpt}
              </p>
              <Link
                to="/podcast"
                className="inline-block mt-4 text-[#10B981] font-semibold hover:underline"
              >
                Listen Now →
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ==================== TESTIMONIALS ==================== */}
      <AnimatedSection className="bg-[#F7F7F3]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#06231C] mb-8 text-center">What Leaders Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center"
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover mb-4"
                />
                <blockquote className="text-[#06231C] italic mb-4 text-sm md:text-base">“{t.quote}”</blockquote>
                <p className="font-semibold text-[#06231C] text-sm md:text-base">{t.name}</p>
                <p className="text-xs md:text-sm text-[#6B7280]">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ==================== QUOTES ==================== */}
      <AnimatedSection className="bg-[#06231C] text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <blockquote className="text-lg md:text-2xl italic">
            “InthraCore is not just research—it’s the blueprint for sovereign enterprise AI.”
          </blockquote>
          <p className="mt-4 text-sm text-[#9CA3AF]">— Dr. Sebastian Fénelon, AI Ethics Fellow</p>
        </div>
      </AnimatedSection>
    </>
  );
}