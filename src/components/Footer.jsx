import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-300 to-orange-50 text-center py-4 text-gray-700">
      <div className="max-w-xl mx-auto px-4">
        <div className="mt-4 space-x-4">
        <p className="text-sm md:text-base py-2">
          © 2025 <span className="font-semibold">Nexio Mart</span>. All rights reserved.
        </p>
          <a href="#" className="hover:text-orange-700  py-4">Privacy Policy</a>
          <a href="#" className="hover:text-orange-700  py-4">Terms of Service</a>
          <a href="/contact" className="hover:text-orange-700  py-4">Contact Us</a>
          {/* <Link to="/contact" className="text-gray-700 hover:text-orange-700 font-medium transition-colors">Contact Us</Link> */}

        </div>
      </div>
    </footer>
  );
};

export default Footer;



// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 text-center text-sm py-4 text-gray-500">
//       © 2025 Nexio Mart. All rights reserved.
//     </footer>
//   );
// };

// export default Footer;