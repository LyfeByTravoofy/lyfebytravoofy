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
<a href="#" className="text-gray-600 hover:text-[#FFBF4C] transition flex items-center justify-center">
  <svg 
    className="w-6 h-6 scale-75"  // Scale down to match PNG size
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M19.67 8.14C19.58 7.84 19.41 7.57 19.18 7.35C18.95 7.13 18.67 6.97 18.36 6.89C17.17 6.6 12 6.6 12 6.6C12 6.6 6.83 6.6 5.64 6.89C5.33 6.97 5.05 7.13 4.82 7.35C4.59 7.57 4.42 7.84 4.33 8.14C4.15 8.86 4.05 9.6 4.05 10.34C4.05 11.08 4.15 11.82 4.33 12.54C4.42 12.84 4.59 13.11 4.82 13.33C5.05 13.55 5.33 13.71 5.64 13.79C6.83 14.08 12 14.08 12 14.08C12 14.08 17.17 14.08 18.36 13.79C18.67 13.71 18.95 13.55 19.18 13.33C19.41 13.11 19.58 12.84 19.67 12.54C19.85 11.82 19.95 11.08 19.95 10.34C19.95 9.6 19.85 8.86 19.67 8.14Z" 
      fill="#543B13"
    />
    <path 
      d="M10.61 12.43L13.19 10.34L10.61 8.25V12.43Z" 
      fill="white"
    />
  </svg>
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