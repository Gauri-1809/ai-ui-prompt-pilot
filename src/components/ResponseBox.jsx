import React from 'react';

export default function ResponseBox({ response, handleDownload }) {
  if (!response) return null;

  return (
    <div className="mt-6 p-6 border rounded bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600">
      <p className="transition-all duration-300 ease-in-out mb-2">{response}</p>
      <button
        onClick={handleDownload}
        className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Download JSON
      </button>
    </div>
  );
}
