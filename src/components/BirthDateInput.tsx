import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ZODIAC_SIGNS } from "@/constants";
import { ZodiacSign } from "@/types";
import { format } from "date-fns";

interface BirthDateInputProps {
  onSubmit: (date: Date, zodiacSign: ZodiacSign) => void;
}

export function BirthDateInput({ onSubmit }: BirthDateInputProps) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");

  const validateDate = (day: number, month: number, year: number): boolean => {
    const date = new Date(year, month - 1, day);
    if (date > new Date()) {
      setError("Birth date cannot be in the future");
      return false;
    }
    if (year < 1900 || year > new Date().getFullYear()) {
      setError("Please enter a valid year between 1900 and present");
      return false;
    }
    if (
      date.getDate() !== day ||
      date.getMonth() !== month - 1 ||
      date.getFullYear() !== year
    ) {
      setError("Please enter a valid date");
      return false;
    }
    setError("");
    return true;
  };

  const getZodiacSign = (date: Date): ZodiacSign => {
    const month = date.getMonth() + 1;
    const day = date.getDate();

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
    const dayNum = parseInt(day);
    const monthNum = parseInt(month);
    const yearNum = parseInt(year);

    if (!day || !month || !year) {
      setError("Please fill in all fields");
      return;
    }

    if (validateDate(dayNum, monthNum, yearNum)) {
      const date = new Date(yearNum, monthNum - 1, dayNum);
      const zodiacSign = getZodiacSign(date);
      onSubmit(date, zodiacSign);
    }
  };

  const handleInputChange = (
    value: string,
    setter: (value: string) => void,
    max: number
  ) => {
    const numValue = value.replace(/\D/g, "");
    if (parseInt(numValue) <= max || numValue === "") {
      setter(numValue);
      setError("");
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto glass-effect">
      <CardHeader>
        <CardTitle className="text-center cosmic-gradient bg-clip-text text-transparent">
          Discover Your Cosmic Destiny
        </CardTitle>
        <CardDescription className="text-center text-white/80">
          Enter your birth date to reveal your astrological predictions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <label className="text-sm text-white/80 block text-center">Day</label>
            <Input
              type="text"
              value={day}
              onChange={(e) => handleInputChange(e.target.value, setDay, 31)}
              className="text-center bg-white/10 border-white/20 text-white placeholder:text-white/50"
              placeholder="DD"
              maxLength={2}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-white/80 block text-center">Month</label>
            <Input
              type="text"
              value={month}
              onChange={(e) => handleInputChange(e.target.value, setMonth, 12)}
              className="text-center bg-white/10 border-white/20 text-white placeholder:text-white/50"
              placeholder="MM"
              maxLength={2}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-white/80 block text-center">Year</label>
            <Input
              type="text"
              value={year}
              onChange={(e) => handleInputChange(e.target.value, setYear, new Date().getFullYear())}
              className="text-center bg-white/10 border-white/20 text-white placeholder:text-white/50"
              placeholder="YYYY"
              maxLength={4}
            />
          </div>
        </div>
        
        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        {day && month && year && !error && (
          <div className="text-center text-sm text-white/80">
            Selected: {format(new Date(parseInt(year), parseInt(month) - 1, parseInt(day)), "MMMM do, yyyy")}
          </div>
        )}

        <div className="flex justify-center">
          <Button
            onClick={handleSubmit}
            className="cosmic-gradient hover:opacity-90 transition-opacity"
          >
            Reveal My Destiny
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 