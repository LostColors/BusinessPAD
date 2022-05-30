import React from "react";
import { Route, Routes } from "react-router-dom";
import ShopHeader from "../shop-header";
import { HomePage, CartPage, PaymentPage } from "../pages";
import Login from "../login/login";
import "./app.css";
import Orders from "../orders/orders";
import About from "../about/about";
const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};

export default App;
