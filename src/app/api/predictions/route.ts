import { NextResponse } from "next/server";
import { generatePrediction, generateIntensityAndAlignment } from "@/services/openai";
import { ZodiacSign, PredictionType } from "@/types";

export async function POST(request: Request) {
  try {
    const { birthDate, zodiacSign, type } = await request.json();

    if (!birthDate || !zodiacSign || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const [prediction, { intensity, alignment }] = await Promise.all([
      generatePrediction(new Date(birthDate), zodiacSign as ZodiacSign, type as PredictionType),
      generateIntensityAndAlignment(),
    ]);

    return NextResponse.json({
      prediction,
      intensity,
      alignment,
    });
  } catch (error) {
    console.error("Error in prediction API:", error);
    return NextResponse.json(
      { error: "Failed to generate prediction" },
      { status: 500 }
    );
  }
} 