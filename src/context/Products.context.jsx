import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../../services/product-service";

export const ProductContext = createContext(null);

// console.log(ProductContext)

export default function ProductProvider({ children }) {

    const [loading, setLoading] = useState(true);
      const [products, setProducts] = useState(null);
       const [error, setError] = useState('');

    
        async function fetchProducts() {
            try {
                const data = await getAllProducts();
                setProducts(data.data)
                setLoading(false)
            } catch (error) {
                // console.log(error.message)
                setLoading(false)
                setError(error.message)
    
            }
    
        }
        useEffect(() => {
            fetchProducts()
        }, [])
    

    return <ProductContext.Provider value={{products,setLoading,loading,error}}>
        {children}
    </ProductContext.Provider>


}