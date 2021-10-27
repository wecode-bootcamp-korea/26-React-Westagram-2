import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import '../../byeonghyeon/commonChoi.scss';
import './Login.scss';

class LoginChoi extends Component {
  constructor(props) {
    super(props);
    this.regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    this.state = {
      id: '',
      pwd: '',
    };
    this.type = 'login';
  }
  goPath = event => {
    if (event.type === 'keyup' && event.keyCode !== 13) return;

    let { id, pwd } = this.state;
    let { history } = this.props;

    fetch('http://10.58.1.129:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pwd,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          history.push('/main/choi');
        }
      });
  };

  checkInput = () => {
    let { id, pwd } = this.state;
    let isVal = false;

    (id && pwd) !== '' && this.regExp.test(id) && pwd.length >= 5
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
    let { id, pwd } = this.state;
    return (
      <section className="login-container">
        <header className="login-header">
          <h1 className="logo logo-login">Westagram</h1>
        </header>
        <div className="login-form">
          <form onKeyUp={this.goPath} className="login-input-container">
            <input
              type="text"
              className="login-input input-id"
              placeholder="사용자 이메일"
              defaultValue={id}
              name="id"
              onChange={this.checkVal}
            />
            <input
              type="password"
              className="login-input input-password"
              placeholder="비밀번호"
              defaultValue={pwd}
              name="pwd"
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
            로그인
          </button>
        </div>
        <footer>
          <div className="register-link-container">
            <Link to="/register/choi" className="register-link">
              {this.type === 'login' ? '회원가입' : '로그인'}
            </Link>
          </div>
          <p className="footer-message">비밀번호를 잊으셨나요?</p>
        </footer>
      </section>
    );
  }
}
export default LoginChoi;
