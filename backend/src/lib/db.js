import mongoose from "mongoose"
import {ENV} from"./env.js"
export const connectDb=async()=>{
  try{
    const conn=await mongoose.connect(ENV.DB_URL)
    console.log("Connected to database",conn.connection.host)
  }catch(error){
    console.log("Error connecting to mongoDB",error)
    process.exit(1)//0 ->success 1->failure

  }
}