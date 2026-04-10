import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import homeSliderImg from '../../../src/assets/home-slider-1.png'

export default function HomeSlider() {
    return (
        <>


            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                navigation
            >


                <SwiperSlide >

                    <div style={{ backgroundImage: `url(${homeSliderImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>


                        <div className='py-7 bg-linear-to-r from-black/70 to-primary-400/40'>

                            <div className='container h-100 flex flex-col justify-center  space-y-4  '>
                                <h1 className='text-white font-bold text-3xl'>Fresh Organic Produce <br></br>Delivered to Your Door</h1>
                                <p className='text-white'>Get 20% off on your first order with code: FRESH20</p>
                                <div className='space-x-4 *:rounded-lg *:p-3 *:px-5 *:shadow-sm pt-4'>
                                    <button className='bg-white font-semibold text-primary-400 hover:bg-gray-500/30 hover:text-white transition-colors duration-300'>Shop Now</button>
                                    <button className='text-white border border-white hover:bg-white hover:text-primary-500 font-semibold transition-colors duration-300'>View Deals</button>
                                </div>
                            </div>


                        </div>

                    </div>
                </SwiperSlide>


                <SwiperSlide>

                    <div style={{ backgroundImage: `url(${homeSliderImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>


                        <div className='py-7 bg-linear-to-r from-black/70 to-primary-400/40'>

                            <div className='container h-100 flex flex-col justify-center  space-y-4  '>
                                <h1 className='text-white font-bold text-3xl'>Fresh Organic Produce <br></br>Delivered to Your Door</h1>
                                <p className='text-white'>Get 20% off on your first order with code: FRESH20</p>
                                <div className='space-x-4 *:rounded-lg *:p-3 *:px-5 *:shadow-sm pt-4'>
                                    <button className='bg-white font-semibold text-primary-400 hover:bg-gray-500/30 hover:text-white transition-colors duration-300'>Shop Now</button>
                                    <button className='text-white border border-white hover:bg-white hover:text-primary-500 font-semibold transition-colors duration-300'>View Deals</button>
                                </div>
                            </div>


                        </div>

                    </div>
                </SwiperSlide>


                <SwiperSlide>

                    <div style={{ backgroundImage: `url(${homeSliderImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>


                        <div className='py-7 bg-linear-to-r from-black/70 to-primary-400/40'>

                            <div className='container h-100 flex flex-col justify-center  space-y-4  '>
                                <h1 className='text-white font-bold text-3xl'>Fresh Organic Produce <br></br>Delivered to Your Door</h1>
                                <p className='text-white'>Get 20% off on your first order with code: FRESH20</p>
                                <div className='space-x-4 *:rounded-lg *:p-3 *:px-5 *:shadow-sm pt-4'>
                                    <button className='bg-white font-semibold text-primary-400 hover:bg-gray-500/30 hover:text-white transition-colors duration-300'>Shop Now</button>
                                    <button className='text-white border border-white hover:bg-white hover:text-primary-500 font-semibold transition-colors duration-300'>View Deals</button>
                                </div>
                            </div>


                        </div>

                    </div>
                </SwiperSlide>


            </Swiper>

        </>

    )
}
