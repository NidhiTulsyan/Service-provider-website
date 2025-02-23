import Service from "../models/Service.js";

export const addService = async (req, res) => {
  const {
    name,
    category,
    providerId = [],
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

  let findExixtingService = await Service.findOne({ name, providerId });
  if (findExixtingService) {
    res
      .status(400)
      .json({ message: "service already provided by this provider" });
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
    res
      .status(201)
      .json({ success: "true", message: "registered successfully", service });
  } catch (err) {
    res.status(500).json({ success: "false", message: "failed" });
  }
};
