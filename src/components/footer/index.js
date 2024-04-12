import React from "react";
import "./footer.scss";

function index() {
  return (
    <div className="Footer">
      <div className="Footer-content">
        <p style={{opacity:0.1}}>
      Некоторые видеоматериалы взяты из открытых источников
        </p>
        <a
          href="https://github.com/YuriAndreevich"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://preview.colorlib.com/theme/stellar/images/clients/icon-github.svg"
            alt="GitHub"
          />
        </a>
      </div>
    </div>
  );
}

export default index;
