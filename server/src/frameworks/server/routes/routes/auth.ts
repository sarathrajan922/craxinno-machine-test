import { userRepositoryMongoDB } from "./../../../database/mongodb/repositories/userRepoMongo";
import express from "express";
import authController from "../../../../adapters/controller/authController";
import { authServiceInterface } from "../../../../application/services/authServiceInterface";
import { authService } from "../../../service/authService";
import { userDbRepository } from "../../../../application/repository/userDbRepository";

const authRoutes = () => {
  const router = express.Router();

  const controller = authController(
    authServiceInterface,
    authService,
    userDbRepository,
    userRepositoryMongoDB
  );

  router.post("/signup", controller.userRegister);

  return router;
};

export default authRoutes;
