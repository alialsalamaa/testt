
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
// Assume this variable is pre-configured, valid, and accessible in the execution context.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    const response = await ai.models.generateContent({
      model: model,
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    // Directly access the text property as per the documentation guidelines
    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I apologize, but I'm having trouble connecting to my brain right now. Please try again later.";
  }
};

export const getLiveScholarStats = async (): Promise<{ citations: number; hIndex: number } | null> => {
  try {
    const model = 'gemini-3-flash-preview';
    const prompt = `
      Search for the Google Scholar profile of "Dr. Ayad Turky University of Sharjah".
      Find the exact "Citations" (All) and "h-index" (All) numbers.
      Return the answer strictly in this format:
      Citations: [number]
      h-index: [number]
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        temperature: 0.1, // Low temperature for factual extraction
      }
    });

    const text = response.text || "";
    
    // Parse the response using Regex
    const citationsMatch = text.match(/Citations:\s*([\d,]+)/i);
    const hIndexMatch = text.match(/h-index:\s*(\d+)/i);

    if (citationsMatch && hIndexMatch) {
      // Remove commas and parse integers
      const citations = parseInt(citationsMatch[1].replace(/,/g, ''), 10);
      const hIndex = parseInt(hIndexMatch[1], 10);

      if (!isNaN(citations) && !isNaN(hIndex)) {
        return { citations, hIndex };
      }
    }
    
    return null;
  } catch (error) {
    console.error("Failed to fetch live scholar stats:", error);
    return null;
  }
};
