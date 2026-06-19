import React from 'react';
import { useParams } from 'react-router-dom';
import { allGuides, allNews } from '../lib/content';
import { MDXProvider } from '../lib/mdx';

export default function Post({ type }) {
  const { slug } = useParams();
  const pool = type === 'guide' ? allGuides : allNews;
  const post = pool.find((p) => p.slug === slug);

  if (!post) return <div className="p-6">Not found.</div>;

  const C = post.Component;

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-slate-400 mt-2">{post.date}</p>
      <div className="prose prose-invert mt-8">
        <MDXProvider>
          <C />
        </MDXProvider>
      </div>
    </article>
  );
}
