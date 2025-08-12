import React, { useState } from 'react';

export default {
  title: 'Components/ParametersPanel',
  component: 'div',
};

export const Default = () => {
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(500);

  return (
    <div className="flex gap-4">
      <div className="flex-1">
        <label>Temperature: {temperature}</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={temperature}
          onChange={(e) => setTemperature(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>
      <div className="flex-1">
        <label>Max Tokens: {maxTokens}</label>
        <input
          type="number"
          value={maxTokens}
          onChange={(e) => setMaxTokens(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
};
