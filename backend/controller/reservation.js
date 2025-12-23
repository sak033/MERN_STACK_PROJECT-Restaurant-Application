import ErrorHandler  from "../error/error.js";
import {Reservation} from "../models/reservationSchema.js";


export const sendReservation=async(req,res,next)=>{
    const{firstName,lastName,email,phoneNumber,date,time}= req.body ||{};
    if(!firstName || !lastName || !email || !phoneNumber || !date || !time){
      return next(new ErrorHandler("Please fill full reservation form",400)); //400--bad request

    }
    try{
        await Reservation.create({firstName,lastName,email,phoneNumber,date,time});
        res.status(200).json({
            success:true,
            message:"Reservation sent successfully",
        });
    }catch(error){
        if(error.name==="ValidationError"){
            const validationErrors=Object.values(error.errors).map((item)=>item.message);
            return next(new ErrorHandler(validationErrors.json(", "),400));
    }
}
}