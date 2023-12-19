import express from 'express'
import userController from '../../../../adapters/controller/userController';
import { userDbRepository } from '../../../../application/repository/userDbRepository';
import { userRepositoryMongoDB } from '../../../database/mongodb/repositories/userRepoMongo';
import authenticationMiddleware from '../../middleware/authenticationMiddleware';
import { userRoleCheckMiddleware } from '../../middleware/roleCheck';

const userRoutes = ()=>{
    const router = express.Router();

    const controller = userController(
        userDbRepository,
        userRepositoryMongoDB
    );

    router.post('/personalInfo',authenticationMiddleware,userRoleCheckMiddleware,controller.addPersonalInfo);
    router.post('/financialInfo',authenticationMiddleware,userRoleCheckMiddleware,controller.addFinancialInfo)
    return router;
}

export default userRoutes;