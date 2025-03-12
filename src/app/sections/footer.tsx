"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CiLinkedin } from "react-icons/ci";
import { FiFacebook, FiInstagram, FiMail, FiMapPin, FiPhone, FiTwitter } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <footer className="w-full bg-[#F5F5F5] mt-12 py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Company</h3>
            <motion.div
              className="h-1 w-10 bg-primary rounded"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            />
            <p className="text-gray-600 max-w-xs">
              We&apos;re dedicated to providing innovative solutions that help businesses thrive in the digital
              landscape.
            </p>
            <div className="flex space-x-4">
              <motion.a href="#" whileHover={{ y: -5, color: "#4267B2" }} className="text-gray-500 hover:text-gray-700">
                <FiFacebook size={20} />
                <span className="sr-only">Facebook</span>
              </motion.a>
              <motion.a href="#" whileHover={{ y: -5, color: "#1DA1F2" }} className="text-gray-500 hover:text-gray-700">
                <FiTwitter size={20} />
                <span className="sr-only">Twitter</span>
              </motion.a>
              <motion.a href="#" whileHover={{ y: -5, color: "#E1306C" }} className="text-gray-500 hover:text-gray-700">
                <FiInstagram size={20} />
                <span className="sr-only">Instagram</span>
              </motion.a>
              <motion.a href="#" whileHover={{ y: -5, color: "#0077B5" }} className="text-gray-500 hover:text-gray-700">
                <CiLinkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <motion.div
              className="h-1 w-10 bg-primary rounded"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            />
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio", "Blog", "Careers"].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Services</h3>
            <motion.div
              className="h-1 w-10 bg-primary rounded"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            />
            <ul className="space-y-2">
              {[
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "Digital Marketing",
                "Cloud Services",
                "Consulting",
              ].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link href="#" className="text-gray-600 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
            <motion.div
              className="h-1 w-10 bg-primary rounded"
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            />
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiMapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-600">123 Business Avenue, Suite 100, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-primary flex-shrink-0" size={18} />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-primary flex-shrink-0" size={18} />
                <span className="text-gray-600">contact@wj.com</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px w-full bg-gray-200 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <p className="text-gray-600 text-sm">© {currentYear} WILLIAM JANSSEN. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-600 hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-primary">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-primary">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
