import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="h-[70vh] flex pt-20 items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700 text-white">
      <div className="w-full max-w-md p-8 space-y-8 bg-black rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Forgot Password</h2>
          <p className="mt-2 text-sm text-gray-400">
            Enter your email address to reset your password.
          </p>
        </div>
        <form className="space-y-6" onSubmit={submitHandler}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="xyz@gmail.com"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              name="email"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L3.269 3.125A59.769 59.769 0 0121.485 12 59.768 59.768 0 013.27 20.875L5.999 12Zm0 0h7.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
