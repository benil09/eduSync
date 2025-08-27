import { Link } from "react-router-dom";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-theme">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-center text-theme-1">
            Login to edu<span className="text-primary">Connect</span>
          </h2>
          <form className="space-y-4">
            <input
              type="mail"
              placeholder="Enter Email or Username"
              className="w-full px-4 py-3 bg-secondary rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 bg-secondary rounded-xl focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              type="submit"
              className="w-full py-3 bg-primary rounded-full text-accent font-semibold hover:bg-hover transition duration-200 cursor-pointer"
            >
              Login
            </button>
          </form>

          <div className="flex justify-between text-sm text-theme-2">
            <Link to="/signup" className="text-[12px] md:text-sm hover:underline">
              Forgot Password?
            </Link>
            <Link to="/signup" className="text-[12px] md:text-sm hover:underline">
              Don’t have an account?{" "}
              <span className="text-primary">Signup</span>
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <div className="border-t border-accent w-1/3"></div>
            <span className="px-2 text-theme-2 text-sm">OR</span>
            <div className="border-t border-accent w-1/3"></div>
          </div>

          <button className="w-full flex bg-secondary items-center justify-center gap-2 py-3 rounded-full hover:bg-accent transition cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-theme-1">Login using Google</span>
          </button>
        </div>
      </div>

      {/* Right Section (Hidden on small devices) */}
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/loginpage.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-accent px-6">
            <h2 className="text-lg md:text-xl">welcome to</h2>
            <h1 className="text-3xl md:text-4xl font-bold">
              edu<span className="text-primary">Connect</span>
            </h1>
            <p className="mt-2 text-sm md:text-base text-accent">
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