"use client";

import { useState } from "react";

export default function ContactPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const servicesList = [
    { value: "structural", label: "Structural Engineering & Design" },
    { value: "contracting", label: "General Contracting & Erection" },
    { value: "audit", label: "Code Compliance Audit & Load Inspection" },
    { value: "retrofitting", label: "Seismic & Building Retrofitting" },
    { value: "other", label: "Other / Custom Collaboration" }
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Section 1: Dial up side and contact form (Full Screen) */}
      <section id="contact-section" className="bg-slate-white min-h-viewport flex flex-col justify-center border-b border-slate-200/80">
        <div className="max-w-screen-2xl mx-auto w-full px-12 md:px-20 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Contact Information & Direct Lines */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
              Direct Contact
            </span>
            <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
              Connect With Us Directly
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-steel-slate mb-10 max-w-lg">
              Need immediate estimates or structural consulting? Skip the forms and connect directly with our head offices or operations team.
            </p>

            <div className="flex flex-col gap-6">
              {/* Phone Direct */}
              <div className="border border-slate-200 p-8 rounded-sm bg-slate-white shadow-sm flex items-start gap-5">
                <div className="w-12 h-12 rounded-sm bg-blueprint-grey flex items-center justify-center font-space-grotesk font-extrabold text-cobalt-blue select-none text-xl">
                  📞
                </div>
                <div>
                  <h3 className="font-space-grotesk text-base font-bold text-slate-900 mb-1">
                    Call Direct
                  </h3>
                  <a href="tel:+15550199" className="font-space-grotesk text-lg font-bold text-cobalt-blue hover:underline">
                    +1 (555) 0199
                  </a>
                </div>
              </div>

              {/* Email Direct */}
              <div className="border border-slate-200 p-8 rounded-sm bg-slate-white shadow-sm flex items-start gap-5">
                <div className="w-12 h-12 rounded-sm bg-blueprint-grey flex items-center justify-center font-space-grotesk font-extrabold text-cobalt-blue select-none text-xl">
                  ✉️
                </div>
                <div>
                  <h3 className="font-space-grotesk text-base font-bold text-slate-900 mb-1">
                    Email Division
                  </h3>
                  <a href="mailto:info@jdconstruction.com" className="font-space-grotesk text-lg font-bold text-cobalt-blue hover:underline">
                    info@jdconstruction.com
                  </a>
                </div>
              </div>

              {/* Office Address */}
              <div className="border border-slate-200 p-8 rounded-sm bg-slate-white shadow-sm flex items-start gap-5">
                <div className="w-12 h-12 rounded-sm bg-blueprint-grey flex items-center justify-center font-space-grotesk font-extrabold text-cobalt-blue select-none text-xl">
                  🏢
                </div>
                <div>
                  <h3 className="font-space-grotesk text-base font-bold text-slate-900 mb-1">
                    Headquarters
                  </h3>
                  <p className="font-sans text-sm md:text-base text-steel-slate leading-relaxed">
                    100 Structural Avenue, Industrial Area
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Professional Estimating Form */}
          <div className="lg:col-span-7 bg-blueprint-grey border border-slate-200 p-10 rounded-sm shadow-sm relative flex flex-col justify-center">
            <h3 className="font-space-grotesk text-xl font-bold text-slate-900 mb-3">
              Project Inquiry Form
            </h3>
            <p className="font-sans text-sm text-steel-slate mb-8">
              Complete the structural profile below and our managing director will contact you.
            </p>

            <form className="flex flex-col gap-6 font-sans">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="font-space-grotesk text-xs font-bold text-slate-900">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-white border border-slate-200 px-5 py-4 rounded-sm text-sm focus:outline-none focus:border-cobalt-blue focus:ring-1 focus:ring-cobalt-blue"
                    required
                  />
                </div>
                {/* Company Name */}
                <div className="flex flex-col gap-2">
                  <label className="font-space-grotesk text-xs font-bold text-slate-900">
                    Company Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-white border border-slate-200 px-5 py-4 rounded-sm text-sm focus:outline-none focus:border-cobalt-blue focus:ring-1 focus:ring-cobalt-blue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label className="font-space-grotesk text-xs font-bold text-slate-900">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-white border border-slate-200 px-5 py-4 rounded-sm text-sm focus:outline-none focus:border-cobalt-blue focus:ring-1 focus:ring-cobalt-blue"
                    required
                  />
                </div>
                {/* Phone Number */}
                <div className="flex flex-col gap-2">
                  <label className="font-space-grotesk text-xs font-bold text-slate-900">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    className="w-full bg-slate-white border border-slate-200 px-5 py-4 rounded-sm text-sm focus:outline-none focus:border-cobalt-blue focus:ring-1 focus:ring-cobalt-blue"
                    required
                  />
                </div>
              </div>

              {/* Service Type Custom Dropdown (100% custom-styled, no native elements) */}
              <div className="relative flex flex-col gap-2">
                <label className="font-space-grotesk text-xs font-bold text-slate-900">
                  Required Service
                </label>
                
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full bg-slate-white border border-slate-200 px-5 py-4 rounded-sm text-sm text-left flex justify-between items-center focus:outline-none focus:border-cobalt-blue focus:ring-1 focus:ring-cobalt-blue cursor-pointer"
                  >
                    <span className={selectedService ? "text-slate-900 font-medium" : "text-steel-slate/40"}>
                      {selectedService 
                        ? servicesList.find(s => s.value === selectedService)?.label 
                        : "Select a Category"}
                    </span>
                    <span className={`text-xs transition-transform duration-200 text-steel-slate/60 ${isOpen ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>

                  {/* Hidden input for form validation */}
                  <input type="hidden" name="service" value={selectedService} required />

                  {/* Options overlay */}
                  {isOpen && (
                    <>
                      {/* Click outside overlay backdrop */}
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setIsOpen(false)}
                      />
                      <div className="absolute z-20 w-full mt-1.5 bg-slate-white border border-slate-200 shadow-md rounded-sm py-1.5 font-sans text-sm max-h-60 overflow-y-auto">
                        {servicesList.map((service) => (
                          <button
                            key={service.value}
                            type="button"
                            onClick={() => {
                              setSelectedService(service.value);
                              setIsOpen(false);
                            }}
                            className="w-full text-left px-5 py-3 hover:bg-blueprint-grey/50 transition-colors text-steel-slate hover:text-cobalt-blue font-medium"
                          >
                            {service.label}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="font-space-grotesk text-xs font-bold text-slate-900">
                  Project Details
                </label>
                <textarea 
                  rows={4}
                  className="w-full bg-slate-white border border-slate-200 px-5 py-4 rounded-sm text-sm focus:outline-none focus:border-cobalt-blue focus:ring-1 focus:ring-cobalt-blue resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-cobalt-blue text-slate-white font-space-grotesk text-sm font-bold tracking-wide uppercase py-5 hover:bg-slate-900 transition-colors shadow-md rounded-sm cursor-pointer"
              >
                Submit Project Inquiry
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
