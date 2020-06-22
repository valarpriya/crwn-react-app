import React from "react";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => (
  <div class="header">
    <Link to="/">
      <Logo />
    </Link>
    <div class="linkGroup">
      <Link className="linkItems" to="/shop"> {"Shop".toUpperCase()}</Link>
      <Link className="linkItems" to="/signin"> {"Sign In".toUpperCase()}</Link>
    </div>
  </div>
);

export default Header;
