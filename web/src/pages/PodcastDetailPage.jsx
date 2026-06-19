
import React from 'react'

function PodcastDetailPage() {
  return (
    <div>PodcastDetailPage</div>
  )
}

export default PodcastDetailPage
// import { useParams, Link } from 'react-router-dom';
// import Section from '../components/ui/Section';
// import data from '../data/articles.json';

// export default function PodcastDetailPage() {
//   const { slug } = useParams();
//   const episode = data.podcasts.find(e => e.slug === slug);

//   if (!episode) return <Section><p>Episode not found.</p></Section>;

//   return (
//     <Section>
//       <Link to="/podcast" className="text-[#10B981] hover:underline mb-4 inline-block">← All Episodes</Link>
//       <p className="text-sm text-[#10B981] uppercase tracking-wide mb-2">Podcast</p>
//       <h1 className="text-3xl font-bold text-[#06231C] mb-4">{episode.title}</h1>
//       <div className="flex gap-4 text-sm text-[#6B7280] mb-6">
//         <span>{episode.date}</span>
//         <span>{episode.duration}</span>
//       </div>
//       <p className="text-[#06231C] mb-6">{episode.excerpt}</p>
//       <audio controls src={episode.audioUrl} className="w-full" />
//     </Section>
//   );
// }