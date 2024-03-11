export interface ICity {
  id: number;
  city__name: string;
  city__description: string;
  city__img: string;
}

export interface IHeader {
  city: string;
  all_real_estates: string;
  place_ad: string;
  about_us: string;
}

export type isData = IHeader | undefined;

export interface ICities {
  id: number;
  city_name: string;
  city_description: string;
  city_img: string;
}

export interface NavbarProps {
  isMobile: boolean;
}
