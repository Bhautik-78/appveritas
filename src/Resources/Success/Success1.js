import React from "react";
import img from "../Image/google.png";
import Image4 from "../Image/appx.png";

export default function Success1(props) {


  return (
    <>
      <div className="dimo">
        <div>
          <p className="demo" >
          
          </p>
          <p className="demo1" >
            
          </p>
          <p className="demo1" >
            
          </p>
        </div>
        <div>
          <img className=" demoimg"  alt="img"></img>
        </div>
      </div>
      
      <div className="form">
        <div>
          <p className="formtext">Get Started With Lorem ipsum Today</p>
          <p className="formtext1">
            Lorem ipsum is more than an Adtech Platform. We are a go-to place for
            publishers. Setup a free demo to know more!
          </p>
          <img className="pics" src={Image4} alt="images"></img>
        </div>
        <div className="form1">
          <div className="input">
            <label for="fname">Name</label>
            <br></br>
            <input className="input" type="text" id="fname" name="fname" />
          </div>
          <br></br> <br></br>
          <div className="input">
            <label for="fname">Company Name</label>
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
            <label for="fname">App/Website Link</label> <br></br>
            <select className="input" name="cars" id="cars">
              <option value="volvo">-Select-</option>
              <option value="volvo">App</option>
              <option value="saab">Website</option>
            </select>
            <br></br>
          </div>
          <br></br>
          <br></br>
          <div className="input">
            <label for="fname">State(Country):</label>
            <br></br>
            <input className="input" type="text" id="fname" name="fname" />
          </div>
          <br></br>
          <br></br>
          <div className="input">
            <label for="fname">FEstimated Monthly Revenue (USD) </label>
            <br></br>
            <input className="input" type="text" id="fname" name="fname" />
            Usd
          </div>
          <div className="btn">
            {" "}
            <button className="btn1">Set Up Demo</button>
          </div>
        </div>
      </div>
    </>
  );
}
