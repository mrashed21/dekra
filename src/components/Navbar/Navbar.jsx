
import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-router-dom";
import Logo from "/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-secondary p-4 font-bold">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          <img src={Logo} alt="logo" className="w-28 h-12" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-10">
          <li className="relative group nav-underline">
            <span className="cursor-pointer flex items-center">
              FOR COMPANIES{" "}
              <LuArrowDownRight className="ml-1 transition-transform duration-300 ease-in-out group-hover:-rotate-90" />
            </span>
            <ul className="nav-dropdown">
              <li className="px-4 py-2 sub-item">
                <Link to="/agency-work">AGENCY WORK</Link>
              </li>
              <li className="px-4 py-2 sub-item">
                <Link to="/hr-consulting">HR CONSULTING</Link>
              </li>
              <li className="px-4 py-2 sub-item">
                <Link to="/event-logistic">EVENT & LOGISTIC SERVICES</Link>
              </li>
            </ul>
          </li>
          <li className="nav-underline">
            <Link to="/find-job ">FIND A JOB</Link>
          </li>
          <li className="relative group nav-underline">
            <Link to="/info-corner">
              <span className="cursor-pointer flex items-center">
                INFO CORNER{" "}
                <LuArrowDownRight className="ml-1 transition-transform duration-300 ease-in-out group-hover:-rotate-90" />
              </span>
            </Link>
            <ul className="nav-dropdown">
              <li className="px-4 py-2 sub-item">
                <Link to="/blog">BLOG</Link>
              </li>
              <li className="px-4 py-2 sub-item">
                <Link to="/case-studies">CASE STUDIES</Link>
              </li>
              <li className="px-4 py-2 sub-item">
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <Link to="/dekra" className="nav-underline">
              <span className="cursor-pointer flex items-center">
                DEKRA
                <LuArrowDownRight className="ml-1 transition-transform duration-300 ease-in-out group-hover:-rotate-90" />
              </span>
            </Link>
            <ul className="nav-dropdown">
              <li className="px-4 py-2 sub-item">
                <Link to="/about-us">ABOUT US</Link>
              </li>
              <li className="px-4 py-2 sub-item">
                <Link to="/news">NEWS</Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <Link to="/contact" className="nav-underline">
              CONTACT US
            </Link>
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
        <div className="fixed top-0 left-0 w-full h-full bg-gray-100 text-green-900 flex flex-col  z-50 p-6">
          <button
            className="absolute top-6 right-6 text-green-900"
            onClick={() => setIsOpen(false)}
          >
            <FiX size={28} />
          </button>
          <ul className="space-y-4 text-lg font-medium mt-5">
            <li className="flex items-center">
              <Link to="/for-companies">FOR COMPANIES</Link>
              <LuArrowDownRight className="ml-1" />
            </li>
            <li>
              <Link to="/find-job">FIND A JOB</Link>
            </li>
            <li className="flex items-center">
              <Link to="/info-corner">INFO CORNER</Link>
              <LuArrowDownRight className="ml-1" />
            </li>
            <li className="flex items-center">
              <Link to="/dekra">DEKRA</Link>
              <LuArrowDownRight className="ml-1" />
            </li>
            <li className="flex items-center">
              <Link to="/contact">CONTACT US</Link>
            </li>
            <div className="flex items-center space-x-2">
              <button className="cursor-pointer">HR</button>{" "}
              <div className="h-3 w-[2px] bg-black"></div>{" "}
              <button className="cursor-pointer text-[#5FB02E]">EN</button>
            </div>
            {/* social icon */}
            <div className="flex space-x-4 mt-6">
              <div className="w-7 h-7 rounded-full bg-green-900 flex items-center justify-center">
                <Link to="#">
                  <FaFacebook color="white" />
                </Link>
              </div>
              <div className="w-7 h-7 rounded-full bg-green-900 flex items-center justify-center">
                <Link to="#">
                  <FaInstagram color="white" />
                </Link>
              </div>
              <div className="w-7 h-7 rounded-full bg-green-900 flex items-center justify-center">
                <Link to="#">
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
