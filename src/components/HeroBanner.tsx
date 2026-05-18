import Link from "next/link";

interface HeroBannerProps {
  title: string;
  description: string;
}

export default function HeroBanner({ title, description }: HeroBannerProps) {
  return (
    <section className="relative w-full min-h-viewport flex flex-col justify-end bg-transparent overflow-hidden">
      {/* Content — bottom-left anchored */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-20 pb-16 md:pb-20 lg:pb-24">

        {/* Localized text shadow — left-to-right linear gradient hug behind the text area */}
        <div
          className="relative py-8 px-6 md:py-10 md:px-10 -ml-6 md:-ml-10 w-fit max-w-3xl animate-fade-in-up"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
          }}
        >
          <h1 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            {title}
          </h1>

          <div className="w-16 h-[3px] bg-white/80 mt-6 mb-5" />

          <p className="font-sans text-sm md:text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl font-normal">
            {description}
          </p>

          <div className="mt-8">
            <Link
              href="/contact#contact-section"
              className="inline-block font-space-grotesk text-xs md:text-sm font-semibold tracking-widest uppercase text-white border border-white/40 px-7 py-3.5 hover:bg-white hover:text-slate-950 transition-all duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
