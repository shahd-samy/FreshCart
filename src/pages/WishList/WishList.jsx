import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react';
import Loading from './../../components/Loading/Loading';
import Rating from '../../components/Rating/Rating';
import { Link } from 'react-router';
import { WishListContext } from '../../context/WishList.context';
import { CartContext } from '../../context/Cart.context';
import WishListSkeleton from '../../components/skeleton/WishListSkeleton';
import PageMetadata from '../../components/PageMetadata/PageMetadata';

export default function WishList() {

  const { loading, wishlist, HandleRemoveWishListItem, HandleClearWishList } = useContext(WishListContext);
  const { cart, HandleAddingToCart, HandleRemoveCartItem } = useContext(CartContext);
  const products = wishlist || [];
console.log(products)
  if (loading) return <WishListSkeleton />




  return (
    <>
          <PageMetadata title='Wishlist' description='View your wishlist and manage your favorite products.' keywords='online grocery, fresh vegetables, dairy products, food delivery, online shopping' author='Fresh-Cart Team'></PageMetadata>

    <section className='container my-10 bg-gray-100/40 p-6 md:p-10 rounded-2xl shadow-lg space-y-8'>

      {/* Header */}
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl md:text-4xl font-bold flex items-center gap-2'>
          Wishlist
          <FontAwesomeIcon icon={faHeart} className="text-red-500" />
        </h1>
      </div>

      {/* Content */}
      {products.length > 0 ? (
        <>
          <div className='space-y-5'>

            {products.map((product) => {


              const isInCart = cart?.products?.some?.(
                (item) => item.product._id === product._id
              ) || false;

              return (
                <div
                  key={product._id}
                  className='flex flex-col md:flex-row items-center justify-between gap-5 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition'>


                  <div className='flex flex-col sm:flex-row  items-center gap-4 w-full md:w-auto'>
                    <div>
                    <img src={product.imageCover} className='w-25  object-cover rounded-lg' alt={product.title} />
                      </div>

                    <div>
                                    <Link to={`/product/${product._id}`}>

                      <p className='font-semibold text-gray-800 line-clamp-1'>{product.title}</p>
                      </Link>
                      <p className='text-sm text-gray-500'>{product.category?.name}</p>
                      <Rating rating={product.ratingsAverage} />
                    </div>
                  </div>


                  <p className='font-bold text-lg text-primary-600'>{product.price} EGP</p>


                  <div className='flex items-center gap-3'>


                    <button onClick={() => HandleRemoveWishListItem(product._id)} className='text-red-500 hover:text-red-700 text-xl transition'><FontAwesomeIcon icon={faHeart} /></button>


                    <button onClick={() => isInCart ? HandleRemoveCartItem(product._id) : HandleAddingToCart(product._id)}
                      className={`px-4 py-2 rounded-lg text-white font-semibold transition
                        ${isInCart ? 'bg-red-500 hover:bg-red-600' : 'bg-primary-600 hover:bg-primary-700'}`}>
                      <FontAwesomeIcon icon={faCartShopping} className='mr-2' />
                      {isInCart ? 'Remove' : 'Add to Cart'}
                    </button>

                  </div>
                </div>
              )
            })}

          </div>

          {/* Footer */}
          <div className='flex flex-col md:flex-row justify-center items-center gap-4 pt-6 border-t border-gray-200'>

            <Link to='/'>
              <button className='bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-lg font-semibold'>Continue Shopping</button>
            </Link>


          </div>
        </>
      ) : (
        <div className='py-10 text-center text-gray-500'>
          Your Wishlist is empty 🥲 <br />
          <Link to='/' className='text-primary-500 font-semibold'>Start Shopping</Link>
        </div>
      )}

    </section>
    </>
  )
}