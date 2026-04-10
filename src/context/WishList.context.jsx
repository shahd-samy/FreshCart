import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import AddToWishlist, { GetUserWishlist, RemoveWishlistItem } from "../../services/wishlist-service";
import { AuthContext } from "./Auth.context";

export const WishListContext = createContext(null);

export default function WishListProvider({ children }) {

    const [wishlist, setWishList] = useState(null);
    const [loading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
const token=localStorage.getItem('token') || sessionStorage.getItem('token');


    async function HandleAddingToWishList(productId) {
        try {
            setIsLoading(true)
            const response = await AddToWishlist(productId);
            // console.log(response, 'add context')
            if (response.success) {
                setIsLoading(false)
                toast.success(response.data.message)
                HandleGetUserWishList()

            }

        } catch (error) {
            console.log(error, 'add context')
            setError(error)
            setIsLoading(false)

        }
    }





    async function HandleGetUserWishList() {
        try {
            setIsLoading(true)
            const response = await GetUserWishlist();
            // console.log(response, 'get context')
            if (response.success) {
                setWishList(response.data.data)
                // console.log('wishlost is', wishlist)
                setIsLoading(false)

            }

        } catch (error) {
            setIsLoading(false)

            console.log(error, 'get context')
        }
    }



    async function HandleRemoveWishListItem(productId) {
        try {
            setIsLoading(true)
            const response = await RemoveWishlistItem(productId);
            // console.log(response, 'remve contxt')
            if (response.success) {
                HandleGetUserWishList()
                setIsLoading(false)

            }

        } catch (error) {
            console.log(error, 'remve contxt')
        }
    }



    useEffect(() => {
        HandleGetUserWishList()
    }, [token])


    return <WishListContext.Provider value={{ loading, wishlist, HandleAddingToWishList, HandleGetUserWishList, HandleRemoveWishListItem }}>
        {children}
    </WishListContext.Provider>





}