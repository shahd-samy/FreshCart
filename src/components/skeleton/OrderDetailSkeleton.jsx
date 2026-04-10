import React from 'react'

export default function OrderDetailSkeleton() {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 space-y-6 animate-pulse">
      <div className="p-5 md:p-6 rounded-2xl border shadow-sm bg-gray-200/65">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div className="space-y-3">
            <div className="h-8 w-48 bg-gray-300 rounded"></div>
            <div className="h-4 w-32 bg-gray-300 rounded"></div>
          </div>
          <div className="flex gap-2">
            <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
            <div className="h-6 w-24 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 md:p-5 border-b last:border-b-0">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gray-200"></div>
              <div className="space-y-2">
                <div className="h-4 w-40 bg-gray-300 rounded"></div>
                <div className="h-3 w-16 bg-gray-300 rounded"></div>
                <div className="h-3 w-24 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-5 w-20 bg-gray-300 rounded"></div>
              <div className="h-3 w-16 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-gray-50 to-white border rounded-2xl p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 shadow-sm">
        <div className="h-5 w-32 bg-gray-300 rounded"></div>
        <div className="h-8 w-24 bg-gray-300 rounded"></div>
      </div>
    </div>
  )
}
