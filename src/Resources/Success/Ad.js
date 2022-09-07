import React from "react";
import "../Success/Success.css";
import { Link } from "react-router-dom";
import img01 from "../Success/Imgess/img01.png";
import img02 from "../Success/Imgess/img02.png";
import img03 from "../Success/Imgess/img03.png";
import img04 from "../Success/Imgess/img04.png";
import img05 from "../Success/Imgess/img05.png";
import img06 from "../Success/Imgess/img06.png";
import img018 from "../Success/Imgess/img018.png";
import img019 from "../Success/Imgess/img019.png";

export default function Ad() {
  return (
    <>
      <div>
        <h3 className="midel" style={{ color: "blue" }}>
          LOREM'S CASE STUDIES
        </h3>
      </div>
      <div>
        <h1 className="midel">Success Stories</h1>
      </div>
      <div>
        <h3 className="midel">
          Since inception, we have helped our publishers across multiple
          industry verticals see massive changes, be it the increase in their
          revenue or their <br />
          App Business growth. You can read more about our happy publishers and
          their stories.
        </h3>
      </div>
      <div className="admob">
        <div>
          <Link to="/Success">
            {" "}
            <button className="abtn">All</button>
          </Link>
        </div>
        <div>
          <Link to="/Ad">
            {" "}
            <button className="abtn">Ad Revenue Optimization</button>
          </Link>
        </div>
        <div>
          <Link to="/Users">
            <button className="abtn">User Growth</button>
          </Link>
        </div>
      </div>
      <div className="successimg">
        <div>
          <img className="sucessimg1" src={img01} alt="img"></img>

          <h3>Increased eCPM by 100%</h3>
        </div>
        <div>
          <img className="sucessimg1" src={img02} alt="img"></img>
          <h3>Increased Average Revenue by 48%</h3>
        </div>
        <div>
          <img className="sucessimg1" src={img03} alt="img"></img>
          <h3>Increased average eCPM by 143%</h3>
        </div>
        <div>
          <img className="sucessimg1" src={img04} alt="img"></img>
          <h3>Increased eCPM by 76%</h3>
        </div>
        <div>
          <img className="sucessimg1" src={img05} alt="img"></img>
          <h3>Increased eCPM by 34%</h3>
        </div>
        <div>
          <img className="sucessimg1" src={img06} alt="img"></img>
          <h3>Increased eCPM by 79%</h3>
        </div>

        <div>
          <img className="sucessimg1" src={img018} alt="img"></img>
          <h3>Increased eCPM by 50%</h3>
        </div>

        <div>
          <img className="sucessimg1" src={img019} alt="img"></img>
          <h3>Increased eCPM by 57%​</h3>
        </div>
      </div>
      <div>
        <h1 className="midel">Interested in working with us?</h1>
      </div>
      <div className="bun">
        {" "}
        <Link to="/Blog">
          <button className="button1">GET IN TOUCH!</button>
        </Link>
      </div>
    </>
  );
}
