import Image from 'next/image'

export default function TailoredPackage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-dynapuff text-black mb-6 text-left">
            Want a Package Tailored 
            <br />to Vibe & Budget?
          </h2>
          
          {/* Subtext */}
          <p className="text-xl text-gray-600 mb-8 text-left">
            Handpicked travel packages that offer incredible value 
            <br />without compromising on experience.
          </p>
          
          {/* WhatsApp button */}
          <div className="flex items-center">
            <a 
              href="https://wa.me/yournumber" // Replace with your actual WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1DBF73] text-white px-6 py-3 rounded-md hover:bg-[#17a564] transition flex items-center space-x-2"
            >
              <span>Say hello on WhatsApp</span>
              <Image
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