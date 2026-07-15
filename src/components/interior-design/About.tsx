import { useEffect, useRef } from "react";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "500+", label: "Happy Clients" },
  { value: "6", label: "Service Categories" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal reveal-delay-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/images/about.jpg"
                alt="Vinodhen N G Interiors craftsmen at work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-charcoal-700 text-white rounded-xl px-7 py-5 shadow-xl">
              <span className="stat-number block">20+</span>
              <span className="font-sans text-xs text-white/60 tracking-wider uppercase">Years of Excellence</span>
            </div>
          </div>

          <div className="lg:pl-4">
            <span className="section-label reveal reveal-delay-1">About Us</span>
            <span className="gold-divider-left reveal reveal-delay-1" />

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-700 mt-6 mb-6 leading-tight reveal reveal-delay-2">
              Where Craft Meets
              <span className="italic text-gold-600"> Vision</span>
            </h2>

            <p className="font-sans text-base text-charcoal-400 leading-relaxed mb-5 reveal reveal-delay-2">
              At Vinodhen N G Interiors, we believe that a beautifully designed space is more than aesthetics — it&apos;s a reflection of who you are. For over 20 years, we have been transforming homes, showrooms, and commercial spaces with precision craftsmanship and a dedication to luxury.
            </p>

            <p className="font-sans text-base text-charcoal-400 leading-relaxed mb-10 reveal reveal-delay-3">
              Our team of skilled designers and master craftsmen works closely with each client to deliver spaces that are not only visually stunning but deeply functional. From initial concept sketches to the final coat of finish, every detail receives our full attention.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 reveal reveal-delay-3">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <span className="stat-number block">{stat.value}</span>
                  <span className="font-sans text-xs text-charcoal-400 tracking-wide uppercase">{stat.label}</span>
                </div>
              ))}
            </div>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline reveal reveal-delay-4"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
