# Advanced Features Implementation Guide

This guide covers the setup and usage of all advanced features added to the YafuBarber barbershop website.

---

## 📦 Installation

First, install all new dependencies:

```bash
npm install
```

This will install:

- **framer-motion** - Smooth animations
- **react-ga4** - Google Analytics tracking
- **vitest** - Testing framework
- **@testing-library/react** - Component testing utilities
- **@lhci/cli** - Lighthouse CI for performance monitoring

---

## 🎬 Framer Motion Animations

### Usage

Import animation components in your code:

```typescript
import { FadeIn, SlideIn, ScaleIn, StaggerContainer, StaggerItem } from './components/Animations';

// Fade in on scroll
<FadeIn delay={0.2}>
  <YourComponent />
</FadeIn>

// Slide in from left or right
<SlideIn direction="left">
  <YourComponent />
</SlideIn>

// Scale animation
<ScaleIn>
  <YourComponent />
</ScaleIn>

// Stagger children animations
<StaggerContainer>
  <StaggerItem>Item 1</StaggerItem>
  <StaggerItem>Item 2</StaggerItem>
  <StaggerItem>Item 3</StaggerItem>
</StaggerContainer>
```

### Animation Props

- `delay` - Delay before animation starts (seconds)
- `className` - Additional CSS classes
- `direction` - For SlideIn: 'left' or 'right'

### Performance Considerations

- Animations trigger once on scroll (not on every scroll)
- Uses IntersectionObserver for optimal performance
- Respects `prefers-reduced-motion` CSS media query

---

## 📊 Google Analytics

### Setup

1. **Create GA4 Property:**

   - Go to https://analytics.google.com
   - Create new property
   - Copy your Measurement ID (format: G-XXXXXXXXXX)

2. **Add to Environment:**

   ```bash
   # .env.local
   GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. **Initialize in App:**
   Wrap your app with `AnalyticsProvider`:

   ```typescript
   import AnalyticsProvider from "./components/AnalyticsProvider";

   <AnalyticsProvider>
     <App />
   </AnalyticsProvider>;
   ```

### Tracking Events

```typescript
import {
  trackBookingAttempt,
  trackNewsletterSignup,
  trackStyleConsultation,
  trackServiceView,
  trackSocialClick,
} from "./utils/analytics";

// Track booking button click
trackBookingAttempt("hero-section");

// Track newsletter signup
trackNewsletterSignup("user@example.com");

// Track AI consultation
trackStyleConsultation("wavy hair professional cut");

// Track service view
trackServiceView("Executive Cut");

// Track social media click
trackSocialClick("Instagram");
```

### Privacy Considerations

- IP anonymization enabled by default
- Cookie flags set for GDPR compliance
- No tracking if `GA_MEASUREMENT_ID` is not set
- Consider adding cookie consent banner for EU users

---

## 🧪 Unit Testing

### Running Tests

```bash
# Run tests
npm test

# Run tests in UI mode
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

Create test files in `components/__tests__/`:

```typescript
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import YourComponent from "../YourComponent";

describe("YourComponent", () => {
  it("should render correctly", () => {
    render(<YourComponent />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("should handle user interaction", async () => {
    const user = userEvent.setup();
    render(<YourComponent />);

    const button = screen.getByRole("button");
    await user.click(button);

    expect(screen.getByText("Clicked")).toBeInTheDocument();
  });
});
```

### Test Coverage

Current test files:

- ✅ `BookingModal.test.tsx`
- ✅ `NewsletterForm.test.tsx`
- ✅ `ErrorBoundary.test.tsx`
- ✅ `OptimizedImage.test.tsx`

Target coverage: 80%+

---

## 🔍 Lighthouse CI

### Local Testing

```bash
# Build the project
npm run build

# Run Lighthouse CI
npm run lighthouse
```

### CI/CD Integration

Lighthouse CI runs automatically on:

- Every push to main branch
- Every pull request

### Performance Targets

- **Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 90+

### Core Web Vitals Targets

- **FCP** (First Contentful Paint): < 2s
- **LCP** (Largest Contentful Paint): < 2.5s
- **CLS** (Cumulative Layout Shift): < 0.1
- **TBT** (Total Blocking Time): < 300ms

### Viewing Reports

Reports are uploaded to temporary public storage. Check GitHub Actions for links.

---

## 📝 Blog CMS Integration

See [BLOG_CMS_INTEGRATION.md](./docs/BLOG_CMS_INTEGRATION.md) for detailed guide.

### Quick Start (Contentful)

1. **Install SDK:**

   ```bash
   npm install contentful
   ```

2. **Add Credentials:**

   ```bash
   # .env.local
   CONTENTFUL_SPACE_ID=your_space_id
   CONTENTFUL_ACCESS_TOKEN=your_token
   ```

3. **Fetch Posts:**

   ```typescript
   import { getBlogPosts } from "./services/contentful";

   const posts = await getBlogPosts(10);
   ```

---

## 🚀 Deployment Checklist

### Before Deploying

- [ ] Run tests: `npm test`
- [ ] Build successfully: `npm run build`
- [ ] Run Lighthouse: `npm run lighthouse`
- [ ] Check all environment variables are set
- [ ] Review bundle size
- [ ] Test on multiple devices/browsers

### Environment Variables

Ensure these are set in your deployment platform:

**Required:**

- `GEMINI_API_KEY`

**Optional:**

- `GA_MEASUREMENT_ID`
- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ACCESS_TOKEN`

### Deployment Platforms

#### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in dashboard
```

#### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
netlify deploy --prod
```

---

## 📈 Performance Optimization Tips

### Images

- Use `OptimizedImage` component for all images
- Set `priority={true}` for above-the-fold images
- Compress images before uploading (<100KB recommended)

### Code Splitting

- Use dynamic imports for heavy components
- Lazy load sections below the fold

### Caching

- Set proper cache headers
- Use CDN for static assets
- Enable compression (gzip/brotli)

### Bundle Size

- Monitor with `npm run build`
- Keep main bundle < 200KB
- Use tree-shaking

---

## 🐛 Troubleshooting

### Tests Failing

```bash
# Clear cache
rm -rf node_modules
npm install

# Update snapshots
npm test -- -u
```

### Lighthouse Scores Low

- Check bundle size
- Verify image optimization
- Test on real mobile devices
- Review Network tab in DevTools

### Animations Janky

- Reduce animation complexity
- Use `will-change` CSS property sparingly
- Test on low-end devices

### Analytics Not Tracking

- Verify `GA_MEASUREMENT_ID` is set
- Check browser console for errors
- Ensure ad blockers are disabled for testing
- Wait 24-48 hours for data to appear in GA

---

## 📚 Additional Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vitest Docs](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [GA4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)

---

## 🤝 Contributing

When adding new features:

1. Write unit tests
2. Add to this guide
3. Update README if needed
4. Run Lighthouse CI locally
5. Ensure all tests pass

---

## 📞 Support

For questions or issues:

- Check existing documentation
- Review component tests for usage examples
- Contact development team

---

**Last Updated:** January 2026  
**Version:** 2.0.0
