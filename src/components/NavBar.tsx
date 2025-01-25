'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 w-full px-4 py-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center justify-between max-w-6xl p-6 px-[50px] mx-auto backdrop-blur-md
                   bg-secondary/10 rounded-[1000px] border-teal-300
                   [background:linear-gradient(#0a192f,#0a192f)_padding-box,
                   linear-gradient(to_right,#64ffda,#9f7aea,#ec4899)_border-box]"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-2xl font-bold text-secondary"
        >
          Portfolio
        </motion.div>

        {/* Desktop Menu */}
        <div className="items-center hidden space-x-8 md:flex">
          {['About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="relative transition-colors text-textPrimary hover:text-secondary group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-secondary transition-all duration-300
                               group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="transition-colors md:hidden text-textPrimary hover:text-secondary"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 right-0 p-4 mx-4 mt-2 top-full backdrop-blur-md
                      bg-primary/80 rounded-xl border border-transparent
                      [background:linear-gradient(#0a192f,#0a192f)_padding-box,
                      linear-gradient(to_right,#64ffda,#9f7aea,#ec4899)_border-box]"
          >
            {['About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
              <motion.div
                key={item}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 transition-colors text-textPrimary hover:text-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="mr-2 text-secondary">{(index + 1).toString().padStart(2, '0')}.</span>
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;
