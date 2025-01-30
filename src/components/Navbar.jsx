import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineWavingHand } from "react-icons/md";

function Navbar() {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const user = useSelector((state) => state.user.user);
  const { name, authUser } = user;

  return (
    <div className="relative flex items-center justify-between text-base font-medium pb-10 z-50">
      {/* -----------------------------------Logo-------------------------------------- */}
      <Link to="/" className="text-5xl text-red-500 italic parisienne-regular">
        Ahmed Flowers
      </Link>
      {/* ----------------------------------NavLink------------------------------------- */}
      <ul className="hidden sm:flex gap-6 text-md text-gray-800">
        <NavLink
          to="/"
          className="flex flex-col items-center gap-1 hover:text-red-500 transition-colors duration-200"
        >
          <p>Home</p>
          <hr className="w-3/4 h-[3px] bg-red-500 hidden" />
        </NavLink>
        <NavLink
          to="/product"
          className="flex flex-col items-center gap-1 hover:text-red-500 transition-colors duration-200"
        >
          <p>Products</p>
          <hr className="w-3/4 h-[3px] bg-red-500 hidden" />
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 hover:text-red-500 transition-colors duration-200"
        >
          <p>About</p>
          <hr className="w-3/4 h-[3px] bg-red-500 hidden" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 hover:text-red-500 transition-colors duration-200"
        >
          <p>Contact Us</p>
          <hr className="w-3/4 h-[3px] bg-red-500 hidden" />
        </NavLink>
      </ul>
      {/* -------------------------------Greeting--------------------------------------- */}
      <div className="flex gap-2 items-center">
        {authUser ? (
          <p className="text-red-500 font-medium pr-5 flex items-center gap-3">
            Hi! {name.slice(0, 5)}
            <span>
              <MdOutlineWavingHand />
            </span>
          </p>
        ) : (
          ""
        )}
        {/* -------------------------------Search------------------------------------- */}

        {/* --------------------------------Cart-------------------------------------- */}
        <Link
          to="/cart"
          className="relative cursor-pointer hover:bg-red-400 rounded-full p-3 transition-colors duration-200 group"
        >
          <FiShoppingCart
            size={20}
            className="text-gray-800 group-hover:text-white"
          />
          {totalAmount ? (
            <div className="absolute bg-red-500 w-4 h-4 right-[6px] top-[4px] rounded-full text-white text-[10px] text-center leading-4">
              {totalAmount}
            </div>
          ) : (
            ""
          )}
        </Link>
        {/* ----------------------------------Login----------------------------------------- */}
      </div>
    </div>
  );
}

export default Navbar;
