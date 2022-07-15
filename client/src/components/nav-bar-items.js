import React from 'react';
import {Nav} from 'react-bootstrap';

const LoggedNavBar = () => {
  const keys = {signup: {title: 'Sign up', icon: 'user'}, login: {title: 'Login', icon: 'log-in'}};
  return (
    <Nav>
      {Object.entries(keys).map(([key, value], index) => (
        <Nav.Item key={index}>
          <Nav.Link eventKey={index} href={`/${key}`} style={{color: 'LimeGreen'}}>
            {value.title}
            <span className={`glyphicon glyphicon-${value.icon} pl-1`} />
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default LoggedNavBar;
