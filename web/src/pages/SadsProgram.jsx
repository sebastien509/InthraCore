import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

// --------------- INDUSTRY DATA ---------------
const industries = [
  { name: 'Healthcare', desc: 'Patient privacy, clinical AI, compliance', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' },
  { name: 'Financial Services', desc: 'Fraud detection, risk modeling, open banking', icon: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { name: 'Government', desc: 'Citizen services, secure data, national AI', icon: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' },
  { name: 'Defense', desc: 'Intelligence analysis, secure communications', icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' },
  { name: 'Energy', desc: 'Grid optimization, predictive maintenance', icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' },
  { name: 'Critical Infrastructure', desc: 'Water, transport, telecom resilience', icon: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' },
];

// --------------- FAQ DATA ---------------
const faqs = [
  { q: 'Do I give up equity?', a: 'Zero. You retain 100% ownership of your company and IP.' },
  { q: 'What about IP?', a: 'Everything you build during the program is yours, period.' },
  { q: 'Is there a $500 deposit?', a: 'Yes, fully refundable upon completion. Waivers available for qualifying teams.' },
  { q: 'Cash funding?', a: 'No — the program provides in‑kind value worth ~$120k (infrastructure, mentorship, tools).' },
  { q: 'InthraOS OSDK?', a: 'Optional integration layer. You can use any stack; the OSDK just accelerates privacy‑first deployment.' },
];

// --------------- ANIMATED SECTION WRAPPER ---------------
function AnimatedSection({ children, className = '' }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// --------------- SADS PAGE ---------------
export default function SadsProgram() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <SEO title="SADS Program – Sovereign AI Accelerator | InthraCore" />

      {/* ==================== HERO (mobile: stacked, no glass card) ==================== */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/3130182/3130182-uhd_2560_1440_30fps.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#02150F]/95 via-[#06231C]/85 to-[#02150F]/95" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full py-10 md:py-20">
          <div className="flex flex-col items-center text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-sm tracking-[0.3em] uppercase text-[#10B981] font-medium mb-4">
                Sovereign AI Deployment Sprint
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Deploy Privacy‑First AI Inside
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-emerald-300">
                  Regulated Enterprises
                </span>
              </h1>
              <p className="text-base md:text-lg text-white/70 mt-6 max-w-xl">
                A 7‑week intensive program helping selected teams deploy auditable AI systems, privacy infrastructure, and enterprise‑grade intelligence products.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
                {['QSTP Incubated', 'Privacy‑First', 'Enterprise Ready', 'No Equity'].map((badge) => (
                  <span key={badge} className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white font-medium">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-10">
                <a
                  href="#apply"
                  className="px-8 py-3 bg-[#10B981] text-white rounded-full font-semibold hover:bg-[#059669] transition shadow-lg shadow-[#10B981]/25"
                >
                  Apply for Cohort 01
                </a>
                <a
                  href="#structure"
                  className="px-8 py-3 border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition"
                >
                  View Program Structure
                </a>
              </div>
            </motion.div>

            {/* Glass card - hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/20 to-transparent rounded-3xl blur-3xl" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2000&auto=format&fit=crop"
                  alt="Sovereign AI Dashboard"
                  className="w-full h-auto object-cover"
                />
                <div className="p-6 flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#10B981] animate-pulse" />
                  <span className="text-white/60 text-sm">Sovereign AI Control Plane</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== PROGRAM STATS ==================== */}
      <AnimatedSection className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: '7 Weeks', label: 'Intensive Sprint' },
              { value: '$120k+', label: 'In‑Kind Value' },
              { value: '5–10 Teams', label: 'Per Cohort' },
              { value: '0% Equity', label: 'You Keep 100%' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="bg-white border border-slate-200 rounded-3xl p-6 text-center shadow-xl"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#06231C]">{stat.value}</div>
                <div className="mt-2 text-xs md:text-sm text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ==================== WHAT YOU GET ==================== */}
      <AnimatedSection className="bg-[#F8FAFC] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-[0.2em]">
              Member Benefits
            </span>
            <h2 className="mt-6 text-3xl md:text-5xl font-bold text-[#06231C]">What You Get</h2>
            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Infrastructure, network, and resources to build the future of sovereign AI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Enterprise Buyer Access', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop' },
              { title: 'Privacy Infrastructure', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop' },
              { title: 'AI Governance Toolkit', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop' },
              { title: 'Operator Community', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop' },
              { title: 'Strategic Introductions', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop' },
              { title: 'Sovereign AI Stack', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop' },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg md:text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ==================== HOW IT WORKS ==================== */}
      <AnimatedSection className="bg-white py-16 md:py-24" id="structure">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#06231C] text-center mb-10 md:mb-16">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { week: 'Week 1', title: 'Discovery', deliverables: ['Privacy audit', 'Architecture review'] },
              { week: 'Week 2‑3', title: 'Architecture', deliverables: ['Router design', 'Data flow mapping'] },
              { week: 'Week 4‑5', title: 'Implementation', deliverables: ['Core systems', 'Integration'] },
              { week: 'Week 6', title: 'Governance', deliverables: ['Audit receipts', 'Runbook'] },
              { week: 'Week 7', title: 'Pilot Launch', deliverables: ['Enterprise pilot', 'Review'] },
            ].map((step, idx) => (
              <motion.div
                key={step.week}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-6 bg-[#F7F7F3] rounded-3xl text-center"
              >
                <span className="text-sm font-bold text-[#10B981]">{step.week}</span>
                <h3 className="text-lg font-semibold text-[#06231C] mt-2">{step.title}</h3>
                <ul className="mt-3 text-sm text-slate-500 space-y-1">
                  {step.deliverables.map((d) => (
                    <li key={d}>- {d}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ==================== COHORT OUTCOMES ==================== */}
      <AnimatedSection className="bg-[#06231C] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 md:mb-16">Cohort Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Deploy AI Privately', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop' },
              { title: 'Meet Compliance', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop' },
              { title: 'Launch Enterprise Pilots', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop' },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <div className="relative h-52 md:h-64 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06231C] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ==================== BUILT FOR INDUSTRIES ==================== */}
      <AnimatedSection className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#06231C] mb-8">Built for Organizations Operating In</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {industries.map((ind) => (
              <motion.div
                key={ind.name}
                whileHover={{ y: -5 }}
                className="p-5 md:p-6 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl transition-all text-left"
              >
                <svg className="w-7 h-7 md:w-8 md:h-8 text-[#10B981] mb-3 md:mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ind.icon} />
                </svg>
                <h3 className="font-semibold text-[#06231C] text-sm md:text-base">{ind.name}</h3>
                <p className="text-xs md:text-sm text-slate-500 mt-1">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ==================== WHO SHOULD APPLY ==================== */}
      <AnimatedSection className="bg-[#F7F7F3] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#06231C] text-center mb-10 md:mb-12">Who Should Apply?</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl md:text-2xl font-bold text-[#10B981] mb-6">Ideal Candidates</h3>
              <ul className="space-y-4">
                {['AI Startups with early traction', 'Enterprise Software Teams', 'Privacy Tech Companies', 'ML Infrastructure Teams'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 text-[#10B981] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#06231C] text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
              <h3 className="text-xl md:text-2xl font-bold text-red-400 mb-6">Not Ideal For</h3>
              <ul className="space-y-4">
                {['Idea Stage Only', 'Consultancies', 'Agencies', 'Non‑Technical Teams'].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-[#06231C] text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ==================== APPLICATION FORM ==================== */}
<AnimatedSection className="bg-white py-16 md:py-24" id="apply">
  <div className="max-w-2xl mx-auto px-4 md:px-6">
    <div className="bg-white rounded-[32px] shadow-2xl border border-slate-200 p-6 md:p-10">
      <div className="text-center mb-8">
        <span className="text-sm text-[#10B981] uppercase tracking-[0.2em] font-semibold">Step 1 of 1</span>
        <h2 className="text-2xl md:text-3xl font-bold text-[#06231C] mt-2">Company Details</h2>
        <p className="text-slate-500 text-sm mt-1">All fields marked * are required</p>
      </div>

      <form action="https://formspree.io/f/xldlbrny" method="POST" className="space-y-5">
        {/* Email - NEW */}
        <div>
          <label className="block text-sm font-medium text-[#06231C] mb-1">Email Address *</label>
          <input type="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#10B981] focus:outline-none" placeholder="hello@yourcompany.com" />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#06231C] mb-1">Company Name *</label>
          <input type="text" name="company" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#10B981] focus:outline-none" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#06231C] mb-1">Website</label>
            <input type="url" name="website" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#10B981] focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#06231C] mb-1">LinkedIn</label>
            <input type="url" name="linkedin" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#10B981] focus:outline-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-[#06231C] mb-1">Team Size</label>
            <select name="teamSize" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#10B981] focus:outline-none">
              <option>1‑10</option>
              <option>11‑50</option>
              <option>51‑200</option>
              <option>200+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#06231C] mb-1">Stage</label>
            <select name="stage" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#10B981] focus:outline-none">
              <option>Pre‑seed</option>
              <option>Seed</option>
              <option>Series A</option>
              <option>Growth</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#06231C] mb-1">Industry</label>
          <select name="industry" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#10B981] focus:outline-none">
            {['Healthcare', 'Financial Services', 'Government', 'Defense', 'Energy', 'Critical Infrastructure', 'Other'].map((ind) => (
              <option key={ind}>{ind}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#06231C] mb-1">Pilot Scope *</label>
          <textarea name="pilot" rows="3" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#10B981] focus:outline-none" placeholder="Describe the regulated workflow you want to deploy (e.g., AI-powered clinical triage for a hospital, fraud detection for a GCC bank)"></textarea>
        </div>

        {/* NEW QUESTION: Privacy, Sovereign, Accountable AI */}
        <div>
          <label className="block text-sm font-medium text-[#06231C] mb-1">What does privacy, sovereign, and accountable AI mean for your company? *</label>
          <textarea name="privacySovereignMeaning" rows="3" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#10B981] focus:outline-none" placeholder="Explain in a few sentences how you approach data privacy, sovereignty, and accountability in your AI systems. This helps us understand your alignment with SADS."></textarea>
        </div>

        <div className="flex items-center">
          <input type="checkbox" name="consent" required className="w-4 h-4 text-[#10B981] border-gray-300 rounded" />
          <label className="ml-2 text-sm text-slate-600">I agree to the program terms and privacy policy. *</label>
        </div>

        <button type="submit" className="w-full bg-[#10B981] text-white py-4 rounded-xl font-semibold hover:bg-[#059669] transition shadow-lg shadow-[#10B981]/25">
          Submit Application
        </button>
      </form>
    </div>
  </div>
</AnimatedSection>

      {/* ==================== FAQ ==================== */}
      <AnimatedSection className="bg-[#F7F7F3] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#06231C] text-center mb-10 md:mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left font-medium text-[#06231C]"
                >
                  <span className="text-sm md:text-base">{faq.q}</span>
                  <svg className={`w-5 h-5 transform transition-transform ${openFaq === i ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 text-sm text-slate-600"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ==================== FINAL CTA ==================== */}
      <section className="relative overflow-hidden bg-[#06231C] py-16 md:py-24">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2400&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#06231C]/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Deploy Sovereign AI?
          </motion.h2>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-10">
            Join a select cohort building the next generation of private, auditable, enterprise intelligence.
          </p>
          <a
            href="#apply"
            className="inline-block px-10 py-4 bg-[#10B981] text-white rounded-full font-semibold text-base md:text-lg hover:bg-[#059669] transition shadow-2xl shadow-[#10B981]/25"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* Footer note */}
      <div className="bg-[#02150F] text-white text-center py-6 text-sm">
        <p>Powered by InthraOS. <Link to="/privacy" className="underline">Privacy</Link> · <Link to="/terms" className="underline">Terms</Link> · <Link to="/contact" className="underline">Contact</Link></p>
      </div>
    </>
  );
}