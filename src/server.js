import express from "express";
import apiRoute, { apiProtected } from "./routes/api.js";
import mongoose from "mongoose";
import { DB_CONNECT } from "./utils/constants.js";
import { AuthMiddleware } from "./middlewares/AuthMiddleware.js";
import  cors from 'cors';

// const PORT = process.env.PORT || 6000
const PORT = process.env.PORT || 4000
const app = express();

mongoose.connect(DB_CONNECT,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
app.use(cors())
app.use(express.json())
app.use('/api/',apiRoute);
app.use('/api/',AuthMiddleware,apiProtected);
app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`)
})

