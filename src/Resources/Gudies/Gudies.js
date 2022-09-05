


import React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/img1.png";

export default function Gudies() {
  return (
    <>
      <div>
        <div className="adxcolor">
          <p className="adxtext">Guides</p>

         
        </div>
      </div>
      <div className="himges">
        <div className="hhover">
          <img className="himg" src={img1} alt="img"></img>
          <div className="hpadding">
            <p className="htext">
              A Guide on Google Ad Exchange Publisher Policies & Restrictions
            </p>
            <p className="htext1">
              Unable to adhere with the Google AdX policies and restrictions?
              Read this article to learn more or connect with us!
            </p>
          </div>
        </div>
      </div>
      <div className="bun">
        {" "}
        <Link to="/Setup">
          <button className="button1">Know More</button>
        </Link>
      </div>
      
    </>
  );
}
