import { authService } from './../../frameworks/service/authService';
import { userDbRepository } from './../../application/repository/userDbRepository';
import { UserRepositoryMongoDB } from "../../frameworks/database/mongodb/repositories/userRepoMongo";
import { UserDbInterface } from "../../application/repository/userDbRepository";
import asyncHandler from 'express-async-handler';
import {Request,Response} from 'express';
import { CustomRequest } from '../../types/expressRequest';
import { UserPersonalInfoInterface } from "../../types/user";
import { AuthService } from "../../frameworks/service/authService";
import { AuthServiceInterface } from '../../application/services/authServiceInterface';
import { userUseCase } from '../../application/useCase/user/userUseCase';


const userController = (
    // authServiceInterface:AuthServiceInterface,
    // authService:AuthService,
    userDbRepositoryInterface: UserDbInterface,
    userDbRepositoryMongoDB:UserRepositoryMongoDB

)=>{
    const dbRepositoryUser = userDbRepositoryInterface(userDbRepositoryMongoDB())
    

    const addPersonalInfo = asyncHandler(async (req:CustomRequest,res:Response)=>{
        const userId = req.payload?.id ?? "";
        req.body.userId = userId;
        const userData:UserPersonalInfoInterface = req.body;
        const result = await userUseCase(
            dbRepositoryUser,
            userData
        )

        res.json({
            status: true,
            message: "user personal data uploaded successfully",
            result
        })
    })

    return{
        addPersonalInfo
    }
}

export default userController;