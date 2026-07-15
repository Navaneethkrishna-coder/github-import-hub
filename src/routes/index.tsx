import { createFileRoute } from "@tanstack/react-router";

import Navbar from "@/components/interior-design/Navbar";
import Hero from "@/components/interior-design/Hero";
import About from "@/components/interior-design/About";
import Services from "@/components/interior-design/Services";
import FeaturedProjects from "@/components/interior-design/FeaturedProjects";
import ProjectCategories from "@/components/interior-design/ProjectCategories";
import Gallery from "@/components/interior-design/Gallery";
import Contact from "@/components/interior-design/Contact";
import Footer from "@/components/interior-design/Footer";
import WhatsAppFloat from "@/components/interior-design/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vinodhen N G Interiors | Premium Interior Design & Contracting" },
      {
        name: "description",
        content:
          "Vinodhen N G Interiors — Premium interior design and contracting for homes and commercial spaces. Showrooms, bedrooms, wardrobes, false ceilings, reception counters, and custom cabinets.",
      },
      { property: "og:title", content: "Vinodhen N G Interiors | Premium Interior Design" },
      {
        property: "og:description",
        content: "Crafting beautiful interior spaces for homes and commercial properties.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://id-preview--1b3b4109-e6c0-47d9-aa77-11a3fddd9931.lovable.app/images/hero-bg.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://id-preview--1b3b4109-e6c0-47d9-aa77-11a3fddd9931.lovable.app/images/hero-bg.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedProjects />
        <ProjectCategories />
        <Gallery />
        <Contact />
      </main>

      <Footer />

      <WhatsAppFloat />
    </div>
  );
}
