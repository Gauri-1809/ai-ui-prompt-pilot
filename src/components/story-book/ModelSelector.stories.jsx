import React from 'react';
import ModelSelector from '../ModelSelector';


export default {
  title: 'Components/ModelSelector',
  component: ModelSelector,
};

const modelsMock = [
  { id: 'gpt-4', name: 'GPT-4' },
  { id: 'gpt-3.5', name: 'GPT-3.5' },
];

export const Default = () => {
  const [model, setModel] = React.useState(modelsMock[0].id);
  const [loading, setLoading] = React.useState(false);

  return (
    <ModelSelector
      model={model}
      setModel={setModel}
      models={modelsMock}
      loading={loading}
    />
  );
};

export const Loading = () => (
  <ModelSelector model="" setModel={() => {}} models={[]} loading={true} />
);