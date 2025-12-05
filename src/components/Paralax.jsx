"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Star, Heart, Zap } from "lucide-react";
import Icon1 from "../assets/imgaes/starfinall.svg";
import Icon2 from "../assets/imgaes/cloudfinall.svg";
import Icon3 from "../assets/imgaes/rocketfinall.svg";
const Interactive = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const CloudSVG = ({ className = "" }) => (
    <svg
      viewBox="0 0 698 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className}`}
    >
      <path
        d="M697.221 240.458C697.221 240.458 697.221 240.553 697.221 240.648C697.221 251.006 688.573 259.274 678.214 259.274H19.9335C7.86457 259.274 -1.06837 248.155 1.21238 236.277C15.182 164.528 78.2827 110.36 154.118 110.36C186.333 110.36 216.268 120.148 241.071 136.969C279.749 56.3826 362.046 0.694336 457.362 0.694336C589.74 0.694336 697.126 108.08 697.126 240.458H697.221Z"
        fill="white"
      />
    </svg>
  );

  const AnimatedLetter = ({ letter, index, waveEffect = false }) => {
    const wave = waveEffect
      ? {
          y: [0, index % 2 === 0 ? -20 : 20, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }
      : {};

    return (
      <motion.span
        className="inline-block overflow-visible"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ amount: 0.3, once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.06,
        }}
        animate={wave}
      >
        {letter}
      </motion.span>
    );
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Section 1 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: useTransform(
              smoothProgress,
              [0, 0.33],
              ["#E8F9FF", "#C5BAFF"]
            ),
          }}
        />

        <motion.div
          className="absolute right-0 top-1/4 w-3/4 md:w-1/2 opacity-30"
          style={{
            x: useTransform(smoothProgress, [0, 0.33], [300, -300]),
            y: useTransform(smoothProgress, [0, 0.33], [0, -100]),
          }}
        >
          <CloudSVG />
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-4"
          style={{
            x: useTransform(smoothProgress, [0, 0.33], ["0%", "-30%"]),
          }}
        >
          {/* <motion.div
            className="absolute -top-10 -right-5 w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl"
            style={{
              backgroundColor: "#C4D9FF",
              rotate: useTransform(smoothProgress, [0, 0.33], [26, 40]),
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Sparkles className="w-10 h-10 text-gray-700" />
          </motion.div> */}
          <motion.img
            src={Icon1}
            alt="icon1"
            className="absolute -top-10 right-0 w-28 sm:w-32 object-contain"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <h2 className="text-7xl md:text-9xl font-black text-gray-900 leading-none">
            {["Y", "o", "u", "r", " ", "I", "d", "e", "a", "s"].map((l, i) => (
              <AnimatedLetter
                key={i}
                letter={l === " " ? "\u00A0" : l}
                index={i}
              />
            ))}
          </h2>
        </motion.div>
      </section>

      {/* Section 2 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: useTransform(
              smoothProgress,
              [0.33, 0.66],
              ["#C5BAFF", "#C4D9FF"]
            ),
          }}
        />

        <motion.div
          className="absolute left-0 top-1/4 w-3/4 md:w-1/2 opacity-30 scale-x-[-1]"
          style={{
            x: useTransform(smoothProgress, [0.33, 0.66], [300, -300]),
            y: useTransform(smoothProgress, [0.33, 0.66], [0, -100]),
          }}
        >
          <CloudSVG />
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-4"
          style={{
            x: useTransform(smoothProgress, [0.33, 0.66], ["30%", "-30%"]),
          }}
        >
          <motion.div
            className="absolute -bottom-20 right-0 w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl"
            style={{ backgroundColor: "#FBFBFB" }}
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Star className="w-10 h-10 text-gray-700" fill="currentColor" />
          </motion.div>
          {/* <motion.div
            className="absolute -top-12 -left-5 w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl"
            style={{
              backgroundColor: "#E8F9FF",
              rotate: useTransform(smoothProgress, [0.33, 0.66], [-15, 0]),
            }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Heart className="w-10 h-10 text-gray-700" fill="currentColor" />
          </motion.div> */}
          <motion.img
            src={Icon2}
            alt="icon1"
            className="absolute -top-12  -left-5 right-0 w-28 h-28 sm:w-32 object-contain flex items-center justify-center "
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <h2 className="text-7xl md:text-9xl font-black text-gray-900 leading-none">
            {["O", "u", "r", " ", "C", "l", "o", "u", "d"].map((l, i) => (
              <AnimatedLetter
                key={i}
                letter={l === " " ? "\u00A0" : l}
                index={i}
                waveEffect={true}
              />
            ))}
          </h2>
        </motion.div>
      </section>

      {/* Section 3 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: useTransform(
              smoothProgress,
              [0.66, 1],
              ["#C4D9FF", "#FBFBFB"]
            ),
          }}
        />

        <motion.div
          className="absolute right-0 top-1/4 w-3/4 md:w-1/2 opacity-30"
          style={{
            x: useTransform(smoothProgress, [0.66, 1], [300, -300]),
            y: useTransform(smoothProgress, [0.66, 1], [0, -100]),
          }}
        >
          <CloudSVG />
        </motion.div>

        <motion.div
          className="relative z-10 text-center px-4"
          style={{
            scale: useTransform(smoothProgress, [0.66, 1], [0.8, 1]),
          }}
        >
          <motion.div
            className="absolute -bottom-20 left-0 w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl"
            style={{ backgroundColor: "#FBFBFB" }}
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Star className="w-10 h-10 text-gray-700" fill="currentColor" />
          </motion.div>

          {/* <motion.div
            className="absolute -top-12 right-0 w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl"
            style={{ backgroundColor: "#C5BAFF" }}
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 0.5,
            }}
          >
            <Zap className="w-10 h-10 text-gray-700" fill="currentColor" />
          </motion.div> */}
          <motion.img
            src={Icon3}
            alt="icon1"
            className="absolute -top-12   right-0 w-28 h-28 sm:w-32 object-contain flex items-center justify-center "
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <h2 className="text-7xl md:text-9xl font-black text-gray-900 leading-none">
            {[
              "M",
              "a",
              "g",
              "i",
              "c",
              " ",
              "H",
              "a",
              "p",
              "p",
              "e",
              "n",
              "s",
            ].map((l, i) => (
              <AnimatedLetter
                key={i}
                letter={l === " " ? "\u00A0" : l}
                index={i}
                waveEffect={true}
              />
            ))}
          </h2>
        </motion.div>
      </section>
    </div>
  );
};

export default Interactive;
