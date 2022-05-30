import React from "react";
import { connect } from "react-redux";
class Orders extends React.Component {
  state = {
    orders: [
      [
        {
          id: 5,
          name: "Coca-cola",
          count: 2,
          total: 500,
        },
        {
          id: 3,
          name: "Манты",
          count: 1,
          total: 1500,
        },
      ],
      [
        {
          id: 5,
          name: "Coca-cola",
          count: 2,
          total: 500,
        },
        {
          id: 3,
          name: "Креветки",
          count: 2,
          total: 2400,
        },
      ],
    ],
  };
  componentDidMount() {
    const newOrder = this.props.cartItems;
    this.setState({
      orders: [...this.state.orders, newOrder],
    });
  }
  render() {
    return <div>{JSON.stringify(this.state.orders)}</div>;
  }
}

const mapStateToProps = ({ cartItems }) => {
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps)(Orders);
