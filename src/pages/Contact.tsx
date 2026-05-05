import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import HeritageSeparator from "@/components/HeritageSeparator";
import heroImg from "/img/about.webp";
import SEO from "@/components/SEO";

const Contact = () => (
  <div>
    <SEO title="Contact Us" description="Contact Sudeeksha Convention Centre at No 460/11, Magadi Main Road, Kottigepalya, Bengaluru – 560091. Call +91 8123923161 or email us to plan your event." canonical="/contact" />
    <PageHero title="Contact Us" subtitle="We'd love to help you plan your celebration" image={heroImg} />

    <section className="section-padding heritage-pattern">
      <div className="container mx-auto max-w-5xl">
        <HeritageSeparator />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col">
            <h2 className="font-heading text-3xl text-primary mb-8">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-5 gold-border bg-background/50">
                <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-heading text-sm text-primary mb-1">Address</h4>
                  <p className="text-sm text-muted-foreground">
                    No 460/11, Magadi Main Road<br />
                    Kottigepalya<br />
                    Bengaluru – 560091
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 gold-border bg-background/50">
                <Phone className="w-6 h-6 text-gold shrink-0" />
                <div>
                  <h4 className="font-heading text-sm text-primary mb-1">Phone</h4>
                  <a href="tel:+918123923161" className="text-sm text-muted-foreground hover:text-gold transition-colors">+91 8123923161</a>
                </div>
              </div>

              <div className="flex gap-4 p-5 gold-border bg-background/50">
                <Mail className="w-6 h-6 text-gold shrink-0" />
                <div>
                  <h4 className="font-heading text-sm text-primary mb-1">Email</h4>
                  <a href="mailto:sudeekshaconventioncenter@gmail.com" className="text-sm text-muted-foreground hover:text-gold transition-colors break-all">
                    sudeekshaconventioncenter@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-5 gold-border bg-background/50">
                <Clock className="w-6 h-6 text-gold shrink-0" />
                <div>
                  <h4 className="font-heading text-sm text-primary mb-1">Availability</h4>
                  <p className="text-sm text-muted-foreground">24/7 — 365 days a year</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col">
            <h2 className="font-heading text-3xl text-primary mb-8">Find Us</h2>
            <div className="gold-border-thick overflow-hidden flex-1 min-h-[350px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5145288!3d12.9879077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d41435ebe57%3A0x95646cf9bbfe1758!2sSudeeksha+Convention+Center+-+Magadi+Road!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Sudeeksha Convention Centre Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
