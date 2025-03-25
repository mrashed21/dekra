import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "/Logo.png";
const Footer = () => {
  return (
    <footer className="bg-primary text-secondary py-8 px-4">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* FOR COMPANIES */}
          <div>
            <h3 className="text-sm text-[#ffffff] mb-4">FOR COMPANIES</h3>
            <ul className="space-y-2 font-medium">
              <li>
                <Link to="/agency-work" className="nav-underline">
                  Agency work
                </Link>
              </li>
              <li>
                <Link to="/temporary-staffing" className="nav-underline">
                  Temporary staffing
                </Link>
              </li>
              <li>
                <Link to="/try-hire" className="nav-underline">
                  Try & Hire
                </Link>
              </li>
              <li>
                <Link to="/recruitment" className="nav-underline">
                  Recruitment and preselection of candidates
                </Link>
              </li>
              <li>
                <Link to="/outsourcing" className="nav-underline">
                  Outsourcing
                </Link>
              </li>
              <li className="mt-4 text-white">
                <h5 className="font-semibold text-sm ">DEKRA</h5>
              </li>
              <li>
                <Link to="/about" className="nav-underline">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/news" className="nav-underline">
                  News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-underline">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* HR Consulting */}
          <div>
            <ul className="space-y-2 mt-10 font-medium">
              <li>
                <Link to="/hr-consulting" className="nav-underline">
                  HR consulting
                </Link>
              </li>
              <li>
                <Link to="/recruitment-service" className="nav-underline">
                  Recruitment and selection service
                </Link>
              </li>
              <li>
                <Link to="/assessment" className="nav-underline">
                  Assessment of potential
                </Link>
              </li>
              <li>
                <Link
                  to="/organizational-diagnostics"
                  className="nav-underline"
                >
                  Organizational diagnostics
                </Link>
              </li>
              <li>
                <Link to="/other-hr-services" className="nav-underline">
                  Other HR services
                </Link>
              </li>
            </ul>
          </div>

          {/* Event & Logistic services */}
          <div>
            <ul className="space-y-2 mt-10 font-medium">
              <li>
                <Link to="/event-services" className="nav-underline">
                  Event & Logistic services
                </Link>
              </li>
              <li>
                <Link to="/promotions" className="nav-underline">
                  Promotions
                </Link>
              </li>
              <li>
                <Link to="/event-management" className="nav-underline">
                  Event management
                </Link>
              </li>
              <li>
                <Link to="/market-research" className="nav-underline">
                  Market research
                </Link>
              </li>
            </ul>
          </div>

          {/* FOR JOB SEEKERS */}

          <div>
            <h3 className="text-sm text-[#ffffff] mb-4">FOR JOB SEEKERS</h3>
            <ul className="space-y-2 font-medium">
              <li>
                <Link to="/find-job" className="nav-underline">
                  Find a job
                </Link>
              </li>
              <li>
                <Link to="/temp-staffing" className="nav-underline">
                  Temporary staffing
                </Link>
              </li>
              <li>
                <Link to="/recruitment-selection" className="nav-underline">
                  Recruitment and selection
                </Link>
              </li>
              <li>
                <Link to="/student-jobs" className="nav-underline">
                  Student jobs
                </Link>
              </li>
              <li>
                <Link to="/freelance-jobs" className="nav-underline">
                  Freelance jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* INFO CORNER */}
          <div>
            <h3 className="text-sm text-[#ffffff] mb-4">INFO CORNER</h3>
            <ul className="space-y-2 font-medium">
              <li>
                <Link to="/blog" className="nav-underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="nav-underline">
                  Case studies
                </Link>
              </li>
              <li>
                <Link to="/faq" className="nav-underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-6 border-t border-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* logo */}
            <div className="mb-4 md:mb-0 order-3 lg:order-1 mt-5 lg:mt-0">
              <Link
                to="/collectively"
                className="font-bold  flex items-center space-x-2 text-white"
              >
                <img src={Logo} alt="logo" className="w-20 h-10" />{" "}
                <span>Collectively Together</span>
              </Link>
            </div>

            {/* trams */}
            <div className="flex space-x-4 oder-1 lg:order-2 ">
              <Link to="/privacy" className=" footer-underline">
                Privacy Policy
              </Link>
              <Link to="/cookies" className=" footer-underline">
                Cookie policy
              </Link>
              <Link to="/quality" className=" footer-underline">
                Quality policy
              </Link>
            </div>

            {/* social icon */}
            <div className="flex space-x-4 oder-2 lg:order-3 mt-5 lg:mt-0">
              <div className="w-7 h-7 rounded-full bg-green-800 hover:bg-green-950 flex items-center justify-center ">
                <Link to="#">
                  <FaFacebook color="white" />
                </Link>
              </div>
              <div className="w-7 h-7 rounded-full bg-green-800 hover:bg-green-950 flex items-center justify-center">
                <Link to="#">
                  <FaInstagram color="white" />
                </Link>
              </div>
              <div className="w-7 h-7 rounded-full bg-green-800 hover:bg-green-950 flex items-center justify-center">
                <Link to="#">
                  <FaLinkedin color="white" />
                </Link>
              </div>
            </div>

            <div className="text-[12px] text-gray-600 order-4">
              Copyright © 2025 DEKRA. Powered by: d
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
