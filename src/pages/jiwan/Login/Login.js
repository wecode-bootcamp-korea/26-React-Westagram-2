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

        <div className="login-wrapper">
          <div className="logo">
            <p className="westagram">Westagram</p>
          </div>

          <div className="login-container">
            <div className="id">
              <input
                onChange={this.handleIdnput}
                type="text"
                id="text"
                placeholder="Phone number, username, or email"
              />
            </div>

            <div className="pw">
              <input
                onChange={this.handlePwInput}
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>

            <div className="bt">
              <button
                className={
                  this.state.inputIdValue.indexOf('@') !== -1 &&
                  this.state.inputPwValue.length >= 5
                    ? 'buttonAble'
                    : 'buttonDisable'
                }
                dissabled={
                  this.state.inputIdValue.indexOf('@') !== -1 &&
                  this.state.inputPwValue.length >= 5
                    ? false
                    : true
                }
              >
                Log in
              </button>
            </div>
          </div>

          <div className="click">
            <a claclassName="find-password">Forgot Password</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
