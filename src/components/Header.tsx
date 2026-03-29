import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const serviceLinks = [
  { label: "Wedding", path: "/services/wedding" },
  { label: "Corporate", path: "/services/corporate" },
  { label: "Occasional Events", path: "/services/occasional-events" },
  { label: "Other Events", path: "/services/other-events" },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Venue", path: "/venue" },
  { label: "Gallery", path: "/gallery" },
  { label: "Booking", path: "/booking" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServicesActive = location.pathname.startsWith("/services");

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

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
          <span className="font-heading text-xl md:text-2xl font-bold tracking-wider text-gold">SUDEEKSHA</span>
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold-light/70">COMPLETE CONVENTION CENTRE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm tracking-wider uppercase font-subheading transition-colors ${
                location.pathname === link.path ? "text-gold border-b-2 border-gold" : "text-gold-light/70 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`flex items-center gap-1 px-3 py-2 text-sm tracking-wider uppercase font-subheading transition-colors ${
                isServicesActive ? "text-gold border-b-2 border-gold" : "text-gold-light/70 hover:text-gold"
              }`}
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-maroon-dark border border-gold/30 shadow-xl z-50">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className={`block px-5 py-3 text-xs tracking-wider uppercase font-subheading border-b border-gold/10 last:border-0 transition-colors ${
                      location.pathname === s.path ? "text-gold bg-maroon/50" : "text-gold-light/70 hover:text-gold hover:bg-maroon/40"
                    }`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm tracking-wider uppercase font-subheading transition-colors ${
                location.pathname === link.path ? "text-gold border-b-2 border-gold" : "text-gold-light/70 hover:text-gold"
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
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 text-sm tracking-wider uppercase font-subheading transition-colors ${
                location.pathname === link.path ? "text-gold bg-maroon" : "text-gold-light/70 hover:text-gold hover:bg-maroon/50"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Services */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className={`w-full flex items-center justify-between px-6 py-3 text-sm tracking-wider uppercase font-subheading transition-colors ${
              isServicesActive ? "text-gold bg-maroon" : "text-gold-light/70 hover:text-gold hover:bg-maroon/50"
            }`}
          >
            Services
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileServicesOpen && (
            <div className="bg-maroon/30 border-t border-gold/10">
              {serviceLinks.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block pl-10 pr-6 py-2.5 text-xs tracking-wider uppercase font-subheading transition-colors ${
                    location.pathname === s.path ? "text-gold" : "text-gold-light/60 hover:text-gold"
                  }`}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 text-sm tracking-wider uppercase font-subheading transition-colors ${
                location.pathname === link.path ? "text-gold bg-maroon" : "text-gold-light/70 hover:text-gold hover:bg-maroon/50"
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
