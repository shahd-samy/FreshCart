import { apiclient } from "./api-client"

export async function createOrder(paymentMethod, cartId, shippingAddress) {

    try {

        const options = {
            method: 'POST',
            url: '',
            data: {
                shippingAddress,

            }
        }
        if (paymentMethod == 'cod') {
            options.url = `/orders/${cartId}`;
        }
        else if (paymentMethod == 'online') {
            options.url = `/orders/checkout-session/${cartId}?url=${location.origin}`
        }
        const response = await apiclient.request(options);
        console.log(response, ' order service')
        return response;

    } catch (error) {
        throw error
    }
}