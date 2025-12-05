import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  Settings2,
  Download,
  FileVideo,
  FileImage,
  FileText,
} from "lucide-react";
import { useState } from "react";

const HowItWorks = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section 
    id="how"
      className="relative py-20 px-4 overflow-hidden"
      style={{ backgroundColor: "#FBFBFB" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #E8F9FF 0%, #FBFBFB 50%, #C5BAFF 100%)",
          opacity: 0.3,
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            How It Works
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to compress and share your files effortlessly.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          // className="grid grid-cols-1 md:grid-cols-2 gap-6"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"

        >
          {/* Card 1 - Top Left - Upload with Folder Animation */}
          <motion.div
            variants={itemVariants}
            onMouseEnter={() => setHoveredCard("upload")}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ y: -6 }}
            className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-500 overflow-hidden min-h-[400px] flex flex-col"
          >
            {/* Animated Titles */}
          <div className="relative h-24 mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              {hoveredCard !== "upload" ? (
                <motion.h1
                  key="default"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-bold text-gray-900 absolute"
                >
                   Book Online <br />
                  Select what you want to rescue
                </motion.h1>
              ) : (
                <motion.h1
                  key="hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-l font-bold text-blue-600 absolute"
                >
                  Videos <br/> Files <br/> Documents & Scanning <br />
                  Choose your pickup date and time
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
          


            <div className="relative h-48 mt-auto">
              <motion.div
                animate={{
                  scale: hoveredCard === "upload" ? 1.05 : 1,
                }}
                className="absolute bottom-0 left-0 right-0"
              >
                <svg className="w-full h-32" viewBox="0 0 302 200" fill="none">
                  <path
                    fill="#0069E0"
                    opacity="0.1"
                    d="M83.657 0a40.5 40.5 0 0 1 21.754 6.339l27.165 17.298a39.502 39.502 0 0 0 21.217 6.182H277c13.531 0 24.5 10.97 24.5 24.5V180c0 13.531-10.969 24.5-24.5 24.5H25C11.469 204.5.5 193.531.5 180V20C.5 6.469 11.469 0 25 0h58.657Z"
                  />
                </svg>
              </motion.div>

              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                {[
                  {
                    color: "bg-yellow-400",
                    delay: 0,
                    x: hoveredCard === "upload" ? -40 : 0,
                  },
                  {
                    color: "bg-purple-400",
                    delay: 0.05,
                    x: 0,
                    scale: hoveredCard === "upload" ? 1.1 : 1,
                  },
                  { color: "bg-blue-400", delay: 0.1, x: 0 },
                  {
                    color: "bg-orange-400",
                    delay: 0.15,
                    x: hoveredCard === "upload" ? 40 : 0,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      x: item.x,
                      scale: item.scale || 1,
                      y: hoveredCard === "upload" ? -10 : 0,
                    }}
                    transition={{
                      delay: item.delay,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className={`w-12 h-16 ${item.color} rounded-lg shadow-lg flex items-center justify-center`}
                  >
                    <FileImage className="w-6 h-6 text-white" />
                  </motion.div>
                ))}
              </div>

              <motion.div
                animate={{
                  y: hoveredCard === "upload" ? 5 : 0,
                }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 bg-blue-600 rounded-t-2xl p-4 shadow-xl"
              >
                <div className="text-white text-sm font-semibold">
                  Drag & drop any video, image, or PDF{" "}
                </div>
                <div className="text-blue-200 text-xs">
                  into your workspace.
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            onMouseEnter={() => setHoveredCard("collaborate")}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ y: -6 }}
            className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-500 overflow-hidden min-h-[400px] flex flex-col"
          >
            {/* Animated Titles */}
            <div className="relative h-24 mb-8 overflow-hidden">
              <AnimatePresence mode="wait">
                {hoveredCard !== "collaborate" ? (
                  <motion.h1
                    key="default"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-2xl font-bold text-gray-900 absolute"
                  >
                    We Compress, Extract
                    <br /> & upload your data
                  </motion.h1>
                ) : (
                  <motion.h1
                    key="hover"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-2xl font-bold text-purple-600 absolute"
                  >
                    Your files are processed in our digital labs <br /> and uploaded into your 30Mbps 
                  </motion.h1>
                )}
              </AnimatePresence>
            </div>

            <div className="space-y-6 mt-auto">
              <div className="flex items-center justify-between">
                <div className="flex -space-x-3">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: hoveredCard === "collaborate" ? 1.1 : 1,
                        x: hoveredCard === "collaborate" ? i * 5 : 0,
                      }}
                      transition={{ delay: i * 0.05 }}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white shadow-lg"
                    />
                  ))}
                  <motion.div
                    animate={{
                      scale: hoveredCard === "collaborate" ? 1.1 : 1,
                    }}
                    className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600"
                  >
                    +4
                  </motion.div>
                </div>
                <span className="text-xs text-gray-500 font-medium ml-2">
                 compression without losing clarity
                </span>
              </div>

              <div className="space-y-3">
                {[60, 85, 40].map((width, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: hoveredCard === "collaborate" ? 1 : 0.5,
                      x: hoveredCard === "collaborate" ? 0 : -10,
                    }}
                    transition={{ delay: i * 0.1 }}
                    className="h-2 bg-gray-100 rounded-full overflow-hidden"
                  >
                    <motion.div
                      animate={{
                        width:
                          hoveredCard === "collaborate" ? `${width}%` : "0%",
                      }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            onMouseEnter={() => setHoveredCard("enhance")}
            onMouseLeave={() => setHoveredCard(null)}
            whileHover={{ y: -6 }}
             className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-500 overflow-hidden min-h-[400px] flex flex-col"
          >
            <div className="flex flex-col md:flex-row gap-8 h-full">
              {/* Left Content */}
              <div className="flex-1">
                {/* Animated Titles */}
                <div className="relative h-24 mb-6 overflow-hidden">
                  <AnimatePresence mode="wait">
                    {hoveredCard !== "enhance" ? (
                      <motion.h1
                        key="default"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-2xl font-bold text-gray-900 absolute"
                      >
                        Access Everything in your  <br /> 30Mbps
                      </motion.h1>
                    ) : (
                      <motion.h1
                        key="hover"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="text-xl font-bold text-emerald-600 absolute"
                      >
                        View, download, share, or organize <br /> anywhere
                      </motion.h1>
                    )}
                  </AnimatePresence>
                </div>

                <motion.div
                  animate={{
                    scale: hoveredCard === "enhance" ? 1 : 0.95,
                    opacity: hoveredCard === "enhance" ? 1 : 0.7,
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl mb-6"
                >
                  <AnimatePresence mode="wait">
                    {hoveredCard !== "enhance" ? (
                      <motion.div
                        key="processing"
                        initial={{ opacity: 0, rotate: 0 }}
                        animate={{ opacity: 1, rotate: 360 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          rotate: {
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          },
                        }}
                        className="w-5 h-5"
                      >
                        <Settings2 className="w-5 h-5 text-gray-400" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="done"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-5 h-5 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center"
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <span className="text-sm font-medium text-gray-600">
                    {hoveredCard === "enhance" ? "Complete" : "Access"}
                  </span>
                </motion.div>

                <div className="space-y-2">
                  <AnimatePresence mode="wait">
                    {hoveredCard !== "enhance" ? (
                      <motion.div
                        key="simple"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-base text-gray-600 space-x-1"
                      >
                        <span>Compress</span>
                        <span>video</span>
                        <span>files</span>
                        <span>quickly</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="enhanced"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-base text-emerald-600 font-medium"
                      >
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          View
                        </motion.span>{" "}
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          Download
                        </motion.span>{" "}
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          or Share
                        </motion.span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              

              <div className="flex-1 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: hoveredCard === "enhance" ? 1.05 : 1,
                    rotate: hoveredCard === "enhance" ? 5 : 0,
                  }}
                  className="relative"
                >
                
                 <div className="flex-1 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: hoveredCard === "enhance" ? 1.05 : 1,
                    rotate: hoveredCard === "enhance" ? 2 : 0,
                  }}
                  className="relative">
                
                  <div className="w-36 h-36 bg-gradient-to-br from-blue-50 to-blue-100 
                  rounded-3xl flex items-center justify-center relative overflow-hidden shadow-inner">

                    <motion.div
                      initial={{ scale: 1, opacity: 0.7 }}
                      animate={{
                        scale: hoveredCard === "enhance" ? 1.12 : 1,
                        opacity: 1,
                      }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <motion.div
                        animate={{
                          rotate: hoveredCard === "enhance" ? [0, 20, -10, 0] : 0,
                        }}
                        transition={{
                          duration: 2,
                          repeat: hoveredCard === "enhance" ? Infinity : 0,
                        }}
                        className="w-20 h-20 rounded-full border-4 border-blue-400 bg-white shadow-md flex items-center justify-center"
                      >
                        <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                      </motion.div>
                    </motion.div>

                    {hoveredCard === "enhance" &&
                      ["📷", "🎥", "📄"].map((icon, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 40, scale: 0.6 }}
                          animate={{
                            opacity: [0, 1, 0],
                            y: [40, -10, -40],
                            scale: [0.6, 1, 0.6],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                          className="absolute text-2xl"
                          style={{ left: `${30 + i * 35}%` }}
                        >
                          {icon}
                        </motion.div>
                      ))}

                    {hoveredCard === "enhance" &&
                      [0, 1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: [0, 1, 0],
                            y: [20, -10, -30],
                          }}
                          transition={{
                            duration: 1.4,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                          className="absolute w-2 h-2 bg-blue-400 rounded-full"
                          style={{
                            left: `${40 + i * 10}%`,
                          }}
                        />
                      ))}
                  </div>
                </motion.div>
              </div>

                </motion.div>
              </div>
            </div>
          </motion.div>
        {/* Card 4 – Techie Arrives at Your Door */}
        <motion.div
          variants={itemVariants}
          onMouseEnter={() => setHoveredCard("techie")}
          onMouseLeave={() => setHoveredCard(null)}
          whileHover={{ y: -6 }}
          className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-500 overflow-hidden min-h-[400px] flex flex-col"
        >

          {/* Animated Titles */}
          <div className="relative h-24 mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              {hoveredCard !== "techie" ? (
                <motion.h1
                  key="default-techie"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-2xl font-bold text-gray-900 absolute"
                >
                  Techie Arrives at <br /> Your Door
                </motion.h1>
              ) : (
                <motion.h1
                  key="hover-techie"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-2xl font-bold text-indigo-600 absolute"
                >
                  Secure doorstep pickup <br /> with tracking
                </motion.h1>
              )}
            </AnimatePresence>
          </div>

          {/* Animation Zone */}
          <div className="relative mt-auto mb-6 h-32 flex items-end justify-between">

            {/* Door */}
            <motion.div
              animate={{ opacity: hoveredCard === "techie" ? 1 : 0.7 }}
              className="w-16 h-28 bg-gray-200 rounded-md border border-gray-300 shadow-inner flex items-center justify-center"
            >
              <div className="w-2 h-2 bg-gray-500 rounded-full" />
            </motion.div>

            {/* Techie walking  */}
            <motion.div
              initial={{ x: -40 }}
              animate={{
                x: hoveredCard === "techie" ? 20 : -40
              }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="flex items-center space-x-3"
            >
              {/* Techie Avatar */}
              <motion.div
                animate={{
                  y: hoveredCard === "techie" ? [-2, 2, -2] : 0,
                }}
                transition={{
                  repeat: hoveredCard === "techie" ? Infinity : 0,
                  duration: 1.6,
                }}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg border-2 border-white"
              />

              {/* Location pulse */}
              <motion.div
                animate={{
                  scale: hoveredCard === "techie" ? [1, 1.2, 1] : 1,
                  opacity: hoveredCard === "techie" ? [1, 0.6, 1] : 0.7,
                }}
                transition={{
                  repeat: hoveredCard === "techie" ? Infinity : 0,
                  duration: 1.4,
                }}
                className="w-6 h-6 bg-red-500 rounded-full shadow-md"
              />
            </motion.div>
          </div>

          {/* Secure Badge */}
          <motion.div
            animate={{
              opacity: hoveredCard === "techie" ? 1 : 0.4,
              scale: hoveredCard === "techie" ? 1 : 0.95
            }}
            className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium mb-3"
          >
            <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
            Chain-of-custody secure
          </motion.div>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed">
            Our certified 30Mbps technician will collect your media/devices with secure 
            chain-of-custody tracking at your doorstep.
          </p>

        </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;