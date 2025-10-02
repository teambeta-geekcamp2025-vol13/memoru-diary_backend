import {
  GoogleGenAI,
  createUserContent,
  createPartFromUri,
} from "@google/genai";
const GEMINI_API_KEY = Deno.env.get("API_KEY");
const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

export default async function main() {
  const myfile = await ai.files.upload({
    file: "/app/src/AI/image/image.jpg",
    config: { mimeType: "image/jpeg" },
  });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: createUserContent([
      createPartFromUri(myfile.uri, myfile.mimeType),
      "画像の場所と状況を抽出",
    ]),
  });
  console.log(response.text);
  
}

await main();