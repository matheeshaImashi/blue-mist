import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import AllArticles from "./pages/AllArticles";
import ArticleDetail from "./pages/ArticalDetail"; // Check spelling

function App() {
  return (
    <Routes>
      {/* Layout wraps all pages */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
