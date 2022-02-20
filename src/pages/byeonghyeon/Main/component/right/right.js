import React, { Component } from 'react';
import './right.scss';

class Right extends Component {
  render() {
    return (
      <div className="main-right">
        <header className="main-right-header">
          <figure className="header-item-photo" />
          <div className="header-item-account">
            <p>wecode_bootcamp</p>
            <p>Wecode | 위코드</p>
          </div>
        </header>
        <div className="story-container">
          <div className="front">
            <span>스토리</span>
            <span>모두 보기</span>
          </div>
          <ul className="story-list">
            <li className="story-list-item">
              <div className="story">
                <div className="story-circle">
                  <figure className="story-profile" />
                </div>
              </div>
              <div className="story-account-name">
                <p>choi_95</p>
                <p>16분 전</p>
              </div>
            </li>
            <li className="story-list-item">
              <div className="story">
                <div className="story-circle">
                  <figure className="story-profile" />
                </div>
              </div>
              <div className="story-account-name">
                <p>choi_95</p>
                <p>16분 전</p>
              </div>
            </li>
            <li className="story-list-item">
              <div className="story">
                <div className="story-circle">
                  <figure className="story-profile" />
                </div>
              </div>
              <div className="story-account-name">
                <p>choi_95</p>
                <p>16분 전</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="recommend-container">
          <div className="front">
            <span>회원님을 위한 추천</span>
            <span>모두 보기</span>
          </div>
          <ul className="recommend-list">
            <li className="recommend-list-item">
              <div className="recommend">
                <figure className="recommend-profile" />
                <div className="recommend-account-name">
                  <p>choi_95</p>
                  <p>orange_90님 외 2명이...</p>
                </div>
              </div>
              <button className="follow-btn">
                <span className="follow">팔로우</span>
              </button>
            </li>
            <li className="recommend-list-item">
              <div className="recommend">
                <figure className="recommend-profile" />
                <div className="recommend-account-name">
                  <p>choi_95</p>
                  <p>orange_90님 외 2명이...</p>
                </div>
              </div>
              <button className="follow-btn">
                <span className="follow">팔로우</span>
              </button>
            </li>
            <li className="recommend-list-item">
              <div className="recommend">
                <figure className="recommend-profile" />
                <div className="recommend-account-name">
                  <p>choi_95</p>
                  <p>orange_90님 외 2명이...</p>
                </div>
              </div>
              <button className="follow-btn">
                <span className="follow">팔로우</span>
              </button>
            </li>
          </ul>
        </div>
        <footer className="main-right-footer">
          <p>
            Instagram 정보 . 지원 . 홍보 센터 . API . <br /> 채용 정보 .
            개인정보처리방침 . 약관 . <br /> 디렉터리 . 프로필 . 해시태그 .언어
          </p>
          <p>© 2019 INSTAGRAM</p>
        </footer>
      </div>
    );
  }
}

export default Right;
