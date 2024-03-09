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
  StaticFormsResponse,
  StaticHeaderResponse,
} from "./types";
import { capitalize } from "../helper/utils";

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
  const { data, isLoading } = useQuery({
    queryKey: ["estate", { id }],
    queryFn: async () => {
      const response = await axiosAPI<EstateIdResponse>(`/estate/${id}/`);
      return response.data;
    },
  });
  const estate = data?.estate;
  return { data, estate, isLoading };
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

  return { data, cityOptions, isSuccess };
};

export const useGetCityById = (id: number | string) => {
  const { data } = useQuery({
    queryKey: ["city", { id }],
    queryFn: async () => {
      const response = await axiosAPI<CityIdResponse>(`/cities/${id}/`);
      return response.data;
    },
  });
  return { data };
};

export const useGetCompany = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ["company"],
    queryFn: async () => {
      const response = await axiosAPI<CompanyResponse>("/company/");
      return response.data;
    },
  });
  return { data, isSuccess };
};

export const useWhatsApp = (id?: number | string) => {
  const { data } = useGetCompany();
  const whatsappNumber = data?.about_company.whatsapp.replace(/\D/g, "");
  let whatsappUrl = `https://wa.me/${whatsappNumber}`;
  if (id) {
    const message = `/?text=${import.meta.env.VITE_HOST}/estate/${id}`;
    //whatsappUrl += encodeURI(message);
    whatsappUrl += message;
  }
  return { whatsappUrl };
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

  return { data, staticData, orderOptions, isSuccess };
};

export const useGetStaticHeader = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ["header"],
    queryFn: async () => {
      const response = await axiosAPI<StaticHeaderResponse>(
        "/static_data/header/"
      );
      return response.data;
    },
  });
  return { data, isSuccess };
};

export const useGetStaticForms = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ["forms"],
    queryFn: async () => {
      const response = await axiosAPI<StaticFormsResponse>(
        "/static_data/forms/"
      );

      return response.data;
    },
  });
  return { data, isSuccess };
};

export const useGetStaticFormDownloadCatalog = () => {
  const { data } = useQuery({
    queryKey: ["formsCatalog"],
    queryFn: async () => {
      const response =
        await axiosAPI<StaticFormCatalogResponse>("/download_catalog/");
      return response.data;
    },
  });

  const choices = data?.form.choices;

  return { data, choices };
};
