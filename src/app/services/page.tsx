import HeroBanner from "@/components/HeroBanner";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      code: "01 /",
      title: "Structural Engineering",
      desc: "Full load-bearing calculation, seismic-resistant engineering, structural steel framing design, and commercial foundation engineering. We deliver blueprints designed for extreme durability.",
    },
    {
      code: "02 /",
      title: "Commercial Contracting",
      desc: "End-to-end site management, excavation, concrete erection, steel structural assembly, and compliance inspections. We handle heavy industrial construction with precise project control.",
    },
    {
      code: "03 /",
      title: "Code Audits & Inspections",
      desc: "Complete load-capacity audits, compliance certifications, seismic hazard checks, and structural safety documentation for commercial properties, warehouses, and logistic hubs.",
    },
    {
      code: "04 /",
      title: "Structural Modifications",
      desc: "Professional heavy-load column reinforcement, layout expansion structural support, and solid steel structural retrofitting to support heavy manufacturing machinery installation.",
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
              High-Performance Building Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, i) => (
              <div 
                key={i} 
                className="border border-slate-200 p-10 rounded-sm shadow-sm bg-slate-white hover:border-cobalt-blue/50 transition-colors flex flex-col justify-between"
              >
                <div>
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
              Elite Blueprint & Load Auditing
            </h2>
            <div className="font-sans text-base md:text-lg leading-relaxed text-steel-slate flex flex-col gap-6">
              <p>
                Every column, beam, and slab we erect is backed by strict static and dynamic load calculation reports. We analyze shear forces, bend margins, and structural foundations under maximum pressure tolerances.
              </p>
              <p>
                Whether retrofitting a factory to install heavy 100-ton CNC machinery or certifying an old warehouse to meet updated seismic codes, JD Construction applies premium business-professional engineering software and state-certified field auditing tools to guarantee safety.
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

      {/* Section 3: Call to Action (Full Screen) */}
      <section className="bg-slate-white min-h-screen flex flex-col justify-center text-center">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
            Custom Consultation
          </span>
          <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
            Need a Professional Structural Code Inspection or Quote?
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
              className="inline-block bg-blueprint-grey border border-slate-300 text-cobalt-blue font-space-grotesk text-sm font-bold tracking-wide uppercase px-10 py-5 hover:bg-slate-200 transition-colors rounded-sm"
            >
              Call Direct: +1 (555) 0199
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
