import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="input-group">
      <FaSearch size={15} className="icon" />
      <input
        className="search-input"
        type="text"
        placeholder="Search for new music, news, artists ..."
      />
    </div>
  );
}
