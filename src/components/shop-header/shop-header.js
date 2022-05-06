import React, { useEffect, useState } from "react";
import "./shop-header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ShopHeader = ({ cartItems }) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    let q = 0;
    cartItems.forEach((el) => (q += el.count));
    setQuantity(q);
  }, [cartItems]);

  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logotype text-dark">BusinessPAD</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          Корзина ({quantity})
        </div>
      </Link>
    </header>
  );
};

const mapStateToProps = ({ cartItems }) => {
  return {
    cartItems: cartItems,
  };
};
export default connect(mapStateToProps)(ShopHeader);
