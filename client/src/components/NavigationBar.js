import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import LoggedNavBarItems from "./NavBarItemsLogged";
import NavBarItems from "./NavBarItems";

const NavigationBar = props => {
  return (
    // < !--Navbar-- >
    <nav
      className="navbar navbar-default"
      style={{ backgroundColor: "white", marginBottom: "0" }}
    >
      <div className="container-fluid">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <NavLink
            to="/dashboard"
            className="navbar-brand"
            style={{ color: "LimeGreen" }}
          >
            <span className="glyphicon glyphicon-grain"></span> Fresh Fridge
          </NavLink>
        </div>

        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        {props.user ? <LoggedNavBarItems /> : <NavBarItems />}
        {/*<!-- /.navbar-collapse -->*/}
      </div>
      {/*< !-- /.container-fluid -->*/}
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps)(NavigationBar);
