import React from "react";
import { TESTIMONIALS } from "../constants";
import OptimizedImage from "./OptimizedImage";

const TestimonialMarquee = () => {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex gap-6 animate-marquee">
        {/* First set */}
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative flex-shrink-0 w-80 h-96 overflow-hidden group cursor-pointer"
          >
            {/* Background Image */}
            <OptimizedImage
              src={testimonial.image}
              alt={`${testimonial.name} - satisfied customer`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              {/* Testimonial Text */}
              <blockquote className="text-white text-lg font-medium mb-3 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Name */}
              <cite className="font-heading uppercase text-sm text-brand-accent not-italic tracking-wider">
                — {testimonial.name}
              </cite>
            </div>
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={`${testimonial.id}-duplicate`}
            className="relative flex-shrink-0 w-80 h-96 overflow-hidden group cursor-pointer"
          >
            {/* Background Image */}
            <OptimizedImage
              src={testimonial.image}
              alt={`${testimonial.name} - satisfied customer`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              {/* Testimonial Text */}
              <blockquote className="text-white text-lg font-medium mb-3 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Name */}
              <cite className="font-heading uppercase text-sm text-brand-accent not-italic tracking-wider">
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
