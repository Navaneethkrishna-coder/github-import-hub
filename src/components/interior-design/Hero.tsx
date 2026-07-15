import { useEffect, useRef } from "react";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headingRef.current, subRef.current, btnRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 300 + i * 200);
    });
  }, []);

  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Luxury interior design by Vinodhen N G Interiors"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <span className="section-label text-gold-400 mb-6 block">
            Interior Design &amp; Contracting
          </span>

          <h1
            ref={headingRef}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6"
          >
            Crafting Beautiful
            <br />
            <span className="italic text-gold-400">Interior Spaces</span>
          </h1>

          <p
            ref={subRef}
            className="font-sans text-base md:text-lg text-white/75 leading-relaxed mb-10 max-w-xl"
          >
            Premium Interior Design for Homes and Commercial Spaces.
            <br className="hidden md:block" />
            From concept to completion — crafted with precision and passion.
          </p>

          <div ref={btnRef} className="flex flex-wrap gap-4 items-center">
            <button onClick={scrollToProjects} className="btn-gold">
              View Projects
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline-dark"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="font-sans text-[0.6rem] tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
