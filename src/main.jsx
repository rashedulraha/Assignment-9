import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import router from "./Routes/Routes";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
