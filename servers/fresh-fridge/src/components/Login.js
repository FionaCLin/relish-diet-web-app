import React from 'react';
import Background from './Background';

const Login = (props) => {
  return (
    <div>
      <Background />
      <div id="content-wrapper">
        <div className="container">
          <div className="well login">
            <h4>Login</h4>
            <input className="form-control" id="emailInput" placeholder="Username" type="text" />
            <input className="form-control" id="emailInput" placeholder="Password" type="password" />
            <div className="dashboard btn btn-success">
                Login
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login; 
