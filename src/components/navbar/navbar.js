import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./navbar.scss";

import arrowSVG from "../../img/arrow.svg";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

function navbar() {
  return (
    <motion.navbar
      className="navbar"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      yoffset={100}
      transition={{ duration: 0.5 }}
    >
      <div >
      <Link style={{marginRight:'30px'}} to="/">Главная</Link>
      <Link to="/intro">Вводная часть</Link>
      </div>
      <Menu>
        <MenuButton
          px={4}
          py={2}
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
          _hover={{ bg: "gray.400" }}
          _expanded={{ bg: "white.400" }}
          _focus={{ boxShadow: "outline" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: "10px" }}>Установки</span>
            <img
              src={arrowSVG}
              style={{ width: "10px", height: "10px" }}
              alt=""
            />
          </div>
        </MenuButton>
        <MenuList><Link to="/hydrotreating">
          <MenuItem>
            Гидроочистка
          </MenuItem></Link>
          <Link to="/VT1">
          <MenuItem>
           ВТ-1
          </MenuItem></Link>
          <Link to="/Tatorey"> <MenuItem>
            Таторей
          </MenuItem></Link>
        </MenuList>
      </Menu>
    </motion.navbar>
  );
}

export default navbar;
