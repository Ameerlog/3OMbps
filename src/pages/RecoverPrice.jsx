import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const RecoverPrice = () => {
  const plans = [
    {
      name: "Individual",
      perWorkPrice: 99,
      damagedPrice: 399
    },
    {
      name: "Enterprise",
      perWorkPrice: 99
    },
    {
      name: "Business",
      perWorkPrice: 49
    }
  ];

  return (
    <section
      id="pricing"
      className="relative w-full min-h-screen px-4 py-20 sm:py-16 md:py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #E8F9FF 0%, #E8F9FF 30%, #E8F9FF 65%, #FBFBFB 100%)"
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #E8F9FF 0%, #FBFBFB 45%, #C5BAFF 100%)",
          opacity: 0.25
        }}
      />

      <div className="relative mx-auto px-2 mt-15">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl md:text-5xl leading-tight">
            Recover your data in just few steps
          </h1>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan) => {
            const isEnterprise = plan.name === "Enterprise";
            const isIndividual = plan.name === "Individual";

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={[
                  "flex flex-col rounded-2xl border bg-white/95 py-8 px-5 sm:px-6 shadow-sm backdrop-blur-sm h-full",
                  isEnterprise
                    ? "border-slate-900 shadow-[0_18px_40px_rgba(15,23,42,0.18)] relative overflow-hidden"
                    : "border-slate-200"
                ].join(" ")}
              >
                {isEnterprise && (
                  <span className="absolute right-4 top-4 inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700 border border-emerald-100">
                    Most popular
                  </span>
                )}

                <h3 className="text-lg font-semibold text-slate-900 text-center">
                  {plan.name}
                </h3>

                <div className="mt-5 flex h-16 items-center justify-center">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key="perWork"
                      initial={{ y: 16, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -16, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-end gap-1"
                    >
                      {!isIndividual ? (
                        <span className="text-4xl font-bold text-slate-900">
                          Free
                        </span>
                      ) : (
                        <>
                          <span className="text-2xl font-semibold text-slate-900">
                            ₹
                          </span>
                          <span className="text-4xl font-bold text-slate-900">
                            {plan.perWorkPrice}
                          </span>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

               <a
  href={`/book-now?plan=${plan.name}`}
  className={[
    "mt-auto inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors border",
    isEnterprise
      ? "bg-slate-900 text-slate-50 border-slate-900 hover:bg-slate-800"
      : "bg-[#9B5DE0] text-white border-slate-300 hover:bg-[#a475d9]"
  ].join(" ")}
>
  Book Now
</a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecoverPrice;
