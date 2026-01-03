import React from "react";
import { X, Calendar } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-brand-dark border border-white/10 rounded-lg w-full max-w-md shadow-2xl">
        {/* Header */}
        <div className="bg-brand-dark border-b border-white/10 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-heading uppercase text-white">
            Book Appointment
          </h2>
          <button
            onClick={onClose}
            className="text-brand-lightGray hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Coming Soon Content */}
        <div className="p-10 text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-brand-accent/10 flex items-center justify-center">
              <Calendar className="text-brand-accent" size={40} />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-heading uppercase text-white mb-3">
              Coming Soon
            </h3>
            <p className="text-brand-lightGray leading-relaxed">
              Our online booking system is currently under development. We're
              working hard to bring you a seamless appointment experience.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10">
            <p className="text-sm font-medium text-white mb-3 uppercase tracking-wider">
              Book Your Appointment Now:
            </p>
            <div className="space-y-2 text-brand-lightGray">
              <p className="flex items-center justify-center gap-2">
                <span className="text-brand-accent">📞</span>
                <a
                  href="tel:+251931658066"
                  className="hover:text-brand-accent transition-colors"
                >
                  +251931658066
                </a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-brand-accent">✉️</span>
                <a
                  href="mailto:yafubarber66@gmail.com"
                  className="hover:text-brand-accent transition-colors"
                >
                  yafubarber66@gmail.com
                </a>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-brand-accent hover:bg-white hover:text-brand-dark text-white font-bold py-3 uppercase tracking-widest transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
