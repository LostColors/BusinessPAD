import React from "react";
import "./shopping-cart-table.css";
import { useNavigate } from "react-router-dom";

const OrderButton = ({ cost }) => {
  const navigate = useNavigate();
  return (
    <button
      className="btn btn-info float-right"
      onClick={() => navigate("/payment")}
    >
      Оплатить: {cost}₸
    </button>
  );
};

export default OrderButton;
