import React, { Component } from 'react';
import CommentList from './commentList';

class Bottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
    };
    this.inputRef = null;
    this.btnRef = null;
  }

  storeItem = event => {
    if (event.target !== this.btnRef && event.keyCode !== 13) return;
    if (this.inputRef.value === '') return;

    this.setState({
      val: this.inputRef.value,
    });
    this.inputRef.value = '';
    this.inputRef.focus();
  };

  render() {
    let { val } = this.state;

    return (
      <>
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
              <CommentList userName="choi" content={val} />
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
      </>
    );
  }
}

export default Bottom;
