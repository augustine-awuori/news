import React from "react";

export default function Profile({ name, onClick }) {
  return (
    <div className="profile">
      <img src={require("../assets/Profilbillede.png")} alt="" />
      <p className="profile__name">{name}</p>
      <button onClick={() => onClick(name)}>Delete</button>
    </div>
  );
}
