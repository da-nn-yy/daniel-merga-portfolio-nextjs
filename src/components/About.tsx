'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GoPersonFill } from 'react-icons/go';

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-5 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid items-center gap-8 md:grid-cols-2"
        >
         {/* Dan about text */}
          <div className="order-2 md:order-1">
            <div className='inline-flex gap-3'>
                <span className="text-4xl text-secondary"><GoPersonFill/></span>
                <h2 className="flex mb-4 text-3xl font-bold md:text-4xl">About Me</h2>
            </div>
            <div className="space-y-4 text-textSecondary">
              <p>
 I am Daniel Merga, a dedicated Computer Science and Engineering student at Adama Science and
 Technology University (ASTU), driven by a passion for technology and innovation. Currently seeking
 internship opportunities to broaden my skill set and make tangible contributions to real-world projects.
 Committed to continuous learning and personal growth, I am enthusiastic about exploring new
 technologies and methodologies in the field of computer science.
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at Web developing,Graphics and Video.
                My main focus these days is building accessible, inclusive products and digital
                experiences for a variety of clients.
              </p>
              <p>Here are a few technologies I've been working with recently:</p>
              <ul className="grid grid-cols-2 gap-2 list-none">
                {['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'].map((tech) => (
                  <li key={tech} className="flex items-center">
                    <span className="mr-2 text-secondary">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 mx-auto md:order-2">
            <div className="relative w-60 h-60 md:w-80 md:h-80">
              <div className="absolute inset-0 transform translate-x-5 translate-y-5 rounded-lg bg-secondary/20" />
              <div className="absolute inset-0 overflow-hidden border-2 rounded-lg bg-primary border-secondary">
                <Image
                  src="/danAbout.png"
                  alt="Profile"
                  fill
                  className="duration-300 w-[100px] trdansition-all hover:filter hover:grayscale"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
