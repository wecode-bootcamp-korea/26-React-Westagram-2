import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Login.scss';

class Login extends Component {
  keyLength = e => {
    // console.log(e.target.value);
    if (e.target.value === 'e') {
    }
  };

  render() {
    return (
      <div className="Login">
        <div className="login_wrapper">
          <div className="login_logo">Westagram</div>
          <form className="login_form">
            <input
              onKeyUp={this.keyLength}
              className="login_text"
              type="text"
              name="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onKeyUp={this.keyLength}
              className="login_text"
              type="password"
              name="id"
              placeholder="비밀번호"
            />
            <Link to="/main/yeju">
              <button id="LOGIN_BTN" className="login_btn" type="button">
                로그인
              </button>
            </Link>
          </form>
          <p className="login_bottom">비밀번호를 잊으셨나요?</p>
        </div>
      </div>
    );
  }
}

export default Login;
