import { apiclient } from "./api-client"

export async function getAllProducts({ limit, sort, fields, priceGreaterThan, page, keyword, brand, priceLessThan, category } = {}) {
    try {
        const options = {
            url: `/products?${limit ? `limit=${limit}` : ''}${sort ? `&sort=${sort}` : ''}${fields ? `&fields=${fields}` : ''}${priceGreaterThan ? `&price[gte]=${priceGreaterThan}` : ''}${page ? `&page=${page}` : ''}${keyword ? `&keyword=${keyword}` : ''}${brand ? `&brand=${brand}` : ''}${priceLessThan ? `&price[lte]=${priceLessThan}` : ''}${category ? `&category[in]=${category}` : ''}`,
            method: 'GET'
        }

        const { data } = await apiclient.request(options)
        return data
    } catch (error) {
        throw error

    }

}




export async function getSpecificProduct(id) {
    try {
        const options = {
            method: 'GET',
            url: `products/${id}`
        }
        const { data } = await apiclient.request(options);
        console.log(data)
        return data;
    } catch (error) {
        throw error

    }

}