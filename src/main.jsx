import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalContextProvider from "./Context/GlobalContext.jsx";
import "./Styles/index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </StrictMode>
);
