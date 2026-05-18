import HeroBanner from "@/components/HeroBanner";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Vance Logistics Center",
      location: "East Industrial Park",
      year: "2024",
      metric: "50,000 SQ FT Structure",
      desc: "Erection of a high-span commercial warehouse facility, featuring a custom portal frame steel structure, heavy concrete floor slab, and heavy loading bay foundations.",
    },
    {
      title: "Metropolitan Office Hub",
      location: "Downtown Core",
      year: "2023",
      metric: "Seismic Retrofit Level-4",
      desc: "Seismic reinforcement of a 6-story commercial office building frame. Installed solid steel structural braces and reinforced load-bearing concrete pillars to meet modern building codes.",
    },
    {
      title: "Steel Foundry Extension",
      location: "Industrial Harbor",
      year: "2025",
      metric: "120-Ton Equipment Base",
      desc: "Excavation and pouring of high-density reinforced concrete machine foundations, column strengthening, and structural framing modifications to house giant heavy foundry presses.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Drafting & Load Checks",
      desc: "Every project starts with strict CAD drafting audits. Our certified engineers run load-bearing and force distribution simulations to prevent any structural framing failures before site breakout.",
    },
    {
      num: "02",
      title: "Foundation & Anchors",
      desc: "We pour high-density concrete footings and set structural anchor bolts with absolute precision. A building is only as strong as its subterranean anchor point.",
    },
    {
      num: "03",
      title: "Structural Erection",
      desc: "Elite steel frame assembly, concrete pillar curing, and heavy structural reinforcement. Every column joint is double-inspected and signed off by the field Operations Director.",
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
      <section id="projects-section" className="bg-slate-white min-h-screen flex flex-col justify-center border-b border-slate-200/80">
        <div className="max-w-screen-2xl mx-auto w-full px-12 md:px-20 py-16 md:py-24">
          <div className="flex flex-col items-start mb-16">
            <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
              Executed Work
            </span>
            <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Featured Construction Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {projects.map((project, i) => (
              <div 
                key={i} 
                className="border border-slate-200 bg-slate-white p-10 rounded-sm shadow-sm hover:border-cobalt-blue/40 transition-colors flex flex-col justify-between"
              >
                <div>
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
                  <p className="font-sans text-sm md:text-base text-steel-slate leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                {/* Thin technical bar */}
                <div className="w-full h-px bg-slate-200 mt-8" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Our Process (Full Screen) */}
      <section className="bg-blueprint-grey min-h-screen flex flex-col justify-center border-b border-slate-200/80">
        <div className="max-w-screen-2xl mx-auto w-full px-12 md:px-20 py-16 md:py-24">
          <div className="flex flex-col items-start mb-16">
            <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
              Work Phase
            </span>
            <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Our 3-Phase Structural Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col gap-5 relative">
                {/* Big watermark number */}
                <span className="font-space-grotesk text-6xl font-black text-cobalt-blue/10 absolute -top-10 left-0 select-none">
                  {step.num}
                </span>
                <div className="relative pt-6">
                  <h3 className="font-space-grotesk text-xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="font-sans text-base md:text-lg leading-relaxed text-steel-slate">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Standards & Certifications (Full Screen) */}
      <section className="bg-slate-white min-h-screen flex flex-col justify-center border-b border-slate-200/80">
        <div className="max-w-screen-2xl mx-auto w-full px-12 md:px-20 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8 flex flex-col items-start">
            <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
              Guaranteed Safety
            </span>
            <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Absolute Building Safety Standards
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-steel-slate">
              JD Construction operates in complete compliance with state and municipal safety regulations. Our structures are built to withstand high force categories, extreme weather patterns, and heavy seismic shifts. We use premium certified structural steel and high-curing industrial concrete exclusively.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <span className="font-space-grotesk text-sm font-bold text-cobalt-blue border-2 border-dashed border-cobalt-blue/40 px-8 py-5 bg-blueprint-grey/50 rounded-sm inline-block tracking-wider uppercase">
              100% BUILDING CODE PASSED
            </span>
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action (Full Screen) */}
      <section className="bg-blueprint-grey min-h-screen flex flex-col justify-center text-center">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
            Start Planning
          </span>
          <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
            Looking to Execute a Similar Development?
          </h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-steel-slate mb-10 max-w-2xl mx-auto">
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
