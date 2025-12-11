
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  FileImage,
  FileVideo,
  FileText,
  File,
  Zap,
  Shield,
  ArrowRight,
} from "lucide-react";
import Logo from "../assets/imgaes/logo4.gif";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);

  const navLinks = [{ id: "how", label: "How it works" }];

  const handleScroll =
    (id, closeMenu = false) =>
    (e) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (closeMenu) setIsMenuOpen(false);
    };

  return (
    <>
      {/* Floating card nav centered */}
      <nav className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-6xl">
        {/* Desktop */}
        <div
          className="hidden md:flex items-center justify-between 
          px-5 py-2.5 
          bg-white/20 
          backdrop-blur-xl 
          rounded-2xl 
          border border-white/30
          shadow-md"
        >
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-11 h-11 flex items-center justify-center rounded-xl overflow-hidden">
                <img
                  src={Logo}
                  alt="Logo"
                  className="object-contain w-full h-full scale-353"
                />
              </div>
            </Link>

            {/* Future desktop links */}
            {/* <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href="#"
                  onClick={handleScroll(link.id)}
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100/60 transition-all cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div> */}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/book-now"
              className="group relative px-5 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Join Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Link>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden bg-white/60 backdrop-blur-2xl rounded-2xl border border-gray-200/60 overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-3 py-2">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl overflow-hidden">
                <img
                  src={Logo}
                  alt="Logo"
                  className="object-contain w-full h-full scale-350"
                />
              </div>
              {/* Optional brand text on mobile */}
              {/* <span className="text-sm font-semibold text-gray-900">30Mbps</span> */}
            </Link>

            <div className="flex items-center gap-2">
              <Link
                to="/book-now"
                className="px-3 py-1 bg-gray-900 text-white rounded-lg text-[11px] font-semibold shadow-sm"
              >
                Join
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-8 h-8 flex flex-col items-center justify-center gap-1.5 hover:bg-gray-100/70 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={
                    isMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }
                  }
                  className="w-4 h-0.5 bg-gray-900 rounded-full"
                />
                <motion.div
                  animate={
                    isMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }
                  }
                  className="w-4 h-0.5 bg-gray-900 rounded-full"
                />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden border-t border-gray-200/60 bg-white/70 backdrop-blur-xl"
              >
                <div className="p-3 space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href="#"
                      onClick={handleScroll(link.id, true)}
                      className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white/80 rounded-lg transition-all cursor-pointer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Tools overlay (unchanged) */}
      <AnimatePresence>
        {isToolsOpen && !isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/5 backdrop-blur-[2px] z-40 hidden md:block"
            onClick={() => setIsToolsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
