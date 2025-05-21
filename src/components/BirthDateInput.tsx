import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ZODIAC_SIGNS } from "@/constants";
import { ZodiacSign } from "@/types";
import { format } from "date-fns";

interface BirthDateInputProps {
  onSubmit: (date: Date, zodiacSign: ZodiacSign) => void;
}

export function BirthDateInput({ onSubmit }: BirthDateInputProps) {
  const [date, setDate] = useState<Date>();

  const getZodiacSign = (date: Date): ZodiacSign => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const monthDay = `${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

    for (const [sign, dates] of Object.entries(ZODIAC_SIGNS)) {
      const [startMonth, startDay] = dates.startDate.split("-").map(Number);
      const [endMonth, endDay] = dates.endDate.split("-").map(Number);

      if (
        (month === startMonth && day >= startDay) ||
        (month === endMonth && day <= endDay) ||
        (startMonth > endMonth && // Handle Capricorn case (Dec-Jan)
          ((month === startMonth && day >= startDay) ||
            (month === endMonth && day <= endDay) ||
            (month > startMonth) ||
            (month < endMonth)))
      ) {
        return sign as ZodiacSign;
      }
    }

    return "Capricorn"; // Default fallback
  };

  const handleSubmit = () => {
    if (date) {
      const zodiacSign = getZodiacSign(date);
      onSubmit(date, zodiacSign);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto glass-effect">
      <CardHeader>
        <CardTitle className="text-center cosmic-gradient bg-clip-text text-transparent">
          Discover Your Cosmic Destiny
        </CardTitle>
        <CardDescription className="text-center text-white/80">
          Select your birth date to reveal your astrological predictions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border glass-effect"
            disabled={{ after: new Date() }}
          />
        </div>
        {date && (
          <div className="space-y-4">
            <p className="text-center text-sm text-white/80">
              Selected: {format(date, "MMMM do, yyyy")}
            </p>
            <div className="flex justify-center">
              <Button
                onClick={handleSubmit}
                className="cosmic-gradient hover:opacity-90 transition-opacity"
              >
                Reveal My Destiny
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
} 