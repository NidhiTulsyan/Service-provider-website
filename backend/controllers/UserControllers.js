import User from "../models/User.js";

export const Register = async (req, res) => {
  const { name, email, password } = req.body;
//   console.log(name, email, password);
  if (!name && !email && !password) {
    res.status(422).json({ message: "fields cannot be emplty" });
  }

  let findUser =await User.findOne({email});
  if(findUser){
    res.status(400).json({ message: "users already exists" });
    return;
  }

  let users;
  try {
    users = new User({
      name,
      email,
      password,
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
