export type ZodiacSign =
  | "Aries"
  | "Taurus"
  | "Gemini"
  | "Cancer"
  | "Leo"
  | "Virgo"
  | "Libra"
  | "Scorpio"
  | "Sagittarius"
  | "Capricorn"
  | "Aquarius"
  | "Pisces";

export type PredictionType = "Personal" | "Monthly" | "Quarterly" | "Yearly";

export type ProphecyStatus = "Pending" | "Verified" | "Debunked";

export type ProphecyCategory =
  | "World Events"
  | "Natural Disasters"
  | "Technology"
  | "Society"
  | "Politics"
  | "Environment";

export interface UserPrediction {
  id: string;
  type: PredictionType;
  content: string;
  intensity: number; // 1-10
  alignment: number; // 1-10
  createdAt: Date;
  prophecyId?: string;
}

export interface Prophecy {
  id: string;
  title: string;
  description: string;
  source: string;
  year: number;
  isVerified: boolean;
  status: ProphecyStatus;
  category: ProphecyCategory;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  birthDate: Date;
  zodiacSign: ZodiacSign;
  predictions: UserPrediction[];
  createdAt: Date;
  updatedAt: Date;
}
