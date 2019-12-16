import React from "react";
import constants from "../constants";
import Background from "./Background";
import { connect } from "react-redux";

const Login = props => {
  return (
    <div>
      <Background />
      <div id="content-wrapper">
        <div className="container">
          <div className="well login">
            <h4>{props.inputValue}</h4>
            <input
              className="form-control"
              onChange={props.handleEmailChange}
              id="emailInput"
              placeholder="Username"
              type="text"
            />
            <input
              className="form-control"
              id="emailInput"
              placeholder="Password"
              onChange={props.handlePwdChange}
              type="password"
            />
            <div
              onClick={e => props.onClickLogin(e,props)}
              className="dashboard btn btn-success"
            >
              Login
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    inputValue: state.loginUserEmailInput,
    password: state.password
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleEmailChange: e => {
      console.log("input change",constants.login.LOGIN_EMAIL_TEXT_CHANGED);
      dispatch({
        type: constants.login.LOGIN_EMAIL_TEXT_CHANGED,
        emailtext: e.target.value
      });
    },
    handlePwdChange: e => {
      console.log("input change", constants.login.LOGIN_PWD_TEXT_CHANGED,e.target.value);
      dispatch({
        type: constants.login.LOGIN_PWD_TEXT_CHANGED,
        pwdtext: e.target.value
      });
    },
    onClickLogin: (e, opts) => {
      dispatch({
        type: constants.login.LOGIN_SUBMIT
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
