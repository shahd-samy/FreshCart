import { createContext, useContext, useEffect, useState            // console.log(response,'add context')
 } from "react";
import AddToCart, { ClearCart, GetUserCart, RemoveCartItem, UpdateCartProductQuantity } from "../../services/cart-service";
import { toast } from "react-toastify";
import { AuthContext } from "./Auth.context";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {

    const [cart, setCart] = useState(null);
    const [loading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
const token=localStorage.getItem('token') || sessionStorage.getItem('token');

    async function HandleAddingToCart(productId) {
        try {
            setIsLoading(true)
            const response = await AddToCart(productId);
            if (response.success) {
                setIsLoading(false)
                toast.success(response.data.message)
                HandleGetUserCart()

            }

        } catch (error) {
            console.log(error,'add context')
            setError(error)
            setIsLoading(false)

        }
    }





    async function HandleGetUserCart() {
        try {
            setIsLoading(true)
            const response = await GetUserCart();
            //  console.log(response,'get context')
            if (response.success) {
                setCart(response.data.data)
                // console.log('cart is',cart)
                setIsLoading(false)

            }

        } catch (error) {
                            setIsLoading(false)

            console.log(error,'get context')
        }
    }



    async function HandleRemoveCartItem(productId) {
        try {
            setIsLoading(true)
            const response = await RemoveCartItem(productId);
            //  console.log(response,'remve contxt')
            if (response.success) {
                setCart(response.data.data)
                setIsLoading(false)

            }

        } catch (error) {
            console.log(error,'remve contxt')
        }
    }

    async function HandleUpdateCartProductQuantity(productId, count) {
        try {
            setIsLoading(true)
            console.log(productId,count)
            const response = await UpdateCartProductQuantity(productId, count);
            // console.log(response, 'update context')
            if (response.success) {
                setIsLoading(false)
                toast.success(response.data.message)
                setCart(response.data.data)

            }

        } catch (error) {
            console.log(error ,'update context')
            setIsLoading(false)

        }
    }




    async function HandleClearCart() {
        try {
            setIsLoading(true)
            const response = await ClearCart();
            // console.log(response,'clear context')
            if (response.success) {
                setCart(null);
                toast.success("Cart cleared");
                setIsLoading(false)

            }

        } catch (error) {
            console.log(error,'clear context')
        }
    }


    useEffect(() => {
        HandleGetUserCart()
    }, [token])


    return <CartContext.Provider value={{ cart,setCart, loading, error, HandleAddingToCart, HandleGetUserCart, HandleClearCart, HandleRemoveCartItem, HandleUpdateCartProductQuantity }}>
        {children}
    </CartContext.Provider>





}