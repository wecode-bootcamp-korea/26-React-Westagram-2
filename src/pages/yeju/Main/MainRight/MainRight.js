import React, { Component } from 'react';
import './MainRight.scss';

class MainRight extends Component {
  render() {
    return (
      <div className="main-right">
        <div className="profile">
          <div className="profile-img">
            <img
              alt="profile img"
              src="https://images.unsplash.com/photo-1579807351146-e6dd49462635?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
            />
          </div>
          <div className="profile-dsc">
            <a href="./Main.js">yestagram</a>
            <p>yeju | 예주</p>
          </div>
        </div>

        <div className="story">
          <div className="story-title">
            <span>스토리</span>
            <a href="./Main.js">모두 보기</a>
          </div>
          <div className="story-profile-box">
            <div className="story-profile">
              <div className="story-profile-img">
                <img
                  alt="profile img"
                  src="https://images.unsplash.com/photo-1536164261511-3a17e671d380?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=682&q=80"
                />
              </div>
              <div className="story-profile-dsc">
                <a href="./Main.js">jouyandeh</a>
                <p>16분 전</p>
              </div>
            </div>
            <div className="story-profile">
              <div className="story-profile-img">
                <img
                  alt="profile img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                />
              </div>
              <div className="story-profile-dsc">
                <a href="./Main.js">michaeldam</a>
                <p>58분 전</p>
              </div>
            </div>
            <div className="story-profile">
              <div className="story-profile-img">
                <img
                  alt="profile img"
                  src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                />
              </div>
              <div className="story-profile-dsc">
                <a href="./Main.js">hoooooyeony</a>
                <p>1시간 전</p>
              </div>
            </div>
            <div className="story-profile">
              <div className="story-profile-img">
                <img
                  alt="profile img"
                  src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80"
                />
              </div>
              <div className="story-profile-dsc">
                <a href="./Main.js">lucatero</a>
                <p>2시간 전</p>
              </div>
            </div>
            <div className="story-profile">
              <div className="story-profile-img">
                <img
                  alt="profile img"
                  src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
                />
              </div>
              <div className="story-profile-dsc">
                <a href="./Main.js">inegeart</a>
                <p>4시간 전</p>
              </div>
            </div>
          </div>
        </div>

        <div className="reccom">
          <div className="reccom-title">
            <span>회원님을 위한 추천</span>
            <a href="./Main.js">모두 보기</a>
          </div>
          <div className="reccom-content">
            <div className="reccom-profile">
              <div className="reccom-profile-img">
                <img
                  alt="profile img"
                  src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=710&q=80"
                />
              </div>
              <div className="reccom-profile-dsc">
                <a href="./Main.js">muniknunes</a>
                <p>jouyandeh님 외 2명이..</p>
              </div>
            </div>
            <button className="reccom-follow"> 팔로우 </button>
          </div>
          <div className="reccom-content">
            <div className="reccom-profile">
              <div className="reccom-profile-img">
                <img
                  alt="profile img"
                  src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                />
              </div>
              <div className="reccom-profile-dsc">
                <a href="./Main.js">camilamorrone</a>
                <p>_joaaaahye님 외 2명이..</p>
              </div>
            </div>
            <button className="reccom-follow"> 팔로우 </button>
          </div>
          <div className="reccom-content">
            <div className="reccom-profile">
              <div className="reccom-profile-img">
                <img
                  alt="profile img"
                  src="https://images.unsplash.com/photo-1634141406667-1a7d17e73576?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
                />
              </div>
              <div className="reccom-profile-dsc">
                <a href="./Main.js">indiancricketteam</a>
                <p>hoooooyeony님 외 2..</p>
              </div>
            </div>
            <button className="reccom-follow"> 팔로우 </button>
          </div>
        </div>

        <div className="right-footer">
          <p>
            Instagram 정보 · 지원 · 홍보 센터 · API ·<br />
            채용 정보 · 개인정보처리방침 · 약관 ·<br />
            디렉터리 · 프로필 · 해시태그 · 언어{' '}
          </p>
          <p>© 2021 INSTAGRAM</p>
        </div>
      </div>
    );
  }
}

export default MainRight;
