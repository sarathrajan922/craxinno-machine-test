import {AxiosRequestConfig} from "axios";
import BASE_URL,{urls} from "@/config";
import userSetupAxiosInterceptors from "../../interceptors/userInterceptor";
const api = userSetupAxiosInterceptors();

export const fetchUserData = async()=>{
    try{    
        const config:AxiosRequestConfig = {
            url:BASE_URL+urls.FETCH_USER_DATA,
            method: 'get'
        }
        const response = await api(config);
        return response?.data

    }catch(err:any){
        if(err.message === 'Request failed with status code 404'){
            throw new Error('user not exists !!!');
           }else{
             throw new Error('something went wrong!,try again')
           }
    }
}