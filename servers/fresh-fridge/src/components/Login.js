import React from 'react';
import constants from '../constants/loginConst';
import Background from './Background';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import api from '../api.js';
import { isUndefined } from 'util';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginResult: undefined
    }
    console.log("SETUSER!", this.props.setUser);
  }

  changeUsername = (e) => {
    e.preventDefault();
    let username = e.target.value;
    this.setState({username});
  }

  changePassword = (e) => {
    e.preventDefault();
    let password = e.target.value;
    this.setState({password});
  }

  checkLogin = (e) => {
    e.preventDefault();
    console.log("SETUSER", this.props.setUser);
    const loginCallback = (loginResult) => {
      this.setState({loginResult});
      let user = loginResult;
      loginResult.password = this.state.password;
      this.props.setUser(loginResult);
      console.log(loginResult)
      if (isUndefined(this.state.loginResult.id)) {
        console.log("didn't login");
      } else {
        this.props.history.push('/dashboard');
      }
    };
    api.login(this.state.username, this.state.password, loginCallback);
  }

  render () {
      return (
      <div>
        <Background />
        <div id="content-wrapper">
          <div className="container">
            <div className="well login">
              <h4>Login</h4>
              <input className="form-control" value={this.state.username} onChange={(e) => this.changeUsername(e)} id="emailInput" placeholder="Username" type="text" />
              <input className="form-control" id="emailInput" placeholder="Password" value={this.state.password} onChange={(e) => this.changePassword(e)} type="password" />
              <div onClick = { (e) => this.checkLogin(e) } className="dashboard btn btn-success">Login</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
// const Login = (props) => {
//   return (
//     <div>
//       <Background />
//       <div id="content-wrapper">
//         <div className="container">
//           <div className="well login">
//             <h4>{props.inputValue}</h4>
//             <input className="form-control" value={props.inputValue} onChange={props.handleEmailChange} id="emailInput" placeholder="Username" type="text" />
//             <input className="form-control" id="emailInput" placeholder="Password" value={props.password} onChange={props.handlePwdChange} type="password" />
//             <div onClick={(e) => props.onClickLogin()} className="dashboard btn btn-success">
//               Login
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// const mapStateToProps = (state) => {
//   return {
//     inputValue: state.loginUserEmailInput,
//     password: state.password
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleEmailChange: (e) => {
//       console.log('input change');
//       dispatch({type: constants.login.LOGIN_EMAIL_TEXT_CHANGED, emailtext: e.target.value});
//     },
//     handlePwdChange: (e) => {
//       console.log('input change', e.target.value);
//       dispatch({type: constants.login.LOGIN_PWD_TEXT_CHANGED, pwdtext: e.target.value});
//     },
//     onClickLogin: () => {
//       console.log('login click', 9999999);
//       dispatch({type: constants.LOGIN});
//     }
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
