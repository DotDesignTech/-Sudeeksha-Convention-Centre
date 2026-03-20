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
    title: "Conferences",
    desc: "Corporate conferences are events that are attended by eminent business men and women and other professionals. Make sure you choose a convention hall that elevates the standard of your conference by providing your professional delegates with a space that gives them a feel of professionalism. We will make sure that the services that we render are professional as well.",
    image: "/services/conferences.jpg",
  },
  {
    title: "Meetings",
    desc: "While conducting a formal meeting, you need to keep in mind the kind of gathering that will attend the meeting. When you choose Sudeeksha, you will be a great hospitality business that renders services based on your requirements. You can take advantage of a clean space and an air conditioned hall to make your guests feel comfortable. You will surely be provided with business-like services.",
    image: "/services/meetings.jpg",
  },
];

const Corporate = () => (
  <div>
    <PageHero title="Corporate" subtitle="Professional spaces for impactful corporate events and meetings" image="/services/conferences.jpg" />
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
                <span className="text-xs tracking-[0.3em] uppercase text-gold font-subheading">Corporate</span>
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

export default Corporate;
