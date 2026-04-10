import React from 'react'

export default function WishListSkeleton() {
  return (
    <section className='container my-10 bg-gray-100/40 p-6 md:p-10 rounded-2xl shadow-lg space-y-8 animate-pulse'>

      {/* Header */}
      <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
        <div className='h-10 w-48 bg-gray-300 rounded'></div>
        <div className='h-8 w-32 bg-gray-300 rounded'></div>
      </div>

      {/* Skeleton Items */}
      <div className='space-y-5'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className='flex flex-col md:flex-row items-center justify-between gap-5 bg-white p-5 rounded-xl shadow-sm'>
            <div className='flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto'>
              <div className='w-24 h-24 bg-gray-300 rounded-lg'></div>
              <div className='space-y-3'>
                <div className='h-4 w-40 bg-gray-300 rounded'></div>
                <div className='h-3 w-32 bg-gray-300 rounded'></div>
                <div className='h-3 w-20 bg-gray-300 rounded'></div>
              </div>
            </div>

            <div className='h-6 w-24 bg-gray-300 rounded'></div>

            <div className='flex items-center gap-3'>
              <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
              <div className='h-10 w-28 bg-gray-300 rounded-lg'></div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className='flex justify-center pt-6 border-t border-gray-200'>
        <div className='h-10 w-44 bg-gray-300 rounded-lg'></div>
      </div>
    </section>
  )
}
