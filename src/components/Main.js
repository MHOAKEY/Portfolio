import React from "react";
import Welcome from "./Welcome";
export default function Main() {
  return (
    <div className="main">
      <h1 className="main--title">Fun things about me!</h1>
      <ul className="main--facts">
        <li>That's my dog Diva! She's a good gorl :3</li>
        <li>I don't enjoy ketchup</li>
        <li>Cheezwhiz mmmmmmm</li>
        <li>I like to cook beacuse I love to eat</li>
        <li>Learning new things is fun to me</li>
        <li>I'm always drowning in projects</li>
      </ul>
      <Welcome />
    </div>
  );
}
