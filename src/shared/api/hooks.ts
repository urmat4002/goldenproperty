import { useQuery } from "@tanstack/react-query";
import { axiosAPI } from "./axiosApi";
import { useSearchParams } from "react-router-dom";

type Estate = {
  id: number;
  price_usd: number;
  //FIX_ME can we narrow this type?
  city: string;
  project: {
    name: string;
    location: string;
  };
  images: string[];
};

type Response<T> = {
  //FIX_ME
  language: string;
  estates: T[];
};

export const useEstates = () => {
  const [searchParams] = useSearchParams();
  const { data, isSuccess } = useQuery({
    queryKey: ["estates"],
    queryFn: async () => {
      const response = await axiosAPI<Response<Estate>>("/estate/", {
        params: {
          search: searchParams.get("search"),
          //FIX_ME add other filter params
        },
      });
      return response.data;
    },
  });
  return { data, isSuccess };
};
