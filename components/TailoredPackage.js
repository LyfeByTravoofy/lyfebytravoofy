// import Image from 'next/image'

// export default function TailoredPackage() {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-2xl">
//           {/* Main heading */}
//           <h2 className="text-4xl md:text-5xl font-dynapuff text-black mb-6 text-left">
//             Want a Package Tailored 
//             <br />to Vibe & Budget?
//           </h2>
          
//           {/* Subtext */}
//           <p className="text-xl text-gray-600 mb-8 text-left">
//             Handpicked travel packages that offer incredible value 
//             <br />without compromising on experience.
//           </p>
          
//           {/* WhatsApp button */}
//           <div className="flex items-center">
//             <a 
//               href="https://wa.me/yournumber" // Replace with your actual WhatsApp number
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-[#1DBF73] text-white px-6 py-3 rounded-md hover:bg-[#17a564] transition flex items-center space-x-2"
//             >
//               <span>Say hello on WhatsApp</span>
//               <img
//                 src="/arrowup.png" // Make sure this matches your arrow icon file name
//                 alt="WhatsApp"
//                 width={20}
//                 height={20}
//                 className="h-5 w-5"
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


export default function TailoredPackage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container with responsive alignment - removed mx-auto for desktop */}
        <div className="max-w-2xl text-center md:text-left md:mx-0 mx-auto">
          {/* Main heading - centered on mobile, left on desktop */}
          <h2 className="text-4xl md:text-5xl font-dynapuff text-black mb-6">
            Want a Package<br className="md:hidden" /> Tailored{" "}
            <br className="hidden md:block lg:hidden" />to Vibe{" "}
            <br className="md:hidden" />& Budget?
          </h2>
          
          {/* Subtext - centered on mobile, left on desktop */}
          <p className="text-xl text-gray-600 mb-8 px-4 md:px-0">
            Handpicked travel packages that offer <br className="hidden sm:block" /> 
            incredible value without <br className="hidden sm:block" /> 
            compromising on experience.
          </p>
          
          {/* WhatsApp button - centered on mobile, left on desktop */}
          <div className="flex justify-center md:justify-start">
            <a 
              href="https://wa.me/yournumber" // Replace with your actual WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1DBF73] text-white px-6 py-3 rounded-md hover:bg-[#17a564] transition flex items-center space-x-2"
            >
              <span>Say hello on WhatsApp</span>
              <img
                src="/arrowup.png" // Make sure this matches your arrow icon file name
                alt="WhatsApp"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}