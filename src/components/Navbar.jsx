import { useState } from "react";
import Logo from "./Logo";
import SocialLinks from "./SocialIcons";

const Navbar = ({ aboutRef, workRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWorks = () => {
    if (workRef.current) {
      workRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      style={{
        background: "rgba(253, 253, 253, 0.5)",
      }}
      className="border-b absolute w-full  top-0 border-[#D0D5DD]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex-shrink-0 flex items-center">
            <Logo />
          </div>
          <div className="hidden md:flex font-normal space-x-4">
            <button
              onClick={scrollToTop}
              className={`hover:text-secondary-orange`}
            >
              Home
            </button>
            <button
              onClick={scrollToAbout}
              className={`text-gray-600 hover:text-secondary-orange`}
            >
              About
            </button>
            <button
              onClick={scrollToWorks}
              className={`text-gray-600 hover:text-secondary-orange `}
            >
              Works
            </button>
          </div>

          <div className="hidden md:inline">
            <SocialLinks />
          </div>

          {/* Hamburger Menu Icon */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className={`text-gray-600 hover:text-secondary-orange focus:outline-none`}
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${
                  isOpen ? "rotate-90" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden z-[99999] absolute w-full transition-max-height duration-300 overflow-hidden bg-white ${
          isOpen ? "max-h-screen pb-4 bg-white" : "max-h-0 bg-white"
        }`}
      >
        <div className="flex flex-col bg-white items-center space-y-2 px-4 pb-4">
          <a href="/" className="text-gray-600 hover:text-secondary-orange">
            Home
          </a>
          <button
            onClick={scrollToAbout}
            className="text-gray-600 hover:text-secondary-orange"
          >
            About
          </button>
          <button
            onClick={scrollToWorks}
            className="text-gray-600 hover:text-secondary-orange"
          >
            Works
          </button>
        </div>

        <div>
          <SocialLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
