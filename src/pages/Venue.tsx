import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import HeritageSeparator from "@/components/HeritageSeparator";
import SEO from "@/components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const venues = [
  {
    title: "Grand Wedding Hall",
    desc: "Our magnificent ballroom with gorgeous chandeliers, beautiful high ceilings, and modern upscale decor. Capacity up to 1500 guests for grand celebrations.",
    images: ["/gallery/function-hall/1.webp", "/gallery/function-hall/2.webp", "/gallery/function-hall/3.webp"],
  },
  {
    title: "Dining Hall",
    desc: "A lavish dining space with elegant buffet arrangements. Our expert chefs prepare exquisite multi-cuisine menus tailored to your preferences.",
    images: ["/gallery/dining/1.webp", "/gallery/dining/2.webp", "/gallery/dining/3.webp"],
  },
  {
    title: "Guest Rooms",
    desc: "14 well-appointed guest rooms featuring traditional Indian decor with modern amenities. Perfect for out-of-town guests attending your celebration.",
    images: ["/gallery/rooms/1.jpg", "/gallery/rooms/2.jpg", "/amenities/rooms.webp"],
  },
  {
    title: "Parking Area",
    desc: "Spacious parking facility accommodating 80+ vehicles. Well-lit and secure, ensuring convenience for all your guests.",
    images: ["/gallery/parking/1.jpg", "/gallery/parking/2.jpg", "/gallery/parking/3.jpg"],
  },
];

const Venue = () => (
  <div>
    <SEO title="Explore Our Venue" description="Explore Sudeeksha Convention Centre’s grand wedding hall, dining hall, 14 guest rooms and 80+ car parking – all on Magadi Main Road, Bengaluru." canonical="/venue" />
    <PageHero title="Explore Our Venue" subtitle="Every corner designed for royal celebrations" image="/gallery/outer-view/1.jpg" />

    <section className="section-padding heritage-pattern">
      <div className="container mx-auto">
        {venues.map((v, vi) => (
          <div key={v.title} className="mb-20 last:mb-0">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="font-heading text-3xl md:text-4xl text-primary mb-2 text-center">{v.title}</motion.h2>
            <HeritageSeparator />
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="text-center text-muted-foreground max-w-2xl mx-auto mb-8 font-subheading">{v.desc}</motion.p>
            <div className={`grid gap-4 ${v.images.length > 1 ? "grid-cols-1 md:grid-cols-3" : "max-w-3xl mx-auto"}`}>
              {v.images.map((img, i) => (
                <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                  className="overflow-hidden gold-border-thick group">
                  <img src={img} alt={v.title} className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Venue;
