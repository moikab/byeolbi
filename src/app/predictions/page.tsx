import { Suspense } from 'react'
import { Metadata } from 'next'
import { PredictionsList } from '@/components/predictions/PredictionsList'
import { PredictionsFilter } from '@/components/predictions/PredictionsFilter'
import { LoadingSpinner } from '@/components/ui/loading-spinner'

export const metadata: Metadata = {
  title: '별비 - 운명의 예언들',
  description: '당신을 위한 맞춤형 운명 예언들을 확인하세요.',
}

export default function PredictionsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        운명의 예언들
      </h1>
      
      <div className="space-y-8">
        <PredictionsFilter />
        
        <Suspense fallback={
          <div className="flex justify-center items-center min-h-[400px]">
            <LoadingSpinner size="lg" />
          </div>
        }>
          <PredictionsList />
        </Suspense>
      </div>
    </main>
  )
} 