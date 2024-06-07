import { useState } from "react";
import { FaHeart, FaShoppingBag, FaUserAlt } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import Hamburger from "hamburger-react";
import { BiSupport } from "react-icons/bi";
import logo from "../../../assets/eduthopia.png";
function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const user = {
    _id: 42342342,
    role: "user",
  };

  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-2 z-[100] bg-white/30">
      <div className="leading-none flex gap-2 items-center justify-center">
        <div>
        <img src={logo} alt="ewe" className="w-10" />

        </div>
        <div>
          <h1 className="font-dank font-semibold text-2xl">Ethopia</h1>
        <p className="font-gabri font-light">Build Tech </p>

        </div>
      </div>
      <ul className="hidden md:flex gap-8 md:ml-8 font-dank">
        <li>
          <Link to="/" className="hover">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/appointment">Appointment</Link>
        </li>
        <li>
          <Link to="/appointment">About</Link>
        </li>
      </ul>

      <ul className="z-[1000]">
        <div className="flex items-center gap-3">
          <li className="hidden md:block">
            {user?._id ? (
              <Link to="/profile">
                <FaUserAlt />
              </Link>
            ) : (
              <Link to="/login">
                <IoMdLogIn size={"1.3rem"} />
              </Link>
            )}
          </li>
          {user?._id && (
            <div className="relative">
              <div className="bg-[#F30000] h-4 w-4 rounded-full absolute -top-[90%] -right-2 text-center text-sm hidden md:block">
                1
              </div>
              <Link to="/favourite" className="hidden md:block">
                <FaHeart />
              </Link>
            </div>
          )}

          {user?.role === "admin" && (
            <li className="hidden md:block">
              <Link to="/admin/dashboard">
                <MdDashboard size={"1.2rem"} />
              </Link>
            </li>
          )}
        </div>
        <div className="md:hidden overflow-hidden">
          <Hamburger
            duration={0.8}
            toggled={isOpen}
            toggle={setOpen}
            color="#E32636"
          />
        </div>
      </ul>

      <ul
        className={`${
          isOpen
            ? "text-black opacity-100 transform translate-x-0"
            : "opacity-0 transform -translate-y-full"
        } transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-row justify-around items-center text-2xl z-[100]`}
        onClick={() => setOpen(false)}
      >
        <section className="z-[1000] text-zinc-200 font-dank font-semibold">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div className="my-5">
            <Link to="/projects">Projects</Link>
          </div>

          <div className="my-5">
            <Link to="/services">Services</Link>
          </div>

          <div className="my-5">
            <Link to="/appointment">Appointment</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
        </section>
        <div className="z-100 text-zinc-200 flex flex-col items-center gap-8">
          {user?._id ? (
            <Link to="/profile">
              <FaUserAlt />
            </Link>
          ) : (
            <Link to="/login">
              <IoMdLogIn />
            </Link>
          )}

          {user?.role === "admin" && (
            <Link to="/admin/dashboard">
              <MdDashboard />
            </Link>
          )}

          <div>
            <Link to="/favourite">
              <FaHeart />
            </Link>
          </div>
          <div>
            <Link to="/contact">
              <BiSupport />
            </Link>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
