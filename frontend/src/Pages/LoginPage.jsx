import {Link} from "react-router-dom";
import React from 'react'
const LoginPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2  flex items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login to edu<span className="text-orange-500">Connect</span>
          </h2>
          <form className="space-y-4">
            <input
              type="mail"
              placeholder="Enter Email or Username"
              className="w-full px-4 py-3 bg-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-gray-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 rounded-full text-white  font-semibold hover:bg-orange-600 transition duration-200 cursor-pointer"
            >
              Login
            </button>
          </form>

          <div className="flex justify-between text-sm text-gray-600">
            <Link to="/signup" className="text-[12px] md:text-sm hover:underline">
              Forgot Password?
            </Link>
            <Link to="/signup" className="text-[12px] md:text-sm hover:underline">
              Don’t have an account?{" "}
              <span className="text-orange-500">Signup</span>
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <div className="border-t border-gray-300 w-1/3"></div>
            <span className="px-2 text-gray-500 text-sm">OR</span>
            <div className="border-t border-gray-300 w-1/3"></div>
          </div>

          <button className="w-full flex   bg-gray-200 items-center justify-center gap-2 py-3  rounded-full hover:bg-gray-100 hover:border-black transition cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Login using Google
          </button>
        </div>
      </div>

      {/* Right Section (Hidden on small devices) */}
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/loginpage.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h2 className="text-lg md:text-xl">welcome to</h2>
            <h1 className="text-3xl md:text-4xl font-bold">
              edu<span className="text-orange-500">Connect</span>
            </h1>
            <p className="mt-2 text-sm md:text-base">
              Learn Together ,{" "}
              <span className="font-semibold">Succeed Together</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
