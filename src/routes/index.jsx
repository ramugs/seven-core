import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import { ToastContainer } from "react-toastify";

const Index = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <ToastContainer limit={1} />
    </>
  );
};

export default Index;
