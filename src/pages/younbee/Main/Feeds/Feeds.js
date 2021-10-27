import React, { Component } from 'react';
import Child from './Child';
import './Feeds.scss';

class Feeds extends Component {
  constructor() {
    super();
    this.state = {
      newComment: '',
      comments: [],
    };
  }

  textChange = e => {
    this.setState({
      newComment: e.target.value,
    });
  };

  add = () => {
    let arr = this.state.comments;
    arr.push({
      text: this.state.newComment,
    });

    this.setState({
      comments: arr,
      newComments: '',
    });
  };

  pressEnter = e => {
    if (e.key === 'Enter' && this.state.newComment) {
      this.add();
      e.target.value = '';
      this.setState({
        newComment: '',
      });
    }
  };

  render() {
    return (
      <div className="feeds">
        <article className="container">
          <div className="line">
            <img
              className="me"
              alt="me_01"
              src="https://media.istockphoto.com/photos/beautiful-woman-with-colors-smeared-on-her-face-picture-id1277619606?s=612x612"
            />
            <span className="text1">
              <b>jyb0924</b>
            </span>
            <img
              className="seemore"
              alt="seemore"
              src="https://dennisagle.files.wordpress.com/2013/08/threedot.jpg"
              // onClick={this.goToLogin}
            />
          </div>

          <div className="photo">
            <img
              className="main_img"
              alt="main_image"
              src="https://media.istockphoto.com/photos/woman-standing-on-the-stairs-picture-id873375304?k=20&m=873375304&s=612x612&w=0&h=RxgCX3B5F1YyKj3usV6oDD8NsIUBX7XBLvAi3AGKSvE="
            />
          </div>

          <div className="heart">
            <div className="heart-box">
              <img
                className="redHeart"
                alt="redHeart"
                src="https://as2.ftcdn.net/jpg/02/59/94/11/220_F_259941157_WVd0cqQtQXrUiGcQeegO6cex4tT3HMdd.jpg"
              />
              <img
                className="talk"
                alt="talk"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNBT1qTF0fM3tg_CRZuLwheUPmIVxOfTV7x7_JL2rKa7pmVdKbTlk9J1KljbouPQEe04&usqp=CAU"
              />
              <img
                className="save"
                alt="save"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNoIBS_IV0PixcjxuIu9aRFSeDYGIBjMyVkhVlajQpcS2kInWSWVmnL4NDsq5Eo5suhaI&usqp=CAU"
              />
              <img
                className="tag"
                alt="tag"
                src="https://www.freepngimg.com/thumb/instagram/60239-like-icons-bookmark-button-computer-facebook-instagram-thumb.png"
              />
            </div>
          </div>

          <div className="heart_line">
            <img
              className="heart_lne"
              alt="33dung"
              src="https://cdn.pixabay.com/photo/2016/03/26/22/22/happy-1281590_960_720.jpg"
            />
            <div className="text2">33dung님 외 100명이 좋아합니다</div>
          </div>

          <div className="many_lines">
            <ul className="items">
              <Child commentList={this.state.comments} />
              {/* {this.state.comments.map(el => (
                <li className="item">
                  <span className="itemText">{USER_NAME}</span>
                  {el.text}
                </li>
              ))} */}
            </ul>
          </div>

          <hr />

          <div className="comment">
            <input
              className="input"
              type="text"
              placeholder="댓글 달기..."
              onChange={this.textChange}
              onKeyPress={this.pressEnter}
              value={this.state.newComment}
            />
            <button className="itemAdd" onClick={this.add}>
              <a href="javascript:void(0)">게시</a>
            </button>
          </div>
        </article>
      </div>
    );
  }
}

export default Feeds;

const USER_NAME = 'jyb0924 ';
