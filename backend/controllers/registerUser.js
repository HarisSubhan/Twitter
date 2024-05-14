const User = require("../model/userModel");
const AsyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = AsyncHandler(async (req, res) => {
  const { name, email, dob, password } = req.body;

  const checkUser = await User.findOne({ email });

  if (checkUser) {
    res.status(400);
    throw new Error("Email Already Exit");
  }

  if (!name || !email || !dob || !password) {
    res.status(400);
    throw new Error("Please Enter The relevant Fields!");
  } else {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(password, salt);

      const createdUser = await User.create({
        name,
        email,
        dob,
        password: hashedPass,
      });

      res.json({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        dob: createdUser.dob,
        password: createdUser.password,
        token: generateToken(createdUser._id),
      });
    } catch (error) {
      console.log(error);
    }
  }
});

const loginUser = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if ((!email, !password)) {
    res.status(400);
    throw new Error("Please Enter The Relevant Fields");
  }

  const findUser = await User.findOne({ email });

  if (!findUser) {
    res.status(404);
    throw new Error("PLeae Enter a valid Email");
  } else {
    const passwordMatch = await bcrypt.compare(password, findUser.password);
    if (!passwordMatch) {
      res.status(401);
      throw new Error("Invalid Password");
    } else {
      res.json({
        _id: findUser._id,
        name: findUser.name,
        email: findUser.email,
        dob: findUser.dob,
        password: findUser.password,
        token: generateToken(findUser._id),
      });
    }
  }
});

const findMyProfile = AsyncHandler(async (req, res) => {
  const user_id = req.params.id;

  const foundUser = await User.findOne({ _id: user_id });
  if (!foundUser) {
    res.status(404);
    throw new Error("User Not Founf");
  } else {
    res.send(foundUser);
  }
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECERT, { expiresIn: "1d" });
};

module.exports = {
  registerUser,
  loginUser,
  findMyProfile,
};
