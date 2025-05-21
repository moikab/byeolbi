import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { INTENSITY_LEVELS, COSMIC_ALIGNMENT_LEVELS } from "@/constants";

interface PredictionDisplayProps {
  prediction: string;
  intensity: number;
  alignment: number;
  isLoading?: boolean;
}

export function PredictionDisplay({
  prediction,
  intensity,
  alignment,
  isLoading = false,
}: PredictionDisplayProps) {
  const intensityLabel = INTENSITY_LEVELS.find((level) => level.value === intensity)?.label;
  const alignmentLabel = COSMIC_ALIGNMENT_LEVELS.find((level) => level.value === alignment)?.label;

  return (
    <Card className="w-full max-w-4xl mx-auto glass-effect">
      <CardHeader>
        <CardTitle className="text-center cosmic-gradient bg-clip-text text-transparent">
          Your Cosmic Revelation
        </CardTitle>
        <CardDescription className="text-center text-white/80">
          The stars have aligned to reveal your destiny
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {isLoading ? (
          <div className="space-y-4 animate-pulse">
            <div className="h-4 bg-white/10 rounded w-3/4"></div>
            <div className="h-4 bg-white/10 rounded w-5/6"></div>
            <div className="h-4 bg-white/10 rounded w-2/3"></div>
          </div>
        ) : (
          <>
            <div className="text-lg leading-relaxed whitespace-pre-wrap text-white/90">
              {prediction}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <p className="text-sm text-white/60">Fate Intensity</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full cosmic-gradient"
                      style={{ width: `${(intensity / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-white/80">
                    {intensityLabel}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-white/60">Cosmic Alignment</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full cosmic-gradient"
                      style={{ width: `${(alignment / 10) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-white/80">
                    {alignmentLabel}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
} 