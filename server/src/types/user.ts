
export interface UserRegisterInterface {
    email: string;
    mobile:number;
    password:string;
}

export interface UserPersonalInfoInterface{
    gender: string;
    fullName: string;
    DOB:string;
    currentAddress:string;
    durationAtAddress:string;
    aboutYourSelf:string;
    userId:string;
}

export interface UserFinancialInfoInterface{
    currentEmployeeStatus : string;
    additionalSavingInvestment:number;
    userId:string;
}