import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/global-style.css";
import { AppRoutes } from "./routing/appRoutes.tsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer 
     style={{ zIndex: 99999999 }} />
    <AppRoutes />
  </StrictMode>
);
