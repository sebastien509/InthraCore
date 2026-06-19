import { useState } from 'react';

export default function PodcastPlayer({ audioUrl, transcript }) {
  const [showTranscript, setShowTranscript] = useState(false);
  return (
    <div className="my-8 p-4 bg-gray-50 rounded-xl">
      <audio controls src={audioUrl} className="w-full" />
      {transcript && (
        <button
          onClick={() => setShowTranscript(!showTranscript)}
          className="mt-3 text-sm text-blue-600"
        >
          {showTranscript ? 'Hide' : 'Show'} transcript
        </button>
      )}
      {showTranscript && (
        <div className="mt-4 p-3 bg-white text-sm rounded border">
          {transcript}
        </div>
      )}
    </div>
  );
}