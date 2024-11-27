import { createRoot } from "react-dom/client";

import "./index.css";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./routers/router.jsx";
import "sweetalert2/dist/sweetalert2.js";

import { store } from "./redux/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
