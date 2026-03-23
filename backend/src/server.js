import express from"express";
import {ENV} from "./lib/env.js";
import path from "path";
import { connect } from "http2";
import { connectDb } from "./lib/db.js";

const app=express();
const __dirname=path.resolve();


app.get("/health",(req,res)=>{
  res.status(200).json({msg:"api is up and running"})
})
app.get("/books",(req,res)=>{
  res.status(200).json({msg:"books endpoint"})
})

// make app ready for deployement
if(ENV.NODE_ENV=="production"){
  app.use(express.static(path.join(__dirname,"../frontend/dist")))
  app.use("/{*any}",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
  })
}
const startServer= async() =>{
  try{
    await connectDb();
    app.listen(ENV.PORT,()=>{
      console.log("Server is running on port :",ENV.PORT)
    });
  }
  catch(error){
    console.error("Error starting the server")
  }
}
startServer();