import { useState, useEffect } from 'react';

export default function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Extract headings from content (in real app, parse MDX)
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    const extractedHeadings = Array.from(tempDiv.querySelectorAll('h2')).map(h2 => ({
      id: h2.textContent.toLowerCase().replace(/\s+/g, '-'),
      text: h2.textContent
    }));
    setHeadings(extractedHeadings);
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <div className="glass border border-brand-40 rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-blackOlive mb-4">Table of Contents</h3>
      <nav className="space-y-2">
        {headings.map((heading, index) => (
          <a
            key={index}
            href={`#${heading.id}`}
            className="block text-gray-600 hover:text-brand text-sm transition-colors py-1"
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}