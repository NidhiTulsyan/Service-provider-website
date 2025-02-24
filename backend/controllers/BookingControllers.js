import moment from "moment/moment.js";
import Booking from "../models/Booking.js";
import User from "../models/User.js";
import Service from "../models/Service.js";


export const addBooking = async (req, res) => {
  const { userId, serviceId, providerId, date } = req.body;
  console.log(userId, serviceId, providerId, date);

  let dates = moment(date, "DD-MM-YYYY").toISOString();
  const generateOtp = () =>
    Math.floor(100000 + Math.random() * 900000).toString();
  try {
    // Check if the same booking already exists
    const existingBooking = await Booking.findOne({
      userId,
      serviceId,
      providerId,
      date: dates,
    });

    if (existingBooking) {
      return res
        .status(400)
        .json({ success: false, message: "This booking already exists." });
    }

    let service = await Service.findById(serviceId).populate("providerId");
    if (!service) {
      return res.status(404).json({ message: "service not found" });
    }
    const otp = generateOtp();
    // Create new booking
    const booking = new Booking({
      userId,
      serviceId,
      providerId: service.providerId._id,
      date: dates,
      status: "pending",
      price: service.price,
      otp,
    });

    await booking.save();
    console.log(`OTP for booking confirmation: ${otp}`);

    await Service.findByIdAndUpdate(serviceId, {
      $push: { bookings: booking._id },
    });

    await User.findByIdAndUpdate(userId, {
      $push: { bookings: booking._id },
    });

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};

export const completeBooking = async (req, res) => {
  const { bookingId } = req.params;
  const { otp } = req.body;

  try {
    
    console.log("in try",bookingId);
    let booking = await Booking.findById(bookingId);
    if (!booking) {
      res.status(404).json({ message: "booking not found" });
    }

    if (booking.status == "completed") {
      res.status(400).json({ message: "booking already completed" });
    }

    if (booking.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }
    booking.status = "completed";
    await booking.save();
    res
      .status(200)
      .json({ message: "Booking completed successfully", booking });
  } catch (err) {
    res.status(500).json({ message: "error occurred", err });
  }
};
