import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { axiosAPI } from "./axiosApi";
import {
  CityIdResponse,
  CityResponse,
  CompanyResponse,
  EstateIdResponse,
  EstateTypesResponse,
  EstatesResponse,
  StaticDataResponse,
  StaticFormCatalogResponse,
} from "./types";
import { capitalize } from "../helper/utils";
import { useSearchParams } from "react-router-dom";

export type FilterOption = {
  id: number;
  label: string;
};

const composeOrdering = (searchParams: URLSearchParams) => {
  const orderParam = searchParams.get("order");
  switch (orderParam) {
    case "1":
      return "visits";
    case "2":
      return "create_at";
    default:
      return null;
  }
};

export const useGetEstates = (limit: number, searchParams: URLSearchParams) => {
  const search = searchParams.get("search");
  const estate_type_id = searchParams.get("type");
  const cityParams = searchParams.get("city");
  const city_id = cityParams; //&& encodeURIComponent(cityParams);
  const ordering = composeOrdering(searchParams);
  const { data, isFetching, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [
      "estates",
      {
        search,
        estate_type_id,
        city_id,
        ordering,
        limit,
      },
    ],
    queryFn: async ({ pageParam }) => {
      const response = await axiosAPI<EstatesResponse>("/estate/", {
        params: {
          search,
          estate_type_id,
          city_id,
          ordering,
          limit: limit > 0 ? limit : 0,
          offset: pageParam,
        },
      });
      return response.data;
    },
    initialPageParam: 0,
    getPreviousPageParam: () => undefined,
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;
      const searchParams = new URLSearchParams(lastPage.next);
      const offset = parseInt(searchParams.get("offset") || "");
      return offset ?? undefined;
    },
  });
  return { data, fetchNextPage, isFetching, hasNextPage };
};

export const useGetEstateById = (id?: number | string) => {
  const [searchParams] = useSearchParams();
  const preview = searchParams.get("preview");
  const { data, isLoading, error } = useQuery({
    queryKey: ["estate", { id }],
    queryFn: async () => {
      const response = await axiosAPI<EstateIdResponse>(`/estate/${id}/`, {
        params: {
          preview,
        },
      });
      return response.data;
    },
  });
  const estate = data?.estate;
  const pdfUrl = estate?.project.pdf_catalog;
  return { data, estate, pdfUrl, isLoading, error };
};

export const useGetSimilarEstates = (id?: number | string) => {
  const { data, isSuccess } = useQuery({
    queryKey: ["similar_estates", { id }],
    queryFn: async () => {
      const response = await axiosAPI<EstatesResponse>(
        `/estate/${id}/similar/`
      );
      return response.data;
    },
  });
  return { data, isSuccess };
};

export const useGetEstateTypes = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ["estate_types"],
    queryFn: async () => {
      const response = await axiosAPI<EstateTypesResponse>("/estate_types/");
      return response.data;
    },
  });

  const typeOptions: FilterOption[] = data
    ? data.estate_types.map((estate_type) => ({
        id: estate_type.id,
        label: capitalize(estate_type.type),
      }))
    : [];

  return { data, typeOptions, isSuccess };
};

export const useGetCities = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ["cities"],
    queryFn: async () => {
      const response = await axiosAPI<CityResponse>("/cities/");
      return response.data;
    },
  });

  const cityOptions: FilterOption[] = data
    ? data.cities.map((city) => ({
        id: city.id,
        label: capitalize(city.city_name),
      }))
    : [];

  const cities = data?.cities;
  const dubai = cities?.find((city) => city.id === 1) || cities?.[0];

  return { data, cities, dubai, cityOptions, isSuccess };
};

export const useGetCityById = (id: number | string) => {
  const { data } = useQuery({
    queryKey: ["city", { id }],
    queryFn: async () => {
      const response = await axiosAPI<CityIdResponse>(`/cities/${id}/`);
      return response.data;
    },
  });

  const city = data?.city;

  return { data, city };
};

export const useGetCompany = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ["company"],
    queryFn: async () => {
      const response = await axiosAPI<CompanyResponse>("/company/");
      return response.data;
    },
  });
  const company = data?.about_company;

  return { data, company, isSuccess };
};

export const useWhatsApp = (id?: number | string) => {
  const { data } = useGetCompany();
  const { staticData } = useGetStaticData();
  const whatsappNumber = data?.about_company.whatsapp.replace(/\D/g, "");
  let whatsappUrl = whatsappNumber && `https://wa.me/${whatsappNumber}`;
  if (id && staticData) {
    const message = `/?text=${staticData.body.whatsapp_message || ""} ${import.meta.env.VITE_HOST || "https://goldenhutproperties.com"}/estates/${id}`;
    whatsappUrl += encodeURI(message);
    //whatsappUrl += message;
  }
  return { whatsappUrl: whatsappUrl || "#" };
};

export const useGetStaticData = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ["static_data"],
    queryFn: async () => {
      const response = await axiosAPI<StaticDataResponse>("/static_data/all/");
      return response.data;
    },
  });

  const orderOptions: FilterOption[] = data
    ? [
        { id: 3, label: data.static_data.body.all },
        { id: 2, label: data.static_data.body.new_add },
        { id: 1, label: data.static_data.body.popular },
      ]
    : [];

  const staticData = data?.static_data;
  const header = staticData?.header;

  return { data, staticData, header, orderOptions, isSuccess };
};

export const useGetStaticFormDownloadCatalog = () => {
  const { data } = useQuery({
    queryKey: ["formsCatalog"],
    queryFn: async () => {
      const response = await axiosAPI<StaticFormCatalogResponse>(
        "/appeal/download_catalog/"
      );
      return response.data;
    },
  });

  const choices = data?.form.choices;

  return { data, choices };
};
