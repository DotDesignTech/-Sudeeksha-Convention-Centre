import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Users, Wind, BedDouble, Car, Zap, UserCheck, Heart, Utensils, Headphones, Star, Trophy, CalendarCheck, SmilePlus, CheckCircle2, MapPin, Phone, ChevronRight } from "lucide-react";
import HeritageSeparator from "@/components/HeritageSeparator";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const events = [
  { title: "Wedding", image: "/services/wedding.webp" },
  { title: "Reception", image: "/services/reception-party.webp" },
  { title: "Anniversary", image: "/services/anniversary-party.webp" },
  { title: "Birthday", image: "/services/birthday-party.webp" },
  { title: "Mehendi Ceremony", image: "/services/mehndi-ceremony-other-social-events.webp" },
  { title: "Corporate Events", image: "/services/conferences.webp" },
];

const whyUs = [
  { icon: UserCheck, title: "Professional Consultants", desc: "Services customized to your demands, needs, and budget." },
  { icon: Heart, title: "Friendly Staff", desc: "Dedicated staff that takes care of every planned event." },
  { icon: Utensils, title: "Premium Quality Food", desc: "Every speciality baked or made to your precise requirements." },
  { icon: Headphones, title: "24/7 Support", desc: "365 days availability for your convenience." },
];

const highlights = [
  { icon: Users, value: "1500+", label: "Guest Capacity" },
  { icon: Wind, value: "A/C", label: "Air Conditioned Hall" },
  { icon: BedDouble, value: "14", label: "Guest Rooms" },
  { icon: Car, value: "80+", label: "Car Parking" },
  { icon: Zap, value: "24/7", label: "Power Backup" },
];

const heroSlides = ["/img/about.jpg", "/img/s2.jpg"];

const galleryPreview = [
  "/gallery/function-hall/1.webp",
  "/gallery/function-hall/4.webp",
  "/gallery/dining/1.webp",
  "/gallery/rooms/1.jpg",
  "/gallery/outer-view/2.jpg",
  "/gallery/parking/1.jpg",
];

const stats = [
  { target: 1000, suffix: "+", label: "Happy Clients", icon: SmilePlus },
  { target: 500, suffix: "+", label: "Happy Celebrations", icon: CalendarCheck },
  { target: 800, suffix: "+", label: "Five Star Ratings", icon: Star },
  { target: 200, suffix: "+", label: "Served Occasions", icon: Trophy },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / (2000 / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

import SEO from "@/components/SEO";

const Index = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <SEO
        title="Wedding & Events Venue in Bengaluru"
        description="Sudeeksha Convention Centre – Premier wedding and events venue on Magadi Main Road, Bengaluru. Host weddings, receptions, corporate events & more for up to 1500 guests."
        canonical="/"
      />
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {heroSlides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Sudeeksha Convention Centre"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === slide ? "opacity-100" : "opacity-0"
            }`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="inline-block bg-black/50 backdrop-blur-sm border-2 border-gold/70 rounded-2xl px-10 py-8 mb-6"
          >
            <span className="inline-block text-xs tracking-[0.4em] uppercase text-gold-light/80 mb-4 font-subheading">Welcome to</span>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-gold mb-2 drop-shadow-lg"
            >
              Sudeeksha
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-heading text-xl md:text-2xl tracking-[0.2em] text-gold-light mb-3"
            >
              Complete Convention Centre
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="font-subheading text-base md:text-lg text-gold-light/80 italic max-w-xl mx-auto"
            >
              A Royal Destination for Weddings &amp; Celebrations
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/booking" className="px-8 py-3 heritage-gradient border-2 border-gold text-gold font-heading text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300">
              Book Your Event
            </Link>
            <Link to="/gallery" className="px-8 py-3 heritage-gradient border-2 border-gold text-gold font-heading text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300">
              Explore Gallery
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient" />
      </section>

      {/* About Preview */}
      <section className="section-padding heritage-pattern">
        <div className="container mx-auto max-w-6xl">
          <HeritageSeparator />
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="font-heading text-3xl md:text-4xl text-center text-primary mb-10">
            Discover About Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: Content */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <p className="font-subheading text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
                <span className="font-semibold text-primary">Memories To Last A Lifetime:</span> Sudeeksha Convention Centre is a gorgeous and ideal setting in Bangalore for your big day! Our reception hall provides a perfect backdrop for your wedding. We can host events up to 1500 guests in our spacious ballroom for your wedding ceremonies, receptions &amp; mehendi. Sudeeksha Convention Centre has been sought after for its grand ballroom and modern upscale decor.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                The hall, holding up to 500 guests for a wedding reception, boasts gorgeous chandeliers along with beautiful high ceilings, providing the perfect venue for that unforgettable wedding.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From large and lavish weddings extravaganzas to small and intimate affairs or anniversaries or birthday parties, Sudeeksha Convention Centre will provide the perfect venue to accommodate your celebratory needs. Our Banquet Rooms and Event Spaces will accommodate smaller intimate events with a minimum of 25 guests to 1500 guests for larger receptions.
              </p>
              <Link to="/about" className="inline-block px-6 py-2.5 border-2 border-primary text-primary font-heading text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Know More
              </Link>
            </motion.div>
            {/* Right: Video */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
              className="w-full aspect-video gold-border-thick overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/jtQu2fovyTo"
                title="Sudeeksha Convention Centre"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </div>
          <HeritageSeparator />
        </div>
      </section>

      {/* Our Events */}
      <section className="section-padding bg-ivory-dark">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-12">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold font-subheading mb-2"><CalendarCheck className="w-4 h-4" /> What We Host</span>
            <h2 className="font-heading text-3xl md:text-4xl text-center text-primary mb-3">Our Events</h2>
            <p className="text-center text-muted-foreground font-subheading">Celebrations crafted with royal elegance</p>
            <div className="flex gap-1 mt-3">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="group relative overflow-hidden gold-border"
              >
                <img src={event.image} alt={event.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/90 to-transparent flex items-end p-6">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-gold" />
                    <h3 className="font-heading text-xl text-gold">{event.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding heritage-pattern">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-4">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold font-subheading mb-2"><Trophy className="w-4 h-4" /> Our Promise</span>
            <h2 className="font-heading text-3xl md:text-4xl text-center text-primary">Why Choose Us</h2>
          </div>
          <HeritageSeparator />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="relative text-center p-6 gold-border bg-background/50 group hover:heritage-gradient transition-all duration-300"
              >
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full border border-gold/40 flex items-center justify-center">
                  <span className="text-xs font-heading text-gold/60 group-hover:text-gold">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full heritage-gradient border border-gold/40 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-gold" />
                </div>
                <h4 className="font-heading text-lg text-primary mb-2 group-hover:text-gold transition-colors duration-300">{item.title}</h4>
                <p className="text-sm text-muted-foreground group-hover:text-gold-light/80 transition-colors duration-300">{item.desc}</p>
                <div className="mt-4 flex justify-center"><CheckCircle2 className="w-4 h-4 text-gold/50 group-hover:text-gold transition-colors duration-300" /></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="heritage-gradient py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="container mx-auto relative z-10">
          <p className="text-center text-xs tracking-[0.4em] uppercase text-gold/60 font-subheading mb-8">Our Achievements</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="text-center p-6 border border-gold/20 bg-white/5 backdrop-blur-sm">
                <stat.icon className="w-7 h-7 mx-auto mb-3 text-gold/70" />
                <span className="font-heading text-4xl md:text-5xl font-bold text-gold block">
                  <CountUp target={stat.target} suffix={stat.suffix} />
                </span>
                <div className="w-8 h-px bg-gold/40 mx-auto my-2" />
                <p className="text-gold-light/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Highlights */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-4">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold font-subheading mb-2"><Star className="w-4 h-4" /> At A Glance</span>
            <h2 className="font-heading text-3xl md:text-4xl text-center text-primary">Venue Highlights</h2>
          </div>
          <HeritageSeparator />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="relative text-center p-5 gold-border bg-background/50 overflow-hidden group"
              >
                <div className="absolute inset-0 gold-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="w-14 h-14 mx-auto mb-3 rounded-full border-2 border-gold/30 flex items-center justify-center bg-gold/5">
                  <h.icon className="w-6 h-6 text-gold" />
                </div>
                <span className="block font-heading text-2xl font-bold text-primary">{h.value}</span>
                <div className="w-6 h-px bg-gold/40 mx-auto my-1.5" />
                <span className="text-xs text-muted-foreground">{h.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding bg-ivory-dark">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-4">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold font-subheading mb-2"><Star className="w-4 h-4" /> Visual Tour</span>
            <h2 className="font-heading text-3xl md:text-4xl text-center text-primary">Our Gallery</h2>
          </div>
          <HeritageSeparator />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
            {galleryPreview.map((img, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="overflow-hidden gold-border"
              >
                <img src={img} alt="Gallery" className="w-full h-48 md:h-56 object-cover hover:scale-110 transition-transform duration-700" loading="lazy" />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="inline-block px-8 py-3 heritage-gradient border-2 border-gold text-gold font-heading text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-ivory-dark">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center mb-4">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold font-subheading mb-2"><MapPin className="w-4 h-4" /> Find Us</span>
            <h2 className="font-heading text-3xl md:text-4xl text-center text-primary">Our Location</h2>
          </div>
          <HeritageSeparator />
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 mb-6">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="w-4 h-4 text-gold shrink-0" /> No 460/11, Magadi Main Road, Kottigepalya, Bengaluru – 560091</span>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground"><Phone className="w-4 h-4 text-gold shrink-0" /> +91 8123923161</span>
          </div>
          <div className="gold-border-thick overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5145288!3d12.9879077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d41435ebe57%3A0x95646cf9bbfe1758!2sSudeeksha+Convention+Center+-+Magadi+Road!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Sudeeksha Convention Centre Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
