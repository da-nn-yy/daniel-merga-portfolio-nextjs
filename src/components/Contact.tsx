'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { LiaTelegram } from 'react-icons/lia';
import {BsChatFill} from 'react-icons/bs'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen px-5 py-20">
      <Toaster position="bottom-right" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-12 text-center">
          <div className='inline-flex gap-3'>
              <span className="text-4xl text-secondary"><BsChatFill/></span>
              <h2 className="flex mb-4 text-3xl font-bold md:text-4xl">Contact </h2>
          </div>
          <h3 className="mb-4 text-4xl font-bold md:text-5xl">Get In Touch</h3>
          <p className="max-w-xl mx-auto mb-8 text-textSecondary">
            I'm currently looking for new opportunities. Send me a message and I'll try my best to get back to you!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#112240] border border-textSecondary/20 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-[#112240] border border-textSecondary/20 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-2 rounded-lg bg-[#112240] border border-textSecondary/20 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors resize-none"
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-8 py-4 transition-colors border-2 rounded-lg border-secondary text-secondary hover:bg-secondary/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>

        <div className="mt-12">
          <div className="flex justify-center space-x-8">
            <SocialLink href="https://github.com/da-nn-yy/" Icon={FiGithub} />
            <SocialLink href="https://www.linkedin.com/in/dani-boy-35552624b/" Icon={FiLinkedin} />
            <SocialLink href="https://t.me/g_dnl" Icon={LiaTelegram} />
            <SocialLink href="https://www.instagram.com/da_nnn_yyy/?__pwa=1#" Icon={FiInstagram} />
            <SocialLink href="mailto:your.email@example.com" Icon={FiMail} />
          </div>
        </div>

        <p className="mt-16 text-sm text-center text-textSecondary">
          Built with Next.js & Tailwind CSS
        </p>
      </motion.div>
    </div>
  );
};

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

export default Contact;
