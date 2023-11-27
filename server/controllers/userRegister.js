const User = require("../models/user");
const userRegister = async (req, res) => {
  const { firstName, lastName, email, password, userType } = req.body;
  const user = new User({
    firstName,
    lastName,
    email,
    password,
    userType,
  });
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).send({
      message: "User Already Exists, ",
    });
  }
  try {
    const result = await user.save();
    res.status(201).send({
      message: "Registered Succesfully",
    });
  } catch (error) {
    console.log("Error Registering User -> ", error);
    res.status(500).json({
      message: "Something Went Wrong :(",
    });
  }
};
module.exports = userRegister;
