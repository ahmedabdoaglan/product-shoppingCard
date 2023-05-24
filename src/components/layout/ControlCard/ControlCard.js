import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Carousel from "./Carousel.js";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
class ControlCard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 imgControl">
          <div className="imgControlOne">
            <img
              src="images/shoose.jpg"
              alt="imgshoose"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div className="carousel" style={{ margin: "20px 15px 20px 15px" }}>
            <Carousel />
          </div>
        </div>
        <div className="col-md-6 detailsCard">
          <div className="img-control">
            <img src="images/adidas1.png" alt="imgadidas" />
          </div>
          <div style={{ margin: "20px 0px 20px 0px" }}>
            <h4>Lorem ipsum dolor sit amet, consectetuer </h4>
          </div>
          <div
            style={{
              color: "#A7A9AC",
              fontWeight: "500",
              marginBottom: "20px",
            }}
          >
            men
          </div>
          <div className="shapeStar mt-2" style={{ display: "flex" }}>
            <AiFillStar style={{ color: "#FFB900", fontSize: "30px" }} />{" "}
            <AiFillStar style={{ color: "#FFB900", fontSize: "30px" }} />{" "}
            <AiFillStar style={{ color: "#FFB900", fontSize: "30px" }} />{" "}
            <AiFillStar style={{ color: "#FFB900", fontSize: "30px" }} />
            <AiOutlineStar
              style={{
                color: "#A7A9AC",
                fontSize: "30px",
              }}
            />
            <div
              style={{
                fontWeight: "700",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              4.2 of 5
            </div>
            <div
              style={{
                color: "#575756",
                fontWeight: "500",
                marginBottom: "20px",
              }}
            >
              22 Rates
            </div>
          </div>
          <div className="threeSec row">
            <div className="oneSec col-md-3">
              <h5 style={{ color: "#542E90", fontWeight: "700" }}> 9,999 LE</h5>
            </div>

            <div
              className="oneSec col-md-3"
              style={{
                textDecoration: "line-through",
                color: "#A7A9AC",
                fontWeight: "500",
              }}
            >
              9,999 LE
            </div>
            <div
              className="twoSec col-md-3"
              style={{
                width: "85px",
                height: "25px",
                backgroundColor: "#fff100",
                fontWeight: "500",
              }}
            >
              30% off
            </div>
          </div>
          <hr style={{ margin: "20px 0px 20px 0px", width: "80%" }} />
          <div className="styleSize">
            <div
              className="textStyleTitle"
              style={{
                fontSize: "20px",
                fontWeight: "600",
                margin: "20px 0px 20px 0px ",
              }}
            >
              size
            </div>
            <div className="styleCircle" style={{ display: "flex" }}>
              <div
                className="oneCircle"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "1px solid #000",
                  marginRight: "10px",
                }}
              >
                <div
                  className="textCircle"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    width: "100%",
                    color: "#542E90",
                    fontWeight: "400",
                  }}
                >
                  small
                </div>
              </div>
              <div
                className="oneCircle"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "1px solid #000",
                  marginRight: "10px",
                }}
              >
                <div
                  className="textCircle"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    width: "100%",
                    color: "#542E90",
                    fontWeight: "400",
                  }}
                >
                  medium
                </div>
              </div>
              <div
                className="oneCircle"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "1px solid #000",
                  marginRight: "10px",
                  backgroundColor: "#ECECEC",
                }}
              >
                <div
                  className="textCircle"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    width: "100%",
                    color: "#542E90",
                    fontWeight: "400",
                  }}
                >
                  large
                </div>
              </div>
              <div
                className="oneCircle"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "1px solid #000",
                  marginRight: "10px",
                }}
              >
                <div
                  className="textCircle"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    width: "100%",
                    color: "#542E90",
                    fontWeight: "400",
                  }}
                >
                  x large
                </div>
              </div>
              <div
                className="oneCircle"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  border: "1px solid #000",
                  marginRight: "10px",
                }}
              >
                <div
                  className="textCircle"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    width: "100%",
                    color: "#542E90",
                    fontWeight: "400",
                  }}
                >
                  xx large
                </div>
              </div>
            </div>
            <hr style={{ margin: "20px 0px 20px 0px", width: "80%" }} />
            <div className="styleSize">
              <div
                className="textStyleTitle"
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  margin: "20px 0px 20px 0px ",
                }}
              >
                Color
              </div>
              <div className="styleCircle" style={{ display: "flex" }}>
                <div
                  className="oneCircle"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    border: "1px solid #000",
                    marginRight: "10px",
                    backgroundColor: "#000",
                  }}
                ></div>
                <div
                  className="oneCircle"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    border: "1px solid #000",
                    marginRight: "10px",
                    backgroundColor: "#fff",
                  }}
                ></div>
                <div
                  className="oneCircle"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    border: "1px solid #000",
                    marginRight: "10px",
                    backgroundColor: "#f0f",
                  }}
                ></div>
              </div>
              <hr style={{ margin: "20px 0px 20px 0px", width: "80%" }} />
              <div className="styleSize">
                <div
                  className="textStyleTitle"
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    margin: "20px 0px 20px 0px ",
                  }}
                >
                  Quantity
                </div>
              </div>
              <div
                className="quantity"
                style={{
                  display: "flex",
                  backgroundColor: "#F5F5F5",
                  width: "160px",
                  borderRadius: "20px",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    heigth: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#fff100",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "50px",
                  }}
                >
                  +
                </div>
                <div>1</div>
                <div
                  style={{
                    width: "30px",
                    heigth: "30px",
                    borderRadius: "50%",
                    backgroundColor: "#fff100",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "50px",
                  }}
                >
                  -
                </div>
              </div>
              <div
                className="addCard"
                style={{ display: "flex", margin: "20px 0 20px 0px" }}
              >
                <div style={{ marginRight: "50px" }}>
                  {" "}
                  <Button variant="info"> Add to card</Button>
                </div>
                <div>
                  {" "}
                  <Button variant="dark">Pickup from store</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ControlCard;
