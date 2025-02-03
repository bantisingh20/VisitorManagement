import { Box, Typography } from '@mui/material';
import { Outlet ,Link, useLocation} from 'react-router-dom';
import React, { useState } from 'react'; 

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Menu items
  const menuItems = [
    { name: 'Home', path: '/home' },
    { name: 'Customer', path: '/Customer' },
    { name: 'Contact', path: '/Contact' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="bg-gray-800 p-4">
      {/* Navbar Content */}
      <div className="flex justify-between items-center">
        {/* Left Section - Logo and VMS */}
        <div className="flex items-center space-x-2">
          <img src="/path-to-your-logo.png" alt="Logo" className="w-8 h-8" />
          <span className="text-white text-xl font-semibold">VMS</span>
        </div>

        {/* Right Section - Navbar Links */}
        <div className="flex items-center space-x-6">
          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6 text-white">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`hover:text-gray-400 ${location.pathname === item.path ? 'font-bold' : ''}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {/* Sign In Button */}
            <li>
              <Link
                to="/SignIn"
                className="group-hover:block bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full shadow-md transition-all duration-300"
              >
                Sign In
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="text-white md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Toggle visibility */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <ul className="space-y-4 p-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`block ${location.pathname === item.path ? 'font-bold' : ''}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {/* Mobile Sign In Button */}
            <li>
              <Link
                to="/SignIn"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

const VisitorHeader = () => {
  return (
    <Box className="flex justify-between items-center p-4 bg-gradient-to-r from-green-100 via-skyblue-100 to-green-100 text-white">
      <img 
        src="https://1000logos.net/wp-content/uploads/2021/05/Coca-Cola-logo.png" 
        alt="Company Logo" 
        className="h-10" 
      />
      <Typography variant="h6" className="text-xl font-bold">The Coca-Cola</Typography>
    </Box>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-4">
      <p className="text-center text-sm">
        Powered by @CompanyName since 2025
      </p>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col relative">
    {/* Header */}
    <Navbar />
    
    {/* Main Content Area */}
    <div className="flex-grow overflow-auto relative">
      {/* Apply background image only to specific section relative z-10*/}
      <div className="">
        {/* Background Image with responsiveness */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 sm:opacity-60 md:opacity-70 lg:opacity-80 xl:opacity-90"
          style={{
            backgroundImage:
              "url('https://th.bing.com/th/id/OIP.S-Kk1TOEflkGV7MAyI3L5AHaF7?w=230&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Glassmorphism-style content */}
        <div className="p-12 rounded-lg relative z-20 bg-opacity-60 backdrop-blur-sm">
          <Outlet />
        </div>
      </div>
    </div>

    {/* Footer */}
    <Footer />
  </div>
  );
};

export { Layout };
