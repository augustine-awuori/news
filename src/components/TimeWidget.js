import React, { useEffect, useState } from "react";

import Widget from "./Widget";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = new Date();

export default function TimeWidget() {
  const [hours, setHours] = useState(date.getHours());
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [seconds, setSeconds] = useState(date.getSeconds());

  useEffect(() => {
    updateTime();
    return () => clearInterval();
  }, [seconds]);

  const HALF_MINUTE = 30000;

  const updateTime = () => {
    const hrs = date.getHours();
    const mins = date.getMinutes();

    setInterval(() => {
      setSeconds(date.getSeconds());
      if (hours !== hrs) setHours(hrs);
      if (minutes !== mins) setMinutes(mins);
    }, HALF_MINUTE);
  };

  return (
    <Widget heading="Tid">
      <section className="widget__time">
        <p className="widget__big-element">{hours}:</p>
        <p className="widget__big-element">{minutes}:</p>
        <p className="widget__big-element">{seconds}</p>
      </section>
      <section className="widget__dates">
        <p className="widget__date">{days[date.getDay() - 1]}, </p>
        <p className="widget__date">{months[date.getMonth()]} </p>
        <p className="widget__date">{date.getFullYear()}</p>
      </section>
    </Widget>
  );
}
