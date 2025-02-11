import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-dark-lighter shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Code2 className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold gradient-text">MvK Devs</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/gym-manager" className="text-gray-300 hover:text-white px-3 py-2 transition-colors duration-300">
              MvK Gym Manager
            </Link>
            <Link to="/cardapio" className="text-gray-300 hover:text-white px-3 py-2 transition-colors duration-300">
              MvK Cardápio
            </Link>
            <Link to="/web-development" className="text-gray-300 hover:text-white px-3 py-2 transition-colors duration-300">
              Web Development
            </Link>
            <Link to="/social-media" className="text-gray-300 hover:text-white px-3 py-2 transition-colors duration-300">
              Social Media
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-lighter">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/gym-manager"
              className="block text-gray-300 hover:text-white px-3 py-2 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              MvK Gym Manager
            </Link>
            <Link
              to="/cardapio"
              className="block text-gray-300 hover:text-white px-3 py-2 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              MvK Cardápio
            </Link>
            <Link
              to="/web-development"
              className="block text-gray-300 hover:text-white px-3 py-2 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Web Development
            </Link>
            <Link
              to="/social-media"
              className="block text-gray-300 hover:text-white px-3 py-2 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Social Media
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}