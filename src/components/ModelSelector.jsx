import React from 'react';

export default function ModelSelector({ model, setModel, models, loading }) {
  return (
    <select
      value={model}
      onChange={e => setModel(e.target.value)}
      className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white-100 dark:bg-gray-800"
    >
      {loading ? (
        <option>Loading...</option>
      ) : (
        models.map(m => (
          <option key={m.id} value={m.id}>
            {m.name}
          </option>
        ))
      )}
    </select>
  );
}
