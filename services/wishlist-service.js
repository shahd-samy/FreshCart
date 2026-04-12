
import { apiclient } from './api-client';

export default async function AddToWishlist(productId) {
    try {

        const options = {
            method: 'POST',
            url: '/wishlist',
            data: {
                productId: productId
            }
        }

        const response = await apiclient.request(options);
        // console.log(response, 'add serv')

        return response

    } catch (error) {
        throw error
    }

}


export async function GetUserWishlist() {
    try {

        const options = {
            method: 'GET',
            url: '/wishlist',
        }

        const response = await apiclient.request(options);
        return response

    } catch (error) {
        throw error
    }

}


export async function RemoveWishlistItem(productId) {
    try {

        const options = {
            method: 'DELETE',
            url: `/wishlist/${productId}`,
        }

        const response = await apiclient.request(options);
        // console.log(response, 'rmmmve sercv')
        return response

    } catch (error) {
        throw error
    }

}



