import React from 'react';

export default function ParamsPanel({ temperature, setTemperature, maxTokens, setMaxTokens }) {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <label className="block mb-1 text-sm font-medium">
          Temperature: {temperature}
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={temperature}
          onChange={e => setTemperature(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="flex-1">
        <label className="block mb-1 text-sm font-medium">
          Max Tokens: {maxTokens}
        </label>
        <input
          type="number"
          min="1"
          max="4096"
          value={maxTokens}
          onChange={e => setMaxTokens(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800"
        />
      </div>
    </div>
  );
}
