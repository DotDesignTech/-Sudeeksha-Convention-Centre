import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import HeritageSeparator from "@/components/HeritageSeparator";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const items = [
  {
    title: "Cradle Ceremonies",
    desc: "Another tradition is to decorate the cradle with the wedding saree of the mother. First a small statue of Lord Krishna is placed inside the cradle and then the baby is placed in the cradle.\n\nDuring your cradle ceremony, one of the most important facilities that need to be included is the availability of green rooms. Sudeeksha provides green room facilities as well. Our green rooms are clean and safe. Our space is eco-friendly and you will be provided with top-class facilities.",
    image: "/services/cradle-ceremonies.jpg",
  },
  {
    title: "Birthday Parties",
    desc: "When we celebrate a first birthday we are celebrating the miracle of birth and the unique person who was brought into the world on that day. A first birthday celebration is particularly precious because as we reflect on the previous year we think about just how tiny and new they were and how far they have come.\n\nNo matter the type of event, our convention halls are spacious and can accommodate around 800-1000 people. You'll also be provided with a sound system to make your birthday bash a vibrant one. With all the fun, excitement and food that is served at a clean space, you're sure to have the best birthday bash.",
    image: "/services/birthday-party.jpg",
  },
  {
    title: "Shasti Abda Poorthi",
    desc: "Want to celebrate a 60 years anniversary? Sudeeksha Convention Centre is the best that boasts of an amazing interiors, large free parking space.",
    image: "/services/shasti-abda-poorthi.jpg",
  },
  {
    title: "Anniversary Parties",
    desc: "Whether you're celebrating your 25th or your 60th anniversary, Sudeeksha offers luxury and pocket friendly venues to celebrate your anniversary.\n\nYou'll surely get carried away with the kind of services that we provide. It is important to ensure that the Sudeeksha venues that you choose has all the facilities that you're looking for without bargaining on the health factor of any guest that participates in your event.",
    image: "/services/anniversary-party.jpg",
  },
];

const OtherEvents = () => (
  <div>
    <PageHero title="Other Events" subtitle="Every occasion deserves a royal celebration" image="/services/anniversary-party.jpg" />
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
                <span className="text-xs tracking-[0.3em] uppercase text-gold font-subheading">Other Events</span>
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

export default OtherEvents;
