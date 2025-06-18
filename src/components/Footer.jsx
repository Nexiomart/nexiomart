// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-orange-300 to-orange-50 text-center py-4 text-gray-700">
//       <div className="max-w-xl mx-auto px-4">
//         <div className="mt-4 space-x-4">
//         <p className="text-sm md:text-base py-2">
//           © 2025 <span className="font-semibold">Nexio Mart</span>. All rights reserved.
//         </p>
//           <a href="/privacy" className="hover:text-orange-700  py-4">Privacy Policy</a>
//           <a href="/Terms" className="hover:text-orange-700  py-4">Terms of Service</a>
//           <a href="/contact" className="hover:text-orange-700  py-4">Contact Us</a>
//           <a href="/AboutUs" className="hover:text-orange-700  py-4">About Us</a>
//           {/* <Link to="/contact" className="text-gray-700 hover:text-orange-700 font-medium transition-colors">Contact Us</Link> */}

//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-300 to-orange-50 text-center py-6 text-gray-700">
      <div className="max-w-4xl mx-auto px-4">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm md:text-base font-medium">
          <a href="/AboutUs" className="hover:text-orange-700 transition-colors">About Us</a>
          {/* <a href="/careers" className="hover:text-orange-700 transition-colors">Careers</a> */}
          <a href="/privacy" className="hover:text-orange-700 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-orange-700 transition-colors">Terms & Conditions</a> 
          <a href="/HelpCenter" className="hover:text-orange-700 transition-colors">Help Center</a>
          <a href="/manufacturer-login" className="hover:text-orange-700 transition-colors">Manufacturer Login</a>
          <a href="/become-a-partner" className="hover:text-orange-700 transition-colors">Become a Partner</a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} <span className="font-semibold">Nexio Mart</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


