import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img src={props.img} className="card--img" />
      <div className="card--stats">
        <img src={props.img2} className="card--vscodeImg" />
        <span className="card--title">{props.title}</span>
        <span className="gray">({props.description}) • </span>
        <span className="gray">{props.other}</span>
      </div>
    </div>
  );
}
