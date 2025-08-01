// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedArticles from "../components/FeaturedArticles";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedArticles />
    </>
  );
};

export default Home;
