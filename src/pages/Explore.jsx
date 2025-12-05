import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Explore = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    dob: "",
    location: "",
    state: "",
    country: "",
    address: "",
    qualification: "",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Form submitted! Check console for data.");
  };

  const cardVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
  };

  return (
    <section
      className="relative w-full py-16 md:py-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg,#FFFFFF 0%,#E8F9FF 30%,#FBFBFB 100%)" }}
    >
      <div className="relative max-w-4xl mx-auto px-4">
        <header className="w-full flex flex-col items-center text-center mb-8">
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">
            Simplify your data recovery journey
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Fill the details below and we will contact you during business hours.
          </p>
        </header>

        <motion.form
          onSubmit={handleSubmit}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={cardVariants}
          className="bg-white/95 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-[0_18px_55px_rgba(15,23,42,0.06)] p-6 md:p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "First Name", field: "firstName", type: "text" },
              { label: "Last Name", field: "lastName", type: "text" },
              { label: "Email", field: "email", type: "email" },
              { label: "Phone", field: "phone", type: "text" },
              { label: "Age", field: "age", type: "text" },
              { label: "Date of Birth", field: "dob", type: "date" },
              { label: "Location", field: "location", type: "text" },
              { label: "State", field: "state", type: "text" },
              { label: "Country", field: "country", type: "text" },
              { label: "Qualification", field: "qualification", type: "text" },
            ].map(({ label, field, type }) => (
              <div key={field}>
                <label className="text-xs font-semibold text-slate-600">{label}</label>
                <input
                  type={type}
                  value={form[field]}
                  onChange={(e) => handleChange(field, e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 mt-1 focus:ring-2 focus:outline-none"
                  placeholder={label}
                />
              </div>
            ))}

            <div className="md:col-span-2">
              <label className="text-xs font-semibold text-slate-600">Address</label>
              <textarea
                rows={3}
                value={form.address}
                onChange={(e) => handleChange("address", e.target.value)}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 mt-1 focus:ring-2 focus:outline-none"
                placeholder="House / street / area"
              />
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100">
            <button
              type="submit"
              className="rounded-full px-5 py-2 text-sm font-semibold text-white bg-[#b2a5f1] hover:bg-[#9c88f7] shadow-sm"
            >
              Submit
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Explore;