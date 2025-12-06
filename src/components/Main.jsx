// import React from "react";
// import { motion } from "framer-motion";
// import Left from "../assets/imgaes/techie10.png";
// import Right from "../assets/imgaes/techie9.png";

// import icon1 from "../assets/imgaes/sdcard.png";
// import icon2 from "../assets/imgaes/cd.png";
// import icon3 from "../assets/imgaes/jpeg.png";
// import icon4 from "../assets/imgaes/flashdrive.png";
// import icon5 from "../assets/imgaes/camera.png";
// import icon6 from "../assets/imgaes/mov.png";

// import { ExternalLink } from "lucide-react";

// const floatingIcons = [
//   { src: icon1, position: "top-65 right-[12%]", delay: 0, duration: 6 },
//   { src: icon2, position: "top-[45%] right-[22%]", delay: 1, duration: 7 },
//   { src: icon3, position: "top-[28%] left-[8%]", delay: 2, duration: 8 },
//   { src: icon4, position: "bottom-[35%] left-[18%]", delay: 0.7, duration: 7 },
//   { src: icon5, position: "bottom-[18%] left-[38%]", delay: 1.2, duration: 7.5 },
//   { src: icon6, position: "bottom-[25%] right-[32%]", delay: 2.2, duration: 8 },
// ];

// const Main = () => {
//   return (
//     <section
//       id="home"
//       className="relative w-full overflow-hidden py-20 md:py-20"
//       style={{
//         background:
//           "linear-gradient(135deg, #FBFBFB 0%, #E8F9FF 30%, #E8F9FF 65%, #E8F9FF 100%)",
//       }}
//     >
//       {floatingIcons.map((item, idx) => (
//         <motion.div
//           key={idx}
//           className={`absolute ${item.position} hidden lg:block pointer-events-none z-0`}
//           initial={{ opacity: 0, y: -20 }}
//           animate={{
//             opacity: [0.2, 0.6, 0.35],
//             y: [0, -20, 0],
//             rotate: [0, 6, -6, 0],
//           }}
//           transition={{
//             duration: item.duration,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: item.delay,
//           }}
//         >
//           <img 
//             src={item.src} 
//             alt="" 
//             className="w-60 h-50 md:w-60 md:h-60 xl:w-70 xl:h-70 object-contain" 
//           />
//         </motion.div>
//       ))}

//       <div
//         className="pointer-events-none absolute inset-0 z-0"
//         style={{
//           background:
//             "linear-gradient(to right, #E8F9FF 0%, #FBFBFB 45%, #C5BAFF 100%)",
//           opacity: 0.25,
//         }}
//       />

//       <div className="relative w-full px-0 mt-10 z-10">
//         <header className="w-full text-center px-4 mb-12 md:mb-16">
//           <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-slate-50 px-3 py-1 text-[11px] font-medium tracking-[0.18em]">
//             Introducing 30Mbps
//             <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
//           </span>

//           <h1 className="mt-4 text-7xl text-center md:text-7xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-tight ">
//             Since, data recovery is very simple,{" "}
//             <span className="bg-gradient-to-r from-violet-200 to-violet-800 bg-clip-text text-transparent mb-20 flex items-center justify-center text-6xl">
//              let us do it  for you.
//             </span>
//           </h1>

//           {/* <p className="mt-4 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
//             With 30Mbps, your old media gets a second life
//           </p> */}
// {/* 
//           <p className="mt-2 text-sm md:text-base font-medium text-slate-700 max-w-2xl mx-auto">
//             One click → Your techie comes → Your data comes back
//           </p> */}
//         </header>

//         <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
//           <a
//             href="/book-now"
//             className="inline-flex items-center justify-center 
//               w-full sm:w-auto
//               px-8 py-4 text-base font-semibold text-white
//               transition-all hover:scale-105 active:translate-y-1 active:shadow-none
//               rounded-lg"
//             style={{
//               background: "linear-gradient(90deg, #000000, #1a1a1a)",
//               border: "1px solid #000000",
//               boxShadow: "0 6px 0 #444444",
//             }}
//           >
//             {/* <ExternalLink size={20} className="m-1" /> */}
//             Recover Now
//           </a>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 items-stretch w-full gap-3 md:gap-8 mt-0 bottom-2">
//           <motion.div
//             className="w-full flex items-center justify-start overflow-hidden h-[300px] md:h-[380px] lg:h-[480px]"
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <img
//               src={Left}
//               alt=""
//               className="w-full h-full object-cover object-left"
//             />
//           </motion.div>

//           <motion.div
//             className="flex items-center justify-center px-6 text-center mb-30"
//             initial={{ opacity: 0, y: 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.05 }}
//           >
//             <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-sm mx-auto">
//               Recover your data from any old media. One booking and our techie
//               comes to your doorstep to bring your files back.
//             </p>
//           </motion.div>

//           <motion.div
//             className="w-full flex items-center justify-end overflow-hidden h-[300px] md:h-[380px] lg:h-[480px]"
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             <img
//               src={Right}
//               alt=""
//               className="w-full h-full object-cover object-right"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Main;


import React from "react";
import { motion } from "framer-motion";
import Left from "../assets/imgaes/techie10.png";
import Right from "../assets/imgaes/techie9.png";

import icon1 from "../assets/imgaes/sdcard.png";
import icon2 from "../assets/imgaes/cd.png";
import icon3 from "../assets/imgaes/jpeg.png";
import icon4 from "../assets/imgaes/flashdrive.png";
import icon5 from "../assets/imgaes/camera.png";
import icon6 from "../assets/imgaes/mov.png";

import { ArrowRight } from "lucide-react";

const floatingIcons = [
  { src: icon1, position: "top-50 right-[12%]", delay: 0, duration: 6 },
  { src: icon2, position: "top-[30%] right-[15%]", delay: 1, duration: 7 },
  { src: icon3, position: "top-[15%] left-[8%]", delay: 2, duration: 8 },
  { src: icon4, position: "bottom-[50%] left-[25%]", delay: 0.7, duration: 7 },
  { src: icon5, position: "bottom-[48%] left-[10%]", delay: 1.2, duration: 7.5 },
  { src: icon6, position: "bottom-[38%] right-[20%]", delay: 2.2, duration: 8 },
];

const Main = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden py-10 sm:py-16 md:py-20"
      style={{
        background:
          "linear-gradient(135deg, #FBFBFB 0%, #E8F9FF 30%, #E8F9FF 65%, #E8F9FF 100%)",
      }}
    >
      {floatingIcons.map((item, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${item.position} hidden lg:block pointer-events-none z-0`}
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: [0.2, 0.6, 0.35],
            y: [0, -20, 0],
            rotate: [0, 6, -6, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <img 
            src={item.src} 
            alt="" 
            className="w-40 h-40 md:w-60 md:h-60 xl:w-70 xl:h-70 object-contain" 
          />
        </motion.div>
      ))}

      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to right, #E8F9FF 0%, #FBFBFB 45%, #C5BAFF 100%)",
          opacity: 0.25,
        }}
      />

      <div className="relative w-full px-0 mt-4 sm:mt-8 md:mt-10 z-10">

        <header className="w-full text-center px-4 mb-8 sm:mb-10 md:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-slate-50 px-3 py-1 text-[10px] sm:text-[11px] font-medium tracking-[0.18em]">
            Introducing 30Mbps
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>

          <h1 className="mt-3 sm:mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-tight px-2">
            Since, data recovery is very simple,{" "}
            <span className="bg-gradient-to-r from-[#9B5DE0] to-[#9B5DE0] bg-clip-text text-transparent flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
             let us do it for you.
            </span>
          </h1>
        </header>

        <div className="mt-4 sm:mt-6 flex justify-center px-4">
          <motion.a
            href="/recover"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-flex items-center justify-center overflow-hidden cursor-pointer group rounded-lg w-full sm:w-auto"
            style={{
              background: "#222222",
              boxShadow: "0px 6px 24px 0px rgba(0, 0, 0, 0.3)",
            }}
          >
            <span 
              className="absolute right-0 h-full w-0 bg-[#9B5DE0] transition-all duration-[400ms] ease-in-out group-hover:left-0 group-hover:right-auto group-hover:w-full"
            />

            <span className="relative z-20 text-center py-4 px-8 sm:py-5 sm:px-12 md:py-6 md:px-16 text-white text-base sm:text-lg md:text-2xl font-bold tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] transition-all duration-300 ease-in-out group-hover:text-[#222222] group-hover:animate-scaleUp whitespace-nowrap">
              RECOVER NOW
            </span>
          </motion.a>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 sm:mt-6 flex flex-col items-center px-4 mb-6 sm:mb-8"
        >
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#9B5DE0] mb-3 sm:mb-4">@</div>
          
          <div className="space-y-2 sm:space-y-2">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-2">
              <span className="text-[#9B5DE0] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ">  ₹01 → </span>
              <span className="text-[#222222] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">30Mb</span>
              <span className="text-[#9B5DE0] text-sm sm:text-base md:text-lg font-semibold">(Undamaged)</span>
            </div>
             
            {/* <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-5">
              <span className="text-[#9B5DE0] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">₹30→</span>
              <span className="text-[#222222] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">01Mb</span>
              <span className="text-[#9B5DE0] text-sm sm:text-base md:text-lg font-semibold">(Damaged)</span>
            </div> */}
             <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-2">
              <span className="text-[#22222] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ">₹30 → </span>
              <span className="text-[#9B5DE0] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"> 01Mb</span>
              <span className="text-[#222222] text-sm sm:text-base md:text-lg font-semibold">(Damaged)</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-stretch w-full gap-3 sm:gap-4 md:gap-8">
 
          <motion.div
            className="w-full flex items-center justify-center md:justify-start overflow-hidden h-[250px] sm:h-[300px] md:h-[380px] lg:h-[480px]"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={Left}
              alt=""
              className="w-full h-full object-cover object-center md:object-left"
            />
          </motion.div>

          <motion.div
            className="flex flex-col items-center justify-center px-4 sm:px-6 py-6 md:py-0"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="max-w-md w-full space-y-6 sm:space-y-8 text-center">

              

              <div>
                <h3 className="text-lg sm:text-2xl md:text-3xl font-medium text-slate-900 mb-2 sm:mb-3 leading-tight">
                  Data recovery is not  a rocket science,
                </h3>
                <p className="text-lg sm:text-2xl md:text-3xl font-medium text-slate-900 leading-relaxed mb-4 sm:mb-6">
               Enroll for <span className="font-bold text-[#9B5DE0]">30Min</span> simple process  course with <span className="font-bold text-[#9B5DE0]">30Mbps</span> for <span className="font-bold text-[#9B5DE0]">FREE</span>
                </p>
   
                <a
                  href="/explore"
                  className="relative inline-flex items-center justify-center overflow-hidden cursor-pointer group rounded-lg w-full sm:w-auto"
                  style={{
                    background: "#222222",
                    boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <span 
                    className="absolute right-0 h-full w-0 bg-[#9B5DE0] transition-all duration-[400ms] ease-in-out group-hover:left-0 group-hover:right-auto group-hover:w-full"
                  />
                  
                  <span className="relative z-20 text-center py-3 px-6 sm:px-8 text-white text-xs sm:text-sm md:text-base font-bold tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-300 ease-in-out group-hover:text-[#222222] group-hover:animate-scaleUp whitespace-nowrap">
                   ENROLL NOW
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full flex items-center justify-center md:justify-end overflow-hidden h-[250px] sm:h-[300px] md:h-[380px] lg:h-[480px]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <img
              src={Right}
              alt=""
              className="w-full h-full object-cover object-center md:object-right"
            />
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleUp {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.95);
          }
          100% {
            transform: scale(1);
          }
        }
        .group:hover .animate-scaleUp {
          animation: scaleUp 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Main;
