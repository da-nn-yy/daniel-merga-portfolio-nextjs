'use client';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import { LiaTelegram } from 'react-icons/lia';



const SocialLink = ({ href, Icon }: { href: string; Icon: any }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5 }}
    className="transition-colors text-textSecondary hover:text-secondary"
  >
    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
  </motion.a>
);

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="w-full max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-3 sm:mb-5 text-secondary text-sm sm:text-base"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-3 sm:mb-5 text-4xl sm:text-5xl lg:text-7xl font-bold text-textPrimary"
        >
          Daniel Merga
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-5 sm:mb-7 h-[60px] sm:h-[80px]"
        >
          <div className="typewriter-container">
            <Typewriter
              options={{
                strings: [
                  'Frontend developer',
                  'Graphics Designer',
                  'UI/UX Designer',
                  'Video Editor',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 50,
              }}
            />
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mb-6 sm:mb-10 text-sm sm:text-base text-textSecondary"
        >
          🔭 I'm trying ma best to be a Fullstack-developer<br />
          📚 I'm currently learning at Adama Science and technology University<br />
          ✅ Intersted in graphics, web design and video editing<br />
          ⚡ In my free time I would like to watch anime.
        </motion.p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-8 sm:mb-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 transition-colors border-2 rounded-[100px] border-secondary text-secondary hover:bg-secondary/10"
          >
            <a href='#projects'>Check out my work!</a>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 transition-colors border-2 rounded-[100px] border-secondary text-secondary hover:bg-secondary/10"
          >
            <a
              href="/Daniel-Merga-CV.pdf"
              download="Daniel-Merga-CV.pdf"
              className="flex items-center justify-center gap-2"
            >
              Download CV
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </motion.button>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center sm:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex gap-4 sm:gap-6">
            <SocialLink href="https://github.com/da-nn-yy/" Icon={FiGithub} />
            <SocialLink href="https://www.linkedin.com/in/dani-boy-35552624b/" Icon={FiLinkedin} />
            <SocialLink href="https://t.me/g_dnl" Icon={LiaTelegram} />
            <SocialLink href="https://t.me/g_dnl" Icon={FiInstagram} />
            <SocialLink href="mailto:your.email@example.com" Icon={FiMail} />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
