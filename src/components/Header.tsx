import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = (link: string) => setActiveLink(link);

  const links = [
    { name: "Home", url: "#" },
    {
      name: "Products",
      url: "#",
      subLinks: ["Stocks", "Real Estate", "Fixed Income"],
    },
    { name: "Investment Club", url: "#" },
    { name: "Blog", url: "#" },
    { name: "About Us", url: "#" },
    { name: "FAQs", url: "#" },
  ];

  return (
    <header className="py-6 px-6 font-dmSans">
      <div className="flex justify-between items-center">
        <img
          src="/images/logo.svg"
          alt="rise logo"
          className="w-24 lg:w-auto"
        />

        <nav className="hidden lg:flex space-x-6 text-gray-600">
          {links.map((link) => (
            <div key={link.name} className="relative group">
              {link.subLinks ? (
                <>
                  <button
                    onClick={() => handleLinkClick(link.name)}
                    className={`inline-flex items-center ${
                      activeLink === link.name
                        ? "font-bold border-b-2 border-[#07969E] pb-1"
                        : "font-[400]"
                    } text-[#07969E]`}
                  >
                    {link.name}
                    <svg
                      className="ml-1 w-4 h-4 fill-current text-gray-600 group-hover:text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.05 7.05a1 1 0 011.414 0L10 10.586l3.536-3.536a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </button>

                  <ul className="absolute hidden group-hover:block bg-[#07969E] text-white shadow-md mt-1 rounded-md w-48">
                    {link.subLinks.map((subLink) => (
                      <li key={subLink}>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {subLink}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a
                  href={link.url}
                  onClick={() => handleLinkClick(link.name)}
                  className={`relative ${
                    activeLink === link.name
                      ? "font-bold before:content-[''] before:absolute before:bottom-[-8px] before:left-1/2 before:transform before:-translate-x-1/2 before:w-2 before:h-2 before:bg-[#07969E] before:rounded-full"
                      : "font-[400]"
                  } text-[#07969E]`}
                >
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </nav>

        <div className="lg:hidden">
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
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  onClick={() => handleLinkClick(link.name)}
                  className={`block text-[#07969E] py-2 rounded transition ${
                    activeLink === link.name ? "font-bold" : "font-[400]"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
