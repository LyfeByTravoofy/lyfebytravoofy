// export default function Hero() {
//   return (
//     <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row items-center">
//           {/* Text content on the left */}
//           <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
//             <h1 className="text-4xl md:text-5xl font-dynapuff text-black mb-6 text-left">
//               We Have a Destination<br />for Every Budget
//             </h1>
//             <p className="text-xl text-gray-600 mb-10 max-w-xl text-left">
//               Discover amazing destinations without breaking the bank. 
//               Get personalized budget estimates and plan your perfect adventure 
//               with our AI-powered travel assistant.
//             </p>
            
//             {/* New button */}
//             <button className="bg-[#FFBF4C] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#FFB732] transition flex items-center space-x-2 text-base">
//               <span>Try budget AI Assistant</span>
//               <img 
//                 src="/arrowup.png" 
//                 alt="Arrow up" 
//                 className="w-5 h-5"
//               />
//             </button>
//           </div>

//           {/* Image on the right */}
//           <div className="md:w-1/2 flex justify-center">
//             <img 
//               src="/heroimage.png" 
//               alt="Travel Adventure" 
//               className="w-full max-w-[510px] h-auto max-h-[391px] object-contain"
//               width={510}
//               height={391}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text content - centered on mobile & tablet, left-aligned on desktop */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10 text-center lg:text-left">
{/* Mobile & Tablet Header */}
<h1 className="text-4xl font-dynapuff text-black mb-6 lg:hidden">
  We Have a<br />
  Destination for<br />
  Every Budget
</h1>
            
            {/* Desktop Header */}
            <h1 className="text-5xl font-dynapuff text-black mb-6 hidden lg:block">
              We Have a Destination<br />for Every Budget
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0">
              Discover amazing destinations without breaking the bank. 
              Get personalized budget estimates and plan your perfect adventure 
              with our AI-powered travel assistant.
            </p>
            
            {/* Button - centered on mobile & tablet, left-aligned on desktop */}
            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#FFBF4C] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#FFB732] transition flex items-center space-x-2 text-base">
                <span>Try budget AI Assistant</span>
                <img 
                  src="/arrowup.png" 
                  alt="Arrow up" 
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>

          {/* Image - centered on mobile & tablet, normal on desktop */}
          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <img 
              src="/heroimage.png" 
              alt="Travel Adventure" 
              className="w-full max-w-[510px] h-auto max-h-[300px] md:max-h-[350px] lg:max-h-[391px] object-contain"
              width={510}
              height={391}
            />
          </div>
        </div>
      </div>
    </section>
  )
}