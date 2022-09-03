import React from "react";
import "../Adx/Adx.css";

import img48 from "../../images/img44.png";
import img43 from "../../images/img43.png";

export default function AppGrowth() {
  return (
    <>
      <div>
        <div className="adxcolor">
          <p className="adxtext">App Growth</p>

          <div className="adxtext1">
            <div>
              <p>Home</p>
            </div>
            <div>
              <p>Archive "App Growth"</p>
            </div>
          </div>
        </div>
      </div>
      <div className="himges">
        <div className="hhover">
          <img className="himg" src={img48} alt="img"></img>
          <div className="hpadding">
            <p className="htext">
              Google AdMob VS. AdX: Choosing the best monetization platform
            </p>
            <p className="htext1">
              With a huge growth in the mobile app industry over the past few
              years, mobile app downloads are…
            </p>
          </div>
        </div>
        <div className="hhover">
          <img className="himg" src={img43} alt="img"></img>
          <div className="hpadding">
            <p className="htext">
              7 Best Mobile App Monetization Platforms in 2022
            </p>
            <p className="htext1">
              Wondering which is the right app monetization platform for your
              app? Here is a list of the 7 best app…
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
