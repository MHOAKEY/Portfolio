import React from "react";
import Logo from "../images/DivaXMAS.jpeg";

export default function Navbar() {
  return (
    <nav>
      <img src={Logo} id="Logo" />
      <h3>MattOake</h3>
      <h4>Stuff Here - test 1</h4>
    </nav>
  );
}