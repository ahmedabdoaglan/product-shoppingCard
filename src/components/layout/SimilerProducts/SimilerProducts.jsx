import React from "react";
import "./SimilerProducts.scss";
import listname from "./ListName";
import CartSimiler from "./CartSimiler";
const SimilerProducts = () => {
  const Cards = listname.map(({ id, ...otheProps }) => (
    <CartSimiler key={id} {...otheProps} id={id} />
  ));
  return (
    <div className="styleSimiler">
      <div className="headSimiler">Similar Products</div>
      <div className="titleSimiler">You may like these products also</div>
      <div className="row">{Cards}</div>
      <div
        className="line"
        style={{
          display: "flex",
          alignItems: "center",
          margin: "30px 0px 30px 0px",
        }}
      >
        <div
          style={{ width: "70%", height: "5px", backgroundColor: "#542E90" }}
        ></div>
        <div
          style={{ width: "30%", height: "3px", backgroundColor: "#D9D9D9" }}
        ></div>
      </div>
    </div>
  );
};

export default SimilerProducts;
