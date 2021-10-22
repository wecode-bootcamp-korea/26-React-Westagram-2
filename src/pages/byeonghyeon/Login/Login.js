import { React, Component } from 'react';
import '../../byeonghyeon/common.scss';
import './Login.scss';

class LoginChoi extends Component {
  constructor(props) {
    super(props);
    this.isVal = false;
    this.regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  }
  state = {
    id: '',
    pwd: '',
  };

  goMain = () => {
    this.props.history.push('/main/choi');
  };

  checkInput = () => {
    this.regExp.test(this.state.id) && this.state.pwd.length >= 5
      ? (this.isVal = true)
      : (this.isVal = false);
    return this.isVal;
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
    console.log(this.state.id, this.state.pwd); // batchedUpdate
    // if((this.state.id && this.state.pwd) !== '') {
    //     console.log(this.btn.style);
    //     this.btn.style.backgroundColor = '#0095f6';
    // }
  };

  render() {
    return (
      <section className="login-container">
        <header className="login-header">
          <h1 className="logo logo-login">Westagram</h1>
        </header>
        <div className="login-form">
          <div onChange={this.checkVal} className="login-input-container">
            <input
              type="text"
              className="login-input input-id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              type="password"
              className="login-input input-password"
              placeholder="비밀번호"
            />
          </div>
          <button
            onClick={this.goMain}
            disabled={
              (this.state.id && this.state.pwd) !== '' && this.checkInput()
                ? false
                : true
            }
            style={
              (this.state.id && this.state.pwd) !== '' && this.checkInput()
                ? { backgroundColor: '#0095f6' }
                : { backgroundColor: '#b9dffc' }
            }
            ref={ref => (this.myRef = ref)}
            className="login-btn"
          >
            로그인
          </button>
          {/* <button ref={ref => this.myRef = ref} className="login-btn">로그인</button> */}
        </div>
        <footer className="login-footer">
          <span className="footer-message">비밀번호를 잊으셨나요?</span>
        </footer>
      </section>
    );
  }
}

export default LoginChoi;
