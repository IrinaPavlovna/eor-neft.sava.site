import React from "react";
import "./introduction.scss";
import mainIMG from "../img/mainImg.png";

// import backImages1 from "../img/backImages1.png";
import MyModal from "../components/interactivediagrams/components/Modal/MyModal";
function index() {
  return (
    <div className="intro-training">
      <img src={mainIMG} alt="" className="intro-training-bg" />

      <div class="custom-shape-divider-top-1671100056">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="intro-training-center">
        <div className="intro-training-center-desc">
          Тренажер
          <MyModal src="https://nasos-training.vercel.app/">
            <div
              style={{
                width: "auto",
                height: "auto",
                textAlign: "center",
                border: "1px solid",
                borderRadius: "5px",
              }}
              className="backcontainer"
            >
              Oткрыть
            </div>
          </MyModal>
          {/* <iframe
            src="https://nasos-training.vercel.app/"
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              bottom: "0",
              right: "0",
              width: "100%",
              height: "100%",
              border: "none",
              margin: "0",
              padding: "0",
              overflow: "hidden",
              zIndex: "999999",
            }}
          /> */}
        </div>
      </div>
      <div class="custom-shape-divider-top-1671100057">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default index;
