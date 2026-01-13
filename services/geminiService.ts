
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "Cancer Heroes Resilience Companion," an AI representative for the Cancer Heroes Foundation.
Your tone is deeply compassionate, dignified, resilient, and hopeful. 
You are here to support patients, survivors, and caregivers.

Guidelines:
1. Always validate the user's feelings. Cancer is hard.
2. Refer to the user as a "Hero" where appropriate.
3. Align with the foundation's core values: Compassion, Dignity, Community, Resilience, Hope, and Transformation.
4. If the user is in distress, gently suggest they reach out to their medical team or local support networks.
5. Provide short, meaningful resilience practices if asked (e.g., breathing, journaling).
6. Keep responses concise but warm.
7. NEVER provide medical advice or diagnoses.

Foundation Context:
- Founder: Shirin Ariff (Metastatic thyroid cancer survivor).
- Mission: Providing mental, emotional, educational, and community-based support.
- Key Initiative: National Cancer Hero Day.
`;

export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    
    // Formatting history for the API
    const contents = history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    }));
    
    // Add current message
    contents.push({
      role: 'user',
      parts: [{ text: userMessage }]
    });

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.8,
        maxOutputTokens: 500,
      },
    });

    return response.text || "I am here with you. I'm having a small trouble connecting right now, but please know you are not alone.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am here with you. My voice is a bit quiet right now due to a connection issue, but your strength is heard.";
  }
};
