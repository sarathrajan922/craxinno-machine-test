import {Schema, model} from 'mongoose';

const userFinanceSchema = new Schema({
    currentEmployeeStatus:{
        type:String,
        required:[true,'please provide a currentEmployeeStatus field.'],
        enum : ['Employed', 'Unemployed', 'Self-employed', 'Student', 'Other'],
    },
    additionalSavingInvestment :{
        type: Number,
        required: [true,"please provide additionalSavingInvestment field."]
    },
    userId:{
        type:String,
        required: [true,"please provide a userId."]
    }
});

const FinancialInfo = model('FinancialInfo',userFinanceSchema,'financialInfo')
export default FinancialInfo;