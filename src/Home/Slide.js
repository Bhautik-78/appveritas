import React, { useState } from "react";
import "./Home.css";

export default function Slide() {
  const [step, setstep] = useState(1);

  const gotoslide2 = () => {
    if (step === 1) {
      setstep(2);
    } else {
      setstep(step - 1);
    }
  };

  const gotoslide3 = () => {
    if (step === 2) {
      setstep(1);
    } else {
      setstep(step + 1);
    }
  };

  return (
    <>
      <div className="bg">
        <div className="top">
          <div>
            <p className="test">TESTIMONIALS</p>
            <p className="test1">What our clients say</p>
            <button className="button1">CONTACT US</button>
          </div>
          <div className="img-boxs">
            {step === 1 && (
              <div className="scolor">
                <h1>,,</h1>
                <p className="stext">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div>
                  <h5></h5>
                  <h4></h4>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="scolor">
                <h1>,,</h1>
                <p className="stext">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div>
                  <h4>Lorem Ipsum</h4>
                  <h3></h3>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="scolor">
                <h1>,,</h1>
                <p className="stext">
                  We are thankful to the Lorem Ipsum team for helping us to grow
                  our revenue. Support team is very active and they are ready to
                  help at any time.
                </p>
                <div>
                  <h4>Chirag</h4>
                  <h3>CEO, Qtonz Infotech</h3>
                </div>
              </div>
            )}
            {step === 4 && (
              <div className="scolor">
                <h1>,,</h1>
                <p className="stext">
                  Really amazed by the returns the optimization team has given!
                  Great work and thank you.
                </p>
                <div>
                  <h4>Vivek Hirpara</h4>
                  <h3>CEO, Pthink Infotech</h3>
                </div>
              </div>
            )}
            <div className="indicators-box">
              <div className="indicato" onClick={gotoslide2}></div>
              <div className="indicato" onClick={gotoslide3}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
