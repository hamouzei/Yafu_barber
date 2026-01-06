# YafuBarber - Premium Grooming Experience

A modern, mobile-first barber shop website with AI-powered style consultation and smooth animations.

## ✨ Features

- **AI Style Consultant** - Personalized haircut recommendations via Google Gemini AI
- **Visual Testimonials** - Continuous scrolling photo carousel with client reviews
- **Responsive Design** - Mobile-first layout optimized for all devices
- **Interactive Booking** - Coming soon modal with contact options
- **Theme Toggle** - Dark/Light mode support
- **Performance Optimized** - Lazy loading images, smooth animations
- **Accessibility** - ARIA labels, keyboard navigation, focus states

## 🛠️ Tech Stack

- **React 19** + TypeScript
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Google Gemini AI** - Style recommendations
- **Lucide React** - Icon library
- **Vitest** - Unit testing
- **Lighthouse CI** - Performance monitoring

## 🚀 Quick Start

**Prerequisites:** Node.js v18+

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Get your Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey) and add it:

```env
GEMINI_API_KEY=your_api_key_here
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

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

## 🎨 Customization

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

## 🧪 Testing

```bash
npm test                # Run tests
npm run test:ui         # Test UI
npm run test:coverage   # Coverage report
```

## 📊 Performance Monitoring

```bash
npm run lighthouse      # Run Lighthouse CI
```

## 🔒 Security

⚠️ **API Key Protection**: Gemini API key is handled via server-side proxy (`/api/style-advice`). Never expose keys in client code.

## 📍 Contact

**YafuBarber**  
Near Mina Mall, on top of CBE Bank (3rd floor)  
Phone: +251931658066  
Email: yafubarber66@gmail.com  
TikTok: [@yafu390](https://www.tiktok.com/@yafu390)

## 📄 License

MIT License - Free to use for personal and commercial projects.

---

**Built with ❤️ in Addis Ababa, Ethiopia**
