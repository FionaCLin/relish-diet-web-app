import React from 'react';
import NavLink from 'react-router-dom/NavLink'
import { isNull, isUndefined } from 'util';

const NavigationBar = (prop) => {
  return (
    // < !--Navbar-- >
    <nav className="navbar navbar-default" style={{ backgroundColor: "white", marginBottom: "0" }}>
      <div className="container-fluid">
        {/* <!-- Brand and toggle get grouped for better mobile display --> */}
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <NavLink to={(isNull(prop.user) || isUndefined(prop.user.id)) ? "/" : "/dashboard"} className="navbar-brand" style={{ color: "LimeGreen" }}>
            <span className="glyphicon glyphicon-grain"></span> Fresh Fridge
            </NavLink>
        </div>

        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
        { (!isNull(prop.user) && !isUndefined(prop.user.id)) ?
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink to="/search">
                <span className="glyphicon glyphicon-search"></span>
              </NavLink>
            </li>
            <li className="dropdown">
              <a href="#" title="Recipes" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <span className="glyphicon glyphicon-cutlery"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/recipes" >
                    My Recipes
                  </NavLink >
                </li>
                <li>
                  <NavLink to="/bookmark">
                    Bookmarked Recipes
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/meallist">
                <span className="glyphicon glyphicon-calendar"></span>
              </NavLink>
            </li>
            <li className="dropdown">
              <a href="#" title="User" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <span className="glyphicon glyphicon-user"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div style={{ marginLeft: "20px", marginRight: "20px" }}>Welcome, {prop.user.username}</div>
                </li>
                <li role="separator" className="divider"></li>
                <li>
                  <NavLink to="/profile">
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <a href="login" onClick={(e) => { const user = null; prop.setUser(user) }}>Logout</a>
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div> : null
        }
        {/*<!-- /.navbar-collapse -->*/}
      </div >
      {/*< !-- /.container-fluid -->*/}
    </nav >
  );
};


export default NavigationBar;
