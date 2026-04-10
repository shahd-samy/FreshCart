import { useContext} from "react";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import { ProductContext } from "../../context/Products.context";
import FeaturedProductsSkeleton from "../skeleton/FeaturedProductsSkeleton";

export default function FeaturedProducts() {
 const {products,error,loading}= useContext(ProductContext);
//  console.log(products,error,loading)

    return (
        <>

            {loading ? <FeaturedProductsSkeleton></FeaturedProductsSkeleton> :
                <section className="bg-primary-100/20 py-15 ">


                    <div className='container py-7 space-y-7'>


                        <div className="flex flex-col gap-3 sm:flex-row  sm:gap-0 justify-between ">
                            <div className="space-y-1">
                                <h2 className="text-xl font-semibold">Featured Products</h2>
                            </div>
                        </div>


                        {/* cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 ">

                            <ProductCard products={products} ></ProductCard>

                        </div>




                    </div>

                </section>
            }
        </>
    )
}
