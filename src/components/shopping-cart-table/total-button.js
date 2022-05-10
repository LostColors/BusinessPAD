import React from "react";
import "./shopping-cart-table.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const TotalButton = ({ cost, logedIn }) => {
  const navigate = useNavigate();
  const disabledButton = () => {
    if (cost === 0) {
      return "total-button disabled";
    } else return "total-button";
  };

  return (
    <button
      className={`btn btn-info float-right ${disabledButton()}`}
      onClick={() => (!logedIn ? navigate("/login") : navigate("/cart"))}
    >
      Итого: {cost}₸
    </button>
  );
};

const mapStateToProps = ({ logedIn }) => {
  return { logedIn: logedIn };
};

export default connect(mapStateToProps)(TotalButton);
