import React from "react";
import { FaSignOutAlt } from "react-icons/fa";

import MediaQuery from "./MediaQuery";

export default function PageController({ name, img, onLogout }) {
  return (
    <div className="page-controller">
      <a href="/profile">
        <MediaQuery name={name} img={img} />
      </a>
      <div className="page-controller__separator">|</div>
      <FaSignOutAlt className="icon" size={20} onClick={onLogout} />
    </div>
  );
}
