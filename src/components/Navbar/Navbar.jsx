/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { LuArrowDownRight } from "react-icons/lu";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  const getTextColor = () => {
    switch (location.pathname) {
      case "/":
        return "text-black";
      case "/for-companies":
        return "text-white";
      case "/find-job":
        return "text-black";
      case "/info-corner":
        return "text-black";
      case "/dekra":
        return "text-white";
      case "/contact":
        return "text-black";
      default:
        return "text-white";
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full p-4 font-bold transition-transform duration-300 z-50 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${getTextColor()}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold">
          <img src={Logo} alt="logo" className="w-28 h-12" />
        </NavLink>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FiX size={24} color="black" />
          ) : (
            <FiMenu size={24} color="black" />
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-10">
          <li className="relative group nav-underline">
            <NavLink
              to="/for-companies"
              className={({ isActive }) =>
                `cursor-pointer flex items-center ${
                  isActive
                    ? "underline decoration-mint-500 underline-offset-4"
                    : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  FOR COMPANIES{" "}
                  <LuArrowDownRight className="ml-1 transition-transform duration-300 ease-in-out group-hover:-rotate-90" />
                </>
              )}
            </NavLink>
            <ul className="nav-dropdown">
              <li className="px-4 py-2 sub-item">
                <NavLink to="/for-companies">AGENCY WORK</NavLink>
              </li>
              <li className="px-4 py-2 sub-item">
                <NavLink to="/for-companies">HR CONSULTING</NavLink>
              </li>
              <li className="px-4 py-2 sub-item">
                <NavLink to="/for-companies">EVENT & LOGISTIC SERVICES</NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-underline">
            <NavLink
              to="/find-job"
              className={({ isActive }) =>
                isActive
                  ? "underline decoration-mint-500 underline-offset-4"
                  : ""
              }
            >
              FIND A JOB
            </NavLink>
          </li>
          <li className="relative group nav-underline">
            <NavLink
              to="/info-corner"
              className={({ isActive }) =>
                `cursor-pointer flex items-center ${
                  isActive
                    ? "underline decoration-mint-500 underline-offset-4"
                    : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  INFO CORNER{" "}
                  <LuArrowDownRight className="ml-1 transition-transform duration-300 ease-in-out group-hover:-rotate-90" />
                </>
              )}
            </NavLink>
            <ul className="nav-dropdown">
              <li className="px-4 py-2 sub-item">
                <NavLink to="/info-corner">BLOG</NavLink>
              </li>
              <li className="px-4 py-2 sub-item">
                <NavLink to="/info-corner">CASE STUDIES</NavLink>
              </li>
              <li className="px-4 py-2 sub-item">
                <NavLink to="/info-corner">FAQ</NavLink>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <NavLink
              to="/dekra"
              className={({ isActive }) =>
                `nav-underline cursor-pointer flex items-center ${
                  isActive
                    ? "underline decoration-mint-500 underline-offset-4"
                    : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  DEKRA
                  <LuArrowDownRight className="ml-1 transition-transform duration-300 ease-in-out group-hover:-rotate-90" />
                </>
              )}
            </NavLink>
            <ul className="nav-dropdown">
              <li className="px-4 py-2 sub-item">
                <NavLink to="/dekra">ABOUT US</NavLink>
              </li>
              <li className="px-4 py-2 sub-item">
                <NavLink to="/dekra">NEWS</NavLink>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-underline ${
                  isActive
                    ? "underline decoration-mint-500 underline-offset-4"
                    : ""
                }`
              }
            >
              CONTACT US
            </NavLink>
          </li>
          <div className="flex items-center space-x-2">
            <button className="cursor-pointer">HR</button>{" "}
            <div className="h-3 w-[2px] bg-white"></div>{" "}
            <button className="cursor-pointer text-[#5FB02E]">EN</button>
          </div>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 w-screen h-screen bg-gray-100 text-green-900 flex flex-col z-50 p-6">
          <button
            className="absolute top-6 right-6 text-green-900"
            onClick={() => setIsOpen(false)}
          >
            <FiX size={28} />
          </button>
          <ul className="space-y-4 text-lg font-medium mt-5">
            <li className="flex items-center">
              <NavLink
                to="/for-companies"
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-mint-500 underline-offset-4"
                    : ""
                }
                onClick={closeMenu}
              >
                FOR COMPANIES
              </NavLink>
              <LuArrowDownRight className="ml-1" />
            </li>
            <li>
              <NavLink
                to="/find-job"
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-mint-500 underline-offset-4"
                    : ""
                }
                onClick={closeMenu}
              >
                FIND A JOB
              </NavLink>
            </li>
            <li className="flex items-center">
              <NavLink
                to="/info-corner"
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-mint-500 underline-offset-4"
                    : ""
                }
                onClick={closeMenu}
              >
                INFO CORNER
              </NavLink>
              <LuArrowDownRight className="ml-1" />
            </li>
            <li className="flex items-center">
              <NavLink
                to="/dekra"
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-mint-500 underline-offset-4"
                    : ""
                }
                onClick={closeMenu}
              >
                DEKRA
              </NavLink>
              <LuArrowDownRight className="ml-1" />
            </li>
            <li className="flex items-center">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-mint-500 underline-offset-4"
                    : ""
                }
                onClick={closeMenu}
              >
                CONTACT US
              </NavLink>
            </li>
            <div className="flex items-center space-x-2">
              <button className="cursor-pointer">HR</button>{" "}
              <div className="h-3 w-[2px] bg-black"></div>{" "}
              <button className="cursor-pointer text-[#5FB02E]">EN</button>
            </div>
            {/* social icon */}
            <div className="flex space-x-4 mt-6">
              <div className="w-7 h-7 rounded-full bg-green-900 flex items-center justify-center">
                <Link to="#" onClick={closeMenu}>
                  <FaFacebook color="white" />
                </Link>
              </div>
              <div className="w-7 h-7 rounded-full bg-green-900 flex items-center justify-center">
                <Link to="#" onClick={closeMenu}>
                  <FaInstagram color="white" />
                </Link>
              </div>
              <div className="w-7 h-7 rounded-full bg-green-900 flex items-center justify-center">
                <Link to="#" onClick={closeMenu}>
                  <FaLinkedin color="white" />
                </Link>
              </div>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
