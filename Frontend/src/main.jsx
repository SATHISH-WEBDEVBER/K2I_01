import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import  LanguageProvider  from "./Contexts/LanguageProvider.jsx";

import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </BrowserRouter>
);
