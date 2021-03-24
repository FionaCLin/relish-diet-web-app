import React from "react";
import Background from "../Background";
import CircularProgress from '@material-ui/core/CircularProgress';
const Login = props => {
  const { loading, error, handleEmailChange, handlePwdChange, onClickLogin } = props;
  return (
    <div>
      <Background />
      <div id="content-wrapper">
        <div className="container">
          <div className="well login">
            <p style={{ color: "red" }}>{error && error}</p>
            <input
              className="form-control"
              onChange={handleEmailChange}
              id="emailInput"
              placeholder="Username"
              type="text"
            />
            <input
              className="form-control"
              id="emailInput"
              placeholder="Password"
              onChange={handlePwdChange}
              type="password"
            />
            <div
              onClick={e => onClickLogin(e, props)}
              className="dashboard btn btn-success"

            >
              <span style={loading ? { margin: "0 8px 0 0 " } : {}}>Login</span>
              {loading && <CircularProgress size={10}
                thickness={5} color={"inherit"} />}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Login
