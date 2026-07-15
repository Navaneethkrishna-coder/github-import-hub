import { useEffect, useRef } from "react";

const contactDetails = [
  {
    id: "phone",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Phone",
    value: "9400517050",
    href: "tel:+919400517050",
  },
  {
    id: "whatsapp",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12.001 2C6.478 2 2 6.478 2 12.001c0 1.77.457 3.43 1.26 4.877L2.035 21.5l4.745-1.215A9.933 9.933 0 0012 22c5.523 0 10-4.477 10-10.001C22 6.477 17.523 2 12.001 2zm0 18c-1.614 0-3.133-.435-4.44-1.194l-.316-.189-3.28.84.865-3.188-.207-.33A8 8 0 1112 20zm4.547-5.832c-.248-.124-1.468-.724-1.696-.806-.228-.083-.394-.124-.56.124-.165.248-.64.806-.785.97-.145.165-.29.186-.538.062-.248-.124-1.047-.386-1.994-1.23-.737-.657-1.235-1.47-1.38-1.718-.145-.248-.015-.382.109-.505.111-.111.248-.29.372-.435.124-.145.165-.248.248-.413.083-.165.041-.31-.021-.434-.062-.124-.56-1.347-.767-1.844-.202-.483-.406-.417-.56-.425l-.476-.008c-.165 0-.435.062-.663.31s-.87.85-.87 2.073.89 2.402 1.014 2.567c.124.165 1.752 2.677 4.245 3.751.594.256 1.057.41 1.418.524.596.19 1.138.163 1.567.099.478-.072 1.468-.6 1.675-1.18.207-.578.207-1.073.145-1.18-.062-.104-.228-.165-.476-.29z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "9400517050",
    href: "https://wa.me/919400517050",
    external: true,
  },
  {
    id: "email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "vinodanng123@gmail.com",
    href: "mailto:vinodanng123@gmail.com",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-28 bg-charcoal-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label text-gold-400 reveal">Contact Us</span>
          <span className="gold-divider reveal reveal-delay-1" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-6 mb-4 reveal reveal-delay-2">
            Let&apos;s Create Together
          </h2>
          <p className="font-sans text-base text-white/55 max-w-md mx-auto reveal reveal-delay-3">
            Ready to transform your space? Reach out to us and we&apos;ll begin crafting your dream interior.
          </p>
        </div>

        <div className="reveal reveal-delay-1 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactDetails.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center bg-white/5 hover:bg-white/10 rounded-xl p-8 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-gold-600/20 flex items-center justify-center text-gold-400 mb-5 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <span className="font-sans text-[0.65rem] text-white/40 tracking-[0.15em] uppercase block mb-2">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="font-sans text-base text-white hover:text-gold-400 transition-colors font-medium break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-sans text-base text-white/80 font-medium">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
