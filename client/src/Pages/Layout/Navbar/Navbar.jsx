import { useState } from "react";
import { NavLink } from "react-router-dom";

import { IoMdClose, IoMdMenu } from "react-icons/io";
import { ROUTES } from "../../../Constants/Constants";

import "./Navbar.css";

const links = [
  {
    to: ROUTES.CREATE_SECRET,
    text: "Create Secret",
  },
  {
    to: ROUTES.VIEW_SECRET,
    text: "View Secret",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='nav-wrapper'>
      {isOpen ? (
        <IoMdClose className='nav-menu-icon' onClick={() => setIsOpen(false)} />
      ) : (
        <IoMdMenu className='nav-menu-icon' onClick={() => setIsOpen(true)} />
      )}

      <nav className={`nav-bar${isOpen ? " open" : ""}`}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {link.text}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
