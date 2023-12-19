import axios,{AxiosRequestConfig} from "axios";
import BASE_URL,{urls} from "@/config";

const registerUser = async(values:any)=>{
    try{
        const config:AxiosRequestConfig={
            url:BASE_URL+urls.USER_REGISTER,
            method:'post',
            data: values
        }
        const response = await axios(config)
        return response?.data
    }catch(error: any){
        if(error.message === 'Request failed with status code 409'){
         throw new Error('Email already exists !!!');
        }else{
          throw new Error('Signup failed ,try again')
        }
      }
}

export default registerUser