import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import SingleItem from "./components/SingleItem";
import About from "./components/About";
import Footer from "./components/Footer";
import { ShopContextProvider } from "./context/shop-context";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <ShopContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Shop />} />
          <Route path="/shop/singleItem" element={<SingleItem />} />

          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ShopContextProvider>
      <Footer />
    </>
  );
}

export default App;
