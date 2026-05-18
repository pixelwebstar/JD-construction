import HeroBanner from "@/components/HeroBanner";
import Link from "next/link";

export default function AboutPage() {
  const team = [
    {
      name: "Johnathan Doe",
      role: "Founder & Managing Director",
      bio: "Over 25 years of structural leadership, managing industrial and commercial infrastructure projects with meticulous standards.",
    },
    {
      name: "Sarah Jenkins, P.Eng",
      role: "Lead Structural Engineer",
      bio: "Master of Science in Civil Engineering. Specializes in earthquake-resistant designs and complex steel frame structures.",
    },
    {
      name: "Marcus Vance",
      role: "Director of Field Operations",
      bio: "Ensures absolute onsite safety, strict compliance with building codes, and flawless execution of construction designs.",
    },
  ];

  const values = [
    {
      title: "01 / Engineering Precision",
      desc: "We measure twice, cut once, and calculate to the absolute decimal. Precision is our fundamental structural law.",
    },
    {
      title: "02 / Structural Integrity",
      desc: "We don't cut corners or compromise on materials. Our buildings stand tall, safe, and durable for generations.",
    },
    {
      title: "03 / Professional Execution",
      desc: "Clean schedules, prompt reports, and open collaboration. We bring corporate business standards to field construction.",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Hero Banner (Full Viewport Height) */}
      <HeroBanner
        title="Built on Trust"
        description="Twenty-five years of certified engineering, field directors, and absolute structural precision."
      />

      {/* Section 1: Company Story (Full Screen) */}
      <section className="bg-slate-white min-h-screen flex flex-col justify-center border-b border-slate-200/80">
        <div className="max-w-screen-2xl mx-auto w-full px-12 md:px-20 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
              Our History
            </span>
            <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
              A Legacy of Solid Foundations
            </h2>
            <div className="font-sans text-base md:text-lg leading-relaxed text-steel-slate flex flex-col gap-6">
              <p>
                JD Construction was established with a singular, tough objective: to elevate the standard of commercial and industrial building through absolute engineering precision.
              </p>
              <p>
                Founded by Johnathan Doe, the company quickly earned a reputation as the preferred contractor for complex, high-risk structures. We don't just build walls; we design and execute high-performance structures that serve as the backbone for businesses, logistics, and local commerce.
              </p>
              <p>
                Today, our team of certified structural engineers and field directors continues to deliver state-of-the-art developments, strict building code audits, and premium architectural framing.
              </p>
            </div>
          </div>
          {/* Blueprint Accents Side Card */}
          <div className="lg:col-span-5 border-2 border-slate-200/80 bg-blueprint-grey/30 p-10 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cobalt-blue/5 rotate-45 transform translate-x-12 -translate-y-12" />
            <h3 className="font-space-grotesk text-xl font-bold text-cobalt-blue mb-6">
              Corporate Stats
            </h3>
            <ul className="flex flex-col gap-5 font-space-grotesk text-base">
              <li className="flex justify-between border-b border-slate-200 pb-3">
                <span className="text-steel-slate font-medium">Completed Projects:</span>
                <span className="font-bold text-slate-900">450+</span>
              </li>
              <li className="flex justify-between border-b border-slate-200 pb-3">
                <span className="text-steel-slate font-medium">Zero Safety Incidents:</span>
                <span className="font-bold text-slate-900">100% Rate</span>
              </li>
              <li className="flex justify-between border-b border-slate-200 pb-3">
                <span className="text-steel-slate font-medium">Certified Engineers:</span>
                <span className="font-bold text-slate-900">15 Active</span>
              </li>
              <li className="flex justify-between">
                <span className="text-steel-slate font-medium">Operating Since:</span>
                <span className="font-bold text-slate-900">2001</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Faces Behind the Company (Full Screen) */}
      <section id="team-section" className="bg-blueprint-grey min-h-screen flex flex-col justify-center border-b border-slate-200/80">
        <div className="max-w-screen-2xl mx-auto w-full px-12 md:px-20 py-16 md:py-24">
          <div className="flex flex-col items-start mb-16">
            <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
              Leadership Team
            </span>
            <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              The Minds Behind Our Structures
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-slate-white border border-slate-200/60 p-10 rounded-sm shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <span className="font-space-grotesk text-xs font-bold text-cobalt-blue mb-4 block">
                    {member.role}
                  </span>
                  <h3 className="font-space-grotesk text-xl font-bold text-slate-900 mb-4">
                    {member.name}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-steel-slate leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                {/* Thin Steel Detail Rule */}
                <div className="w-full h-px bg-slate-200 mt-8" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: What We Stand For (Full Screen) */}
      <section className="bg-slate-white min-h-screen flex flex-col justify-center border-b border-slate-200/80">
        <div className="max-w-screen-2xl mx-auto w-full px-12 md:px-20 py-16 md:py-24">
          <div className="flex flex-col items-start mb-16">
            <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
              Core Ethics
            </span>
            <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Our Ironclad Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {values.map((val, i) => (
              <div key={i} className="flex flex-col gap-4">
                <h3 className="font-space-grotesk text-lg font-bold text-cobalt-blue">
                  {val.title}
                </h3>
                <p className="font-sans text-base md:text-lg leading-relaxed text-steel-slate">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action (Full Screen) */}
      <section className="bg-blueprint-grey min-h-screen flex flex-col justify-center text-center">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <span className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/70 mb-2 block">
            Start a Collaboration
          </span>
          <h2 className="font-space-grotesk text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
            Ready to Build a Structurally Flawless Project?
          </h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-steel-slate mb-10 max-w-2xl mx-auto">
            Get in touch with our expert engineering division to run a blueprint check, structural audit, or request a development quote.
          </p>
          <Link
            href="/contact#contact-section"
            className="inline-block bg-cobalt-blue text-slate-white font-space-grotesk text-sm font-bold tracking-wide uppercase px-10 py-5 hover:bg-slate-900 transition-colors shadow-md rounded-sm"
          >
            Contact Engineering Team
          </Link>
        </div>
      </section>
    </div>
  );
}
