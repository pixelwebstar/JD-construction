"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  const linkClass = (href: string) =>
    `text-sm font-semibold transition-colors duration-200 hover:text-cobalt-blue tracking-wide ${isActive(href)
      ? "text-cobalt-blue font-bold border-b-2 border-cobalt-blue pb-1"
      : "text-steel-slate pb-1"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-white border-b border-slate-200/80 shadow-sm backdrop-blur-md bg-opacity-95">
      {/* Desktop Navigation (5-Column Symmetrical Grid Layout) */}
      <div className="hidden md:grid grid-cols-5 items-center justify-items-center text-center max-w-screen-2xl mx-auto px-12 md:px-20 h-20">

        {/* Column 1: About */}
        <Link href="/about" className={linkClass("/about")}>
          About
        </Link>

        {/* Column 2: Services */}
        <Link href="/services" className={linkClass("/services")}>
          Services
        </Link>

        {/* Column 3: Center Brand Logo */}
        <Link
          href="/"
          className="font-space-grotesk text-xl font-extrabold text-cobalt-blue tracking-widest hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <span className="border-l-2 border-r-2 border-cobalt-blue px-4 py-1 bg-blueprint-grey/50">
            JD CONSTRUCTION
          </span>
        </Link>

        {/* Column 4: Projects */}
        <Link href="/projects" className={linkClass("/projects")}>
          Projects
        </Link>

        {/* Column 5: Contact */}
        <Link href="/contact" className={linkClass("/contact")}>
          Contact
        </Link>
      </div>

      {/* Mobile Navigation (Stacked Double Header) */}
      <div className="flex md:hidden flex-col w-full">
        {/* Row 1: Balanced Direct CTAs and Centered Logo */}
        <div className="relative flex justify-between items-center px-4 py-4 border-b border-slate-100 bg-slate-white">
          {/* Left Action: Email Direct */}
          <a
            href="mailto:info@jdconstruction.com"
            className="text-xs font-bold text-steel-slate hover:text-cobalt-blue select-none"
          >
            <span>Email</span>
          </a>

          {/* Center: Brand Logo */}
          <Link
            href="/"
            className="font-space-grotesk text-sm font-extrabold text-cobalt-blue tracking-wider flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2"
          >
            <span className="border-l border-r border-cobalt-blue px-2.5 py-0.5 bg-blueprint-grey/30">
              JD CONSTRUCTION
            </span>
          </Link>

          {/* Right Action: Call Us Direct */}
          <a
            href="tel:+15550199"
            className="text-xs font-bold text-cobalt-blue hover:text-slate-900 select-none"
          >
            <span>Call</span>
          </a>
        </div>

        {/* Row 2: Navigation Links (Tactile, Spaced buttons) */}
        <nav className="flex justify-around items-center py-3 bg-blueprint-grey/20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-bold tracking-wide transition-colors ${isActive(link.href)
                  ? "text-cobalt-blue underline underline-offset-4 decoration-2"
                  : "text-steel-slate hover:text-cobalt-blue"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
