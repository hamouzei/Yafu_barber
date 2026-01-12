import ReactGA from 'react-ga4';

const MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID || '';

export const initGA = (): void => {
  if (!MEASUREMENT_ID) {
    console.warn('Google Analytics Measurement ID not found');
    return;
  }

  ReactGA.initialize(MEASUREMENT_ID, {
    gaOptions: {
      anonymizeIp: true, // Privacy: anonymize IP addresses
      cookieFlags: 'SameSite=None;Secure', // GDPR compliance
    },
  });
};

export const logPageView = (path: string): void => {
  if (!MEASUREMENT_ID) return;
  
  ReactGA.send({ hitType: 'pageview', page: path });
};

export const logEvent = (category: string, action: string, label?: string, value?: number): void => {
  if (!MEASUREMENT_ID) return;

  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

// Custom events for the barbershop
export const trackBookingAttempt = (source: string): void => {
  logEvent('Booking', 'Attempt', source);
};

export const trackNewsletterSignup = (email: string): void => {
  logEvent('Newsletter', 'Signup', 'Email Submitted');
};

export const trackStyleConsultation = (query: string): void => {
  logEvent('AI Consultant', 'Query Submitted', 'Style Advice');
};

export const trackServiceView = (serviceName: string): void => {
  logEvent('Services', 'View', serviceName);
};

export const trackSocialClick = (platform: string): void => {
  logEvent('Social Media', 'Click', platform);
};
