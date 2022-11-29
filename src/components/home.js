import React from "react";
import Introduction from './Introduction'
import Tabs from './tabs'
import './home.scss'

import main1PNG from '../img/main1.webp'
function home() {
  return (
    <div className="main">
      <div className="main-content">
        <h1>
          Электронный образовательный ресурс
        </h1>
        <img src={main1PNG} alt="" className="main-img" />
        <Introduction />
        <Tabs />

      </div>
    </div>
  );
}

export default home;
