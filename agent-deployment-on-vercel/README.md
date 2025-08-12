# mastra-ai-agents-examples/agent-deployment-on-vercel

> 🔗 Checkout the full article about this example on [Medium](https://medium.com/@_davidsam/from-local-to-live-deploying-mastra-agents-to-vercel-with-basic-authentication-59f3252684a6)

An example of a Mastra project deployed to Vercel.

## Prerequisites

- Node.js (v20.0+)
- An API key to OpenAI

## Installation

1. Clone the repo

```bash
git clone https://github.com/davidsmcts/mastra-ai-agents-examples.git
```

2. Navigate to this folder and install dependencies

```bash
cd agent-deployment-on-vercel
npm i
```

## Usage

1. Create a `.env.development` file with your Open AI API key

```bash
OPENAI_API_KEY=your_api_key
MASTRA_JWT_SECRET=your_jwt_secret
```

2. Start Mastra and navigate to `http://localhost:4111/` to explore its Playground

```bash
npm run dev
```
