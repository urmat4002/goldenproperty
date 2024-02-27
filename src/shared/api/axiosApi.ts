import axios from "axios";

const axiosAPI = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosAPI.interceptors.request.use(
  async (config) => {
    const userLanguage = localStorage.getItem("language");
    if (userLanguage) {
      //FIX_ME
      //config.headers["Accept-Language"] = userLanguage;
      config.headers.Authorization = userLanguage;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export { axiosAPI };
