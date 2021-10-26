import { React, Component } from 'react';
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
  }
  goPath = () => {
    let { history } = this.props;
    history.push('/main/choi');
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
    if (!event.target.nodeName === 'INPUT') return;

    if (event.target.classList.contains('input-id')) {
      this.setState({
        id: event.target.value,
      });
    } else if (event.target.classList.contains('input-password')) {
      this.setState({
        pwd: event.target.value,
      });
    }
  };

  render() {
    let { id, pwd } = this.state;
    return (
      <section className="login-container">
        <header className="login-header">
          <h1 className="logo logo-login">Westagram</h1>
        </header>
        <div className="login-form">
          <form onChange={this.checkVal} className="login-input-container">
            <input
              type="text"
              className="login-input input-id"
              placeholder="사용자 이메일"
              defaultValue={id}
            />
            <input
              type="password"
              className="login-input input-password"
              placeholder="비밀번호"
              defaultValue={pwd}
            />
          </form>
          <button
            onClick={this.goPath}
            disabled={this.checkInput() ? false : true}
            className={`login-btn ${
              this.checkInput() ? 'active-btn' : 'unactive-btn'
            }`}
          >
            {/* {type === 'login' ? '로그인' : '회원가입'} */}
            로그인
          </button>
        </div>
        <footer>
          {/* <div className="register-link-container">
            <button onClick={this.changeType} className="register-link">
              {type === 'login' ? '회원가입' : '로그인'}
            </button>
          </div> */}
          <p className="footer-message">비밀번호를 잊으셨나요?</p>
        </footer>
      </section>
    );
  }
}
export default LoginChoi;
