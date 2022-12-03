import React from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import Icon from "./Icon";

import Widget from "./Widget";

export default function WeatherWidget() {
  return (
    <Widget heading="Vejr">
      <article className="weather-widget">
        <span>
          <p className="weather-widget__temp">26</p>
          <p style={{ fontSize: "10px", textAlign: "center" }}>deg</p>
        </span>
        <Icon IconComponent={BiSun} time="6:30 am" title="Sunrise" />
        <Icon IconComponent={BiMoon} time="7:30 pm" title="Sunset" />
      </article>
    </Widget>
  );
}
