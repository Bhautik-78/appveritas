import React, { useState } from "react";
import { Navitem } from "./Navitem";
import { Link } from "react-router-dom";
import "../App.css";

export default function Dropdown() {
  const [Dropdown, setDropdown] = useState(false);
  return (
    <>
      <ul
        className={Dropdown ? "srvices-submenu clicked" : "srvices-submenu"}
        onClick={() => setDropdown(!Dropdown)}
      >
        {Navitem.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link style={{ color: "black" }} to={item.path}>
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
