import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#016630] bg-[url(assets/silhuette-1-black.webp)] bg-no-repeat bg-cover bg-center text-white py-32 mt-20">
      <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Brand Info */}
        <div>
          <h4 className="text-2xl font-bold mb-3 tracking-wide">GreenLeaf Garden Care</h4>
          <p className="text-sm text-gray-200 leading-relaxed">
            Bringing nature closer to you. <br />
            Designed for garden lovers.
          </p>
          <p className="text-xs mt-4 text-gray-300">&copy; {new Date().getFullYear()} GreenLeaf. All rights reserved.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="text-xl font-semibold mb-3">Contact Us</h5>
          <p className="text-sm leading-relaxed">
            Email: <a href="mailto:info@greenleaf.com" className="underline hover:text-[#cfd9cf]">info@greenleaf.com</a><br />
            Phone: <a href="tel:+1234567890" className="underline hover:text-[#cfd9cf]">+1 (234) 567-890</a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h5 className="text-xl font-semibold mb-3">Follow Us</h5>
          <div className="flex justify-center md:justify-start gap-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfd9cf] transition-colors duration-200">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfd9cf] transition-colors duration-200">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#cfd9cf] transition-colors duration-200">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
