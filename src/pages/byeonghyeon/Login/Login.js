import { React, Component } from 'react';
import '../../byeonghyeon/common.scss';
import './Login.scss';

class LoginChoi extends Component {
  constructor(props) {
    super(props);
    this.regExpEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    this.state = {
      type: 'login',
      login: {
        id: '',
        pwd: '',
      },
      register: {
        userName: '',
        age: '',
        number: '',
        id: '',
        pwd: '',
        pwdConfirm: '',
      },
    };
  }

  changeType = () => {
    let type = this.state.type === 'login' ? 'register' : 'login';

    this.setState({
      type,
    });
    if (type === 'register') {
      this.setState({
        login: {
          ...this.state.login,
          id: '',
          pwd: '',
        },
      });
    } else {
      this.setState({
        register: {
          ...this.state.register,
          userName: '',
          age: '',
          number: '',
          id: '',
          pwd: '',
          pwdConfirm: '',
        },
      });
    }
  };

  goPath = () => {
    let { history } = this.props;
    history.push('/main/choi');
  };

  checkInput = () => {
    let { type } = this.state;
    let { id, pwd } = type === 'login' ? this.state.login : this.state.register;
    let { userName, age, number, pwdConfirm } = this.state.register;
    let isVal = false;

    if (type === 'login') {
      (id && pwd) !== '' && this.regExpEmail.test(id) && pwd.length >= 5
        ? (isVal = true)
        : (isVal = false);
      return isVal;
    } else {
      (userName && age && number && id && pwd && pwdConfirm) !== '' &&
      this.regExpEmail.test(id) &&
      (pwd.length && pwdConfirm.length) >= 5 &&
      pwd === pwdConfirm
        ? (this.isVal = true)
        : (this.isVal = false);
      return isVal;
    }
  };

  checkVal = event => {
    if (!event.target.nodeName === 'INPUT') return;

    if (event.target.classList.contains('input-id')) {
      if (this.state.type === 'login') {
        this.setState({
          login: {
            ...this.state.login,
            id: event.target.value,
          },
        });
      } else {
        this.setState({
          register: {
            ...this.state.register,
            id: event.target.value,
          },
        });
      }
    } else if (event.target.classList.contains('input-password')) {
      if (this.state.type === 'login') {
        this.setState({
          login: {
            ...this.state.login,
            pwd: event.target.value,
          },
        });
      } else {
        this.setState({
          register: {
            ...this.state.register,
            pwd: event.target.value,
          },
        });
      }
    }

    if (event.target.classList.contains('input-userName')) {
      this.setState({
        register: {
          ...this.state.register,
          userName: event.target.value,
        },
      });
    }

    if (event.target.classList.contains('input-number')) {
      this.setState({
        register: {
          ...this.state.register,
          number: event.target.value,
        },
      });
    }

    if (event.target.classList.contains('input-age')) {
      this.setState({
        register: {
          ...this.state.register,
          age: event.target.value,
        },
      });
    }

    if (event.target.classList.contains('input-passwordConfirm')) {
      this.setState({
        register: {
          ...this.state.register,
          pwdConfirm: event.target.value,
        },
      });
    }
  };

  render() {
    let { type } = this.state;

    return (
      <section className="login-container">
        <header className="login-header">
          <h1 className="logo logo-login">Westagram</h1>
        </header>
        <div className="login-form">
          <form onChange={this.checkVal} className="login-input-container">
            {type === 'register' && (
              <>
                <input
                  type="text"
                  className="login-input input-userName"
                  placeholder="사용자 이름"
                  defaultValue={this.state.register.userName}
                />
                <input
                  type="tel"
                  className="login-input input-number"
                  placeholder="사용자 번호"
                  defaultValue={this.state.register.number}
                />
                <input
                  type="number"
                  min="15"
                  max="80"
                  className="login-input input-age"
                  placeholder="사용자 나이"
                  defaultValue={this.state.register.age}
                />
              </>
            )}
            <input
              type="text"
              className="login-input input-id"
              placeholder="사용자 이메일"
              defaultValue={
                type === 'login' ? this.state.login.id : this.state.register.id
              }
            />
            <input
              type="password"
              className="login-input input-password"
              placeholder="비밀번호"
              defaultValue={
                type === 'login'
                  ? this.state.login.pwd
                  : this.state.register.pwd
              }
            />
            {type === 'register' && (
              <input
                type="password"
                className="login-input input-passwordConfirm"
                placeholder="비밀번호 확인"
                defaultValue={
                  type === 'login'
                    ? this.state.login.pwdConfirm
                    : this.state.register.pwdConfirm
                }
              />
            )}
          </form>
          <button
            onClick={this.goPath}
            disabled={this.checkInput() ? false : true}
            className={`login-btn ${
              this.checkInput() ? 'active-btn' : 'unactive-btn'
            }`}
          >
            {type === 'login' ? '로그인' : '회원가입'}
          </button>
        </div>
        <footer>
          <div className="register-link-container">
            <button onClick={this.changeType} className="register-link">
              {type === 'login' ? '회원가입' : '로그인'}
            </button>
          </div>
          <p className="footer-message">비밀번호를 잊으셨나요?</p>
        </footer>
      </section>
    );
  }
}

export default LoginChoi;
