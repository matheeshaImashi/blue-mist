import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../src/i18n/i18n.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleDetail from "../src/pages/ArticalDetail.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
