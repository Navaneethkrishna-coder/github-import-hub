import { useState, useEffect, useRef } from "react";
import { galleryImages } from "@/data/projects";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  const nextImage = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));

  return (
    <>
      <section id="gallery" ref={sectionRef} className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span
              className={`section-label transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              Gallery
            </span>
            <span className="gold-divider" />
            <h2
              className={`font-serif text-4xl md:text-5xl font-bold text-charcoal-700 mt-6 mb-4 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              Visual Showcase
            </h2>
            <p
              className={`font-sans text-base text-charcoal-400 max-w-md mx-auto transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              A curated collection of our finest interior moments. Click any image to explore in full detail.
            </p>
          </div>

          <div className="masonry-grid">
            {galleryImages.map((img, idx) => (
              <div
                key={img.id}
                className="masonry-item"
                onClick={() => openLightbox(idx)}
                role="button"
                tabIndex={0}
                aria-label={`Open ${img.alt} in lightbox`}
                onKeyDown={(e) => e.key === "Enter" && openLightbox(idx)}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${0.05 + idx * 0.07}s, transform 0.6s ease ${0.05 + idx * 0.07}s`,
                }}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="masonry-overlay">
                  <div className="masonry-overlay-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
