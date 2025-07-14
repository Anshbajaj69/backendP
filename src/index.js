// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import ConnectDb from "./db/index.js";

dotenv.config({
    path:'./.env'
});


ConnectDb()











/*
import express from "express";
const app = express();
;(async()=>{
    try{
        await mongoose.connect(`${process.eventNames.MONGODB_URI}`)
        app.on("error",(error)=>{
            console.log("ERRR: ", error);
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }
    catch (error){
        console.error("ERROR: ",error)
        throw err
    }
})()
    */