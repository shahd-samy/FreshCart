import { createContext, useContext, useEffect, useState } from "react";
import { getUserOrders } from "../../services/orders-service";
import { AuthContext } from "./Auth.context";



export const OrderContext = createContext(null);

export default function OrderProvider({ children }) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [orders, setOrders] = useState([])
    const userInfo = JSON.parse(localStorage.getItem('userinfo'))
  const token=localStorage.getItem('token')||sessionStorage.getItem('token');


    async function HandlegettingUserOrders(userId) {
        try {
            const response = await getUserOrders(userId);
            if (response.success) {
                // console.log(response, 'ordercontext')
                setOrders(response.data)
                setLoading(false)

            }

        } catch (error) {
            // console.log(error, 'order context')
            setError(error)
            setLoading(false)

        }
    }


    useEffect(() => {
        HandlegettingUserOrders(userInfo?.id)
    }, [token])



    return <OrderContext.Provider value={{ orders, loading }}>
        {children}
    </OrderContext.Provider>
}
