import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoute } from "./routes/appRoutes";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./common/context/themeContext";
import { AppContextProvider } from "./common/context/appContext";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <AppContextProvider>
          <AppRoute />
        </AppContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
