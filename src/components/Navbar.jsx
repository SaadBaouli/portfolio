import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: '/about', label: 'À propos' },
    { path: '/projects', label: 'Projets' },
    { path: '/skills', label: 'Compétences' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-primary text-white shadow p-4 px-6 md:px-14 flex justify-between items-center relative">
      
      <Link to="/" onClick={() => setIsOpen(false)}>
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold text-white hover:text-secondary transition cursor-pointer"
        >
          Dev.
        </motion.h1>
      </Link>

      
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      
      <ul className="hidden md:flex gap-6 text-sm font-medium ml-10">
        {links.map(({ path, label }) => {
          const isActive = location.pathname === path;
          return (
            <li key={path}>
              <Link
                to={path}
                className={`relative inline-block text-white transition hover:text-secondary
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-secondary after:transition-all after:duration-300 hover:after:w-full
                  ${isActive ? 'after:w-full' : 'after:w-0'}`}
                style={{ position: 'relative', textDecoration: 'none' }}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>

      
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-primary text-white flex flex-col gap-4 p-6 md:hidden z-50 shadow-md"
          >
            {links.map(({ path, label }) => {
              const isActive = location.pathname === path;
              return (
                <li key={path}>
                  <Link
                    to={path}
                    className={`relative block text-white text-lg transition hover:text-secondary
                      after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-secondary after:transition-all after:duration-300 hover:after:w-full
                      ${isActive ? 'after:w-full' : 'after:w-0'}`}
                    style={{ position: 'relative', textDecoration: 'none' }}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
