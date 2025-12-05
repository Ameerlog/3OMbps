import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

import icon1 from "../../assets/imgaes/sdcard.png";
import icon2 from "../../assets/imgaes/cd.png";
import icon3 from "../../assets/imgaes/jpeg.png";
import icon4 from "../../assets/imgaes/mov.png";

gsap.registerPlugin(ScrollTrigger);

function AnimationScroll() {
  const heroRef = useRef(null);
  const headerRef = useRef(null);
  const iconsContainerRef = useRef(null);
  const iconRefs = useRef([]);
  const textSegmentRefs = useRef([]);
  // const iconPlaceholderRefs = useRef([]);
  const headlineRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      const icons = iconRefs.current.filter(Boolean);
      const textSegments = textSegmentRefs.current.filter(Boolean);
      // const iconPlaceholders = iconPlaceholderRefs.current.filter(Boolean);
      const iconsContainer = iconsContainerRef.current;
      const header = headerRef.current;
      const hero = heroRef.current;
      const headline = headlineRef.current;

      if (!hero || icons.length === 0) return;

      const isMobileView = window.innerWidth <= 768;
      const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
      const finalIconSize = isMobileView ? 40 : isTablet ? 60 : 80;
      const originalIconSize = isMobileView ? 80 : isTablet ? 100 : 120;

      gsap.set(textSegments, { opacity: 0, y: 20 });
      // gsap.set(iconPlaceholders, { opacity: 0 });

      // const clonedIcons = icons.map((icon) => {
      //   const clone = icon.cloneNode(true);
      //   clone.style.cssText = `
      //     position: absolute;
      //     width: ${finalIconSize}px;
      //     height: ${finalIconSize}px;
      //     opacity: 0;
      //     pointer-events: none;
      //   `;
      //   headline.appendChild(clone);
      //   return clone;
      // });

      const scrollDistance = isMobileView
        ? "+=180%"
        : isTablet
        ? "+=200%"
        : "+=220%";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: scrollDistance,
          pin: true,
          scrub: 0.15,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(header, {
        y: isMobileView ? -30 : -80,
        opacity: 0,
        duration: 0.05,
        ease: "power1.out",
      })

        .to(
          icons,
          {
            y: () => -window.innerHeight * (isMobileView ? 0.25 : 0.3),
            stagger: isMobileView ? 0.005 : 0.01,
            duration: 0.08,
            ease: "power1.out",
          },
          0
        )

        .to(iconsContainer, {
          x: () => {
            const rect = iconsContainer.getBoundingClientRect();
            return window.innerWidth / 2 - rect.left - rect.width / 2;
          },
          duration: 0.08,
          ease: "power1.out",
        })

        .to(
          icons,
          {
            scale: finalIconSize / originalIconSize,
            duration: 0.08,
            ease: "power1.out",
          },
          "<"
        )

        .to(icons, {
          opacity: 0,
          duration: 0.04,
          ease: "power1.in",
        })

        .call(() => {
          clonedIcons.forEach((clone, i) => {
            if (!iconPlaceholders[i]) return;

            const ph = iconPlaceholders[i].getBoundingClientRect();
            const hl = headline.getBoundingClientRect();

            clone.style.left = `${
              ph.left - hl.left + ph.width / 2 - finalIconSize / 2
            }px`;
            clone.style.top = `${
              ph.top - hl.top + ph.height / 2 - finalIconSize / 2
            }px`;
          });
        })

        // .to(clonedIcons, {
        //   opacity: 1,
        //   scale: 1,
        //   duration: 0.06,
        //   ease: "power1.out",
        //   stagger: isMobileView ? 0.005 : 0.008,
        // })

        .to(
          textSegments,
          {
            opacity: 1,
            y: 0,
            stagger: {
              each: isMobileView ? 0.005 : 0.008,
              from: "random",
            },
            duration: 0.05,
            ease: "power1.out",
          },
          "-=0.03"
        )

        // .to(
        //   iconPlaceholders,
        //   {
        //     opacity: 1,
        //     duration: 0.02,
        //   },
        //   "<"
        // );
    }, heroRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  const iconData = [
    { src: icon1, alt: "Wifi Icon" },
    { src: icon2, alt: "Lightning Icon" },
    { src: icon3, alt: "Shield Icon" },
    { src: icon4, alt: "API Icon" },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFB]">
      <section
        ref={heroRef}
        className="h-screen flex flex-col items-center justify-center overflow-hidden relative px-4 sm:px-6"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, #E8F9FF 0%, #FBFBFB 50%, #C5BAFF 100%)",
            opacity: 0.3,
          }}
        />

<div
  ref={headerRef}
  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
             w-full max-w-[90%] sm:max-w-lg md:max-w-2xl lg:max-w-3xl 
             text-center z-10 px-4"
>
  <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
    On-Demand Pickup
  </h2>

  <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 leading-snug">
    Expert Technicians | Secure Digital Vault  | Fast Delivery
  </p>

  {/* <div className="flex justify-center gap-4 mt-4 flex-wrap">
    <button className="px-6 py-3 bg-black text-white rounded-xl text-sm sm:text-base hover:bg-gray-800 transition">
      Schedule Pickup
    </button>

    <button className="px-6 py-3 bg-white text-black border border-gray-300 rounded-xl text-sm sm:text-base hover:bg-gray-100 transition">
      Explore Services
    </button>
  </div> */}
</div>


        {/* Floating Icons */}
        <div
          ref={iconsContainerRef}
          className="absolute bottom-8 sm:bottom-10 md:bottom-14 left-0 right-0 flex items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 z-20 px-4"
        >
          {iconData.map((item, i) => (
            <img
              key={i}
              ref={(el) => (iconRefs.current[i] = el)}
              src={item.src}
              alt={item.alt}
              className="
                w-24 h-24 
                sm:w-28 sm:h-28 
                md:w-32 md:h-32 
                lg:w-36 lg:h-36 
                xl:w-40 xl:h-40 
                object-contain drop-shadow-lg
              "
            />
          ))}
        </div>

        <div
          ref={headlineRef}
          className="
            relative text-lg 
            sm:text-2xl 
            md:text-4xl 
            lg:text-5xl 
            xl:text-6xl 
            font-black text-center leading-tight 
            text-gray-900 
            max-w-[95vw] sm:max-w-[85vw] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 
            px-2 sm:px-4
          "
        >
        <span ref={(el) => (textSegmentRefs.current[0] = el)} className="inline-block">
  Compress&nbsp;
</span>

          {/* <span
            ref={(el) => (iconPlaceholderRefs.current[0] = el)}
            className="inline-block align-middle mx-0 w-[110px] h-[110px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[170px] lg:h-[170px]"
          /> */}

      <span ref={(el) => (textSegmentRefs.current[1] = el)} className="inline-block">
  files&nbsp;with&nbsp;
</span>

          {/* <span
            ref={(el) => (iconPlaceholderRefs.current[1] = el)}
            className="inline-block align-middle mx-0 w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
          /> */}

        <span ref={(el) => (textSegmentRefs.current[2] = el)} className="inline-block">
  zero&nbsp;quality&nbsp;
</span>

          {/* <span
            ref={(el) => (iconPlaceholderRefs.current[2] = el)}
            className="inline-block align-middle mx-0 w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
          /> */}

         
<span ref={(el) => (textSegmentRefs.current[3] = el)} className="inline-block">
  loss&nbsp;on&nbsp;
</span>

          {/* <span
            ref={(el) => (iconPlaceholderRefs.current[3] = el)}
            className="inline-block align-middle mx-0 w-[70px] h-[70px] sm:w-[85px] sm:h-[85px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
          /> */}

      <span ref={(el) => (textSegmentRefs.current[4] = el)} className="inline-block">
  30Mbps
</span>
        </div>
      </section>
    </div>
  );
}

export default AnimationScroll;
