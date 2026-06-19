import { useEffect } from 'react';

export function useSEO({ 
  title = '', 
  description = '', 
  canonical = '', 
  image = '/images/og-image.jpg',
  type = 'website',
  publishedTime = '',
  modifiedTime = '',
  author = '',
  tags = [],
  noindex = false
} = {}) {
  
  useEffect(() => {
    const siteTitle = 'InthraCore - Privacy-First Edge AI Systems';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const siteUrl = 'https://inthracore.org';
    const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

    // Update title
    document.title = fullTitle;

    // Update meta tags
    updateMetaTag('name', 'description', description);
    updateMetaTag('property', 'og:title', fullTitle);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:type', type);
    updateMetaTag('property', 'og:url', fullCanonical);
    updateMetaTag('property', 'og:image', image);
    updateMetaTag('property', 'og:site_name', siteTitle);
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', fullTitle);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', image);

    // Update canonical link
    updateCanonicalLink(fullCanonical);

    // Robots meta
    if (noindex) {
      updateMetaTag('name', 'robots', 'noindex, nofollow');
    }

    // Add structured data
    addStructuredData({
      title: fullTitle,
      description,
      url: fullCanonical,
      type,
      publishedTime,
      author,
      tags,
      siteUrl
    });

    // Cleanup function
    return () => {
      document.title = siteTitle;
    };
  }, [title, description, canonical, image, type, publishedTime, author, tags, noindex]);
}

function updateMetaTag(attribute, name, content) {
  if (!content) return;

  let tag = document.querySelector(`meta[${attribute}="${name}"]`);
  if (tag) {
    tag.setAttribute('content', content);
  } else {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    tag.setAttribute('content', content);
    document.head.appendChild(tag);
  }
}

function updateCanonicalLink(url) {
  let link = document.querySelector('link[rel="canonical"]');
  if (link) {
    link.setAttribute('href', url);
  } else {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }
}

function addStructuredData(data) {
  // Remove existing structured data
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
  existingScripts.forEach(script => script.remove());

  let structuredData = {};

  if (data.type === 'article') {
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.title,
      description: data.description,
      url: data.url,
      datePublished: data.publishedTime,
      dateModified: data.modifiedTime || data.publishedTime,
      author: {
        '@type': 'Person',
        name: data.author
      },
      publisher: {
        '@type': 'Organization',
        name: 'InthraCore',
        url: data.siteUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${data.siteUrl}/images/logo.png`
        }
      },
      articleSection: data.tags?.[0] || 'Technology',
      keywords: data.tags?.join(', ')
    };
  } else {
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'InthraCore',
      url: data.siteUrl,
      description: data.description,
      publisher: {
        '@type': 'Organization',
        name: 'InthraCore'
      }
    };
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
}

// Component version
export default function SEO(props) {
  useSEO(props);
  return null;
}