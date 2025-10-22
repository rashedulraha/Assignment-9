import { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  FaHome,
  FaStore,
  FaUser,
  FaBars,
  FaTimes,
  FaHeart,
} from "react-icons/fa";
import "../../index.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLink = (
    <>
      <div className="flex items-center space-x-8">
        <NavLink className={"nvaLinkStyle"} to={"/"}>
          <FaHome className="mr-2" />
          Home
        </NavLink>
        <NavLink className={"nvaLinkStyle"} to={"/seller"}>
          <FaStore className="mr-2" /> Sellers
        </NavLink>
        <NavLink className={"nvaLinkStyle"} to={"/wishlist"}>
          <FaHeart className="mr-2" /> Wishlist
        </NavLink>
      </div>
    </>
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-[#FF6B6B]">
              BayBuzz
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">{navLink}</div>

          {/* Desktop Right Side Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/user/login"
              className="flex items-center px-4 py-2 border border-[#0F172A] text-[#0F172A] rounded-lg hover:bg-[#0F172A] hover:text-white transition">
              <FaUser className="mr-2" /> Login
            </Link>
            <Link
              to="/user/register"
              className="flex items-center px-4 py-2 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#FF5252] transition">
              <FaUser className="mr-2" /> Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#0F172A] focus:outline-none">
              {isOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="flex items-center text-[#0F172A] hover:text-[#FF6B6B] transition py-2">
                <FaHome className="mr-2" /> Home
              </Link>

              <Link
                to="/sellers"
                className="flex items-center text-[#0F172A] hover:text-[#FF6B6B] transition py-2">
                <FaStore className="mr-2" /> Sellers
              </Link>

              <Link
                to="/wishlist"
                className="flex items-center text-[#0F172A] hover:text-[#FF6B6B] transition py-2">
                <FaHeart className="mr-2" /> Wishlist
              </Link>

              <div className="pt-4 flex flex-col space-y-3">
                <Link
                  to="/user/login"
                  className="flex items-center justify-center px-4 py-2 border border-[#0F172A] text-[#0F172A] rounded-lg hover:bg-[#0F172A] hover:text-white transition">
                  <FaUser className="mr-2" /> Login
                </Link>
                <Link
                  to="/user/register"
                  className="flex items-center justify-center px-4 py-2 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#FF5252] transition">
                  <FaUser className="mr-2" /> Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
