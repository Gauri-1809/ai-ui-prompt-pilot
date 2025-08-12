import React from 'react';
import PromptEditor from '../PromptEditor';

export default {
  title: 'Components/PromptEditor',
  component: PromptEditor,
};

export const Default = () => {
  const [prompt, setPrompt] = React.useState('');

  return <PromptEditor prompt={prompt} setPrompt={setPrompt} />;
};