import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  try {
    const { firstName, lastName, email, phoneNumber, date, time } = req.body || {};

    // validation
    if (!firstName || !lastName || !email || !phoneNumber || !date || !time) {
      return next(new ErrorHandler("Please fill full reservation form", 400));
    }

    // ✅ STORE created document
    const reservation = await Reservation.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      date,
      time,
    });

    console.log("SAVED RESERVATION:", reservation._id);

    // ✅ ALWAYS return response
    return res.status(201).json({
      success: true,
      message: "Reservation sent successfully",
    });

  } catch (error) {
    console.error("RESERVATION ERROR:", error);
    return next(error);
  }
};
