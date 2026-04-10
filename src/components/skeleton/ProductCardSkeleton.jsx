import React from 'react'
import RatingSkeleton from './RatingSkeleton'

export default function ProductCardSkeleton() {
  return (
    <div className="bg-white p-5 rounded-sm shadow space-y-4 overflow-hidden animate-pulse">
      <div className="relative">
        <div className="flex items-center justify-center h-40 bg-gray-200 rounded-md"></div>
        <div className="absolute top-2 left-2 h-6 w-16 bg-gray-300 rounded"></div>
        <div className="absolute top-2 right-2 space-y-2">
          <div className="h-7 w-7 bg-gray-300 rounded-full"></div>
          <div className="h-7 w-7 bg-gray-300 rounded-full"></div>
          <div className="h-7 w-7 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="h-4 w-32 bg-gray-300 rounded"></div>
        <div className="h-5 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-40"></div>

        <div className="flex flex-wrap items-center gap-3">
          <RatingSkeleton />
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
        </div>

        <div className="h-6 w-32 bg-gray-300 rounded"></div>
      </div>

      <div className="h-10 bg-gray-300 rounded-md"></div>
    </div>
  )
}
