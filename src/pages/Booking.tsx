import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import PageHero from "@/components/PageHero";
import HeritageSeparator from "@/components/HeritageSeparator";
import heroImg from "/gallery/function-hall/1.jpg";
import { toast } from "sonner";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const eventTypes = [
  "Wedding Ceremony",
  "Wedding Reception",
  "Anniversary",
  "Birthday Party",
  "Mehendi Ceremony",
  "Corporate Event",
  "Social Gathering",
];

const Booking = () => {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", event_type: "", event_date: "", guests: "", message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      toast.success("Thank you! We will contact you shortly to confirm your booking.");
      setForm({ name: "", phone: "", email: "", event_type: "", event_date: "", guests: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <PageHero title="Book Your Event" subtitle="Begin your journey to a royal celebration" image={heroImg} />

      <section className="section-padding heritage-pattern">
        <div className="container mx-auto max-w-2xl">
          <HeritageSeparator />
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="gold-border-thick p-8 md:p-12 bg-background/80"
          >
            <h2 className="font-heading text-2xl text-primary text-center mb-8">Reservation Details</h2>

            <div className="space-y-5">
              {[
                { name: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                { name: "email", label: "Email Address", type: "email", placeholder: "<your@email.com>" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block font-heading text-xs tracking-widest uppercase text-primary mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={(form as Record<string, string>)[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-4 py-3 bg-background border-2 border-gold/30 text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors font-body"
                  />
                </div>
              ))}

              <div>
                <label className="block font-heading text-xs tracking-widest uppercase text-primary mb-2">Event Type</label>
                <select
                  name="event_type"
                  value={form.event_type}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border-2 border-gold/30 text-foreground focus:border-gold focus:outline-none transition-colors font-body"
                >
                  <option value="">Select event type</option>
                  {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-heading text-xs tracking-widest uppercase text-primary mb-2">Event Date</label>
                  <input
                    type="date"
                    name="event_date"
                    value={form.event_date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border-2 border-gold/30 text-foreground focus:border-gold focus:outline-none transition-colors font-body"
                  />
                </div>
                <div>
                  <label className="block font-heading text-xs tracking-widest uppercase text-primary mb-2">Number of Guests</label>
                  <input
                    type="number"
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    placeholder="e.g. 500"
                    required
                    className="w-full px-4 py-3 bg-background border-2 border-gold/30 text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors font-body"
                  />
                </div>
              </div>

              <div>
                <label className="block font-heading text-xs tracking-widest uppercase text-primary mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your event..."
                  className="w-full px-4 py-3 bg-background border-2 border-gold/30 text-foreground placeholder:text-muted-foreground/50 focus:border-gold focus:outline-none transition-colors font-body resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 heritage-gradient border-2 border-gold text-gold font-heading text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {loading ? "Sending..." : "Submit Booking"}
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Booking;
