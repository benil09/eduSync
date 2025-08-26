import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  
}

export const refreshToken = async (req,res)=>{

}

export const setCookie = (res, token) => {

}


export const signup = async (req, res) => {
  try {
    const { email, username, firstName, lastName, password, year, branch } =
      req.body;
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
      password: hashedPassword,
    });
    await user.save();

    res.status(201).json({ message: "User created successfully" });
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
