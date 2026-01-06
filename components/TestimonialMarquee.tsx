import React from "react";
import { TESTIMONIALS } from "../constants";
import OptimizedImage from "./OptimizedImage";

const TestimonialMarquee = () => {
  return (
    <div className="relative overflow-hidden py-4 md:py-8">
      <div
        className="flex gap-3 md:gap-6 animate-marquee"
        style={{ width: "max-content" }}
      >
        {/* First set */}
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative flex-shrink-0 w-64 h-80 md:w-80 md:h-96 overflow-hidden group cursor-pointer"
          >
            <OptimizedImage
              src={testimonial.image}
              alt={`${testimonial.name} - satisfied customer`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
              <blockquote className="text-white text-base md:text-lg font-medium mb-2 md:mb-3 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              <cite className="font-heading uppercase text-xs md:text-sm text-brand-accent not-italic tracking-wider">
                — {testimonial.name}
              </cite>
            </div>
          </div>
        ))}

        {/* Second set - exact duplicate for seamless circular loop */}
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={`${testimonial.id}-dup`}
            className="relative flex-shrink-0 w-64 h-80 md:w-80 md:h-96 overflow-hidden group cursor-pointer"
          >
            <OptimizedImage
              src={testimonial.image}
              alt={`${testimonial.name} - satisfied customer`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
              <blockquote className="text-white text-base md:text-lg font-medium mb-2 md:mb-3 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              <cite className="font-heading uppercase text-xs md:text-sm text-brand-accent not-italic tracking-wider">
                — {testimonial.name}
              </cite>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialMarquee;
