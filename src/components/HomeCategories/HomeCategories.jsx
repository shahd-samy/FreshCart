import { Link } from "react-router";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../../services/categories.service";
import Loading from "../Loading/Loading";
import HomeCategoriesSkeleton from "../skeleton/HomeCategoriesSkeleton";


export default function HomeCategories() {

    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchCategories() {

        try {
            const response = await getAllCategories()
            if(response.success) {setCategories(response.data.data); setLoading(false)}
        } catch (error) {
            console.log(error.message)
        }


    }

    useEffect(() => { fetchCategories() }, [])




    return (
        <>

        {
            (loading) ? <HomeCategoriesSkeleton></HomeCategoriesSkeleton> :

                <section className="bg-primary-100/20 py-15">

                    <div className="container py-7 space-y-8">

                        <div className="flex flex-col gap-3 sm:flex-row  sm:gap-0 justify-between items-center">
                            <h2 className="text-xl font-semibold">Shop by Category</h2>
                            {/* <Link to="/categories" className="text-primary-600 font-semibold flex items-center gap-0.5 hover:text-primary-500 transition-colors duration-200">View All Categories<FontAwesomeIcon icon={faArrowRight} /></Link> */}
                        </div>


                        {/* cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 ">

                            {

                                (categories) ?
                                    categories.map(function (obj) {
                                        return (
                                            <Link key={obj._id} to={`/products?category=${obj._id}`} className="bg-white shadow rounded-lg p-4 hover:cursor-pointer hover:shadow-2xl hover:shadow-primary-400 transition-shadow duration-200 flex flex-col items-center justify-center gap-1">
                                               
                                                <img className="size-16 rounded-xl object-cover" src={obj.image} alt={obj.name}></img>
                                                <p className="text-gray-700">{obj.name}</p>
                                            </Link>)

                                    })
                                    : ''
                            }



                        </div>



                    </div>

                </section>}
        </>
    )
}
