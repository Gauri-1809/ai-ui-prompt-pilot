
# 🧠 PromptPilot – AI Prompt Playground

PromptPilot is a React-based UI for testing and configuring OpenAI models like GPT-4 and GPT-3.5.  
It includes support for dynamic prompts, temperature, token limits, dark mode, and JSON output downloads.

---

## 🚀 Features

- Model selector (GPT-4, GPT-3.5, etc.)
- Prompt input editor
- Temperature & Max Tokens configuration
- JSON download of mock response
- Light/Dark theme toggle
- Component-driven development using **Storybook**

---

## 📦 Tech Stack

- ⚛️ React (CRA)
- 🎨 Tailwind CSS
- 🧩 Storybook
- 🗃️ JSON for mock data
- 📦 LocalStorage for theme

---

## 📖 Storybook

All UI components were documented and tested in isolation using (https://storybook.js.org/).

## 🔍 Research

### Platforms Reviewed:
1. OpenAI Playground
2. HuggingFace Spaces
3. Claude UI (Anthropic)

### Core Features Selected:
- Model selection dropdown
- Prompt editor with response output
- Adjustable parameters (temperature, tokens)
- Theme toggle with localStorage
- JSON download support

---

## 🎨 Design

Mockup was created in Figma using Tailwind tokens (typography, color, spacing).

### Tailwind Mapping:
- Typography: `text-gray-900`, `text-white`
- Spacing: `p-4`, `gap-6`, `mt-6`
- Colors: `bg-gray-100`, `bg-gray-900`, `dark:` variants

> Figma link: [Insert your link here]

---
## 📖 Storybook

All UI components were documented and tested in isolation using [Storybook](https://storybook.js.org/).

To run it locally:

```bash
npm run storybook

To start Storybook in development mode: http://localhost:6006

## 🛠 Development

### Key Components:
- `ModelSelector`: Loads model list from `/data/models.json`
- `PromptEditor`: Handles prompt input
- `ParamsPanel`: Sliders for temperature & token control
- `ResponseBox`: Displays mock response & JSON download

### Known Limitations:
- No real API integration yet
- Fixed mock JSON data

---

## 🚀 Deployment

Live Demo: https://ai-ui-prompt-pilot.vercel.app/