import React, { Component } from 'react';
import selfiImg from '../../../assets/images/about.png';

class MainRight extends Component {
  render() {
    return (
      <>
        <div className="top">
          <img className="selfi" src={selfiImg} />
          <div className="main-right-name">
            <span id="eng-name">JiwanJeon94</span>
            <br />
            <span id="kr-name">전지완</span>
          </div>

          <a href="">Transform</a>
        </div>

        <div className="middle">
          <div className="middle-words">
            <span id="recommendation">Suggestion For You</span>
            <a href="" id="view-all">
              view all
            </a>
          </div>
          <div className="recommendation-people">
            <div id="recommendation-section1">
              <img id="recommendation-people-selfi" src={selfiImg} />
              <span>Recommendation for you</span>
              <a href="">Follow</a>
            </div>
            <div id="recommendation-section1">
              <img id="recommendation-people-selfi" src={selfiImg} />
              <span>Recommendation for you</span>
              <a href="">Follow</a>
            </div>
            <div id="recommendation-section1">
              <img id="recommendation-people-selfi" src={selfiImg} />
              <span>Recommendation for you</span>
              <a href="">Follow</a>
            </div>
            <div id="recommendation-section1">
              <img id="recommendation-people-selfi" src={selfiImg} />
              <span>Recommendation for you</span>
              <a href="">Follow</a>
            </div>
            <div id="recommendation-section1">
              <img id="recommendation-people-selfi" src={selfiImg} />
              <span>Recommendation for you</span>
              <a href="">Follow</a>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-top">
            <a href="">About</a>
            <a href="">Help</a>
            <a href="">press</a>
            <a href="">API</a>
            <a href="">Jobs</a>
            <a href="">Privacy</a>
            <a href="">Terms</a>
            <br />
            <a href="">Locations</a>
            <a href="">TopAccounts</a>
            <a href="">Hashtags</a>
            <a href="">Language</a>
            <br />
            <br />
          </div>
          <span>2021 INSTAGRAM FROM FACEBOOK</span>
        </div>
      </>
    );
  }
}

export default MainRight;
