import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <>
    <div className="Top-header"></div>
    <header>
      <h1>
        <FontAwesomeIcon icon={faCameraRetro} className="Header-icon" /> Top
        r/pics
      </h1>
    </header>
  </>
);

export default Header;
