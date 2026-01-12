import React, { useState } from "react";
import { Loader2, Wand2 } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const StyleConsultant: React.FC = () => {
  const [query, setQuery] = useState("");
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getStyleAdvice = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

      if (!apiKey) {
        setRecommendation(
          "AI service is not configured. Please visit us for a live consultation at YafuBarber!"
        );
        setLoading(false);
        return;
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro",
        generationConfig: {
          maxOutputTokens: 300,
        },
      });

      const prompt = `I am a client at YafuBarber, a premium grooming studio in Addis Ababa. My description: "${query}". 
Act as an elite master barber and provide a concise, high-end recommendation for:
1. Best haircut style for me
2. Recommended hair products
3. Maintenance schedule

Keep it professional, stylish, and under 200 words.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setRecommendation(
        text ||
          "I'm having trouble coming up with a style right now. Why don't you visit us for a live consultation?"
      );
    } catch (error: any) {
      console.error("AI Error:", error);
      setRecommendation(
        "I'm having trouble connecting to the AI service. Please visit us at YafuBarber for a personal consultation!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-brand-gray/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-heading uppercase mb-4 tracking-tight">
            AI Style <span className="text-brand-accent">Consultant</span>
          </h2>
          <p className="text-brand-lightGray">
            Describe your hair type, face shape, or the look you want to
            achieve. Our digital master barber will suggest the perfect cut.
          </p>
        </div>

        <div className="bg-brand-dark p-8 rounded-xl border border-white/5 shadow-2xl">
          <div className="flex flex-col gap-4">
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., 'I have thick wavy hair, round face, and want something professional but modern.'"
              className="w-full bg-brand-gray border border-white/10 rounded-lg p-4 text-white placeholder-brand-lightGray focus:ring-1 focus:ring-brand-accent focus:outline-none min-h-[120px]"
            />
            <button
              onClick={getStyleAdvice}
              disabled={loading}
              className="bg-brand-accent hover:bg-brand-accent/90 disabled:bg-brand-gray text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-all uppercase tracking-widest text-sm"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5" />
                  Consulting Master Barber...
                </>
              ) : (
                <>
                  <Wand2 className="h-5 w-5" />
                  Get AI Recommendations
                </>
              )}
            </button>
          </div>

          {recommendation && (
            <div className="mt-8 p-6 bg-brand-accent/10 border-l-4 border-brand-accent rounded-r-lg animate-in fade-in slide-in-from-top-4 duration-500">
              <h3 className="text-brand-accent font-heading uppercase mb-2 tracking-wide text-lg">
                Recommended Look:
              </h3>
              <div className="text-brand-lightGray leading-relaxed whitespace-pre-line">
                {recommendation}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StyleConsultant;
