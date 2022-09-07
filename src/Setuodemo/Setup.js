import React from "react";
import img1 from "../Image/lock.png";
import img2 from "../Image/Graf.png";
import img3 from "../Image/setting.png";
import img4 from "../Image/what.jpg";
import img5 from "../Image/accout.png";
import img6 from "../Image/why.png";
import img7 from "../Image/faq.png";
import { Link } from "react-router-dom";
export default function Setup() {
  return (
    <>
      <div className="form my-5">
        <div>
          <p className="formtext " style={{ width: "500px",marginLeft:"0rem" }}>
            Grow your ad revenue by upto 40% with a Google Channel Partner!
          </p>
          <p className="formtext1">✅ Premium Demand</p>
          <p className="formtext1">✅ Higher Fill Rates</p>
          <p className="formtext1">✅ Higher eCPM</p>
          <p className="formtext1">✅ Higher Revenue!</p>{" "}
        </div>
        <div className="form1 p-5">
          <div className="input">
            <label for="fname">Name</label>
            <br></br>
            <input className="input" type="text" id="fname" name="fname" />
          </div>
          <br></br>
          <div className="input">
            <label for="fname">First name:</label>
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
            <label for="fname">App/Website Link</label> <br></br>
            <select className="input" name="cars" id="cars">
              <option value="volvo">-Select-</option>
              <option value="volvo">App</option>
              <option value="saab">Website</option>
            </select>
            <br></br>
          </div>
          <br></br>
          <div className="input">
            <label for="fname">State(Country):</label>
            <br></br>
            <input className="input" type="text" id="fname" name="fname" />
          </div>
          <br></br>
          <div className="input">
            <label for="fname">FEstimated Monthly Revenue (USD) </label>
            <br></br>
            <input className="input" type="text" id="fname" name="fname" />
            Usd
          </div>
          <Link to="/Setup">
            <div className="btn">
              <button className="btn1">Set Up Demo</button>
            </div>
          </Link>
        </div>
      </div>
      <div className="start my-4">
        <p>All the good things you get access to.</p>
      </div>
      <div className="sign">
        <div className="stg">
          <img className="immg" src={img3} alt="img"></img>
          <p className="sign2">Best-In-Class Optimization</p>
          <p className="sign3">
            Years of experience being Google AdX Partners & AdMob Veterans
          </p>
        </div>
        <div className="stg1">
          <img className="immg" src={img1} alt="img"></img>
          <p className="sign2">Policy Compliance Support</p>
          <p className="sign3">
            Resolve your AdMob or AdSense policy violations within minutes
          </p>
        </div>
        <div className="stg2">
          <img className="immg" src={img5} alt="img"></img>
          <p className="sign2">Dedicated Account Managers</p>
          <p className="sign3">
            Get a dedicated account manager for all your needs
          </p>
        </div>
      </div>

      <div className="sign">
        <div className="stg">
          <img className="immg" src={img2} alt="img"></img>
          <p className="sign2">Real-time Dashboard</p>
          <p className="sign3">
            Get real-time data and insights through Lorem’s console
          </p>
        </div>
        <div className="stg1">
          <img className="immg" src={img4} alt="img"></img>
          <p className="sign2">WhatsApp Support</p>
          <p className="sign3">
            Get a quick response to your queries with our WhatsApp Support
          </p>
        </div>
      </div>
      <div className="dimo">
        <div>
          <p className="gtext">
            Just some reasons why publishers partner with us
          </p>
          <p className="gtext1">Google Ad Exchange partner</p>
          <p className="demo1">
            We are a trusted Google partner which ensures authenticity, policy
            compliance and scale for our publishers.
          </p>
          <p className="gtext1">Quick Payments</p>
          <p className="demo1">
            Get payments between the 22nd-30th of every month so that your
            monthly cash flow cycle is not affected.
          </p>
          <p className="gtext1">AdX expertise for mobile apps</p>
          <p className="demo1">
            We specialize in AdX for apps. Our team includes veterans working in
            the app ecosystem for over a decade.
          </p>
          <p className="gtext1">Get Actionable Insights</p>
          <p className="demo1">
            Get performance optimization inputs, app ideas, and business
            insights to grow your business.
          </p>
          <p className="gtext1">No SDK integration</p>
          <p className="demo1">
            Integrating our platform takes 5 min. You are ready to go by adding
            a few lines of code to your app.
          </p>
          <Link to="/Setup">
            {" "}
            <button className="demobtn">Connect Now!</button>
          </Link>
        </div>
        <div>
          <img className="bimg" src={img6} alt="img"></img>
        </div>
      </div>
      <div className="dimo">
        <div>
          <p className="gtext">Frequently Ask Questions</p>
          <div>
            <div className="show">
              <p className="hide " style={{ color: "blue" }}>
                How to get started with app/web monetization?{" "}
              </p>
              <p>+</p>
            </div>

            <p className="hide1">
              Visit our Contact Us page and provide the following details: Name,
              work email, phone number, app/website link and your estimated
              monthly revenue. Our team will contact you for further steps.
            </p>
          </div>
          <div>
            <div className="show">
              <p className="hide ">What are the minimum requirements? </p>
              <p>+</p>
            </div>

            <p className="hide1">
              We accept all apps/websites which comply with Google Play and
              AdMob policies.
            </p>
          </div>
          <div>
            <div className="show">
              <p className="hide ">What is the payment timeline? </p>
              <p>+</p>
            </div>

            <p className="hide1">
              We pay every 30 days, between the 21st-30th of every month, just
              like AdMob.
            </p>
          </div>
          <div>
            <div className="show">
              <p className="hide ">How do I track performance & revenue? </p>
              <p>+</p>
            </div>

            <p className="hide1">
              We provide you with a reporting dashboard where you can see
              detailed stats on both performance & revenue. The data refresh is
              currently every 15 minutes.
            </p>
          </div>
          <div>
            <div className="show">
              <p className="hide ">
                How to choose best performing ad formats?{" "}
              </p>
              <p>+</p>
            </div>

            <p className="hide1">
              We have a team of monetization & Ad Operations experts here to
              help you. Just Contact Us and we can take it from there.
            </p>
          </div>
        </div>
        <div>
          <img className="faq" src={img7} alt="img"></img>
        </div>
      </div>
    </>
  );
}
