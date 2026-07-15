import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-scrolled py-3" : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex flex-col leading-none group"
          >
            <span
              className={`font-serif font-bold text-xl tracking-wide transition-colors duration-300 ${
                scrolled ? "text-charcoal-700" : "text-white"
              }`}
            >
              Vinodhen N G
            </span>
            <span
              className={`font-sans text-[0.6rem] tracking-[0.25em] uppercase transition-colors duration-300 ${
                scrolled ? "text-gold-600" : "text-gold-400"
              }`}
            >
              Interiors
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-sans text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-300 relative group ${
                  scrolled ? "text-charcoal-600" : "text-white/90"
                } hover:text-gold-500`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-gold text-xs py-2.5 px-5"
            >
              Get a Quote
            </a>
          </nav>

          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                scrolled ? "bg-charcoal-700" : "bg-white"
              } ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                scrolled ? "bg-charcoal-700" : "bg-white"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-px transition-all duration-300 ${
                scrolled ? "bg-charcoal-700" : "bg-white"
              } ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl flex flex-col pt-24 pb-12 px-8 transition-transform duration-[400ms] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <span className="gold-divider-left mb-8" />
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-sans text-sm font-medium tracking-[0.12em] uppercase text-charcoal-600 hover:text-gold-500 py-3 border-b border-cream-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="btn-gold text-center mt-8"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </>
  );
}
