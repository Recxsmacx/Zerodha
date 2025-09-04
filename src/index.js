import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./LandingPage/home/Homepage";
import Signup from "./LandingPage/signup/signup";
import AboutPage from "./LandingPage/about/AboutPage";
import ProductPage from "./LandingPage/products/ProductPage";
import PricingPage from "./LandingPage/pricing/PricingPage";
import SupportPage from "./LandingPage/support/SupportPage";
import Navbar from "./LandingPage/Navbar";
import Footer from "./LandingPage/Footer";
import NotFound from "./LandingPage/Notfound";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />

      <Route path="/product" element={<ProductPage />} />

      <Route path="/pricing" element={<PricingPage />} />

      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

    <Footer />
  </BrowserRouter>
);
