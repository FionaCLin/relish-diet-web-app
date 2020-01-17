import React from "react";
import constants from "../constants";
import Background from "./Background";
import { connect } from "react-redux";

const Signup = props => {
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
            <input
              className="form-control"
              id="emailInput"
              placeholder="Enter Password Again"
              onChange={e=>props.handlePwdConfirm(e,props.password)}
              type="password"
            />
            <div
              onClick={e => props.onClickSignup(e, props)}
              className="dashboard btn btn-success"
            >
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    inputValue: state.user.loginUserEmailInput,
    password: state.user.password,
    error: state.user.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleEmailChange: e => {
      console.log("input change", constants.user.LOGIN_EMAIL_TEXT_CHANGED);
      dispatch({
        type: constants.user.LOGIN_EMAIL_TEXT_CHANGED,
        emailtext: e.target.value
      });
    },
    handlePwdChange: e => {
      dispatch({
        type: constants.user.LOGIN_PWD_TEXT_CHANGED,
        pwdtext: e.target.value
      });
    },
    handlePwdConfirm: (e, password) => {
      dispatch({
        type: constants.user.LOGIN_PWD_CONFIRM,
        pwdtext: e.target.value,
        payload: { error: `` }
      });
    },
    onClickSignup: (e, opts) => {
      let resp = dispatch({
        type: constants.user.SIGNUP_SUBMIT
      });
      console.log(resp);
      resp.res
        .then(res => {
          opts.history.push("/login");
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
