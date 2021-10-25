import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class LoginYounbee extends Component {
  constructor() {
    super();

    this.state = {
      inputId: '',
      inputPw: '',
    };
  }

  handleIdInput = event => {
    this.setState({
      inputId: `${event.target.value}`,
    });
  };

  handleIdInput = event => {
    this.setState({
      inputPw: `${event.target.value}`,
    });
  };

  render() {
    return (
      <div className="login-container">
        <div className="frontText">westagram</div>
        <input
          type="text"
          id="password"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={this.handleIdInput}
        />
        <input
          type="password"
          id="re-password"
          placeholder="비밀번호"
          onChange={this.handleIdInput}
        />
        <button className="login-btn">
          <Link to="/main/younbee">로그인</Link>
        </button>
        <div className="bottomText">비밀번호를 잊으셨나요?</div>
      </div>
    );
  }
}

export default LoginYounbee;
