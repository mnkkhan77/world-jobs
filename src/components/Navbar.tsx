import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Briefcase, LogOut, User, Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // State to toggle mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Ref to track the mobile menu container
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null); // For the hamburger button

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Close the mobile menu if a click happens outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close menu if the click is outside the mobile menu or hamburger button
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener for outside clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle clicking an item (e.g., Profile, Logout)
  const handleMenuItemClick = () => {
    setIsOpen(false); // Close the menu when an item is clicked
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <Briefcase className="text-blue-600" size={24} />
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                Job Portal
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle visible on large screens */}
            <ThemeToggle />

            {user.role === 'admin' && (
              <Link
                to="/admin"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Admin Dashboard
              </Link>
            )}
            <Link
              to="/profile"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <User size={18} />
              {user.name}
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>

          {/* Hamburger Icon and Theme Toggle on small screens */}
          <div className="flex items-center md:hidden">
            {/* Theme Toggle only on small screens */}
            <div className="mr-4">
              <ThemeToggle />
            </div>

            {/* Hamburger Icon */}
            <button
              ref={menuButtonRef}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden bg-white dark:bg-gray-800 shadow-lg py-4 px-6 absolute top-16 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
          >
            {user.role === 'admin' && (
              <Link
                to="/admin"
                className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={handleMenuItemClick} // Close menu on click
              >
                Admin Dashboard
              </Link>
            )}
            <Link
              to="/profile"
              className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={handleMenuItemClick} // Close menu on click
            >
              <User size={18} />
              {user.name}
            </Link>
            <button
              onClick={() => {
                handleLogout(); // Logout and close the menu
                handleMenuItemClick(); // Close menu on click
              }}
              className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
