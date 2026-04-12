import { useContext } from "react";
import { OrderContext } from "../../context/Order.context";
import Loading from "../../components/Loading/Loading";
import { Link, Navigate } from "react-router";
import OrdersSkeleton from "../../components/skeleton/OrdersSkeleton";
import PageMetadata from "../../components/PageMetadata/PageMetadata";



export default function Orders() {


  const userInfo = JSON.parse(localStorage.getItem('userinfo'))

  const { orders, loading } = useContext(OrderContext)
  console.log(orders)
  if (loading) return <OrdersSkeleton></OrdersSkeleton>

  return (
    <>
      <PageMetadata title='Orders' description='View your order history and manage your purchases.' keywords='online grocery, fresh vegetables, dairy products, food delivery, online shopping' author='Fresh-Cart Team'></PageMetadata>


      <section className="bg-linear-to-b from-gray-100 to-white min-h-screen py-10">
        <div className="container mx-auto px-4 max-w-5xl">



          {/* USER INFO */}
          <div className="bg-white rounded-3xl shadow-md p-6 mb-10 border border-gray-100">
            <div className="flex items-center gap-5">


              <div className="w-16 h-16 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-2xl font-bold shadow-sm">
                {userInfo?.name[0]}
              </div>


              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Hello, {userInfo?.name}
                </h2>
                <p className="text-gray-400 text-sm">
                  Customer Account
                </p>
              </div>
            </div>


          </div>




          <div className="space-y-4">

            {orders?.map((order) => (
              <div key={order?.id} className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">


                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 p-5 bg-gray-300/65 border-b border-gray-400">

                  <div>
                    <h2 className="text-sm font-semibold text-gray-800">Order #{order?.id}</h2>

                    <p className="text-xs text-gray-600">
                      Placed on{" "}
                      {new Date(order.createdAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", })}
                    </p>
                  </div>


                  <div className="flex gap-2 flex-wrap">
                    <span className={`px-3 py-1 text-xs rounded-full border ${order.isPaid
                      ? "bg-green-50 text-green-600 border-green-100"
                      : "bg-yellow-50 text-yellow-600 border-yellow-100"}`}>
                      {order.isPaid ? "Paid" : "Unpaid"}
                    </span>

                    <span className={`px-3 py-1 text-xs rounded-full border ${order.isDelivered
                      ? "bg-blue-50 text-blue-600 border-blue-100"
                      : "bg-red-50 text-red-600 border-red-100"
                      }`}>
                      {order.isDelivered ? "Delivered" : "Not Delivered"}
                    </span>
                  </div>
                </div>




                <div className="p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">


                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {order.cartItems?.slice(0, 4).map((item) => (
                        <img key={item._id} src={item.product?.imageCover} className="w-10 h-10 rounded-lg border object-cover bg-white" />
                      ))}
                    </div>

                    {order.cartItems?.length > 4 && (
                      <span className="text-xs text-gray-500">
                        +{order.cartItems.length - 4} more
                      </span>
                    )}
                  </div>



                  <div className="grid grid-cols-3 gap-6 text-xs">
                    <div>
                      <p className="text-gray-400">Items</p>
                      <p className="font-semibold text-gray-700">
                        {order.cartItems?.length}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-400">Total</p>
                      <p className="font-semibold text-gray-700">
                        {order.totalOrderPrice} EGP
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-400">City</p>
                      <p className="font-semibold text-gray-700">
                        {order.shippingAddress?.city}
                      </p>
                    </div>
                  </div>


                  <div className="flex justify-end">
                    <Link to={`/orders/${order.id}`}>
                      <button className="bg-primary-900 text-white px-5 py-2 rounded-lg text-sm hover:bg-primary-800 active:scale-95 transition">
                        View Details →
                      </button>
                    </Link>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>

  );
}