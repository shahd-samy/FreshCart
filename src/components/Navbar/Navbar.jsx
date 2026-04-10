import { faAddressCard, faCircleXmark, faEnvelope, faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faBabyCarriage, faBars, faBolt, faBriefcaseMedical, faCartShopping, faEllipsis, faMagnifyingGlass, faPerson, faPersonDress, faPhone, faRightFromBracket, faUserPlus, faWifi, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth.context";
import { CartContext } from "../../context/Cart.context";
import { WishListContext } from "../../context/WishList.context";
import { useOnlineStatus } from "../../hooks/useOnlineStatus";
import PageMetadata from "../PageMetadata/PageMetadata";
export default function Navbar() {

  const { cart } = useContext(CartContext)
  const { wishlist } = useContext(WishListContext)
  const isOnline = useOnlineStatus();

  const [menu, setMenu] = useState(false);
  const { logout, token } = useContext(AuthContext);

  function toggleMenu() {
    setMenu(!menu);
  }


  return (
    <>
              <PageMetadata title='Navbar' description='View our navbar and navigation options.' keywords='online grocery, fresh vegetables, dairy products, food delivery, online shopping' author='Fresh-Cart Team'></PageMetadata>

      <header>

        <div className="container ">

          {/* Top Navbar */}
          {/* <div className="hidden lg:flex justify-between border-b border-gray-300/30 py-2 text-sm">

            <ul className='flex gap-5'>
              <li className=" flex items-center justify-center">
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+1(800)123-4567">+1(800)123-4567</a>
              </li>
              <li className=" flex items-center justify-center">
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:support@freshcart.com">Support@freshcart.com</a>
              </li>

            </ul>

            <ul className='flex gap-4'>
              <li><NavLink to="/orders">Track Order</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="contact">Contact</NavLink></li>
              <li>
                <select id='currency' name='currency'>
                  <option value="EGP">EGP</option>
                  <option value="SAR">SAR</option>
                  <option value="AED">AED</option>
                </select>
              </li>
              <li>
                <select id='language' name='language'>
                  <option value="ar">العربية</option>
                  <option value="en">English</option>
                </select>
              </li>
            </ul>
          </div> */}


          {/* Main Navigator */}
          <nav className="flex justify-between items-center py-5 pt-7">


            <div className=" pb-2">
              <Link to="/"><img src="/freshcart-logo.svg" alt="logo" /></Link>
            </div>

            <div className="flex lg:hidden text-white bg-primary-600 p-1.5 rounded-md items-center justify-center cursor-pointer" onClick={toggleMenu}>
              {(menu) ? <FontAwesomeIcon icon={faX} className="text-sm " /> : <FontAwesomeIcon icon={faBars} className="text-sm " />}
            </div>

            {/* <search className="relative hidden lg:flex">
              <input type="text" className="w-100 border border-gray-200/50 p-2 rounded-md focus:outline-none focus:border-[var(--color-primary-400)]" placeholder="Search For Products..."></input>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute inset-e-2 top-1/2 -translate-1/2" />
            </search>
 */}
            <ul className="hidden lg:flex items-center  gap-5 xl:gap-12 *:font-medium">

              <li><NavLink to="">Home</NavLink></li>
              {/* <li><NavLink to="home">Recently Added</NavLink></li> */}
              <li><NavLink to="products">Products</NavLink></li>
              {/* <li><NavLink to="deals">Deals</NavLink></li> */}
              {(token) ? <li><NavLink to="orders">Orders</NavLink></li> : ''}
            </ul>
            <ul className="hidden lg:flex items-center gap-5 ">




              <li>
                <NavLink to="wishlist" className={({ isActive }) => `flex flex-col items-center gap-0.5 ${isActive ? "text-primary-500" : ""}`}>
                  <div className="relative">

                    <FontAwesomeIcon icon={faHeart} className="text-xl" />
                    {wishlist?.length > 0 ?
                      <span className="absolute  bg-primary-600 w-4 h-4 top-0 -translate-1/2 -right-3 rounded-full flex items-center justify-center text-white text-xs p-1.5">{wishlist?.length}</span>
                      : ''}
                  </div>
                  <span className="text-sm">Wishlist</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="cart" className={({ isActive }) => `flex flex-col items-center gap-0.5 ${isActive ? "text-primary-500" : ""}`}>
                  <div className="relative">
                    <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
                    {cart?.products?.length > 0 ?
                      <span className="absolute  bg-primary-600 w-4 h-4 top-0 -translate-1/2 -right-3 rounded-full flex items-center justify-center text-white text-xs p-1.5">{cart?.products?.length}</span>
                      : ''
                    }
                  </div>
                  <span className="text-sm">Cart</span>
                </NavLink>
              </li>


              {/* <li>
                <NavLink to="account" className={({ isActive }) => `flex flex-col items-center gap-0.5 ${isActive ? "text-primary-500" : ""}`}>
                  <FontAwesomeIcon icon={faUser} className="text-xl" />
                  <span className="text-sm">Account</span>
                </NavLink>
              </li> */}
              {
                (!token) ?
                  <>
                    <li>
                      <NavLink to="signup" className={({ isActive }) => `flex flex-col items-center gap-0.5 ${isActive ? "text-primary-500" : ""}`}>
                        <FontAwesomeIcon icon={faUserPlus} className="text-xl" />
                        <span className="text-sm">Signup</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="login" className={({ isActive }) => `flex flex-col items-center gap-0.5 ${isActive ? "text-primary-500" : ""}`}>
                        <FontAwesomeIcon icon={faAddressCard} className="text-xl" />
                        <span className="text-sm">Login</span>
                      </NavLink>
                    </li>
                  </> : <li>
                    <button onClick={logout} className={`flex flex-col items-center gap-0.5`}>
                      <FontAwesomeIcon icon={faRightFromBracket} className="text-xl" />
                      <span className="text-sm">Logout</span>
                    </button>
                  </li>
              }

 <div className={`hover:bg-gray-200/50 text-sm absolute p-1 rounded-lg  top-3 right-3 ${isOnline?'text-primary-800 bg-primary-100':'text-red-800 bg-red-100'}`}>
            <FontAwesomeIcon icon={faWifi} />
            <span className="text-xs ps-1">Online</span>

          </div>
            </ul>

          </nav>

        </div>



        {/* Category Navigator */}
        {/* <nav className="hidden lg:flex bg-gray-100">
          <div className="container flex gap-5 items-center  py-4">

            <div className="relative group">
              <button className="bg-primary-600 text-white text-s p-2 rounded-lg hover:bg-primary-600/90 transition-colors duration-100 flex items-center justify-center gap-1">
                <FontAwesomeIcon icon={faBars} />
                All Categories
                <FontAwesomeIcon icon={faAngleDown} />

              </button>

              <menu className={`bg-white absolute w-50 shadow  rounded-md text-gray-700 divide-y divide-gray-100 hidden group-hover:block`}>

                <li className="hover:bg-gray-200  cursor-pointer w-full p-2">
                  <Link to="/">
                    <FontAwesomeIcon icon={faPerson} className="text-primary-500 pe-1" />
                    Men's Fashion
                  </Link>
                </li>
                <li className="hover:bg-gray-200  cursor-pointer w-full p-2">
                  <Link to="">
                    <FontAwesomeIcon icon={faPersonDress} className="text-primary-500 pe-1" />
                    Women's Fashion
                  </Link>
                </li>
                <li className="hover:bg-gray-200  cursor-pointer w-full p-2">
                  <Link to="">
                    <FontAwesomeIcon icon={faBabyCarriage} className="text-primary-500 pe-1" />
                    Baby & Toys
                  </Link>
                </li>
                <li className="hover:bg-gray-200  cursor-pointer w-full p-2">
                  <Link to="">
                    <FontAwesomeIcon icon={faBriefcaseMedical} className="text-primary-500 pe-1" />
                    Beauty & Health
                  </Link>
                </li>
                <li className="hover:bg-gray-200  cursor-pointer w-full p-2">
                  <Link to="">
                    <FontAwesomeIcon icon={faBolt} className="text-primary-500 pe-1" />
                    Electronics
                  </Link>
                </li>
                <li className="hover:bg-gray-200  cursor-pointer w-full p-2 border-t border-gray-200">
                  <Link to="">
                    <FontAwesomeIcon icon={faEllipsis} className="text-primary-500 pe-1" />
                    View All Categories
                  </Link>
                </li>
              </menu>
            </div>




          </div>


        </nav> */}



        {/* overlay */}
        <div className={`fixed z-80 lg:hidden bg-black/60 inset-0 cursor-pointer  ${menu ? 'absolute' : 'hidden'}`} onClick={toggleMenu}></div>

        <div className={`lg:-left-80 z-88  bg-white  w-fit p-3 px-8 shadow space-y-4 fixed inset-0 ${menu ? 'left-0' : '-left-80'} transition-all duration-200`}>

          <div className="flex items-center justify-between gap-9 pb-4 border-b border-gray-300/50">
            <div className="flex">
              <Link to="/"><img src="/mini-logo.png" className="w-8 h-8" alt="logo" /></Link>
              <h1 className="text-2xl">FreshCart</h1>
            </div>
            <FontAwesomeIcon icon={faCircleXmark} onClick={toggleMenu} className="text-xl cursor-pointer" />
          </div>


          <div className="pb-4 border-b border-gray-300/50">
            <h2 className="">Main Menu</h2>
            <ul className="flex flex-col gap-3 pt-5">

              <li className="hover:bg-gray-200/50">
                <NavLink to="" className={({ isActive }) => `flex items-center gap-1 p-2 transition-colors duration-100 ${isActive ? "text-primary-500 bg-primary-50" : ""}`}>

                  Home</NavLink></li>
              {/* <li><NavLink to="home">Recently Added</NavLink></li> */}
              <li className="hover:bg-gray-200/50">
                <NavLink to="products" className={({ isActive }) => `flex items-center gap-1 p-2 transition-colors duration-100 ${isActive ? "text-primary-500 bg-primary-50" : ""}`}>

                  Products</NavLink></li>
              {/* <li><NavLink to="deals">Deals</NavLink></li> */}
              {(token) ?
                <li className="hover:bg-gray-200/50">
                  <NavLink to="orders" className={({ isActive }) => `flex items-center gap-1 p-2 transition-colors duration-100 ${isActive ? "text-primary-500 bg-primary-50" : ""}`}>

                    Orders</NavLink></li> : ''}


              <li className="hover:bg-gray-200/50">
                <NavLink to="wishlist" className={({ isActive }) => `flex items-center gap-1 p-2 transition-colors duration-100 ${isActive ? "text-primary-500 bg-primary-50" : ""}`}>
                  <div className="relative">

                    <FontAwesomeIcon icon={faHeart} className="text-xl" />
                    {wishlist?.length > 0 ?
                      <span className="absolute  bg-primary-600 w-4 h-4 top-0 -translate-1/2 -right-3 rounded-full flex items-center justify-center text-white text-xs p-1.5">{wishlist?.length}</span>
                      : ''}
                  </div>
                  <span className="text-sm">Wishlist</span>
                </NavLink>
              </li>

              <li className="hover:bg-gray-200/50">
                <NavLink to="cart" className={({ isActive }) => `flex items-center gap-1 p-2 transition-colors duration-100 ${isActive ? "text-primary-500" : ""}`}>
                  <div className="relative">
                    <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
                    {cart?.products?.length > 0 ?
                      <span className="absolute  bg-primary-600 w-4 h-4 top-0 -translate-1/2 -right-3 rounded-full flex items-center justify-center text-white text-xs p-1.5">{cart?.products?.length}</span>
                      : ''}
                  </div>
                  <span className="text-sm">Cart</span>
                </NavLink>
              </li>



              {/* <li className="hover:bg-gray-200/50">
                <NavLink to="account" className={({ isActive }) => `flex items-center gap-1 p-2 transition-colors duration-100 ${isActive ? "text-primary-500 bg-primary-50" : ""}`}>
                  <FontAwesomeIcon icon={faUser} className="text-xl" />
                  <span className="text-sm">Account</span>
                </NavLink>
              </li> */}


            </ul>

          </div>



          <div className="pb-4 ">
            <h2 className="">Account</h2>

            <ul className="flex flex-col gap-3 pt-5">
              {
                (!token) ? <><li className="hover:bg-gray-200/50">

                  <NavLink to="signup" className={({ isActive }) => `flex items-center gap-1 p-2 transition-colors duration-100 ${isActive ? "text-primary-500 bg-primary-50" : ""}`}>
                    <FontAwesomeIcon icon={faUserPlus} className="text-xl" />
                    <span className="text-sm">Signup</span>
                  </NavLink>
                </li>

                  <li className="hover:bg-gray-200/50">
                    <NavLink to="login" className={({ isActive }) => `flex  items-center gap-1 p-2 transition-colors duration-100 ${isActive ? "text-primary-500 bg-primary-50" : ""}`}>
                      <FontAwesomeIcon icon={faAddressCard} className="text-xl" />
                      <span className="text-sm">Login</span>
                    </NavLink>
                  </li>
                </> : <li className="hover:bg-gray-200/50">
                  <button onClick={logout} className='flex items-center gap-1 p-2 transition-colors duration-100'>
                    <FontAwesomeIcon icon={faRightFromBracket} className="text-xl" />
                    <span className="text-sm">Logout</span>
                  </button>
                </li>
              }




            </ul>

          </div>
          <div className={`hover:bg-gray-200/50 text-sm absolute bottom-2 right-2 ${isOnline?'text-primary-700':'text-red-700'}`}>
            <FontAwesomeIcon icon={faWifi} />
            <span className="text-xs ps-1">Online</span>

          </div>
        </div>

      </header>




    </>
  )
}
