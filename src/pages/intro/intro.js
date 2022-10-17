import React from "react";
import "./intro.scss";

function intro() {
  return (
    <div className="intro__content">
      <h1>Аннотация</h1>
      <p>
        Электронный образовательный ресурс разработан по специальностям
        "Оператор технологических установок", "Слесарь по ремонту
        технологических установок". Предназначен для изучения учебных предметов
        “Специальная технология (Оператор технологических установок, слесарь по
        ремонту технологических установок)” и “Производственное обучение» по
        квалификациям: “Оператор технологических установок", "Слесарь по ремонту
        технологических установок". Целью проекта является эффективная
        организация учебного процесса: проведение теоретических практических
        занятий, организация самостоятельной работы и контроля усвоения знаний
        учащихся.
      </p>
      <div className="intro__video">
        <iframe
          controls
          preload="none"
          title="naftan"
          src="https://www.youtube.com/embed/INN6d-CL6KU"
          allowFullScreen
        />
        <iframe
          controls
          preload="none"
          title="naftan"
          src="https://www.youtube.com/embed/gucTe2zmJ-8"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default intro;
