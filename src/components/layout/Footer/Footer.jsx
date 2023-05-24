import React from "react";
import "./Footer.scss";
import {
  ImFacebook,
  ImLinkedin2,
  ImInstagram,
  ImTwitter,
} from "react-icons/im";
import { SiVisa } from "react-icons/si";
import { RiMastercardFill } from "react-icons/ri";
import { HiCash } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="footer row">
      <div className="footerText col-md-6">
        <div className="headText">yeshtry</div>
        <div className="paragraphText">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat.
          </p>
          <p>
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
            autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla. Lorem ipsum
            dolor sit amet, consectetuer adipiscing elit, sed dia{" "}
          </p>
          <p>
            {" "}
            m nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut wisi enim ad minim veniam, quis{" "}
          </p>
        </div>
      </div>
      <div className="footerSocial  col-md-6">
        <div className="headSubscribe">Subscribe to our newsletter</div>
        <div className="fieldMail">
          <div className="enterMail">
            <input type="email" name="mail" placeholder="Enter Your Mail" />
            <button>subscribe</button>
          </div>
        </div>
        <div className="socialLink">
          <div className="communication">
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Track Order</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Sell With Us</li>
              <li>Shipping And Returns</li>
            </ul>
          </div>
          <div className="social">
            <ul>
              <li>
                <ImFacebook
                  style={{
                    marginRight: "5px",
                    fontSize: "30px",
                    backgroundColor: "#3b5998",
                    padding: "3px",
                  }}
                />
                /YESHTERY
              </li>
              <li>
                <ImLinkedin2
                  style={{
                    marginRight: "5px",
                    fontSize: "30px",
                    backgroundColor: "#0072b1",
                    padding: "3px",
                  }}
                />
                /YESHTERY
              </li>
              <li>
                <ImInstagram
                  style={{
                    marginRight: "5px",
                    fontSize: "30px",
                    backgroundColor: "#d62976",
                    padding: "3px",
                  }}
                />
                /YESHTERY
              </li>
              <li>
                <ImTwitter
                  style={{
                    marginRight: "5px",
                    fontSize: "30px",
                    backgroundColor: "#00acee",
                    padding: "3px",
                  }}
                />
                /YESHTERY
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr style={{ color: "#ffffff" }} />
      <div className="copyRight">
        <div className="CopyRightText">
          {" "}
          &#169; 2021 yeshtery, all rights reserved.
        </div>
        <div className="CopyRightLink">
          <HiCash
            style={{
              marginRight: "15px",
              fontSize: "60px",
              backgroundColor: "#ffffff",
              color: "#3b5998",
              padding: "3px",
            }}
          />
          <SiVisa
            style={{
              marginRight: "15px",
              fontSize: "60px",
              backgroundColor: "#ffffff",
              color: "#3b5998",
              padding: "3px",
            }}
          />
          <RiMastercardFill
            style={{
              fontSize: "60px",
              backgroundColor: "#ffffff",
              color: "#3b5998",
              padding: "3px",
            }}
          />
        </div>
        <div className="CopyRightLogo">
          <span style={{ marginRight: "15px" }}>Powered By</span>
          <img src="images/logoNavnas.png" alt="logNavnas" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
