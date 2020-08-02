/** @format */

import React, {Component} from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './index.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      fromType: true,
    };
  }

  handChangeType = () => {
    this.setState({fromType: !this.state.fromType});
  };

  render() {
    return (
      <div className='form-wrap'>
        <div className='form-box'>
          <div className='form-header'>
            <span className='form-span form-login-span'>
              {this.state.fromType ? '登录' : '注册'}
            </span>
            <span
              className='form-span form-register-span'
              onClick={() => this.handChangeType('register')}>
              {this.state.fromType ? '注册' : '登录'}
            </span>
          </div>
          <div className='form-content'>
            {this.state.fromType ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
