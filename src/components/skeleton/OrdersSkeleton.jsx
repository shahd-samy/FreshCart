import React from 'react'

export default function OrdersSkeleton() {
  return (
    <section className="bg-linear-to-b from-gray-100 to-white min-h-screen py-10 animate-pulse">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-3xl shadow-md p-6 mb-10 border border-gray-100">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-gray-300"></div>
            <div className="space-y-3">
              <div className="h-6 w-48 bg-gray-300 rounded"></div>
              <div className="h-4 w-32 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-5 bg-gray-200/65 border-b border-gray-400 space-y-3">
                <div className="h-4 w-40 bg-gray-300 rounded"></div>
                <div className="h-3 w-32 bg-gray-300 rounded"></div>
              </div>

              <div className="p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {Array.from({ length: 4 }).map((_, itemIndex) => (
                      <div key={itemIndex} className="w-10 h-10 rounded-lg bg-gray-200 border"></div>
                    ))}
                  </div>
                  <div className="h-4 w-24 bg-gray-300 rounded"></div>
                </div>

                <div className="grid grid-cols-3 gap-6 text-xs">
                  <div>
                    <div className="h-3 w-16 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-12 bg-gray-300 rounded"></div>
                  </div>
                  <div>
                    <div className="h-3 w-16 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-12 bg-gray-300 rounded"></div>
                  </div>
                  <div>
                    <div className="h-3 w-16 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-12 bg-gray-300 rounded"></div>
                  </div>
                </div>

                <div className="h-10 w-40 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
