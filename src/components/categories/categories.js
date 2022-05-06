import React from "react";
import ProductList from "../product-list/product-list";
import "./categories.css";

const list = [
  {
    id: 0,
    category: "Еда",
  },
  {
    id: 1,
    category: "Напитки",
  },
];

class Categories extends React.Component {
  state = {
    active_id: 0,
  };

  render() {
    return (
      <div>
        <div className="categories">
          <ul className="inner-categories">
            {list.map((el) => {
              return (
                <li
                  onClick={() => this.setState({ active_id: el.id })}
                  key={el.id}
                  className="category"
                >
                  {el.category}
                </li>
              );
            })}
          </ul>
        </div>
        <ProductList categoryId={this.state.active_id} />
      </div>
    );
  }
}
export default Categories;
