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
          <h2 className="text-2xl font-heading uppercase text-lightgray">
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

        {/* Main Content */}
        <div className="p-6 text-center space-y-4">
          {/* Coming Soon Content - smaller */}
          <div className="mb-6">
            <h3 className="text-xl font-heading uppercase text-gray mb-2">
              Coming Soon
            </h3>
            <p className="text-brand-lightGray text-sm">
              Online booking system under development
            </p>
          </div>

          {/* Contact Information */}
          <div className="pt-4 border-t border-white/10">
            <p className="text-xs font-medium text-lightgray mb-3 uppercase tracking-wider">
              Book Your Appointment Now:
            </p>
            <div className="text-brand-lightGray">
              <p className="flex items-center justify-center gap-2 mb-3">
                <span className="text-brand-accent">📞</span>
                <a
                  href="tel:+251931658066"
                  className="hover:text-brand-accent transition-colors"
                >
                  +251931658066
                </a>
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/v2cvj9GccopspRSc7",
                    "_blank"
                  )
                }
                className="w-full bg-brand-accent hover:bg-white hover:text-brand-dark text-white font-bold py-3 uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 mb-3"
                aria-label="Get directions to YafuBarber"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Get Directions
              </button>
            </div>
          </div>

          {/* Two buttons side by side */}
          <div className="grid grid-cols-2 gap-3 pt-4">
            <a
              href="tel:+251931658066"
              className="bg-brand-accent hover:bg-white hover:text-brand-dark text-white font-bold py-2.5 uppercase tracking-widest transition-all duration-300 text-sm"
            >
              Call Now
            </a>
            <button
              onClick={onClose}
              className="bg-brand-gray hover:bg-brand-accent text-white font-bold py-2.5 uppercase tracking-widest transition-all duration-300 text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
