import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import router from "./Routes/Routes";
import AuthProvider from "./AuthContext/AuthProvider";
import { ToastContainer } from "react-toastify";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </StrictMode>
);
<ToastContainer />;
