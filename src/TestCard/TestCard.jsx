import React, { Component } from "react";
//import AddToCartButton from "./AddToCartButton";
//import shoppingCardImg from "../../../images/shopping-card.svg";
import shoppingCardImg from "../images/shopping-card.svg";
class TestCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [], // Items in the cart
      isDropdownVisible: false, // State to toggle the cart dropdown visibility
    };
  }

  // Method to toggle the visibility of the cart dropdown
  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownVisible: !prevState.isDropdownVisible,
    }));
  };

  // Method to add an item to the cart or increment its quantity
  addItemToCart = (product) => {
    this.setState((prevState) => {
      let found = false;
      const updatedCart = prevState.cartItems.map((item) => {
        if (item.id === product.id) {
          found = true;
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      if (!found) {
        updatedCart.push({ ...product, quantity: 1 });
      }

      return { cartItems: updatedCart };
    });
  };

  // Render the cart icon with a badge showing the number of items
  renderCartIcon = () => {
    const itemCount = this.state.cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    return (
      <div onClick={this.toggleDropdown} style={{ cursor: "pointer" }}>
        <img alt="" src={shoppingCardImg} width="30" /> <span>{itemCount}</span>
      </div>
    );
  };

  // Render the cart dropdown
  renderCartDropdown = () => {
    if (this.state.cartItems.length === 0) {
      return <div>Your cart is empty.</div>;
    }

    return (
      <ul>
        {this.state.cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    );
  };
  render() {
    return (
      <div>
        <h1>ahmed</h1>
        <div>
          {this.renderCartIcon()}
          {this.state.isDropdownVisible && this.renderCartDropdown()}
          <button
            onClick={() =>
              this.addItemToCart({ id: "1", name: "Example Product" })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

export default TestCard;
