import OpenAI from "openai";
import { ZodiacSign, PredictionType } from "@/types";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are a mystical cosmic guide who provides astrological predictions. 
Your predictions should be:
- Insightful and personalized
- Positive but realistic
- Written in a mystical yet professional tone
- Include specific details about potential opportunities or challenges
- Reference cosmic events and astrological phenomena`;

export async function generatePrediction(
  birthDate: Date,
  zodiacSign: ZodiacSign,
  type: PredictionType
): Promise<string> {
  const timeframe = type === "Personal" ? "life" : type.toLowerCase();
  
  const userPrompt = `Generate a ${type.toLowerCase()} prediction for someone born on ${birthDate.toISOString().split("T")[0]} (${zodiacSign}).
Consider:
- Their zodiac sign's characteristics
- Current planetary alignments
- The cosmic energy for this ${timeframe} period
- Potential opportunities and challenges
- Areas of growth and transformation

Format the response in a mystical yet professional tone, focusing on personal growth and potential.`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return completion.choices[0].message.content || "The cosmic energies are unclear at this moment...";
  } catch (error) {
    console.error("Error generating prediction:", error);
    throw new Error("Failed to generate prediction. The cosmic energies are disturbed.");
  }
}

export async function generateIntensityAndAlignment(): Promise<{
  intensity: number;
  alignment: number;
}> {
  // Generate random values between 1-10 for now
  // In a real application, this could be based on actual astrological calculations
  return {
    intensity: Math.floor(Math.random() * 10) + 1,
    alignment: Math.floor(Math.random() * 10) + 1,
  };
} 