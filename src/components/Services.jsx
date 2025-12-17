import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Wrench, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom"; 
import img1 from "../assets/imgaes/smartpod.jpeg"
import img2 from "../assets/imgaes/Kitchen.jpeg"
import img3 from "../assets/imgaes/toys.jpeg"
import life1 from "../assets/imgaes/lifestyle.jpeg"
import life2 from "../assets/imgaes/life2.jpeg"
import life3 from "../assets/imgaes/Hospital.jpeg"
import office1 from "../assets/imgaes/office1.jpeg"
import office2 from "../assets/imgaes/office2.jpeg"
import office3 from "../assets/imgaes/office3.jpeg"
// Static Data - Moved outside component to prevent re-creation on every render
const COLUMNS_DATA = [
  {
    id: 1,
    title: "Smart Home Technology",
    icon: <Smartphone className="w-6 h-6 text-blue-600" />,
    images: [
      img1,
      img2,
      img3
    ], 
    btnText: "BOOK NOW", 
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    btnSlideColor: "bg-[#9B5DE0]", 
  },
  {
    id: 2,
    title: "Smart Life Technology",
    icon: <Wrench className="w-6 h-6 text-purple-600" />,
    images: [
     life1,
     life2,
     life3
    ], 
    btnText: "BOOK NOW", 
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
    btnSlideColor: "bg-[#9B5DE0]", 
  },
  {
    id: 3,
    title: "Smart Office Technology",
    icon: <RefreshCw className="w-6 h-6 text-emerald-600" />,
    images: [
      office1,
      office2,
      office3
    ], 
    btnText: "BOOK NOW", 
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
    btnSlideColor: "bg-[#9B5DE0]", 
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden py-10 sm:py-16 md:py-24 bg-white"
    > 
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: "linear-gradient(to right, #FBFBFB 0%, #FFFFFF 50%, #FBFBFB 100%)",
          opacity: 0.5,
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        <header className="w-full text-center px-4 mb-12 sm:mb-16">
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
            Let's Welcome the <span className="text-[#9B5DE0]">30Mbps</span> technology at your doorstep.
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COLUMNS_DATA.map((col, index) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`group relative rounded-[2.5rem] border ${col.borderColor} overflow-hidden flex flex-col h-full shadow-xl hover:shadow-2xl transition-all duration-500 bg-white hover:-translate-y-2`}
            >

              <div className={`p-7 text-center ${col.bgColor} bg-opacity-50`}>
                <h3 className="text-2xl font-bold text-gray-900 bottom-2">{col.title}</h3>
              </div>

              <div className={`flex-1 flex flex-col items-center justify-center py-8 px-6 gap-6 ${col.bgColor} bg-opacity-20`}>
                {col.images.map((imgSrc, i) => (
                  <motion.div 
                    key={i} 
                    className={`relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-[6px] border-white  
                      ${i === 0 
                        ? '-rotate-6 translate-y-4 z-20' 
                        : i === 1 
                        ? 'rotate-3 -translate-y-4 z-10 opacity-90 scale-95'
                        : 'rotate-6 translate-y-4 z-10 opacity-80 scale-95 bottom-13'
                      }
                    `}
                    whileHover={{ scale: 1.05, rotate: 0, zIndex: 30, transition: { duration: 0.3 } }}
                  >
                    <img 
                      src={imgSrc} 
                      alt={`${col.title} preview ${i + 1}`} 
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>

              <div className="p-6 bg-white border-t border-gray-100 mt-auto">
                <Link 
                  to="/" 
                  className="relative inline-flex items-center justify-center overflow-hidden cursor-pointer group rounded-xl w-full bg-[#222222] shadow-lg"
                >
                  <span className={`absolute right-0 h-full w-0 ${col.btnSlideColor} transition-all duration-[400ms] ease-in-out group-hover:left-0 group-hover:right-auto group-hover:w-full`} />
                  
                  <span className="relative z-20 flex items-center gap-2 py-4 px-6 text-white text-sm font-bold tracking-widest uppercase transition-all duration-300 group-hover:text-white">
                    {col.btnText} 
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
