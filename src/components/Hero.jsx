"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroBackground from "../components/ui/Herobg";

// Import your custom icons
import icon1 from "../assets/imgaes/apifinall.svg";
import icon2 from "../assets/imgaes/cloudfinall.svg";
import icon3 from "../assets/imgaes/lightningfinall.svg";
import icon4 from "../assets/imgaes/rocketfinall.svg";
import icon5 from "../assets/imgaes/starfinall.svg";
import icon6 from "../assets/imgaes/wififinall.svg";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const phrases = [
  {
    text: "Extract",
    icons: [icon1, icon2, icon3],
  },
  {
    text: "Compress",
    icons: [icon4, icon5, icon6],
  },
  {
    text: "Storage",
    icons: [icon1, icon3, icon5],
  },
  {
    text: "At 30Mbps",
    icons: [icon1, icon3, icon5],
  },
];

// Custom icons for floating
const floatingIcons = [
  { src: icon1, position: "top-20 right-[10%]", delay: 0, duration: 6 },
  { src: icon2, position: "bottom-[20%] right-[15%]", delay: 1, duration: 7 },
  { src: icon3, position: "top-[30%] left-[8%]", delay: 2, duration: 8 },
  { src: icon4, position: "bottom-[35%] left-[12%]", delay: 0.5, duration: 7 },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const current = phrases[index];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-6 py-10 bg-[#FBFBFB]">
      <HeroBackground />

      {floatingIcons.map((item, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${item.position} hidden lg:block pointer-events-none`}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <div className="w-24 h-24 xl:w-28 xl:h-28 rounded-full shadow-lg bg-white flex items-center justify-center ">
            <img
              src={item.src}
              alt={`Floating icon ${idx + 1}`}
              className="object-contain scale-[2.7]"
            />
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
        >
          <div className="flex items-center justify-center flex-wrap gap-3 mb-3">
            <div className="relative inline-block min-w-[160px] sm:min-w-[220px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={current.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-bold"
                >
                  {current.text}
                </motion.span>
              </AnimatePresence>
              <span className="invisible whitespace-nowrap">Designers</span>
            </div>

            <div className="flex items-center ">
              <AnimatePresence mode="wait">
                {current.icons.map((iconSrc, i) => (
                  <motion.div
                    key={`${index}-${i}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="w-24 h-24 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-full shadow-lg bg-white flex items-center justify-center "
                  >
                    <img
                      src={iconSrc}
                      alt={`Icon ${i + 1}`}
                      className="object-contain scale-[2] "
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <span className="text-gray-800">don't have</span>
          </div>

          <div>to start from scratch</div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-8"
        >
          Your all-in-one cloud & compression workspace to upload, shrink,
          manage, and share files—without losing quality.
        </motion.p>

        {/* Animated Link as button */}
        <MotionLink
          to="/book-now"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="relative px-8 py-3 rounded-full text-base font-semibold text-white bg-gray-900 hover:bg-gray-800 shadow-lg overflow-hidden inline-flex items-center justify-center"
        >
          <motion.div
            className="absolute inset-0"
            animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
              backgroundSize: "200% 100%",
            }}
          />

          <AnimatePresence mode="wait">
            <motion.span
              key={isHovered ? "hovered" : "default"}
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: -90, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 flex items-center justify-center gap-2"
            >
              {isHovered ? (
                <>
                  <span>Start Now</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              ) : (
                "Book Now"
              )}
            </motion.span>
          </AnimatePresence>
        </MotionLink>
      </div>
    </section>
  );
};

export default Hero;
