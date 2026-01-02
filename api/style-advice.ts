import { GoogleGenAI } from '@google/genai';

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { query } = req.body;

  if (!query || typeof query !== 'string' || !query.trim()) {
    return res.status(400).json({ error: 'Query is required' });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      console.error('GEMINI_API_KEY is not configured');
      return res.status(500).json({ 
        error: "Service temporarily unavailable. Please visit us for a live consultation." 
      });
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: `I am a client looking for a premium haircut advice. My description: "${query}". 
      Act as a master barber and provide a concise, high-end recommendation for a style, hair product, 
      and how often I should visit the shop. Keep it professional and stylish.`,
      config: {
        systemInstruction: 'You are an elite master barber at BuzzCut, a luxury grooming studio.',
        maxOutputTokens: 300,
      },
    });

    const recommendation = response.text || "I'm having trouble coming up with a style right now. Why don't you visit us for a live consultation?";

    return res.status(200).json({ recommendation });
  } catch (error: any) {
    console.error('AI API Error:', error);
    return res.status(500).json({ 
      error: "I'm having trouble coming up with a style right now. Why don't you visit us for a live consultation?",
      recommendation: "I'm having trouble coming up with a style right now. Why don't you visit us for a live consultation?"
    });
  }
}
