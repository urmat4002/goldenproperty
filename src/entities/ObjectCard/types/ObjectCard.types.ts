export interface ObjectCardProps {
  id: number;
  price_usd: number;
  city: string;
  images: string[];
  project: { name: string; location: string };
}
export interface ObjectCardState {
  language: string;
  count?: number;
  next?: string;
  previos?: string;
  estates: ObjectCardProps[];
}
