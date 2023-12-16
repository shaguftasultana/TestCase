// pages/login.js
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Login() {
  return (
    <div className="flex min-h-screen radial-gradient-bg ">
      <div className="mt-6 text-center ml-6">
        <Image src="/Images/dark-logo.svg" alt="logo" width={175} height={30} />
      </div>
      <div className="hidden lg:flex lg:flex-1 items-center justify-center mr-52 mt-16">
        <Image
          src="/Images/login-bg.svg"
          alt="background"
          width={500}
          height={500}
          layout="intrinsic"
        />
      </div>
      {/* Right Side with the Form */}
      <div className="w-full lg:w-4/12 p-14 bg-white items-center justify-center">
        <h1 className="text-2xl font-semibold mb-2 mt-6 text-gray-700">
          Welcome to Modernize
        </h1>
        <p className="text-sm text-gray-600 mb-2 ">Your Admin Dashboard</p>

        {/* Login Form */}
        <form className="mt-8 " action="#" method="POST">
          <div className="flex flex-row gap-1">
            {/* Google Sign-in */}
            <button
              type="button"
              className="flex items-center text-gray-600 justify-center p-1 space-x-2 border border-gray-200 rounded shadow-sm hover:gray-200"
            >
              <Image
                src="/Images/google-icon.svg" // Make sure the path to your Google icon is correct
                alt="Google"
                width={20}
                height={20}
              />
              <span>Sign in with Google</span>
            </button>

            {/* Facebook Sign-in */}
            <button
              type="button"
              className="flex items-center  text-gray-600 justify-center p-2 space-x-2 border border-gray-200 rounded shadow-sm hover:shadow-md mt-2"
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
          <div className="relative  my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                or sign in with
              </span>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            {/* Username Input */}
            <label
              className="block text-gray-700 text-sm font-bold "
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow  border rounded w-full py-3 px-4 text-gray-700  focus:shadow-outline"
              type="text"
              placeholder="Username"
            />
            {/* Password Input */}
            <label
              className="block text-gray-700 text-sm font-bold "
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow  border rounded w-full py-3 px-4 text-gray-700   focus:shadow-outline"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center justify-between my-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-indigo-600"
              />
              <span className="ml-2 text-sm text-gray-700">
                Remember this Device
              </span>
            </label>
            <Link
              href="/forgot-password"
              className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>

          {/* Create Account Link */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              New to Modernize?{" "}
              <Link
                href="/register"
                className="text-blue-600 hover:text-blue-800"
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
