import User from "../model/userModel";
import { UserRegisterInterface, UserPersonalInfoInterface, UserFinancialInfoInterface } from "../../../../types/user";
import PersonalInfo from "../model/personalInfo";
import FinancialInfo from "../model/financialInfo";
import { ObjectId } from "mongodb";

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

    const fetchAllUserData = async(userId:string)=>{
        const id = new ObjectId(userId)
        const data = User.aggregate([
            {
              $match: {
                "_id": id // Replace with the desired userId
              }
            },
            {
                $lookup: {
                  from: "personalInfo",
                  let: { userId: "$_id" },
                  pipeline: [
                    {
                      $match: {
                        $expr: {
                          $eq: [
                            { $toObjectId: "$userId" }, // Convert string to ObjectId
                            "$$userId"
                          ]
                        }
                      }
                    }
                  ],
                  as: "personalInfo"
                }
              },
            {
              $unwind: {
                path: "$personalInfo",
                preserveNullAndEmptyArrays: true
              }
            },
            {
                $lookup: {
                  from: "financialInfo",
                  let: { userId: "$_id" },
                  pipeline: [
                    {
                      $match: {
                        $expr: {
                          $eq: [
                            { $toObjectId: "$userId" }, // Convert string to ObjectId
                            "$$userId"
                          ]
                        }
                      }
                    }
                  ],
                  as: "financialInfo"
                }
              },
            {
              $unwind: {
                path: "$financialInfo",
                preserveNullAndEmptyArrays: true
              }
            },
            {
              $project: {
                _id: 1,
                email: 1,
                mobile: 1,
                personalInfo: {
                  gender: "$personalInfo.gender",
                  fullName: "$personalInfo.fullName",
                  currentAddress: "$personalInfo.currentAddress",
                  durationAtAddress: "$personalInfo.durationAtAddress",
                  aboutYourSelf: "$personalInfo.aboutYourSelf",
                  DOB:"$personalInfo.DOB"
                },
                financialInfo: {
                  currentEmployeeStatus: "$financialInfo.currentEmployeeStatus",
                  additionalSavingInvestment: "$financialInfo.additionalSavingInvestment"
                }
              }
            }
          ])

          return data
          
    }

    

    return {
        addUser,
        getUserEmail,
        getUserById,
        addPersonalInfo,
        addFinancialInfo,
        fetchAllUserData
        
    }
}

export type UserRepositoryMongoDB = typeof userRepositoryMongoDB;