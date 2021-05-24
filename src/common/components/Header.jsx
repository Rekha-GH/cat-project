import React from "react";
import { Link } from "react-router-dom";

const DEFAULT_MENU = "header";
const LINK_CLASS = `${DEFAULT_MENU}__link`;

const Header = React.memo(() => {
  return (
    <div className={DEFAULT_MENU}>
      <Link to="/" className={LINK_CLASS}>
        Home
      </Link>
      <Link to="/upload" className={LINK_CLASS}>
        Upload
      </Link>
    </div>
  );
});

export default Header;
