import React from 'react'

export default function HomeCategoriesSkeleton() {
  return (
    <section className="bg-primary-100/20 py-15 animate-pulse">
      <div className="container py-7 space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-0 justify-between items-center">
          <div className="h-8 w-48 bg-gray-300 rounded"></div>
          <div className="h-6 w-36 bg-gray-300 rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-4 flex flex-col items-center justify-center gap-4">
              <div className="w-20 h-20 bg-gray-300 rounded-xl"></div>
              <div className="h-4 w-24 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
