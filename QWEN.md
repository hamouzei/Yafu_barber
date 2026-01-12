# YafuBarber - Premium Grooming Experience

## Project Overview

YafuBarber is a modern, mobile-first barber shop website featuring AI-powered style consultation and smooth animations. The website showcases a premium grooming experience with a focus on accessibility, performance, and user engagement. Built with React 19 and TypeScript, it leverages modern web technologies to provide an immersive experience for customers looking for professional barber services.

### Key Features
- **AI Style Consultant** - Personalized haircut recommendations via Google Gemini AI
- **Visual Testimonials** - Continuous scrolling photo carousel with client reviews
- **Responsive Design** - Mobile-first layout optimized for all devices
- **Interactive Booking** - Modal with contact options for appointments
- **Theme Toggle** - Dark/Light mode support
- **Performance Optimized** - Lazy loading images, smooth animations
- **Accessibility** - ARIA labels, keyboard navigation, focus states

### Tech Stack
- **React 19** + TypeScript
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Google Gemini AI** - Style recommendations
- **Lucide React** - Icon library
- **Vitest** - Unit testing
- **Lighthouse CI** - Performance monitoring

## Building and Running

### Prerequisites
- Node.js v18+

### Installation Steps
1. Install dependencies:
   ```bash
   npm install
   ```

2. Environment setup:
   ```bash
   cp .env.example .env.local
   ```
   
   Get your Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey) and add it:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

3. Run development server:
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000)

4. Build for production:
   ```bash
   npm run build
   npm run preview
   ```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm test` - Run unit tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Generate coverage report
- `npm run lighthouse` - Run Lighthouse CI

## Project Architecture

### Directory Structure
```
.
├── api/
│   └── style-advice.ts      # Gemini AI proxy endpoint
├── components/
│   ├── Navbar.tsx            # Responsive navigation
│   ├── StyleConsultant.tsx   # AI style consultation
│   ├── BookingModal.tsx      # Booking interface
│   ├── TestimonialMarquee.tsx # Photo carousel
│   ├── OptimizedImage.tsx    # Lazy loading images
│   ├── Animations.tsx        # Framer Motion components
│   └── ThemeToggle.tsx       # Dark/Light mode
├── contexts/
│   └── ThemeContext.tsx      # Theme provider
├── utils/
│   └── analytics.ts          # Google Analytics
├── clint_photo/              # Client testimonial photos
├── App.tsx                   # Main component
├── constants.tsx             # Services, barbers, testimonials
├── types.ts                  # TypeScript definitions
└── vite.config.ts            # Build configuration
```

### Core Components
- **App.tsx**: Main application component that orchestrates all sections
- **StyleConsultant**: AI-powered style recommendation interface
- **Navbar**: Responsive navigation with theme toggle
- **BookingModal**: Interactive appointment booking modal
- **TestimonialMarquee**: Auto-scrolling testimonial carousel
- **OptimizedImage**: Component for lazy-loading images with proper accessibility

### Data Management
- **constants.tsx**: Contains static data for services, barbers, testimonials, and blog posts
- **types.ts**: Defines TypeScript interfaces for all data structures
- **API endpoints**: Proxy for secure Gemini AI communication

## Development Conventions

### Styling
- Uses Tailwind CSS with custom brand colors defined in `index.html`
- Custom properties for brand colors:
  - `--brand-dark: #1a1a1a`
  - `--brand-accent: #ff6330`
  - `--brand-gray: #2a2a2a`
  - `--brand-lightGray: #9ca3af`

### Accessibility
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus states for interactive elements
- Skip to main content link
- Semantic HTML structure

### Performance
- Image lazy loading with OptimizedImage component
- Efficient animations with Framer Motion
- Proper loading strategies for images
- Bundle optimization through Vite

### Security
- API keys handled via server-side proxy (`/api/style-advice`)
- Never expose keys in client code
- Input validation on API endpoints

## Customization Guide

### Brand Colors
Edit in `index.html`:
```css
:root {
  --brand-dark: #1a1a1a;
  --brand-accent: #ff6330;
  --brand-gray: #2a2a2a;
  --brand-lightGray: #9ca3af;
}
```

### Services & Pricing
Update `constants.tsx`:
```typescript
export const SERVICES: Service[] = [
  {
    id: "h1",
    category: "Haircuts",
    name: "Basic Haircut",
    price: "250 ETB",
    description: "A clean, quick cut...",
  },
];
```

### Testimonials
Add client photos to `clint_photo/` and update `constants.tsx`:
```typescript
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Client Name",
    text: "Short review text",
    rating: 5,
    image: "/clint_photo/photo.jpg",
  },
];
```

## Testing Strategy

The project uses Vitest for unit testing with the following configurations:
- Standard unit tests with `@testing-library/react`
- UI testing option with `npm run test:ui`
- Coverage reports with `npm run test:coverage`
- Mocking capabilities for external dependencies

## Performance Monitoring

Lighthouse CI is integrated with the following thresholds:
- Performance: ≥ 0.9
- Accessibility: ≥ 0.9
- Best Practices: ≥ 0.9
- SEO: ≥ 0.9
- First Contentful Paint: ≤ 2000ms
- Largest Contentful Paint: ≤ 2500ms
- Cumulative Layout Shift: ≤ 0.1
- Total Blocking Time: ≤ 300ms

## Business Information

**YafuBarber**
- Location: Near Mina Mall, on top of CBE Bank (3rd floor)
- Phone: +251931658066
- Email: yafubarber66@gmail.com
- TikTok: [@yafu390](https://www.tiktok.com/@yafu390)

## License

MIT License - Free to use for personal and commercial projects.

---

**Built with ❤️ in Addis Ababa, Ethiopia**