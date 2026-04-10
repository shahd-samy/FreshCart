// we made a file named anything like this file,to use it to alter in axios configuration 
// cuz we noiced that we always use same base url so we want make it default instead writng it every time

// we took copy from axios and altered in its configuration to suit our project
// so apiclient its litteraly axios but we altered on it
//so instead of axios.request >>apiclient.request and we dont need to write api base url we write end point only




// interceptors
//normally request go to server then servers respone w  
//(client)>send req to (server)     (server)>send response to (client)
//interceptors is a thing that stops or catches(someone or something) going from place to another
//it (client) send req> interceptors> req >(server)   
// (server) send response > interceptors> res (client)
//so req and response pass through interceptors and we can alter in req befor it reaches server
//and we can alter in response befor it reaches client
//like thers many apis need tokens we mke interceptorscheck that and add token to api call before it reaches server
//like if we want response in a specific form we made interceptors  alter the response from the server it reach clint


import axios from "axios";
import { API_CONFIG } from './../config/index';
import { getAllCategories } from "./categories.service";



export const apiclient = axios.create({
    baseURL: API_CONFIG.baseURL,
    timeout: 30000
})


apiclient.interceptors.request.use((config) => {
    // console.log(config);
    const token = localStorage.getItem('token') || sessionStorage.getItem('token')
    if (token) {
        config.headers.token = token
    }
    return config;
})





apiclient.interceptors.response.use((response) => {
    return Promise.resolve({
        success: true,
        data: response.data
    })
}, (error) => {
    return Promise.reject({
        success: false,
        error: error,
        message: error.response.data.message
    })
})



