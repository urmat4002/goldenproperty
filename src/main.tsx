import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routing } from "./app/providers/RouterProvider";
//FIX_ME remove redux
import { store } from "./app/lib/store";
import "@app/styles/index.scss";

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
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
