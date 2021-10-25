import React, { Component } from 'react';
import './MainRight.scss';

class MainRight extends Component {
  render() {
    return (
      <div className="main-right">
        <div className="id">
          <img
            className="me1"
            alt="me"
            src="https://media.istockphoto.com/photos/beautiful-woman-with-colors-smeared-on-her-face-picture-id1277619606?s=612x612"
          />
          <span className="english_id">
            <b>jyb0924</b>
          </span>
          <div className="korean_id">연비</div>
        </div>

        <div className="story">
          <div className="seeall">
            <span className="title">스토리</span>
            <span className="title2">
              <b>모두 보기</b>
            </span>
          </div>

          <div className="story_photo">
            <img
              className="img1"
              alt="img_1"
              src="https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg"
            />
            <span className="english_id1">
              <b>mamamia</b>
            </span>
            <div className="time1">16분 전</div>
            <img
              className="img2"
              alt="img_2"
              src="https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg"
            />
            <span className="english_id2">
              <b>papamia</b>
            </span>
            <div className="time2">3시간 전</div>
            <img
              className="img3"
              alt="img_3"
              src="https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg"
            />
            <span className="english_id3">
              <b>lalala</b>
            </span>
            <div className="time3">20시간 전</div>
            <img
              className="img4"
              alt="img_4"
              src="https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg"
            />
            <span className="english_id4">
              <b>hahaha</b>
            </span>
          </div>
        </div>

        {/* RECOMMAND */}

        <div className="recommend">
          <div className="recommend_foryou">
            <span className="title3">회원님을 위한 추천</span>
            <span className="title4">
              <b>모두 보기</b>
            </span>
          </div>

          <div className="recommend_photo">
            <img
              className="img4"
              alt="img_4"
              src="https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_960_720.jpg"
            />
            <img
              className="img1"
              alt="img_1"
              src="https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_960_720.jpg"
            />
            <img
              className="img3"
              alt="img_3"
              src="https://cdn.pixabay.com/photo/2016/02/13/13/11/oldtimer-1197800_960_720.jpg"
            />
          </div>

          <div className="id_recommend">
            <span className="recommend_id1">
              <b>joana</b>
            </span>
            <span className="recommend_id2">
              <b>palrekc</b>
            </span>
            <span className="recommend_id3">
              <b>shakira</b>
            </span>
          </div>

          <div className="id_likes">
            <div className="recommend_time1">best_1님 외 1명이 ...</div>
            <div className="recommend_time2">ahlekd님 외 12...</div>
            <div className="recommend_time3">akrarjimmin님 외 1...</div>
          </div>

          <div className="follow">
            <span className="follow1">팔로우</span>
            <span className="follow2">팔로우</span>
            <span className="follow3">팔로우</span>
          </div>
        </div>

        {/* FOOTER */}

        <div className="back-tag">
          <span>Instagram 정보 ㆍ</span>
          <span>지원 ㆍ</span>
          <span>홍보 센터 ㆍ</span>
          <span>API ㆍ</span>
          <span>채용 정보 ㆍ</span>
          <span>개인정보처리방침 ㆍ</span>
          <span>약관 ㆍ</span>
          <span>디렉터리 ㆍ</span>
          <span>프로필 ㆍ</span>
          <span>해시태그 ㆍ</span>
          <span>언어</span>

          <p>&copy;2021 INSTAGRAM FROM FACEBOOK</p>
        </div>
      </div>
    );
  }
}
export default MainRight;
