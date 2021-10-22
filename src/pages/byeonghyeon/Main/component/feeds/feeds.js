import React, { Component } from 'react';
import Comment from '../comment';
import './feeds.scss';

class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
      comments: [],
    };
    this.inputRef = null;
    this.btnRef = null;
  }

  storeItem = event => {
    if (event.target !== this.btnRef && event.keyCode !== 13) return;
    this.setState({
      comments: [...this.state.comments, this.state.val], // (o)
      // this.state.comments.concat(this.state.val) (o)
      // this.state.comments.push(this.state.val) (x)
      //불변성 유지
    });
    this.inputRef.value = '';
  };

  inputComment = event => {
    let val = event.target.value;
    if (val.length === '') return;
    this.setState({
      val,
    });
  };

  render() {
    return (
      <div className="feeds">
        <article className="feed">
          <div className="profile-container">
            <div className="profile-left">
              <figure className="profile-item-photo" />
              <span className="profile-name feed-profile-name">choi_95</span>
            </div>
            <div className="profile-right">
              <button>
                <i className="fa fa-ellipsis-h" />
              </button>
            </div>
          </div>
          <div className="feed-img" />
          <div className="feed-func-container">
            <div className="feed-func-left">
              <button className="feed-func-btn">
                <i className="fa fa-heart-o" />
              </button>
              <button className="feed-func-btn">
                <i className="fa fa-comment-o" />
              </button>
              <button className="feed-func-btn">
                <i className="fa fa-paper-plane-o" />
              </button>
            </div>
            <div className="feed-func-right">
              <button className="feed-func-btn">
                <i className="fa fa-bookmark-o" />
              </button>
            </div>
          </div>
          <div className="feed-bottom-container">
            <div className="like-container">
              <figure className="like-item" />
              <p>
                <span style={{ fontWeight: 'bold' }}>abcd_94</span>님{' '}
                <span style={{ fontWeight: 'bold' }}>외 48명</span>이 좋아합니다
              </p>
            </div>
            <div className="comment-container">
              <ul className="comment-list">
                <Comment comments={this.state.comments} />
              </ul>
            </div>
            <div className="feed-bottom-date">
              <span />
            </div>
          </div>
          <div className="comment-input-container">
            <input
              ref={ref => {
                this.inputRef = ref;
              }}
              onChange={this.inputComment}
              onKeyDown={this.storeItem}
              type="text"
              placeholder="댓글 달기..."
              className="comment-input"
            />
            <button
              ref={ref => {
                this.btnRef = ref;
              }}
              onClick={this.storeItem}
              className="post-comment-btn"
            >
              게시
            </button>
          </div>
        </article>
      </div>
    );
  }
}

export default Feeds;
