// import React from 'react';

// const SaveFuture:React.FC = () => {
//   return (
//     <section className="py-20 bg-white">
//       <div className="text-center">
//         <h2 className="text-3xl font-bold">Save for your future</h2>
//         <p>We help you save for your future, your kids, or your retirement.</p>
//         <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg">Start Saving</button>
//         <img src="/path/to/app-screenshot.png" alt="App" className="mx-auto mt-8" />
//       </div>
//     </section>
//   );
// };

// export default SaveFuture;

// import React from 'react';

// const SaveFuture: React.FC = () => {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between bg-white">
//       {/* Left side - Card with Image */}
//       <div className="relative w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
//         <div className="w-[300px] h-[400px] relative">
//           {/* Background phone image */}
//           <img 
//             src="/images/phone.svg" 
//             alt="Phone" 
//             className="absolute inset-0 w-full h-full object-contain"
//           />
//           {/* Card overlaid on phone */}
//           <div className="absolute top-16 left-6  right-6">
//             <img 
//               src="/images/buildwealth.svg" 
//               alt="Build Wealth" 
          
//             />
         
//           </div>
//         </div>
//       </div>

//       {/* Right side - Text and Button */}
//       <div className="w-full md:w-1/2 text-left">
//         <h2 className="text-lg md:text-2xl font-medium text-gray-500">The Rise App</h2>
//         <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
//           Save for your <span className="text-purple-500">future</span>
//         </h1>
//         <p className="text-gray-600 mb-6">
//           With Rise, you achieve your financial goals faster. Save for school, your home, vacations, your children's future, and more.
//         </p>
//         <button className="px-6 py-3 bg-teal-500 text-white rounded-lg text-lg font-medium shadow hover:bg-teal-600">
//           Start Saving
//         </button>
//       </div>
//     </section>
//   );
// };

// export default SaveFuture;

// import React from 'react';

// const SaveFuture: React.FC = () => {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between bg-white px-8 ">
//       {/* Left side - Card with Image */}
//       <div className="relative w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
//         <div className="w-[320px] h-[420px] relative">
//           {/* Background phone image */}
//           <img 
//             src="/images/phone.svg" 
//             alt="Phone" 
//             className="absolute inset-0 w-full h-full object-contain"
//           />
//           {/* Card overlaid on phone */}
//           <div className="absolute top-16 left-6 right-6">
//             <img 
//               src="/images/buildwealth.svg" 
//               alt="Build Wealth" 
//             />
//           </div>
//         </div>
//       </div>

//       {/* Right side - Text and Button */}
//       <div className="w-full md:w-1/2 text-left md:ml-24">
//         <h2 className="text-lg md:text-2xl font-medium text-gray-500">The Rise App</h2>
//         <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
//           Save for your <span className="text-purple-500">future</span>
//         </h1>
//         <p className="text-gray-600 mb-6">
//           With Rise, you achieve your financial goals faster. Save for school, your home, vacations, your children's future, and more.
//         </p>
//         <button className="px-6 py-3 bg-teal-500 text-white rounded-lg text-lg font-medium shadow hover:bg-teal-600">
//           Start Saving
//         </button>
//       </div>
//     </section>
//   );
// };

// export default SaveFuture;
import React from 'react';

const SaveFuture: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white py-10">
     
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0 md:-ml-16"> {/* Applied negative margin */}
        <div className="w-[300px] h-[400px] relative">
      
          <img 
            src="/images/phone.svg" 
            alt="Phone" 
            className="absolute inset-0 w-full h-full object-contain"
          />
         
          <div className="absolute top-16 left-6 right-6">
            <img 
              src="/images/buildwealth.svg" 
              alt="Build Wealth" 
            />
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 text-left md:ml-16">
        <h2 className="text-lg md:text-2xl font-medium text-gray-500">The Rise App</h2>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Save for your <span className="text-purple-500">future</span>
        </h1>
        <p className="text-gray-600 mb-6">
          With Rise, you achieve your financial goals faster. Save for school, your home, vacations, your children's future, and more.
        </p>
        <button className="px-6 py-3 bg-teal-500 text-white rounded-lg text-lg font-medium shadow hover:bg-teal-600">
          Start Saving
        </button>
      </div>
    </section>
  );
};

export default SaveFuture;
