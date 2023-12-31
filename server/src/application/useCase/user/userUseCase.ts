import { UserFinancialInfoInterface, UserPersonalInfoInterface } from "../../../types/user";
import { UserDbInterface } from "../../repository/userDbRepository";
import AppError from "../../../utils/appError";
import { HttpStatus } from "../../../types/httpStatus";


export const userPersonalInfoUseCase = async(
    userRepository:ReturnType<UserDbInterface>,
    userPersonalData:UserPersonalInfoInterface,
)=>{
    console.log(userPersonalData)
    const isUserExist = await userRepository.getUserById(userPersonalData.userId);
    if(!isUserExist){
        throw new AppError('user not found',HttpStatus.NOT_FOUND)
    }

    const data = await userRepository.addUserPersonalInfo(userPersonalData)
    return{
        data
    }
}

export const userFinancialInfoUseCase =async(
    userRepository:ReturnType<UserDbInterface>,
    userFinancialData:UserFinancialInfoInterface,
)=>{
  
    const isUserExist = await userRepository.getUserById(userFinancialData.userId);
    if(!isUserExist){
        throw new AppError('user not found',HttpStatus.NOT_FOUND)
    }
    const data = await userRepository.addUserFinancialInfo(userFinancialData)
    return {
        data
    }
}

export const fetchAllUserDataUseCase = async(
    userRepository:ReturnType<UserDbInterface>,
    userId:string
)=>{
    const isUserExist = await userRepository.getUserById(userId);
    if(!isUserExist){
        throw new AppError('user not found',HttpStatus.NOT_FOUND)
    }

    const data = await userRepository.fetchAllUserData(userId)
    return {
        data
    }
}