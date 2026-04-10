import React from 'react'

export default function ProductInfoSkeleton() {
  return (
    <div className="grid grid-cols-12 gap-8 p-0 xs:p-8 md:p-10 animate-pulse">
      {/* Images */}
      <div className="col-span-9 lg:col-span-5">
        <div className="h-full overflow-hidden">
          <div className="h-96 bg-gray-200 rounded-lg"></div>
          <div className="flex gap-2 mt-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="w-16 h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="col-span-9 lg:col-span-7 p-5 bg-white rounded-md space-y-4">
        {/* Top */}
        <div className="flex justify-between items-center">
          <div className="h-6 w-20 bg-gray-300 rounded"></div>
          <div className="flex gap-3">
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
          </div>
        </div>

        {/* Title */}
        <div className="h-8 w-3/4 bg-gray-300 rounded"></div>

        {/* Rating */}
        <div className="flex gap-2 items-center">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="w-4 h-4 bg-gray-300 rounded"></div>
            ))}
          </div>
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
        </div>

        {/* Price */}
        <div className="h-6 w-32 bg-gray-300 rounded"></div>

        <hr />

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-300 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
          <div className="h-4 w-4/6 bg-gray-300 rounded"></div>
        </div>

        {/* Quantity */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="h-5 w-20 bg-gray-300 rounded"></div>
          <div className="h-10 w-24 bg-gray-300 rounded"></div>
          <div className="h-4 w-32 bg-gray-300 rounded"></div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 pt-4 w-full">
          <div className="h-12 bg-gray-300 rounded-lg flex-1"></div>
          <div className="h-12 bg-gray-300 rounded-lg flex-1"></div>
        </div>
      </div>
    </div>
  )
}
