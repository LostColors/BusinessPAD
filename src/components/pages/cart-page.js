import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import ShoppingCartTable from "../shopping-cart-table";

const CartPage = ({ logedIn }) => {
  if (!logedIn) {
    return <Navigate to="/login" />;
  }
  return <ShoppingCartTable />;
};
const mapStateToProps = ({ logedIn }) => {
  return {
    logedIn,
  };
};
export default connect(mapStateToProps)(CartPage);
