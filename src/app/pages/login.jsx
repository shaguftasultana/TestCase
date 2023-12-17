// pages/login.js
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen  ">
      <div className="radial-gradient-bg lg:w-8/12 ">
        <Link href="/logo">
          <Image
            className="mx-6 my-6"
            src="/Images/dark-logo.svg"
            alt="logo"
            width={175}
            height={30}
          />
        </Link>
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
      <div className="w-full lg:w-[41%] px-10 md:px-20 pt-8 bg-white items-center justify-center ">
        <h1 className="text-[22px] md:2xl font-semibold  mb-2 mt-6 text-gray-700">
          Welcome to Modernize
        </h1>
        <p className="text-sm text-gray-600 mb-2 ">Your Admin Dashboard</p>

        {/* Login Form */}
        <form className="mt-6" action="#" method="POST">
          <div className="flex flex-row gap-2 md:gap-2 ">
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
              <span className="hidden md:block">Sign in with Google</span>
              <span className="block md:hidden">Google</span>
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
              <span className="hidden md:block">Sign in with FB</span>
              <span className="block md:hidden">FB</span>
            </button>
          </div>
          <div className="relative  my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-md">
              <span className="px-5 bg-white text-gray-600">
                or sign in with
              </span>
            </div>
          </div>

          <div className="flex flex-col mt-8">
            {/* Username Input */}
            <label className="block text-[1rem] font-[600]" htmlFor="username">
              Username
            </label>
            <input
              className="shadow-none border rounded-lg w-full py-2 px-4 bg-transparent focus:outline-none focus:ring-1 focus:ring-custom-blue mt-2"
              type="text"
              id="username"
              name="username"
            />
            {/* Password Input */}
            <label
              className="block text-[1rem] font-[600] mt-8"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border rounded-lg w-full py-2 px-4 bg-transparent focus:outline-none focus:ring-1 focus:ring-custom-blue mt-2"
              type="password"
              id="password"
              name="password"
            />
          </div>

          <div className="flex items-center justify-between my-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-custom-blue h-4 w-4"
                defaultChecked // This ensures the checkbox is checked by default
              />
              <span className="ml-2 text-sm font-medium text-gray-600">
                Remember this Device
              </span>
            </label>
            <Link
              href="/forgot-password"
              className="inline-block align-baseline font-[500]  text-[0.875rem] text-custom-blue "
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            className="w-full bg-custom-blue hover:bg-blue-500 text-white text-[0.9375rem] font-[400] py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>

          {/* Create Account Link */}
          <div className=" mt-8 flex ">
            <p className="text-[1rem] font-[500]">
              New to Modernize?
              <Link
                href="/register"
                className="  text-custom-blue font-[500] text-[0.875rem] ml-2"
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
