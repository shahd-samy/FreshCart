import { faFacebookF, faInstagram, faPinterestP, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router'

export default function Footer() {
  return (
    <>

      <footer className='pt-7 border border-gray-300/30 shadow bg-white'>

        <div className='container space-y-9'>

          <div className='grid md:grid-cols-6 lg:grid-cols-10 gap-6'>

            {/* first section */}
            <div className='md:col-span-6 lg:col-span-4 space-y-3'>

              <div className=" pb-2">
                <Link to="/"><img src="/freshcart-logo.svg" alt="logo" /></Link>
              </div>

              <div className='text-gray-500 text-sm'>
                <p>Lorem ipsum dolor sit amet,or sit amet, orem ipsum dolor sit amet,  Nisi necessitatibus dolores harum, et eveniet vero laudantium accusamus doloremque commodi eum.</p>
              </div>

              <ul className='flex text-gray-500 text-lg *:hover:text-primary-400 *:transition-colors *:duration-300'>
                <li><Link><FontAwesomeIcon icon={faFacebookF} /></Link></li>
                <li><Link><FontAwesomeIcon icon={faInstagram} /></Link></li>
                <li><Link><FontAwesomeIcon icon={faTwitter} /></Link></li>
                <li><Link><FontAwesomeIcon icon={faPinterestP} /></Link></li>
              </ul>



            </div>


              {/* second section */}
              <div className='col-span-2 space-y-3 '>
                <h2 className='text-xl'>Categories</h2>
                <ul className='flex-col space-y-2 text-gray-500 text-sm *:hover:text-primary-400 *:transition-colors *:duration-100'>
                  <li><Link>Men's Fashion</Link></li>
                  <li><Link>Women's Fashion</Link></li>
                  <li><Link>Baby & Toys</Link></li>
                  <li><Link>Beauty & Health</Link></li>
                  <li><Link>Electronics</Link></li>
                </ul>
              </div>


              {/* third section */}
              <div className='col-span-2 space-y-3 '>
                <h2 className='text-xl'>Quick Links</h2>
                <ul className='flex-col space-y-2 text-gray-500 text-sm *:hover:text-primary-400 *:transition-colors *:duration-100'>
                  <li><Link>About Us</Link></li>
                  <li><Link>Contact Us</Link></li>
                  <li><Link>Privacy Policy</Link></li>
                  <li><Link>Terms Of Service</Link></li>
                  <li><Link>Shipping Policy</Link></li>
                </ul>
              </div>


              {/* fourth section */}
              <div className='col-span-2 space-y-3 '>
                <h2 className='text-xl'>Customer Service</h2>
                <ul className='flex-col space-y-2 text-gray-500 text-sm *:hover:text-primary-400 *:transition-colors *:duration-100'>
                  <li><Link>My Account</Link></li>
                  <li><Link>My Orders</Link></li>
                  <li><Link>Wishlist</Link></li>
                  <li><Link>Returns & Refunds</Link></li>
                  <li><Link>Help Center</Link></li>
                </ul>
              </div>

          </div>





          <div className=' border-t border-gray-300/40 text-gray-500 text-sm py-5 flex justify-between '>
            <p>&copy; {new Date().getFullYear()} FreshCart.All Rights reserved</p>
            <Link to="/"><img src="/mini-logo.png" className="w-5 h-5" alt="logo" /></Link>

          </div>



        </div>

      </footer>

    </>
  )
}
