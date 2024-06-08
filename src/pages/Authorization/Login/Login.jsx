import { useState } from 'react';
import LoginVideo from "../../../assets/videos/login.mp4";

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

  const handleRegister = () => {
    // Handle registration action here
    console.log("Registration clicked");
  };

  return (
    <section className="bg-slate-700 min-h-screen flex box-border justify-center items-center">
      <div className="bg-zinc-800/80 rounded-2xl flex max-w-3xl p-5 items-center md:mt-20">
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-3xl font-dank text-white">Login</h2>
          <p className="text-sm mt-4 font-medium text-white">If you already a member, easily log in now.</p>
          <form onSubmit={submitHandler} className="flex flex-col gap-4">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 mt-8 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
            />
            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-2 rounded-xl border w-full"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="gray"
                id="togglePassword"
                className={`bi bi-eye${showPassword ? '' : '-slash-fill'} absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer z-20 opacity-100`}
                viewBox="0 0 16 16"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                ) : (
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                )}
              </svg>
            </div>
            <button className="bg-blue-600 text-white py-2 rounded-xl hover:scale-105 duration-300 hover:hover:bg-blue-700 font-medium" type="submit">Login</button>
          </form>
          <div className="mt-4 text-sm flex justify-between items-center container-mr flex-col gap-3">
            <p className="mr-3 md:mr-0 text-white">If you don't have an account..</p>
            <button onClick={handleRegister} className="hover:border register text-white bg-blue-600 hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-[#002c7424] font-semibold duration-300" type="button">Register</button>
          </div>
        </div>
        <div className="md:block hidden w-1/2">
          <video src={LoginVideo} muted autoPlay loop className="h-[70vh]"></video>
        </div>
      </div>
    </section>
  );
};

export default Login;
