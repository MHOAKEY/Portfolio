import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        img={item.mainImg}
        img2={item.vscodeImg}
        title={item.title}
        description={item.description}
        other={item.other}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Main />
      <section className="cards-list">{cards}</section>
    </div>
  );
}

// id:
// title:
// description:
// mainImg:
// vscodeImg:
// other:
// other2:
