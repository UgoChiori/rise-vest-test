
// import React from "react";

// const Footer: React.FC = () => {
//   const footerLinks = [
//     {
//       title: "Explore",
//       items: ["Investment Club", "Blog"],
//       showArrow: true,
//     },
//     {
//       title: "Products",
//       items: ["Rise App", "Wallets", "Asset Classes"],
//       showArrow: false,
//     },
//     {
//       title: "Contact Us",
//       items: ["0818 714 7405", "hello@rise.capital", "Newsletter", "Instagram", "Twitter"],
//       showArrow: true,
//     },
//   ];

//   return (
//     <footer className="py-8">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 ">
//         {/* Logo and General Links */}
//         <div className="mt-6">
//           <img src="/images/logoblack.svg" alt="Rise Logo" />
//           <ul className="mt-4 space-y-2">
//             {["About Us", "Careers", "FAQs", "Contact Info", "Press", "Rise Impact"].map((link, idx) => (
//               <li key={idx} className="font-dmSans text-[#2D2D2D] font-normal text-[16px]">{link}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Footer Sections */}
//         {footerLinks.map((section, index) => (
//           <div key={index}>
//             <h3 className="text-lg font-semibold mt-6">{section.title}</h3>
//             <ul className="mt-4 space-y-2">
//               {section.items.map((item, idx) => (
//                 <li key={idx} className="flex items-center font-dmSans text-[#2D2D2D] font-normal text-[16px]">
//                   {item} 
//                   {section.showArrow && (
//                     <img src="/images/arrow.svg" alt="Arrow" className="ml-4 w-3 h-3" />
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: "Explore",
      items: ["Investment Club", "Blog", "Newsletter", "Instagram", "Twitter"],
      showArrow: true,
    },
    {
      title: "Products",
      items: ["Rise App", "Wallets", "Asset Classes"],
      showArrow: false,
    },
    {
      title: "Contact Us",
      items: ["0818 714 7405", "hello@rise.capital", "Newsletter", "Instagram", "Twitter"],
      showArrow: true,
    },
  ];

  return (
    <footer className="py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and General Links */}
        <div className="mt-6">
          <img src="/images/logoblack.svg" alt="Rise Logo" />
          <ul className="mt-4 space-y-2">
            {["About Us", "Careers", "FAQs", "Contact Info", "Press", "Rise Impact"].map((link, idx) => (
              <li key={idx} className="font-dmSans text-[#2D2D2D] font-normal text-[16px]">{link}</li>
            ))}
          </ul>
        </div>

        {/* Footer Sections */}
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mt-6">{section.title}</h3>
            <ul className="mt-4 space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx} className="flex items-center font-dmSans text-[#2D2D2D] font-normal text-[16px] font-dmSans">
                  {item} 
                  {section.showArrow && (
                    <img src="/images/arrow.svg" alt="Arrow" className="ml-4 w-3 h-3" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
