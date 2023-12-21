"use client";

import React,{useEffect, useState} from "react";
import { fetchUserData } from "@/features/axios/api/user/userData";
import { useDispatch } from "react-redux";
import { setUser } from "@/features/redux/slices/userSlice";

const ProfileComponent = () => {
    const [userData ,setUserData] = useState<null | any>()
    const [isLoad,setIsload] = useState(false)
    const dispatch = useDispatch()
    
 
    useEffect(()=>{
       fetchUserData().then((response)=>{
        console.log(response.userData[0])
        setUserData(response.userData[0])
        dispatch(setUser(response?.userData[0]))
        setIsload(true)
       }).catch((err)=>{
        err.message
       })
    },[])

    
  return (
    <div className="text-black flex mt-20 shadow-2xl p-5 flex-col gap-5 w-96">
     
{
    isLoad && isLoad ? <><div className="relative w-full min-w-[420px]    p-3 flex gap-5 ">
                  <div className="relative  w-80  min-w-[100px]">
                      <h1 className="text-3xl uppercase text-bold">{userData.personalInfo.fullName}</h1>
                      <p className="text-gray-700">{userData.email}</p>
                  </div>
              </div><div className="relative w-full min-w-[420px]  pb-5  p-3 flex gap-2 ">
                      <div className="relative  w-80  min-w-[100px]">
                          <h1 className="text-3xl text-bold mb-3">Personal Infromation</h1>
                          <p className="text-lg text-gray-500">Gender:  <span className="text-gray-700">{userData.personalInfo.gender}</span></p>
                          <p className="text-lg text-gray-500">DOB:  <span className="text-gray-700">{userData.personalInfo.DOB}</span></p>

                          <p className="text-lg text-gray-500">Current Address:  <span className="text-gray-700">{userData.personalInfo.currentAddress}</span></p>
                          <p className="text-lg text-gray-500">Duration at Address:  <span className="text-gray-700">{userData.personalInfo.durationAtAddress}</span></p>
                          <p className="text-lg text-gray-500">About:  <span className="text-lime-500">{userData.personalInfo.aboutYourSelf}</span></p>
                      </div>
                  </div><div className="relative w-full min-w-[420px]  pb-5  p-3 flex gap-2 ">
                      <div className="relative w-80  min-w-[100px]">
                          <h1 className="text-3xl text-bold mb-3">Financial Infromation</h1>
                          <p className="text-lg text-gray-500">Employeement Status:  <span className="text-gray-700">{userData.financialInfo.currentEmployeeStatus}</span></p>
                          <p className="text-lg text-gray-500">Additonal saving/investment: <span className="text-gray-700">{userData.financialInfo.additionalSavingInvestment}</span></p>
                      </div>
                  </div></> : 'Loading...'

}
      
    </div>
  );
};

export default ProfileComponent;
