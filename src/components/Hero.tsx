'use client';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-5 bg-primary">
      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-5 text-secondary"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-5 text-5xl font-bold md:text-7xl text-textPrimary"
        >
          Daniel Merga
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold mb-8 h-[80px]"
        >
          <div className="typewriter-container">
            <Typewriter
              options={{
                strings: [
                  'Web Developer',
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
          className="max-w-2xl mb-10 text-textSecondary"
        >
          I'm a creative professional specializing in building exceptional digital experiences.
          Currently, I'm focused on creating impactful digital content and solutions.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 transition-colors border-2 rounded border-secondary text-secondary hover:bg-secondary/10"
        >
          Check out my work!
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
