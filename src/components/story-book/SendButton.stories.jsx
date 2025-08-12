import React from 'react';

export default {
  title: 'Components/SendButton',
  component: 'button',
};

export const Default = () => (
  <button
    onClick={() => alert('Send clicked!')}
    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
  >
    Send
  </button>
);