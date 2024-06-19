import toast from "react-hot-toast";
import { useLogoutMutation } from "../../../redux/api/userApi";
import { useDispatch } from "react-redux";
import { userNotExists } from "../../../redux/reducer/authReducer";

const Profile = ({ user }) => {
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutMutation();
  const logoutUserHandler = async () => {
    const res = await logoutUser();
    toast.success(res?.data?.message);
    localStorage.removeItem("user");
    dispatch(userNotExists());
  };
  return (
    <div className=" bg-gradient-to-r from-slate-900 to-slate-700 pt-20 px-10">
      <h1 className="text-3xl font-bold ml-[20%] mt-2 underline text-white">
        Profile
      </h1>
      <div className="  flex flex-col items-center justify-center text-center gap-10 py-10">
        <div className="flex items-center gap-10 flex-col">
          <div className="">
            <img
              src={user?.avatar?.url}
              alt=""
              className="w-40 rounded-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-white  text-3xl ">
              username: {user?.userName}
            </h1>
          </div>
          <div>
            <h1 className="text-white  text-2xl ">email: {user?.email}</h1>
          </div>
          <div>
            <h1 className="text-white  text-2xl ">Ph: 123456789110</h1>
          </div>
        </div>
        <div className="">
          <button
            className="bg-red-500 px-5 py-1 rounded-md text-white mt-1"
            onClick={logoutUserHandler}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Profile;
