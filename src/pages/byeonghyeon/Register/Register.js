import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../byeonghyeon/commonChoi.scss';
import './Register.scss';

class RegisterChoi extends Component {
  constructor(props) {
    super(props);
    this.regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    this.state = {
      name: '',
      id: '',
      pwd: '',
      contact: '',
      birth: '',
      hobby: '',
    };
    this.type = 'register';
  }
  goPath = () => {
    let { name, id, pwd, contact, birth, hobby } = this.state;
    let { history } = this.props;

    fetch('http://10.58.1.129:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email: id,
        password: pwd,
        contact,
        date_of_birth: birth,
        hobby,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          history.push('/login/choi');
        }
      });
  };

  checkInput = () => {
    let { name, id, pwd, contact, birth, hobby } = this.state;
    let isVal = false;

    (name && id && pwd && contact && birth && hobby) !== '' &&
    this.regExp.test(id) &&
    pwd.length >= 5
      ? (isVal = true)
      : (isVal = false);
    return isVal;
  };

  checkVal = event => {
    let { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    let { name, id, pwd, contact, birth, hobby } = this.state;
    return (
      <section className="login-container">
        <header className="login-header">
          <h1 className="logo logo-login">Westagram</h1>
        </header>
        <div className="login-form">
          <form className="login-input-container">
            <input
              type="text"
              className="login-input"
              placeholder="사용자 이름"
              defaultValue={name}
              name="name"
              onChange={this.checkVal}
            />
            <input
              type="text"
              className="login-input"
              placeholder="사용자 이메일"
              defaultValue={id}
              name="id"
              onChange={this.checkVal}
            />
            <input
              type="password"
              className="login-input"
              placeholder="사용자 비밀번호"
              defaultValue={pwd}
              name="pwd"
              onChange={this.checkVal}
            />
            <input
              type="text"
              className="login-input"
              placeholder="사용자 전화번호"
              defaultValue={contact}
              name="contact"
              onChange={this.checkVal}
            />
            <input
              type="text"
              className="login-input"
              placeholder="사용자 생년월일"
              defaultValue={birth}
              name="birth"
              onChange={this.checkVal}
            />
            <input
              type="text"
              className="login-input"
              placeholder="사용자 취미"
              defaultValue={hobby}
              name="hobby"
              onChange={this.checkVal}
            />
          </form>
          <button
            onClick={this.goPath}
            disabled={this.checkInput() ? false : true}
            className={`login-btn ${
              this.checkInput() ? 'active-btn' : 'unactive-btn'
            }`}
          >
            회원가입
          </button>
        </div>
        <footer>
          <div className="register-link-container">
            <Link to="/login/choi" className="register-link">
              {this.type === 'login' ? '회원가입' : '로그인'}
            </Link>
          </div>
          <p className="footer-message">비밀번호를 잊으셨나요?</p>
        </footer>
      </section>
    );
  }
}

export default RegisterChoi;
