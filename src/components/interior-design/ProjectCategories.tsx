import { useState, useEffect, useRef } from "react";
import { projects } from "@/data/projects";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Showrooms", value: "showrooms" },
  { label: "Bedrooms", value: "bedrooms" },
];

export default function ProjectCategories() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const filtered = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="categories" ref={sectionRef} className="py-28 bg-cream-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span
            className={`section-label transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            All Projects
          </span>
          <span className="gold-divider" />
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-charcoal-700 mt-6 mb-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Project Portfolio
          </h2>
          <p
            className={`font-sans text-base text-charcoal-400 max-w-md mx-auto transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Browse our complete portfolio of interior transformations across residential and commercial spaces.
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`filter-btn ${activeFilter === f.value ? "active" : ""}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
              {f.value !== "all" && (
                <span className="ml-2 font-sans text-[0.65rem] opacity-60">
                  ({projects.filter((p) => p.category === f.value).length})
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-[400ms]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${0.1 + i * 0.08}s, transform 0.6s ease ${0.1 + i * 0.08}s, box-shadow 0.3s ease`,
              }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="font-sans text-[0.6rem] font-semibold tracking-[0.18em] uppercase bg-charcoal-700/80 text-gold-400 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif text-lg font-semibold text-charcoal-700 leading-snug">
                    {project.title}
                  </h3>
                  <span className="font-sans text-xs text-charcoal-300 mt-1 shrink-0 ml-2">
                    {project.year}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-charcoal-400 mb-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 text-gold-500 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="font-sans text-xs">{project.location}</span>
                </div>

                <p className="font-sans text-sm text-charcoal-400 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <span className="gold-divider-left mt-4 transition-all duration-300 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
