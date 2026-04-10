import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faEye, faEyeSlash, faStar, faTruck } from '@fortawesome/free-regular-svg-icons'
import { faLock, faShieldHalved, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation, useNavigate } from 'react-router'
import loginImg from '../../../src/assets/login-img.png'
import { useFormik } from 'formik'
import * as yup from "yup";
import { toast } from 'react-toastify'
import { useContext, useState } from 'react'
import { sendDataToLogin } from '../../../services/auth-service'
import { AuthContext } from '../../context/Auth.context'
import PageMetadata from '../../components/PageMetadata/PageMetadata'
import { auth, googleProvider } from "../../../config/firebase";
import { signInWithPopup } from 'firebase/auth'

export default function Login() {

  const passRegex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$';
  const nav = useNavigate();
  const [eye, setEye] = useState(false)
  const [inCorrectCredentails, setInCorrectCredentails] = useState(null);
  const { setToken } = useContext(AuthContext)
  const { state } = useLocation()


  async function handleGoogleLogin() {

    try {

      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);

      // Try to login with backend using Firebase UID as password
      const loginResponse = await sendDataToLogin({ email: result.user.email, password: result.user.uid });
      if (loginResponse.success) {
        toast.success('Account logged in with Google successfully 🎉')
        setToken(loginResponse.data.token)
        localStorage.setItem('token', loginResponse.data.token)

        setTimeout(() => {
          nav(state?.from || '/')
        }, 3000)
      } else {
        toast.error('Account not found. Please sign up first.')
      }

    } catch (error) {
      console.log(error);
      toast.error("Google login failed");
      setInCorrectCredentails(error.message)

    }
  }



  async function handleLogin(values) {

    try {

      const response = await sendDataToLogin(values)
      // console.log(response)
      if (response.success) {

        toast.success('Account logged in successfully 🎉')
        setToken(response.data.token)
        if (values.remember) localStorage.setItem('token', response.data.token)
        else sessionStorage.setItem('token', response.data.token)

        setTimeout(() => {
          nav(state?.from || '/')
        }, 3000)
      }
    } catch (err) {
      console.log(err)
      setInCorrectCredentails(err.message)
    }
  }



  const validationSchema = yup.object({
    email: yup.string().required('email is required').email('email is invalid'),
    password: yup.string().required('password is required').matches(passRegex, 'password should be at least 8 chars'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    validationSchema,
    onSubmit: handleLogin

  })



  return (
    <>
      <PageMetadata title='Login' description='Sign in to your FreshCart account to access your wishlist and manage your favorite products.' keywords='online grocery, fresh vegetables, dairy products, food delivery, online shopping' author='Fresh-Cart Team'></PageMetadata>

      <div className='bg-gray-300/18 py-15'>

        <div className='container mx-auto px-4 py-10 grid lg:grid-cols-2 gap-8 items-center'>


          {/* left section */}
          <div className='hidden lg:flex flex-col items-center justify-center text-center gap-6 px-6 '>

            <div className='flex flex-col items-center justify-center space-y-5'>
              <div className='w-100 mx-auto'>
                <img src={loginImg} className='w-full max-w-md mx-auto rounded-lg shadow-xl' />              </div>

              <h1 className='text-xl font-bold text-center'> FreshCart - Your One-Stop Shop for Fresh Products</h1>
              <p className='text-gray-500/90 text-sm font-medium text-center'>Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep</p>

              <ul className='flex  gap-2 *:flex *:justify-center *:items-center *:gap-1 space-x-3'>
                <li>
                  <FontAwesomeIcon icon={faStar} className='bg-primary-500 text-sm rounded-full p-2 text-white' />
                  <p className='text-gray-800/60 text-sm'>premium quality</p>
                </li>

                <li>
                  <FontAwesomeIcon icon={faTruck} className='bg-primary-500 text-sm rounded-full p-2 text-white' />
                  <p className='text-gray-800/60 text-sm'>premium quality</p>
                </li>

                <li>
                  <FontAwesomeIcon icon={faShieldHalved} className='bg-primary-500 text-sm rounded-full p-2 text-white' />
                  <p className='text-gray-800/60 text-sm'>premium quality</p>
                </li>
              </ul>
            </div>




          </div>






          {/* right section Form */}
          <div className='bg-white rounded-xl p-8 md:p-10 text-center space-y-6 shadow-2xl w-full max-w-md mx-auto'>
            <div>
              <h2 className='text-3xl font-semibold'><span className='text-primary-500'>Fresh</span>Cart</h2>
              <h3 className='text-3xl font-medium'>Welcome Back!</h3>
              <p className='text-gray-500/95 text-sm pt-1'>Sign in to continue your fresh shopping experience</p>
            </div>

            <div className='flex-col justify-center items-center space-y-3 relative group'>
              <button onClick={handleGoogleLogin} className='border border-gray-300 text-gray-600 px-5 py-2 rounded-md shadow-sm hover:bg-gray-200 transition-colors duration-200 w-full'>
                <FontAwesomeIcon icon={faGoogle} className='text-red-700 pe-1' />
                Continue with Google
              </button>
              <div className='bg-red-200 border border-gray-200 shadow-lg p-3 rounded-lg group-hover:block hidden absolute w-80 top-12  z-50'>
                <div className='absolute -top-1 right-6 w-3 h-3 bg-red-200 border-l border-t border-gray-200 rotate-45'></div>

                <p className='text-xs text-red-900 text-start leading-relaxed'>
                  Social sign-in authenticates with Google, then we connect that account to our backend so orders, cart, and protected features work.
                </p>
              </div>
              {/* <button onClick={handleFacebookLogin} className='border border-gray-300 text-gray-600 px-5 py-2 rounded-md shadow-sm hover:bg-gray-200 transition-colors duration-200 w-full'>
                <FontAwesomeIcon icon={faFacebook} className='text-blue-700 pe-1' />
                Continue with Facebook
              </button> */}
            </div>


            <div className='flex items-center gap-2 text-gray-400 text-sm before:border-t before:border-gray-300/50 before:flex-1 after:border-t after:border-gray-300/50 after:flex-1'>
              OR CONTINUE WITH EMAIL
            </div>




            <form className='*:flex *:gap-2 space-y-5' onSubmit={formik.handleSubmit}>


              <div className='flex-col items-start'>
                <label htmlFor='email' className='text-gray-600 font-semibold'>Email Address</label>
                <div className='w-full'>

                  <div className='relative'>
                    <FontAwesomeIcon icon={faEnvelope} className='absolute top-1/2 start-0 -translate-y-1/2 text-gray-400 ps-2 text-sm' />
                    <input id='email' type='email' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Enter your email' className='form-input py-2 pl-7'></input>

                  </div>
                  {formik.touched.email && formik.errors.email && <p className='text-red-500 mt-1 text-start'>{formik.errors.email}</p>}


                </div>
              </div>

              <div className='flex-col items-start'>

                <div className='flex justify-between w-full '>
                  <label htmlFor='password' className='text-gray-600 font-semibold'>Password</label>
                  <p><Link to='/forget-password' className='text-primary-600 hover:text-primary-500 '>Forgot Password?</Link></p>
                </div>

                <div className='w-full'>
                  <div className='relative'>
                    <FontAwesomeIcon icon={faLock} className='absolute top-1/2 -translate-y-1/2 text-gray-400 ps-2 text-sm' />
                    <input id='password' name='password' value={formik.values.password} onChange={(e) => { formik.handleChange(e); setInCorrectCredentails(null) }} onBlur={formik.handleBlur} type={eye ? 'text' : 'password'} placeholder='Enter your password' className='form-input py-2 pl-7'></input>
                    {(eye) ? <FontAwesomeIcon icon={faEye} className='absolute top-1/2 end-2 cursor-pointer -translate-y-1/2 text-gray-400 ps-2 text-sm' onClick={() => setEye(false)} />
                      : <FontAwesomeIcon icon={faEyeSlash} className='absolute top-1/2 end-2 cursor-pointer -translate-y-1/2 text-gray-400 ps-2 text-sm' onClick={() => setEye(true)} />
                    }
                  </div>
                  {formik.touched.password && formik.errors.password && <p className='text-red-500 mt-1 text-start'>{formik.errors.password}</p>}
                  {inCorrectCredentails ? <p className='text-red-500 mt-1 text-start'>{inCorrectCredentails}</p> : ''}

                </div>
              </div>


              <div className='flex-col items-start justify-start'>
                <div className='flex justify-start items-center gap-1'>
                  <input type='checkbox' htmlFor='remember' name='remember' checked={formik.values.remember} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                  <label className='text-gray-600 text-start ps-1' id='remember'>Keep me signed in</label>
                </div>
                {formik.errors.remember && formik.touched.remember && <p className='text-red-500 mt-1 text-start'>{formik.errors.remember}</p>}
              </div>

              <div className='after:border-b  after:border-gray-300/40   after:flex  after:p-2 mt-8'>
                <button type='submit' className='bg-primary-600 text-white font-semibold p-1 py-2  rounded-md w-full flex justify-center items-center gap-1 hover:bg-primary-500 transition-colors duration-100'>
                  <span><FontAwesomeIcon icon={faUserPlus} /></span>
                  Sign in
                </button>
              </div>
            </form>

            <div className='border-t-2 border-gray-200 pt-6'>
              <p>New to FreshCart? <Link to='/signup' className='text-primary-600 font-bold underline'>Create an account</Link></p>
            </div>


          </div>






        </div>
      </div>
    </>
  )
}
