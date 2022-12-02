import React from "react";

export default function Widget({ heading, children }) {
  return (
    <>
      <h2 className="heading">{heading}</h2>
      <div className="widget">{children}</div>
    </>
  );
}
