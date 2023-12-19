import { UserRepositoryMongoDB } from "../../frameworks/database/mongodb/repositories/userRepoMongo";
import { UserRegisterInterface,UserPersonalInfoInterface, UserFinancialInfoInterface } from "../../types/user";


export const userDbRepository = (repository:ReturnType<UserRepositoryMongoDB>)=>{
    const addUser = async (user:UserRegisterInterface)=> await repository.addUser(user)
    const getUserEmail = async(email: string)=> await repository.getUserEmail(email)
    const getUserById = async(userId:string)=> await repository.getUserById(userId)
    const addUserPersonalInfo = async(data:UserPersonalInfoInterface)=> await repository.addPersonalInfo(data)
    const addUserFinancialInfo = async(data:UserFinancialInfoInterface)=> await repository.addFinancialInfo(data)

    return {
        addUser,
        getUserEmail,
        getUserById,
        addUserPersonalInfo,
        addUserFinancialInfo
    }
}

export type UserDbInterface = typeof userDbRepository;