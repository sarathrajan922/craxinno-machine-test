import mongoose from "mongoose";
mongoose.set('strictQuery',true)

const mongodbUrl = 'mongodb://localhost:27017'
const dbName = 'craxinno-test'

const connectDB =async () => {
 try{
    await mongoose.connect(mongodbUrl,{
        dbName: dbName
    })
    console.log(`Database connected`)
 }catch(error:any){
    console.log(error)
    process.exit(1)
 }
}

export default connectDB;