import { UserRepositoryMongoDB } from "./../../frameworks/database/mongodb/repositories/userRepoMongo";
import { UserDbInterface } from "./../../application/repository/userDbRepository";
import { AuthService } from "./../../frameworks/service/authService";
import { AuthServiceInterface } from "./../../application/services/authServiceInterface";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { UserRegisterInterface } from "../../types/user";
import { userRegisterUseCase } from "../../application/useCase/auth/auth";

const authController = (
  authServiceInterface: AuthServiceInterface,
  authService: AuthService,
  userDbRepositoryInterface: UserDbInterface,
  userDbRepositoryMongoDB: UserRepositoryMongoDB
) => {
  const dbRepositoryUser = userDbRepositoryInterface(userDbRepositoryMongoDB());
  const authServices = authServiceInterface(authService());

  const userRegister = asyncHandler(async (req: Request, res: Response) => {
    console.log("userRegister working...");
    const user: UserRegisterInterface = req.body;
    const { token, userData } = await userRegisterUseCase(
      user,
      dbRepositoryUser,
      authServices
    );
    res.json({
      status: "user registered successfully",
      token,
      userData,
    });
  });

  return {
    userRegister,
  };
};

export default authController;
