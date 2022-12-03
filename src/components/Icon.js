import React from "react";

export default function Icon({ IconComponent, title, time }) {
  return (
    <span className="widget-icon">
      <IconComponent size={40} />
      <span className="widget-icon__details">
        <p>{title}</p>
        <p>{time}</p>
      </span>
    </span>
  );
}
