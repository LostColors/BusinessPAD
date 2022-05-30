import React, { useEffect, useState } from "react";
import "./shop-header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logo } from "../../img/index";
import { isLogedOut } from "../../actions";

const ShopHeader = ({ cartItems, logedIn, isLogedOut }) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    let q = 0;
    cartItems.forEach((el) => (q += el.count));
    setQuantity(q);
  }, [cartItems]);

  const loginLogout = (logedIn) => {
    if (!logedIn) {
      return (
        <Link to="/login">
          <div>Войти</div>
        </Link>
      );
    } else {
      return (
        <Link to="/">
          <div onClick={() => isLogedOut()}>Выйти</div>
        </Link>
      );
    }
  };

  return (
    <header className="shop-header row">
      <Link to="/">
        {/* <div className="logotype text-dark">BusinessPAD</div> */}
        <img className="logo" src={logo} alt="Home" />
      </Link>
      <div className="inner-shop-header">
        <Link to="/about">
          <div>О Компании</div>
        </Link>

        {loginLogout(logedIn)}
        <Link to="/cart">
          <div className="shopping-cart">
            <i className="cart-icon fa fa-shopping-cart" />
            Корзина ({quantity})
          </div>
        </Link>
      </div>
    </header>
  );
};

const mapStateToProps = ({ cartItems, logedIn }) => {
  return {
    cartItems,
    logedIn,
  };
};
const mapDispatchToProps = {
  isLogedOut: isLogedOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(ShopHeader);
