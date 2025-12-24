import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import  dbConnection from "./database/dbconnection.js"; //to connect database
import { errorMiddleware } from "./error/error.js";
import reservationRoute from "./route/reservationRoute.js"; //importing reservation route
const app = express();
//dotenv.config({ path: './config/config.env' });
dotenv.config(); //configuring dotenv

//code to connect backent to frontend
app.use(cors({
    origin:"*", //path of frontend
    methods: ['GET','POST','PUT','DELETE'], //methods used in frontend & backend
    credentials: true,
}));



app.use(express.json());
app.use(express.urlencoded({ extended: true }));  

dbConnection(); //calling function to connect database
app.use("/api/v1/reservations", reservationRoute); //using reservation route

app.use(errorMiddleware);

export default app;
