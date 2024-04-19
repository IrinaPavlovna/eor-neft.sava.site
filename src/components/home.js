import React from "react";
import Introduction from "./Introduction";
import Training from "../training";
import Tabs from "./tabs";
import "./home.scss";
import mainIMG from "../img/mainImg.png";

function home() {
  return (
    <div className="main">
      <div className="main-content">
        <section>
          <div className="centered">
            <h1>
              <strong>Электронный образовательный ресурс</strong>
            </h1>
            <p>
              <strong>
                по квалификациям: "Оператор технологических установок"; "Слесарь
                по ремонту технологических установок"
              </strong>
            </p>
            <div id="section07" class="demo">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <img src={mainIMG} alt="" className="main-img" />
          {/* <img src={main1PNG} alt="" className="main-img" /> */}
        </section>
        <section>
          <Introduction />
        </section>
        <section>
          <Training />
        </section>
        <section>
          <Tabs />
        </section>
      </div>
    </div>
  );
}

export default home;
