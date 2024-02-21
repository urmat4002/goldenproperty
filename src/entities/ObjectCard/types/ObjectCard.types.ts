export interface ObjectCardProps {
  id: number;
  price_usd: number;
  city: string;
  images: string[];
  project: { name: string; location: string };
}
