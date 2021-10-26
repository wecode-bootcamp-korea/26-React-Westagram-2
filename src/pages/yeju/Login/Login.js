import React, { Component } from 'react';

import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validationCheck = e => {
    if (this.state.id.indexOf('@') !== -1 && this.state.pw.length > 4) {
      this.props.history.push('/Main/yeju');
    }
  };
  changeHandlerBgColor = () => {
    return this.state.id.includes('@') && this.state.pw.length >= 5
      ? 'login_btn_on'
      : 'login_btn';
  };

  render() {
    const { id, pw } = this.state;

    return (
      <div className="Login">
        <div className="login_wrapper">
          <div className="login_logo">Westagram</div>
          <form className="login_form">
            <input
              className="login_text"
              name="id"
              value={id}
              onChange={this.handleChange}
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              className="login_text"
              name="pw"
              value={pw}
              onChange={this.handleChange}
              type="password"
              placeholder="비밀번호"
            />

            <button
              type="submit"
              onClick={this.validationCheck}
              className={this.changeHandlerBgColor()}
            >
              로그인
            </button>
          </form>
          <p className="login_bottom">비밀번호를 잊으셨나요?</p>
        </div>
      </div>
    );
  }
}

export default Login;
