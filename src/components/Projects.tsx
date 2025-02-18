'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink} from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';
import { useState } from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A web application that does something amazing. Built with React, Node.js, and MongoDB.',
    image: '/danAbout.png',
    tags: ['React', 'Next js'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
   {
    title: 'Project One',
    description: 'A web application that does something amazing. Built with React, Node.js, and MongoDB.',
    image: '/danAbout.png',
    tags: ['React', 'Next js'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
   {
    title: 'Project One',
    description: 'A web application that does something amazing. Built with React, Node.js, and MongoDB.',
    image: '/danAbout.png',
    tags: ['React', 'Next js'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
   {
    title: 'Project One',
    description: 'A web application that does something amazing. Built with React, Node.js, and MongoDB.',
    image: '/danAbout.png',
    tags: ['React', 'Next js'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
   {
    title: 'Project One',
    description: 'A web application that does something amazing. Built with React, Node.js, and MongoDB.',
    image: '/danAbout.png',
    tags: ['React', 'Next js'],
    github: 'https://github.com',
    live: 'https://example.com',
  }
  // Add more projects here
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projectsToShow = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="min-h-screen px-5 py-20 bg-gradient-to-b from-primary/5 to-transparent">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className='inline-flex items-center gap-3 mb-12'>
          <span className="text-4xl text-secondary"><FaCode/></span>
          <h2 className="text-3xl font-bold md:text-4xl">Projects</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsToShow.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-[#112240] hover:bg-[#1a2f55] transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-all duration-300" />
              </div>

              <div className="p-6">
                <p className="text-secondary text-sm mb-2">Featured Project</p>
                <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                <p className="text-textSecondary text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className='px-4 py-3 md:px-8 md:py-4 transition-colors border-2 rounded-[100px] border-secondary text-secondary hover:bg-secondary/10 text-sm md:text-base duration-300'
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Projects;
