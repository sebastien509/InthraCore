import { useEffect } from 'react';

// This would typically be server-side, but for React we can generate on build
export function generateSitemap(pages = []) {
  const baseUrl = 'https://inthracore.org';
  const urls = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/guides', priority: 0.9, changefreq: 'weekly' },
    { url: '/news', priority: 0.8, changefreq: 'daily' },
    { url: '/podcast', priority: 0.7, changefreq: 'weekly' },
    { url: '/people', priority: 0.6, changefreq: 'monthly' },
    { url: '/press', priority: 0.5, changefreq: 'monthly' },
    { url: '/newsletter', priority: 0.4, changefreq: 'monthly' },
    ...pages.map(page => ({
      url: page.url,
      priority: page.priority || 0.6,
      changefreq: page.changefreq || 'monthly',
      lastmod: page.lastmod || new Date().toISOString().split('T')[0]
    }))
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(({ url, priority, changefreq, lastmod }) => `
  <url>
    <loc>${baseUrl}${url}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
  `).join('')}
</urlset>`;
}

export function RobotsTxt() {
  useEffect(() => {
    // This would typically be handled at the server level
    // For client-side, we can set meta robots
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    document.head.appendChild(meta);

    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return null;
}