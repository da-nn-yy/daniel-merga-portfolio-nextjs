"use client";
import {motion} from "framer-motion";
import Link from "next/link";
import {useState} from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
          initial={{y:-100}}
          animate={{y:0}}
          className="fixed w-full top-0 items-center justify-between p-5 bg-[#0a192f]/90 backdrop-blur-sm z-50">
            <motion.div
              initial={{x:-100, opacity:0}}
              animate={{x:0, opacity:1}}
              className="text-2xl font-bold">
                Portfolio
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[#64ffda] transition-colors">
                  {item}
                </Link>
              ))}
            </div>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
             <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
              </svg>
            </button>

            {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-full left-0 w-full bg-[#0a192f] md:hidden">
          {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-5 py-3 hover:bg-[#112240]"
              onClick={() => setIsOpen(false)}>
              {item}
            </Link>
          ))}
        </motion.div>)}
      </motion.nav>
     )
};

export default Navbar;
