# YafuBarber - Premium Grooming Experience

A modern, luxurious barber shop website featuring:

- 🎨 AI-powered style consultant using Google Gemini
- 📱 Fully responsive mobile-first design
- 💼 Interactive booking system
- ✨ Premium dark theme with smooth animations

## Features

- **AI Style Consultant**: Get personalized haircut recommendations
- **Online Booking**: Schedule appointments through an intuitive modal
- **Mobile Navigation**: Responsive hamburger menu for mobile devices
- **Service Catalog**: Browse haircuts and beard grooming services
- **Team Showcase**: Meet our professional barbers
- **Testimonials**: Read customer reviews
- **Blog Section**: Stay updated with grooming tips

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **AI Integration**: Google Gemini AI (via @google/genai)

## Run Locally

**Prerequisites:** Node.js (v18 or higher)

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment variables:**

   - Copy `.env.example` to `.env.local`:
     ```bash
     cp .env.example .env.local
     ```
   - Get your Gemini API key from: https://makersuite.google.com/app/apikey
   - Add your API key to `.env.local`:
     ```
     GEMINI_API_KEY=your_actual_api_key_here
     ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   The app will be available at http://localhost:3000

4. **Build for production:**

   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## Project Structure

```
.
├── api/                    # API proxy endpoints
│   └── style-advice.ts     # Secure Gemini AI proxy
├── components/             # React components
│   ├── Navbar.tsx          # Responsive navigation with mobile menu
│   ├── StyleConsultant.tsx # AI-powered style recommendations
│   └── BookingModal.tsx    # Appointment booking form
├── App.tsx                 # Main application component
├── constants.tsx           # Service, barber, and content data
├── types.ts                # TypeScript type definitions
├── index.tsx               # Application entry point
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
└── .env.example            # Environment variables template
```

## Security Notes

⚠️ **Important**: The Gemini API key is handled securely through a backend proxy endpoint (`/api/style-advice`). Never expose your API key in client-side code.

## Customization

### Brand Colors

Edit the Tailwind config in `index.html`:

```javascript
colors: {
  brand: {
    dark: '#1A1A1A',      // Background
    accent: '#FF6330',     // Primary accent
    gray: '#2A2A2A',       // Secondary background
    lightGray: '#9CA3AF'   // Text muted
  }
}
```

### Services & Pricing

Update services in `constants.tsx`:

```typescript
export const SERVICES: Service[] = [
  { id: 'h1', category: 'Haircuts', name: 'Basic Haircut', price: '$25', ... }
]
```

## License

MIT License - feel free to use this project for your own business!

---

Built with ❤️ for modern barber shops
