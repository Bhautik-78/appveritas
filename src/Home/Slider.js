import React from "react";
import "./Home.css";
import Divider from "@mui/material/Divider";
import Image from "../Image/mobile.jpg";
import Image1 from "../Image/laptp.jpg";
import Image2 from "../Image/Google.jpg";
import {Link} from "react-router-dom";

export default function Slider() {
    return (
        <>
            <div className="apps my-5">
                <div >
                    <h1 className="my-5">Why Lorem Ipsum?</h1>
                    <p className="atext">
                        Lorem Ipsum is the first publisher-centric company with a mission to
                        help app developers and publishers turn their apps into a profitable
                        business.
                    </p>
                    <p className="atext">
                        {" "}
                        With vast expertise in the mobile ecosystem, we help you with
                        Ideation, User Acquisition, Monetization, and more.
                    </p>
                    <p className="atext">
                        On top of increasing your ad revenue, we truly care about your users
                        and we’re here to grow your business for the long run
                    </p>
                    <Link to="/">
                        {" "}
                        <button className="button1">GET IN TOUCH</button>
                    </Link>
                </div>
                <div>
                    <div className="divider my-5">
                        <p className="textt my-3" style={{fontSize: "36px"}}>
                            1,500+{" "}
                        </p>

                        <Divider
                            sx={{
                                borderLeft: "1px solid black",
                                height: "77px",
                                marginTop: "32px",
                            }}
                        />
                        <p className="dtext">
                            Across different Categories, both on Google Playstore and App
                            Store
                        </p>
                    </div>
                    <div className="divider">
                        <p className="textt my-4" style={{fontSize: "25px"}}>
                            5 Billion +{" "}
                        </p>

                        <Divider
                            sx={{
                                borderLeft: "1px solid black",
                                height: "77px",
                                marginTop: "32px",
                            }}
                        />
                        <p className="dtext">
                            Across different Categories, both on Google Playstore and App
                            Store
                        </p>
                    </div>
                    <div className="divider">
                        <p className="textt my-3" style={{fontSize: "45px"}}>
                            250 +
                        </p>

                        <Divider
                            sx={{
                                borderLeft: "1px solid black",
                                height: "77px",
                                marginTop: "32px",
                            }}
                        />
                        <p className="dtext">
                            Across different Categories, both on Google Playstore and App
                            Store
                        </p>
                    </div>
                </div>
            </div>
          <div>
            <div className="blog">
                <h2 className="blog2">BLOG</h2>
                <h3 className="blog1 my-4">Read Our Latest Articles</h3>
            </div>
            <div className="pic">
                <div>
                    <img className="pics" src={Image} alt="images"></img>
                    <div className="container">
                      <p className="ptext">
                        Disallowed Interstitial Implementations
                      </p>
                      <p className="ptext1">
                        Google AdMob may choose to penalize your account due to disallowed &
                        intrusive interstitials ads obstructing content.... <br/>
                      </p>
                    </div>
                </div>
                <div>
                    <img className="pics" src={Image1} alt="images"></img>
                  <div className="container">
                    <p className="ptext">
                        {" "}
                        Increase AdMob eCPM in the Maturity Phase of your App
                    </p>
                    <p className="ptext1">
                        Monitor ad formats, devices & GEOs while applying monetization
                        strategies to increase AdMob eCPM in the Maturity...
                    </p>
                  </div>
                </div>
                <div>
                    <img className="pics" src={Image2} alt="images"></img>
                  <div className="container">
                    <p className="ptext">Google AdMob vs ironSource</p>
                    <p className="ptext1">
                        Find out which ad network is better, as we at Lorem ipsum compare the
                        two leading ad networks – Google AdMob vs...
                    </p>
                  </div>
                </div>
            </div>
            <div className="bun">
                {" "}
                <Link to="/Blog">
                    <button className="button1 my-3">Check all Articles</button>
                </Link>
            </div>
          </div>
        </>
    );
}
