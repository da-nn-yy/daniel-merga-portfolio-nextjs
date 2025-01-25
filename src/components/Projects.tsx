'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Project One',
    description: 'A web application that does something amazing. Built with React, Node.js, and MongoDB.',
    image: '/project1.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div className="min-h-screen px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">
          <span className="text-secondary">02.</span> Some Things I've Built
        </h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative grid md:grid-cols-2 gap-4 ${
                index % 2 === 0 ? 'md:text-left' : 'md:text-right md:flex-row-reverse'
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden rounded-lg md:h-96">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 transition-all duration-300 bg-primary/80 hover:bg-transparent" />
              </div>

              {/* Project Info */}
              <div className="flex flex-col justify-center">
                <p className="mb-2 text-secondary">Featured Project</p>
                <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>
                <div className="bg-[#112240] p-6 rounded-lg mb-4">
                  <p className="text-textSecondary">{project.description}</p>
                </div>
                <div className="flex flex-wrap justify-start gap-2 mb-4 md:justify-end">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-sm text-textSecondary">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-start gap-4 md:justify-end">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub className="w-6 h-6 transition-colors hover:text-secondary" />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink className="w-6 h-6 transition-colors hover:text-secondary" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
