import React, { useState } from "react";

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [errors, setErrors] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors("");
    setMessage(null);

    // Validation
    if (!email.trim()) {
      setErrors("Email address is required");
      return;
    }

    if (!validateEmail(email)) {
      setErrors("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setMessage({
        type: "success",
        text: "Thank you for subscribing! Check your email for grooming tips.",
      });
      setEmail("");
    } catch (error) {
      setMessage({
        type: "error",
        text: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address for newsletter
        </label>
        <input
          type="email"
          id="newsletter-email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className={`w-full bg-brand-gray border ${
            errors ? "border-red-500" : "border-white/10"
          } p-4 focus:ring-2 focus:ring-brand-accent focus:outline-none text-white placeholder-brand-lightGray transition-colors`}
          aria-invalid={!!errors}
          aria-describedby={errors ? "email-error" : undefined}
          disabled={isSubmitting}
        />
        {errors && (
          <p
            id="email-error"
            className="mt-2 text-sm text-red-400"
            role="alert"
          >
            {errors}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-accent hover:bg-white hover:text-brand-dark disabled:bg-brand-gray disabled:cursor-not-allowed transition-all py-4 font-bold uppercase tracking-widest focus:outline-none focus:ring-4 focus:ring-brand-accent/50"
        aria-label="Subscribe to newsletter"
      >
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </button>

      {message && (
        <div
          className={`p-3 rounded text-sm ${
            message.type === "success"
              ? "bg-green-500/10 text-green-400 border border-green-500/20"
              : "bg-red-500/10 text-red-400 border border-red-500/20"
          }`}
          role="alert"
          aria-live="polite"
        >
          {message.text}
        </div>
      )}
    </form>
  );
};

export default NewsletterForm;
