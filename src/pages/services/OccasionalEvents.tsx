import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import HeritageSeparator from "@/components/HeritageSeparator";
import SEO from "@/components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const items = [
  {
    title: "New Year Parties",
    desc: "New Year is one such event that needs to be celebrated with enthusiasm and joy. An event like this will be successful only when the space at which the event is happening is of good quality and satisfies every requirement. Sudeeksha provides hospitality services that are exemplary.",
    image: "/services/new-year-parties.webp",
  },
  {
    title: "Holi",
    desc: "Choosing the right venue for your Holi party can make it much more comfortable and a lot less stressful. Located at a beautiful location, Sudeeksha Convention Centre can be a unanimous choice for variety of functions. Sudeeksha Convention Centre can cater to all your needs and give you a worthwhile experience.",
    image: "/services/holi.webp",
  },
  {
    title: "Dasara",
    desc: "Sudeeksha also offers venues for the occasion of Dasara. Dasara is a traditional festival that is celebrated for nine days. A festival that is celebrated with dandiya and arrangement of idols requires a venue that supports the required type of arrangement.\n\nThe safety and security of you and your family is assured when you choose to work with us. You will also be provided with an inbuilt stage on the occasion of your festive celebration.",
    image: "/services/dasara.webp",
  },
];

const OccasionalEvents = () => (
  <div>
    <SEO title="Occasional Events" description="Celebrate New Year, Holi, Dasara and other festive occasions at Sudeeksha Convention Centre, Bengaluru. Grand venue for all your festive celebrations." canonical="/services/occasional-events" />
    <PageHero title="Occasional Events" subtitle="Festive celebrations crafted with joy and grandeur" image="/services/new-year-parties.webp" />
    <section className="section-padding heritage-pattern">
      <div className="container mx-auto max-w-6xl">
        <HeritageSeparator />
        <div className="space-y-20">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "md:[direction:rtl]" : ""}`}
            >
              <div className="overflow-hidden gold-border-thick rounded-sm group">
                <img src={item.image} alt={item.title} className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className={i % 2 !== 0 ? "md:[direction:ltr]" : ""}>
                <span className="text-xs tracking-[0.3em] uppercase text-gold font-subheading">Occasional Events</span>
                <h3 className="font-heading text-2xl md:text-3xl text-primary mt-2 mb-4">{item.title}</h3>
                <div className="w-12 h-0.5 bg-gold mb-5" />
                <p className="text-muted-foreground leading-relaxed mb-6 whitespace-pre-line">{item.desc}</p>
                <Link to="/contact" className="inline-block px-6 py-2.5 border-2 border-primary text-primary font-heading text-xs tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <HeritageSeparator />
      </div>
    </section>
  </div>
);

export default OccasionalEvents;
