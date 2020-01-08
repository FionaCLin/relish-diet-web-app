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
            <p style={{ color: "red" }}>{props.error && props.error}</p>
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
              onClick={e => props.onClickLogin(e, props)}
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
    inputValue: state.users.loginUserEmailInput,
    password: state.users.password,
    error: state.users.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleEmailChange: e => {
      console.log("input change", constants.login.LOGIN_EMAIL_TEXT_CHANGED);
      dispatch({
        type: constants.login.LOGIN_EMAIL_TEXT_CHANGED,
        emailtext: e.target.value
      });
    },
    handlePwdChange: e => {
      console.log(
        "input change",
        constants.login.LOGIN_PWD_TEXT_CHANGED,
        e.target.value
      );
      dispatch({
        type: constants.login.LOGIN_PWD_TEXT_CHANGED,
        pwdtext: e.target.value
      });
    },
    onClickLogin: (e, opts) => {
      let resp = dispatch({
        type: constants.login.LOGIN_SUBMIT
      });
      console.log(resp);
      resp.res
        .then(res => {
          opts.history.push("/dashboard");
          dispatch({
            type: "",
            payload: { user: res.data, error: "" }
          });
          console.log(res);
          return;
        })
        .catch(err => {
          console.log(err);
          dispatch({
            type: "",
            payload: { error: `* ${err.response.data}` }
          });
        });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
