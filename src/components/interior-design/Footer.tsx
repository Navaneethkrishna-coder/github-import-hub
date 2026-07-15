const currentYear = new Date().getFullYear();

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 pb-12 border-b border-white/10">
          <div className="max-w-xs">
            <div className="mb-4">
              <span className="font-serif text-2xl font-bold text-white block">Vinodhen N G</span>
              <span className="font-sans text-[0.6rem] tracking-[0.25em] uppercase text-gold-500">Interiors</span>
            </div>
            <span className="gold-divider-left mb-4" />
            <p className="font-sans text-sm text-white/45 leading-relaxed">
              Crafting premium interior spaces for homes and commercial properties since 2006.
            </p>
          </div>

          <div>
            <h3 className="font-sans text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-white/40 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-sans text-sm text-white/60 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-white/40 mb-5">
              Services
            </h3>
            <ul className="space-y-3 text-white/60 font-sans text-sm">
              {["Showroom Interiors", "Bedroom Interiors", "Wardrobes", "False Ceilings", "Reception Counters", "Cabinets"].map(
                (s) => (
                  <li key={s}>{s}</li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-white/40 mb-5">
              Start a Project
            </h3>
            <p className="font-sans text-sm text-white/45 mb-6 leading-relaxed max-w-[200px]">
              Ready to transform your space? We&apos;d love to hear from you.
            </p>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="btn-gold text-xs py-3 px-6"
            >
              Get a Quote
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="font-sans text-xs text-white/30 text-center sm:text-left">
            © {currentYear} Vinodhen N G Interiors. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-sans text-xs text-white/40 hover:text-gold-400 transition-colors group"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-4 h-4 transition-transform group-hover:-translate-y-0.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
