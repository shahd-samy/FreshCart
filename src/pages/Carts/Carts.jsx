import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect } from 'react';
import { CartContext } from '../../context/Cart.context';
import Loading from './../../components/Loading/Loading';
import Rating from '../../components/Rating/Rating';
import { Link } from 'react-router';
import CartSkeleton from '../../components/skeleton/CartSkeleton';
import PageMetadata from '../../components/PageMetadata/PageMetadata';

export default function Carts() {



  const { loading, cart, HandleClearCart, HandleRemoveCartItem, HandleUpdateCartProductQuantity } = useContext(CartContext)

  const products = cart?.products || []

  console.log(cart, 'ss')
  if (loading) return <CartSkeleton></CartSkeleton>
  return (
    <>
              <PageMetadata title='Shopping Cart' description='View your shopping cart and manage your items.' keywords='online grocery, fresh vegetables, dairy products, food delivery, online shopping' author='Fresh-Cart Team'></PageMetadata>

    <section className='container my-15 bg-gray-200/30 p-10 md:p-16 rounded-2xl shadow-lg space-y-10'>


      {/* Header */}
      <div className='flex flex-col sm:flex-row justify-between items-center'>

        <h1 className='text-xl sm:text-3xl md:text-4xl font-bold'>
          Shopping Cart
          <FontAwesomeIcon className='text-primary-600 text-sm sm:text-xl ps-2' icon={faCartShopping} />
        </h1>

        {
          (products.length > 0) ? <p className='text-gray-500 mt-1'>
            Total: <span className='text-primary-600 font-semibold'>{cart?.totalCartPrice} EGP</span>
          </p> : ''
        }


      </div>



      {
        (products.length > 0) ?


          <>
            {/* Cart Items */}
            <div className='space-y-6 '>

              {
                products?.map((product) => {

                  return (<div key={product._id} className='flex flex-col sm:flex-row items-center justify-between gap-6 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition'>

                    {/* Image + Info */}
                    <div className='flex flex-col sm:flex-row items-center gap-4 space-y-2 w-full md:w-auto'>

                      <div className='w-20 h-20 bg-gray-200 rounded-lg overflow-hidden'>
                        <img src={product.product.imageCover} alt='product'
                          className='w-full h-full object-cover' />
                      </div>

                      <div>
              <Link to={`/product/${product.product._id}`}>

                        <p className='text-sm sm:text-md  text-black font-bold'>{product.product.title}</p>
                        </Link>
                        <p className='text-xs sm:text-sm text-gray-500'>{product?.product.category.name}</p>

                        <Rating className='text-xs' rating={product?.product.ratingsAverage}></Rating>
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="flex gap-3 justify-center items-center text-center bg-white px-3 py-2 rounded-full shadow-sm">
                      <button onClick={() => {
                        HandleUpdateCartProductQuantity(product.product._id, product.count - 1)
                      }} className="w-4 h-4 sm:w-8 sm:h-8  rounded-full bg-primary-500 text-white hover:bg-primary-600 transition flex items-center justify-center">
                        -
                      </button>
                      <span className='font-semibold text-xs'>{product.count}</span>
                      <button onClick={() => { HandleUpdateCartProductQuantity(product.product._id, product.count + 1) }} className="w-4 h-4 sm:w-8 sm:h-8  rounded-full bg-primary-500 text-white hover:bg-primary-600 transition flex items-center justify-center">
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <p className='font-bold text-lg text-gray-700'>{product.price} EGP</p>

                    {/* Delete */}
                    <button onClick={() => { HandleRemoveCartItem(product.product._id) }} className='text-red-500 hover:text-red-700 transition'>
                      <FontAwesomeIcon icon={faTrash} className='text-xl' />
                    </button>

                  </div>)
                })
              }







            </div>


            {/* Footer Actions */}
            <div className='flex flex-col md:flex-row gap-4 justify-between items-center pt-5 border-t border-gray-300/80'>



              <div className='flex flex-col items-center sm:flex-row space-y-2 sm:space-y-0 gap-3'>
                <Link to='/'>
                  <button className='bg-gray-200 hover:bg-gray-300 transition px-6 py-2 rounded-lg font-semibold'>
                    Continue Shopping
                  </button></Link>
                <Link to='/checkout'>
                  <button className='bg-primary-600 hover:bg-primary-700 transition text-white px-6 py-2 rounded-lg font-bold shadow-md'>
                    Checkout
                  </button>
                </Link>

              </div>
              <button onClick={HandleClearCart} className='bg-red-500 hover:bg-red-600 transition text-white px-5 py-2 rounded-lg font-semibold'>
                Clear Cart
              </button>
            </div>
          </> :
          <div className='py-15'>
            <h2 className='text-center text-lg text-gray-500'>Your cart is empty ,you can shop from <Link className='text-primary-500 font-semibold' to='/'>here</Link> </h2>
          </div>
      }
    </section>
    </>
  )
}