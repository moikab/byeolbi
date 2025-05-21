"use client";

import { BirthDateInput } from "@/components/BirthDateInput";
import { ZodiacSign } from "@/types";
import { toast } from "sonner";

export default function Home() {
  const handleBirthDateSubmit = (date: Date, zodiacSign: ZodiacSign) => {
    toast.success(`Your zodiac sign is ${zodiacSign}`, {
      description: "Generating your personalized prediction...",
    });
    // TODO: Implement prediction generation and navigation
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
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
      </div>
    </main>
  );
}
