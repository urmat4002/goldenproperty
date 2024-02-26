import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routing } from "./app/providers/RouterProvider";
import "@app/styles/index.scss";
import { Provider } from "react-redux";
import { store } from "./app/lib/store";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <Routing />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
