import User from "../models/User.js";
import bcryptjs from "bcryptjs";

const salt = bcryptjs.genSaltSync(10);

export const Register = async (req, res) => {
  const { name, email, password, phone, address, profilePic } = req.body;
  if (!name || !email || !password || !phone || !address || !profilePic) {
    res.status(422).json({ message: "fields cannot be emplty" });
  }

  let findUser = await User.findOne({ email });
  if (findUser) {
    res.status(400).json({ message: "users already exists" });
    return;
  }

  let users;
  const hashedpass = bcryptjs.hashSync(password, salt);
  try {
    users = new User({
      name,
      email,
      password: hashedpass,
      phone,
      address,
      profilePic,
    });
    await users.save();
  } catch (err) {
    console.log(err);
  }

  const success = false;
  if (!users) {
    res.status(500).json({ success, message: "something went wrong" });
  }
  res
    .status(200)
    .json({ success: true, message: "data added successfully", users });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) {
    res.status(422).json({ message: "fileds cannot be empty" });
  }
  let user;
  try {
    user = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  const comparePass = bcryptjs.compareSync(password, user.password);

  if (!comparePass) {
    res.status(500).json({ success: "false", message: "invalid password" });
  } else {
    res
      .status(200)
      .json({ success: "true", message: "login successfull", user });
  }
};
