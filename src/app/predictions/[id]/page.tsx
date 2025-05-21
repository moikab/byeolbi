import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatDistanceToNow } from 'date-fns'
import { ko } from 'date-fns/locale'

// This will be replaced with actual data fetching
const MOCK_PREDICTION = {
  id: '1',
  type: 'personal',
  content: '당신의 창의력이 절정에 달하는 시기가 다가오고 있습니다. 새로운 프로젝트를 시작하기에 좋은 때입니다.',
  intensity: 8,
  alignment: 9,
  createdAt: new Date('2024-03-15'),
  details: {
    zodiacInfluence: '물병자리의 창의적 에너지가 당신의 운명에 강한 영향을 미치고 있습니다.',
    cosmicAlignment: '목성과 화성의 특별한 배열이 당신의 창의력을 증폭시키고 있습니다.',
    recommendation: '이 시기를 활용하여 평소 시도하지 못했던 새로운 아이디어를 실현해보세요.',
  }
}

export const metadata: Metadata = {
  title: '예언 상세 - 별비',
  description: '당신을 위한 맞춤형 운명의 메시지를 확인하세요.',
}

interface PredictionDetailsPageProps {
  params: {
    id: string
  }
}

export default function PredictionDetailsPage({ params }: PredictionDetailsPageProps) {
  // In a real app, we would fetch the prediction data here
  const prediction = MOCK_PREDICTION
  
  if (!prediction) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-start mb-4">
            <Badge variant={prediction.type === 'personal' ? 'default' : 'secondary'}>
              {prediction.type === 'personal' ? '개인' : '월간'}
            </Badge>
            <div className="flex gap-1">
              <Badge variant="outline">운명 강도 {prediction.intensity}</Badge>
              <Badge variant="outline">우주 조화 {prediction.alignment}</Badge>
            </div>
          </div>
          
          <CardTitle className="text-2xl">운명의 메시지</CardTitle>
          <CardDescription>
            {formatDistanceToNow(prediction.createdAt, { addSuffix: true, locale: ko })}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="prose prose-sm dark:prose-invert">
            <p className="text-lg leading-relaxed">{prediction.content}</p>
          </div>

          <div className="space-y-4 mt-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">별자리 영향</h3>
              <p className="text-muted-foreground">{prediction.details.zodiacInfluence}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">우주 정렬</h3>
              <p className="text-muted-foreground">{prediction.details.cosmicAlignment}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">추천사항</h3>
              <p className="text-muted-foreground">{prediction.details.recommendation}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
} 