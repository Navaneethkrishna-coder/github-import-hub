// All project data. Images reference paths inside /public/images/

export interface Project {
  id: number;
  title: string;
  category: "showrooms" | "bedrooms" | "commercial" | string;
  location: string;
  year: number;
  description: string;
  coverImage: string;
  gallery: string[];
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const projects: Project[] = [
  // Showrooms
  {
    id: 1,
    title: "Lumière Furniture Gallery",
    category: "showrooms",
    location: "Bengaluru, Karnataka",
    year: 2024,
    description:
      "A 4,500 sq ft flagship furniture showroom designed around an immersive retail journey. Marble floors, warm brass fixtures, and curated lighting zones create a boutique luxury experience.",
    coverImage: "/images/projects/showroom-1.jpg",
    gallery: [
      "/images/projects/showroom-1.jpg",
      "/images/projects/showroom-2.jpg",
      "/images/projects/showroom-3.jpg",
    ],
  },
  {
    id: 2,
    title: "Elara Lifestyle Studio",
    category: "showrooms",
    location: "Chennai, Tamil Nadu",
    year: 2023,
    description:
      "A minimalist lifestyle and home décor boutique spread across two floors. Clean white walls, recessed LED lighting, and warm walnut wood shelving showcase each product beautifully.",
    coverImage: "/images/projects/showroom-2.jpg",
    gallery: [
      "/images/projects/showroom-2.jpg",
      "/images/projects/showroom-1.jpg",
    ],
  },
  {
    id: 3,
    title: "Aurum Jewels Boutique",
    category: "showrooms",
    location: "Hyderabad, Telangana",
    year: 2024,
    description:
      "An intimate 1,800 sq ft jewelry showroom with bespoke display cases, Italian marble flooring, and a gold-leaf accent ceiling that elevates every piece on display.",
    coverImage: "/images/projects/showroom-3.jpg",
    gallery: [
      "/images/projects/showroom-3.jpg",
      "/images/projects/showroom-1.jpg",
    ],
  },
  {
    id: 7,
    title: "Mother Opticals Showroom",
    category: "showrooms",
    location: "Kozhikode, Kerala",
    year: 2025,
    description:
      "Successfully designed and executed the complete interior fit-out for the Mother Opticals Showroom in Kozhikode, delivering a modern retail space that combines functionality with an elegant customer experience.",
    coverImage: "/images/projects/showroom-4.jpg",
    gallery: [
      "/images/projects/showroom-4.jpg",
      "/images/projects/showroom-5.jpeg",
    ],
  },
  {
    id: 8,
    title: "AP Gold Showroom – Kolathur",
    category: "showrooms",
    location: "Kolathur, Kerala",
    year: 2025,
    description:
      "Successfully designed and executed the complete interior fit-out for the AP Gold Showroom in Kolathur, creating a premium retail environment that reflects elegance, functionality, and luxury.",
    coverImage: "/images/projects/showroom-5.jpeg",
    gallery: [
      "/images/projects/showroom-5.jpeg",
      "/images/projects/showroom-6.jpeg",
      "/images/projects/showroom-7.jpeg",
    ],
  },
  {
    id: 9,
    title: "Mother Opticals Showroom – Thrissur",
    category: "showrooms",
    location: "Thrissur, Kerala",
    year: 2023,
    description:
      "Successfully designed and executed the complete interior fit-out for the Mother Opticals Showroom in Thrissur, creating a modern and customer-focused retail space.",
    coverImage: "/images/projects/showroom-8.png",
    gallery: ["/images/projects/showroom-8.png"],
  },
  {
    id: 10,
    title: "Mother Dental Academy – Kozhikode",
    category: "commercial",
    location: "Kozhikode, Kerala",
    year: 2026,
    description:
      "Successfully designed and executed the complete interior fit-out for Mother Dental Academy in Kozhikode, creating a modern and professional learning environment for dental education and training.",
    coverImage: "/images/projects/showroom-9.png",
    gallery: ["/images/projects/showroom-9.png"],
  },

  // Bedrooms
  {
    id: 4,
    title: "The Ivory Suite",
    category: "bedrooms",
    location: "Mumbai, Maharashtra",
    year: 2024,
    description:
      "A serene master bedroom retreat featuring a hand-upholstered king bed, custom built-in wardrobes, ambient bedside lighting, and floor-to-ceiling linen drapes.",
    coverImage: "/images/projects/bedroom-1.jpg",
    gallery: ["/images/projects/bedroom-1.jpg"],
  },
  {
    id: 5,
    title: "Obsidian Loft Bedroom",
    category: "bedrooms",
    location: "Pune, Maharashtra",
    year: 2023,
    description:
      "A contemporary bedroom with a dark charcoal accent wall, floating platform bed, and designer pendant lights. Warm wood tones contrast beautifully against the moody palette.",
    coverImage: "/images/projects/bedroom-2.jpg",
    gallery: [
      "/images/projects/bedroom-2.jpg",
      "/images/projects/bedroom-1.jpg",
    ],
  },
  {
    id: 6,
    title: "Serenity Kids Room",
    category: "bedrooms",
    location: "Coimbatore, Tamil Nadu",
    year: 2023,
    description:
      "A thoughtfully designed children's bedroom with custom storage beds, a dedicated study nook, playful pastel tones, and durable yet beautiful finishes for everyday living.",
    coverImage: "/images/projects/bedroom-3.jpg",
    gallery: [
      "/images/projects/bedroom-3.jpg",
      "/images/projects/bedroom-1.jpg",
    ],
  },
];

export const galleryImages: GalleryImage[] = [
  { id: 1, src: "/images/projects/showroom-1.jpg", alt: "Luxury furniture showroom" },
  { id: 2, src: "/images/about.jpg", alt: "Interior design craftsmanship" },
  { id: 3, src: "/images/projects/bedroom-1.jpg", alt: "Luxury master bedroom" },
  { id: 4, src: "/images/projects/showroom-2.jpg", alt: "Lifestyle boutique showroom" },
  { id: 5, src: "/images/projects/showroom-3.jpg", alt: "Jewelry showroom" },
  { id: 6, src: "/images/projects/showroom-4.jpg", alt: "Mother Opticals showroom" },
  { id: 7, src: "/images/projects/showroom-5.jpeg", alt: "AP Gold showroom" },
  { id: 8, src: "/images/projects/showroom-6.jpeg", alt: "AP Gold showroom detail" },
  { id: 9, src: "/images/projects/showroom-7.jpeg", alt: "AP Gold showroom interior" },
  { id: 10, src: "/images/hero-bg.jpg", alt: "Premium living room" },
  { id: 11, src: "/images/projects/showroom-8.png", alt: "Contemporary showroom interior" },
  { id: 12, src: "/images/projects/showroom-9.png", alt: "Modern showroom interior" },
  { id: 13, src: "/images/projects/showroom-10.png", alt: "Premium showroom interior" },
];

export const services: Service[] = [
  {
    id: 1,
    icon: "🏪",
    title: "Showroom Interiors",
    description:
      "Compelling retail environments designed to showcase your brand and products with elegance and purpose.",
  },
  {
    id: 2,
    icon: "🛏️",
    title: "Bedroom Interiors",
    description:
      "Personalised bedroom sanctuaries crafted with premium materials, bespoke furniture, and thoughtful lighting.",
  },
  {
    id: 3,
    icon: "🚪",
    title: "Wardrobes",
    description:
      "Custom wardrobe solutions from walk-in dressing rooms to space-saving built-ins — every detail perfected.",
  },
  {
    id: 4,
    icon: "⬛",
    title: "False Ceilings",
    description:
      "Architectural false ceilings in gypsum, POP, and wood that transform a room's character and acoustics.",
  },
  {
    id: 5,
    icon: "🏢",
    title: "Reception Counters",
    description:
      "Bold, statement reception desks and lobbies that make the perfect first impression for your business.",
  },
  {
    id: 6,
    icon: "🗄️",
    title: "Cabinets & Storage",
    description:
      "Precision-crafted cabinetry for kitchens, offices, and living areas — beautiful function at every scale.",
  },
];

export const featuredProjects: Project[] = projects.slice(0, 3);
