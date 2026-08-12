export interface AgendaItem {
  time: string;
  title: string;
  subtitle?: string;
  speaker?: string;
  tag?: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface EventTheme {
  number: string;
  title: string;
  description: string;
  badge?: string;
}

export interface Speaker {
  name: string;
  title: string;
  company: string;
  bio: string;
  image?: string;
  linkedinUrl?: string;
  status: 'confirmed' | 'pending';
}

export interface GalleryImage {
  url: string;
  alt: string;
  title: string;
  category: string;
}
