import React from "react";
import "./introduction.scss";

function index() {
  return (
    <div className="intro">
      <div className="intro-desc">
        <h1>Аннотация</h1>
        <ul>
          <li>
            <p>
              Электронный образовательный ресурс разработан по специальностям
              "Оператор технологических установок", "Слесарь по ремонту
              технологических установок".
            </p>
          </li>
          <li>
            <p>
              Предназначен для изучения учебных предметов “Специальная
              технология (Оператор технологических установок, слесарь по ремонту
              технологических установок)” и “Производственное обучение» по
              квалификациям: “Оператор технологических установок", "Слесарь по
              ремонту технологических установок".
            </p>
          </li>
          <li>
            <p>
              Целью проекта является эффективная организация учебного процесса:
              проведение теоретических практических занятий, организация
              самостоятельной работы и контроля усвоения знаний учащихся.
            </p>
          </li>
        </ul>
      </div>
      <div className="intro-video">
        <iframe
          className="intro-video1"
          controls
          preload="none"
          title="naftan"
          src="https://www.youtube.com/embed/INN6d-CL6KU"
          allowFullScreen
        />
        <iframe
          className="intro-video2"
          controls
          preload="none"
          title="naftan"
          src="https://www.youtube.com/embed/gucTe2zmJ-8"
          allowFullScreen
        />
        <div className="intro-help-block"></div>
        {/* <div className="intro__video-test">Загрузка відео</div> */}
        {/* <div className="intro__video-test">Загрузка відео</div> */}
      </div>
    </div>
  );
}

export default index;
