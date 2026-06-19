import Layout from '../components/ui/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

export default function PressPage() {
  const pressAssets = [
    {
      title: "Logo Pack",
      description: "Official InthraCore logos in SVG and PNG formats",
      files: [
        { name: "Logo - Primary (SVG)", url: "/press/logo-primary.svg", size: "45 KB" },
        { name: "Logo - Primary (PNG)", url: "/press/logo-primary.png", size: "120 KB" },
        { name: "Logo - White (SVG)", url: "/press/logo-white.svg", size: "45 KB" },
        { name: "Logo - Icon (SVG)", url: "/press/logo-icon.svg", size: "32 KB" }
      ]
    },
    {
      title: "Brand Assets",
      description: "Color palette and typography specifications",
      files: [
        { name: "Brand Guidelines (PDF)", url: "/press/brand-guidelines.pdf", size: "2.1 MB" },
        { name: "Color Palette", url: "/press/color-palette.pdf", size: "890 KB" },
        { name: "Typography Guide", url: "/press/typography-guide.pdf", size: "1.2 MB" }
      ]
    },
    {
      title: "Product Screenshots",
      description: "High-resolution product screenshots",
      files: [
        { name: "Dashboard - Overview", url: "/press/screenshot-dashboard.jpg", size: "4.2 MB" },
        { name: "Privacy Receipts View", url: "/press/screenshot-privacy.jpg", size: "3.8 MB" },
        { name: "Edge Deployment", url: "/press/screenshot-edge.jpg", size: "4.5 MB" }
      ]
    }
  ];

  const mediaClips = [
    {
      title: "Edge AI Performance Demo",
      description: "30-second clip showing edge vs cloud latency comparison",
      duration: "0:30",
      thumbnail: "/press/clip-edge-performance.jpg",
      videoUrl: "/press/clip-edge-performance.mp4"
    },
    {
      title: "Privacy Receipts Export",
      description: "45-second demonstration of privacy receipts generation",
      duration: "0:45",
      thumbnail: "/press/clip-privacy-receipts.jpg",
      videoUrl: "/press/clip-privacy-receipts.mp4"
    }
  ];

  const pressReleases = [
    {
      title: "InthraCore Launches Privacy-First AI Platform",
      date: "2025-09-15",
      url: "/press/releases/platform-launch.pdf"
    },
    {
      title: "Partnership with Major Healthcare Provider",
      date: "2025-09-28",
      url: "/press/releases/healthcare-partnership.pdf"
    },
    {
      title: "Edge Summit 2025 Presentation",
      date: "2025-10-02",
      url: "/press/releases/edge-summit.pdf"
    }
  ];

  return (
    <Layout>
      <SEO
        title="Press Kit - InthraCore"
        description="Media resources, brand assets, and press information for InthraCore."
        canonical="/press"
      />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-blackOlive/5 to-blackOlive/10 py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-blackOlive mb-4">Press Kit</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resources for journalists, analysts, and media professionals covering InthraCore.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Boilerplate */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-2xl p-8 border border-blackOlive/20"
            >
              <h2 className="text-2xl font-bold text-blackOlive mb-4">About InthraCore</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-4">
                  <strong>InthraCore</strong> is building the future of privacy-first, edge-native AI systems. 
                  Our platform enables organizations to deploy AI models locally with verifiable privacy receipts, 
                  ensuring data sovereignty and compliance with regulations like GDPR and the EU AI Act.
                </p>
                <p className="text-gray-600">
                  Founded in 2024, InthraCore represents a fundamental shift in how AI systems are built and deployed— 
                  putting human dignity, privacy, and autonomy at the center of technological advancement.
                </p>
              </div>
            </motion.section>

            {/* Media Clips */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl p-8 border border-blackOlive/20"
            >
              <h2 className="text-2xl font-bold text-blackOlive mb-6">Media Clips</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {mediaClips.map((clip, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-sm">Video Preview</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-blackOlive mb-2">{clip.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{clip.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-sm">{clip.duration}</span>
                        <a
                          href={clip.videoUrl}
                          download
                          className="bg-blackOlive hover:bg-blackOlive/80 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Press Releases */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-8 border border-blackOlive/20"
            >
              <h2 className="text-2xl font-bold text-blackOlive mb-6">Press Releases</h2>
              <div className="space-y-4">
                {pressReleases.map((release, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                    <div>
                      <h3 className="font-semibold text-blackOlive">{release.title}</h3>
                      <p className="text-gray-500 text-sm">{release.date}</p>
                    </div>
                    <a
                      href={release.url}
                      download
                      className="bg-blackOlive hover:bg-blackOlive/80 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                    >
                      Download PDF
                    </a>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-2xl p-6 border border-blackOlive/20"
              >
                <h3 className="text-lg font-semibold text-blackOlive mb-4">Press Contact</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:press@inthracore.org" className="text-blackOlive hover:text-brand font-medium">
                      press@inthracore.org
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a href="tel:+1-555-123-4567" className="text-blackOlive hover:text-brand font-medium">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Calendar</p>
                    <a 
                      href="https://calendly.com/inthracore-press" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blackOlive hover:text-brand font-medium"
                    >
                      Schedule a briefing
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Quick Facts */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="glass rounded-2xl p-6 border border-blackOlive/20"
              >
                <h3 className="text-lg font-semibold text-blackOlive mb-4">Quick Facts</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Founded</span>
                    <span className="font-medium">2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Headquarters</span>
                    <span className="font-medium">Global Remote</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Team Size</span>
                    <span className="font-medium">15+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Open Source</span>
                    <span className="font-medium">Yes</span>
                  </div>
                </div>
              </motion.div>

              {/* Press Assets */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="glass rounded-2xl p-6 border border-blackOlive/20"
              >
                <h3 className="text-lg font-semibold text-blackOlive mb-4">Download Assets</h3>
                <div className="space-y-3">
                  {pressAssets.map((asset, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-blackOlive text-sm mb-2">{asset.title}</h4>
                      <p className="text-gray-500 text-xs mb-2">{asset.description}</p>
                      <div className="space-y-1">
                        {asset.files.map((file, fileIndex) => (
                          <a
                            key={fileIndex}
                            href={file.url}
                            download
                            className="flex items-center justify-between text-xs text-gray-600 hover:text-blackOlive transition-colors"
                          >
                            <span>{file.name}</span>
                            <span className="text-gray-400">{file.size}</span>
                          </a>
                        ))}
                      </div>
                      {index < pressAssets.length - 1 && <div className="border-t border-gray-200 my-3"></div>}
                    </div>
                  ))}
                </div>
                <button className="w-full bg-blackOlive hover:bg-blackOlive/80 text-white py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 mt-4">
                  Download All Assets
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}