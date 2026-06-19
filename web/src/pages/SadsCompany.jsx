import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Globe } from 'lucide-react';
import SEO from '../components/SEO';
import sadsData from '../data/sadsCompanies.json';

function AnimatedSection({ children, className = '' }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function getEmbedUrl(url) {
  if (!url) return null;
  if (url.includes('watch?v=')) {
    return url.replace('watch?v=', 'embed/');
  }
  return url;
}

export default function SadsCompany() {
  const { slug } = useParams();
  const company = sadsData.companies.find((c) => c.slug === slug);

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F7F3]">
        <p className="text-[#06231C]">Company not found</p>
      </div>
    );
  }

  return (
    <>
      <SEO title={`${company.name} | SADS Cohort`} description={company.tagline} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <Link
          to="/sads"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Cohort
        </Link>

        <div className="flex flex-col lg:grid lg:grid-cols-[280px_1fr] gap-6">
          {/* Sidebar: on mobile, order-2 so it appears after the main content? Actually keep it on top of main on mobile? Usually sidebar on top is fine. We'll keep it as the first column which becomes the top element on mobile */}
          <aside className="lg:sticky lg:top-24 self-start">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="w-12 h-12 rounded-xl border bg-white p-1.5 object-contain"
                />
                <div>
                  <h2 className="text-lg font-bold text-slate-950 leading-tight">{company.name}</h2>
                  <p className="text-xs text-slate-500">{company.tagline}</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 mb-4">
                <h3 className="font-bold text-slate-950 text-base mb-3">{company.name}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-slate-500">Sector</span>
                    <p className="font-medium text-slate-800">{company.sector || 'Healthcare AI'}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Cohort</span>
                    <p className="font-medium text-slate-800">SADS 2026</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Focus</span>
                    <p className="font-medium text-slate-800">Privacy‑Preserving AI</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <a
                  href={`mailto:${company.contactEmail}`}
                  className="flex items-center justify-center gap-2 w-full bg-emerald-600 text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-emerald-700 transition"
                >
                  <Mail className="w-4 h-4" />
                  Contact Founder
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full border border-slate-300 text-slate-700 py-2.5 rounded-xl font-medium text-sm hover:bg-slate-50 transition"
                >
                  <Globe className="w-4 h-4" />
                  Visit Website
                </a>
              </div>
            </div>
          </aside>

          <main className="space-y-4">
            <details open className="group border border-slate-200 rounded-xl bg-white shadow-sm">
              <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                <h2 className="text-lg font-bold text-slate-950">About</h2>
                <span className="text-xl font-light text-slate-400 group-open:hidden">+</span>
                <span className="text-xl font-light text-slate-400 hidden group-open:inline">−</span>
              </summary>
              <div className="px-4 pb-4 text-slate-700 leading-relaxed text-sm">
                <p>{company.pilot}</p>
                {company.video && (
                  <div className="mt-4 aspect-video max-w-full md:max-w-md rounded-lg overflow-hidden border">
                    <iframe
                      src={getEmbedUrl(company.video)}
                      title={`${company.name} founder video`}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            </details>

            <details open className="group border border-slate-200 rounded-xl bg-white shadow-sm">
              <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                <h2 className="text-lg font-bold text-slate-950">Key Outcomes</h2>
                <span className="text-xl font-light text-slate-400 group-open:hidden">+</span>
                <span className="text-xl font-light text-slate-400 hidden group-open:inline">−</span>
              </summary>
              <div className="px-4 pb-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {company.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-slate-50 text-sm">
                      <svg className="w-4 h-4 mt-0.5 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </details>
          </main>
        </div>
      </div>

      <AnimatedSection className="py-10 md:py-14 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <div>
              <div className="text-emerald-600 font-semibold mb-4 uppercase tracking-wide text-sm">
                The Problem
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-950">
                Regulated industries can't trust black‑box AI.
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Enterprises in healthcare, finance, and government face strict compliance rules. Cloud‑based AI exposes sensitive data and fails to provide audit trails needed for legal acceptance.
              </p>
            </div>
            <div>
              <div className="text-emerald-600 font-semibold mb-4 uppercase tracking-wide text-sm">
                The Solution
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-950">
                Auditable, private AI.
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {company.pilot}
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-10 md:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <div className="text-emerald-600 font-semibold mb-4 uppercase tracking-wide text-sm">
            Expected Impact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-10 md:mb-12">
            Target Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {company.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border p-6 md:p-8 bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl md:text-4xl font-bold text-emerald-600">
                  {metric.value}
                </div>
                <div className="text-sm text-slate-500 mt-2">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-10 md:py-14 bg-[#06231C]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <div className="text-emerald-400 font-semibold mb-4 uppercase tracking-wide text-sm">
            Partner with the Team
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in {company.name}?
          </h2>
          <p className="text-slate-300 text-base md:text-lg mb-8">
            Connect directly with the founding team to discuss pilots, partnerships, or strategic opportunities.
          </p>
          <a
            href={`mailto:${company.contactEmail}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-2xl font-semibold hover:bg-emerald-600 transition"
          >
            Contact Founder
          </a>
        </div>
      </AnimatedSection>

      <div className="bg-[#02150F] text-white text-center py-4 text-sm">
        Part of the SADS Accelerator · Powered by InthraOS
      </div>
    </>
  );
}