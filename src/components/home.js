import React from "react";
import Introduction from "./Introduction";
import Tabs from "./tabs";
import "./home.scss";
import mainIMG from "../img/mainImg.png";

import main1PNG from "../img/main1.webp";
function home() {
  return (
    <div className="main">
      <div className="main-content">
        <h1>
          <strong>Электронный образовательный ресурс</strong>
        </h1>
        <p><strong>По специальностям "Оператор технологических установок", "Слесарь по ремонту технологических установок"</strong></p>
        <img src={mainIMG} alt="" className="main-img" />
        {/* <img src={main1PNG} alt="" className="main-img" /> */}
        <Introduction />
        <Tabs />
      </div>
    </div>
  );
}

export default home;
