import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routing } from "./app/providers/RouterProvider";
import "@app/styles/index.scss";
import { Provider } from "react-redux";
import { store } from "./app/lib/store";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      retry: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <Routing />
        <ReactQueryDevtools buttonPosition="bottom-left" />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
