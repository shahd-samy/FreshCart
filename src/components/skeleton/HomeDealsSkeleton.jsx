import React from 'react'
import ProductCardSkeleton from './ProductCardSkeleton'

export default function HomeDealsSkeleton() {
  return (
    <section className="bg-primary-100/20 py-15 animate-pulse">
      <div className='container py-7 space-y-7'>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-0 justify-between ">
          <div className="space-y-3">
            <div className="h-8 w-48 bg-gray-300 rounded"></div>
            <div className="h-4 w-52 bg-gray-300 rounded"></div>
          </div>
          <div className="h-8 w-44 bg-gray-300 rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 ">
          {Array.from({ length: 5 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
