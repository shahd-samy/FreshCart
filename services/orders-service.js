import { apiclient } from "./api-client";


 export async function getUserOrders(userId) {

        try {

            const options = {
                method: "GET",
                url: `/orders/user/${userId}`
            }

            const data  = await apiclient.request(options);
             console.log(data,'serv orders')
            return(data)

        } catch (error) {
            throw error
        }



    }

    