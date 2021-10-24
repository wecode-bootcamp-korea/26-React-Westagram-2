import React, { Component } from 'react';
import './Login.scss';
// import './src/pages/jiwan/assets/westagram.ttf';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      inputIdValue: '',
      inputPwValue: '',
    };
  }

  handleIdnput = event => {
    this.setState({
      inputIdValue: `${event.target.value}`,
    });
  };

  handlePwInput = event => {
    this.setState({
      inputPwValue: `${event.target.value}`,
    });
  };

  render() {
    return (
      <div>
        <title>Westagram!</title>
        <link rel="stylesheet" href="/login.css" type="text/css" />

        <div class="login-wrapper">
          <div class="logo">
            <p class="westagram">Westagram</p>
          </div>

          <div class="login-container">
            <div class="id">
              <input
                onChange={this.handleIdnput}
                type="text"
                id="text"
                placeholder="Phone number, username, or email"
              />
            </div>

            <div class="pw">
              <input
                onChange={this.handlePwInput}
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>

            <div class="bt">
              <button class="login-btn">Log in</button>
            </div>
          </div>

          <div class="click">
            <a class="find-password">Forgot Password</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
