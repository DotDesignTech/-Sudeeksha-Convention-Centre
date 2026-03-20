import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import PageHero from "@/components/PageHero";
import HeritageSeparator from "@/components/HeritageSeparator";
import heroImg from "/gallery/function-hall/1.jpg";
import { toast } from "sonner";

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
    name: "", phone: "", email: "", eventType: "", eventDate: "", guests: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We will contact you shortly to confirm your booking.");
    setForm({ name: "", phone: "", email: "", eventType: "", eventDate: "", guests: "", message: "" });
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
                { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
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
                  name="eventType"
                  value={form.eventType}
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
                    name="eventDate"
                    value={form.eventDate}
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
                className="w-full py-4 heritage-gradient border-2 border-gold text-gold font-heading text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit Booking
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Booking;
