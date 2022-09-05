import React from "react";
import "../Success/Success.css";
import { Link } from "react-router-dom";
import img01 from '../Success/Imgess/img01.png';
import img02 from '../Success/Imgess/img02.png';
import img03 from '../Success/Imgess/img03.png';
import img04 from '../Success/Imgess/img04.png';
import img05 from '../Success/Imgess/img05.png';
import img06 from '../Success/Imgess/img06.png';
import img07 from '../Success/Imgess/img07.png';
import img08 from '../Success/Imgess/img08.png';
import img09 from '../Success/Imgess/img09.png';
import img010 from '../Success/Imgess/img010.png';
import img011 from '../Success/Imgess/img011.png';
import img012 from '../Success/Imgess/img012.png';
import img013 from '../Success/Imgess/img013.png';
import img014 from '../Success/Imgess/img014.png';
import img015 from '../Success/Imgess/img015.png';
import img018 from '../Success/Imgess/img018.png';
import img019 from '../Success/Imgess/img019.png';


export default function Success() {
  return (
    <>
      <div>
        <h3 className="midel" style={{color:"blue"}}>APPBRODA'S CASE STUDIES</h3>
      </div>
      <div>
        <h1 className="midel">Success Stories</h1>
      </div>
      <div>
        <h3 className="midel">Since inception, we have helped our publishers across multiple industry verticals see massive changes, be it the increase in their revenue or their <br/>App Business growth. You can read more about our happy publishers and their stories.</h3>
      </div>
      <div className="admob" >
        <div>
          <Link to="/Success">
            {" "}
            <button className="abtn" >All</button>
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
        <img   className="sucessimg1"src={img03} alt="img"></img>
        <h3>Increased average eCPM by 143%</h3>
        </div>
        <div>
        <img   className="sucessimg1"src={img04} alt="img"></img>
        <h3>Increased eCPM by 76%</h3>
        </div>
        <div>
        <img   className="sucessimg1"src={img05} alt="img"></img>
        <h3>
Increased eCPM by 34%</h3>
        </div>
        <div>
        <img   className="sucessimg1"src={img06} alt="img"></img>
        <h3>
Increased eCPM by 79%</h3>
        </div>
        <div>
        <img   className="sucessimg1"src={img07} alt="img"></img>
        <h3>Increase ROAS by 30%</h3>
        </div>
        <div>
        <img   className="sucessimg1"src={img08} alt="img"></img>
        <h3>Optimized CPI by 50%</h3>
        </div>
        <div>
        <img   className="sucessimg1"src={img09} alt="img"></img>
        <h3>I
Increase ROAS by 35%</h3>
        </div>
        <div>
        <img   className="sucessimg1"src={img010} alt="img"></img>
        <h3>Monthly Active Users increased by 15x</h3>
        </div>
        <div>
        <img   className="sucessimg1"src={img011} alt="img"></img>
        <h3>Monthly Active Users increased by 2x</h3>
        </div>
        <div>
        <img   className="sucessimg1"src={img012} alt="img"></img>
        <h3>Monthly Active Users increased by 17x</h3>
        </div>
        <div>
        <img   className="sucessimg1"src={img013} alt="img"></img>
        <h3>Increased ROAS by 40%</h3>
        </div>
        <div>
        <img   className="sucessimg1"src={img014} alt="img"></img>
        <h3>

        Increased MAU by 60%</h3>
        </div>
        <div>
        <img   className="sucessimg1"src={img015} alt="img"></img>
        <h3>
        Monthly Active Users increased by 12x</h3>
        </div>
        <div>
        <img   className="sucessimg1"src={img018} alt="img"></img>
        <h3>
Increased eCPM by 50%​</h3>
        </div>
        <div>
        <img   className="sucessimg1"src={img019} alt="img"></img>
        <h3>Increased eCPM by 57%​</h3>
        </div>


        </div>
        <div>
        <h1 className="midel">Interested in working with us?
</h1>
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
