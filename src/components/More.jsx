import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const MoreSection = () => {
  // Minimal sparkle decorations
  const sparkles = [
    { position: "top-24 left-[10%]", delay: 0, size: "w-6 h-6" },
    { position: "top-32 right-[15%]", delay: 0.5, size: "w-5 h-5" },
    { position: "bottom-32 left-[12%]", delay: 1, size: "w-5 h-5" },
    { position: "bottom-40 right-[18%]", delay: 1.5, size: "w-6 h-6" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-[#d0e7f9] to-[#cbe9fe]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-[#daebf9] to-transparent opacity-30" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#c9e1f3] rounded-full blur-3xl opacity-15" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#dae8f2] rounded-full blur-3xl opacity-15" />
      </div>

      {sparkles.map((sparkle, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${sparkle.position} hidden lg:block pointer-events-none`}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: sparkle.delay * 0.15, duration: 0.4 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: sparkle.delay,
            }}
          >
            <Sparkles
              className={`${sparkle.size} text-gray-300`}
              strokeWidth={1.5}
            />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative max-w-4xl mx-auto text-center py-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Headline */}
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 tracking-tight">
            Let's Make it Happen
          </h3>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Bring the files. We'll bring the compression
          </p>


          <motion.a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
          >

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                backgroundPosition: ["0% 0%", "200% 0%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 100%",
              }}
            />

            <span className="relative z-10">Get Started Free</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.a>

          {/* Trust badge */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 text-sm text-gray-500"
          >
            No signup required • Works in your browser
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default MoreSection;