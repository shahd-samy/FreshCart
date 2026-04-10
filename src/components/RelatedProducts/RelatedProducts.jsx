import { useEffect, useState } from 'react';
import { getAllProducts } from '../../../services/product-service';
import Rating from '../Rating/Rating'
import Loading from '../Loading/Loading';
import { calcDiscount } from '../../../utils/discount-utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate, faEye, faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import RelatedProductsSkeleton from '../skeleton/RelatedProductsSkeleton';
export default function RelatedProducts({ productInfo }) {

    const [relatedProducts, setRelatedProducts] = useState([])
    const { category } = productInfo
    const [loading, setLoading] = useState(true)

    async function fetchRelatedProducts(categoryId) {

        try {

            const data = await getAllProducts({ category: categoryId });
            setLoading(false)
            setRelatedProducts(data.data)
            console.log(data.data)
        } catch (error) {
            console.log(error.message)
            setLoading(false)

        }

    }



    useEffect(() => {
        fetchRelatedProducts(category?._id)

    }, [category?._id])



    if (loading) return <RelatedProductsSkeleton></RelatedProductsSkeleton>






    return (
        < >


            <div className='flex  justify-between items-center'>

                <h2 className='text-2xl md:text-3xl font-bold pb-4'>
                    You May Also Like
                </h2>

                <div className='flex gap-3'>

                    <button className="leftArrow bg-white w-10 h-10 shadow p-2 rounded-full hover:bg-gray-100" >
                        <FontAwesomeIcon className='text-primary-500' icon={faChevronLeft} />
                    </button>

                    <button className="rightArrow bg-white w-10 h-10 shadow p-2 rounded-full hover:bg-gray-100">
                        <FontAwesomeIcon className='text-primary-500' icon={faChevronRight} />
                    </button>
                </div>
            </div>


            <Swiper spaceBetween={20} breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 }
            }} modules={[Navigation]} navigation={{ nextEl: ".rightArrow", prevEl: ".leftArrow" }}>
                {relatedProducts.map((product) => (


                    <SwiperSlide key={product.id} >

                        <div key={product.id} className="bg-white p-5 border border-primary-200  rounded-sm  shadow space-y-2 overflow-hidden ">

                            <div className="relative ">

                                {product.priceAfterDiscount ? (
                                    <div className="absolute top-0  -left-2 bg-red-600 w-fit h-fit p-0.5 rounded-sm text-white font-semibold text-xs">
                                        -{calcDiscount(product.price, product.priceAfterDiscount)}%</div>
                                ) : ''}


                                <div className="flex items-center justify-center">

                                    <img className="size-40  object-cover" src={product.imageCover} alt={product.name}></img>

                                </div>

                                <div className="absolute  top-0  -right-2">
                                    <ul className=" *:text-gray-400 space-y-3 *:hover:text-primary-500 *:hover:cursor-pointer *:transition-colors *:duration-200">
                                        <li><FontAwesomeIcon icon={faHeart} /></li>
                                        <li><FontAwesomeIcon icon={faArrowsRotate} /></li>
                                        <li><Link to={`/product/${product.id}`}><FontAwesomeIcon icon={faEye} /></Link></li>
                                    </ul>
                                </div>


                            </div>


                            <div className="space-y-1">
                                <p className="text-gray-500 text-xs">{product.category.name}</p>
                                <p className="text-gray-900 font-semibold">
                                    <Link to={`/product/${product.id}`} className="line-clamp-3">{product.description}</Link>
                                </p>

                                <div className="flex gap-2   items-center">
                                    <Rating rating={product.ratingsAverage}></Rating>
                                    <span className="text-gray-500 text-xs">{product.ratingsAverage} ({product.ratingsQuantity})</span>
                                </div>

                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-primary-700 font-bold">{product.price} EGP {product.priceAfterDiscount ? <del className="text-gray-500 font-normal text-xs">{product.priceAfterDiscount} EGP</del> : ''}</p>

                                    <button className="bg-primary-600 size-7  cursor-pointer hover:bg-primary-700  rounded-full text-white" >
                                        <FontAwesomeIcon icon={faPlus} />

                                    </button>
                                </div>
                            </div>





                        </div>


                    </SwiperSlide>














                ))}
            </Swiper>
        </>
    )
}