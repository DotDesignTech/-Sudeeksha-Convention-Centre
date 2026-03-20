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
    title: "Engagement",
    desc: "An Engagement marks the beginning of formal agreement upon which a couple formally announces their wedding. Make your engagement an event to remember for your family and friends by taking advantage of our services at Sudeeksha Convention Centre.",
    image: "/services/engagement.jpg",
  },
  {
    title: "Sangeeth",
    desc: "A Sangeeth is never complete with the excitement of a dance and singing party. Well, to complete a Sangeeth you need a hospitality business that will not just attend to your hall requirements, but will also provide you with the necessary sound and light equipment required for your Sangeeth party. Your Sangeeth will definitely be remembered by all your guests because of the quality treatment that they receive from Sudeeksha.",
    image: "/services/sangeeth.jpg",
  },
  {
    title: "Bride & Groom Ceremony",
    desc: "In India, along with the wedding, we also have bride and groom ceremonies. Finding a convention hall that is best suited for all these traditional programs is a task. We give you the choice of booking our convention hall for all the ceremonies as we are aware that most of these bride and groom ceremonies go with few people.\n\nCustomer satisfaction and budget friendly services go hand in hand. Sudeeksha offers a spacious property to conduct all the ceremonies, you will surely get services you deserve.",
    image: "/services/bride-groom-ceremony.jpg",
  },
  {
    title: "Mehendi",
    desc: "Make your mehendi event a special one by getting us to set up your event according to your requirements. An event that is full of life and enthusiasm can get better when you choose Sudeeksha team that will attend to all your requirements. We also offer food stalls, tattoos and nail art, mehendi.",
    image: "/services/mehndi-ceremony-other-social-events.jpg",
  },
  {
    title: "Reception",
    desc: "The perfect place to celebrate receptions, large events and intimate gatherings. Our state-of-the-art convention centre has been built with a lot of focus on aesthetics and functionality.",
    image: "/services/reception-party.jpg",
  },
  {
    title: "Wedding",
    desc: "For events like weddings, you require an eminent venue services that will make your event worth the money that you spend. Make your wedding memorable by opting for the best hospitality service from Sudeeksha in town. We are the best hospitality service to choose when you have a wedding based on a theme. You can tell us exactly what you're looking for and we'll make sure we get the necessary arrangements done.",
    image: "/services/wedding.jpg",
  },
];

const Wedding = () => (
  <div>
    <PageHero title="Wedding" subtitle="Celebrate love with royal elegance and timeless traditions" image="/services/bride-groom-ceremony.jpg" />
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
                <span className="text-xs tracking-[0.3em] uppercase text-gold font-subheading">Wedding</span>
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

export default Wedding;
