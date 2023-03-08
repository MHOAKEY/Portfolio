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
      <h1 className="speech-bubble">
        Good {timeOfDay}! I mean.. aahh wroowroowroo
      </h1>
    </div>
  );
}
