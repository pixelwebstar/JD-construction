import HeroBanner from "@/components/HeroBanner";
import Link from "next/link";

export default function Home() {
  const capabilities = [
    {
      title: "01 / Steel & Concrete Erection",
      desc: "We assemble heavy structural steel frames, cure load-bearing concrete walls, and lay deep industrial foundations with zero margin for error.",
    },
    {
      title: "02 / Structural Blueprint Design",
      desc: "We analyze force distributions, simulate dynamic loads, and draft certified blueprint sets signed by licensed professional engineers.",
    },
    {
      title: "03 / Compliance & Code Audits",
      desc: "We run thorough structural safety checks, audit column integrity, and certify commercial properties to fully pass municipal codes.",
    },
  ];

  const featuredProjects = [
    {
      title: "Vance Logistics Center",
      metric: "50,000 SQ FT Structure",
      desc: "We erected a high-span commercial warehouse facility featuring custom portal frame steel structures, concrete floor slabs, and heavy loading bay foundations.",
      href: "/projects#projects-section",
    },
    {
      title: "Steel Foundry Extension",
      metric: "120-Ton Equipment Base",
      desc: "We engineered and poured high-density concrete machine bases, reinforced surrounding support columns, and modified steel framing to accommodate a 120-ton industrial press.",
      href: "/projects#projects-section",
    },
  ];

  const testimonials = [
    {
      quote: "JD Construction executed our high-span logistics warehouse structure on-time and with absolute precision. Their onsite operations director ensured everything met our strict requirements.",
      author: "Marcus Vance",
      company: "VP of Operations, Vance Logistics",
    },
    {
      quote: "Their structural calculations and seismic blueprints are exceptionally rigorous. We trust their engineering division completely with our commercial office retrofits.",
      author: "Sarah Jenkins, P.Eng",
      company: "Chief Consultant, Metro Hub",
    },
  ];

  return (
    <div className="w-full flex flex-col relative">
      {/* Absolute Background Video: Only rendered on home page hero */}
      <div className="absolute top-0 left-0 w-full h-viewport overflow-hidden pointer-events-none z-0 bg-slate-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          className="w-full h-full object-cover transform-gpu will-change-transform"
        >
          <source src="/hero-bg-optimized.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 w-full flex flex-col">
        {/* Hero Banner (Full Viewport Height by Default) */}
        <HeroBanner
          title="We Build What Lasts"
          description="Structural steel erection, reinforced concrete foundations, seismic retrofitting, and full code compliance audits — delivered on time, on budget, with zero compromise."
        />

      {/* Section 1: What We Do (Full Screen) */}
      <section className="bg-slate-white min-h-viewport flex flex-col justify-center border-b border-slate-200/80">
        <div className="max-w-screen-2xl mx-auto w-full px-12 md:px-20 py-16 md:py-24">
          <div className="flex flex-col items-start mb-16">
            <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
              Capabilities
            </span>
            <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Structural Contracting Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {capabilities.map((cap, i) => (
              <div key={i} className="flex flex-col gap-4">
                {/* Visual Blueprint Schema Placeholder Frame */}
                <div className="w-full aspect-[16/10] bg-blueprint-grey/50 border border-dashed border-slate-200 rounded-sm mb-6 flex items-center justify-center relative overflow-hidden select-none">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:16px_16px]" />
                  <span className="font-space-grotesk text-[9px] uppercase tracking-widest text-steel-slate/30 font-bold border border-slate-200/50 px-3 py-1.5 bg-slate-50/50">
                    Capability Schema {i + 1}
                  </span>
                </div>
                <h3 className="font-space-grotesk text-lg font-bold text-cobalt-blue">
                  {cap.title}
                </h3>
                <p className="font-sans text-base md:text-lg leading-relaxed text-steel-slate">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Core Engineering Crew (Full Screen) */}
      <section className="bg-blueprint-grey min-h-viewport flex flex-col justify-center border-b border-slate-200/80">
        <div className="max-w-screen-2xl mx-auto w-full px-12 md:px-20 py-16 md:py-24">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
            <div>
              <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
                Portfolio Preview
              </span>
              <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
                Executed Developments
              </h2>
            </div>
            <Link 
              href="/projects" 
              className="font-space-grotesk text-sm font-bold uppercase tracking-widest text-cobalt-blue hover:text-slate-900 transition-colors border-b-2 border-cobalt-blue pb-1"
            >
              View Full Gallery &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredProjects.map((project, i) => (
              <div 
                key={i} 
                className="bg-slate-white border border-slate-200/60 p-10 rounded-sm shadow-sm hover:border-cobalt-blue/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Clean Blueprint-Style Blank Image/Video Placeholder Frame */}
                  <div className="w-full aspect-[16/10] bg-blueprint-grey/50 border border-dashed border-slate-200 rounded-sm mb-6 flex items-center justify-center relative overflow-hidden select-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:20px_20px]" />
                    <span className="font-space-grotesk text-[10px] uppercase tracking-widest text-steel-slate/30 font-bold border border-slate-200/60 px-3.5 py-2 bg-slate-50/50">
                      Featured Project Frame {i + 1}
                    </span>
                  </div>

                  <span className="font-space-grotesk text-xs font-bold text-cobalt-blue mb-4 block">
                    {project.metric}
                  </span>
                  <h3 className="font-space-grotesk text-xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-steel-slate leading-relaxed mb-8">
                    {project.desc}
                  </p>
                </div>
                <Link 
                  href={project.href}
                  className="font-space-grotesk text-sm font-bold uppercase tracking-wider text-cobalt-blue hover:underline"
                >
                  Review Project Specs &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Verified Client Testimonials (Full Screen) */}
      <section className="bg-slate-white min-h-viewport flex flex-col justify-center border-b border-slate-200/80">
        <div className="max-w-screen-2xl mx-auto w-full px-12 md:px-20 py-16 md:py-24">
          <div className="flex flex-col items-start mb-16">
            <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
              Recommendations
            </span>
            <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Trusted by Industry Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="border border-slate-200 bg-slate-white p-10 rounded-sm shadow-sm flex flex-col justify-between hover:border-cobalt-blue/30 transition-colors"
              >
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex gap-1.5 text-cobalt-blue text-2xl tracking-widest select-none">
                      ★ ★ ★ ★ ★
                    </div>
                    <span className="font-space-grotesk text-[10px] text-cobalt-blue/50 font-bold uppercase tracking-widest">
                      Verified Review
                    </span>
                  </div>
                  <p className="font-sans text-base md:text-lg italic leading-relaxed text-steel-slate mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-6">
                  <h4 className="font-space-grotesk text-base font-bold text-slate-900">
                    {t.author}
                  </h4>
                  <span className="text-xs text-steel-slate/60 font-semibold uppercase tracking-wider">
                    {t.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action (Full Screen) */}
      <section className="bg-blueprint-grey min-h-viewport flex flex-col justify-center text-center">
        <div className="max-w-4xl mx-auto px-6 py-8 md:py-24">
          <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
            Partner With Us
          </span>
          <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 md:mb-8">
            Blueprint Review & Structural Estimates
          </h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-steel-slate mb-6 md:mb-10 max-w-2xl mx-auto">
            Run a professional load calculation check or get a comprehensive construction estimate. Connect directly with our managing director.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/contact#contact-section" 
              className="inline-block bg-cobalt-blue text-slate-white font-space-grotesk text-sm font-bold tracking-wide uppercase px-10 py-5 hover:bg-slate-900 transition-colors shadow-md rounded-sm"
            >
              Request Structural Estimate
            </Link>
            <Link 
              href="/about#team-section" 
              className="inline-block bg-slate-white border border-slate-200 text-steel-slate font-space-grotesk text-sm font-bold tracking-wide uppercase px-10 py-5 hover:bg-slate-100 transition-colors rounded-sm"
            >
              Meet Our Engineers
            </Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
