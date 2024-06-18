import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [imagePrev, setImagePrev] = useState("");
  const [image, setImage] = useState("");

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImagePrev(reader.result);
        setImage(file);
      };
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username, email, password, image);
  };
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 flex items-center justify-center ">
      <div className="mt-[6rem]">
        <div className="flex items-center text-white justify-center my-3">
          <div className="xl:mx-auto shadow-md p-4 xl:w-full xl:max-w-sm 2xl:max-w-md text-white rounded-lg">
            <div className="mb-2" />
            <div className="md:ml-[7rem] ml-[5rem]">
              {imagePrev ? (
                <img
                  src={imagePrev}
                  alt="profile"
                  className="w-24 h-24 rounded-full object-cover"
                />
              ) : (
                <img
                  src="./avatar.png"
                  alt="avatar"
                  className="w-20 h-20 rounded-full object-cover"
                />
              )}
            </div>
            <form className="mt-5" onSubmit={submitHandler}>
              <div className="space-y-4">
                <div>
                  <label className="text-base font-medium ">User Name</label>
                  <div className="mt-2">
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      placeholder="Full Name"
                      type="text"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm  placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      name="user_name"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium ">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm  placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      name="email"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium ">Password</label>
                  <div className="mt-2">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Password"
                      type="text"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm  placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      name="password"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="text-base font-medium ">
                    Profile Picture
                  </label>
                  <div className="mt-2">
                    <input
                      className="file-input w-full max-w-xs"
                      type="file"
                      name="avatar"
                      required
                      onChange={changeImageHandler}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <button class="bg-sky-950 text-sky-400 border border-sky-400 border-b-4 font-medium overflow-hidden relative w-full py-1.5 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span class="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Create
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
