import React from "react";

const CTASection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-[#C5BAFF]">
      <div className="text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl space-y-6 sm:space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900">
          Get Started
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 px-4">
          Start compressing files in seconds
        </p>

        <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-black hover:bg-gray-800 text-white rounded-full text-sm sm:text-base transition-colors">
         <a href="/book-now">Try it now</a> 
        </button>
      </div>
    </section>
  );
};

export default CTASection;
