import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const PREDICTION_TYPES = [
  { value: 'all', label: '전체' },
  { value: 'personal', label: '개인' },
  { value: 'monthly', label: '월간' },
  { value: 'quarterly', label: '분기' },
  { value: 'yearly', label: '연간' },
]

const INTENSITY_RANGES = [
  { value: 'all', label: '전체' },
  { value: '1-3', label: '낮음' },
  { value: '4-7', label: '중간' },
  { value: '8-10', label: '높음' },
]

export function PredictionsFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [type, setType] = useState(searchParams.get('type') || 'all')
  const [intensity, setIntensity] = useState(searchParams.get('intensity') || 'all')

  const handleFilter = () => {
    const params = new URLSearchParams()
    if (type !== 'all') params.set('type', type)
    if (intensity !== 'all') params.set('intensity', intensity)
    router.push(`/predictions?${params.toString()}`)
  }

  const handleReset = () => {
    setType('all')
    setIntensity('all')
    router.push('/predictions')
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-black/5 backdrop-blur-lg rounded-lg">
      <Select value={type} onValueChange={setType}>
        <SelectTrigger className="w-full sm:w-[200px]">
          <SelectValue placeholder="예언 유형" />
        </SelectTrigger>
        <SelectContent>
          {PREDICTION_TYPES.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={intensity} onValueChange={setIntensity}>
        <SelectTrigger className="w-full sm:w-[200px]">
          <SelectValue placeholder="운명 강도" />
        </SelectTrigger>
        <SelectContent>
          {INTENSITY_RANGES.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex gap-2 ml-auto">
        <Button variant="outline" onClick={handleReset}>
          초기화
        </Button>
        <Button onClick={handleFilter}>
          필터 적용
        </Button>
      </div>
    </div>
  )
} 