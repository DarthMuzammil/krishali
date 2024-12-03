"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Address Section */}
          <div className="mb-4 md:mb-0">
            <h4 className="font-semibold text-lg">Our Address</h4>
            <p className="text-sm">
              Krishali Consultancy FZE<br />
              Profile Address: SAIF Zone, Sharjah<br />
              Office 2309, R2, Near Multi Trade, M6, SAIF Zone, Sharjah
            </p>
          </div>

          {/* Contact Section */}
          <div className="mb-4 md:mb-0">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <p className="text-sm">Contact: Anand</p>
         <a href="https://wa.me/971503714039">
         <p className="text-sm">Phone: +971 50 371 4039</p>
          </a>  
          </div>

        </div>
      </div>
    </footer>
  );
}