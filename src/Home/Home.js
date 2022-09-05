import React from "react";
import "./Home.css";
import Image from "../Image/computer.png";
import Image1 from "../Image/iot.png";
import Image2 from "../Image/til.png";
import Image3 from "../Image/poket.png";
import Image4 from "../Image/appx.png";
import Slider from "./Slider";
import Form from "./Form";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="header">
        <div className="text3">
          <p className="text">
            Get down to making great Apps because we take care of the rest!​
          </p>

          <p className="text1">
            The 1st platform that fuels your entire mobile app’s growth across
            App Ideation, User Acquisition, Monetization & Analytics
          </p>
          <Link to="/Setup">
            <button className="button">Setup A Demo!</button>
          </Link>
        </div>
        <div>
          <img className="img" src={Image} alt="images"></img>
        </div>
      </div>
      <div>
        <h2 className="midel">Empowering Businesses Around The World</h2>
      </div>
      <div className="img4">
        <div>
          <img className="logo" src={Image1} alt="images"></img>
        </div>
        <div>
          <img className="logo" src={Image2} alt="images"></img>
        </div>
        <div>
          <img className="logo" src={Image3} alt="images"></img>
        </div>
        <div>
          <img className="logo" src={Image4} alt="images"></img>
        </div>
      </div>
      {/* <Slide/> */}
      <Slider />
      <Form />
    </>
  );
}
