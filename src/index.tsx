import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App.jsx'
import { AuthProvider } from "./context/authContext.js"

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);

