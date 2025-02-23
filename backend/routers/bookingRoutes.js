import express from 'express';
import { addBooking } from '../controllers/BookingControllers.js';
const BookingRouter = express.Router();
BookingRouter.post("/addBooking",addBooking);

export default BookingRouter;
