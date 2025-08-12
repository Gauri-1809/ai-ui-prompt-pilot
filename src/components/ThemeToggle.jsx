import React from 'react';

export default function ThemeToggle({ toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="transition-all duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 p-2 border rounded bg-white dark:bg-gray-800 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      Toggle Theme
    </button>
  );
}
