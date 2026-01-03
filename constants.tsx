
import { Service, Barber, Testimonial, BlogPost } from './types';

export const SERVICES: Service[] = [
  { id: 'h1', category: 'Haircuts', name: 'Basic Haircut', price: '$25', description: 'A clean, quick cut using clippers and shears. Includes neckline cleanup.' },
  { id: 'h2', category: 'Haircuts', name: 'Style and Trim', price: '$35', description: 'A detailed cut including wash and condition. Focuses on layering and length.' },
  { id: 'h3', category: 'Haircuts', name: 'Executive Cut', price: '$45', description: 'Our premium precision haircut. Includes consultation, tailored beard trim, and hot towel.' },
  { id: 'h4', category: 'Haircuts', name: 'Buzz Cut Haircut', price: '$20', description: 'Uniform length on the entire head with clippers. Quick, clean, and low maintenance.' },
  { id: 'b1', category: 'Beard Grooming', name: 'Beard Trim', price: '$15', description: 'Quick and clean shaping of the beard length using clippers and scissors.' },
  { id: 'b2', category: 'Beard Grooming', name: 'Precision Beard Sculpting', price: '$25', description: 'Detailed shaping and outlining using multiple guards and a straight razor.' },
  { id: 'b3', category: 'Beard Grooming', name: 'Hot Towel Beard', price: '$20', description: 'The ultimate beard treatment. Includes a trim, detailed shape-up, and hot towel.' },
  { id: 'b4', category: 'Beard Grooming', name: 'Deluxe Beard Package', price: '$40', description: 'Combines the precision sculpting service with a deep conditioning beard wash.' },
];

export const BARBERS: Barber[] = [
  { id: '1', name: 'Daniel Cruz', role: 'Owner / Master Barber', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=800&auto=format&fit=crop', description: 'Expert in classic silhouettes and shop management.' },
  { id: '2', name: 'Victor Morales', role: 'Color Specialist', image: 'https://images.unsplash.com/photo-1621605815841-aa88c82b0248?q=80&w=800&auto=format&fit=crop', description: 'Known for bold transitions and creative color mastery.' },
  { id: '3', name: 'Miles Turner', role: 'Fade Expert', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop', description: 'The fastest hands in the city for a perfect skin fade.' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', name: 'Marcus Vane', text: "I won't go anywhere else. The level of precision and attention to detail here is unmatched. My fade always looks perfect.", rating: 5, image: 'https://i.pravatar.cc/150?u=marcus' },
  { id: 't2', name: 'Ryan Chen', text: "From the moment you walk in, the ambiance is excellent and the service is personalized. My barber took the time to discuss exactly what I wanted.", rating: 5, image: 'https://i.pravatar.cc/150?u=ryan' },
  { id: 't3', name: 'Gabriel Soto', text: "I trust the team at YafuBarber completely. I always leave feeling sharp and confident. The advice they give on products is always spot-on.", rating: 5, image: 'https://i.pravatar.cc/150?u=gabriel' },
  { id: 't4', name: 'Yabsira', text: "እስካሁን ካየኋቸው ምርጥ የፀጉር አሠራር. እዚህ ያለው ትኩረት ወደር የለሽ ነው - እጅግ በጣም ንጹህ ስራ!", rating: 5, image: 'https://i.pravatar.cc/150?u=yabsira' },
  { id: 't5', name: 'Daniel', text: "ከፍተኛ-ደረጃ አገልግሎት እና ጥሩ ስሜት። የሙቅ ፎጣ አገልግሎት ፍጹም አጨራረስ ነበር። እመለሳለሁ!", rating: 5, image: 'https://i.pravatar.cc/150?u=daniel' },
  { id: 't6', name: 'Boonaa', text: "Dhumarratti bakka amanamaa argadhe. Ogeessi sa'aatii kan eegu yoo ta'u, Boonaa fakkaadheen ba'e. Baayyee bareeda", rating: 5, image: 'https://i.pravatar.cc/150?u=boonaa' },
];

export const BLOG_POSTS: BlogPost[] = [
  { id: '1', title: 'Clipper Chronicles: Navigating the world of Haircuts', category: 'Trends', date: 'December 20, 2024', comments: 12, image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop' },
  { id: '2', title: 'Taming the Mane: A guide to long hair for men', category: 'Grooming', date: 'December 18, 2024', comments: 8, image: 'https://images.unsplash.com/photo-1593702295094-ada74ca4a49a?q=80&w=800&auto=format&fit=crop' },
  { id: '3', title: 'Unveiling the Secrets: Hair studio etiquette for clients', category: 'Lifestyle', date: 'December 15, 2024', comments: 15, image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop' },
];
