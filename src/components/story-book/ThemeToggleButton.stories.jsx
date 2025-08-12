import React, { useState } from 'react';

export default {
  title: 'Components/ThemeToggleButton',
  component: 'button',
};

export const Default = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border rounded bg-white dark:bg-gray-800 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      Toggle Theme (Current: {theme})
    </button>
  );
};