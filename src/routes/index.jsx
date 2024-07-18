import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import BlogPage from "../pages/blogPage";

const Index = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<BlogPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default Index;
