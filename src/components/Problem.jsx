"use client";
import { motion } from "framer-motion";
import { Disc, Archive, Cloud } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Disc,
      title: "Extraction Services",
      description:
        "We extract data from any legacy media or device: CDs, DVDs, MiniDV tapes, old phones, SD cards, pen drives, hard drives, and old office systems.",
      color: "#C4D9FF",
    },
    {
      icon: Archive,
      title: "Compression Services",
      description:
        "We compress large files, videos, office documents, and archives to reduce space and improve transfer speeds — perfect for homes, offices, institutes, businesses, Legal & corporate records, photographers & studios.",
      color: "#E8F9FF",
    },
    {
      icon: Cloud,
      title: "30Mbps Cloud Storage Vault",
      description:
        "Once rescued data is stored securely inside your private 30MBPS vault — secure cloud storage accessible 24/7. Shared Albums, recent files, categorized folders, auto backup, and AES-256 encryption.",
      color: "#C5BAFF",
    },
  ];

  return (
    <section
      className="relative py-24 px-4 overflow-hidden"
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

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: "#E8F9FF" }}
        />
        <div
          className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: "#C5BAFF" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            What We Do
          </h2>

          <h3 className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-4">
            Your Personal & Business Data — Transformed into a Digital Vault
          </h3>

          <p className="text-xl md:text-s text-gray-600 max-w-3xl mx-auto" >
            At 30Mbps, we provide a complete end-to-end digital rescue service: 
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: feature.color }}
              >
                <feature.icon className="w-7 h-7 text-gray-700" strokeWidth={2} />
              </div>

              <h3 className="text-xl mb-3">{feature.title}</h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;