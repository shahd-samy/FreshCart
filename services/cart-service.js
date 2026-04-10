
import { apiclient } from './api-client';

export default async function AddToCart(productId) {
    try {

        const options = {
            method: 'POST',
            url: '/cart',
            data: {
                productId: productId
            }
        }

        const response = await apiclient.request(options);
        console.log(response, 'add serv')

        return response

    } catch (error) {
        throw error
    }

}


export async function GetUserCart() {
    try {

        const options = {
            method: 'GET',
            url: '/cart',
        }

        const response = await apiclient.request(options);
        return response

    } catch (error) {
        throw error
    }

}


export async function RemoveCartItem(productId) {
    try {

        const options = {
            method: 'DELETE',
            url: `/cart/${productId}`,
        }

        const response = await apiclient.request(options);
        console.log(response, 'rmmmve sercv')
        return response

    } catch (error) {
        throw error
    }

}





export async function UpdateCartProductQuantity(productId, count) {
    try {

        const options = {
            method: 'PUT',
            url: `/cart/${productId}`,
            data: {
                count: count
            }
        }

        const response = await apiclient.request(options);
        console.log(response, 'update serv')
        return response

    } catch (error) {
        throw error
    }

}






export async function ClearCart() {
    try {

        const options = {
            method: 'DELETE',
            url: '/cart',
        }

        const response = await apiclient.request(options);
        console.log(response, 'clear serv')
        return response

    } catch (error) {
        throw error
    }

}