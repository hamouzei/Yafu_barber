
export interface Service {
  id: string;
  name: string;
  price: string;
  description: string;
  category: 'Haircuts' | 'Beard Grooming';
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  comments: number;
  image: string;
  category: string;
}
