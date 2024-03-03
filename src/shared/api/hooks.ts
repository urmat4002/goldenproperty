import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { axiosAPI } from "./axiosApi";
import { useSearchParams } from "react-router-dom";
import {
  CityIdResponse,
  CityResponse,
  CompanyResponse,
  EstateIdResponse,
  EstateTypesResponse,
  EstatesResponse,
  StaticDataResponse,
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

export const useGetEstates = (limit: number) => {
  const [searchParams] = useSearchParams();
  const { status, data, isFetching, fetchNextPage, hasNextPage, refetch } =
    useInfiniteQuery({
      queryKey: ["estates"],
      queryFn: async ({ pageParam }) => {
        const cityParams = searchParams.get("city");
        const response = await axiosAPI<EstatesResponse>("/estate/", {
          params: {
            search: searchParams.get("search"),
            estate_type_id: searchParams.get("type"),
            city_id: cityParams && encodeURIComponent(cityParams),
            ordering: composeOrdering(searchParams),
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
  return { data, status, fetchNextPage, refetch, isFetching, hasNextPage };
};

export const useGetEstateById = (id?: number | string) => {
  const { data, isSuccess } = useQuery({
    queryKey: ["estate"],
    queryFn: async () => {
      const response = await axiosAPI<EstateIdResponse>(`/estate/${id}/`);
      return response.data;
    },
  });
  return { data, isSuccess };
};

export const useGetSimilarEstates = (id?: number) => {
  const { data, isSuccess } = useQuery({
    queryKey: ["similar_estates"],
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

export const useGetCityById = (id: number) => {
  const { data, isSuccess } = useQuery({
    queryKey: ["city"],
    queryFn: async () => {
      const response = await axiosAPI<CityIdResponse>(`/city/${id}/`);
      return response.data;
    },
  });
  return { data, isSuccess };
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

  return { data, orderOptions, isSuccess };
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
