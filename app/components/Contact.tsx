"use client";

import { RainbowButton } from "@/components/magicui/rainbow-button";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-3">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          
          <motion.div 
            className="inline-block mt-2 group relative"
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r  rounded-xl opacity-75 group-hover:opacity-100 blur transition duration-200 group-hover:duration-500"></div>
            <Link 
              href="mailto:piyushsonawane2023@gmail.com"
              className="relative flex items-center px-8 py-4  font-medium rounded-lg transition-all duration-200 group-hover:bg-opacity-90 dark:group-hover:bg-opacity-90"
            >
             
              <RainbowButton>piyushsonawane2023@gmail.com
              {/* <Mail className="w-5 h-5 mr-3 text-blue-500 dark:text-blue-400" /> */}
              {/* <svg 
                className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg> */}
              </RainbowButton>
              
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
