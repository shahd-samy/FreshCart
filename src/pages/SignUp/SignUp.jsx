import {  faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faStar, faTruck } from '@fortawesome/free-regular-svg-icons'
import { faShieldHalved, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router'
import authorImg from '../../../src/assets/review-author.png'
import { useFormik } from 'formik'
import * as yup from "yup";
import { toast } from 'react-toastify'
import { useState } from 'react'
import { checkPasswordStrength } from './../../../utils/password-strength';
import { sendDataToSignUp } from '../../../services/auth-service'
import PageMetadata from '../../components/PageMetadata/PageMetadata'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../../../config/firebase'
import { AuthContext } from '../../context/Auth.context'
import { useContext } from 'react'
export default function SignUp() {


  const phoneRegex = '^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$';
  const passRegex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$';
  const nav = useNavigate();
  const [err, setErr] = useState(null)
  const { setToken } = useContext(AuthContext)

  async function handleGoogleSignup() {

    try {

      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);


      const signupResponse = await sendDataToSignUp({
        name: result.user.displayName,
        email: result.user.email,
        password: result.user.uid,
        rePassword: result.user.uid,
        phone: '1234567890', 
        terms: true
      });

      if (signupResponse.success) {
        toast.success('Account signed up with Google successfully 🎉')

        const loginResponse = await sendDataToLogin({ email: result.user.email, password: result.user.uid });
        if (loginResponse.success) {
          setToken(loginResponse.data.token)
          localStorage.setItem('token', loginResponse.data.token)
          setTimeout(() => {
            nav('/')
          }, 3000)
        }
      } else {
        toast.error('Signup failed')
      }

    } catch (error) {
      console.log(error);
      toast.error("Google signup failed");
      setErr(error.message)

    }
  }

  

  async function handleSignup(values) {

    try {

      const response = await sendDataToSignUp(values);

      if (response.success) {
        toast.success('Account created successfully 🎉')
        setTimeout(() => {
          nav('/login')
        }, 3000)
      }

    } catch (error) {
      console.log(error)
      setErr(error.message)
    }

  }

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Email is invalid"),
    phone: yup.string().required("Phone number is required").matches(phoneRegex, 'invalid phone'),
    password: yup.string().required("Password is required").matches(passRegex, 'password should be at least 8 chars'),
    rePassword: yup.string().required("rePassword is required").oneOf([yup.ref('password')], 'passwords should be the same'),
    terms: yup.boolean().oneOf([true], 'you should agree on terms')

  })

  const formik = useFormik({
    initialValues:
    {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '',
      terms: false
    },
    validationSchema,
    onSubmit: handleSignup,

  });

  const checkPass = checkPasswordStrength(formik.values.password);




  return (
    <>
      <PageMetadata title='Sign Up ' description='Create a new account and start shopping for fresh groceries delivered to your door.' keywords='sign up, register account, create account, fresh groceries, online shopping' author='Fresh-Cart Team'></PageMetadata>

      <div className='bg-gray-300/18'>
        <div className='container py-10 grid lg:grid-cols-2 gap-5'>




          {/* left section */}
          <div className='space-y-11 span-2 p-10'>

            <div>
              <h1 className='text-3xl font-bold'>Welcome to <span className='text-primary-600'>FreshCart</span></h1>
              <p className='text-gray-800/90  mt-2'>Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep</p>
            </div>

            <ul className='space-y-7 *:flex *:gap-2 *:items-center'>

              <li>
                <FontAwesomeIcon icon={faStar} className='bg-primary-200 rounded-full p-2 text-primary-500' />
                <div>
                  <h3 className='font-semibold'>Premium Quality</h3>
                  <p className='text-gray-800/60'>premium quality products sourced from trusted suppliers </p>
                </div>
              </li>

              <li>
                <FontAwesomeIcon icon={faTruck} className='bg-primary-200 rounded-full p-2 text-primary-500' />
                <div>
                  <h3 className='font-semibold'>Premium Quality</h3>
                  <p className='text-gray-800/60'>premium quality products sourced from trusted suppliers </p>
                </div>
              </li>

              <li>
                <FontAwesomeIcon icon={faShieldHalved} className='bg-primary-200 rounded-full p-2 text-primary-500' />
                <div>
                  <h3 className='font-semibold'>Premium Quality</h3>
                  <p className='text-gray-800/60'>premium quality products sourced from trusted suppliers </p>
                </div>
              </li>
            </ul>


            {/* reviews */}
            <div className='bg-white p-5  shadow rounded-md space-y-2'>


              <div className='flex gap-2'>

                <div className='rounded-full w-10 h-10'>
                  <img src={authorImg} alt=''></img>
                </div>


                <div className=''>
                  <h4>Sarah Johson</h4>

                  <div>
                    <FontAwesomeIcon icon={faStar} className='text-amber-400 text-xs' />
                    <FontAwesomeIcon icon={faStar} className='text-amber-400 text-xs' />
                  </div>


                </div>

              </div>



              <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae distinctio, impedit earum ea quia!</blockquote>

            </div>


          </div>






          {/* right section Form */}
          <div className='bg-white rounded-xl p-10 text-center space-y-8 span-2 shadow-2xl'>

            <div>
              <h2 className='text-3xl font-medium'>Create Your Account</h2>
              <p className='text-gray-500/95 text-sm'>Start your fresh journey withnus today</p>
            </div>

            <div className='flex flex-col justify-evenly items-center gap-2 group relative'>
              <button onClick={handleGoogleSignup} className='border  border-gray-300 px-5 py-0.5 rounded-md shadow-sm hover:bg-gray-200 transition-colors duration-200 w-full'>
                <FontAwesomeIcon icon={faGoogle} className='text-red-700' />
                Google
              </button>
              <div className='bg-red-200 border border-gray-200 shadow-lg p-3 rounded-lg group-hover:block hidden absolute w-80 top-9  z-50'>
                <div className='absolute -top-1 right-6 w-3 h-3 bg-red-200 border-l border-t border-gray-200 rotate-45'></div>

                <p className='text-xs text-red-900 text-start leading-relaxed'>
                  Social sign-in authenticates with Google, then we connect that account to our backend so orders, cart, and protected features work.
                </p>
              </div>
              {/* <button className='border border-gray-300 px-5 py-0.5 rounded-md shadow-sm hover:bg-gray-200 transition-colors duration-200 w-full'>
                <FontAwesomeIcon icon={faFacebook} className='text-blue-700' />
                Facebook
              </button> */}
            </div>


            <div className='before:border before:border-gray-300/50 before:w-full after:border after:border-gray-300/50 after:w-full text-gray-500 gap-2 flex justify-center items-center'>
              or
            </div>


            <form className='*:flex *:gap-2 space-y-5' onSubmit={formik.handleSubmit}>

              <div className=' flex-col items-start'>
                <label htmlFor='name' className='text-gray-600'>Name*</label>
                <div className='w-full'>
                  <input id='name' name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} type='text' placeholder='All' className='form-input'></input>
                  {formik.touched.name && formik.errors.name && <p className='text-red-500 mt-1 text-start'>{formik.errors.name}</p>}
                </div>
              </div>

              <div className='flex-col items-start'>
                <label htmlFor='email' className='text-gray-600'>Email*</label>
                <div className='w-full'>
                  <input id='email' name='email' value={formik.values.email} onChange={(e) => { formik.handleChange(e); setErr(null) }} onBlur={formik.handleBlur} type='email' placeholder='ali@example.com' className='form-input'></input>
                  {formik.touched.email && formik.errors.email && <p className='text-red-500 mt-1 text-start'>{formik.errors.email}</p>}
                </div>
                {(err) ? <p className='text-red-500 mt-1 text-start'>{err}</p> : ''}
              </div>

              <div className='flex-col items-start'>
                <label htmlFor='password' className='text-gray-600'>Password*</label>
                <div className='after:border-b  after:border-gray-300/80   after:flex  after:p-1 w-full'>
                  <input id='password' name='password' value={formik.values.password} onChange={(e) => { formik.handleChange(e); checkPasswordStrength(formik.values.password) }} onBlur={formik.handleBlur} type='password' placeholder='Create a strong password' className='form-input'></input>
                  {formik.touched.password && formik.errors.password && <p className='text-red-500 mt-1 text-start'>{formik.errors.password}</p>}

                </div>

                {formik.values.password && <div className='flex justify-center items-center w-full gap-2 -mt-2'>

                  <div className='w-full h-1 bg-gray-200 rounded-2xl overflow-hidden'>
                    <div className={`${checkPass.width} ${checkPass.background} h-1`}></div>
                  </div>

                  <span className='text-gray-400 text-xs text-nowrap text-center'>{checkPass.text}</span>

                </div>}


                <div className='-mt-2'>
                  <p className='text-gray-400/80 text-xs'></p>
                </div>
              </div>

              <div className='flex-col items-start'>
                <label htmlFor='rePassword' className='text-gray-600'>Confirm Password*</label>
                <div className='w-full text-start'>
                  <input id='rePassword' name='rePassword' value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} type='password' placeholder='Confirm your password' className='form-input'></input>
                  {formik.touched.rePassword && formik.errors.rePassword && <p className='text-red-500 mt-1 text-start'>{formik.errors.rePassword}</p>}

                </div>
              </div>

              <div className='flex-col items-start'>
                <label className='text-gray-600'>Phone Number*</label>
                <div className='w-full text-start'>
                  <input type='tel' name='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='+1 234 567 8900' className='form-input'></input>
                  {formik.touched.phone && formik.errors.phone && <p className='text-red-500 mt-1 text-start'>{formik.errors.phone}</p>}
                </div>
              </div>

              <div className='flex-col items-start justify-start'>

                <div className='flex justify-start items-center gap-1'>
                  <input type='checkbox' name='terms' checked={formik.values.terms} onChange={formik.handleChange} onBlur={formik.handleBlur} htmlFor='terms'></input>
                  <label className='text-gray-600 text-start ps-1' id='terms'>I agree to the <span className='text-primary-500 underline'>Terms of Service</span> and <span className='text-primary-500 underline'>Privacy Policy*</span></label>
                </div>



                {formik.touched.terms && formik.errors.terms && <p className='text-red-500 mt-1 text-start'>{formik.errors.terms}</p>}

              </div>

              <div className='after:border-b  after:border-gray-300/40   after:flex  after:p-2 mt-8'>
                <button type='submit' className='bg-primary-600 text-white font-semibold p-1 rounded-md w-full flex justify-center items-center gap-1 hover:bg-primary-500 transition-colors duration-100'>
                  <span><FontAwesomeIcon icon={faUserPlus} /></span>
                  Create My Account
                </button>
              </div>
            </form>

            <div className='border-t-2 border-gray-200 p-6'>
              <p>Already have an account? <Link to='/login' className='text-primary-500 underline'>Sign In</Link></p>
            </div>


          </div>






        </div>
      </div>
    </>
  )
}
