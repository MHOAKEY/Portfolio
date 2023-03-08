import React from "react";

export default function Welcome() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return (
    <div className="welcome">
      <h1>Good {timeOfDay}! I mean.. ahwroowroowroo</h1>
    </div>
  );
}
