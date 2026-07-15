import { useEffect, useRef } from "react";
import { featuredProjects } from "@/data/projects";

export default function FeaturedProjects() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="section-label reveal">Featured Work</span>
            <span className="gold-divider-left reveal reveal-delay-1" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal-700 mt-6 reveal reveal-delay-2">
              Signature Projects
            </h2>
          </div>
          <p className="font-sans text-sm text-charcoal-400 max-w-sm leading-relaxed reveal reveal-delay-2">
            A selection of our most celebrated interior transformations — each one a story of vision realised.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <div
              key={project.id}
              className={`project-card rounded-2xl overflow-hidden shadow-lg h-[480px] reveal reveal-delay-${Math.min(i + 1, 4)}`}
            >
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="project-card-overlay" />

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span className="inline-block font-sans text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-gold-400 border border-gold-500/40 px-3 py-1 rounded-full mb-3">
                  {project.category}
                </span>

                <h3 className="font-serif text-2xl font-bold text-white mb-1">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-white/60 mb-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span className="font-sans text-xs">{project.location}</span>
                  <span className="text-white/30 ml-1">·</span>
                  <span className="font-sans text-xs">{project.year}</span>
                </div>

                <div className="overflow-hidden max-h-0 transition-all duration-500 hover:max-h-40">
                  <p className="font-sans text-xs text-white/65 leading-relaxed mt-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 reveal">
          <a
            href="#categories"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#categories")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-outline"
          >
            Browse All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
