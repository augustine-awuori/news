import React from "react";

export default function MediaQuery({ name, img }) {
  return (
    <div className="media-query">
      <p className="media-query__name">{name}</p>
      <img
        className="media-query__image"
        src={img}
        alt={`Profile for  ${name}`}
      />
    </div>
  );
}
