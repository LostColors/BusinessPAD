import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TotalButton from "./total-button";
import OrderButton from "./order-button";
import { useLocation } from "react-router-dom";
import {
  productAddedToCart,
  productRemovedFromCart,
  allProductsRemovedFromCart,
} from "../../actions";

import "./shopping-cart-table.css";

const ShoppingCartTable = ({ onIncrease, onDecrease, onDelete, cartItems }) => {
  const location = useLocation();

  const [cost, setCost] = useState(0);
  useEffect(() => {
    let a = 0;
    cartItems.forEach((el) => (a += el.total));
    setCost(a);
  }, [cartItems]);

  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;

    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}₸</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right"
          >
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right"
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right"
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2> Ваш заказ</h2>
      <table className="table">
        <thead>
          <tr>
            <th>№</th>
            <th>Продукт</th>
            <th>Количество</th>
            <th>Цена</th>
            <th>Действия</th>
          </tr>
        </thead>

        <tbody>{cartItems.map(renderRow)}</tbody>
      </table>
      {location.pathname === "/" ? (
        <TotalButton cost={cost} />
      ) : (
        <OrderButton cost={cost} />
      )}
    </div>
  );
};

const mapStateToProps = ({ cartItems }) => {
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = {
  onIncrease: productAddedToCart,
  onDecrease: productRemovedFromCart,
  onDelete: allProductsRemovedFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
