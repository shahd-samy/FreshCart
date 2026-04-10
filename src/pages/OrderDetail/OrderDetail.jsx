import { useContext } from "react";
import { Link, useParams } from "react-router";
import { OrderContext } from "../../context/Order.context";
import Loading from "../../components/Loading/Loading";
import Rating from "../../components/Rating/Rating";
import OrderDetailSkeleton from "../../components/skeleton/OrderDetailSkeleton";
import PageMetadata from "../../components/PageMetadata/PageMetadata";

export default function OrderDetail() {
  const { id } = useParams();
  const { orders, loading } = useContext(OrderContext);

  const order = orders?.find((item) => item.id == id);

  if (loading) return <OrderDetailSkeleton />;
  if (!order)
    return (
      <p className="text-center mt-10 text-gray-500">
        Order not found
      </p>
    );

  return (
    <>
         <PageMetadata title='Order Detail' description='View the details of your order and track its progress.' keywords='online grocery, fresh vegetables, dairy products, food delivery, online shopping' author='Fresh-Cart Team'></PageMetadata>

    <div className="max-w-5xl mx-auto p-4 md:p-6 space-y-6">


      <div className=" p-5 md:p-6 rounded-2xl border shadow-sm bg-gray-300/65">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">

          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Order #{order.id}</h1>

            <p className="text-sm text-gray-600 mt-1">
              Placed on{" "}
              {new Date(order.createdAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", })}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs rounded-full bg-green-50 text-green-600 border">{order.isPaid ? "Paid" : "Unpaid"}</span>
            <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600 border">{order.isDelivered ? "Delivered" : "Not Delivered"}</span>
          </div>

        </div>
      </div>



      <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">

        {order.cartItems?.map((item) => (
          <div key={item._id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 md:p-5 border-b last:border-b-0 hover:bg-gray-50 transition">

            {/* LEFT */}
            <div className="flex items-center gap-4 min-w-0">

              <Link to={`/product/${item.product._id}`}>
                <img src={item.product.imageCover} className="w-14 h-14 md:w-16 md:h-16 rounded-xl border object-cover hover:scale-105 transition" />
              </Link>

              <div className="min-w-0">

                <Link to={`/product/${item.product._id}`}>
                  <p className="font-semibold text-gray-800 hover:text-primary-600 transition truncate">{item.product.title}</p>
                </Link>

                <p className="text-xs text-gray-400 mt-1">Qty: {item.count}</p>


                <div className="text-yellow-400 text-xs mt-1">
                  <Rating rating={item.product.ratingsAverage} />
                  <span className="text-gray-500 text-sm">{item.product.ratingsAverage} • {item.product.ratingsQuantity} reviews</span>
                </div>

              </div>
            </div>


            <div className="flex justify-between sm:justify-end w-full sm:w-auto gap-4 items-center">

              <div className="text-left sm:text-right">
                <p className="font-bold text-gray-800">{item.price} EGP</p>
                <p className="text-xs text-gray-400">Item price</p>
              </div>

            </div>

          </div>
        ))}
      </div>


      <div className="bg-gradient-to-r from-gray-50 to-white border rounded-2xl p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 shadow-sm">
        <p className="text-gray-600 font-medium">Total Amount</p>
        <p className="text-xl md:text-2xl font-bold text-gray-800">{order.totalOrderPrice} EGP</p>
      </div>

    </div>
    </>
  );
}