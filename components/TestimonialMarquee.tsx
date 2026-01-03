import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const TestimonialMarquee = () => {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="animate-marquee flex">
        <div className="flex">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="mx-4 bg-brand-dark/50 p-10 border border-white/5 relative flex-shrink-0 w-96 h-80 flex flex-col"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <img
                  src={testimonial.image}
                  className="w-16 h-16 rounded-full border-4 border-brand-dark object-cover"
                  alt={`${testimonial.name}, satisfied customer`}
                  loading="lazy"
                />
              </div>
              <div
                className="flex justify-center mb-6 pt-6"
                role="img"
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-brand-accent fill-brand-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="text-brand-lightGray italic mb-4 flex-grow">
                "{testimonial.text}"
              </blockquote>
              <cite className="font-heading uppercase text-xl text-white not-italic self-center mt-auto">
                {testimonial.name}
              </cite>
            </div>
          ))}
        </div>
        <div className="flex">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={`${testimonial.id}-duplicate`}
              className="mx-4 bg-brand-dark/50 p-10 border border-white/5 relative flex-shrink-0 w-96 h-80 flex flex-col"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <img
                  src={testimonial.image}
                  className="w-16 h-16 rounded-full border-4 border-brand-dark object-cover"
                  alt={`${testimonial.name}, satisfied customer`}
                  loading="lazy"
                />
              </div>
              <div
                className="flex justify-center mb-6 pt-6"
                role="img"
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-brand-accent fill-brand-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="text-brand-lightGray italic mb-4 flex-grow">
                "{testimonial.text}"
              </blockquote>
              <cite className="font-heading uppercase text-xl text-white not-italic self-center mt-auto">
                {testimonial.name}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialMarquee;