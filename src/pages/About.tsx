import { motion } from "framer-motion";
import { Crown, Users, BedDouble, Utensils, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import HeritageSeparator from "@/components/HeritageSeparator";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const features = [
  { icon: Crown, title: "Luxury Wedding Atmosphere", desc: "Our grand ballroom with gorgeous chandeliers and high ceilings provides the perfect venue for unforgettable celebrations." },
  { icon: Users, title: "Event Capacity", desc: "From intimate gatherings of 25 guests to grand celebrations of up to 1500 guests, we accommodate all event sizes." },
  { icon: BedDouble, title: "Guest Accommodation", desc: "14 well-appointed guest rooms with traditional Indian decor and modern amenities for your out-of-town guests." },
  { icon: Utensils, title: "Dining Arrangements", desc: "Exquisite cuisine prepared by expert chefs, featuring a wide range of traditional and contemporary dishes." },
];

const About = () => (
  <div>
    <PageHero title="About Us" subtitle="The story behind Bangalore's most prestigious celebration venue" image="/img/about.jpg" />

    {/* Our Story */}
    <section className="section-padding heritage-pattern">
      <div className="container mx-auto max-w-4xl">
        <HeritageSeparator />
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          className="font-heading text-3xl md:text-4xl text-center text-primary mb-6">Our Story</motion.h2>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
          className="font-subheading text-base md:text-lg text-muted-foreground leading-relaxed mb-6 text-center">
          Sudeeksha Convention Centre stands as a beacon of elegance and hospitality in the heart of Bangalore. Born from a vision to create a venue that embodies the grandeur of Indian celebrations, we have grown into one of the city's most sought-after destinations for weddings and events.
        </motion.p>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
          className="text-muted-foreground leading-relaxed mb-6 text-center">
          Our gorgeous ballroom, holding up to 500 guests for a wedding reception, boasts gorgeous chandeliers along with beautiful high ceilings providing the perfect venue for that unforgettable wedding. The modern upscale decor combined with traditional Indian warmth creates an ambiance that is truly unmatched.
        </motion.p>
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
          className="text-muted-foreground leading-relaxed text-center">
          From large and lavish wedding extravaganzas to small and intimate affairs of anniversaries or birthday parties, Sudeeksha Convention Centre provides the perfect venue to accommodate your celebratory needs. Our banquet rooms and event spaces accommodate smaller intimate events with a minimum of 25 guests up to 1500 guests for larger receptions.
        </motion.p>
        <HeritageSeparator />
      </div>
    </section>

    {/* Features */}
    <section className="section-padding bg-ivory-dark">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-center text-primary mb-4">Venue Features</h2>
        <HeritageSeparator />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {features.map((f, i) => (
            <motion.div key={f.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="flex gap-5 p-6 gold-border bg-background/50">
              <f.icon className="w-10 h-10 text-gold shrink-0" />
              <div>
                <h4 className="font-heading text-lg text-primary mb-2">{f.title}</h4>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Images */}
    <section className="section-padding heritage-pattern">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-center text-primary mb-4">Our Spaces</h2>
        <HeritageSeparator />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {[
            { img: "/gallery/function-hall/1.jpg", label: "Grand Ballroom" },
            { img: "/gallery/dining/df.jpg", label: "Dining Hall" },
            { img: "/amenities/rooms.jpg", label: "Guest Rooms" },
          ].map((item, i) => (
            <motion.div key={item.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
              className="relative overflow-hidden gold-border group">
              <img src={item.img} alt={item.label} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-maroon-dark/90 to-transparent">
                <h3 className="font-heading text-lg text-gold flex items-center gap-2"><Sparkles className="w-4 h-4" />{item.label}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
