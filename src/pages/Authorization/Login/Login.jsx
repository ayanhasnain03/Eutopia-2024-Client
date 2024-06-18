import { useState } from "react";

import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="pt-16  h-[100vh] bg-gradient-to-r from-slate-900 to-slate-700 ">
      <div className="flex mt-[8rem] bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="hidden lg:block lg:w-1/2 bg-cover">
          <img
            src="https://images.pexels.com/photos/1436190/pexels-photo-1436190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Login Image"
            className="object-cover w-full h-[29rem]"
          />
        </div>
        <div className="w-full p-8 lg:w-1/2 mt-10">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            Ethupia
          </h2>
          <p className="text-xl text-gray-600 text-center">Welcome back!</p>

          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="email"
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <Link to={"/forgot-password"}>Forgot Password?</Link>
            </div>
            <input
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="gray"
              id="togglePassword"
              className={`bi bi-eye${
                showPassword ? "" : "-slash-fill"
              } absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100`}
              viewBox="0 0 16 16"
              onClick={togglePasswordVisibility}
            ></svg>
          </div>
          <div className="mt-8 ml-[6.5rem]">
            <button class="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-14 w-40 rounded-md bg-neutral-800 p-2  font-extrabold hover:bg-sky-700">
              <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
              <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
              <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
              <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
              <p class="z-10 absolute bottom-2 left-2">Login</p>
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4" />
            <Link
              to={"/register"}
              className="text-xs text-gray-500 uppercase underline"
            >
              New to Ethupia?
            </Link>
            <span className="border-b w-1/5 md:w-1/4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
