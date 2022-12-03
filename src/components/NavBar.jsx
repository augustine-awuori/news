import React from "react";
import { NavLink } from "react-router-dom";

import Badge from "./Badge";
import PageController from "./PageController";
import SearchBar from "./SearchBar";
import useFavourites from "../hooks/useFavourites";

export default function NavBar({ name, img }) {
  const { favourites } = useFavourites();

  return (
    <div className="navbar">
      <SearchBar />
      <NavLink to="/favourites">
        My Favourites <Badge count={favourites.length} />{" "}
      </NavLink>
      <PageController name={name} img={img} />
    </div>
  );
}
