import React from "react";
import { NavLink } from "react-router-dom";

const LoggedNavBar = () => {
  return (
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
        <li>
          <NavLink to="/signup">
            <span className="glyphicon glyphicon-user"></span>
          </NavLink>
        </li>
        <li className="dropdown">
          <NavLink to="/login">
            <span className="glyphicon glyphicon-log-in"></span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default LoggedNavBar;
