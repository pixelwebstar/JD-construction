import HeroBanner from "@/components/HeroBanner";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      code: "01 /",
      title: "Structural Engineering",
      desc: "We provide certified structural designs, precise load calculations, seismic analysis, and steel framing blueprints signed by professional engineers.",
    },
    {
      code: "02 /",
      title: "Commercial Contracting",
      desc: "We manage full-scale commercial projects, from site preparation and concrete foundations to structural assembly and final compliance.",
    },
    {
      code: "03 /",
      title: "Code Audits & Inspections",
      desc: "We audit commercial buildings to certify load-bearing capacity, verify safety compliance, and provide official engineering reports for warehouses and facilities.",
    },
    {
      code: "04 /",
      title: "Structural Modifications",
      desc: "We reinforce structural columns, modify foundations, and retrofit steel frames to support heavy industrial machinery and facility expansions.",
    },
  ];

  const standards = [
    "ASCE 7 Minimum Design Loads Compliant",
    "AISC Code of Standard Practice Certified",
    "ACl-318 Concrete Design Audited",
    "Strict OSHA & Site Safety Compliance",
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Hero Banner (Full Viewport Height) */}
      <HeroBanner
        title="Built for Scale"
        description="From structural steel framing to full code compliance audits, we deliver absolute project precision."
      />

      {/* Section 1: All the Services (Full Screen) */}
      <section className="bg-slate-white min-h-screen flex flex-col justify-center border-b border-slate-200/80">
        <div className="max-w-screen-2xl mx-auto w-full px-12 md:px-20 py-16 md:py-24">
          <div className="flex flex-col items-start mb-16">
            <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
              Core Capabilities
            </span>
            <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Contracting & Engineering Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="border border-slate-200 p-10 rounded-sm shadow-sm bg-slate-white hover:border-cobalt-blue/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Clean Blueprint-Style Blank Image/Video Placeholder Frame */}
                  <div className="w-full aspect-[16/9] bg-blueprint-grey/50 border border-dashed border-slate-200 rounded-sm mb-8 flex items-center justify-center relative overflow-hidden select-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:20px_20px]" />
                    <span className="font-space-grotesk text-[10px] uppercase tracking-widest text-steel-slate/30 font-bold border border-slate-200/60 px-3.5 py-2 bg-slate-50/50">
                      Service Layout Frame {service.code.split(" ")[0]}
                    </span>
                  </div>

                  <span className="font-space-grotesk text-xl font-bold text-cobalt-blue mb-4 block">
                    {service.code}
                  </span>
                  <h3 className="font-space-grotesk text-2xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="font-sans text-base md:text-lg leading-relaxed text-steel-slate">
                    {service.desc}
                  </p>
                </div>
                {/* Visual anchor line */}
                <div className="w-16 h-0.5 bg-cobalt-blue/20 mt-8" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Detailed Service Showcase (Full Screen) */}
      <section className="bg-blueprint-grey min-h-screen flex flex-col justify-center border-b border-slate-200/80">
        <div className="max-w-screen-2xl mx-auto w-full px-12 md:px-20 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
              Deep Dive
            </span>
            <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
              Licensed Engineering & Load Calculations
            </h2>
            <div className="font-sans text-base md:text-lg leading-relaxed text-steel-slate flex flex-col gap-6">
              <p>
                We back every column, beam, and foundation we erect with certified load calculation reports. Our team analyzes shear forces and structure capacity to ensure absolute compliance with municipal guidelines.
              </p>
              <p>
                Whether you need to reinforce foundations for heavy industrial machinery or certify an existing warehouse to pass seismic codes, we use certified software and field auditing tools to deliver structural reports.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-white border-2 border-slate-200/80 p-10 rounded-sm relative">
            <h3 className="font-space-grotesk text-base font-bold text-cobalt-blue mb-8 uppercase tracking-wider">
              Strict Codes & Standards Followed:
            </h3>
            <ul className="flex flex-col gap-5">
              {standards.map((std, i) => (
                <li key={i} className="flex items-center gap-4 font-space-grotesk text-base font-semibold text-slate-900">
                  <span className="w-3 h-3 bg-cobalt-blue rounded-full" />
                  {std}
                </li>
              ))}
            </ul>
            <div className="mt-10 border-t border-slate-200 pt-8">
              <p className="font-sans text-xs text-steel-slate leading-relaxed">
                All structural engineering calculations are signed off by a certified Professional Engineer (P.Eng) and submitted with full architectural details.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* New Section: Standard Engineering Deliverables (Full Screen) */}
      <section className="bg-slate-white min-h-screen flex flex-col justify-center border-b border-slate-200/80">
        <div className="max-w-screen-2xl mx-auto w-full px-12 md:px-20 py-16 md:py-24">
          <div className="flex flex-col items-start mb-16">
            <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
              Certified Output
            </span>
            <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Project Handover Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-slate-200 p-8 rounded-sm bg-blueprint-grey/15 hover:border-cobalt-blue/30 transition-colors flex flex-col justify-between">
              <div>
                <span className="font-space-grotesk text-xs font-bold text-cobalt-blue mb-4 block">01 /</span>
                <h3 className="font-space-grotesk text-lg font-bold text-slate-900 mb-3">Sealed Blueprints</h3>
                <p className="font-sans text-xs md:text-sm text-steel-slate leading-relaxed">
                  Full sets of stamped architectural schematics and detailed CAD models ready for immediate municipal zoning submissions.
                </p>
              </div>
            </div>
            <div className="border border-slate-200 p-8 rounded-sm bg-blueprint-grey/15 hover:border-cobalt-blue/30 transition-colors flex flex-col justify-between">
              <div>
                <span className="font-space-grotesk text-xs font-bold text-cobalt-blue mb-4 block">02 /</span>
                <h3 className="font-space-grotesk text-lg font-bold text-slate-900 mb-3">Load Calculations Ledger</h3>
                <p className="font-sans text-xs md:text-sm text-steel-slate leading-relaxed">
                  Comprehensive engineering reports highlighting soil pressure calculations, dead load weights, and seismic shear values.
                </p>
              </div>
            </div>
            <div className="border border-slate-200 p-8 rounded-sm bg-blueprint-grey/15 hover:border-cobalt-blue/30 transition-colors flex flex-col justify-between">
              <div>
                <span className="font-space-grotesk text-xs font-bold text-cobalt-blue mb-4 block">03 /</span>
                <h3 className="font-space-grotesk text-lg font-bold text-slate-900 mb-3">Foundation Pour Logs</h3>
                <p className="font-sans text-xs md:text-sm text-steel-slate leading-relaxed">
                  Compaction reports, rebar grid layouts validation, and concrete PSI curing logs to prove absolute foundation depth standards.
                </p>
              </div>
            </div>
            <div className="border border-slate-200 p-8 rounded-sm bg-blueprint-grey/15 hover:border-cobalt-blue/30 transition-colors flex flex-col justify-between">
              <div>
                <span className="font-space-grotesk text-xs font-bold text-cobalt-blue mb-4 block">04 /</span>
                <h3 className="font-space-grotesk text-lg font-bold text-slate-900 mb-3">Welding Certifications</h3>
                <p className="font-sans text-xs md:text-sm text-steel-slate leading-relaxed">
                  Third-party non-destructive welding checkups (ultrasonic tests) certifying structural frame joints per standard guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Call to Action (Full Screen) */}
      <section className="bg-blueprint-grey min-h-screen flex flex-col justify-center text-center">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
            Direct Line
          </span>
          <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
            Need a Professional Structural Code Inspection or Estimate?
          </h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-steel-slate mb-10 max-w-2xl mx-auto">
            Contact us today to review your existing blueprint drawings, schedule an onsite code compliance check, or get a contracting estimate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/contact#contact-section" 
              className="inline-block bg-cobalt-blue text-slate-white font-space-grotesk text-sm font-bold tracking-wide uppercase px-10 py-5 hover:bg-slate-900 transition-colors shadow-md rounded-sm"
            >
              Get a Project Estimate
            </Link>
            <a 
              href="tel:+15550199" 
              className="inline-block bg-slate-white border border-slate-300 text-cobalt-blue font-space-grotesk text-sm font-bold tracking-wide uppercase px-10 py-5 hover:bg-slate-100 transition-colors rounded-sm"
            >
              Call Direct: +1 (555) 0199
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
