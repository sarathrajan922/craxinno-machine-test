import { UserPersonalInfoInterface } from "../../../types/user";
import { UserDbInterface } from "../../repository/userDbRepository";
import AppError from "../../../utils/appError";
import { HttpStatus } from "../../../types/httpStatus";


export const userUseCase = async(
    userRepository:ReturnType<UserDbInterface>,
    userData:UserPersonalInfoInterface,
)=>{
    console.log(userData)
    const isUserExist = await userRepository.getUserById(userData.userId);
    if(!isUserExist){
        throw new AppError('user not found',HttpStatus.NOT_FOUND)
    }

    const userPersonalData = await userRepository.addUserPersonalInfo(userData)
    return{
        userPersonalData
    }
}