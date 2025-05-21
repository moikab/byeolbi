"use client";

import { useState } from "react";
import { BirthDateInput } from "@/components/BirthDateInput";
import { PredictionDisplay } from "@/components/PredictionDisplay";
import { ZodiacSign } from "@/types";
import { toast } from "sonner";

export default function Home() {
  const [prediction, setPrediction] = useState<{
    text: string;
    intensity: number;
    alignment: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleBirthDateSubmit = async (date: Date, zodiacSign: ZodiacSign) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/predictions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          birthDate: date.toISOString(),
          zodiacSign,
          type: "Personal",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate prediction");
      }

      const data = await response.json();
      setPrediction({
        text: data.prediction,
        intensity: data.intensity,
        alignment: data.alignment,
      });
      toast.success("Your cosmic prediction is ready!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to generate prediction. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 space-y-8">
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-6xl font-bold cosmic-gradient bg-clip-text text-transparent">
            별비 (Byeolbi)
          </h1>
          <p className="text-lg sm:text-xl text-white/80">
            Your Personal Cosmic Guide to Destiny
          </p>
        </div>

        <BirthDateInput onSubmit={handleBirthDateSubmit} />

        {(isLoading || prediction) && (
          <PredictionDisplay
            prediction={prediction?.text || ""}
            intensity={prediction?.intensity || 5}
            alignment={prediction?.alignment || 5}
            isLoading={isLoading}
          />
        )}
      </div>
    </main>
  );
}
