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

const date = new Date();

export default function TimeWidget() {
  const [hours, setHours] = useState(date.getHours());
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [seconds, setSeconds] = useState(date.getSeconds());

  useEffect(() => {
    setInterval(() => {
      setSeconds(date.getSeconds());
    }, 1000);
    setInterval(() => {
      setHours(date.getHours());
    }, 60000 * 60);
    setInterval(() => {
      setMinutes(date.getMinutes());
    }, 60000);

    return () => clearInterval();
  }, []);

  return (
    <Widget heading="Tid">
      <p className="widget__big-element">{hours}:</p>
      <p className="widget__big-element">{minutes}:</p>
      <p className="widget__big-element">{seconds}</p>
      <section className="widget__dates">
        <p>{days[date.getDay() - 1]} </p>
        <p>{date.getMonth()} </p>
        <p>{date.getFullYear()}</p>
      </section>
    </Widget>
  );
}
