type Response = {
  language: string;
};

export type Estate = {
  id: number;
  price_usd: number;
  city: string;
  project: {
    name: string;
    location: string;
  };
  images: string[];
};

export type EstatesResponse = Response & {
  estates: Estate[];
};

export type EstateIdResponse = Response & {
  estate: {
    id: number;
    title: string;
    area: number;
    description: string;
    price_usd: number;
    estate_type: string;
    city: string;
    is_secondary: boolean;
    images: string[];
    project: {
      name: string;
      facilities: [
        {
          type: string;
          icon: string;
        },
      ];
      location: string;
      completion: string;
      is_furnished: boolean;
      pdf_catalog: string;
    };
  };
};

export type EstateTypesResponse = Response & {
  estate_types: {
    id: number;
    type: string;
  }[];
};

export type CityResponse = Response & {
  cities: {
    id: number;
    city_name: string;
    city_description: string;
    city_img: string;
  }[];
};

export type CityIdResponse = Response & {
  city: {
    id: number;
    city_name: string;
    city_description: string;
    city_img: string;
  };
};

export type CompanyResponse = Response & {
  about_company: {
    company_name: string;
    mission: string;
    history: string;
    company: string;
    phone: string;
    email: string;
    company_img: string;
  };
};

export type StaticDataResponse = Response & {
  static_data: {
    header: Record<string, string>;
    body: Record<string, string>;
    forms: Record<string, string>;
    footer: Record<string, string>;
    error: Record<string, string>;
  };
};
