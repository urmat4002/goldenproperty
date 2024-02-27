import { useQuery } from "@tanstack/react-query";
import { axiosAPI } from "./axiosApi";
import { useSearchParams } from "react-router-dom";

type Estate = {
  id: number;
  price_usd: number;
  //FIX_ME can we tighten this type?
  city: string;
  project: {
    name: string;
    location: string;
  };
  images: string[];
};

type EstateResponse = {
  //FIX_ME
  language: string;
  estates: Estate[];
};

export const useEstates = () => {
  const [searchParams] = useSearchParams();
  const { data, isSuccess } = useQuery({
    retry: 0,
    queryKey: ["estates"],
    queryFn: async () => {
      const response = await axiosAPI<EstateResponse>("/estate/", {
        params: {
          search: searchParams.get("search"),
        },
      });
      return response.data;
    },
  });
  return { data, isSuccess };
};
