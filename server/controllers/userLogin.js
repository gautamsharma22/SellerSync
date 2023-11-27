const User = require("../models/user");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    return res.status(401).json({
      message: "User Not found with this Email, ",
    });
  }
  const hashedPassword = existingUser.password;
  bcrypt.compare(password, hashedPassword, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({
        message: "Failed Validating Credentials",
        error: err,
      });
    }
    if (result) {
      const isVendor = existingUser.userType === "VENDOR";
      res.status(200).json({
        message: "Logged in succesfully",
        isVendor: isVendor,
        userID: existingUser._id,
      });
    } else {
      return res.status(401).json({
        message: "Credentials don't match, ",
      });
    }
  });
};
module.exports = userLogin;
