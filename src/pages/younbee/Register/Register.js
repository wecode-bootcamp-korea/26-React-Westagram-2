import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Register.scss';

class RegisterYounbee extends Component {
  goToLogin = () => {
    this.props.history.push('/login/younbee');
  };

  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      inputID: '',
      inputPw: '',
      contact: '',
      birth: '',
      hobby: '',
    };
  }

  componentDidMount() {
    fetch('http://10.58.1.129:8000/users/signup', {
      method: 'POST',
      body: JSON.stringity({
        name: this.state.name,
        email: this.state.email,
        password: this.state.inputPw,
        contact: this.state.contact,
        birth: this.state.birth,
        hobby: this.state.hobby,
      })
        .then(response => response.json())
        .then(result => console.log('결과', result)),
    });
  }

  handleIdInput = event => {
    this.setState({
      inputId: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      inputPw: event.target.value,
    });
  };

  checkValid = () => {
    this.state.inputId.includes('@') && this.state.inputPw.length >= 5
      ? this.setState({ loginButton: true })
      : this.setState({ loginButton: false });
  };

  render() {
    return (
      <div className="login-container1">
        <div className="frontText">westagram</div>
        <input
          type="text"
          id="name"
          placeholder="이름"
          onChange={this.handleIdInput}
          onKeyUp={this.checkValid}
        />
        <input
          type="text"
          id="email"
          placeholder="email"
          onChange={this.checkValid}
          onKeyUp={this.handlePwInput}
        />
        <input
          type="password"
          id="re-password"
          placeholder="비밀번호"
          onChange={this.checkValid}
          onKeyUp={this.handlePwInput}
        />
        <input
          type="text"
          id="contact"
          placeholder="contact"
          onChange={this.checkValid}
          onKeyUp={this.handlePwInput}
        />
        <input
          type="text"
          id="date-of-birth"
          placeholder="date-of-birth"
          onChange={this.checkValid}
          onKeyUp={this.handlePwInput}
        />
        <input
          type="text"
          id="hobby"
          placeholder="hobby"
          onChange={this.checkValid}
          onKeyUp={this.handlePwInput}
        />
        <button
          className={`login-btn ${
            this.state.loginButton ? 'activebtn' : 'unactivebtn'
          }`}
          onClick={this.goToLogin}
        >
          {' '}
          로그인
          {/* <Link to="/main/younbee">로그인</Link> */}
        </button>
        <div className="bottomText">비밀번호를 잊으셨나요?</div>
      </div>
    );
  }
}
export default withRouter(RegisterYounbee);
