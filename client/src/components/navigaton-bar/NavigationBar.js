import React from "react";
import LoggedNavBarItems from "./NavBarItemsLogged";
import NavBarItems from "./NavBarItems";
import {Navbar, Nav} from 'react-bootstrap';
import PropTypes from 'prop-types'

const NavigationBar = ({user}) => {
  return (
    <Navbar className="bg-white justify-content-between mb-0">
      <Nav>
        <Nav.Item>
          <Nav.Link href={user ? `/dashboard` : `/login`} style={{color: "LimeGreen"}}>
            <i className="glyphicon glyphicon-grain pr-1"/>
                        Fresh Fridge
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <br/>
        {user ? <LoggedNavBarItems/> : <NavBarItems/>}
      </Navbar.Collapse>
    </Navbar>
  );
};

NavigationBar.propTypes = {
  user: PropTypes.object,
}

export default NavigationBar;