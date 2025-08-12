import React from 'react';

export default {
  title: 'Components/ResponseBox',
  component: 'div',
};

export const WithResponse = () => (
  <div className="p-6 border rounded bg-gray-50 dark:bg-gray-800">
    <p className="mb-2">Mock response for model gpt-4 with temperature 0.7</p>
    <button
      onClick={() => alert('Download clicked!')}
      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
    >
      Download JSON
    </button>
  </div>
);