import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex justify-between items-center py-5 font-medium ">
      <Link to={"/"}>
        <img src={assets.logo} alt="Logo" className="w-36" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to={"/"} className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to={"/collection"}
          className="flex flex-col items-center gap-1"
        >
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/about"} className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-5">
        <img
          src={assets.search_icon}
          alt="search_icon"
          className="w-5 cursor-pointer"
        />

        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="profile_icon"
            className="w-5 cursor-pointer"
          />

          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
            <div className="flex flex-col gap-2 w-36 px-5 py-3 bg-slate-100 text-gray-500 rounded ">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to={"/cart"} className="relative">
          <img
            src={assets.cart_icon}
            alt="cart_icon"
            className="w-5 min-w-5 cursor-pointer"
          />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 text-white bg-red-500 aspect-square rounded-full text-[8px]">
            15
          </p>
        </Link>
        <img
          onClick={() => setVisible(!visible)}
          src={assets.menu_icon}
          alt=""
          className="w-5 cursor-pointer sm:hidden"
        />
      </div>
      {/* {Sidebar componets for mobile/small screens} */}
      <div
        className={`absolute right-0 top-0 button-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-4 cursor-pointer "
          >
            <img
              src={assets.dropdown_icon}
              className="h-4 rotate-180"
              alt="dropdown_icon"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6  border "
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            Collection
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
