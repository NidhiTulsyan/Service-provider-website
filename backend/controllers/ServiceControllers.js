import Provider from "../models/Provider.js";
import Service from "../models/Service.js";
import mongoose from "mongoose";

export const addService = async (req, res) => {
  const {
    name,
    category,
    providerId,
    price,
    description,
    // bookings = [],
  } = req.body;
  if (
    !name ||
    !category ||
    !providerId ||
    !price ||
    !description
    // !bookings
  ) {
    res.status(422).json({ message: "fields cannot be empty" });
  }
  if (!mongoose.Types.ObjectId.isValid(providerId)) {
    return res.status(400).json({ message: "Invalid providerId" });
  }

  let findExixtingService = await Service.findOne({
    name,
    providerId: new mongoose.Types.Schema.ObjectId(providerId),
  });
  if (findExixtingService) {
    res
      .status(400)
      .json({ message: "service already provided by this provider" });
  }

  let findProvider = Provider.findById(providerId);
  if (!findProvider) {
    res.status(404).json({ message: "provider not found" });
  }

  let service;
  try {
    service = new Service({
      name,
      category,
      providerId,
      price,
      description,
      //   bookings,
    });
    await service.save();
    await Provider.findByIdAndUpdate(providerId, {
      $push: { servicesOffered: service._id },
    });
    res
      .status(201)
      .json({ success: "true", message: "registered successfully", service });
  } catch (err) {
    res.status(500).json({ success: "false", message: "failed" });
  }
};
