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
} from "./types";

export const useGetEstates = (limit: number) => {
  const [searchParams] = useSearchParams();
  const { status, data, isFetching, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["estates"],
      queryFn: async ({ pageParam }) => {
        const response = await axiosAPI<EstatesResponse>("/estate/", {
          params: {
            search: searchParams.get("search"),
            //FIX_ME add other filter params
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
  return { data, status, fetchNextPage, isFetching, hasNextPage };
};

export const useGetEstateById = (id: number) => {
  const { data, isSuccess } = useQuery({
    queryKey: ["estate"],
    queryFn: async () => {
      const response = await axiosAPI<EstateIdResponse>(`/estate/${id}/`);
      return response.data;
    },
  });
  return { data, isSuccess };
};

export const useGetSimilarEstates = (id: number) => {
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
  return { data, isSuccess };
};

export const useGetCities = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ["cities"],
    queryFn: async () => {
      const response = await axiosAPI<CityResponse>("/cities/");
      return response.data;
    },
  });
  return { data, isSuccess };
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
  return { data, isSuccess };
};
