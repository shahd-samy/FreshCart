import React from 'react'
import ProductCardSkeleton from './ProductCardSkeleton'

export default function ProductsSkeleton() {
  return (
    <section className="bg-gradient-to-b from-primary-100/20 to-white py-12 min-h-screen animate-pulse">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-3">
            <div className="h-8 w-48 bg-gray-300 rounded"></div>
            <div className="h-4 w-64 bg-gray-300 rounded"></div>
          </div>
          <div className="h-12 w-full md:w-96 bg-gray-300 rounded-xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
