import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <navbar>
        <Link to="/">главная</Link>
        <Link to="/intro">вводная часть</Link>
        <Link to="/hydrotreating">Гидроочистка</Link>
    </navbar>
  );
}

export default navbar;
