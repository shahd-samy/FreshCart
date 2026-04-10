import { faTruckMoving } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HomeFeatures() {
    return (
        <>

            <div className='py-15'>
                <div className='container py-7'>
                    <ul className='grid grid-cols-12 place-content-center place-items-center *:col-span-12 sm:*:col-span-6 lg:*:col-span-3 gap-8 *:bg-white *:shadow-2xs *:border *:border-gray-300/40 *:rounded-lg  *:p-4 *:flex *:items-center *:gap-3'>
                        <li className=''>
                            <FontAwesomeIcon icon={faTruckMoving} className='bg-primary-200 text-primary-600 p-2 rounded-full' />
                            <div className='flex flex-col'>
                                <h3 className='text-black font-semibold text-md'>Free Delivery</h3>
                                <p className='text-gray-500 text-sm'>Orders $50 or more</p>
                            </div>

                        </li>

                        <li>
                            <FontAwesomeIcon icon={faTruckMoving} className='bg-primary-200 text-primary-600 p-2 rounded-full' />
                            <div className='flex flex-col'>
                                <h3 className='text-black font-semibold text-md'>30 Days Return</h3>
                                <p className='text-gray-500 text-sm'>Satisfaction guaranteed</p>
                            </div>

                        </li>

                        <li>
                            <FontAwesomeIcon icon={faTruckMoving} className='bg-primary-200 text-primary-600 p-2 rounded-full' />
                            <div className='flex flex-col'>
                                <h3 className='text-black font-semibold text-md'>Secure Payment</h3>
                                <p className='text-gray-500 text-sm'>100% Protected checkout</p>
                            </div>

                        </li>

                        <li>
                            <FontAwesomeIcon icon={faTruckMoving} className='bg-primary-200 text-primary-600 p-2 rounded-full' />
                            <div className='flex flex-col'>
                                <h3 className='text-black font-semibold text-md'>27/7 Support</h3>
                                <p className='text-gray-500 text-sm'>Ready to help anytime</p>
                            </div>

                        </li>
                    </ul>

                </div>
            </div>

        </>
    )
}
