

export default function CartSkeleton() {
  return (
    <section className='container my-15 bg-gray-200/30 p-10 md:p-16 rounded-2xl shadow-lg space-y-10 animate-pulse'>

      {/* Header */}
      <div className='flex flex-col sm:flex-row justify-between items-center'>
        <div className='h-8 bg-gray-300 rounded w-48'></div>
        <div className='h-6 bg-gray-300 rounded w-32 mt-2 sm:mt-0'></div>
      </div>

      {/* Cart Items */}
      <div className='space-y-6'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className='flex flex-col sm:flex-row items-center justify-between gap-6 bg-white p-5 rounded-xl shadow-sm'>
            {/* Image + Info */}
            <div className='flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto'>
              <div className='w-20 h-20 bg-gray-300 rounded-lg'></div>
              <div className='space-y-2'>
                <div className='h-4 bg-gray-300 rounded w-32'></div>
                <div className='h-3 bg-gray-300 rounded w-24'></div>
                <div className='h-3 bg-gray-300 rounded w-20'></div>
              </div>
            </div>

            {/* Quantity */}
            <div className='flex gap-3 items-center'>
              <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
              <div className='w-6 h-4 bg-gray-300 rounded'></div>
              <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
            </div>

            {/* Price */}
            <div className='h-6 bg-gray-300 rounded w-16'></div>

            {/* Delete */}
            <div className='w-6 h-6 bg-gray-300 rounded'></div>
          </div>
        ))}
      </div>

      {/* Footer Actions */}
      <div className='flex flex-col md:flex-row gap-4 justify-between items-center pt-5 border-t border-gray-300/80'>
        <div className='flex gap-3'>
          <div className='h-10 bg-gray-300 rounded-lg w-32'></div>
          <div className='h-10 bg-gray-300 rounded-lg w-24'></div>
        </div>
        <div className='h-10 bg-gray-300 rounded-lg w-28'></div>
      </div>
    </section>
  )
}
