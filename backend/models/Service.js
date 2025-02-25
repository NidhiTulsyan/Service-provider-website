import mongoose from "mongoose";


const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    //   unique:true
    },
    category: {
      type: String,
      required: true,
      enum: ["plumber", "mechanic", "electrician", "painter"],
    },
    providerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Provider",
      required: true,
    //   unique:true
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    bookings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
      },
    ],
    ratings: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      rating: { type: Number, min: 1, max: 5 },
    },
  ],
  averageRating: { type: Number, default: 0 },
  },
  
  {
    timestamps: true,
  }
);

const Service = mongoose.model("Service", serviceSchema);
export default Service;
