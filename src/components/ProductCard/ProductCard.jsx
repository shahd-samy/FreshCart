import { faArrowsRotate, faEye, faHeart, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { calcDiscount } from "../../../utils/discount-utils";
import Rating from "../Rating/Rating";
import { Link } from "react-router";
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/Cart.context";
import { WishListContext } from "../../context/WishList.context";



export default function ProductCard({ products }) {
    const { HandleAddingToCart, HandleRemoveCartItem, cart } = useContext(CartContext);
    const { HandleAddingToWishList, HandleRemoveWishListItem, wishlist } = useContext(WishListContext);


    return (
        <>

            {products?.map((product) => {

                const isInCart = cart?.products?.some((item) =>
                    (item.product._id == product.id));

                const isInWishList = wishlist?.some((item) =>
                    (item._id == product.id)

                )

                return (
                    <div key={product.id} className="bg-white p-5   rounded-sm shadow space-y-2 overflow-hidden ">

                        <div className="relative ">

                            {product.priceAfterDiscount ? (
                                <div className="absolute top-0  -left-2 bg-red-600 w-fit h-fit p-0.5 rounded-sm text-white font-semibold text-xs">
                                    -{calcDiscount(product.price, product.priceAfterDiscount)}%</div>
                            ) : ''}


                            <div className="flex items-center justify-center">

                                <img className="size-40   object-cover" src={product.imageCover} alt={product.name}></img>

                            </div>

                            <div className="absolute  top-0  -right-2">
                                <ul className=" *:text-gray-400 space-y-3 *:hover:text-primary-500 *:hover:cursor-pointer *:transition-colors *:duration-200">
                                    <li><FontAwesomeIcon icon={faHeart} onClick={() => { (isInWishList) ? HandleRemoveWishListItem(product.id) : HandleAddingToWishList(product.id) }}
                                        className={`${isInWishList ? 'text-red-600 ' : 'text-gray-400'}`} /></li>
                                    <li><FontAwesomeIcon icon={faArrowsRotate} /></li>
                                    <li><Link to={`/product/${product.id}`}><FontAwesomeIcon icon={faEye} /></Link></li>
                                </ul>
                            </div>


                        </div>


                        <div className="space-y-1">
                            <p className="text-gray-500 text-xs">{product.category.name}</p>
                            <p className=" text-gray-900 font-semibold">
                                <Link to={`/product/${product.id}`} className="line-clamp-2">{product.description}</Link>
                            </p>

                            <div className="flex gap-2   items-center">
                                <Rating rating={product.ratingsAverage}></Rating>
                                <span className="text-gray-500 text-xs">{product.ratingsAverage} ({product.ratingsQuantity})</span>
                            </div>

                            <div className="flex justify-between items-center mt-2">
                                <p className="text-primary-700 font-bold">{product.price} EGP {product.priceAfterDiscount ? <del className="text-gray-500 font-normal text-xs">{product.priceAfterDiscount} EGP</del> : ''}</p>


                            </div>

                        </div>



                        <button onClick={() => {
                            (isInCart) ? HandleRemoveCartItem(product.id) : HandleAddingToCart(product.id)

                        }} className={`${isInCart ? 'bg-red-600 hover:bg-red-700' : 'bg-primary-600 hover:bg-primary-700'} my-3 py-1 font-bold w-full text-center cursor-pointer  rounded-md text-white`} >

                            {isInCart ? 'Remove From Cart' : 'Add To Cart'}
                        </button>


                    </div>
                )
            })}


        </>
    )
}
