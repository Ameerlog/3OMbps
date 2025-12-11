import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Pricing from "../components/Pricing";
import { useSearchParams } from "react-router-dom";

const DEVICE_TYPES = [
  { label: "Smart Home Setup", value: "Smart Home Setup" },
  { label: "Data Recovery", value: "DAata Recovery" },
  { label: "Data Compression", value: "Data Compression" },
  { label: "Digital Media Services", value: "Digital Media Services" }
  
];

const DEVICE_TYPES1 = [
  { label: "Wifi Setup", value: "Wifi Setup" },
  { label: "CCTV Setup", value: "CCTV Setup" },
  { label: "Cloud Services and Management", value: "Cloud Services and Management" },
  { label: "SAAS and Software Support", value: "SAAS and Software Support" }
  
];


const stepContentVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 }
};

const ZOHO_FORM_ACTION = "https://forms.zohopublic.in/30mbpscomgm1/form/ContactUs1/formperma/km2mXugiRKU7tm18voguWY4XTd-H0-CPzcs9N_6WnXI/htmlRecords/submit";

function BookServices() {
const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  //C

 const [form, setForm] = useState({
    deviceType: "",
    gstNo: "",
    phone: ""
  });
  //A
  const [params] = useSearchParams();
  const plan = params.get("plan")?.trim().toLowerCase();


    const isIndividual = plan === "individual";
  const isBusinessOrEnterprise = ["business", "enterprise"].includes(plan);


  const deviceOptions = plan === "individual" ? DEVICE_TYPES : DEVICE_TYPES1;


const showGST = ["business", "enterprise"].includes(plan);  


  const STEPS = isIndividual
    ? ["Device", "Contact"]
    : ["Device", "GST", "Contact"];

  // const deviceLabel = form.deviceType || "Not selected";
  // const capacityLabel = form.capacity || "Not selected";
  // const issueLabel = form.details ? "Provided" : "Not specified";
  // const conditionLabel = form.condition || "Not selected";

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setSubmitted(false);
    setErrorMessage("");
  };
  
const canGoNext = () => {
  // Step 1: must select device
  if (step === 1) return !!form.deviceType;

  // Individual: step 2 is phone
  if (isIndividual && step === 2) return form.phone.length === 10;

  // Business / Enterprise
  if (isBusinessOrEnterprise) {
    if (step === 2) return form.gstNo.length === 15; // GST
    if (step === 3) return form.phone.length === 10;  // Phone
  }

  return true;
};




  const handleNext = () => {
    if (!canGoNext()) return;
    setStep(prev => Math.min(prev + 1, STEPS.length));
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (!canGoNext()) return;

    setSubmitting(true);
    setSubmitted(false);
    setErrorMessage("");

    try {
    
      const iframe = document.createElement('iframe');
      iframe.name = 'zoho-submit-iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

 
      const hiddenForm = document.createElement('form');
      hiddenForm.method = 'POST';
      hiddenForm.action = ZOHO_FORM_ACTION;
      hiddenForm.target = 'zoho-submit-iframe';
      hiddenForm.acceptCharset = 'UTF-8';
      hiddenForm.enctype = 'multipart/form-data';
      hiddenForm.style.display = 'none';

      // Helper function to add inputs
      const addInput = (name, value) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value || '';
        hiddenForm.appendChild(input);
      };

      // Add Zoho hidden fields
      addInput('zf_referrer_name', '');
      addInput('zf_redirect_url', '');
      addInput('zc_gad', '');

      addInput('PhoneNumber_countrycode', form.phone);
      addInput('Dropdown', form.deviceType);     
      addInput('Dropdown1', form.capacity);        
      addInput('Dropdown2', form.condition);      
      addInput('Number', form.gstNo);    
      // addInput('MultiLine', form.details);         

    
      document.body.appendChild(hiddenForm);
      hiddenForm.submit();

      
      setSubmitted(true);
      setSubmitting(false);


      setTimeout(() => {
        document.body.removeChild(hiddenForm);
        document.body.removeChild(iframe);
      }, 1000);

      setTimeout(() => {
        setForm({
          deviceType: "",
          capacity: "",
          condition: "",
          phone: ""
        });
        setStep(1);
        setSubmitted(false);
      }, 10000);

    } catch (error) {
      console.error(error.message);
      setErrorMessage("Unable to submit your request right now. Please try again.");
      setSubmitting(false);
    }
  };

  const summaryStepIndex = Math.min(step, 5);
  const progress = (step / STEPS.length) * 100;

  return (
    <section
      id="contact"
      className="relative w-full py-16 md:py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFFFFF 0%, #E8F9FF 30%, #E8F9FF 65%, #FBFBFB 100%)"
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

     <div className="relative max-w-6xl mx-auto px-4 space-y-10">
        <header className="w-full flex flex-col items-center text-center mt-12 md:mt-16 px-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-slate-50 px-3 py-1 text-[11px] font-medium tracking-[0.16em] ">
            30Mbps Data Recovery
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight max-w-3xl">
            Introducing 30Mbps
          </h2>
         
        </header>

        <div className="flex flex-col lg:flex-row gap-10 lg:items-start">
        
          <div className="w-full lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="bg-white/95 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-[0_18px_55px_rgba(15,23,42,0.06)] p-6 md:p-8 space-y-6"
            >
              {/* form header + progress (same area, enhanced) */}
              <header className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
                      Step {step} of {STEPS.length}
                    </p>
                    {/* <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
                      Data recovery request
                    </h3> */}
                  </div>
                  {/* <span className="hidden md:inline-flex items-center rounded-full bg-[#b8aafc]/30 px-4 py-1 text-[11px] font-medium text-slate-800 border border-[#b8aafc]/70">
                    We&apos;ll call back during business hours
                  </span> */}
                </div>

                {/* slim progress bar */}
                <div className="space-y-1">
                  <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#C4D9FF] via-[#C5BAFF] to-[#b2a5f1]"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.25 }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-500">
                    {STEPS.map((label, index) => {
                      const idx = index + 1;
                      const active = idx === step;
                      const done = idx < step;
                      return (
                        <span
                          key={label}
                          className={[
                            "inline-flex items-center gap-1 rounded-full border px-2 py-0.5",
                            done
                              ? "border-slate-300 bg-slate-50 text-slate-700"
                              : active
                              ? "border-slate-900 bg-slate-900 text-slate-50"
                              : "border-slate-200 bg-white"
                          ].join(" ")}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-current" />
                          {label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </header>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  variants={stepContentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                  className="space-y-4 pt-2"
                >
            {step === 1 && (
  <div className="space-y-1">
    <p className="text-lg font-semibold text-slate-900">
      Select service
    </p>
    <div className="flex flex-wrap gap-3">
      {deviceOptions.map(item => (
        <button
          key={item.value}
          type="button"
          onClick={() => handleChange("deviceType", item.value)}
          className={`rounded-xl border px-5 py-3 text-sm md:text-base font-medium transition flex-1 min-w-[120px] justify-center ${
            form.deviceType === item.value
              ? "border-[#C5BAFF] bg-[#F4F1FF] text-slate-900 shadow-sm"
              : "border-slate-200 bg-white hover:border-[#C4D9FF] hover:bg-slate-50"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  </div>
)}


       {/* Individual */}
{isIndividual && step === 2 && (
  <div className="space-y-1">
    <p className="text-lg font-semibold text-slate-900">
      Enter your mobile number
    </p>
    <input
      type="text"
      placeholder="Enter mobile number"
      maxLength={10}
      value={form.phone}
      onChange={e => {
        if (/^\d*$/.test(e.target.value)) handleChange("phone", e.target.value);
      }}
      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-[#C4D9FF]/60 focus:outline-none"
      required
    />
  </div>
)}

{/* Business / Enterprise */}
{isBusinessOrEnterprise && (
  <>
    {/* GST step */}
    {step === 2 && (
      <div className="space-y-1">
        <p className="text-lg font-semibold text-slate-900">GST Number</p>
        <input
          type="text"
          placeholder="Enter GST number"
          maxLength={15}
          value={form.gstNo}
          onChange={e => {
            let value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
            if (value.length <= 15) handleChange("gstNo", value);
          }}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-[#C4D9FF]/60 focus:outline-none"
          required
        />
      </div>
    )}

    {/* Contact step */}
    {step === 3 && (
      <div className="space-y-1">
        <p className="text-lg font-semibold text-slate-900">
          Enter your mobile number
        </p>
        <input
          type="text"
          placeholder="Enter mobile number"
          maxLength={10}
          value={form.phone}
          onChange={e => {
            if (/^\d*$/.test(e.target.value)) handleChange("phone", e.target.value);
          }}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-[#C4D9FF]/60 focus:outline-none"
          required
        />
      </div>
    )}
  </>
)}


                  {/* step 3: Condition */}
                  {/* {step === 3 && (
                    <>
                      <div className="space-y-1">
                        <p className="text-lg font-semibold text-slate-900">
                          Select {deviceLabel} condition.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm md:text-base">
                        {["Damaged", "Undamaged"].map(option => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => handleChange("condition", option)}
                            className={`rounded-xl border px-6 py-3 font-medium transition flex-1 min-w-[130px] justify-center ${
                              form.condition === option
                                ? "border-[#C5BAFF] bg-[#F4F1FF] text-slate-900 shadow-sm"
                                : "border-slate-200 bg-white hover:border-[#C4D9FF]"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </>
                  )} */}



            {/*E*/}
                                {/*step:5 GST*/}

                  {step === 4 && showGST && (
              <>
                <div className="space-y-1">
                  <p className="text-lg font-semibold text-slate-900">GST Number</p>
                </div>

                <input
                  type="text"
                  placeholder="Enter GST number"
                  maxLength={15}
                  value={form.gstNo}
                  onChange={e => {
                    // allow only uppercase letters & numbers
                    let value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
                    if (value.length <= 15) handleChange("gstNo", value);
                  }}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm md:text-base 
                            focus:ring-2 focus:ring-[#C4D9FF]/60 focus:outline-none"
                  required
                />

                {/* Live validation message */}
                {form.gstNo && !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]$/.test(form.gstNo) && (
                  <p className="text-xs text-red-500 mt-1">
                    Invalid GST format. Example: 22AAAAA1234A1Z5
                  </p>
                )}
              </>
            )}



    {/* F */}

                  {/* step 5: Contact */}
                 {/* Contact step */}
{(!showGST ? step === 4 : step === 5) && (
  <>
  <div className="space-y-1">
    <p className="text-lg font-semibold text-slate-900">
      Enter your mobile number
    </p>
  </div>

  <div className="space-y-1.5">
    <label className="text-xs font-medium text-slate-600">
      Mobile number <span className="text-red-500">*</span>
    </label>
<input
  type="text"
  inputMode="numeric"
  pattern="[0-9]*"
  placeholder="Enter mobile number"
  maxLength={10}
  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-[#C4D9FF]/60 focus:outline-none"
  value={form.phone}
  onChange={(e) => {
    const value = e.target.value;
    // Allow only numbers
    if (/^\d*$/.test(value)) {
      handleChange("phone", value);
    }
  }}
  required
/>

  </div>
</>

)}

 {/* G*/}
                  {/* step 6: Review */}
                
{(!showGST ? step === 5 : step === 6) && (
  <>
    <div className="space-y-1">
      <p className="text-lg font-semibold text-slate-900">
        Review your request before submitting
      </p>
      <p className="text-xs text-slate-500">
        Check your device details and contact information. You can still go back.
      </p>
    </div>
    <ul className="text-sm md:text-base text-slate-700 space-y-1.5 rounded-xl border border-slate-100 bg-slate-50/70 p-4">
      <li>
        <span className="font-medium text-slate-500">Device:</span>{" "}
        <span className="font-semibold text-slate-900">
          {form.deviceType || "Not specified"}
        </span>
      </li>
      <li>
        <span className="font-medium text-slate-500">Capacity:</span>{" "}
        <span className="font-semibold text-slate-900">
          {form.capacity || "Not specified"}
        </span>
      </li>
    
      <li>
        <span className="font-medium text-slate-500">Phone:</span>{" "}
        <span className="font-semibold text-slate-900">
          {form.phone || "Not provided"}
        </span>
      </li>

       {showGST && (
    <li>
      <span className="font-medium text-slate-500">GST Number:</span>{" "}
      <span className="font-semibold text-slate-900">
        {form.gstNo || "Not provided"}
      </span>
    </li>
  )}
    </ul>
    <p className="text-xs text-slate-400">
      By submitting, you agree to be contacted during business hours.
    </p>
  </>
)}

                </motion.div>
              </AnimatePresence>

                       {errorMessage && (
                <p className="text-xs font-medium text-red-600">{errorMessage}</p>
              )}
              {submitted && (
                <p className="text-xs font-medium text-emerald-600">
                  ✓ Thank you! Your request has been submitted successfully.
                </p>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={step === 1 || submitting}
                  className={`text-xs sm:text-sm px-3 py-2 rounded-full border flex items-center gap-1 ${
                    step === 1 || submitting
                      ? "border-slate-200 text-slate-300 cursor-not-allowed"
                      : "border-slate-300 text-slate-700 hover:border-slate-500 hover:bg-slate-50"
                  }`}
                >
                  ← Back
                </button>

                {step < STEPS.length ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!canGoNext() || submitting}
                    className={`rounded-full px-5 py-2 text-xs sm:text-sm md:text-base font-semibold text-white shadow-sm ${
                      !canGoNext() || submitting
                        ? "bg-[#9ebdf9] cursor-not-allowed"
                        : "bg-[#b2a5f1] hover:bg-[#9c88f7]"
                    }`}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting}
                    className="rounded-full bg-[#C5BAFF] px-5 py-2 text-xs sm:text-sm md:text-base font-semibold text-slate-900 hover:bg-[#b1a0ff] disabled:opacity-60"
                  >
                    {submitting ? "Submitting…" : "Submit request"}
                  </button>
                )}
              </div>
            </form>
          </div>






<aside className="w-full lg:w-1/2 space-y-6">
  <div className="rounded-2xl bg-white/90 border border-slate-100 shadow-sm p-6 md:p-7 space-y-5">

    {/* Header */}
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-xs text-slate-500 tracking-[0.18em] uppercase">
          Summary
        </p>
        <p className="mt-1 text-xl font-semibold text-slate-900">
          {form.service || "Not selected"}
        </p>
      </div>

      {/* <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-[11px] font-medium border border-emerald-100">
        Priority case review
      </span> */}
    </div>

    {/* PHONE NUMBER */}
    <div className="grid grid-cols-1 gap-4 text-sm md:text-base">
      <div>
        <p className="text-slate-500 uppercase tracking-wide text-[11px]">
          Phone Number
        </p>
        <p className="mt-1 text-lg font-medium text-slate-900">
          {form.phone || "Not entered"}
        </p>
      </div>
    </div>

    {/* GST only for Business + Enterprise */}
    {(plan === "Business" || plan === "Enterprise") && (
      <div className="grid grid-cols-1 gap-4 text-sm md:text-base">
        <div>
          <p className="text-slate-500 uppercase tracking-wide text-[11px]">
            GST Number
          </p>
          <p className="mt-1 text-lg font-medium text-slate-900">
            {form.gst || "Not entered"}
          </p>
        </div>
      </div>
    )}

{/* Step bar */}
<ol className="mt-4 grid grid-cols-3 gap-4">
  {(
    ["business", "enterprise"].includes(plan?.toLowerCase())
      ? ["Service", "GST", "Contact"]  
      : ["Service", "Contact"]         
  ).map((label, index, arr) => {
    const idx = index + 1;
    const active = summaryStepIndex === idx;
    const completed = summaryStepIndex > idx;

    return (
      <li key={label} className="space-y-1">
        <div
          className={[
            "mx-auto h-2 rounded-full",
            completed
              ? "bg-emerald-400"
              : active
              ? "bg-[#ea7d7d]"
              : "bg-slate-200"
          ].join(" ")}
        />
        <p
          className={[
            "text-[11px] leading-snug text-center",
            active ? "font-semibold text-slate-900" : "text-slate-500"
          ].join(" ")}
        >
          {label}
        </p>
      </li>
    );
  })}
</ol>

  </div>
</aside>





















        </div>
      </div>
      <Pricing/>
    </section>
  );
}

export default BookServices;
