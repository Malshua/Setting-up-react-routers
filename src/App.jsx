import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import AllProducts from "./components/products/AllProducts";
import Clothing from "./components/products/Clothing";
import Accessories from "./components/products/Accessories";
import Error from "./components/Error";
import NavBar from "./components/NavBar";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<AllProducts />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="clothing" element={<Clothing />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
