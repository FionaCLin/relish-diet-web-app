import React from 'react';
import PropTypes from 'prop-types';
import Background from '../Background';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useNavigate } from 'react-router-dom'

const Login = ({loading, error, handleEmailChange, handlePwdChange, onClickLogin }) => {
  const navigate = useNavigate()
  return (
    <div>
      <Background />
      <div id='content-wrapper'>
        <div className='container'>
          <div className='well login'>
            <p style={{color: 'red'}}>{error && error}</p>
            <input
              className='form-control'
              onChange={handleEmailChange}
              id='emailInput'
              placeholder='Username'
              type='text'
            />
            <input
              className='form-control'
              id='passwordInput'
              placeholder='Password'
              onChange={handlePwdChange}
              type='password'
            />
            <div onClick={() => onClickLogin(navigate)} className='dashboard btn btn-success'>
              <span style={loading ? {margin: '0 8px 0 0 '} : {}}>Login</span>
              {loading && <CircularProgress size={10} thickness={5} color={'inherit'} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  handleEmailChange: PropTypes.func,
  handlePwdChange: PropTypes.func,
  onClickLogin: PropTypes.func,
  history: PropTypes.object,
};

export default Login;
