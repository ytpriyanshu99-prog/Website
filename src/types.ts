export interface StateWonder {
  id: string;
  name: string;
  region: string;
  description: string;
  imageUrl: string;
  cities: string[];
  highlights: string[];
}

export interface Destination {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  imageUrl: string;
  price: number;
  duration: string;
  bestTime: string;
  activities: string[];
  itineraryDays: { day: number; title: string; desc: string }[];
}

export interface Festival {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  tips: string[];
}

export interface LivingArt {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  iconName: "brush" | "temple_hindu" | "music" | "scissors";
  duration: string;
  price: number;
}

export interface Expert {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  languages: string[];
  verified: boolean;
}

export interface ItineraryItem {
  id: string;
  destinationId: string;
  destinationName: string;
  date: string;
  notes: string;
  travelersCount: number;
}
