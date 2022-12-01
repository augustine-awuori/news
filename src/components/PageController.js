import React from "react";
import { FaSignOutAlt } from "react-icons/fa";

import MediaQuery from "./MediaQuery";

export default function PageController({ name, img, onLogout }) {
  return (
    <div className="page-controller">
      <MediaQuery name={name} img={img} />
      <div className="page-controller__separator">|</div>
      <FaSignOutAlt className="icon" size={20} onClick={onLogout} />
    </div>
  );
}
