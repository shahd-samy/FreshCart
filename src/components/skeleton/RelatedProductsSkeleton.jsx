import React from 'react'
import ProductCardSkeleton from './ProductCardSkeleton'

export default function RelatedProductsSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex justify-between items-center pb-4">
        <div className="h-8 w-48 bg-gray-300 rounded"></div>
        <div className="flex gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}
