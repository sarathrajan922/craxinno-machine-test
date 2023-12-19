
import { UserRepositoryMongoDB } from "../../frameworks/database/mongodb/repositories/userRepoMongo";
import { UserDbInterface } from "../../application/repository/userDbRepository";
import asyncHandler from 'express-async-handler';
import {Response} from 'express';
import { CustomRequest } from '../../types/expressRequest';
import { UserFinancialInfoInterface, UserPersonalInfoInterface } from "../../types/user";

import { userFinancialInfoUseCase, userPersonalInfoUseCase } from '../../application/useCase/user/userUseCase';


const userController = (
  
    userDbRepositoryInterface: UserDbInterface,
    userDbRepositoryMongoDB:UserRepositoryMongoDB

)=>{
    const dbRepositoryUser = userDbRepositoryInterface(userDbRepositoryMongoDB())
    

    const addPersonalInfo = asyncHandler(async (req:CustomRequest,res:Response)=>{
        const userId = req.payload?.id ?? "";
        req.body.userId = userId;
        const userData:UserPersonalInfoInterface = req.body;
        const result = await userPersonalInfoUseCase(
            dbRepositoryUser,
            userData
        )

        res.json({
            status: true,
            message: "user personal data uploaded successfully",
            result
        })
    });

    const addFinancialInfo = asyncHandler(async(req:CustomRequest,res:Response)=>{
        const userId = req.payload?.id ?? '';
        req.body.userId = userId;
        const financialData :UserFinancialInfoInterface = req.body
        const result = await userFinancialInfoUseCase(
            dbRepositoryUser,
            financialData
        )
        res.json({
            status:true,
            message: "user financial data uploaded successfully",
            result
        })
        
    })

    return{
        addPersonalInfo,
        addFinancialInfo
    }
}

export default userController;