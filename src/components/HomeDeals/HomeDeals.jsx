import { Link } from "react-router";
import ProductCard from "../ProductCard/ProductCard";
import { useContext, useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import { getAllProducts } from "../../../services/product-service";
import { calcTimeLeft } from "../../../utils/counterDown";
import { ProductContext } from "../../context/Products.context";
import HomeDealsSkeleton from "../skeleton/HomeDealsSkeleton";

export default function HomeDeals() {

    const [timeLeft, setTimeLeft] = useState(calcTimeLeft());
    const { products, error, loading } = useContext(ProductContext);



    const Deals = products?.filter((product) => product.priceAfterDiscount)


    useEffect(() => {
        const timeInterval = setInterval(() => {
            const t = calcTimeLeft();
            setTimeLeft(t)

            if (t.hours == 0 && t.mins == 0 && t.seconds == 0) clearInterval(timeInterval);
            return function () {
                clearInterval(timeInterval)
            }
        }, 1000);
    }, [])





    return (
        <>

            {loading ? <HomeDealsSkeleton></HomeDealsSkeleton> :
                <section className="bg-primary-100/20 py-15 ">


                    <div className='container py-7 space-y-7'>


                        <div className="flex flex-col gap-3 sm:flex-row  sm:gap-0 justify-between ">
                            <div className="space-y-1">
                                <h2 className="text-xl font-semibold">Deals of the Day</h2>
                                <p className="text-gray-500 font-semibold text-sm flex items-center gap-2 *:bg-black *:p-0.5 *:px-1.5 *:rounded-md *:text-gray-200 *:shadow-md">Offers ends in:
                                    <span className="">{String(timeLeft.hours).padStart(2, '0')}</span>:
                                    <span>{String(timeLeft.mins).padStart(2, '0')}</span>:
                                    <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
                                </p>
                            </div>
                            {/* <Link to="/deals" className="text-primary-600 font-semibold hover:text-primary-500 transition-colors duration-200">View All Deals</Link> */}
                        </div>


                        {/* cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 ">



                            <ProductCard products={Deals}></ProductCard>


                        </div>




                    </div>

                </section>
            }
        </>
    )
}
