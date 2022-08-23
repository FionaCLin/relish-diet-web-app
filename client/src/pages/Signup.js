import React, {useState} from 'react';
import constants from '../constants';
import Background from './Background';
import {connect} from 'react-redux';

const Signup = (props) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(props.error);
  const validatePassword = () => {
    if (!password) {
      setError('* password is required');
    } else if (password !== confirmPassword) {
      setError('* password does not match');
    } else {
      setError('');
      props.onClickSignup({userName, password});
    }
  };
  return (
    <div>
      <Background />
      <div id='content-wrapper'>
        <div className='container'>
          <div className='well login'>
            <p style={{color: 'red'}}>{error}</p>
            <input
              className='form-control'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              id='emailInput'
              placeholder='Username'
              type='text'
            />
            <input
              className='form-control'
              id='passwordInput'
              value={password}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              type='password'
            />
            <input
              className='form-control'
              id='confirmInput'
              value={confirmPassword}
              placeholder='Enter Password Again'
              onChange={(e) => setConfirmPassword(e.target.value)}
              type='password'
            />
            <div onClick={validatePassword} className='dashboard btn btn-success'>
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    inputValue: state.user.loginUserNameInput,
    password: state.user.password,
    error: state.user.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickSignup: ({userName, password}) => {
      let resp = dispatch({
        type: constants.user.SIGNUP_SUBMIT,
        userName,
        password,
      });
      console.log(resp);
      resp.res
        .then((res) => {
          opts.history.push('/login');
          console.log(res);
          return;
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type: '',
            payload: {error: `* ${err.response.data}`},
          });
        });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
