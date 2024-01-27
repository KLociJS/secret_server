import React from "react";
import { Link } from "react-router-dom";

import { NAV_LINKS } from "../../../Constants/Constants";

import "./Navbar.css";

const links = [
  {
    to: NAV_LINKS.VIEW_SECRET,
    text: "View Secret",
  },
  {
    to: NAV_LINKS.CREATE_SECRET,
    text: "Create Secret",
  },
];

const Navbar = () => {
  return (
    <div className='nav-wrapper'>
      <nav className='nav-bar'>
        {links.map((link) => (
          <Link key={link.to} to={link.to} className='nav-link'>
            {link.text}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
