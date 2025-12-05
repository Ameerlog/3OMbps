import {
  MoveRight,
  ShieldCheck,
  Clock3,
  Truck,
  DatabaseZap,
  FileSearch,
  Cloud,
} from "lucide-react";
import Image from "../assets/imgaes/tech2.png";

const STEPS = [
  {
    id: 1,
    label: "On‑Demand Pickup & Secure Triage",
    icon: Truck,
    headline: "You lose it, we pick it up. Fast.",
    content:
      "Book your service online or call us, and a Certified 30mbps Techie arrives at your home or office. You never have to mail your sensitive data or visit a service center.",
    action:
      "We perform an initial, non‑invasive diagnostic to check for logical vs. physical damage and issue a signed Chain‑of‑Custody receipt for your media.",
    value: "Convenience & Trust · Zero shipping risk, complete custody tracking.",
    cta: "Schedule your free pickup now",
  },
  {
    id: 2,
    label: "Data Recovery & The 30mbps Advantage",
    icon: DatabaseZap,
    headline: "Advanced recovery, optimized for forever storage.",
    content:
      "Your media is transferred to our secure Central Facility where professional‑grade tools recover deleted, formatted, or lost files from logically damaged media.",
    action:
      "Obscure formats like RAW or MOV are converted into universal files such as JPEG and MP4, then processed with the 30mbps Compression Advantage to reduce file sizes without visible quality loss.",
    value:
      "Cost Savings · Smaller files mean lower long‑term cloud storage costs.",
    cta: "See the difference: compare 4K vs. 30mbps",
  },
  {
    id: 3,
    label: "Indexing, Quality Check & Approval",
    icon: FileSearch,
    headline: "Your files, organized and ready to search.",
    content:
      "Every recovered file is digitally indexed and cataloged before delivery. You receive a simple, searchable manifest – a complete list of what was recovered.",
    action:
      "You review and approve the manifest and pay a one‑time service fee. All files are checked to ensure they are playable, corruption‑free, and searchable by name and date.",
    value:
      "Control & Clarity · No surprises before your data moves into the Vault.",
    cta: "Request a sample file list from our last job",
  },
  {
    id: 4,
    label: "Final Delivery to the 30mbps Vault",
    icon: Cloud,
    headline: "Access your archival vault forever.",
    content:
      "Once approved, your processed, compressed, and indexed data is uploaded to your personal, end‑to‑end encrypted 30mbps Vault – your permanent, secure archive.",
    action:
      "Choose a simple monthly or annual storage tier (50GB, 250GB, 1TB) and access everything via our secure web portal or app.",
    value:
      "Recurring Security · A one‑time crisis becomes a long‑term, organized, money‑saving archival solution.",
    cta: "Choose your Vault tier & start archiving today",
  },
];

const LearnMore = () => {
  return (
    <>
      {/* Top summary hero */}
      <section
        className="relative w-full overflow-hidden py-14 sm:py-16 lg:py-20 mt-16 sm:mt-20"
        style={{
          background:
            "linear-gradient(135deg, #FBFBFB 0%, #E8F9FF 30%, #C4D9FF 65%, #C5BAFF 100%)",
        }}
      >
        <div className="absolute inset-0 bg-white/40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-center">
            {/* Image */}
            <aside className="flex justify-center order-2 lg:order-1">
              <img
                src={Image}
                alt="30mbps in-house data recovery"
                loading="lazy"
                className="w-full max-w-[360px] sm:max-w-[460px] lg:max-w-[540px] h-auto object-contain drop-shadow-2xl"
              />
            </aside>

            {/* Copy */}
            <aside className="flex order-1 lg:order-2">
              <div className="w-full max-w-lg space-y-6 text-center lg:text-left mx-auto lg:mx-0">
                <p className="inline-flex items-center justify-center rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-700">
                  30mbps · In‑house data recovery
                </p>

                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
                    From lost drive
                    <br className="hidden md:block" />
                    to forever‑ready 30mbps Vault.
                  </h2>
                  <p className="text-sm sm:text-base md:text-[15px] text-slate-700">
                    A structured four‑step service that handles pickup, recovery,
                    optimization, and long‑term archival – without ever mailing
                    your sensitive data to third parties.
                  </p>
                </div>

                <div className="h-[3px] w-20 mx-auto lg:mx-0 rounded-full bg-gradient-to-r from-[#C5BAFF] to-[#C4D9FF]" />

                {/* 2x2 benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm md:text-[15px] text-slate-800">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 mt-0.5 text-indigo-600" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        Pickup & custody
                      </p>
                      <p className="text-slate-600">
                        On‑demand home or office pickup plus signed
                        Chain‑of‑Custody.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock3 className="w-4 h-4 mt-0.5 text-indigo-600" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        Optimized recovery
                      </p>
                      <p className="text-slate-600">
                        Professional tools plus the 30mbps Compression Advantage.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <FileSearch className="w-4 h-4 mt-0.5 text-indigo-600" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        Searchable manifest
                      </p>
                      <p className="text-slate-600">
                        Full index of recovered files for review and approval.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Cloud className="w-4 h-4 mt-0.5 text-indigo-600" />
                    <div>
                      <p className="font-semibold text-slate-900">
                        Encrypted Vault
                      </p>
                      <p className="text-slate-600">
                        Tiered, E2E‑encrypted storage for long‑term archival.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Optional CTA – keep commented or enable */}
                {/* <a
                  href="#inhouse-details"
                  className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-slate-900 text-white px-6 py-3 text-sm md:text-base font-medium shadow-sm hover:bg-slate-800 hover:shadow-md transition w-full sm:w-auto"
                >
                  View the 4‑step customer process
                  <span className="ml-2 inline-flex items-center">
                    <MoveRight className="w-4 h-4" />
                  </span>
                </a> */}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Detailed 4-step process */}
      <section
        id="inhouse-details"
        className="bg-white py-14 sm:py-16 md:py-20 border-t border-slate-100"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
          <header className="space-y-3 max-w-2xl text-center md:text-left mx-auto md:mx-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              4‑step customer process
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
              How the 30mbps data service works from pickup to Vault.
            </h3>
            <p className="text-sm md:text-base text-slate-700">
              Every engagement follows the same transparent, documented flow so
              you always know where your drive is, what is happening to your
              data, and what you are paying for.
            </p>
          </header>

          {/* Stepper bar */}
          <div className="hidden md:flex items-center gap-3 text-xs font-medium text-slate-500">
            {STEPS.map((step, index) => (
              <div key={step.id} className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[11px] text-white">
                  {step.id}
                </span>
                <span>{step.label}</span>
                {index < STEPS.length - 1 && (
                  <div className="h-px w-10 bg-slate-200" />
                )}
              </div>
            ))}
          </div>

          <ol className="space-y-6">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.id}
                  className="relative rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-5 sm:px-5 sm:py-5 md:px-6 md:py-6 shadow-sm"
                >
                  {/* Step badge + label */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white">
                      {step.id}
                    </span>
                    <div className="flex items-center gap-2 text-[11px] sm:text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                      <Icon className="w-4 h-4 text-slate-500" />
                      <span>{step.label}</span>
                    </div>
                  </div>

                  {/* Main copy */}
                  <div className="space-y-2 text-sm md:text-[15px] text-slate-700">
                    <p className="font-semibold text-slate-900">
                      {step.headline}
                    </p>
                    <p>{step.content}</p>
                    <p>{step.action}</p>
                  </div>

                  {/* Value prop + CTA line */}
                  <div className="mt-4 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 sm:gap-3 justify-between text-xs md:text-sm">
                    <p className="font-medium text-slate-900">{step.value}</p>
                    <button
                      type="button"
                      className="inline-flex items-center text-xs md:text-sm font-medium text-slate-900 hover:text-slate-700"
                    >
                      {step.cta}
                      {/* <MoveRight className="ml-1 h-3.5 w-3.5" /> */}
                    </button>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </>
  );
};

export default LearnMore;
