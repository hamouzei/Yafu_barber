# Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local and add your Gemini API key
# Get your key from: https://makersuite.google.com/app/apikey
```

### 3. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

---

## Important Notes About API Endpoint

### For Vite Development

The `/api/style-advice` endpoint is currently set up for serverless deployment (Vercel, Netlify, etc.).

**For local development**, you have two options:

#### Option A: Use Vite API Proxy (Recommended for Development)

Update `vite.config.ts` to add a proxy:

```typescript
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    server: {
      port: 3000,
      host: "0.0.0.0",
      proxy: {
        "/api": {
          target: "http://localhost:3001",
          changeOrigin: true,
        },
      },
    },
    // ... rest of config
  };
});
```

Then create a simple Express server in `server.js`:

```javascript
import express from "express";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const app = express();
app.use(express.json());

app.post("/api/style-advice", async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: `I am a client looking for a premium haircut advice. My description: "${query}". Act as a master barber and provide a concise, high-end recommendation.`,
      config: {
        systemInstruction: "You are an elite master barber at BuzzCut.",
        maxOutputTokens: 300,
      },
    });

    res.json({ recommendation: response.text });
  } catch (error) {
    res.status(500).json({
      recommendation:
        "I'm having trouble right now. Please visit us for a live consultation.",
    });
  }
});

app.listen(3001, () => console.log("API server running on port 3001"));
```

#### Option B: Deploy to Vercel/Netlify (Recommended for Production)

The current setup works automatically with:

- **Vercel**: Just deploy - API routes work out of the box
- **Netlify**: Rename `api/` to `netlify/functions/`

---

## Deployment

### Deploy to Vercel (Easiest)

1. Push your code to GitHub
2. Import project to Vercel
3. Add `GEMINI_API_KEY` to environment variables
4. Deploy!

### Deploy to Netlify

1. Rename `api/` folder to `netlify/functions/`
2. Update fetch URL in `StyleConsultant.tsx`:
   ```typescript
   const response = await fetch('/.netlify/functions/style-advice', {
   ```
3. Add `GEMINI_API_KEY` to Netlify environment variables
4. Deploy!

---

## Troubleshooting

### API Endpoint Not Working Locally?

- The serverless function only works when deployed or with a local proxy
- For testing, you can temporarily use the client-side API (not recommended for production)
- Or set up the Express proxy as shown above

### AI Recommendations Not Working?

- Check that `GEMINI_API_KEY` is set in `.env.local`
- Verify the API key is valid at https://makersuite.google.com
- Check browser console for errors

### Mobile Menu Not Appearing?

- Clear browser cache
- Check that responsive breakpoints work (try resizing browser)

---

Need help? Check the main [README.md](README.md) for more details.
