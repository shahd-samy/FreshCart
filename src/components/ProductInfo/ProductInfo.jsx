import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../Rating/Rating";
import { faHeart, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import { WishListContext } from "../../context/WishList.context";


export default function ProductInfo({ productInfo }) {

  console.log(productInfo)
  const { cart, HandleAddingToCart, HandleRemoveCartItem,HandleUpdateCartProductQuantity } = useContext(CartContext);
    const{HandleAddingToWishList,HandleRemoveWishListItem,wishlist}=useContext(WishListContext);

  const images =
    productInfo?.images?.map((img) => ({
      original: img,
      thumbnail: img,
    })) || [];

 
  const isInCart = cart?.products.some((item) =>
    (item.product._id == productInfo._id)
  )
const cartItem = cart?.products.find(
  (item) => item.product._id === productInfo._id
);

 const isInWishList = wishlist?.some((item)=>
                   (item._id == productInfo._id)
 
            )
                
console.log(cartItem)
  return (
    <>

      <div className="grid grid-cols-12  gap-8 p-0 xs:p-8 md:p-10  ">

        {/* Images */}
        <div className="col-span-9  lg:col-span-5   ">
          <div className=" h-full overflow-hidden ">
            <ImageGallery showFullscreenButton={false} showPlayButton={false} showNav={false} thumbnailPosition='bottom'
              items={images}
              onSlide={(index) => console.log("Slid to", index)}
            />
          </div>

        </div>




        {/* Content */}
        <div className="col-span-9 lg:col-span-7 p-5 bg-white rounded-md space-y-4">

          {/* Top */}
          <div className="flex justify-between items-center">
            <span className="bg-primary-100 text-primary-600 text-xs px-2 py-1 rounded">
              {productInfo.quantity > 0 ? 'In Stock' : 'Sold'}
            </span>

            <ul className="flex gap-3">
              <li>
                <FontAwesomeIcon icon={faShareNodes} className="text-gray-400 hover:text-black cursor-pointer" />
              </li>
              <li>
                <FontAwesomeIcon icon={faHeart} onClick={()=>{ (isInWishList)?HandleRemoveWishListItem(productInfo._id):HandleAddingToWishList(productInfo._id)}}
                                  className={`${isInWishList ? 'text-red-600 ':'text-gray-400'} cursor-pointer`}/>
              </li>
            </ul>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold">
            {productInfo.title}
          </h2>

          {/* Rating */}
          <div className="flex gap-2 items-center">
            <Rating rating={productInfo.ratingsAverage} />
            <span className="text-gray-500 text-sm">{productInfo.ratingsAverage} • {productInfo.ratingsQuantity} reviews</span>
          </div>

          {/* Price */}
          <p className="text-xl font-bold text-primary-600">{productInfo.price} EGP {productInfo.priceAfterDiscount ? <del className="text-gray-500 font-normal text-xs">{productInfo.priceAfterDiscount} EGP</del> : ''}</p>

          <hr />

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed">
            {productInfo.description}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-4 flex-wrap">
            <span className="font-medium">Quantity:</span>

            <div className="border border-gray-300 px-3 py-1 flex items-center gap-4 rounded">
              <button onClick={() => { 
                 HandleUpdateCartProductQuantity(productInfo._id, cartItem?.count - 1)}} className="text-lg">-</button>
              <span>{cartItem?.count||0}</span>
              <button onClick={() => {
                if (!cartItem) {
      
      HandleAddingToCart(productInfo._id);
    } else {
    
      HandleUpdateCartProductQuantity(
        productInfo._id,
        cartItem?.count + 1
      );
              }}} className="text-lg">+</button>
            </div>

            <span className="text-sm text-gray-500">
              Only {productInfo.quantity} items left in stock
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 pt-4 w-full ">

            <button onClick={() => {

              (isInCart) ? HandleRemoveCartItem(productInfo._id) : HandleAddingToCart(productInfo._id)

            }} className={`${isInCart ? 'bg-red-600 hover:bg-red-700' : 'bg-primary-600 hover:bg-primary-700'} p-3 transition rounded-lg text-white flex-1`}>
              {isInCart ? 'Remove From Cart' : 'Add To Cart'}
            </button>



            <button className="border border-gray-400 text-gray-500 hover:bg-gray-400 hover:text-white p-3 transition rounded-lg flex-1">
              BUY NOW
            </button>
          </div>

        </div>
      </div>

    </>);
}