import { apiclient } from "./api-client";


 export async function getAllCategories() {

        try {

            const options = {
                method: "GET",
                url: `/categories`
            }

            const data  = await apiclient.request(options);
             return(data)

        } catch (error) {
            throw error
        }



    }

    