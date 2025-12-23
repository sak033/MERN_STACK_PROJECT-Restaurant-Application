//create schema about how data will store in mangodb database
import e from "express";
import mongoose from "mongoose";
import validator from "validator";

const reservationSchema=new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minlength:[3, " First Name must contain at least 3 characters!"],
        maxlength:[30, " First Name cannot exceed 30 characters!"],

    },
    lastName:{
        type: String,
        required: true,
        minlength:[3, " Last Name must contain at least 3 characters!"],
        maxlength:[30, " Last Name cannot exceed 30 characters!"],

    },
    email:{
        type: String,
        required: true,
        validate:[validator.isEmail, "Please enter a valid email address!"],
    },
    phoneNumber:{   
        type: String,
        required: true,
        minlength:[10, " Phone Number must contain only 10 characters!"],
        maxlength:[10, " Phone Number must contain only 10 characters!"],
    },
    time:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    }

});

export const Reservation=mongoose.model("Reservation",reservationSchema);