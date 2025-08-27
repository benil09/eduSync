import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { redis } from "../config/redis.config.js";
import User from "../models/user.model.js";

dotenv.config();

export const generateToken = (user) => {
  const refreshToken = jwt.sign(
    { id: user._id },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  );
  const accessToken = jwt.sign(
    { id: user._id },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "15m",
    }
  );
  return { refreshToken, accessToken };
};

export const storeRefreshToken = async (userId, refreshToken) => {
  redis.set(`refreshToken:${userId}`, refreshToken, "EX", 60 * 60 * 24 * 7);
};

export const setCookie = (res, refreshToken, accessToken) => {
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
    const {
      email,
      username,
      firstName,
      role,
      lastName,
      password,
      year,
      branch,
    } = req.body;
    if (
      !email ||
      !username ||
      !firstName ||
      !lastName ||
      !password ||
      !year ||
      !branch
    ) {
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
    setCookie(res, refreshToken, accessToken);

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

export const login = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }
    //ensures that atleast one identifier is given
    if (!email && !username) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Find user by email or username
    const user = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate tokens
    const { refreshToken, accessToken } = generateToken(user);
    await storeRefreshToken(user._id, refreshToken);
    setCookie(res, refreshToken, accessToken);

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        year: user.year,
        role: user.role,
        branch: user.branch,
      },
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = async (req,res) => {
    try {
      const refreshToken=req.cookies.refreshToken;
      if (refreshToken) {
      const decoded = jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET
      );
      await redis.del(`refreshToken:${decoded.id}`);
    }

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.json({ message: "Logged out successfully" });

    } catch (error) {
      console.log("Error in logout controller", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
};
