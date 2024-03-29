import React from "react";
import "./Contact.css";
import img from "../../Image/let.png";
import Image4 from "../../Image/form.jpg";
import Img5 from "../../Image/contact.png";
import { SocialIcon } from "react-social-icons";

export default function Contact() {
  return (
    <>
      <div className="dimo">
        <div>
          <p className="demo my-5" >
            Let Lorem help you grow your App Business
          </p>
        </div>
        <div>
          <img className=" demoimg" src={img} alt="img"></img>
        </div>
      </div>
      <div className="form my-5">
        <div>
          <p className="formtext">Get Started With Lorem Today</p>
          <p className="formtext1 mx-4">
            Lorem is more than an Adtech Platform. We are a go-to place for
            publishers. Setup a free demo to know more!
          </p>
          <img className="pics" src={Image4} alt="images"></img>
        </div>
        <div className="form1 p-5">
          <h1>Contact Us</h1>
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
            <label for="fname">input:</label>
            <br></br>
            <input
              style={{ height: "80px" }}
              className="input"
              type="text"
              id="fname"
              name="fname"
            />
          </div>
          <div className="btn my-3" >
            <button className="btn1">Set Up Demo</button>
          </div>
        </div>
      </div>
      <div className="start">
        <p>Get in Touch</p>
      </div>
      <div className="dimo">
        <div>
          <img className=" demoimg" src={Img5} alt="img"></img>
        </div>

        <div>
          <p className="demo1" style={{ marginTop: "100px" }}>
            We understand that some queries need immediate responses. We support
            you with a dedicated account manager and 24×7 chat support on
            WhatsApp.
          </p>

          <button className="buttonn">Connect On WhatsApp</button>
        </div>
      </div>
      <div className="start my-3">
        <p>Find us on Social Media</p>
      </div>
      <div className="start">
        <SocialIcon
          href="#"
          title="Facebook"
          network="facebook"
          className="mx-2"
        />
        <SocialIcon
          href="#"
          title="Facebook"
          network="twitter"
          className="mx-2"
        />
        <SocialIcon
          href="#"
          title="Facebook"
          network="linkedin"
          className="mx-2"
        />
        <SocialIcon
          href="#"
          title="Facebook"
          network="instagram"
          className="mx-2"
        />
      </div>
    </>
  );
}
