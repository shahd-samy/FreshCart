import { useFormik } from "formik";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import * as yup from 'yup'
import { createOrder } from "../../../services/payment-service";
import { CartContext } from './../../context/Cart.context';
import Loading from "../../components/Loading/Loading";
import { toast } from "react-toastify";
import CheckoutSkeleton from "../../components/skeleton/CheckoutSkeleton";
import PageMetadata from "../../components/PageMetadata/PageMetadata";


export default function Checkout() {
  const [payment, setPayment] = useState("online");
  const { cart, setCart,loading, HandleGetUserCart } = useContext(CartContext);

  const nav = useNavigate();
  async function handleCreatingOrder(values) {
    console.log(values)
    const response = await createOrder(formik.values.paymentMethod, cart._id, values.shippingAddress)
    console.log(response)
    if (response.success) {
      if (response.data.session) {
        toast.loading("you will be directed to stripe to complete payment process");
        setTimeout(() => { location.href = response.data.session.url; }, 3000)

      }
      else {
        toast.success("Your order has been created")
        setCart({
          data:{
            products:[],
            totalCartPrice:0
          }
        })
        nav('/orders')
      }

    }
  }






  const validationSchema = yup.object({
    paymentMethod: yup.string().required("Payment method is required"),
    shippingAddress: yup.object({
      details: yup.string().required("Address is required"),
      phone: yup.string().required("Phone is required").matches(/^(\+20|0)?1[0125][0-9]{8}$/, "Phone number is invalid"),
      city: yup.string().required("City is required"),
    })
  })

  const formik = useFormik({
    initialValues: {
      paymentMethod: 'online',
      "shippingAddress": {
        "details": "",
        "phone": "",
        "city": ""
      }

    },
    validationSchema,
    onSubmit: handleCreatingOrder,

  })

  if (loading) return <CheckoutSkeleton />


  return (
    <>
     <PageMetadata title='Checkout' description='Complete your purchase and provide shipping details.' keywords='online grocery, fresh vegetables, dairy products, food delivery, online shopping' author='Fresh-Cart Team'></PageMetadata>

    <section className="bg-gray-100 py-10">
      <form className="container mx-auto px-4 grid grid-cols-12 gap-8" onSubmit={formik.handleSubmit}>

        {/* LEFT SIDE */}

        <div className="col-span-12 lg:col-span-8 space-y-6">

          {/* Payment Method */}
          <div className="bg-white shadow-lg rounded-xl p-6 space-y-5">

            <h3 className="text-xl font-semibold">Payment Method</h3>


            <div className="space-y-4">


              <label className={`flex items-center gap-4 border rounded-lg p-4 cursor-pointer transition 
              ${payment === "cod" ? "border-primary-500 bg-primary-50" : "border-gray-200"}`}>
                <input type="radio" name="paymentMethod" value='cod' checked={payment === "cod"} onChange={(e) => { setPayment("cod"); formik.setFieldValue('paymentMethod', e.target.value) }} />
                <div>
                  <p className="font-semibold">Cash on Delivery</p>
                  <p className="text-sm text-gray-500">Pay when your order arrives</p>
                </div>
              </label>


              <label className={`flex items-center gap-4 border rounded-lg p-4 cursor-pointer transition 
              ${payment === "online" ? "border-primary-500 bg-primary-50" : "border-gray-200"}`}>

                <input type="radio" name="paymentMethod" value='online' checked={payment === "online"} onChange={(e) => { setPayment("online"); formik.setFieldValue('paymentMethod', e.target.value) }} />
                <div>
                  <p className="font-semibold">Online Payment</p>
                  <p className="text-sm text-gray-500">Pay securely with card or wallet</p>
                </div>
              </label>

            </div>
          </div>







          {/* Shipping Address */}
          <div className="bg-white shadow-lg rounded-xl p-6 space-y-5">
            <h3 className="text-xl font-semibold">Shipping Address</h3>

            <div className="space-y-4">

              <div>
                <label className="block text-sm font-medium mb-1">Address Details*</label>
                <textarea name="shippingAddress.details" value={formik.values.shippingAddress.details} onChange={formik.handleChange} className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary-400 outline-none" placeholder="Enter full address" />
                {formik.touched.shippingAddress?.details && formik.errors.shippingAddress?.details && (<p className="text-red-500 text-sm ps-2">{formik.errors.shippingAddress.details}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div>
                  <label className="block text-sm font-medium mb-1">Phone Number*</label>
                  <input type="tel" name="shippingAddress.phone" value={formik.values.shippingAddress.phone} onChange={formik.handleChange} className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary-400 outline-none" placeholder="01xxxxxxxxx" />
                  {formik.touched.shippingAddress?.phone && formik.errors.shippingAddress?.phone && (<p className="text-red-500 text-sm ps-2">{formik.errors.shippingAddress.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">City*</label>
                  <input type="text" name="shippingAddress.city" value={formik.values.shippingAddress.city} onChange={formik.handleChange} className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary-400 outline-none" placeholder="Cairo" />
                  {formik.touched.shippingAddress?.city && formik.errors.shippingAddress?.city && (<p className="text-red-500 text-sm ps-2">{formik.errors.shippingAddress.city}</p>
                  )}
                </div>

              </div>

            </div>
          </div>

        </div>






        {/* RIGHT SIDE */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white shadow-lg rounded-xl p-6 space-y-5 sticky top-10">

            <h3 className="text-xl font-semibold">Order Summary</h3>

            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>{cart.totalCartPrice} EGP</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Delivery</span>
              <span>80 EGP</span>
            </div>

            <hr />

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>{cart.totalCartPrice + 80} EGP</span>
            </div>

            <button type="submit" onSubmit={(e) => { e.preventDefault(); }} className="w-full mt-5 font-bold text-center text-lg bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition">
              Proceed to Payment
            </button>

            <Link to='/cart' className="w-full font-bold text-center text-lg border py-3 rounded-lg hover:bg-gray-100 transition">
              <button >
                Previous Step
              </button>
            </Link>

          </div>
        </div>
      </form>

    </section>
    </>
  );
}