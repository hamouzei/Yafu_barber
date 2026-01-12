import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../providers/ThemeToggle";

interface NavbarProps {
  onBookingClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookingClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Service", href: "#services" },
    { name: "Barbers", href: "#barbers" },
    { name: "Contact Us", href: "#footer" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-dark/95 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold font-heading italic tracking-tighter text-white">
            Yafu<span className="text-brand-accent">Barber</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-brand-accent transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-brand-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <button
          onClick={onBookingClick}
          className="bg-brand-accent hover:bg-white hover:text-brand-dark text-white px-6 py-2.5 text-xs font-bold uppercase transition-all duration-300 hidden md:block"
        >
          Make Appointment
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark/98 backdrop-blur-md border-t border-white/10 shadow-2xl">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-sm font-medium hover:text-brand-accent transition-colors uppercase tracking-wider py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
            <button
              onClick={onBookingClick}
              className="bg-brand-accent hover:bg-white hover:text-brand-dark text-white px-6 py-3 text-xs font-bold uppercase transition-all duration-300 w-full mt-4"
            >
              Make Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
