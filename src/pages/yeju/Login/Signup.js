import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      id: '',
      password: '',
      contact: '',
    };
  }

  dataPost = () => {
    console.log('hello');
    fetch('http://10.58.2.138:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.id,
        password: this.state.password,
        contact: this.state.contact,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validationCheck = e => {
    if (this.state.id.indexOf('@') !== -1 && this.state.pw.length > 4) {
      this.props.history.push('/Main/yeju');
      this.dataPost();
    }
  };

  changeHandlerBgColor = () => {
    return this.state.id.includes('@') && this.state.pw.length >= 5
      ? 'activebtn'
      : 'unactivebtn';
  };

  render() {
    const { name, id, password, contact } = this.state;

    return (
      <div className="Login">
        <div className="login_wrapper">
          <div className="login_logo">Westagram</div>
          <form className="login_form">
            <input
              className="login_text"
              name="name"
              value={name}
              onChange={this.handleChange}
              type="text"
              placeholder="이름"
            />
            <input
              className="login_text"
              name="id"
              value={id}
              onChange={this.handleChange}
              type="text"
              placeholder="이메일"
            />
            <input
              className="login_text"
              name="password"
              value={password}
              onChange={this.handleChange}
              type="password"
              placeholder="비밀번호"
            />
            <input
              className="login_text"
              name="contact"
              value={contact}
              onChange={this.handleChange}
              type="text"
              placeholder="전화번호"
            />
            <button
              type="submit"
              onClick={this.validationCheck}
              className={`login_btn ${this.changeHandlerBgColor()}`}
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
