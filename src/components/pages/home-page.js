import React from "react";
//import ProductList from "../product-list";
import Categories from "../categories";
import ShoppingCartTable from "../shopping-cart-table/shopping-cart-table";

const HomePage = () => {
  return (
    <div>
      <Categories />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
