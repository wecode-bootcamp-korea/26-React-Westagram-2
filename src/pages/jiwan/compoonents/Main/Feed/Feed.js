import React, { Component } from 'react';
import './Feed.scss';
import {
  FaRegHeart,
  FaRegComment,
  FaRegPaperPlane,
  FaRegBookmark,
  FaEllipsisH,
} from 'react-icons/fa';
import Comment from '../../../compoonents/Comment/Comment';

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      feedInfo: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/FeedInfo.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feedInfo: data,
        });
      });
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
  render() {
    // console.log(this.state.feedInfo);
    return (
      <div className="feeds">
        {/* {(this.feedList || []).map((article, i) => { */}
        {this.state.feedInfo.map((feedInfo, i) => {
          return (
            <div className="article" key={i}>
              <div className="identi">
                <img
                  className="selfi-identi"
                  alt="selfi-img"
                  src={feedInfo.selfiImg}
                />

                <span className="name"> {feedInfo.id} </span>

                <div className="faEllipsisH">
                  <FaEllipsisH />
                </div>
              </div>
              <div className="pic">
                <img id="feed-pic" src={feedInfo.feedImg} />
              </div>
              <div className="show-box">
                <div className="reaction-icons">
                  <FaRegHeart className="heart" />
                  <FaRegComment className="showBoxComment" />
                  <FaRegPaperPlane className="plane" />
                  <FaRegBookmark className="bookMark" />
                </div>

                <div className="like-counts">
                  <span>like 4,000</span>
                </div>

                <div className="check-comments">
                  <a id="space" href="">
                    expanding
                  </a>
                  <br />
                  <a href="">Check the all comments</a>
                  <ul className="feed-comments">
                    <Comment commentAddList={feedInfo.comment} />
                  </ul>
                </div>
              </div>
              <div className="comment">
                <i className="fa fa-smile-o" />
                <input
                  onKeyPress={this.addCommEnter}
                  onChange={this.getValue}
                  className="user-input"
                  type="text"
                  placeholder="Add Comment..."
                  value={this.state.value}
                  // 이 부분이 input안에 있는것을 빈 배열로 업데이트함
                />
                <button onClick={this.addComment} className="post">
                  Post
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Feed;
