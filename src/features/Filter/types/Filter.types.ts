export interface FiltertItem {
  id: number;
  label: string;
}
export interface FilterValue {
  city: FiltertItem[];
  type: FiltertItem[];
  rating: FiltertItem[];
}
