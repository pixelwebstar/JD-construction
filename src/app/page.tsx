import HeroBanner from "@/components/HeroBanner";
import Link from "next/link";

export default function Home() {
  const capabilities = [
    {
      title: "01 / Structural Erection",
      desc: "Setting heavy steel columns, high-curing concrete structural walls, and deep industrial foundations with zero load margin errors.",
    },
    {
      title: "02 / Precision Engineering",
      desc: "Comprehensive structural planning, static and dynamic force distribution simulations, and professional engineer signed-off blueprints.",
    },
    {
      title: "03 / Code Auditing & Safety",
      desc: "Rigorous load-bearing inspections, seismic hazard audits, and building compliance certifications to guarantee durability.",
    },
  ];

  const featuredProjects = [
    {
      title: "Vance Logistics Center",
      metric: "50,000 SQ FT Structure",
      desc: "Erection of a high-span commercial warehouse facility, featuring a custom portal frame steel structure and heavy concrete foundations.",
      href: "/projects#projects-section",
    },
    {
      title: "Steel Foundry Extension",
      metric: "120-Ton Equipment Base",
      desc: "Pouring of high-density reinforced concrete machine foundations and column strengthening to support heavy foundry presses.",
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
    <div className="w-full flex flex-col">
      {/* Hero Banner (Full Viewport Height by Default) */}
      <HeroBanner
        title="We Build What Lasts"
        description="Structural steel erection, reinforced concrete foundations, seismic retrofitting, and full code compliance audits — delivered on time, on budget, with zero compromise."
      />

      {/* Section 1: What We Do (Full Screen) */}
      <section className="bg-slate-white min-h-screen flex flex-col justify-center border-b border-slate-200/80">
        <div className="max-w-screen-2xl mx-auto w-full px-12 md:px-20 py-16 md:py-24">
          <div className="flex flex-col items-start mb-16">
            <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
              Capabilities
            </span>
            <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Structural Contracting Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {capabilities.map((cap, i) => (
              <div key={i} className="flex flex-col gap-4">
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

      {/* Section 2: Projects Showcase (Full Screen) */}
      <section className="bg-blueprint-grey min-h-screen flex flex-col justify-center border-b border-slate-200/80">
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

      {/* Section 3: Testimonials (Full Screen) */}
      <section className="bg-slate-white min-h-screen flex flex-col justify-center border-b border-slate-200/80">
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
                className="border border-slate-200 bg-slate-white p-10 rounded-sm shadow-sm flex flex-col justify-between"
              >
                <p className="font-sans text-base md:text-lg italic leading-relaxed text-steel-slate mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
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
      <section className="bg-blueprint-grey min-h-screen flex flex-col justify-center text-center">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
            Partner With Us
          </span>
          <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
            Blueprint Review & Structural Estimates
          </h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-steel-slate mb-10 max-w-2xl mx-auto">
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
  );
}
