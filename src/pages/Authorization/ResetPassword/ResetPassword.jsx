import { useState } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="h-[70vh] flex pt-20 items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700 text-white">
      <div className="w-full max-w-md p-8 space-y-8 bg-black rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Reset Password</h2>
          <p className="mt-2 text-sm text-gray-400">Set your new password.</p>
        </div>
        <form className="space-y-6" onSubmit={submitHandler}>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              name="email"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
