import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BiHomeAlt,
  BiUser,
  BiBriefcase,
  BiClipboard,
  BiChevronRight,
  BiChevronLeft,
} from "react-icons/bi";
import "./Sidebar.scss";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <nav className={`sidebar ${isOpen ? "open" : ""}`}>
      <div
        className={`sidebar-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <BiChevronLeft className="icon" />
        ) : (
          <BiChevronRight className="icon" />
        )}
      </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link" activeClassName="active">
            <BiHomeAlt className="icon" />
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/employees"
            className="nav-link"
            activeClassName="active"
          >
            <BiUser className="icon" />
            Employees
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/recruitment"
            className="nav-link"
            activeClassName="active"
          >
            <BiBriefcase className="icon" />
            Recruitment
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/onboarding"
            className="nav-link"
            activeClassName="active"
          >
            <BiClipboard className="icon" />
            Onboarding
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
