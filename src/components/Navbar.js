import React from "react";
import Logo from "../images/DivaXMAS.jpeg";

export default function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="logo" id="Logo" />
      <h3 className="nav--logoText">MattOake</h3>
      <h4 className="nav--title">Stuff Here - test 1</h4>
    </nav>
  );
}
