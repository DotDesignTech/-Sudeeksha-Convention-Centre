import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Venue", path: "/venue" },
  { label: "Gallery", path: "/gallery" },
  { label: "Booking", path: "/booking" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-maroon-dark/95 backdrop-blur-sm border-b border-gold/30">
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-center gap-6 py-1.5 text-xs tracking-widest bg-maroon-dark border-b border-gold/20">
        <a href="tel:+918123923161" className="flex items-center gap-1.5 text-gold-light hover:text-gold transition-colors">
          <Phone className="w-3 h-3" />
          +91 8123923161
        </a>
        <span className="text-gold/40">|</span>
        <span className="text-gold-light/70">Magadi Main Road, Bengaluru</span>
      </div>
      
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center">
          <span className="font-heading text-xl md:text-2xl font-bold tracking-wider text-gold">Sudeeksha</span>
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold-light/70">Convention Centre</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm tracking-wider uppercase font-subheading transition-colors ${
                location.pathname === link.path
                  ? "text-gold border-b-2 border-gold"
                  : "text-gold-light/70 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-gold p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-maroon-dark border-t border-gold/20 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 text-sm tracking-wider uppercase font-subheading transition-colors ${
                location.pathname === link.path
                  ? "text-gold bg-maroon"
                  : "text-gold-light/70 hover:text-gold hover:bg-maroon/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
