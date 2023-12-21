import {AxiosRequestConfig} from "axios";
import BASE_URL,{urls} from "@/config";
import userSetupAxiosInterceptors from "../../interceptors/userInterceptor";


const api = userSetupAxiosInterceptors();

export const userPersonalInfoUpload = async(values:any)=>{
    try{
        const config:AxiosRequestConfig = {
            url:BASE_URL+urls.USER_PERSONAL_INFO_SUBMIT,
            method:"post",
            data:values
        }
        const response = await api(config)
        return response?.data
    }catch(error: any){
        if(error.message === 'Request failed with status code 404'){
         throw new Error('user not exists !!!');
        }else{
          throw new Error('something went wrong!,try again')
        }
      }
}

