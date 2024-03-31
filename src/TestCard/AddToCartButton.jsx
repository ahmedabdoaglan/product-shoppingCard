import React from "react";

class AddToCartButton extends React.Component {
  render() {
    const { onAddToCart } = this.props;

    return <button onClick={onAddToCart}>Add to Cart</button>;
  }
}

export default AddToCartButton;
