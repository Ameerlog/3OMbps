import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import TrailCursor from "../components/ui/TrailCursor";

const faqs = [
  {
    q: "What types of files can I compress?",
    a: "You can compress videos, images, PDFs, documents, and more.",
  },
  {
    q: "Is my data secure during compression?",
    a: "Yes, all processing is done securely with no data stored.",
  },
  {
    q: "Does file compression reduce quality?",
    a: "You can choose high, medium, or low compression levels.",
  },
  {
    q: "Is my data secure during compression?",
    a: "Yes, all processing is done securely with no data stored.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (i) => {
    setOpen(open === i ? null : i);
  };

  return (
    <div className="w-full py-32 bg-white relative faq-area">
      <TrailCursor count={6} />

      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-start md:gap-24 gap-10 md:translate-x-30">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-[42px] font-semibold gray -mt-2"
          >
            FAQs
          </motion.h1>

          <div className="w-full max-w-xl space-y-8 md:translate-x-10">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                className="rounded-xl border border-gray-200 p-5 hover:shadow-sm transition cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <p className="text-[22px] font-medium text-gray-900">
                    {faq.q}
                  </p>

                  <motion.div
                    initial={false}
                    animate={{ rotate: open === index ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {open === index ? (
                      <Minus className="text-[#444]" size={22} />
                    ) : (
                      <Plus className="text-[#444]" size={22} />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {open === index && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-900 mt-3 leading-relaxed text-[16px]"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
