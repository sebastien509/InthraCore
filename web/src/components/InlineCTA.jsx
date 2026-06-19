import { Link } from 'react-router-dom';

export default function InlineCTA({ label = "Subscribe", href = "/newsletter", note = "Get new guides monthly." }) {
  return (
    <div className="my-10 rounded-2xl border border-brand-200 bg-brand-50 p-6 glass">
      <div className="font-semibold text-blackOlive text-lg">Enjoying this guide?</div>
      <p className="text-gray-600 text-sm mt-1">{note}</p>
      <Link 
        to={href} 
        className="inline-block mt-3 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-80 to-brand-60 text-white font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
      >
        {label}
      </Link>
    </div>
  );
}