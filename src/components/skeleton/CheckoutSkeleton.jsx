import React from 'react'

export default function CheckoutSkeleton() {
  return (
    <section className="bg-gray-100 py-10 animate-pulse">
      <div className="container mx-auto px-4 grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="bg-white shadow-lg rounded-xl p-6 space-y-5">
            <div className="h-6 w-40 bg-gray-300 rounded"></div>
            <div className="space-y-4">
              <div className="h-16 bg-gray-200 rounded-lg"></div>
              <div className="h-16 bg-gray-200 rounded-lg"></div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 space-y-5">
            <div className="h-6 w-40 bg-gray-300 rounded"></div>
            <div className="space-y-4">
              <div className="h-20 bg-gray-200 rounded-lg"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-12 bg-gray-200 rounded-lg"></div>
                <div className="h-12 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white shadow-lg rounded-xl p-6 space-y-5 sticky top-10">
            <div className="h-6 w-40 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
              </div>
              <div className="flex justify-between">
                <div className="h-4 w-16 bg-gray-300 rounded"></div>
                <div className="h-4 w-20 bg-gray-300 rounded"></div>
              </div>
              <hr />
              <div className="flex justify-between">
                <div className="h-5 w-12 bg-gray-300 rounded"></div>
                <div className="h-5 w-24 bg-gray-300 rounded"></div>
              </div>
            </div>
            <div className="h-12 bg-gray-300 rounded-lg"></div>
            <div className="h-12 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
