import User from "../model/userModel";
import { UserRegisterInterface, UserPersonalInfoInterface, UserFinancialInfoInterface } from "../../../../types/user";
import PersonalInfo from "../model/personalInfo";
import FinancialInfo from "../model/financialInfo";

export const userRepositoryMongoDB = ()=>{
    const addUser = async (user: UserRegisterInterface)=>{
        return await User.create(user)
    }

    const getUserEmail = async (email: string)=>{
        return User.findOne({email});
    }

    const getUserById = async(userId:string)=>{
        return User.findOne({_id:userId})
    }

    const addPersonalInfo = async(data:UserPersonalInfoInterface)=>{
        return PersonalInfo.create(data)
    }

    const addFinancialInfo = async(data:UserFinancialInfoInterface)=>{
        return FinancialInfo.create(data)
    }

    

    return {
        addUser,
        getUserEmail,
        getUserById,
        addPersonalInfo,
        
    }
}

export type UserRepositoryMongoDB = typeof userRepositoryMongoDB;