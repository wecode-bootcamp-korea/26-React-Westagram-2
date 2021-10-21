import React, { Component } from 'react';
import '../../styles/common.scss';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav className="main-nav">
        <div className="main-nav-left">
          <a href="#" className="nav-logo">
            <img src="/images/instagram.png" alt="icon" className="nav-logo" />
          </a>
          <div className="vl" />
          <div className="logo logo-main">Westagram</div>
        </div>
        <div className="main-nav-center">
          <input type="text" className="main-nav-input" placeholder="검색" />
        </div>
        <div className="main-nav-right">
          <button>
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="explore"
              className="nav-btn"
            />
          </button>
          <button>
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="heart"
              className="nav-btn"
            />
          </button>
          <button>
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="profile"
              className="nav-btn"
            />
          </button>
        </div>
      </nav>
    );
  }
}

export default Nav;
