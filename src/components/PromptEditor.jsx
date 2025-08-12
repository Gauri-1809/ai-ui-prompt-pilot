import React from 'react';

export default function PromptEditor({ prompt, setPrompt }) {
  return (
    <textarea
      value={prompt}
      onChange={e => setPrompt(e.target.value)}
      placeholder="Type your prompt here..."
      className="w-full p-4 h-32 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 resize-none"
    />
  );
}
