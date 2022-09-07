import React, { useState } from "react";
import "../Soultions.css";
import "../UserGrowth/UserGrowth.css";
import img from "../../Image/app-growth.png";
import img1 from "../../Image/undraw.png";
import img2 from "../../Image/optimization.png";
import img3 from "../../Image/authentication.png";
import img4 from "../../Image/megaphone.png";
import img5 from "../../Image/idea.png";
import img6 from "../../Image/analytic.png";
import img7 from "../../Image/list.png";
import img8 from "../../Image/settings.png";
import plants6 from "../../Image/accept.png";
import plants7 from "../../Image/share.png";
import plants8 from "../../Image/share2.png";

import Slide from "../../Home/Slide";
import { Link } from "react-router-dom";
import Image4 from "../../Image/form.jpg";

export default function UserGrowth() {
  const [step, setstep] = useState(1);
  const gotoslide2 = () => {
    if (step === 1) {
      setstep(3);
    } else {
      setstep(step - 1);
    }
  };
  const gotoslide3 = () => {
    if (step === 3) {
      setstep(1);
    } else {
      setstep(step + 1);
    }
  };
  return (
    <>
      <div className="dimo">
        <div>
          <p className="demo">Profitably grow your App with the right users.</p>
          <p className="demo1">
            Our Google Ad specialists grow your App with the right users. Let a
            professional optimize your Google & Facebook Ads so that you achieve
            the desired results with a positive ROI.
          </p>
          <Link to="/User">
            {" "}
            <button className="demobtn" style={{ width: "350px" }}>
              Boost Your App's Users Now!{" "}
            </button>
          </Link>
        </div>
        <div>
          <img className=" demoimg" src={img} alt="img"></img>
        </div>
      </div>
      <div className="dche">
        <div>
          <p className="yche">Your Challenges</p>
          <p className="yche1"> ❌Unable to consume the budget</p>
          <p className="yche1">❌ Very high CPI</p>
          <p className="yche1">❌ Negative ROAS</p>
          <p className="yche1">❌Don’t understand Geo Targeting</p>
          <p className="yche1">❌Managing everything yourself</p>
          <p className="yche1"> ❌No support from Google or Facebook Ads</p>
          <p className="yche1"> ❌ Policy Violations</p>
        </div>
        <div className="color">
          <p className="yche">Our Solutions</p>
          <p className="yche1">
            ✅Ad campaign experts curate the best Ad creatives that deliver and
            convert
          </p>
          <p className="yche1">
            ✅ 8+ years of experience in Google Ads, search engine marketing,
            and Universal App Campaign
          </p>
          <p className="yche1">
            ✅ Data-backed Geo-targeting to reach the right target audience
          </p>
          <p className="yche1">
            ✅ Ad campaigns effectually optimize your cost-per-install (CPI)
          </p>
          <p className="yche1">
            ✅ Dedicated Account Manager for quick support
          </p>
          <p className="yche1">
            ✅ Ad Campaign experts resolve and prevent critical Policy
            Violations
          </p>
        </div>
      </div>
      <div className="start my-5">
        <p>What We Offer</p>
      </div>
      <div className="dche">
        <div className="acolor">
          <img className="aimg" src={img4} alt="img"></img>
          <p className="aatext">Strategic Geo-Targeting</p>
          <p className="aatext1">
            Our google ad specialists run geo-targeted campaigns on Google &
            Facebook to boost ROAS. We strategically break countries and target
            CPI to ensure uninterrupted user acquisition while meeting your
            KPIs.
          </p>
        </div>
        <div className="acolor1">
          <img className="aimg" src={img3} alt="img"></img>
          <p className="aatext">Data-Backed App Advertising</p>
          <p className="aatext1">
            Are you targeting the right audience through your Google Ad
            Campaigns? At lorem, our data-backed app advertising campaigns
            and analytical approaches maximize and transform your app business.
          </p>
        </div>
        <div className="acolor2">
          <img className="aimg" src={img2} alt="img"></img>
          <p className="aatext">Dedicated Account Manager</p>
          <p className="aatext1">
            Managing, analyzing, and optimizing your paid advertising efforts is
            a full-time task. Our 24x7 dedicated account manager provides
            complete support and takes care of your day-to-day campaign
            management.
          </p>
        </div>
        <div className="acolor3">
          <img className="aimg" src={img2} alt="img"></img>
          <p className="aatext">Ad campaigns To Optimize CPI</p>
          <p className="aatext1">
            Significantly improve your Google Ad campaigns! Our Google Ads
            management team optimizes your CPI using data-driven insights and
            localized creatives and solves account suspension or policy issues.
          </p>
        </div>
      </div>
      <div className="start my-5">
        <p>Innovative Features</p>
      </div>
      <div className="ourr">
        <div className="our">
          <div>
            <img className="oimg" src={img6} alt="img"></img>
          </div>
          <div>
            <p className="otext1">Ad Budget Management</p>
            <p className="otext">
              From setting your initial budget to ensuring your ad campaigns use
              the budget effectively, we got it all under control.
            </p>
          </div>
        </div>
        <div className="our">
          <div>
            <img className="oimg" src={img7} alt="img"></img>
          </div>
          <div>
            <p className="otext1">No Reservations</p>
            <p className="otext">
              No matter your ad earnings, we do not have any reservations about
              onboarding you.{" "}
            </p>
          </div>
        </div>
        <div className="our">
          <div>
            <img className="oimg" src={img8} alt="img"></img>
          </div>
          <div>
            <p className="otext1">Personalized Ad Creatives</p>
            <p className="otext">
              Our team understands your proposition and creates the
              best-performing ad creatives to improve CTR and conversions.
            </p>
          </div>
        </div>
        <div className="our">
          <div>
            <img className="oimg" src={img5} alt="img"></img>
          </div>
          <div>
            <p className="otext1">Solve Critical Policy Violation</p>
            <p className="otext">
              Contact our experts to solve Google Ads account suspensions and
              critical policy violations.
            </p>
          </div>
        </div>
      </div>
      <div className="dimo">
        <div>
          <p className="gtext" style={{ color: "blue" }}>
            DIGITAL AD CAMPAIGNS TO GROW<br></br>
          </p>
          <p className="gtext">Quality Users & App Installs</p>
          <p className="demo1">
            Quality users builts a successful app business! Hence, we at
            Lorem Ipsum, study your users and target them accurately.
          </p>
          <p className="demo1">
            We manage your Google ads and Facebook ads campaign with intent to
            optimize cost per install (CPI) by at least 20% to 30%.
          </p>
          <p className="demo1">
            Our optimization specialists track and monitor keywords, traffic,
            rankings, etc., to offer functional ways to increase your installs
            and improve your rankings and reviews.
          </p>
          <p className="demo1">
            We help you scale globally with localized ad campaigns through
            various ad management platforms for your app.
          </p>
        </div>
        <div>
          <img className="bimg" src={img1} alt="img"></img>
        </div>
        <div></div>
      </div>
      <div className="start">
        <p>The Journey with Lorem Ipsum in a snap.</p>
      </div>
      <div className="sign">
        <div className="signn">
          <p className="sign1">1</p>
          <p className="sign2">Share your Google Ads customer ID</p>
        </div>
        <div className="signn">
          <p className="sign1">2</p>
          <p className="sign2">
            Lorem Ipsum will share an MCC invite to your Ad account
          </p>
        </div>
        <div className="signn">
          <p className="sign1">3</p>
          <p className="sign2">Accept the invite and get started</p>
        </div>
      </div>
      {/*<div className="wrapper">*/}
      {/*  */}
      {/*    <div className="box container">*/}
      {/*      {step === 1 && (*/}
      {/*        <img*/}
      {/*          */}
      {/*          className="simg"*/}
      {/*          src={plants6}*/}
      {/*          alt="logo"*/}
      {/*        />*/}
      {/*      )}*/}
      {/*      {step === 2 && (*/}
      {/*        <img*/}
      {/*        className="simg1"*/}
      {/*          src={plants7}*/}
      {/*          alt="logo"*/}
      {/*        />*/}
      {/*      )}*/}
      {/*      {step === 3 && (*/}
      {/*        <img*/}
      {/*        className="simg1"*/}
      {/*          src={plants8}*/}
      {/*          alt="logo"*/}
      {/*        />*/}
      {/*      )}*/}
      {/*    </div>*/}

      {/*  <div className="box1">*/}
      {/*    <div className="indicator1 my-2" onClick={gotoslide2}></div>*/}
      {/*    <div className="indicator1 my-2" onClick={gotoslide3}></div>*/}
      {/*   </div>*/}
      {/*</div>*/}
      <Slide/>
      <div className="form my-5">
        <div>
          <p className="formtext">Get Started With Lorem Ipsum Today</p>
          <p className="formtext1">
            Lorem Ipsum is more than an Adtech Platform. We are a go-to place for
            publishers. Setup a free demo to know more!
          </p>
          <img className="pics" src={Image4} alt="images"></img>
        </div>
        <div className="form1">
          <h1>Talk to a Growth Expert!</h1>
          <div className="input">
            <label for="fname">Name</label>
            <br></br>
            <input className="input" type="text" id="fname" name="fname" />
          </div>
          <br></br>
          <div className="input">
            <label for="fname">Email </label>
            <br></br>
            <input className="input" type="text" id="fname" name="fname" />
          </div>
          <br></br>
          <div className="input">
            <label for="fname">Phone:</label>
            <br></br>
            <input className="input" type="text" id="fname" name="fname" />
          </div>
          <br></br>
          <div className="input">
            <label for="fname">App Link:</label>
            <input className="input" type="text" id="fname" name="fname" />
          </div>
          <div className="my-4">
            <button className="btn1">Set Up Demo</button>
          </div>
        </div>
      </div>
    </>
  );
}
