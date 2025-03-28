'use client';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import { LiaTelegram } from 'react-icons/lia';
import { TbCloudDownload } from 'react-icons/tb';

const SocialLink = ({ href, Icon }: { href: string; Icon: any }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5 }}
    className="transition-colors text-textSecondary hover:text-secondary"
  >
    <Icon className="w-6 h-6" />
  </motion.a>
);

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
          className="text-4xl md:text-6xl font-bold mb-7 h-[80px]"
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
          className="max-w-2xl mb-10 text-textSecondary"
        >
          🔭 I'm trying ma best to be a Fullstack-developer

📚 I'm currently learning at Adama Science and technology University

✅ Intersted in graphics,web design and video editing

⚡ In my free time I would like to watch anime.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3}}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href='#projects'
          className='px-4 py-3 md:px-8 md:py-4 transition-colors border-2 rounded-[100px] border-secondary text-secondary hover:bg-secondary/10 text-sm md:text-base'
          >
            Check out my work!
          </a>
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3}}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}

        >
          <a
            href="/DanielMerga-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-center gap-2 ml-3 md:ml-5 px-4 py-3 md:px-8 md:py-4 transition-colors border-2 rounded-[100px] border-secondary text-secondary hover:bg-secondary/10 text-sm md:text-base'
          >
            <TbCloudDownload/>
            Resume
          </a>
        </motion.button>
        <motion.div className="flex text-[24px] gap-x-6 max-w-max mx-auto lg:mx-0"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      >
                               <div className="mt-12">
                                         <div className="flex justify-center space-x-8">
                                           <SocialLink href="https://github.com/da-nn-yy/" Icon={FiGithub} />
                                           <SocialLink href="https://www.linkedin.com/in/dani-boy-35552624b/" Icon={FiLinkedin} />
                                           <SocialLink href="https://t.me/g_dnl" Icon={LiaTelegram} />
                                           <SocialLink href="https://t.me/g_dnl" Icon={FiInstagram} />
                                           <SocialLink href="mailto:your.email@example.com" Icon={FiMail} />
                                         </div>
                                       </div>
                  </motion.div>

      </div>
      
    </div>
  );
};

export default Hero;
