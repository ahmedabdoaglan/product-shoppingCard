import React from "react";
import shoppingCardImg from "../../../images/shopping-card.svg";
import { totalCartQuantity } from "../SimilerProducts/CartSimiler";
const AddCart = () => {
  return (
    <div className="addCart">
      <img alt="" src={shoppingCardImg} width="30" />
      <div className="addCartCounter">{totalCartQuantity} </div>
    </div>
  );
};

export default AddCart;
