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
    inputValue: state.user.loginUserEmailInput,
    password: state.user.password,
    error: state.user.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleEmailChange: e => {
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
    onClickLogin: (e, opts) => {
      let resp = dispatch({
        type: constants.user.LOGIN_SUBMIT
      });
      resp.res
        .then(res => {
          opts.history.push("/dashboard");
          dispatch({
            type: constants.user.USER_DEFAULT,
            payload: { user: {...res.data}, error: "" }
          });
          dispatch({
            type: constants.user.PROFILE_DEFAULT,
            payload: { user: {...res.data},  error: "" }
          });
          return;
        })
        .catch(err => {
          dispatch({
            type: constants.user.USER_DEFAULT,
            payload: { error: `* ${err.response.data}` }
          });
        });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
