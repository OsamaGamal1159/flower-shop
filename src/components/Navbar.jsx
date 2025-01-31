import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineWavingHand } from "react-icons/md";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const user = useSelector((state) => state.user.user);
  const { name, authUser } = user;

  return (
    <nav className="relative flex items-center justify-between p-4 bg-white shadow-md w-full z-50">
      {/* Logo */}
      {/* <Link
        to="/"
        className="text-3xl md:text-5xl text-red-500 italic font-semibold"
      >
        Ahmed Flowers
      </Link> */}
      <Link
        to="/Home"
        className="text-5xl text-red-500 italic parisienne-regular"
      >
        Ahmed Flowers
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        className="sm:hidden text-red-500 text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoMdClose /> : <IoMdMenu />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`absolute sm:static bg-white sm:bg-transparent w-full sm:w-auto top-16 left-0 sm:flex gap-6 text-md text-gray-800 shadow-md sm:shadow-none p-5 sm:p-0 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {["Home", "Products", "About", "Contact Us"].map((item, index) => (
          <NavLink
            key={index}
            to={`/${item.toLowerCase().replace(" ", "")}`}
            className="block sm:inline-flex flex-col items-center gap-1 py-2 px-4 hover:text-red-500 transition-colors duration-200"
          >
            <p>{item}</p>
          </NavLink>
        ))}
      </ul>

      {/* Greeting & Cart */}
      <div className="flex items-center gap-4">
        {authUser && (
          <p className="text-red-500 font-medium hidden sm:flex items-center gap-2">
            Hi! {name.slice(0, 5)}
            <MdOutlineWavingHand />
          </p>
        )}

        {/* Cart */}
        <Link
          to="/cart"
          className="relative cursor-pointer hover:bg-red-400 rounded-full p-3 transition-colors duration-200 group"
        >
          <FiShoppingCart
            size={24}
            className="text-gray-800 group-hover:text-white"
          />
          {totalAmount > 0 && (
            <div className="absolute bg-red-500 w-5 h-5 right-[6px] top-[4px] rounded-full text-white text-xs text-center leading-5">
              {totalAmount}
            </div>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
