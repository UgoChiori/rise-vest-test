

import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home"); // Track the active link

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <header className="py-6 px-6 font-dmSans">
      <div className="flex justify-between items-center">
        <img
          src="/images/logo.svg"
          alt="rise logo"
          className="w-24 md:w-auto"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-600">
          <a
            href="#"
            onClick={() => handleLinkClick("Home")}
            className={`relative ${
              activeLink === "Home"
                ? "font-bold before:content-[''] before:absolute before:bottom-[-8px] before:left-1/2 before:transform before:-translate-x-1/2 before:w-2 before:h-2 before:bg-[#07969E] before:rounded-full"
                : "font-[400]"
            } text-[#07969E]`}
          >
            Home
          </a>

          <div className="inline-block relative group ">
            <button
              onClick={() => handleLinkClick("Products")}
              className={`inline-flex items-center ${
                activeLink === "Products"
                  ? "font-bold border-b-2 border-[#07969E] pb-1"
                  : "font-[400]"
              } text-[#07969E]`}
            >
              Products
              <svg
                className="ml-1 w-4 h-4 fill-current text-gray-600 group-hover:text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.05 7.05a1 1 0 011.414 0L10 10.586l3.536-3.536a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>

            <ul className="absolute hidden group-hover:block bg-[#07969E] text-[white] shadow-md mt-1 rounded-md w-[200px] h-[200px]">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Stocks
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Real Estate
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Fixed Income
                </a>
              </li>
            </ul>
          </div>

          <a
            href="#"
            onClick={() => handleLinkClick("Investment Club")}
            className={`relative ${
              activeLink === "Investment Club"
                ? "font-bold before:content-[''] before:absolute before:bottom-[-8px] before:left-1/2 before:transform before:-translate-x-1/2 before:w-2 before:h-2 before:bg-[#07969E] before:rounded-full"
                : "font-[400]"
            } text-[#07969E]`}
          >
            Investment Club
          </a>
          <a
            href="#"
            onClick={() => handleLinkClick("Blog")}
            className={`relative ${
              activeLink === "Blog"
                ? "font-bold before:content-[''] before:absolute before:bottom-[-8px] before:left-1/2 before:transform before:-translate-x-1/2 before:w-2 before:h-2 before:bg-[#07969E] before:rounded-full"
                : "font-[400]"
            } text-[#07969E]`}
          >
            Blog
          </a>
          <a
            href="#"
            onClick={() => handleLinkClick("About Us")}
            className={`relative ${
              activeLink === "About Us"
                ? "font-bold before:content-[''] before:absolute before:bottom-[-8px] before:left-1/2 before:transform before:-translate-x-1/2 before:w-2 before:h-2 before:bg-[#07969E] before:rounded-full"
                : "font-[400]"
            } text-[#07969E]`}
          >
            About Us
          </a>
          <a
            href="#"
            onClick={() => handleLinkClick("FAQs")}
            className={`relative ${
              activeLink === "FAQs"
                ? "font-bold before:content-[''] before:absolute before:bottom-[-5px] before:left-1/2 before:transform before:-translate-x-1/2 before:w-2 before:h-2 before:bg-[#07969E] before:rounded-full"
                : "font-[400]"
            } text-[#07969E]`}
          >
            FAQs
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#07969E]">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      
      <div
        className={`fixed top-0 right-0 h-auto w-full bg-white shadow-lg transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50 rounded-l-lg`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-[#07969E]">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="mt-6 space-y-4 px-6 text-gray-600 text-left">
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("Home")}
                className={`block text-[#07969E] py-2  rounded transition ${
                  activeLink === "Home"
                    ? "font-bold "
                    : "font-[400]"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("Products")}
                className={`block text-[#07969E] py-2  rounded transition ${
                  activeLink === "Products"
                    ? "font-bold "
                    : "font-[400]"
                }`}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("Investment Club")}
                className={`block text-[#07969E] py-2  rounded transition ${
                  activeLink === "Investment Club"
                    ? "font-bold "
                    : "font-[400]"
                }`}
              >
                Investment Club
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("Blog")}
                className={`block text-[#07969E] py-2  rounded transition ${
                  activeLink === "Blog"
                    ? "font-bold "
                    : "font-[400]"
                }`}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("About Us")}
                className={`block text-[#07969E] py-2  rounded transition ${
                  activeLink === "About Us"
                    ? "font-bold "
                    : "font-[400]"
                }`}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("FAQs")}
                className={`block text-[#07969E] py-2 rounded transition ${
                  activeLink === "FAQs"
                    ? "font-bold "
                    : "font-[400]"
                }`}
              >
                FAQs
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
