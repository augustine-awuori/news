import React from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import Icon from "./Icon";

import Widget from "./Widget";

export default function WeatherWidget() {
  return (
    <Widget heading="Vejr">
      <article className="weather-widget">
        <p className="weather-widget__temp">
          36 <p style={{ fontSize: "10px", textAlign: "center" }}>deg</p>
        </p>
        <Icon IconComponent={BiSun} time="6:30 am" title="Sunrise" />
        <Icon IconComponent={BiMoon} time="7:30 pm" title="Sunrise" />
      </article>
    </Widget>
  );
}
