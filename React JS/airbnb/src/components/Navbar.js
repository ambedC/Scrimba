import React from "react";
import logo from "./images/logo.png";

export default function Navbar() {
    return(
        <nav>
            <img src={logo} className="nav--icon" />           
        </nav>
    )
}