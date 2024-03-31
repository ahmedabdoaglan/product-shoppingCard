import React from "react";
import { NavLink, Link } from "react-router-dom";
const BottomHeader = () => {
  return (
    <div className="header">
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

export default BottomHeader;
