import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="heritage-gradient text-gold-light/80">
    {/* Gold top border */}
    <div className="h-1 gold-gradient" />
    
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl text-gold mb-4">Sudeeksha</h3>
          <p className="text-sm leading-relaxed mb-4">
            A royal destination for weddings &amp; celebrations. Creating unforgettable memories in the heart of Bangalore.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg text-gold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Services", "Venue", "Gallery", "Booking", "Contact"].map((item) => (
              <li key={item}>
                <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="hover:text-gold transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading text-lg text-gold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Wedding", path: "/services/wedding" },
              { label: "Corporate", path: "/services/corporate" },
              { label: "Occasional Events", path: "/services/occasional-events" },
              { label: "Other Events", path: "/services/other-events" },
            ].map((s) => (
              <li key={s.label}>
                <Link to={s.path} className="hover:text-gold transition-colors">{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg text-gold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />
              No 460/11, Magadi Main Road, Kottigepalya, Bengaluru – 560091
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <a href="tel:+918123923161" className="hover:text-gold transition-colors">+91 8123923161</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <a href="mailto:sudeekshaconventioncenter@gmail.com" className="hover:text-gold transition-colors text-xs">
                sudeekshaconventioncenter@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="border-t border-gold/20 py-4">
      <p className="text-center text-xs text-gold-light/50">
        © {new Date().getFullYear()} Sudeeksha Convention Centre. All rights reserved.
      </p>
      <p className="text-center text-xs text-gold-light/30 mt-1">
        Designed & Developed by{" "}
        <a href="https://www.dotdesigntech.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-gold transition-colors hover:text-gold-light">
          Dot Design
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
