import React from 'react';
import constants from '../constants/';
import Background from './Background';
import { connect } from 'react-redux';
import axios from 'axios';

const Login = (props) => {
  return (
    <div>
      <Background />
      <div id="content-wrapper">
        <div className="container">
          <div className="well login">
            <h4>Login</h4>
            <input className="form-control" value={props.inputValue} onChange={props.handleEmailChange} id="emailInput" placeholder="Username" type="text" />
            <input className="form-control" id="emailInput" placeholder="Password" value={props.password} onChange={props.handlePwdChange} type="password" />
            <div onClick={(e) => props.onClickLogin(e, props.inputValue, props.password)} className="dashboard btn btn-success">
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.loginUserEmailInput,
    password: state.password
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleEmailChange: (e) => {
      console.log('input change');
      dispatch({ type: constants.LOGIN_EMAIL_TEXT_CHANGED, emailtext: e.target.value });
    },
    handlePwdChange: (e) => {
      console.log('input change', e.target.value);
      dispatch({ type: constants.LOGIN_PWD_TEXT_CHANGED, pwdtext: e.target.value });
    },
    onClickLogin: (e, email, password) => {
      console.log('login click', email, password);
      axios.post('http://localhost:3002/api/users/login', {
        email: email,
        password: password
      }).then(function (response) {
        console.log('you have login');
        dispatch({ type: constants.LOGIN });
      }).catch(function (error) {
        console.log('you haven\'t login');
        console.log(error);
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login); 
