// import React, { useState } from "react";

// const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="py-6 px-6">
//       <div className="flex justify-between items-center">
//         <img
//           src="/images/logo.svg"
//           alt="rise logo"
//           className="w-24 md:w-auto"
//         />

   
//         <nav className="hidden md:flex space-x-6 text-gray-600 font-dmSans">
//           <a href="#" className="text-[#07969E]">
//             Home
//           </a>

//           <div className="inline-block relative group">
//             <button className="inline-flex items-center text-[#07969E]">
//               Products
//               <svg
//                 className="ml-1 w-4 h-4 fill-current text-gray-600 group-hover:text-green-600"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M5.05 7.05a1 1 0 011.414 0L10 10.586l3.536-3.536a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
//               </svg>
//             </button>

//             <ul className="absolute hidden group-hover:block bg-white text-[#07969E] shadow-md mt-1 rounded-md">
//               <li>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Stocks
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Real Estate
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Fixed Income
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <a href="#" className="text-[#07969E] font-[400] text-[16px]">
//             Investment Club
//           </a>
//           <a href="#" className="text-[#07969E] font-[400] text-[16px]">
//             Blog
//           </a>
//           <a href="#" className="text-[#07969E] font-[400] text-[16px]">
//             About Us
//           </a>
//           <a href="#" className="text-[#07969E] font-[400] text-[16px]">
//             FAQs
//           </a>
//         </nav>

      
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-[#07969E]">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       <div
//         className={`fixed top-0 right-0 h-auto w-full bg-white shadow-lg transition-transform duration-300 transform ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full"
//         } z-50 rounded-l-lg`}
//       >
//         <div className="flex justify-end p-4">
//           <button onClick={toggleMenu} className="text-gray-600">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>

//         <nav className="mt-6 space-y-4 px-6 text-gray-600 text-left font-dmSans">
//           <ul className="space-y-4">
//             <li>
//               <a
//                 href="#"
//                 className="block text-[#07969E] py-2 hover:bg-gray-100 rounded transition"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block text-[#07969E] py-2 hover:bg-gray-100 rounded transition"
//               >
//                 Products
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block text-[#07969E] py-2 hover:bg-gray-100 rounded transition"
//               >
//                 Investment Club
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block text-[#07969E] py-2 hover:bg-gray-100 rounded transition"
//               >
//                 Blog
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block text-[#07969E] py-2 hover:bg-gray-100 rounded transition"
//               >
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block text-[#07969E] py-2 hover:bg-gray-100 rounded transition"
//               >
//                 FAQs
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-6 px-6">
      <div className="flex justify-between items-center">
        <img
          src="/images/logo.svg"
          alt="rise logo"
          className="w-24 md:w-auto"
        />

        <nav className="hidden md:flex space-x-6 text-gray-600">
          <a href="#" className="text-[#07969E]">
            Home
          </a>

          <div className="inline-block relative group">
            <button className="inline-flex items-center text-[#07969E]">
              Products
              <svg
                className="ml-1 w-4 h-4 fill-current text-gray-600 group-hover:text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.05 7.05a1 1 0 011.414 0L10 10.586l3.536-3.536a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>

            <ul className="absolute hidden group-hover:block bg-white text-[#07969E] shadow-md mt-1 rounded-md">
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

          <a href="#" className="text-[#07969E] font-[400] text-[16px]">
            Investment Club
          </a>
          <a href="#" className="text-[#07969E] font-[400] text-[16px]">
            Blog
          </a>
          <a href="#" className="text-[#07969E] font-[400] text-[16px]">
            About Us
          </a>
          <a href="#" className="text-[#07969E] font-[400] text-[16px]">
            FAQs
          </a>
        </nav>

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
          <button onClick={toggleMenu} className="text-[#07969E]"> {/* Same color as hamburger */}
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
                className="block text-[#07969E] py-2 hover:bg-gray-100 rounded transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[#07969E] py-2 hover:bg-gray-100 rounded transition"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[#07969E] py-2 hover:bg-gray-100 rounded transition"
              >
                Investment Club
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[#07969E] py-2 hover:bg-gray-100 rounded transition"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[#07969E] py-2 hover:bg-gray-100 rounded transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-[#07969E] py-2 hover:bg-gray-100 rounded transition"
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
