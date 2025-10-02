
import {GoogleGenAI} from '@google/genai';
const GEMINI_API_KEY = Deno.env.get("API_KEY");

const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

export default async function main() {
  const data = await ai.models.generateContent({
    model: 'gemini-2.0-flash-001',
    contents: 'Why is the sky blue?',
  });
  console.log(data.text);
}
main();

