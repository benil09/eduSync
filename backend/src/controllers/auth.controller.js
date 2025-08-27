import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import {redis} from "../config/redis.config.js";
import dotenv from "dotenv";

dotenv.config();



export const generateToken = (user) => {
  const refreshToken = jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
  const accessToken = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
  return { refreshToken, accessToken };
};

export const storeRefreshToken = async (userId, refreshToken) => {
  redis.set(`refreshToken:${userId}`, refreshToken, "EX", 60 * 60 * 24 * 7);
};

export const setCookie = (res,refreshToken, accessToken) => {
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7 * 1000,
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7 * 1000,
  });
};


// ✅ done
export const signup = async (req, res) => {
  try {
    const { email, username, firstName,role, lastName, password, year, branch } =
      req.body;
    if (
      !email ||
      !username ||
      !firstName ||
      !lastName ||
      !password ||
      !year ||
      !branch)
       {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existed = await User.findOne({ email });
    if (existed) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salted = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salted);

    const user = new User({
      username,
      email,
      firstName,
      lastName,
      role,
      year,
      branch,
      password: hashedPassword,
    });
    await user.save();

    //Authentication
    const { refreshToken, accessToken } = generateToken(user);
    await storeRefreshToken(user._id, refreshToken);
    setCookie(res, accessToken, refreshToken);

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        year: user.year,
        role,
        branch: user.branch,
      },
    });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async () => {
  console.log("login controller");
};

export const logout = async () => {
  console.log("logout controller");
};
