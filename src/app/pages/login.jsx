// pages/login.js
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Login() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen  ">
      <div className="radial-gradient-bg lg:w-8/12 ">
        <div className="my-6  text-center mx-6 ">
          <Image
            src="/Images/dark-logo.svg"
            alt="logo"
            width={175}
            height={30}
          />
        </div>
        <div className="hidden lg:flex lg:flex-1 items-center justify-center mr-18 mt-20 ">
          <Image
            src="/Images/login-bg.svg"
            alt="background"
            width={500}
            height={500}
            layout="intrinsic"
          />
        </div>
      </div>

      {/* Right Side with the Form */}
      <div className="w-full lg:w-4/12  px-16 pt-16 bg-white items-center justify-center ">
        <h1 className="text-2xl font-semibold mb-2 mt-6 text-gray-700">
          Welcome to Modernize
        </h1>
        <p className="text-sm text-gray-600 mb-2 ">Your Admin Dashboard</p>

        {/* Login Form */}
        <form className="mt-6" action="#" method="POST">
          <div className="flex flex-row gap-2">
            {/* Google Sign-in */}
            <button
              type="button"
              className="flex px-6 py-2 space-x-2 text-md items-center whitespace-nowrap text-gray-600 justify-center   border border-gray-200 rounded-lg   hover:bg-transparent  hover:bg-gray-100 hover:text-custom-blue"
            >
              <Image
                src="/Images/google-icon.svg" // Make sure the path to your Google icon is correct
                alt="Google"
                width={16}
                height={16}
              />
              <span>Sign in with Google</span>
            </button>

            {/* Facebook Sign-in */}
            <button
              type="button"
              className="flex items-center  whitespace-nowrap  text-md text-gray-600 justify-center px-6 border border-gray-200 rounded-lg hover:bg-transparent  hover:bg-gray-100 hover:text-custom-blue"
            >
              <Image
                src="/Images/facebook-icon.svg" // Make sure the path to your Facebook icon is correct
                alt="Facebook"
                width={40}
                height={40}
              />
              <span>Sign in with FB</span>
            </button>
          </div>
          <div className="relative  my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-md">
              <span className="px-2 bg-white text-gray-600">
                or sign in with
              </span>
            </div>
          </div>

          <div className="flex flex-col  mt-8">
            {/* Username Input */}
            <label className="block  text-sm font-medium " htmlFor="username">
              Username
            </label>
            <input
              className="shadow-none  border rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-none focus:ring-2 focus:ring-blue-300  mt-2"
              type="text"
            />
            {/* Password Input */}
            <label
              className="block text-sm font-medium mt-8"
              htmlFor="username"
            >
              Password
            </label>
            <input
              className="border rounded-lg w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-none focus:ring-2 focus:ring-blue-300mt-2"
              type="password"
            />
          </div>

          <div className="flex items-center justify-between my-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600"
              />
              <span className="ml-2 text-sm text-gray-600">
                Remember this Device
              </span>
            </label>
            <Link
              href="/forgot-password"
              className="inline-block align-baseline  text-sm text-custom-blue "
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            className="w-full bg-custom-blue hover:bg-blue-500 text-white  py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>

          {/* Create Account Link */}
          <div className=" mt-8 ">
            <p className="text-md ">
              New to Modernize?
              <Link
                href="/register"
                className=" text-sm text-custom-blue  ml-2"
              >
                Create an account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
