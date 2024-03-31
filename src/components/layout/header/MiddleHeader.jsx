import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import AddCart from "./AddCart";

const MiddleHeader = () => {
  return (
    <div className="search-header row">
      <div className="col-md-4 searchField">
        <div className="search">
          <div className="searchBox">
            <FiSearch />
            <input type="text" placeholder="search" />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="img-adidas">
          <img src="images/adidas1.png" alt="adidas1" />
        </div>
      </div>
      <div className="col-md-4">
        <div
          className="styleOne-header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AddCart />
          <div style={{ fontWeight: "500", fontSize: "18px" }}>
            <AiOutlineHeart style={{ margin: "0px 10px 0px 20px" }} />
            Wishlist
          </div>
          <div style={{ fontWeight: "500", fontSize: "18px" }}>
            <VscAccount style={{ margin: "0px 10px 0px 20px" }} />
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
