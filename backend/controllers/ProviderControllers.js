import bcrypt from "bcryptjs";
import Provider from "../models/Provider.js";

export const register = async (req, res) => {
  const {
    businessName,
    email,
    password,
    phone,
    experience,
    location,
    status="pending",
  } = req.body;
  if (
    !businessName ||
    !email ||
    !phone ||
    !password ||
    !experience ||
    !location 
  ) {
    res.status(422).json({ message: "fileds cannot be empty" });
  }

  let findProvider =await Provider.findOne({ email });
  if (findProvider) {
    res.status(400).json({ message: "Provider already exists" });
  }
  let provider;
  try {
    provider = new Provider({
      businessName,
      email,
      password,
      phone,
      experience,
      location,
      status,
    });
    await provider.save();
    res
      .status(201)
      .json({ success: "true", message: "registered successfull" ,provider});
  } catch (error) {
    console.log(error);
    res.status(400).json({ success:"false", message: "something went wrong" });
  }
  
};
