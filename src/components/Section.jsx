import { MoveRight } from "lucide-react";
import Image from "../assets/imgaes/tech2.png";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <section
      className="relative w-full overflow-hidden py-14 sm:py-16 lg:py-20"
      style={{
        background:
          "linear-gradient(135deg, #FBFBFB 0%, #E8F9FF 30%, #E8F9FF 65%, #FBFBFB 100%)",
      }}
    >
      <div className="absolute inset-0 bg-white/35 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-14">
          {/* Text side */}
          <aside className="flex-[0.9] flex items-center">
            <div className="w-full max-w-lg space-y-5 text-center lg:text-left">
              <p className="inline-flex items-center justify-center rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                In-house services
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
                Fast, secure
                <br className="hidden md:block" />
                in-house data recovery
              </h2>

              <div className="mx-auto lg:mx-0 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#C5BAFF] to-[#C4D9FF]" />

              <p className="text-sm sm:text-base md:text-[15px] text-slate-700">
                Our 30 Mbps service helps you manage your data without any
                hassle. You can compress files quickly, store them safely on the
                cloud or on your own devices, and transfer large files without
                slowing down. Your data stays accessible whenever you need it,
                and your backups remain secure and ready to restore whenever
                required.
              </p>

              {/* React Router Link, same tab */}
              <Link
                to="/learn-more"
                className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-slate-900 text-white px-6 py-3 text-sm md:text-base font-medium shadow-sm hover:bg-slate-800 hover:shadow-md transition w-full sm:w-auto"
              >
                Learn more
                <span className="ml-2 inline-flex items-center">
                  <MoveRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </aside>

          {/* Image side */}
          <aside className="flex-[1.2] flex justify-center">
            <img
              src={Image}
              alt="In-house data recovery"
              loading="lazy"
              className="w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[620px] h-auto object-contain drop-shadow-2xl"
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Section;
