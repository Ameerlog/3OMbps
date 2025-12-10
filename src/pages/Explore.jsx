import React, { useState } from "react";
import { motion } from "framer-motion";

const ZOHO_FORM_ACTION =
  "https://forms.zohopublic.in/30mbpscomgm1/form/Enquiryform/formperma/Mc6Ean5qqi-A7eRcLCTXdUODAkFIvBubUc_IQOBtJjI/htmlRecords/submit";

const Explore = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    age: "",
    gender: "",
    qualification: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    region: "",
    zipCode: "",
    country: "-Select-",
  };

  const [form, setForm] = useState(initialState);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.firstName || !form.phone || !form.addressLine1) {
      alert("Please fill in First Name, Phone, and Street Address.");
      return;
    }

    if (!form.country || form.country === "-Select-") {
      alert("Please select your country.");
      return;
    }

    const phoneDigitsOnly = form.phone.replace(/\D/g, "");
    if (!/^\d{10}$/.test(phoneDigitsOnly)) {
      alert("Enter a valid 10-digit phone number.");
      return;
    }

    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      alert("Enter a valid email address.");
      return;
    }

    if (form.age && !/^\d+$/.test(form.age)) {
      alert("Age must be numeric.");
      return;
    }

    const hiddenForm = document.createElement("form");
    hiddenForm.method = "POST";
    hiddenForm.action = ZOHO_FORM_ACTION;
    hiddenForm.enctype = "multipart/form-data";
    hiddenForm.acceptCharset = "UTF-8";
    hiddenForm.target = "enquiry_hidden_iframe";
    hiddenForm.style.display = "none";

    const addField = (name, value) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value ?? "";
      hiddenForm.appendChild(input);
    };

    addField("zf_referrer_name", window.location.href);
    addField("zf_redirect_url", "");
    addField("zc_gad", "");

    addField("SingleLine", form.firstName);
    addField("SingleLine2", form.lastName);
    addField("PhoneNumber_countrycode", phoneDigitsOnly);
    addField("Email", form.email);
    addField("Number", form.age);
    addField("SingleLine1", form.gender);
    addField("SingleLine3", form.qualification);

    addField("Address_AddressLine1", form.addressLine1);
    addField("Address_AddressLine2", form.addressLine2);
    addField("Address_City", form.city);
    addField("Address_Region", form.region);
    addField("Address_ZipCode", form.zipCode);
    addField("Address_Country", form.country);

    document.body.appendChild(hiddenForm);
    hiddenForm.submit();
    document.body.removeChild(hiddenForm);

    setForm(initialState);
    alert("Enquiry submitted!");
  };

  const cardVariants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
  };

  const basicFields = [
    { label: "First Name *", field: "firstName", type: "text" },
    { label: "Last Name", field: "lastName", type: "text" },
    { label: "Phone *", field: "phone", type: "tel", maxLength: 10 },
    { label: "Email", field: "email", type: "email" },
    { label: "Age", field: "age", type: "text" },
    { label: "Qualification", field: "qualification", type: "text" },
  ];

  return (
    <section
      className="relative w-full py-16 md:py-20 overflow-hidden"
      style={{
        background: "linear-gradient(135deg,#FFFFFF,#E8F9FF 30%,#FBFBFB)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-8">
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">
            Simplify your data recovery journey
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Fill the details and we will contact you during business hours.
          </p>
        </header>

        <motion.form
          onSubmit={handleSubmit}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={cardVariants}
          className="bg-white/95 rounded-2xl border border-slate-100 shadow-[0_18px_55px_rgba(15,23,42,0.06)] p-6 md:p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {basicFields.map(({ label, field, type, maxLength }) => (
              <div key={field}>
                <label className="text-xs font-semibold text-slate-600">
                  {label}
                </label>
                <input
                  type={type}
                  maxLength={maxLength}
                  value={form[field]}
                  onChange={(e) => handleChange(field, e.target.value)}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 mt-1 focus:ring-2 outline-none"
                  placeholder={label.replace(" *", "")}
                />
              </div>
            ))}

            {/* Gender Dropdown */}
            <div>
              <label className="text-xs font-semibold text-slate-600">
                Gender
              </label>
              <select
                value={form.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 mt-1 bg-white focus:ring-2 outline-none"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="text-xs font-semibold text-slate-600">
                Street Address *
              </label>
              <input
                type="text"
                value={form.addressLine1}
                onChange={(e) => handleChange("addressLine1", e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 mt-1 focus:ring-2 outline-none"
                placeholder="House / street / area"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-xs font-semibold text-slate-600">
                Address Line 2
              </label>
              <input
                type="text"
                value={form.addressLine2}
                onChange={(e) => handleChange("addressLine2", e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 mt-1 focus:ring-2 outline-none"
                placeholder="Optional landmark / floor"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600">City</label>
              <input
                type="text"
                value={form.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 mt-1"
                placeholder="City"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600">
                State / Region / Province
              </label>
              <input
                type="text"
                value={form.region}
                onChange={(e) => handleChange("region", e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 mt-1"
                placeholder="State / Region"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600">
                Postal / Zip Code
              </label>
              <input
                type="text"
                value={form.zipCode}
                onChange={(e) => handleChange("zipCode", e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 mt-1"
                placeholder="Zip Code"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-600">
                Country *
              </label>
              <select
                value={form.country}
                onChange={(e) => handleChange("country", e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 mt-1 bg-white focus:ring-2 outline-none"
              >
                <option value="-Select-">-Select-</option>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100">
            <button
              type="submit"
              className="rounded-full px-5 py-2 text-sm font-semibold text-white bg-[#b2a5f1] hover:bg-[#9c88f7]"
            >
              Submit
            </button>
          </div>
        </motion.form>

        <iframe name="enquiry_hidden_iframe" className="hidden" title="hidden" />
      </div>
    </section>
  );
};

export default Explore;
