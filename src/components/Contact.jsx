// import React, { useState } from "react";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";

// const STEPS = ["Device", "Capacity", "Condition", "Details", "Contact", "Review"];

// const DEVICE_TYPES = [
//   { label: "Hard Drive", value: "Hard Drive" },
//   { label: "SSD", value: "SSD" },
//   { label: "SD Card", value: "SD CARD" },
//   { label: "USB Drive", value: "USB" },
//   { label: "DVD", value: "DVD" },
//   { label: "OLD Gadgets", value: "OLD Gadgets" },
//   { label: "Mini discs", value: "Mini discs" },
//   { label: " (Other)", value: "Others" }
// ];

// const CAPACITY_OPTIONS = [
//   "16GB",
//   "32GB",
//   "64GB",
//   "128GB",
//   "160 GB",
//   "256 GB",
//   "320 GB",
//   "500 GB",
//   "1 TB",
//   "Upto 5 TB"
// ];

// const stepContentVariants = {
//   initial: { opacity: 0, y: 16 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -16 }
// };

// const HUBSPOT_PORTAL_ID = "244057338";
// const HUBSPOT_FORM_GUID = "b510d417-ab7c-435c-a774-dfa1e751408b";

// function Contact() {
//   const [step, setStep] = useState(1);
//   const [submitting, setSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const [form, setForm] = useState({
//     deviceType: "",
//     capacity: "",
//     condition: "", 
//     details: "",
//     name: "",
//     email: "",
//     phone: ""
//   });

//   const deviceLabel = form.deviceType || "Not selected";
//   const capacityLabel = form.capacity || "Not selected";
//   const issueLabel = form.details ? "Provided" : "Not specified";
//   const conditionLabel = form.condition || "Not selected";

//   const handleChange = (field, value) => {
//     setForm(prev => ({ ...prev, [field]: value }));
//     setSubmitted(false);
//     setErrorMessage("");
//   };

//   const canGoNext = () => {
//     if (step === 1) return !!form.deviceType;
//     if (step === 2) return !!form.capacity;
//     if (step === 3) return !!form.condition;           
//     if (step === 5) return !!(form.name && form.email && form.phone); 
//     return true;
//   };

//   const handleNext = () => {
//     if (!canGoNext()) return;
//     setStep(prev => Math.min(prev + 1, STEPS.length));
//   };

//   const handleBack = () => {
//     setStep(prev => Math.max(prev - 1, 1));
//   };

//   const handleSubmit = async event => {
//     event.preventDefault();
//     if (!canGoNext()) return;

//     setSubmitting(true);
//     setSubmitted(false);
//     setErrorMessage("");

//     try {
//       const url = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;

//       const payload = {
//         fields: [
//           { name: "firstname", value: form.name },
//           { name: "email", value: form.email },
//           { name: "phone", value: form.phone },
//           { name: "device_type", value: form.deviceType },
//           { name: "device_capacity", value: form.capacity },
//           { name: "device_condition", value: form.condition }, 
//           { name: "recovery_details", value: form.details }
//         ],
//         context: {
//           pageUri: window.location.href,
//           pageName: document.title
//         }
//       };

//       await axios.post(url, payload, {
//         headers: { "Content-Type": "application/json" }
//       });

//       setSubmitted(true);
//     } catch (error) {
//       console.error(error?.response?.data || error.message);
//       setErrorMessage("Unable to submit your request right now. Please try again.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

 
//   const summaryStepIndex = Math.min(step, 5);

//   return (
//     <section
//       id="contact"
//       className="relative w-full py-16 overflow-hidden"
//       style={{
//         background:
//           "linear-gradient(135deg, #FFFFFF 0%, #E8F9FF 30%, #E8F9FF 65%, #E8F9FF 100%)"
//       }}
//     >
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             "linear-gradient(to right, #E8F9FF 0%, #FBFBFB 50%, #C5BAFF 100%)",
//           opacity: 0.25
//         }}
//       />

//       <div className="relative max-w-6xl mx-auto px-4 space-y-10">
//         <header className="w-full flex flex-col items-center text-center mt-16 px-4">
//           <h2 className="text-6xl md:text-6xl font-semibold text-slate-800 max-w-3xl">
//             Introduction To 30Mbps
//           </h2>

//           <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl">
//             Share your device details and contact information so our team can review
//             your case and suggest the best next steps.
//           </p>
//         </header>

//         <div className="flex flex-col lg:flex-row gap-10 lg:items-start">
//           <div className="w-full lg:w-1/2">
//             <form
//               onSubmit={handleSubmit}
//               className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8 space-y-6"
//             >
//               <header className="space-y-2">
//                 <div className="flex items-center justify-between gap-4">
//                   <div className="space-y-1">
//                     <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
//                       Step {step} of {STEPS.length}
//                     </p>
//                     <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
//                       Data recovery request
//                     </h3>
//                   </div>
//                   <span className="hidden md:inline-flex items-center rounded-full bg-[#b8aafc] px-4 py-1 text-[11px] font-medium text-slate-900">
//                     We&apos;ll call back during business hours
//                   </span>
//                 </div>
//               </header>

//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={step}
//                   variants={stepContentVariants}
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                   transition={{ duration: 0.2 }}
//                   className="space-y-4"
//                 >
               
//                   {step === 1 && (
//                     <>
//                       <p className="text-lg font-medium text-slate-800">
//                         Which device do you need help with?
//                       </p>
//                       <div className="flex flex-wrap gap-3">
//                         {DEVICE_TYPES.map(item => (
//                           <button
//                             key={item.value}
//                             type="button"
//                             onClick={() => handleChange("deviceType", item.value)}
//                             className={`rounded-xl border px-6 py-3 text-sm md:text-base font-medium transition ${
//                               form.deviceType === item.value
//                                 ? "border-[#C5BAFF] bg-[#C5BAFF]/12 text-slate-900"
//                                 : "border-slate-200 bg-white hover:border-[#C4D9FF]"
//                             }`}
//                           >
//                             {item.label}
//                           </button>
//                         ))}
//                       </div>
//                     </>
//                   )}

//                   {step === 2 && (
//                     <>
//                       <p className="text-lg font-medium text-slate-800">
//                         What is the capacity of {deviceLabel}?
//                       </p>
//                       <div className="flex flex-wrap gap-3 text-sm md:text-base">
//                         {CAPACITY_OPTIONS.map(capacity => (
//                           <button
//                             key={capacity}
//                             type="button"
//                             onClick={() => handleChange("capacity", capacity)}
//                             className={`rounded-xl border px-4 py-3 transition ${
//                               form.capacity === capacity
//                                 ? "border-[#C5BAFF] bg-[#C5BAFF]/12 text-slate-900"
//                                 : "border-slate-200 bg-white hover:border-[#C4D9FF]"
//                             }`}
//                           >
//                             {capacity}
//                           </button>
//                         ))}
//                       </div>
//                     </>
//                   )}

//                   {/* step 3: Condition (Damaged / Undamaged) */}
//                   {step === 3 && (
//                     <>
//                       <p className="text-lg font-medium text-slate-800">
//                         Is your {deviceLabel} physically damaged or undamaged?
//                       </p>
//                       <div className="flex flex-wrap gap-3 text-sm md:text-base">
//                         {["Damaged", "Undamaged"].map(option => (
//                           <button
//                             key={option}
//                             type="button"
//                             onClick={() => handleChange("condition", option)}
//                             className={`rounded-xl border px-6 py-3 font-medium transition ${
//                               form.condition === option
//                                 ? "border-[#C5BAFF] bg-[#C5BAFF]/12 text-slate-900"
//                                 : "border-slate-200 bg-white hover:border-[#C4D9FF]"
//                             }`}
//                           >
//                             {option}
//                           </button>
//                         ))}
//                       </div>
//                     </>
//                   )}

//                   {/* step 4: Details */}
//                   {step === 4 && (
//                     <>
//                       <p className="text-lg font-medium text-slate-800">
//                         What happened to {deviceLabel}?{" "}
//                         <span className="text-slate-400 text-sm">(optional)</span>
//                       </p>
//                       <textarea
//                         rows={4}
//                         className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-[#C4D9FF]/60"
//                         placeholder={
//                           form.deviceType
//                             ? `Describe what happened to your ${form.deviceType} (not detected, noise, deleted files, etc.).`
//                             : "Describe what happened or which data is critical."
//                         }
//                         value={form.details}
//                         onChange={event => handleChange("details", event.target.value)}
//                       />
//                     </>
//                   )}

//                   {/* step 5: Contact */}
//                   {step === 5 && (
//                     <>
//                       <p className="text-lg font-medium text-slate-800">
//                         How can we contact you?
//                       </p>
//                       <div className="grid gap-3 md:grid-cols-2">
//                         <div className="md:col-span-2">
//                           <input
//                             type="text"
//                             placeholder="Full name"
//                             className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-[#C4D9FF]/60"
//                             value={form.name}
//                             onChange={event => handleChange("name", event.target.value)}
//                             required
//                           />
//                         </div>
//                         <input
//                           type="email"
//                           placeholder="Work email"
//                           className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-[#C4D9FF]/60"
//                           value={form.email}
//                           onChange={event => handleChange("email", event.target.value)}
//                           required
//                         />
//                         <input
//                           type="tel"
//                           placeholder="Mobile number"
//                           maxLength={10}
//                           className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-[#C4D9FF]/60"
//                           value={form.phone}
//                           onChange={event => handleChange("phone", event.target.value)}
//                           required
//                         />
//                       </div>
//                       <p className="text-xs text-slate-400">
//                         Your details are used only to follow up on this request.
//                       </p>
//                     </>
//                   )}

//                   {/* step 6: Review */}
//                   {step === 6 && (
//                     <>
//                       <p className="text-lg font-medium text-slate-800">
//                         Review your request before submitting
//                       </p>
//                       <ul className="text-sm md:text-base text-slate-700 space-y-1">
//                         <li>
//                           <span className="font-medium">Device:</span>{" "}
//                           {form.deviceType || "Not specified"}
//                         </li>
//                         <li>
//                           <span className="font-medium">Capacity:</span>{" "}
//                           {form.capacity || "Not specified"}
//                         </li>
//                         <li>
//                           <span className="font-medium">Condition:</span>{" "}
//                           {form.condition || "Not specified"}
//                         </li>
//                         <li>
//                           <span className="font-medium">Name:</span>{" "}
//                           {form.name || "Not provided"}
//                         </li>
//                         <li>
//                           <span className="font-medium">Email:</span>{" "}
//                           {form.email || "Not provided"}
//                         </li>
//                         <li>
//                           <span className="font-medium">Phone:</span>{" "}
//                           {form.phone || "Not provided"}
//                         </li>
//                         <li>
//                           <span className="font-medium">Notes:</span>{" "}
//                           {form.details || "No additional details"}
//                         </li>
//                       </ul>
//                       <p className="text-xs text-slate-400">
//                         By submitting, you agree to be contacted during business hours.
//                       </p>
//                     </>
//                   )}
//                 </motion.div>
//               </AnimatePresence>

//               {errorMessage && (
//                 <p className="text-xs font-medium text-red-600">{errorMessage}</p>
//               )}
//               {submitted && (
//                 <p className="text-xs font-medium text-emerald-600">
//                   Thank you. Your request has been received.
//                 </p>
//               )}

//               <div className="flex items-center justify-between pt-2">
//                 <button
//                   type="button"
//                   onClick={handleBack}
//                   disabled={step === 1 || submitting}
//                   className={`text-xs sm:text-sm px-3 py-2 rounded-full border ${
//                     step === 1 || submitting
//                       ? "border-slate-200 text-slate-300 cursor-not-allowed"
//                       : "border-slate-300 text-slate-700 hover:border-slate-500"
//                   }`}
//                 >
//                   Back
//                 </button>

//                 {step < STEPS.length ? (
//                   <button
//                     type="button"
//                     onClick={handleNext}
//                     disabled={!canGoNext() || submitting}
//                     className={`rounded-full px-5 py-2 text-xs sm:text-sm md:text-base font-semibold text-white ${
//                       !canGoNext() || submitting
//                         ? "bg-[#9ebdf9] cursor-not-allowed"
//                         : "bg-[#b2a5f1] hover:bg-[#9c88f7]"
//                     }`}
//                   >
//                     Next
//                   </button>
//                 ) : (
//                   <button
//                     type="submit"
//                     disabled={submitting}
//                     className="rounded-full bg-[#C5BAFF] px-5 py-2 text-xs sm:text-sm md:text-base font-semibold text-slate-900 hover:bg-[#b1a0ff] disabled:opacity-60"
//                   >
//                     {submitting ? "Submitting…" : "Submit request"}
//                   </button>
//                 )}
//               </div>
//             </form>
//           </div>

//           {/* right  */}
//           <aside className="w-full lg:w-1/2 space-y-6">
//             <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 space-y-5">
//               <div>
//                 <p className="text-xs text-slate-500 tracking-wide uppercase">
//                   Your device
//                 </p>
//                 <p className="text-lg font-semibold text-slate-900">
//                   {deviceLabel}
//                 </p>
//               </div>

//               <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
//                 <div>
//                   <p className="text-slate-500 uppercase tracking-wide text-[11px]">
//                     Media capacity
//                   </p>
//                   <p className="text-lg font-medium text-slate-900">
//                     {capacityLabel}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-slate-500 uppercase tracking-wide text-[11px]">
//                     Device condition
//                   </p>
//                   <p className="text-lg font-medium text-slate-900">
//                     {conditionLabel}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-2">
//                 <p className="text-slate-500 uppercase tracking-wide text-[11px]">
//                   Media problem
//                 </p>
//                 <p className="text-lg font-medium text-slate-900">
//                   {issueLabel}
//                 </p>
//               </div>

//               <ol className="mt-4 grid grid-cols-4 gap-4">
//                 {[
//                   "Your device",
//                   "Media capacity",
//                   "Condition",
//                   "Contact details"
//                 ].map((label, index) => {
//                   const idx = index + 1;
//                   const active = summaryStepIndex === idx;
//                   const completed = summaryStepIndex > idx;

//                   return (
//                     <li key={label} className="space-y-1">
//                       <div
//                         className={[
//                           "mx-auto h-2 rounded-full",
//                           completed
//                             ? "bg-[#C4D9FF]"
//                             : active
//                             ? "bg-[#C5BAFF]"
//                             : "bg-slate-200"
//                         ].join(" ")}
//                       />
//                       <p
//                         className={[
//                           "text-[11px] leading-snug text-center",
//                           active ? "font-semibold text-slate-900" : "text-slate-500"
//                         ].join(" ")}
//                       >
//                         {label}
//                       </p>
//                     </li>
//                   );
//                 })}
//               </ol>
//             </div>

//             <ul className="flex flex-wrap gap-4 text-sm md:text-base text-slate-700 font-medium">
//               <li className="flex-1 min-w-[150px]">
//                 Data recovery (case dependent)
//               </li>
//               <li className="flex-1 min-w-[150px]">
//                 Trusted recovery specialists
//               </li>
//               <li className="flex-1 min-w-[150px]">100% data privacy</li>
//             </ul>
//           </aside>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const STEPS = ["Device", "Capacity", "Condition", "Details", "Contact", "Review"];


const DEVICE_TYPES = [
  { label: "Hard Drive", value: "HDD" },
  { label: "SSD", value: "SDD" },
  { label: "SD Card", value: "SD Card" },
  { label: "USB Drive", value: "USB Drive" },
  { label: "DVD", value: "DVD" },
  { label: "CD", value: "CD" },
  { label: "OLD Gadgets", value: "Old Gadgets" },
  { label: "Mini discs", value: "Mini Disks" }
];


const CAPACITY_OPTIONS = [
  "16 GB",
  "32 GB",
  "64 GB",
  "128 GB",
  "256 GB",
  "512 GB",
  "1 TB",
  "Upto 5 TB"
];


const stepContentVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 }
};


// URL
const ZOHO_FORM_ACTION = "https://forms.zohopublic.in/30mbpscomgm1/form/ContactUs1/formperma/km2mXugiRKU7tm18voguWY4XTd-H0-CPzcs9N_6WnXI/htmlRecords/submit";


function Contact() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const [form, setForm] = useState({
    deviceType: "",
    capacity: "",
    condition: "",
    details: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });


  const deviceLabel = form.deviceType || "Not selected";
  const capacityLabel = form.capacity || "Not selected";
  const issueLabel = form.details ? "Provided" : "Not specified";
  const conditionLabel = form.condition || "Not selected";


  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setErrorMessage("");
    setSubmitted(false);
  };


  const canGoNext = () => {
    if (step === 1) return !!form.deviceType;
    if (step === 2) return !!form.capacity;
    if (step === 3) return !!form.condition;
    if (step === 5) return !!(form.firstName && form.lastName && form.email && form.phone);
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
    setErrorMessage("");
    setSubmitted(false);

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

      addInput('Name_First', form.firstName);
      addInput('Name_Last', form.lastName);
      addInput('PhoneNumber_countrycode', form.phone);
      addInput('Email', form.email);
      addInput('Dropdown', form.deviceType);     
      addInput('Dropdown1', form.capacity);        
      addInput('Dropdown2', form.condition);      
      addInput('MultiLine', form.details);         

    
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
          details: "",
          firstName: "",
          lastName: "",
          email: "",
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
          {/* left: multi-step form card */}
          <div className="w-full lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="bg-white/95 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-[0_18px_55px_rgba(15,23,42,0.06)] p-6 md:p-8 space-y-6"
            >
              {/* form header + progress */}
              <header className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-[0.18em]">
                      Step {step} of {STEPS.length}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-semibold text-slate-900">
                    Let's do it
                    </h3>
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
                  {/* step 1: Device */}
                  {step === 1 && (
                    <>
                      <div className="space-y-1">
                        <p className="text-lg font-semibold text-slate-900">
                          Which device do you need help with?
                        </p>
                        <p className="text-xs text-slate-500">
                          Choose the media that holds the data you want to recover.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {DEVICE_TYPES.map(item => (
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
                    </>
                  )}


                  {/* step 2: Capacity */}
                  {step === 2 && (
                    <>
                      <div className="space-y-1">
                        <p className="text-lg font-semibold text-slate-900">
                          What is the capacity of {deviceLabel}?
                        </p>
                        <p className="text-xs text-slate-500">
                          An approximate size is fine. This helps estimate effort and timelines.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2.5 text-sm md:text-base">
                        {CAPACITY_OPTIONS.map(capacity => (
                          <button
                            key={capacity}
                            type="button"
                            onClick={() => handleChange("capacity", capacity)}
                            className={`rounded-full border px-4 py-2 transition ${
                              form.capacity === capacity
                                ? "border-[#C5BAFF] bg-[#F4F1FF] text-slate-900"
                                : "border-slate-200 bg-white hover:border-[#C4D9FF]"
                            }`}
                          >
                            {capacity}
                          </button>
                        ))}
                      </div>
                    </>
                  )}


                  {/* step 3: Condition */}
                  {step === 3 && (
                    <>
                      <div className="space-y-1">
                        <p className="text-lg font-semibold text-slate-900">
                          Is your {deviceLabel} physically damaged or undamaged?
                        </p>
                        <p className="text-xs text-slate-500">
                          Think of water damage, drops, burning smell, or visible cracks.
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
                  )}


                  {/* step 4: Details */}
                  {step === 4 && (
                    <>
                      <div className="space-y-1">
                        <p className="text-lg font-semibold text-slate-900">
                          What happened to {deviceLabel}?{" "}
                          <span className="text-slate-400 text-xs font-normal">(optional)</span>
                        </p>
                        <p className="text-xs text-slate-500">
                          Describe symptoms or what you were doing when the issue started.
                        </p>
                      </div>
                      <textarea
                        rows={4}
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-[#C4D9FF]/60 focus:outline-none"
                        placeholder={
                          form.deviceType
                            ? `E.g. "${deviceLabel} is not detected, makes noise, or files were deleted accidentally."`
                            : "Describe what happened or which data is most critical."
                        }
                        value={form.details}
                        onChange={event => handleChange("details", event.target.value)}
                      />
                    </>
                  )}


                  {/* step 5: Contact */}
                  {step === 5 && (
                    <>
                      <div className="space-y-1">
                        <p className="text-lg font-semibold text-slate-900">
                          How can we contact you?
                        </p>
                        <p className="text-xs text-slate-500">
                          A specialist will reach out with an initial assessment and next steps.
                        </p>
                      </div>
                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-slate-600">
                            First name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="First name"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-[#C4D9FF]/60 focus:outline-none"
                            value={form.firstName}
                            onChange={event => handleChange("firstName", event.target.value)}
                         
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-slate-600">
                            Last name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Last name"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-[#C4D9FF]/60 focus:outline-none"
                            value={form.lastName}
                            onChange={event => handleChange("lastName", event.target.value)}

                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-slate-600">
                            Work email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            placeholder="you@company.com"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-[#C4D9FF]/60 focus:outline-none"
                            value={form.email}
                            onChange={event => handleChange("email", event.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-medium text-slate-600">
                            Mobile number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            placeholder="10-digit number"
                            maxLength={10}
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm md:text-base focus:ring-2 focus:ring-[#C4D9FF]/60 focus:outline-none"
                            value={form.phone}
                            onChange={event => handleChange("phone", event.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <p className="text-xs text-slate-400">
                        Your details are used only to follow up on this request. No spam.
                      </p>
                    </>
                  )}


                  {/* step 6: Review */}
                  {step === 6 && (
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
                          <span className="font-medium text-slate-500">Condition:</span>{" "}
                          <span className="font-semibold text-slate-900">
                            {form.condition || "Not specified"}
                          </span>
                        </li>
                        <li>
                          <span className="font-medium text-slate-500">First Name:</span>{" "}
                          <span className="font-semibold text-slate-900">
                            {form.firstName || "Not provided"}
                          </span>
                        </li>
                        <li>
                          <span className="font-medium text-slate-500">Last Name:</span>{" "}
                          <span className="font-semibold text-slate-900">
                            {form.lastName || "Not provided"}
                          </span>
                        </li>
                        <li>
                          <span className="font-medium text-slate-500">Email:</span>{" "}
                          <span className="font-semibold text-slate-900 break-all">
                            {form.email || "Not provided"}
                          </span>
                        </li>
                        <li>
                          <span className="font-medium text-slate-500">Phone:</span>{" "}
                          <span className="font-semibold text-slate-900">
                            {form.phone || "Not provided"}
                          </span>
                        </li>
                        <li>
                          <span className="font-medium text-slate-500">Notes:</span>{" "}
                          <span className="font-semibold text-slate-900">
                            {form.details || "No additional details"}
                          </span>
                        </li>
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


          {/* right: summary card */}
          <aside className="w-full lg:w-1/2 space-y-6">
            <div className="rounded-2xl bg-white/90 border border-slate-100 shadow-sm p-6 md:p-7 space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-slate-500 tracking-[0.18em] uppercase">
                    Your device
                  </p>
                  <p className="mt-1 text-xl font-semibold text-slate-900">
                    {deviceLabel}
                  </p>
                </div>
                
              </div>


              <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
                <div>
                  <p className="text-slate-500 uppercase tracking-wide text-[11px]">
                    Media capacity
                  </p>
                  <p className="mt-1 text-lg font-medium text-slate-900">
                    {capacityLabel}
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 uppercase tracking-wide text-[11px]">
                    Device condition
                  </p>
                  <p className="mt-1 text-lg font-medium text-slate-900">
                    {conditionLabel}
                  </p>
                </div>
              </div>


              <div className="mt-1">
                <p className="text-slate-500 uppercase tracking-wide text-[11px]">
                  Media problem
                </p>
                <p className="mt-1 text-sm md:text-base text-slate-900">
                  {issueLabel}
                </p>
              </div>


              <ol className="mt-4 grid grid-cols-4 gap-4">
                {[
                  "Your device",
                  "Media capacity",
                  "Condition",
                  "Contact details"
                ].map((label, index) => {
                  const idx = index + 1;
                  const active = summaryStepIndex === idx;
                  const completed = summaryStepIndex > idx;


                  return (
                    <li key={label} className="space-y-1">
                      <div
                        className={[
                          "mx-auto h-2 rounded-full",
                          completed
                            ? "bg-[#C4D9FF]"
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
    </section>
  );
}


export default Contact;

