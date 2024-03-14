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
  next?: string;
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

export type Company = {
  company_name: string;
  mission: string;
  history: string;
  company: string;
  phone: string;
  email: string;
  facebook: string;
  instagram: string;
  whatsapp: string;
  company_img: string;
};

export type CompanyResponse = Response & {
  about_company: Company;
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

export type StaticHeaderResponse = Response & {
  header: {
    city: string;
    all_real_estates: string;
    place_ad: string;
    about_us: string;
  };
};

export type StaticFormCatalogResponse = Response & {
  form: {
    choices: Record<string, string>;
    download: string;
    download_catalog: string;
    phone_number: string;
    select_role: string;
    your_email: string;
    your_name: string;
  };
};

export type StaticFormsResponse = Response & {
  forms: {
    contact_us: string;
    any_question: string;
    leave_your_contacts: string;
    submit_application: string;
    fill_form: string;
    sell_with_us: string;
    successfully: string;
    thanks: string;
    download_catalog: string;
    your_name: string;
    your_email: string;
    phone_number: string;
    your_city: string;
    date: string;
    send: string;
    close: string;
    download: string;
    select_role: string;
    agent: string;
    buyer: string;
    exploring: string;
  };
};

export interface IBody {
  main: string;
  search: string;
  slogan: string;
  see_real_estates: string;
  city: string;
  estate_type: string;
  popular: string;
  new_add: string;
  all: string;
  show_result: string;
  we_have: string;
  benefits: string;
  wide_selection: string;
  wide_selection_description: string;
  confidentiality: string;
  confidentiality_description: string;
  exclusive_offers: string;
  exclusive_offers_description: string;
  feedback: string;
  feedback_description: string;
  furnished: string;
  completion: string;
  price_at: string;
  catalog: string;
  features_and_amenities: string;
  description: string;
  similar_properties: string;
  mission_and_history: string;
  mission: string;
  history: string;
  company: string;
}
