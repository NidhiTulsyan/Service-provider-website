import express from 'express';
import { addBooking, completeBooking } from '../controllers/BookingControllers.js';
const BookingRouter = express.Router();
BookingRouter.post("/addBooking",addBooking);
BookingRouter.post("/:bookingId/complete", completeBooking); 

export default BookingRouter;
