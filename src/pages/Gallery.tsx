import { useState } from "react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import HeritageSeparator from "@/components/HeritageSeparator";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5 } }),
};

const categories = ["All", "Exterior", "Function Hall", "Dining Area", "Guest Rooms", "Parking"];

const images = [
  { src: "/gallery/outer-view/1.jpg", cat: "Exterior" },
  { src: "/gallery/outer-view/2.jpg", cat: "Exterior" },
  { src: "/gallery/outer-view/3.jpg", cat: "Exterior" },
  { src: "/gallery/outer-view/4.jpg", cat: "Exterior" },
  { src: "/gallery/outer-view/5.jpg", cat: "Exterior" },
  { src: "/gallery/function-hall/1.jpg", cat: "Function Hall" },
  { src: "/gallery/function-hall/2.jpg", cat: "Function Hall" },
  { src: "/gallery/function-hall/3.jpg", cat: "Function Hall" },
  { src: "/gallery/function-hall/4.jpg", cat: "Function Hall" },
  { src: "/gallery/function-hall/5.jpg", cat: "Function Hall" },
  { src: "/gallery/function-hall/6.jpg", cat: "Function Hall" },
  { src: "/gallery/function-hall/7.jpg", cat: "Function Hall" },
  { src: "/gallery/function-hall/8.jpg", cat: "Function Hall" },
  { src: "/gallery/function-hall/9.jpg", cat: "Function Hall" },
  { src: "/gallery/dining/1.jpg", cat: "Dining Area" },
  { src: "/gallery/dining/2.jpg", cat: "Dining Area" },
  { src: "/gallery/dining/3.jpg", cat: "Dining Area" },
  { src: "/gallery/dining/4.jpg", cat: "Dining Area" },
  { src: "/gallery/dining/5.jpg", cat: "Dining Area" },
  { src: "/gallery/dining/6.jpg", cat: "Dining Area" },
  { src: "/gallery/dining/7.jpg", cat: "Dining Area" },
  { src: "/gallery/rooms/1.jpg", cat: "Guest Rooms" },
  { src: "/gallery/rooms/2.jpg", cat: "Guest Rooms" },
  { src: "/amenities/rooms.jpg", cat: "Guest Rooms" },
  { src: "/gallery/parking/1.jpg", cat: "Parking" },
  { src: "/gallery/parking/2.jpg", cat: "Parking" },
  { src: "/gallery/parking/3.jpg", cat: "Parking" },
  { src: "/gallery/parking/4.jpg", cat: "Parking" },
  { src: "/gallery/parking/5.jpg", cat: "Parking" },
  { src: "/gallery/parking/6.jpg", cat: "Parking" },
  { src: "/gallery/parking/7.jpg", cat: "Parking" },
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? images : images.filter((img) => img.cat === filter);

  return (
    <div>
      <PageHero title="Our Gallery" subtitle="A visual journey through royal celebrations" image="/gallery/function-hall/1.jpg" />

      <section className="section-padding heritage-pattern">
        <div className="container mx-auto">
          <HeritageSeparator />
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 font-heading text-xs tracking-widest uppercase border-2 transition-all duration-300 ${
                  filter === cat
                    ? "heritage-gradient border-gold text-gold"
                    : "border-gold/40 text-primary hover:border-gold hover:text-gold hover:bg-maroon/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <motion.div
                key={`${img.src}-${filter}`}
                initial="hidden" animate="visible"
                variants={fadeUp} custom={i}
                className="break-inside-avoid overflow-hidden gold-border group"
              >
                <img
                  src={img.src}
                  alt={img.cat}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                    i % 3 === 0 ? "h-72" : i % 3 === 1 ? "h-56" : "h-64"
                  }`}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
