import React from 'react'
import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";


const SignupPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2  flex items-center justify-center p-6 bg-gray-50"
      >
        <div className="w-full max-w-md space-y-6">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl font-bold text-center text-gray-800"
          >
            Signup to edu<span className="text-orange-500">Connect</span>
          </motion.h2>
          <form className="space-y-4">
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div className="flex items-center bg-gray-200 rounded-xl">
                <User className="ml-3 text-gray-500" size={20} />
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="flex-1 bg-transparent px-4 py-3 focus:outline-none focus:ring-0"
                />
              </div>
              <div className="flex items-center bg-gray-200 rounded-xl">
                <User className="ml-3 text-gray-500" size={20} />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="flex-1 bg-transparent px-4 py-3 focus:outline-none focus:ring-0"
                />
              </div>
            </div>
            <div className="flex items-center bg-gray-200 rounded-xl">
              <Mail className="ml-3 text-gray-500" size={20} />
              <input
                type="mail"
                placeholder="Email"
                required
                className="flex-1 bg-transparent px-4 py-3 focus:outline-none focus:ring-0"
              />
            </div>
            <div className="flex items-center bg-gray-200 rounded-xl">
              <Lock className="ml-3 text-gray-500" size={20} />
              <input
                type="password"
                placeholder="Password"
                required
                className="flex-1 bg-transparent px-4 py-3 focus:outline-none focus:ring-0"
              />
            </div>
            <div className="flex items-center bg-gray-200 rounded-xl">
              <Lock className="ml-3 text-gray-500" size={20} />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                className="flex-1 bg-transparent px-4 py-3 focus:outline-none focus:ring-0"
              />
            </div>
            <Link to="/signup2" >
              <motion.button
               whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 bg-orange-500 rounded-full text-white font-semibold hover:bg-orange-600 transition duration-200 cursor-pointer flex justify-center"
              >
                Next
              </motion.button>
            </Link>
          </form>

          <div className="flex justify-center text-sm text-gray-600">
            <Link to="/login" className="text-[12px] md:text-sm hover:underline">
              Already have an account?{" "}
              <span className="text-orange-500">Login</span>
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <div className="border-t border-gray-300 w-1/3"></div>
            <span className="px-2 text-gray-500 text-sm">OR</span>
            <div className="border-t border-gray-300 w-1/3"></div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 300 } }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex   bg-gray-200 items-center justify-center gap-2 py-3  rounded-full hover:bg-gray-100 hover:border-black transition cursor-pointer"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign-up using Google
          </motion.button>
        </div>
      </motion.div>

      {/* Right Section (Hidden on small devices) */}
       <div
        
        className="hidden md:flex w-1/2 relative bg-gradient-to-br from-primary via-theme to-secondary overflow-hidden"
      >
        {/* SVG Pattern Overlay */}
        <svg
          className="absolute inset-0 w-full h-full bg-opacity-20 pointer-events-none z-20"
          width="100%"
          height="100%"
          viewBox="0 0 600 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="150" cy="200" r="80" fill="white" fillOpacity="0.18" />
          <circle cx="500" cy="600" r="120" fill="white" fillOpacity="0.13" />
          <circle cx="450" cy="150" r="60" fill="white" fillOpacity="0.13" />
          <circle cx="200" cy="650" r="40" fill="white" fillOpacity="0.10" />
          <line
            x1="0"
            y1="400"
            x2="600"
            y2="400"
            stroke="white"
            strokeOpacity="0.07"
            strokeWidth="4"
          />
          <line
            x1="300"
            y1="0"
            x2="300"
            y2="800"
            stroke="white"
            strokeOpacity="0.07"
            strokeWidth="4"
          />
        </svg>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-10">
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
  )
}

export default SignupPage
