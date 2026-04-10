import axios from "axios";
import { apiclient } from './api-client';

export async function sendDataToSignUp(values) {
    try {

      const options = {
        method: "POST",
        url: `/auth/signup`,
        data: {
          name: values.name,
          email: values.email,
          password: values.password,
          rePassword: values.rePassword,
          phone: values.phone,
        }
      }
      const response = await apiclient.request(options);
       return response;
    } catch (error) {
      throw error
    }
}



export async function sendDataToLogin(values){

 try {
      const options = {
        method: "POST",
        url: `/auth/signin`,
        data: {
          email: values.email,
          password: values.password
        }
      }
      const response = await apiclient.request(options);
      return response
    } catch (err) {
      throw err
    }
}


export async function verifyToken() {
  try {
    const options={
      method:'GET',
      url:`/auth/verifyToken`
    }
     const response = await apiclient.request(options);
     console.log(response)
      return response
  } catch (error) {
          throw error

  }
  
}