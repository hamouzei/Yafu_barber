import React, { useState } from "react";
import Navbar from "./components/Navbar";
import StyleConsultant from "./components/StyleConsultant";
import BookingModal from "./components/BookingModal";
import OptimizedImage from "./components/OptimizedImage";
import NewsletterForm from "./components/NewsletterForm";
import TestimonialMarquee from "./components/TestimonialMarquee";
import { SERVICES, BARBERS, TESTIMONIALS } from "./constants";
import {
  Scissors,
  Calendar,
  User,
  Star,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Play,
  CheckCircle2,
} from "lucide-react";

const App: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-brand-accent text-white px-6 py-3 rounded font-bold uppercase focus:outline-none focus:ring-4 focus:ring-brand-accent/50"
      >
        Skip to main content
      </a>

      <Navbar onBookingClick={() => setIsBookingModalOpen(true)} />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2000&auto=format&fit=crop"
              className="w-full h-full object-cover opacity-30 grayscale"
              alt="Professional barber shop interior with vintage styling"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent"></div>
          </div>

          <div className="relative z-10 text-center max-w-4xl px-4 mt-20">
            <span className="text-brand-accent font-heading text-lg tracking-widest uppercase mb-4 block">
              Crafting Timeless Styles
            </span>
            <h1 className="text-6xl md:text-8xl font-heading uppercase leading-none mb-8">
              Where Style <br />
              <span className="text-brand-accent">Meets Mastery</span>
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-brand-accent hover:bg-white hover:text-brand-dark text-white px-10 py-4 font-bold uppercase transition-all duration-300 w-full sm:w-auto tracking-widest focus:outline-none focus:ring-4 focus:ring-brand-accent/50"
                aria-label="Book an appointment"
              >
                Book Appointment
              </button>
              <a
                href="https://www.tiktok.com/@yafu390?_r=1&_t=ZM-92lsBvpDvBL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group focus:outline-none focus:ring-4 focus:ring-white/50 rounded-full"
                aria-label="Watch our story on TikTok"
              >
                <span className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:border-brand-accent group-focus:border-brand-accent transition-all">
                  <Play className="fill-white group-hover:fill-brand-accent w-4 h-4" />
                </span>
                <span className="text-sm font-bold uppercase tracking-widest">
                  Watch Story
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Brands Showcase */}
        <section className="py-12 bg-white/5 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-xs uppercase tracking-[0.4em] text-brand-lightGray mb-8">
              Collaborating with Premium Brands
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-100">
              {[
                "Local coffee culture",
                "Street fashion",
                "Custom tailoring",
                "Grooming suppliers",
                "Natural oils",
              ].map((brand, index) => (
                <span
                  key={index}
                  className="text-base md:text-lg font-heading font-bold text-gray tracking-widest text-center"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-12 md:py-24 max-w-7xl mx-auto px-4 md:px-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Image - Order 2 on mobile, Order 1 on desktop */}
            <div className="relative group order-2 md:order-1">
              <div
                className="absolute -inset-2 md:-inset-4 border-2 border-brand-accent/20 rounded-lg group-hover:border-brand-accent/50 transition-all"
                aria-hidden="true"
              ></div>
              <OptimizedImage
                src="https://images.unsplash.com/photo-1593702295094-ada74ca4a49a?q=80&w=1200&auto=format&fit=crop"
                alt="Master barber performing precision haircut"
                className="relative rounded-lg w-full h-[300px] md:h-[600px] object-cover"
                width={1200}
                height={600}
              />
              <div className="absolute bottom-4 left-4 md:bottom-10 md:left-10 bg-brand-accent p-4 md:p-8 rounded-sm shadow-2xl">
                <h3 className="text-2xl md:text-4xl font-heading uppercase text-white">
                  15+ Years
                </h3>
                <p className="text-xs uppercase tracking-widest text-white/80">
                  Experience in Craft
                </p>
              </div>
            </div>

            {/* Text Content - Order 1 on mobile, Order 2 on desktop */}
            <div className="order-1 md:order-2">
              <span className="text-brand-accent font-heading uppercase tracking-widest mb-3 md:mb-4 block text-sm">
                About YafuBarber
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading uppercase mb-6 md:mb-8 leading-tight">
                Where Fresh Cuts Meet Confidence
              </h2>
              <div className="space-y-5 md:space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-gray border border-white/10 flex items-center justify-center text-brand-accent">
                    <Scissors className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading uppercase text-base md:text-xl mb-1 md:mb-2">
                      Skill You Can See
                    </h4>
                    <p className="text-brand-lightGray text-sm md:text-base">
                      Our barbers don't rush styles, they perfect them. From
                      clean fades to classic looks, we blend experience with
                      today's trends to get it right every time.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-gray border border-white/10 flex items-center justify-center text-brand-accent">
                    <User className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading uppercase text-base md:text-xl mb-1 md:mb-2">
                      Cuts That Fit You
                    </h4>
                    <p className="text-brand-lightGray text-sm md:text-base">
                      No copy-paste haircuts here. We listen, suggest, and
                      tailor each cut to your face, your vibe, and your
                      lifestyle.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-gray border border-white/10 flex items-center justify-center text-brand-accent">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading uppercase text-base md:text-xl mb-1 md:mb-2">
                      A Place You Want to Stay
                    </h4>
                    <p className="text-brand-lightGray text-sm md:text-base">
                      Relaxed. Clean. Good energy. Step in, sit back, and enjoy
                      a space built for comfort — where looking fresh feels
                      easy.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-brand-lightGray mt-6 md:mt-8 leading-relaxed text-sm md:text-base">
                At YafuBarber, it's more than a haircut — it's how you show up
                to the world. Every cut is sharp, every detail intentional, and
                every client treated like a regular from day one.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Counter (Simple) */}
        <section className="py-20 bg-brand-gray/30">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-heading text-brand-accent mb-2">
                5+
              </div>
              <div className="text-xs uppercase tracking-widest text-brand-lightGray">
                Professional Barbers
              </div>
            </div>
            <div>
              <div className="text-5xl font-heading text-brand-accent mb-2">
                500+
              </div>
              <div className="text-xs uppercase tracking-widest text-brand-lightGray">
                Success Stories
              </div>
            </div>
            <div>
              <div className="text-5xl font-heading text-brand-accent mb-2">
                15
              </div>
              <div className="text-xs uppercase tracking-widest text-brand-lightGray">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-5xl font-heading text-brand-accent mb-2">
                476+
              </div>
              <div className="text-xs uppercase tracking-widest text-brand-lightGray">
                Happy Customers
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-brand-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <span className="text-brand-accent font-heading uppercase tracking-widest mb-4 block">
                  What We Offer
                </span>
                <h2 className="text-4xl md:text-5xl font-heading uppercase leading-tight">
                  Tailored Excellence For <br /> Every Style
                </h2>
              </div>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-brand-accent hover:bg-white hover:text-brand-dark text-white px-8 py-3 font-bold uppercase text-xs tracking-widest transition-all"
              >
                Request Quote
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-heading text-brand-accent uppercase mb-8 border-b border-white/10 pb-4">
                  Haircuts
                </h3>
                <div className="space-y-8">
                  {SERVICES.filter((s) => s.category === "Haircuts").map(
                    (service) => (
                      <div key={service.id} className="group cursor-default">
                        <div className="flex justify-between items-end mb-2">
                          <h4 className="text-xl font-heading group-hover:text-brand-accent transition-colors uppercase">
                            {service.name}
                          </h4>
                          <div className="flex-grow border-b border-dotted border-white/20 mx-4 mb-1"></div>
                          <span className="text-brand-accent font-heading text-xl">
                            {service.price}
                          </span>
                        </div>
                        <p className="text-brand-lightGray text-sm">
                          {service.description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-heading text-brand-accent uppercase mb-8 border-b border-white/10 pb-4">
                  Beard Grooming
                </h3>
                <div className="space-y-8">
                  {SERVICES.filter((s) => s.category === "Beard Grooming").map(
                    (service) => (
                      <div key={service.id} className="group cursor-default">
                        <div className="flex justify-between items-end mb-2">
                          <h4 className="text-xl font-heading group-hover:text-brand-accent transition-colors uppercase">
                            {service.name}
                          </h4>
                          <div className="flex-grow border-b border-dotted border-white/20 mx-4 mb-1"></div>
                          <span className="text-brand-accent font-heading text-xl">
                            {service.price}
                          </span>
                        </div>
                        <p className="text-brand-lightGray text-sm">
                          {service.description}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Style Consultant Integration */}
        <StyleConsultant />

        {/* CTA Banner */}
        <section
          className="py-24 relative overflow-hidden"
          aria-label="Call to action"
        >
          <div className="absolute inset-0">
            <img
              src="https://unsplash.com/photos/red-and-black-leather-office-rolling-chair-XTAtx9UhNBo"
              className="w-full h-full object-cover opacity-20"
              alt="Luxury barbershop appointment booking"
              loading="lazy"
            />
            <div
              className="absolute inset-0 bg-brand-dark/80"
              aria-hidden="true"
            ></div>
          </div>
          <div className="relative z-10 text-center px-6">
            <span className="text-brand-accent font-heading uppercase tracking-widest mb-6 block">
              Relax, Refresh, Rejuvenate
            </span>
            <h2 className="text-4xl md:text-6xl font-heading uppercase mb-10">
              Ready For a Fresh Look? Book Your <br /> Appointment Now!
            </h2>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-brand-accent hover:bg-white hover:text-brand-dark text-white px-12 py-5 font-bold uppercase transition-all duration-300 tracking-widest text-lg focus:outline-none focus:ring-4 focus:ring-brand-accent/50"
              aria-label="Schedule your grooming session"
            >
              Schedule Your Session
            </button>
          </div>
        </section>

        {/* Testimonials */}
        <section
          className="py-24 bg-brand-gray/10"
          aria-labelledby="testimonials-heading"
        >
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-brand-accent font-heading uppercase tracking-widest mb-4 block">
              Testimonials
            </span>
            <h2
              id="testimonials-heading"
              className="text-4xl md:text-5xl font-heading uppercase mb-16"
            >
              Customer Satisfaction
            </h2>

            <div className="overflow-hidden">
              <TestimonialMarquee />
            </div>
          </div>
        </section>

        {/* Barbers Section */}
        <section id="barbers" className="py-24" aria-labelledby="team-heading">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="text-brand-accent font-heading uppercase tracking-widest mb-4 block">
              The Team
            </span>
            <h2
              id="team-heading"
              className="text-4xl md:text-5xl font-heading uppercase mb-16"
            >
              Our Amazing Barbers
            </h2>

            <div className="grid md:grid-cols-3 gap-8" role="list">
              {BARBERS.map((barber) => (
                <article
                  key={barber.id}
                  className="group relative overflow-hidden aspect-[3/4]"
                  role="listitem"
                >
                  <OptimizedImage
                    src={barber.image}
                    alt={`${barber.name} - ${barber.role}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    width={600}
                    height={800}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80"
                    aria-hidden="true"
                  ></div>
                  <div className="absolute bottom-0 left-0 w-full p-8 text-left translate-y-4 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-2xl font-heading uppercase mb-1">
                      {barber.name}
                    </h3>
                    <p className="text-brand-accent font-heading uppercase text-xs tracking-widest mb-4">
                      {barber.role}
                    </p>
                    <p className="text-brand-lightGray text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {barber.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          id="footer"
          className="bg-brand-dark pt-24 pb-12 border-t border-white/5"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 mb-20">
              <div className="col-span-1 md:col-span-1">
                <span className="text-4xl font-bold font-heading italic tracking-tighter text-white block mb-8">
                  Yafu<span className="text-brand-accent">Barber</span>
                </span>
                <p className="text-brand-lightGray mb-8 leading-relaxed">
                  Dedicated to the art of classic grooming and modern style. We
                  are committed to providing every client with impeccable
                  precision, superior service, and an atmosphere designed for
                  relaxation and refinement.
                </p>
                <div
                  className="flex gap-4"
                  role="list"
                  aria-label="Social media links"
                >
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent focus:bg-brand-accent transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent"
                    aria-label="Visit our Facebook page"
                    role="listitem"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent focus:bg-brand-accent transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent"
                    aria-label="Visit our Instagram profile"
                    role="listitem"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent focus:bg-brand-accent transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent"
                    aria-label="Follow us on Twitter"
                    role="listitem"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent focus:bg-brand-accent transition-all focus:outline-none focus:ring-2 focus:ring-brand-accent"
                    aria-label="Subscribe to our YouTube channel"
                    role="listitem"
                  >
                    <Youtube size={16} />
                  </a>
                </div>
              </div>

              <div className="md:pl-12">
                <h4 className="font-heading uppercase text-xl mb-8 tracking-widest">
                  Quick Links
                </h4>
                <ul className="space-y-4 text-brand-lightGray uppercase text-sm font-medium tracking-widest">
                  <li>
                    <a
                      href="#"
                      className="hover:text-brand-accent transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="hover:text-brand-accent transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="hover:text-brand-accent transition-colors"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#barbers"
                      className="hover:text-brand-accent transition-colors"
                    >
                      Barbers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-brand-accent transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-heading uppercase text-xl mb-8 tracking-widest">
                  Contact Info
                </h4>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <MapPin
                      className="text-brand-accent flex-shrink-0"
                      size={20}
                    />
                    <span className="text-brand-lightGray">
                      Near Mina Mall, <br /> on top of CBE Bank (3rd floor)
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <Phone
                      className="text-brand-accent flex-shrink-0"
                      size={20}
                    />
                    <span className="text-brand-lightGray">+251931658066</span>
                  </li>
                  <li className="flex gap-4">
                    <Mail
                      className="text-brand-accent flex-shrink-0"
                      size={20}
                    />
                    <span className="text-brand-lightGray">
                      yafubarber66@gmail.com
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-heading uppercase text-xl mb-8 tracking-widest">
                  Newsletter
                </h4>
                <p className="text-brand-lightGray mb-6">
                  Subscribe to get the latest grooming tips and special offers.
                </p>
                <NewsletterForm />
              </div>
            </div>

            <div className="border-t border-white/5 pt-12 text-center text-brand-lightGray text-sm tracking-widest uppercase">
              &copy; 2025 YafuBarber Premium Grooming. All rights reserved. |{" "}
              <a href="#" className="hover:text-brand-accent transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
