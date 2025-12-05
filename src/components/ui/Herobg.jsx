import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import cloudImg from "../../assets/cloud.png";

const HeroBackground = () => {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;

  const leftX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? -200 : -400]
  );
  const leftOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.7]);

  const rightX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? 200 : 400]
  );
  const rightOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.7]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #E8F9FF 0%, #FBFBFB 50%, #C5BAFF 100%)",
          opacity: 0.3,
        }}
      />

      <motion.div
        style={{ x: leftX, opacity: leftOpacity }}
        className="absolute bottom-0 left-1/2 -translate-x-full w-[60%] sm:w-[45%] h-[180px] sm:h-[220px]"
      >
        <img
          src={cloudImg}
          alt="left cloud"
          className="w-full h-full object-contain object-bottom"
        />
      </motion.div>

      <motion.div
        style={{ x: rightX, opacity: rightOpacity }}
        className="absolute bottom-0 left-1/2 w-[60%] sm:w-[45%] h-[180px] sm:h-[220px]"
      >
        <img
          src={cloudImg}
          alt="right cloud"
          className="w-full h-full object-contain object-bottom scale-x-[-1]"
        />
      </motion.div>
    </div>
  );
};

export default HeroBackground;
