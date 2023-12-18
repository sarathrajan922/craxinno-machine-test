import { AuthServiceReturn } from "../../frameworks/service/authService";
import { PayloadInterface } from "../../types/common";


export const authServiceInterface = (service: AuthServiceReturn)=>{
    const hashPassword = (password: string) => service.hashPassword(password);
    const comparePassword = (password:string, hashedPassword:string)=>service.comparePassword(password,hashedPassword);
    const verifyToken = (token:string)=> service.verifyToken(token);
    const generateToken = (payload:PayloadInterface)=> service.generateToken(payload);

    return {
        hashPassword,
        comparePassword,
        verifyToken,
        generateToken
    }
}

export type AuthServiceInterface = typeof authServiceInterface;