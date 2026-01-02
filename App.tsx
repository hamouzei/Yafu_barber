import React, { useState } from "react";
import Navbar from "./components/Navbar";
import StyleConsultant from "./components/StyleConsultant";
import BookingModal from "./components/BookingModal";
import { SERVICES, BARBERS, TESTIMONIALS, BLOG_POSTS } from "./constants";
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
      <Navbar onBookingClick={() => setIsBookingModalOpen(true)} />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Barber background"
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
          <p className="text-lg md:text-xl text-brand-lightGray mb-10 max-w-2xl mx-auto">
            Experience the difference of a professional touch. Our master
            barbers combine classic grooming traditions with contemporary style.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-brand-accent hover:bg-white hover:text-brand-dark text-white px-10 py-4 font-bold uppercase transition-all duration-300 w-full sm:w-auto tracking-widest"
            >
              Book Appointment
            </button>
            <button className="flex items-center gap-4 group">
              <span className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:border-brand-accent transition-all">
                <Play className="fill-white group-hover:fill-brand-accent w-4 h-4" />
              </span>
              <span className="text-sm font-bold uppercase tracking-widest">
                Watch Story
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Brands Showcase */}
      <section className="py-12 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs uppercase tracking-[0.4em] text-brand-lightGray mb-8">
            Collaborating with Premium Brands
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all">
            {["Bullseye", "Browth", "Brant", "Bright", "Bavin", "Balatto"].map(
              (brand) => (
                <span
                  key={brand}
                  className="text-2xl font-heading font-bold text-white tracking-widest"
                >
                  {brand}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="relative group">
          <div className="absolute -inset-4 border-2 border-brand-accent/20 rounded-lg group-hover:border-brand-accent/50 transition-all"></div>
          <img
            src="https://images.unsplash.com/photo-1593702295094-ada74ca4a49a?q=80&w=1200&auto=format&fit=crop"
            className="relative rounded-lg w-full h-[600px] object-cover"
            alt="Master Barber"
          />
          <div className="absolute bottom-10 left-10 bg-brand-accent p-8 rounded-sm shadow-2xl">
            <h3 className="text-4xl font-heading uppercase text-white">
              15+ Years
            </h3>
            <p className="text-xs uppercase tracking-widest text-white/80">
              Experience in Craft
            </p>
          </div>
        </div>
        <div>
          <span className="text-brand-accent font-heading uppercase tracking-widest mb-4 block">
            About BuzzCut
          </span>
          <h2 className="text-4xl md:text-5xl font-heading uppercase mb-8 leading-tight">
            Crafting Timeless Styles <br /> With a Modern Touch
          </h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-gray border border-white/10 flex items-center justify-center text-brand-accent">
                <Scissors size={20} />
              </div>
              <div>
                <h4 className="font-heading uppercase text-xl mb-2">
                  Expert Craftsmanship
                </h4>
                <p className="text-brand-lightGray">
                  Our barbers are seasoned masters of the trade. We combine
                  decades of training with the latest techniques.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-gray border border-white/10 flex items-center justify-center text-brand-accent">
                <User size={20} />
              </div>
              <div>
                <h4 className="font-heading uppercase text-xl mb-2">
                  Personalized Service
                </h4>
                <p className="text-brand-lightGray">
                  We treat every appointment as a one-on-one consultation. Your
                  barber takes time to listen to your needs.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-gray border border-white/10 flex items-center justify-center text-brand-accent">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="font-heading uppercase text-xl mb-2">
                  Exceptional Ambiance
                </h4>
                <p className="text-brand-lightGray">
                  Step into a space designed for relaxation and refinement.
                  Enjoy a comfortable, stylish environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter (Simple) */}
      <section className="py-20 bg-brand-gray/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <div className="text-5xl font-heading text-brand-accent mb-2">
              25+
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
              76+
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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512690196236-7afd8b50e687?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-20"
            alt="Call to action"
          />
          <div className="absolute inset-0 bg-brand-dark/80"></div>
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
            className="bg-brand-accent hover:bg-white hover:text-brand-dark text-white px-12 py-5 font-bold uppercase transition-all duration-300 tracking-widest text-lg"
          >
            Schedule Your Session
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-gray/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-brand-accent font-heading uppercase tracking-widest mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-heading uppercase mb-16">
            Customer Satisfaction
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-brand-dark/50 p-10 border border-white/5 relative"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <img
                    src={t.image}
                    className="w-16 h-16 rounded-full border-4 border-brand-dark object-cover"
                    alt={t.name}
                  />
                </div>
                <div className="flex justify-center mb-6 pt-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-brand-accent fill-brand-accent"
                    />
                  ))}
                </div>
                <p className="text-brand-lightGray italic mb-8">"{t.text}"</p>
                <h4 className="font-heading uppercase text-xl text-white">
                  {t.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Barbers Section */}
      <section id="barbers" className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-brand-accent font-heading uppercase tracking-widest mb-4 block">
            The Team
          </span>
          <h2 className="text-4xl md:text-5xl font-heading uppercase mb-16">
            Our Amazing Barbers
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {BARBERS.map((barber) => (
              <div
                key={barber.id}
                className="group relative overflow-hidden aspect-[3/4]"
              >
                <img
                  src={barber.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={barber.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 text-left translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h4 className="text-2xl font-heading uppercase mb-1">
                    {barber.name}
                  </h4>
                  <p className="text-brand-accent font-heading uppercase text-xs tracking-widest mb-4">
                    {barber.role}
                  </p>
                  <p className="text-brand-lightGray text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {barber.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 bg-brand-gray/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-accent font-heading uppercase tracking-widest mb-4 block">
              Blog
            </span>
            <h2 className="text-4xl md:text-5xl font-heading uppercase">
              Our Latest News
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="group">
                <div className="overflow-hidden mb-6 aspect-video">
                  <img
                    src={post.image}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={post.title}
                  />
                </div>
                <div className="flex gap-4 text-xs uppercase tracking-widest text-brand-lightGray mb-4">
                  <span>{post.date}</span>
                  <span className="text-brand-accent">/</span>
                  <span>{post.comments} Comments</span>
                </div>
                <h3 className="text-xl font-heading uppercase leading-tight mb-4 group-hover:text-brand-accent transition-colors">
                  {post.title}
                </h3>
                <a
                  href="#"
                  className="text-xs uppercase font-bold tracking-[0.2em] border-b border-brand-accent pb-1"
                >
                  Read More
                </a>
              </div>
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
                Buzz<span className="text-brand-accent">Cut</span>
              </span>
              <p className="text-brand-lightGray mb-8 leading-relaxed">
                Dedicated to the art of classic grooming and modern style. We
                are committed to providing every client with impeccable
                precision, superior service, and an atmosphere designed for
                relaxation and refinement.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent transition-all"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent transition-all"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent transition-all"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent transition-all"
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
                    123 Grooming Lane, <br /> Style District, NY 10001
                  </span>
                </li>
                <li className="flex gap-4">
                  <Phone
                    className="text-brand-accent flex-shrink-0"
                    size={20}
                  />
                  <span className="text-brand-lightGray">+1 (234) 567-890</span>
                </li>
                <li className="flex gap-4">
                  <Mail className="text-brand-accent flex-shrink-0" size={20} />
                  <span className="text-brand-lightGray">
                    hello@buzzcut.com
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
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-brand-gray border border-white/10 p-4 focus:ring-1 focus:ring-brand-accent outline-none text-white"
                />
                <button className="w-full bg-brand-accent hover:bg-white hover:text-brand-dark transition-all py-4 font-bold uppercase tracking-widest">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/5 pt-12 text-center text-brand-lightGray text-sm tracking-widest uppercase">
            &copy; 2025 BuzzCut Premium Grooming. All rights reserved. |{" "}
            <a href="#" className="hover:text-brand-accent transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
