import {Schema, model} from 'mongoose';

const personalInfoSchema = new Schema({
    gender:{
        type: String,
        required:[true, "please specify a gender."]
    },
    fullName:{
        type:String,
        required:[true,"please provide a fullName."]
    },
    currentAddress:{
        type:String,
        required: [true,'please provide a valid current Address']
    },
    durationAtAddress :{
        type:String,
        required:[true,'please provide a valid duration at Address field']
    },
    aboutYourSelf: {
        type:String,
        required:[true,"please provide a aboutYourSelf field"]
    },
    userId:{
        type:String,
        required:[true,"please provide a userId."]
    }
})

const PersonalInfo = model('PersonalInfo',personalInfoSchema,"personalInfo")
export default PersonalInfo