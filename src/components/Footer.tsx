import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sitemap = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const divisions = [
    { name: "Structural Steel Framing", href: "/services" },
    { name: "Concrete Foundations", href: "/services" },
    { name: "Seismic Retrofitting", href: "/services" },
    { name: "Industrial Erection", href: "/services" },
    { name: "Code Compliance Audits", href: "/services" },
  ];

  return (
    <footer className="w-full bg-slate-white border-t border-slate-200/80 py-16 md:py-24 mt-auto">
      <div className="max-w-screen-2xl mx-auto px-12 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Brand Profile */}
        <div className="flex flex-col gap-6">
          <div className="font-space-grotesk text-lg font-extrabold text-cobalt-blue tracking-wider flex items-center">
            <span className="border-l-2 border-r-2 border-cobalt-blue px-3 py-0.5 bg-blueprint-grey/50">
              JD CONSTRUCTION
            </span>
          </div>
          <p className="text-sm md:text-base text-steel-slate leading-relaxed font-sans max-w-sm">
            Setting the standard in high-end structural engineering, architectural design, and industrial building. Built on tough, precise, and professional excellence.
          </p>
          <span className="text-xs text-steel-slate/60 font-medium">
            &copy; {currentYear} JD Construction LTD. All rights reserved.
          </span>
        </div>

        {/* Merged Row Block: Sitemap & Our Divisions (Side-by-side on mobile, separate columns on desktop) */}
        <div className="grid grid-cols-2 gap-8 md:col-span-2 lg:col-span-2">
          
          {/* Column 2: Sitemap (Exactly 5 Lines) */}
          <div className="flex flex-col gap-6">
            <h3 className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/80">
              Sitemap
            </h3>
            <ul className="flex flex-col gap-3 text-sm md:text-base">
              {sitemap.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-steel-slate hover:text-cobalt-blue transition-colors font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Divisions (Exactly 5 Lines) */}
          <div className="flex flex-col gap-6">
            <h3 className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/80">
              Our Divisions
            </h3>
            <ul className="flex flex-col gap-3 text-sm md:text-base">
              {divisions.map((div) => (
                <li key={div.name}>
                  <Link href={div.href} className="text-steel-slate hover:text-cobalt-blue transition-colors font-medium">
                    {div.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Column 4: Head Office (Exactly 5 Lines) */}
        <div className="flex flex-col gap-6">
          <h3 className="font-space-grotesk text-xs font-semibold uppercase tracking-widest text-cobalt-blue/80">
            Head Office
          </h3>
          <ul className="text-sm md:text-base text-steel-slate flex flex-col gap-3 font-sans">
            {/* Line 1: Address */}
            <li>100 Structural Avenue, Industrial Area</li>
            
            {/* Line 2: Phone */}
            <li>
              Phone:{" "}
              <a href="tel:+15550199" className="font-semibold text-cobalt-blue hover:underline">
                +1 (555) 0199
              </a>
            </li>

            {/* Line 3: Email */}
            <li>
              Email:{" "}
              <a href="mailto:info@jdconstruction.com" className="font-semibold text-cobalt-blue hover:underline">
                info@jdconstruction.com
              </a>
            </li>

            {/* Line 4: Hours */}
            <li>Hours: Mon - Fri, 7AM - 5PM</li>

            {/* Line 5: State License */}
            <li>State License: #JD-CON-89-01</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
