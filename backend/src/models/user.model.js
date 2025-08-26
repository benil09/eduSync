import mongoose from "mongoose";

const schema = mongoose.Schema;

const userSchema = new schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username:{
    type:String,
    required:true,
    unique:true
  },
  firstName: {
    type: String,
    required: true,
  },
  branch:{
    type:String,
    required:true
  },
  year:{
    type:String,
    required:true
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type:String,
    enum:["student","faculty"],
    default:"student",

  },
  clerkID:{
    type:String,
    required:true,
    unique:true
  }
});

const User = mongoose.model("User", userSchema);

export default User;
