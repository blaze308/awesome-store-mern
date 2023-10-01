const express = require("express");
const authRouter = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

authRouter.post("/api/signup", async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    const existingEmail = await User.findOne({ email });
    const existingUsername = await User.findOne({ username });
    const hashedPassword = await bcrypt.hash(password, 10);
    // const passwordRegex = /^(?=.*[0-9])(?=.*[^a-zA-Z0-9])(.{6,})$/;

    // if (!passwordRegex.test(password)) {
    //   return res
    //     .status(400)
    //     .json(
    //       "Password must contain a number, a special character, and be at least 6 characters long"
    //     );
    // }

    if (!password.match(/[0-9]/)) {
      return res.status(400).json("Password must contain at least one number");
    }

    if (!password.match(/[^a-zA-Z0-9]/)) {
      return res
        .status(400)
        .json("Password must contain at least one special character");
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json("Password must be at least 6 characters long");
    }

    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json("Please fill all reqired fields");
    }

    if (password !== confirmPassword) {
      return res.status(400).json("Passwords do not match");
    }

    if (existingEmail) {
      return res.status(400).json("credential already exists");
    }

    if (existingUsername) {
      return res.status(400).json("credential already exists");
    }

    let user = User({
      email,
      username,
      password: hashedPassword,
    });

    user = await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// authRouter.post("/api/login", async());

module.exports = authRouter;
