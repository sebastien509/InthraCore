// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#06231C] mb-4">
          404
        </h1>

        <p className="text-xl text-[#6B7280] mb-8">
          Page not found.
        </p>

        <Link
          to="/"
          className="text-[#10B981] font-medium hover:underline"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}