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
    providerId,
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

export const rateService = async (req, res) => {
  const { serviceId } = req.params;
  const { userId, rating } = req.body;

  if (!userId || !rating || rating < 1 || rating > 5) {
    return res
      .status(400)
      .json({ message: "give userid and rating between 1to 5" });
  }
  try {
    let service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ message: "service not found" });
    }

    const existingRating = service.ratings.find(
      (r) => r.userId.toString() === userId
    );
    if (existingRating) {
      return res
        .status(400)
        .json({ message: "user has already rated that service" });
    }
    service.ratings.push({ userId, rating });

    const totalRatings = service.ratings.length;
    const sumRatings = service.ratings.reduce((sum, r) => sum + r.rating, 0);

    service.averageRating = sumRatings / totalRatings;

    await service.save();

    await updateProviderRating(service.providerId);
    return res
      .status(200)
      .json({ message: "rating submitted successfully", service });
  } catch (err) {
    return res.status(500).json({ message: "server error", err });
  }
};

const updateProviderRating = async (providerId) => {
  try {
    const services = await Service.find({ providerId });

    if (services.length === 0) return;

    let totalRatings = 0;
    let totalServicesWithRatings = 0;

    for (const service of services) {
      if (service.ratings.length > 0) {
        totalRatings += service.averageRating;
        totalServicesWithRatings++;
      }
    }

    const provider = await Provider.findById(providerId );
    if (!provider) return;

    provider.averageRating =
      totalServicesWithRatings > 0
        ? totalRatings / totalServicesWithRatings
        : 0;
    await provider.save();
  } catch (error) {
    console.error("Error updating provider rating:", error);
  }
};
