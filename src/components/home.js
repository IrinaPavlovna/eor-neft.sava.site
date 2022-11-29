import React from "react";
import Introduction from './Introduction'
import Tabs from './tabs'
function home() {
  return (
    <div>
    <h1 style={{ color: "", textAlign: "center", margin: "60px" }}>
      Электронный образовательный ресурс
    </h1>
    <Introduction/>
    <Tabs/>
    
    </div>
  );
}

export default home;
