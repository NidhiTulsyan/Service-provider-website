import moment from "moment/moment.js";
import Booking from "../models/Booking.js";
import User from "../models/User.js";

export const addBooking = async (req, res) => {
    const { userId, serviceId, providerId, date, status } = req.body;
    console.log(userId, serviceId, providerId, date, status);
    
    let dates = moment(date, "DD-MM-YYYY").toISOString();
    try {
      // Check if the same booking already exists
      const existingBooking = await Booking.findOne({
        userId,
        serviceId,
        providerId,
        date:dates,
        
      });
  
      if (existingBooking) {
        return res.status(400).json({ success: false, message: "This booking already exists." });
      }
     
      // Create new booking
      const booking = new Booking({
        userId,
        serviceId,
        providerId,
        date:dates,
        status,
      });
  
      await booking.save();
      
      await User.findByIdAndUpdate(userId,{
          $push:{bookings:booking._id},
        })
        
        res.status(201).json({ success: true, message: "Booking created successfully", booking });
    } catch (error) {
      res.status(500).json({ success: false, message: "Something went wrong", error });
    }
  };
  