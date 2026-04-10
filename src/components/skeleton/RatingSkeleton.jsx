import React from 'react'

export default function RatingSkeleton() {
  return (
    <div className="flex items-center gap-2 animate-pulse">
      {Array.from({ length: 5 }).map((_, idx) => (
        <div key={idx} className="w-6 h-6 bg-gray-300 rounded"></div>
      ))}
    </div>
  )
}
