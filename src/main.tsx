import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@app/styles/index.scss";
import { Provider } from "react-redux";
import { store } from "@app/lib/store";
import { Routing } from "@app/providers/RouterProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routing />
    </Provider>
  </BrowserRouter>
);
