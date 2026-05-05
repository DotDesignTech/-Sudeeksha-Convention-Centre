import { motion } from "framer-motion";
import { Heart, PartyPopper, Cake, Flower2, Building2, Users, Gem } from "lucide-react";
import PageHero from "@/components/PageHero";
import HeritageSeparator from "@/components/HeritageSeparator";
import SEO from "@/components/SEO";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const services = [
  { icon: Gem, title: "Wedding Ceremony", desc: "For events like weddings, you require an eminent venue that will make your event worth every moment. Our grand setup ensures a royal wedding.", image: "/services/wedding.webp" },
  { icon: Heart, title: "Wedding Reception", desc: "Receptions are always enjoyed with a tinge of dance and party. The type of ambience you choose plays a very significant role in your reception.", image: "/services/reception-party.webp" },
  { icon: PartyPopper, title: "Anniversary Celebrations", desc: "Whether you're celebrating your 25th or your 60th anniversary, Sudeeksha offers luxury and pocket-friendly venues to celebrate.", image: "/services/anniversary-party.webp" },
  { icon: Cake, title: "Birthday Parties", desc: "When we celebrate a birthday, we are celebrating the miracle of birth and the unique person brought into the world on that day.", image: "/services/birthday-party.webp" },
  { icon: Flower2, title: "Mehendi Ceremony", desc: "Make your mehendi event a special one by getting us to set up your event according to your requirements with vibrant traditional decor.", image: "/services/mehndi-ceremony-other-social-events.webp" },
  { icon: Building2, title: "Corporate Events", desc: "Professional conference and meeting setups with state-of-the-art audio-visual equipment and customizable seating arrangements.", image: "/services/conferences.webp" },
  { icon: Users, title: "Social Gatherings", desc: "From cocktail parties to family reunions, our versatile spaces can be tailored to create the perfect atmosphere for any social event.", image: "/services/sangeeth.webp" },
];

const Services = () => (
  <div>
    <SEO title="Our Services" description="Sudeeksha Convention Centre hosts weddings, receptions, anniversaries, birthdays, mehendi, corporate events and social gatherings in Bengaluru." canonical="/services" />
    <PageHero title="Events We Host" subtitle="Celebrations crafted with royal elegance and attention to every detail" image="/services/bride-groom-ceremony.jpg" />

    <section className="section-padding heritage-pattern">
      <div className="container mx-auto">
        <HeritageSeparator />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i}
              className="gold-border-thick overflow-hidden bg-background/50 group"
            >
              <div className="relative overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full heritage-gradient border border-gold flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-gold" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-primary mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
