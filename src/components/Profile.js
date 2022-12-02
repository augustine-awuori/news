import React from "react";

export default function Profile({ name }) {
  return (
    <div className="profile">
      <img src={require("../assets/Profilbillede.png")} alt="" />
      <p className="profile__name">{name}</p>
    </div>
  );
}
