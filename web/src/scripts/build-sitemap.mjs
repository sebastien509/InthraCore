// scripts/build-sitemap.mjs
import fs from 'fs';
import path from 'path';

const base = 'https://inthracore.com';
const routes = ['/', '/guides', '/news', '/podcast', '/people', '/press']; // static
// dynamic from MDX (export a JSON at build or read a manifest your app emits)
const manifest = JSON.parse(fs.readFileSync('./dist/content-manifest.json','utf8'));
const urls = [...routes, ...manifest.posts.map(p=>p.url)];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u=>`  <url><loc>${base}${u}</loc></url>`).join('\n')}
</urlset>`;
fs.writeFileSync('./dist/sitemap.xml', xml);
