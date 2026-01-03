
import { GoogleGenAI, Type } from "@google/genai";
import { StrategyResponse } from "../types";

/**
 * Generates an influencer marketing strategy using Gemini 3 Flash.
 * Initializes the AI instance per-call to ensure latest API key usage.
 */
export const generateStrategy = async (niche: string, platform: string): Promise<StrategyResponse> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide a quick influencer marketing strategy for the niche: ${niche} on the platform: ${platform}.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            advice: {
              type: Type.STRING,
              description: "A professional and encouraging 2-sentence marketing advice.",
            },
            trendingHooks: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3 catchy content hooks or video title ideas.",
            },
          },
          required: ["advice", "trendingHooks"],
        },
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response text returned from the model.");
    }

    return JSON.parse(text.trim()) as StrategyResponse;
  } catch (error) {
    console.error("Error generating strategy:", error);
    return {
      advice: "Focus on building genuine engagement through storytelling and consistent value sharing.",
      trendingHooks: ["Day in the life of...", "Why I changed my mind about...", "My secret to success in..."],
    };
  }
};
