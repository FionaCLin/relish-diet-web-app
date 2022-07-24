import React from 'react';
import LoggedNavBarItems from './nav-bar-items-logged';
import NavBarItems from './nav-bar-items';
import {Navbar, Nav} from 'react-bootstrap';
import PropTypes from 'prop-types';

const NavigationBar = ({user}) => {
  return (
    <div className='border bg-white justify-content-between mb-0 mx-0'>
      <Navbar expand='sm' className='container'>
        <Nav>
          <Nav.Item>
            <Nav.Link href={user ? `/dashboard` : `/login`} style={{color: 'LimeGreen'}}>
              <i className='glyphicon glyphicon-grain pr-1' />
              Fresh&nbsp;Fridge
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
          {user ? <LoggedNavBarItems /> : <NavBarItems />}
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      </Navbar>
    </div>
  );
};

NavigationBar.propTypes = {
  user: PropTypes.object,
};

export default NavigationBar;
