// import { motion } from "framer-motion";
// import { Instagram, Mail, Twitter, MapPin } from "lucide-react";
// import { useRef, useEffect, useState } from "react";
// import vedioBG from "../assets/imgaes/cloud3.mp4";
// import Logo from "../assets/imgaes/logo4.gif";

// const Footer = () => {
//   const videoRef = useRef(null);
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   const socialLinks = [
//     {
//       icon: Instagram,
//       href: "https://www.instagram.com/30mbps.co/?igsh=MW1mdGJscTlhanlneA%3D%3D#",
//       label: "Instagram",
//     },
//     { icon: Mail, href: "mailto:join@30mbps.com", label: "Mail" },
//     { icon: Twitter, href: "https://x.com/30mbps", label: "X" },
//   ];

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       entries => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//             if (videoRef.current) {
//               videoRef.current.playbackRate = 0.5;
//               videoRef.current.currentTime = 0;
//               videoRef.current.play().catch(err => console.log("Play error:", err));
//             }
//           } else {
//             setIsVisible(false);
//             if (videoRef.current && !videoRef.current.paused) {
//               videoRef.current.pause();
//             }
//           }
//         });
//       },
//       { threshold: 0, rootMargin: "0px" }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   return (
//     <div ref={sectionRef} className="relative bg-white overflow-x-hidden">
//       {/* Video Background */}
//       <div className="relative w-full -mt-1">
//         <motion.video
//           ref={videoRef}
//           initial={{ opacity: 0, scale: 1 }}
//           animate={{
//             opacity: isVisible ? 1 : 0,
//             scale: isVisible ? 1 : 0.95,
//           }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="w-full h-auto block object-cover"
//           muted
//           playsInline
//           loop
//         >
//           <source src={vedioBG} type="video/mp4" />
//         </motion.video>
//       </div>

//       <footer className="relative bg-[#f0f4fc] -mt-8 sm:-mt-12 md:-mt-16">
//         <div className="max-w-7xl mx-auto px-6">

       
//        <div className="relative w-full bg-[#f0f4fc]">
//   <motion.img
//     src={Logo}
//     alt="30MBPS Logo"
//     className="w-36 sm:w-48 md:w-64 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none "
//     initial={{ opacity: 0, scale: 0.9 }}
//     animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0.7 }}
//     transition={{ duration: 0.6 }}
//   />

//   <div className="pt-20 pb-4 flex flex-col items-center text-center">
//     <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 tracking-tight">
//       We Recover. We Secure. We Store.
//     </h2>

//     <p className="text-gray-600 text-sm sm:text-base md:text-lg font-medium max-w-2xl mt-1">
//       We provide professional data recovery, advanced compression solutions,
//       and secure cloud storage for individuals, SMEs, and enterprises.
//     </p>
//   </div>
// </div>

//           <div className="w-full border-t border-gray-300 my-8" />

// <div className="w-full flex justify-center">
//   <div className="grid gap-10 pb-12 text-left 
//     sm:grid-cols-2 
//     lg:grid-cols-3 
//     xl:grid-cols-3 
//     max-w-4xl">

 
//     <div>
//       <h3 className="font-semibold text-blue-900 mb-4 text-xl">Quick Links</h3>
//       <ul className="space-y-2 text-gray-600 text-base font-medium">
//         <li><a href="#home" className="hover:text-blue-900">Home</a></li>
//         <li><a href="/recover" className="hover:text-blue-900">Services</a></li>
//         <li><a href="/explore" className="hover:text-blue-900">Contact Us</a></li>
//       </ul>
//     </div>


//     <div>
//       <h3 className="font-semibold text-blue-900 mb-4 text-xl">Support</h3>
//       <ul className="space-y-2 text-gray-600 text-base font-medium">
//         <li><a href="#support" className="hover:text-blue-900">Customer Support</a></li>
//         <li><a href="#faq" className="hover:text-blue-900">FAQ</a></li>
//       </ul>
//     </div>

//     <div>
//       <h3 className="font-semibold text-blue-900 mb-4 text-xl">Contact Us</h3>

//       <div className="flex items-center gap-3 mb-4">
//         {socialLinks.map((item, index) => (
//           <a
//             key={index}
//             href={item.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-9 h-9 rounded-md bg-white shadow flex items-center justify-center text-gray-600 hover:bg-blue-900 hover:text-white transition"
//           >
//             <item.icon className="w-4 h-4" />
//           </a>
//         ))}
//       </div>

//       <p className="text-gray-600 text-base font-medium leading-relaxed">
//         Email:{" "}
//         <a href="mailto:join@30mbps.com" className="text-blue-900 hover:underline">
//           join@30mbps.com
//         </a>
//         <br />
//         Phone:{" "}
//         <a href="tel:+918088117744" className="hover:text-blue-900">+91 8088117744</a>
//       </p>
//     </div>

//   </div>
// </div>


//           <div className="text-center py-4 text-gray-600 text-sm border-t border-gray-300">
//             © {new Date().getFullYear()} 30MBPS. All Rights Reserved.
//             <br />
//             <span className="space-x-3">
//               <button className="hover:text-blue-900">Legal</button>
//               <span>•</span>
//               <button className="hover:text-blue-900">Privacy Policy</button>
//               <span>•</span>
//               <button className="hover:text-blue-900">Terms of Service</button>
//             </span>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;


import { motion } from "framer-motion";
import { Instagram, Mail, Twitter } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import vedioBG from "../assets/imgaes/cloud3.mp4";
import Logo from "../assets/imgaes/logo4.gif";

const Footer = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/30mbps.co/?igsh=MW1mdGJscTlhanlneA%3D%3D#",
      label: "Instagram",
    },
    { icon: Mail, href: "mailto:join@30mbps.com", label: "Mail" },
    { icon: Twitter, href: "https://x.com/30mbps", label: "X" },
  ];

  useEffect(() => {
    // 1. Set playback rate initially when component mounts
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (videoRef.current) {
              // 2. Enforce playback rate again on play
              videoRef.current.playbackRate = 0.5;
              videoRef.current
                .play()
                .catch((err) => console.log("Play error:", err));
            }
          } else {
            setIsVisible(false);
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.1 } // Increased threshold slightly to avoid rapid toggling
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // 3. Ensure speed is set when metadata loads (fixes speed reset issues)
  const handleVideoLoad = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  };

  return (
    <div ref={sectionRef} className="relative bg-white overflow-x-hidden">
      {/* Video Background */}
      <div className="relative w-full -mt-1">
        <motion.video
          ref={videoRef}
          onLoadedMetadata={handleVideoLoad}
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.95,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-auto block object-cover"
          muted
          playsInline // Critical for iOS autoplay
          loop
          autoPlay={false} // We control play via observer
        >
          <source src={vedioBG} type="video/mp4" />
        </motion.video>
      </div>

      <footer className="relative bg-[#f0f4fc] -mt-8 sm:-mt-12 md:-mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative w-full bg-[#f0f4fc]">
            <motion.img
              src={Logo}
              alt="30MBPS Logo"
              className="w-36 sm:w-48 md:w-64 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isVisible ? { opacity: 1, scale: 1 } : { opacity: 0.7 }
              }
              transition={{ duration: 0.6 }}
            />

            <div className="pt-20 pb-4 flex flex-col items-center text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 tracking-tight">
                We Recover. We Secure. We Store.
              </h2>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg font-medium max-w-2xl mt-1">
                We provide professional data recovery, advanced compression
                solutions, and secure cloud storage for individuals, SMEs, and
                enterprises.
              </p>
            </div>
          </div>

          <div className="w-full border-t border-gray-300 my-8" />

          <div className="w-full flex justify-center">
            <div
              className="grid gap-10 pb-12 text-left 
                grid-cols-1
                sm:grid-cols-2 
                lg:grid-cols-3 
                xl:grid-cols-3 
                max-w-4xl w-full"
            >
              <div>
                <h3 className="font-semibold text-blue-900 mb-4 text-xl">
                  Quick Links
                </h3>
                <ul className="space-y-2 text-gray-600 text-base font-medium">
                  <li>
                    <a href="#home" className="hover:text-blue-900">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/recover" className="hover:text-blue-900">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/explore" className="hover:text-blue-900">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-blue-900 mb-4 text-xl">
                  Support
                </h3>
                <ul className="space-y-2 text-gray-600 text-base font-medium">
                  <li>
                    <a href="#support" className="hover:text-blue-900">
                      Customer Support
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="hover:text-blue-900">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-blue-900 mb-4 text-xl">
                  Contact Us
                </h3>

                <div className="flex items-center gap-3 mb-4">
                  {socialLinks.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-md bg-white shadow flex items-center justify-center text-gray-600 hover:bg-blue-900 hover:text-white transition"
                    >
                      <item.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>

                <p className="text-gray-600 text-base font-medium leading-relaxed">
                  Email:{" "}
                  <a
                    href="mailto:join@30mbps.com"
                    className="text-blue-900 hover:underline"
                  >
                    join@30mbps.com
                  </a>
                  <br />
                  Phone:{" "}
                  <a
                    href="tel:+918088117744"
                    className="hover:text-blue-900"
                  >
                    +91 8088117744
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center py-4 text-gray-600 text-sm border-t border-gray-300">
            © {new Date().getFullYear()} 30Mbps. All Rights Reserved.
            <br />
            <span className="space-x-3">
              <button className="hover:text-blue-900">Legal</button>
              <span>•</span>
              <button className="hover:text-blue-900">Privacy Policy</button>
              <span>•</span>
              <button className="hover:text-blue-900">Terms of Service</button>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
