import { ZodiacSign, ProphecyCategory } from "../types";

export const ZODIAC_SIGNS: { [key in ZodiacSign]: { startDate: string; endDate: string } } = {
  Aries: { startDate: "03-21", endDate: "04-19" },
  Taurus: { startDate: "04-20", endDate: "05-20" },
  Gemini: { startDate: "05-21", endDate: "06-20" },
  Cancer: { startDate: "06-21", endDate: "07-22" },
  Leo: { startDate: "07-23", endDate: "08-22" },
  Virgo: { startDate: "08-23", endDate: "09-22" },
  Libra: { startDate: "09-23", endDate: "10-22" },
  Scorpio: { startDate: "10-23", endDate: "11-21" },
  Sagittarius: { startDate: "11-22", endDate: "12-21" },
  Capricorn: { startDate: "12-22", endDate: "01-19" },
  Aquarius: { startDate: "01-20", endDate: "02-18" },
  Pisces: { startDate: "02-19", endDate: "03-20" },
};

export const FAMOUS_PROPHETS = [
  "Nostradamus",
  "Baba Vanga",
  "Edgar Cayce",
  "Saint Malachy",
  "Mother Shipton",
] as const;

export const PROPHECY_CATEGORIES: ProphecyCategory[] = [
  "World Events",
  "Natural Disasters",
  "Technology",
  "Society",
  "Politics",
  "Environment",
];

export const INTENSITY_LEVELS = [
  { value: 1, label: "Very Low" },
  { value: 2, label: "Low" },
  { value: 3, label: "Below Average" },
  { value: 4, label: "Slightly Below Average" },
  { value: 5, label: "Average" },
  { value: 6, label: "Slightly Above Average" },
  { value: 7, label: "Above Average" },
  { value: 8, label: "High" },
  { value: 9, label: "Very High" },
  { value: 10, label: "Extreme" },
] as const;

export const COSMIC_ALIGNMENT_LEVELS = [
  { value: 1, label: "Severely Misaligned" },
  { value: 2, label: "Highly Misaligned" },
  { value: 3, label: "Moderately Misaligned" },
  { value: 4, label: "Slightly Misaligned" },
  { value: 5, label: "Neutral" },
  { value: 6, label: "Slightly Aligned" },
  { value: 7, label: "Moderately Aligned" },
  { value: 8, label: "Well Aligned" },
  { value: 9, label: "Highly Aligned" },
  { value: 10, label: "Perfect Alignment" },
] as const;
