import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/nexio-logo.jpg';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-5 py-4 flex justify-between items-center bg-gradient-to-r from-white to-orange-100">
      <Link to="/">
        <img src={logo} alt="Nexio Mart" className="h-16 w-auto" />
      </Link>
      <div className="space-x-6 text-sm md:text-base">
        <Link to="/" className="text-gray-700 hover:text-orange-500 font-medium transition-colors  items-center">Home</Link>
        <Link to="/register" className="text-gray-700 hover:text-orange-500 font-medium transition-colors  items-center">Register</Link>
        <Link to="/contact" className="text-gray-700 hover:text-orange-500 font-medium transition-colors  items-center">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/nexio-logo.jpg';

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md px-5  flex justify-between items-center">
//       <Link to="/">
//         <img src={logo} alt="Nexio Mart" className="h-20 " />
//       </Link>
//       <div className="space-x-6">
//         <Link to="/" className="text-gray-700 hover:text-orange-500 font-medium">Home</Link>
//         <Link to="/register" className="text-gray-700 hover:text-orange-500 font-medium">Register</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;