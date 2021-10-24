import React, { Component } from 'react';
// import "../../styles/common.scss";
import './Feed.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      commentList: [],
    };
  }

  getValue = event => {
    this.setState({
      value: event.target.value,
    });
  };

  addComment = () => {
    this.setState({
      commentList: this.state.commentList.concat([this.state.value]),
      value: '',
    });
  };

  addCommEnter = e => {
    if (e.key === 'Enter') {
      this.addComment();
    }
  };
  // enterClick = e => {
  //   if (e.key === 'Enter') {
  //     this.buttonClick;
  //     e.target.value = '';
  //   }
  // };

  render() {
    return (
      <div className="feeds">
        <div className="article">
          <div className="identi">
            <img className="selfi-identi" alt="selfi-img" src="about.png" />
            <span className="name"> Jiwan Jeon </span>

            {/* <i id="test" class="fa fa-ellipsis-h" aria-hidden="true"></i> */}
            <div className="faEllipsisH">
              <FontAwesomeIcon icon={faEllipsisH} />
            </div>
          </div>

          <div className="pic">
            <img id="feed-pic" src="ucscPic.png" />
          </div>

          <div className="show-box">
            <div className="reaction-icons">
              <FontAwesomeIcon icon={faHeart} className="heart" />
              <FontAwesomeIcon icon={faComment} className="comment" />
              <FontAwesomeIcon icon={faPaperPlane} className="plane" />
              <FontAwesomeIcon icon={faBookmark} className="bookMark" />
            </div>

            <div className="like-counts">
              <span>like 4,000</span>
            </div>

            <div className="check-comments">
              <span>
                UC Santa Cruz will continue to offer most courses remotely or
                online for spring and summer 2021, providing in-person
                instruction for a small
              </span>
              <a id="space" href="">
                expanding
              </a>
              <br />
              <a href="">Check the all comments</a>
              <ul className="feed-comments">
                <li>hello</li>
                {this.state.commentList.map((comm, idx) => {
                  return <li key={idx}>{comm}</li>;
                })}
                {/* map() 함수는 배열 안을 돌면서 콜백 함수를 인자로 받아 어떠한 함수처리를 해준 후 새로운 배열을 return 한다. 여기서 comm 은 입력한 값이고, 두번째 인자로는 배열의 index 가 들어온다.
key={idx} 부분은 작성하기 않을 시 아래와 같은 경고가 뜬다. */}
              </ul>
            </div>
          </div>
          <div className="comment">
            <i className="fa fa-smile-o" />
            <input
              // onChange={this.textChange}
              // onKeyPress={this.enterClick}
              onKeyPress={this.addCommEnter}
              onChange={this.getValue}
              className="user-input"
              type="text"
              placeholder="Add Comment..."
            />
            <button onClick={this.addComment} className="post">
              Post
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
