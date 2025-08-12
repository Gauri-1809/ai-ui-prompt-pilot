import React, { useState, useEffect, useCallback } from 'react';
import ModelSelector from './ModelSelector';
import PromptEditor from './PromptEditor';
import ParamsPanel from './ParamsPanel';
import ResponseBox from './ResponseBox';
import ThemeToggle from './ThemeToggle';

export default function PromptPilot() {
  const [model, setModel] = useState('gpt-4');
  const [prompt, setPrompt] = useState('');
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(500);
  const [response, setResponse] = useState('');
  const [theme, setTheme] = useState('light');
  const [models, setModels] = useState([]);
  const [loadingModels, setLoadingModels] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  useEffect(() => {
    fetch('/data/models.json')
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setModel(data[0]?.id || 'gpt-4');
      })
      .catch((err) => console.error('Error fetching models:', err))
      .finally(() => setLoadingModels(false));
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  }, [theme]);

  const handleSend = () => {
    setResponse(`Mock response for model ${model} with temperature ${temperature}`);
  };

  const handleDownload = () => {
    const data = { model, prompt, temperature, maxTokens, response };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'response.json';
    a.click();
  };

  return (
    <div className="prompt-container min-h-screen p-6 bg-gradient-to-r from-sky-300 via-rose-300 to-lime-300 dark:text-white dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-700 dark:to-black">
      <h2 class="text-2xl font-bold text-white mb-4">Custom GPT Prompt Interface</h2>

      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <ModelSelector model={model} setModel={setModel} models={models} loading={loadingModels} />
          <ThemeToggle toggleTheme={toggleTheme} />
        </div>

        <PromptEditor prompt={prompt} setPrompt={setPrompt} />

        <ParamsPanel
          temperature={temperature}
          setTemperature={setTemperature}
          maxTokens={maxTokens}
          setMaxTokens={setMaxTokens}
        />

        <button
          onClick={handleSend}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
        >
          Send
        </button>

        <ResponseBox response={response} handleDownload={handleDownload} />
      </div>
    </div>
  );
}