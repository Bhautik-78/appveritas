import React from "react";
import "./../Soultions.css";
import "./Manged.css";
import img from "../../Image/join-appbroda.png";
import img1 from "../../Image/idea.png";
import img2 from "../../Image/analytic.png";
import img3 from "../../Image/search.png";
import img4 from "../../Image/settings.png";
import img5 from "../../Image/listt.png";
import img6 from "../../Image/free.png";
import img7 from "../../Image/trend.png";
import img8 from "../../Image/vs.png";
import img9 from "../../Image/insight.png";
import img10 from "../../Image/integration.png";
import img11 from "../../Image/list.png";
import img12 from "../../Image/cloud.png";
import Image4 from "../../Image/newpic.png";
import { Link } from "react-router-dom";

export default function Manged() {
  return (
    <>
      <div className="dimo">
        <div>
          <p className="demo">Actionable Intelligence for your App Business!</p>
          <p className="demo1">
            Scraper – an app store optimization tool by Lorem Ipsum to help with
            mobile app optimization. Use it to identify top trending niches,
            increase organic installs and stay ahead of the competition!
          </p>
          <Link to="/Setup">
            {" "}
            <button className="demobtn">Join Our Bata! </button>
          </Link>
        </div>
        <div>
          <img className=" demoimg" src={img} alt="img"></img>
        </div>
      </div>
      <div className="dche">
        <div>
          <p className="yche">Your Challenges</p>
          <p className="yche1"> ❌ Not sure which app to develop next</p>
          <p className="yche1">❌ No way to understand current market trends</p>
          <p className="yche1">❌ncreasing difficulty of ASO</p>
          <p className="yche1">❌SDK integration for every ad Partner</p>
          <p className="yche1">❌ User Research takes eternity</p>
          <p className="yche1"> ❌ No way to track competitors</p>
        </div>
        <div className="color">
          <p className="yche">Our Solutions</p>
          <p className="yche1">
            ✅ Identify top trending niches with high traffic & low competition
          </p>
          <p className="yche1">
            ✅ Ride on the trends on Play Store and App Store
          </p>
          <p className="yche1">
            ✅ Analyze how your app is discovered and optimize for the best
            keywords
          </p>
          <p className="yche1">
            ✅ Analyze your app reviews for better User Research and feature
            ideas
          </p>

          <p className="yche1">
            ✅ Explore the top competitors for your app and track them daily
          </p>
          <p className="yche1">
            ✅ One stop solution for ASO, competitor tracking, and market
            research
          </p>
        </div>
      </div>
      <div className="ssimg my-5">
        <div className="container">
          <p className="sstext2">About Scraper:</p>
          <p className="sstext3">
            Scraper provides you insightful data to leverage your app’s growth
            with App Store Optimization, competitive analysis and in-depth
            research. With this appstore intelligence tool, you can analyze the
            current trends in the app development market, track your
            competitors, and generate country-wise growth plans.
          </p>
          <p className="sstext3">
            Save $$ with our free App store Optimization tool, while staying
            ahead of your competitors. No need to hire expensive agencies when
            you can get the same results for free with our Market intelligence
            tool.
          </p>
          <p className="sstext3">
            {" "}
            With a unified dashboard and simple to use workflow, you can examine
            your own app, your competitors’ apps, keywords that drive downloads,
            discover keywords to improve search campaigns, statistically analyze
            the performance of competitors’ keywords and identify new prospects,
            including localization and similar keywords.
          </p>
        </div>
      </div>
      <div className="start">
        <p>
          Here Are Some Innovative Features of Our Market Intelligence Tool:
        </p>
      </div>

      <div className="heetext">
        <div className="hetextt">
          <div>
            <img className="heimg" src={img3} alt="img"></img>
          </div>
          <div>
            <p className="hetext1">App Search</p>
            <p className="hetext">
              Get historical data for any app on Google Play Store or Apple App
              Store
            </p>
          </div>
        </div>
        <div className="hetextt">
          <div>
            <img className="heimg" src={img2} alt="img"></img>
          </div>
          <div>
            <p className="hetext1">Top Charts</p>
            <p className="hetext">
              Get country wise, genre wise and collection wise top chart results
              on a single dashboa
            </p>
          </div>
        </div>
        <div className="hetextt">
          <div>
            <img className="heimg" src={img5} alt="img"></img>
          </div>
          <div>
            <p className="hetext1">Watchlist</p>
            <p className="hetext">
              Create a watchlist for your app and your competitor’s app to get
              detailed statistic on average daily, weekly and monthly installs,
              thier increment, reviews received, app ratings, etc
            </p>
          </div>
        </div>
      </div>
      <div className="ourr">
        <div className="our">
          <div>
            <img className="oimg" src={img4} alt="img"></img>
          </div>
          <div>
            <p className="otext1">ASO Tool</p>
            <p className="otext">
              Get free access to the premium features of an ASO tool like
              keyword discovery, rank tracking, traffic generation, difficulty
              level of each keyword and so much more
            </p>
          </div>
        </div>
        <div className="our">
          <div>
            <img className="oimg" src={img1} alt="img"></img>
          </div>
          <div>
            <p className="otext1">Crowdsourced Features</p>
            <p className="otext">
              We aim at building a cohesive tool aligned with your requirements.
              Get the features you need by posting feature requests in feedback
              section
            </p>
          </div>
        </div>
      </div>

      <div className="start my-3">
        <p>Why Use Scraper?</p>
      </div>

      <div className="fche">
        <div className="fcolor">
          <img className="fimg" src={img6} alt="img"></img>
          <p className="ftext">100% Free Tool</p>
        </div>
        <div className="fcolor1">
          <img className="fimg" src={img7} alt="img"></img>
          <p className="ftext">Unveil Current Market Trends</p>
        </div>
        <div className="fcolor2">
          <img className="fimg" src={img8} alt="img"></img>
          <p className="ftext">Study Your Competitors</p>
        </div>
        <div className="fcolor2">
          <img className="fimg" src={img9} alt="img"></img>
          <p className="ftext">
            Actionable insights for your Target Geography{" "}
          </p>
        </div>
      </div>
      <div className="tche">
        <div className="tcolor">
          <img className="timg" src={img10} alt="img"></img>
          <p className="ttext">Optimize, Track and Analyse Keywords</p>
        </div>
        <div className="tcolor1">
          <img className="timg" src={img11} alt="img"></img>
          <p className="ttext">Add Up To 10 Competitors on Your Watchlist</p>
        </div>
        <div className="tcolor2">
          <img className="timg" src={img12} alt="img"></img>
          <p className="ttext">Explore Unlimited Number of Apps & Keywords</p>
        </div>
      </div>
      <div className="form my-5">
        <div>
          <p className="formtext">Join our Beta Program Now!​</p>
          <img className="pics" src={Image4} alt="images"></img>
        </div>
        <div className="form1">
          <h1>Talk to a Growth Expert!</h1>
          <div className="input">
            <label for="fname">Name</label>
            <br></br>
            <input className="input" type="text" id="fname" name="fname" />
          </div>
          <br></br> <br></br>
          <div className="input">
            <label for="fname">Email </label>
            <br></br>
            <input className="input" type="text" id="fname" name="fname" />
          </div>
          <br></br>
          <br></br>
          <div className="input">
            <label for="fname">Phone:</label>
            <br></br>
            <input className="input" type="text" id="fname" name="fname" />
          </div>
          <br></br>
          <br></br>
          <div className="input">
            <label for="fname">App Link:</label>
            <br></br>
            <input className="input" type="text" id="fname" name="fname" />
          </div>
          <br></br>
          <br></br>
          <div className="btn">
            {" "}
            <button className="btn1">Set Up Demo</button>
          </div>
        </div>
      </div>
    </>
  );
}
