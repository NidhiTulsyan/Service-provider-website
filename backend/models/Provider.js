import { Schema, model } from "mongoose";

const providerSchema = new Schema(
  {
    businessName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      minLength:10
    },
    servicesOffered: [
      {
        type: Schema.Types.ObjectId,
        ref: "Service",
      },
    ], // References Service collection
    experience: {
      type: Number,
      required: true,
    },
    ratings: [
      {
        userId: { type: Schema.Types.ObjectId, ref: "User" }, // Customer who rated
        rating: { type: Number, min: 1, max: 5 },
      },
    ],
    // averageRating: {
    //   type: Number,
    //   default: 0,
    // },
    location: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

export default model("Provider", providerSchema);
