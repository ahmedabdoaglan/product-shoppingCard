import React from "react";

import { FaBars } from "react-icons/fa";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { NavLink, Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import shoppingCardImg from "../../../images/shopping-card.svg";
import { totalCartQuantity } from "../SimilerProducts/CartSimiler";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTop row">
        <div className="col-lg-2 styleOne-header">
          <p style={{ fontSize: "25px", fontWeight: "700" }}>
            <FaBars /> yeshtry
          </p>
        </div>
        <div className="col-lg-5 styleOne-header">
          {" "}
          <p style={{ fontWeight: "400" }}>
            <SlArrowLeft style={{ marginRight: "10px" }} />
            Valentine’s Day Offers! Buy Two Get One Free<span>
              Shop Now
            </span>{" "}
            <SlArrowRight />
          </p>
        </div>
        <div className="col-lg-5 styleOne-header">
          <p style={{ fontWeight: "500", fontSize: "18px" }}>
            <BsTelephoneInboundFill style={{ margin: "0px 10px 0px 0px" }} />{" "}
            Contact Us
          </p>
          <p style={{ fontWeight: "500", fontSize: "18px" }}>
            <AiOutlineShoppingCart style={{ margin: "0px 10px 0px 20px" }} />
            Track Order
          </p>
          <p style={{ fontWeight: "500", fontSize: "18px" }}>
            {" "}
            <GrLocation style={{ margin: "0px 10px 0px 20px" }} />
            Find A Store
          </p>
        </div>
      </div>
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
            <div className="shoppingCard">
              <img alt="" src={shoppingCardImg} width="30" />
              <div className="shoppingCartCounter">{totalCartQuantity} </div>
            </div>
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
      <div>
        <nav>
          <ul className="mainNav">
            <li>
              <Link to="#">Men</Link>
            </li>
            <li>
              <Link to="#">Women</Link>
            </li>
            <li>
              <Link to="#">Unisex</Link>
            </li>
            <li>
              <Link to="#">Kids</Link>
            </li>
            <li>
              <Link to="#">Best Sellers</Link>
            </li>
            <li>
              <Link to="#">New Arrivals</Link>
            </li>
            <li className="active">
              <NavLink to="#">Offers</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav className="nav-white row">
          <ul className="mainNav col-md-4">
            <li>
              <Link to="#">Men</Link>
            </li>
            <li>
              <Link to="#">Clothing</Link>
            </li>
            <li>
              <Link to="#">Tops</Link>
            </li>
            <li>
              <Link to="#">Adidas</Link>
            </li>
            <span> / Adidas Black T-shirt</span>
          </ul>
        </nav>
      </div>
      <hr />
    </div>
  );
};

export default Header;
