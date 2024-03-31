import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
const TopHeader = () => {
  return (
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
          Valentine’s Day Offers! Buy Two Get One Free<span>Shop Now</span>{" "}
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
  );
};

export default TopHeader;
