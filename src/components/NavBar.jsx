import React from "react";

import PageController from "./PageController";
import SearchBar from "./SearchBar";

export default function NavBar({ name, img }) {
  return (
    <div className="navbar">
      <SearchBar />
      <PageController name={name} img={img} />
    </div>
  );
}
