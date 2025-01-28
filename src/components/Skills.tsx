'use client';
import { motion } from 'framer-motion';
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiFigma,
  SiAdobeaftereffects,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiPython,
  SiGit,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { SiHyperskill } from 'react-icons/si';

const skills = [
  {
    category: "Design",
    tools: [
      { name: "Illustrator", icon: SiAdobeillustrator, color: "text-[#FF9A00]" },
      { name: "Photoshop", icon: SiAdobephotoshop, color: "text-[#31A8FF]" },
      { name: "Adobe XD", icon: SiAdobexd, color: "text-[#FF61F6]" },
      { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
      { name: "After Effects", icon: SiAdobeaftereffects, color: "text-[#9999FF]" },
    ]
  },
  {
    category: "Development",
    tools: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "VS Code", icon: VscVscode, color: "text-[#007ACC]" },
    ]
  }
];

const SkillCard = ({ name, Icon, color }: { name: string; Icon: any; color: string }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-[#112240] p-6 rounded-lg text-center group cursor-pointer"
  >
    <Icon className={`w-12 h-12 mx-auto mb-4 ${color} group-hover:scale-110 transition-transform`} />
    <h3 className="text-lg font-medium transition-colors text-textPrimary group-hover:text-secondary">{name}</h3>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="min-h-screen px-5 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className='inline-flex gap-3'>
              <span className="text-4xl text-secondary"><SiHyperskill /></span>
              <h2 className="flex mb-4 text-3xl font-bold md:text-4xl">Skills</h2>
        </div>

        {skills.map((skillCategory, index) => (
          <div key={skillCategory.category} className="mb-12">
            <h3 className="mb-6 text-2xl font-bold text-textPrimary">
              {skillCategory.category}
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {skillCategory.tools.map((tool, toolIndex) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: toolIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillCard name={tool.name} Icon={tool.icon} color={tool.color} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
