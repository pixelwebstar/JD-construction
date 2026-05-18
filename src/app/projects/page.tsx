import HeroBanner from "@/components/HeroBanner";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Vance Logistics Center",
      location: "East Industrial Park",
      year: "2024",
      metric: "50,000 SQ FT Structure",
      desc: "We erected a high-span commercial warehouse facility featuring custom portal frame steel structures, high-load concrete floor slabs, and heavy loading bay foundations.",
    },
    {
      title: "Metropolitan Office Hub",
      location: "Downtown Core",
      year: "2023",
      metric: "Seismic Retrofit Level-4",
      desc: "We installed seismic structural steel braces and reinforced load-bearing concrete pillars across a six-story commercial building to bring the structure up to current municipal safety codes.",
    },
    {
      title: "Steel Foundry Extension",
      location: "Industrial Harbor",
      year: "2025",
      metric: "120-Ton Equipment Base",
      desc: "We engineered and poured high-density concrete machine bases, reinforced surrounding support columns, and modified steel framing to accommodate a 120-ton industrial press.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Planning & Engineering Feasibility",
      desc: "The industry standard pre-construction phase involves reviewing architectural drawings, performing load feasibility calculations, and verifying code compliance targets before any site execution.",
    },
    {
      num: "02",
      title: "Foundation Detailing & Concrete Curing",
      desc: "The foundation phase focuses on structural excavation, grid rebar assembly, and pouring standard-compliant industrial concrete slabs to establish a secure loading base.",
    },
    {
      num: "03",
      title: "Structural Steel Frame Erection",
      desc: "The final assembly phase manages portal frame erection, structural connections welding, and safety inspections under standard engineering quality guidelines.",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Hero Banner (Full Viewport Height) */}
      <HeroBanner
        title="Built to Prove It"
        description="Warehouses, office retrofits, foundry extensions — review our executed industrial works, completed on-time with zero code errors."
      />

      {/* Section 1: Gallery of Work (Full Screen) */}
      <section id="projects-section" className="bg-slate-white min-h-viewport flex flex-col justify-center border-b border-slate-200/80">
        <div className="max-w-screen-2xl mx-auto w-full px-12 md:px-20 py-16 md:py-24">
          <div className="flex flex-col items-start mb-16">
            <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
              Executed Work
            </span>
            <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Featured Construction Projects
            </h2>
          </div>          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {projects.map((project, i) => (
              <div
                key={i}
                className="border border-slate-200 bg-slate-white p-8 rounded-sm shadow-sm hover:border-cobalt-blue/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Clean Blueprint-Style Polaroid Placeholder Frame */}
                  <div className="bg-slate-50 border border-slate-200 p-4 pb-8 rounded-sm shadow-sm mb-6 select-none hover:scale-[1.02] transition-transform duration-300">
                    {/* Square Photo area */}
                    <div className="w-full aspect-square bg-blueprint-grey/50 border border-dashed border-slate-300 rounded-sm relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:16px_16px]" />
                      <span className="font-space-grotesk text-[8px] uppercase tracking-widest text-steel-slate/30 font-bold border border-slate-200/50 px-2 py-1 bg-slate-50/50">
                        Polaroid Slot
                      </span>
                    </div>
                    {/* Caption name standard */}
                    <div className="mt-4 text-center">
                      <p className="font-space-grotesk text-xs uppercase tracking-widest text-slate-800 font-bold">
                        {project.title}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                    <span className="font-space-grotesk text-xs font-bold text-cobalt-blue">
                      {project.metric}
                    </span>
                    <span className="font-space-grotesk text-xs font-semibold text-steel-slate">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-space-grotesk text-xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>
                  <span className="text-xs text-steel-slate/60 font-semibold uppercase tracking-wider block mb-4">
                    Location: {project.location}
                  </span>
                  <p className="font-sans text-xs md:text-sm text-steel-slate leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                {/* Thin technical bar */}
                <div className="w-full h-px bg-slate-200 mt-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Our Process (Full Screen) */}
      <section className="bg-blueprint-grey min-h-viewport flex flex-col justify-center border-b border-slate-200/80">
        <div className="max-w-screen-2xl mx-auto w-full px-12 md:px-20 py-16 md:py-24">
          <div className="flex flex-col items-start mb-16 max-w-2xl">
            <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
              Execution Phases
            </span>
            <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Industry Standard Process
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-steel-slate">
              Commercial and industrial developments strictly adhere to a standardized, structural project lifecycle framework.
            </p>
          </div>

          {/* Unique Elevation-Level Stacked Layout representing high-end cross-sections */}
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div
                key={i}
                className="border border-slate-200 bg-slate-white p-8 rounded-sm shadow-sm flex flex-col md:flex-row gap-8 items-start md:items-center justify-between hover:border-cobalt-blue/30 transition-colors relative"
              >
                {/* Elevation Indicator Ticks */}
                <div className="flex gap-4 items-center shrink-0">
                  <span className="font-space-grotesk text-4xl font-extrabold text-cobalt-blue">
                    {step.num}
                  </span>
                  <div className="w-1.5 h-12 bg-cobalt-blue/20 rounded-full" />
                </div>

                {/* Text Content */}
                <div className="grow">
                  <h3 className="font-space-grotesk text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-steel-slate leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Technical Elevation Level Label */}
                <div className="shrink-0 font-space-grotesk text-[10px] font-bold text-steel-slate/40 border border-slate-200/60 bg-slate-50/50 px-3 py-1.5 rounded-sm uppercase tracking-widest">
                  Level 0{3 - i} Plan
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Standards & Certifications (Full Screen) */}
      <section className="bg-slate-white min-h-viewport flex flex-col justify-center border-b border-slate-200/80">
        <div className="max-w-screen-2xl mx-auto w-full px-12 md:px-20 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
              Guaranteed Safety
            </span>
            <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
              Absolute Building Safety Standards
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-steel-slate mb-12">
              JD Construction operates in complete compliance with state and municipal safety regulations. Our structures are built to withstand high force categories, extreme weather patterns, and heavy seismic shifts. We use premium certified structural steel and high-curing industrial concrete exclusively.
            </p>

            {/* High-density grid of certifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full border-t border-slate-200 pt-10">
              <div className="flex gap-4">
                <span className="text-cobalt-blue font-space-grotesk font-bold text-lg select-none">✓</span>
                <div>
                  <h4 className="font-space-grotesk text-base font-bold text-slate-900 mb-2">ASTM Steel Quality</h4>
                  <p className="font-sans text-sm text-steel-slate leading-relaxed">Certified grade A36 & A992 structural steel plates for heavy high-span load capacity.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-cobalt-blue font-space-grotesk font-bold text-lg select-none">✓</span>
                <div>
                  <h4 className="font-space-grotesk text-base font-bold text-slate-900 mb-2">ACI Concrete Standards</h4>
                  <p className="font-sans text-sm text-steel-slate leading-relaxed">High-density concrete foundation pours surpassing strict 4,000 PSI curing specs.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-cobalt-blue font-space-grotesk font-bold text-lg select-none">✓</span>
                <div>
                  <h4 className="font-space-grotesk text-base font-bold text-slate-900 mb-2">Seismic Category D</h4>
                  <p className="font-sans text-sm text-steel-slate leading-relaxed">Shear wall detailing and frame connections certified for seismic safety load zones.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-cobalt-blue font-space-grotesk font-bold text-lg select-none">✓</span>
                <div>
                  <h4 className="font-space-grotesk text-base font-bold text-slate-900 mb-2">AWS D1.1 Inspection</h4>
                  <p className="font-sans text-sm text-steel-slate leading-relaxed">Certified structural steel welding, ultrasound joints check, and safety audit signed off.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 w-full h-full flex flex-col">
            {/* Perfectly Straight Large Polaroid Placeholder Frame */}
            <div className="bg-slate-50 border border-slate-200 p-6 pb-12 rounded-sm shadow-sm select-none grow flex flex-col justify-between min-h-[440px] lg:min-h-[500px]">
              {/* Large Square Photo slot */}
              <div className="w-full aspect-square bg-blueprint-grey/50 border border-dashed border-slate-300 rounded-sm relative overflow-hidden flex items-center justify-center grow">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:20px_20px]" />
                <span className="font-space-grotesk text-[10px] uppercase tracking-widest text-steel-slate/30 font-bold border border-slate-200/60 px-3.5 py-2 bg-slate-50/50 animate-pulse">
                  Safety Standards Polaroid Slot
                </span>
              </div>
              {/* Bottom White Margin Caption */}
              <div className="mt-6 text-center">
                <p className="font-space-grotesk text-sm uppercase tracking-widest text-slate-800 font-bold">
                  Quality Audit Schema
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action (Full Screen) */}
      <section className="bg-blueprint-grey min-h-viewport flex flex-col justify-center text-center">
        <div className="max-w-4xl mx-auto px-6 py-8 md:py-24">
          <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
            Start Planning
          </span>
          <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 md:mb-8">
            Looking to Execute a Similar Development?
          </h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-steel-slate mb-6 md:mb-10 max-w-2xl mx-auto">
            Our directors are ready to discuss your structural plans, layout specifications, and budget targets to ensure a robust, high-performance execution.
          </p>
          <Link
            href="/contact#contact-section"
            className="inline-block bg-cobalt-blue text-slate-white font-space-grotesk text-sm font-bold tracking-wide uppercase px-10 py-5 hover:bg-slate-900 transition-colors shadow-md rounded-sm"
          >
            Review Blueprints With Us
          </Link>
        </div>
      </section>
    </div>
  );
}
