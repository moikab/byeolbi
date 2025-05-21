import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatDistanceToNow } from 'date-fns'
import { ko } from 'date-fns/locale'

// This will be replaced with actual data fetching
const MOCK_PREDICTIONS = [
  {
    id: '1',
    type: 'personal',
    content: '당신의 창의력이 절정에 달하는 시기가 다가오고 있습니다. 새로운 프로젝트를 시작하기에 좋은 때입니다.',
    intensity: 8,
    alignment: 9,
    createdAt: new Date('2024-03-15'),
  },
  {
    id: '2',
    type: 'monthly',
    content: '4월에는 예상치 못한 여행의 기회가 찾아올 것입니다. 동쪽으로의 여행이 특히 좋은 기운을 가져올 것입니다.',
    intensity: 6,
    alignment: 7,
    createdAt: new Date('2024-03-14'),
  },
]

export function PredictionsList() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const intensity = searchParams.get('intensity')

  // Filter predictions based on search params
  const filteredPredictions = MOCK_PREDICTIONS.filter(prediction => {
    if (type && type !== 'all' && prediction.type !== type) return false
    if (intensity && intensity !== 'all') {
      const [min, max] = intensity.split('-').map(Number)
      if (prediction.intensity < min || prediction.intensity > max) return false
    }
    return true
  })

  if (filteredPredictions.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        해당하는 예언을 찾을 수 없습니다.
      </div>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {filteredPredictions.map(prediction => (
        <Link key={prediction.id} href={`/predictions/${prediction.id}`}>
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <Badge variant={prediction.type === 'personal' ? 'default' : 'secondary'}>
                  {prediction.type === 'personal' ? '개인' : '월간'}
                </Badge>
                <div className="flex gap-1">
                  <Badge variant="outline">강도 {prediction.intensity}</Badge>
                  <Badge variant="outline">조화 {prediction.alignment}</Badge>
                </div>
              </div>
              <CardTitle className="mt-2 text-lg">
                운명의 메시지
              </CardTitle>
              <CardDescription>
                {formatDistanceToNow(prediction.createdAt, { addSuffix: true, locale: ko })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {prediction.content}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
} 