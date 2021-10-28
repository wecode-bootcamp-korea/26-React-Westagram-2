import React, { Component } from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';

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

  loadToMain = () => {
    // this.props.history.push('/main/jiwan');
    fetch('http://10.58.1.234:8000/jbj/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.inputIdValue,
        password: this.state.inputPwValue,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.toekn)
          // console.log(result);
          return this.props.history.push('/main/jiwan');
        else return alert('fail');
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
                onClick={this.loadToMain}
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

export default withRouter(Login);
