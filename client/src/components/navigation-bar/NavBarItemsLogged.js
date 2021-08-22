import React from 'react';
import {connect} from 'react-redux';
import {Nav, NavDropdown} from 'react-bootstrap';
import PropTypes from 'prop-types';

const LoggedNavBarItems = ({username}) => {
  const keys = {dashboard: {title: 'Dashboard', icon: 'search'}, 'meal-list': {title: 'Meal Plan', icon: 'calendar'}};

  return (
    <Nav>
      {Object.entries(keys).map(([key, value], index) => (
        <Nav.Item key={index}>
          <Nav.Link eventKey={index} href={`/${key}`}>
            <span className={`glyphicon glyphicon-${value.icon} pr-1`} />
            {value.title}
          </Nav.Link>
        </Nav.Item>
      ))}
      <NavDropdown title='Recipes' id='collasible-nav-dropdown'>
        <NavDropdown.Item href='/recipes'>
          <span className='glyphicon glyphicon-cutlery pr-1 ' />
          My Recipes
        </NavDropdown.Item>
        <NavDropdown.Item href='/bookmark'>
          <span className='glyphicon glyphicon-bookmark pr-1' />
          Bookmarked Recipes
        </NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title={`Welcome, ${username}!`} id='collasible-nav-dropdown' className='mx-xl-auto px-xl-3'>
        <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
        <NavDropdown.Item href='/login' onClick={() => localStorage.removeItem('state')}>
          Logout
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

const mapStateToProps = (state) => {
  return {
    username: `${state.user.user.givenname} ${state.user.user.familyname}`,
  };
};

LoggedNavBarItems.propTypes = {
  username: PropTypes.string,
};

export default connect(mapStateToProps)(LoggedNavBarItems);
