import React, { Component } from "react";
import ProductListItem from "../product-list-item";

import { connect } from "react-redux";

import { withProductStoreService } from "../hoc";
import { fetchProducts, productAddedToCart } from "../../actions";
import { compose } from "../../utils";

import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./product-list.css";

const ProductList = ({ products, onAddedToCart, categoryId }) => {
  return (
    <ul className="book-list">
      {products.map((product) => {
        if (product.category_id === categoryId) {
          return (
            <li key={product.id}>
              <ProductListItem
                product={product}
                onAddedToCart={() => onAddedToCart(product.id)}
              />
            </li>
          );
        }
      })}
    </ul>
  );
};

class ProductListContainer extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products, loading, error, onAddedToCart, categoryId } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <ProductList
        categoryId={categoryId}
        products={products}
        onAddedToCart={onAddedToCart}
      />
    );
  }
}

const mapStateToProps = ({ products, loading, error }) => {
  return { products, loading, error };
};

const mapDispatchToProps = (dispatch, { productStoreService }) => {
  return {
    fetchProducts: fetchProducts(productStoreService, dispatch),
    onAddedToCart: (id) => dispatch(productAddedToCart(id)),
  };
};

export default compose(
  withProductStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductListContainer);
