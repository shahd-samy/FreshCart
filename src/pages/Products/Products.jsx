import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/Products.context";
import Loading from "../../components/Loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSearchParams } from "react-router";
import { getAllProducts } from "../../../services/product-service";
import { useNavigate } from "react-router";
import ProductsSkeleton from "../../components/skeleton/ProductsSkeleton";
import PageMetadata from "../../components/PageMetadata/PageMetadata";


export default function Products() {

    const { products } = useContext(ProductContext);
    const [word, setWord] = useState('');
    const [allProducts, setAllProducts] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const categoryId = searchParams.get("category");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    async function getSearchResults() {

        if (word == '') {
            setSearchProducts(allProducts);
            return;
        }

        const filtered = allProducts.filter((item) =>
            item.title.toLowerCase().includes(word.toLowerCase())
        );


        setSearchProducts(filtered);
    }

    useEffect(() => {

        async function fetchProducts() {
            try {
                setLoading(true)
                if (categoryId) {
                    const response = await getAllProducts({
                        category: categoryId
                    });

                    setSearchProducts(response.data);
                    setAllProducts(response.data)
                    setLoading(false)
                } else if (products) {
                    setSearchProducts(products);
                    setAllProducts(products);
                    setLoading(false)
                }
            } catch (error) {
                console.log(error);
                setLoading(false)

            }
        }

        fetchProducts();
    }, [products, categoryId]);


    return (
        <>
              <PageMetadata title='Products' description='Shop fresh produce, dairy, and groceries online with fast delivery to your door.' keywords='online grocery, fresh vegetables, dairy products, food delivery, online shopping' author='Fresh-Cart Team'></PageMetadata>
        
            {loading ? <ProductsSkeleton /> :

                <section className="bg-gradient-to-b from-primary-100/20 to-white py-12 min-h-screen">

                    {searchProducts.length > 0 ? (
                        <>


                            <div className="container mx-auto px-4 mb-8">

                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
                                        <p className="text-gray-500 text-sm">Discover our latest products</p>
                                    </div>


                                    <div className="relative w-full md:w-96">

                                        <input onChange={(e) => setWord(e.target.value)} type="text"
                                            className="w-full border border-gray-200 bg-white p-3 pl-4 pr-10 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition"
                                            placeholder="Search for products..." />

                                        <FontAwesomeIcon icon={faMagnifyingGlass}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-primary-600 transition"
                                            onClick={getSearchResults} />

                                    </div>

                                </div>
                            </div>


                            <div className="container mx-auto px-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                                    <ProductCard products={searchProducts} />

                                </div>
                            </div>

                        </>
                    ) : (


                        <div className="flex flex-col items-center justify-center text-center py-20">

                            <div className="bg-white shadow-md p-6 rounded-full mb-4">
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-3xl text-gray-400" />
                            </div>

                            <h2 className="text-xl font-semibold text-gray-700"> No Products Found</h2>
                            {(!loading&&word) ? <p className="text-gray-500 mt-2">Try searching with a different name</p> : ''}

                            <button

                                onClick={() => {
                                    if (allProducts.length == 0) { setSearchProducts(products); navigate("/products"); }
                                    else { setSearchProducts(allProducts); }
                                }}
                                className="mt-5 px-5 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">View All Products
                            </button>

                        </div>
                    )}

                </section >
            }
        </>
    );
}