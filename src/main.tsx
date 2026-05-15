import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UserRouter from "./routes/AppRoutes";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserRouter>
      <App />
    </UserRouter>
  </StrictMode>,
);
