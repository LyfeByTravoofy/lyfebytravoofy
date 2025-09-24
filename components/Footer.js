export default function Footer() {
  return (
    <footer className="bg-white text-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Logo and description */}
          <div>
            <div className="mb-6">
              <img 
                src="/logo.png" 
                alt="Lyfe Travels Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-600 text-lg max-w-md">
              Making budget-friendly travel accessible to everyone. 
              Discover amazing destinations without breaking the bank 
              with our AI-powered travel assistant.
            </p>
          </div>

          {/* Right side - Contact information */}
          <div className="md:flex md:justify-end">
            <div className="md:text-right">
              <h4 className="text-lg font-semibold mb-4 md:text-left">Contact Us</h4>
              <div className="space-y-3">
                {/* Location */}
                <div className="flex items-start space-x-3 md:justify-start">
                  <img 
                    src="/location-icon.png" 
                    alt="Location" 
                    className="w-5 h-5 mt-1 flex-shrink-0"
                  />
                  <p className="text-gray-600 text-left">
                    12A Olusegun Aina Street,<br />
                    Parkview Estate, Ikoyi, Lagos, Nigeria
                  </p>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3 md:justify-start">
                  <img 
                    src="/mail-icon.png" 
                    alt="Email" 
                    className="w-5 h-5 flex-shrink-0"
                  />
                  <p className="text-gray-600 text-left">hello@lifebytravoofy.com</p>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3 md:justify-start">
                  <img 
                    src="/phone-icon.png" 
                    alt="Phone" 
                    className="w-5 h-5 flex-shrink-0"
                  />
                  <p className="text-gray-600 text-left">+1 (555) 123-4567</p>
                </div>
              </div>

              {/* Social media icons */}
              <div className="flex space-x-4 mt-6 md:justify-start">
                <a href="https://www.facebook.com/travoofy" className="text-gray-600 hover:text-[#FFBF4C] transition">
                  <img src="/Facebook.png" alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="https://x.com/travoofy" className="text-gray-600 hover:text-[#FFBF4C] transition">
                  <img src="/Twitter.png" alt="Twitter" className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/lyfebytravoofy?igsh=amd1em83dTVxaXNp&utm_source=qr" className="text-gray-600 hover:text-[#FFBF4C] transition">
                  <img src="/Instagram.png" alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#FFBF4C] transition">
                  <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#FFBF4C] transition">
                  <img src="/Youtube.png" alt="YouTube" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider line */}
        <div className="border-t border-gray-300 mt-8 pt-8">
          <p className="text-gray-600 text-sm text-center md:text-left">
            Copyright © 2025 Lifebytravoofy | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}