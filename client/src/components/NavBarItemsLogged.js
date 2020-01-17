import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const LoggedNavBarItems = props => {
  return (
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
        <li>
          <NavLink to="/dashboard">
            <span className="glyphicon glyphicon-search"></span>
          </NavLink>
        </li>
        <li className="dropdown">
          <a
            href="/#"
            title="Recipes"
            className="dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="glyphicon glyphicon-cutlery"></span>
          </a>
          <ul className="dropdown-menu">
            <li>
              <NavLink to="/recipes">My Recipes</NavLink>
            </li>
            <li>
              <NavLink to="/bookmark">Bookmarked Recipes</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/meallist">
            <span className="glyphicon glyphicon-calendar"></span>
          </NavLink>
        </li>
        <li className="dropdown">
          <a
            href="/#"
            title="User"
            className="dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="glyphicon glyphicon-user"></span>
          </a>
          <ul className="dropdown-menu">
            <li>
              <div style={{ margin: "0 8px", textAlign: "center"}}>
                Welcome, {props.username}!
              </div>
            </li>
            <li role="separator" className="divider"></li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/login"></NavLink>
              <a href="login">Logout</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    username: `${state.user.user.givenname} ${state.user.user.familyname}`
  };
};
export default connect(mapStateToProps)(LoggedNavBarItems);
