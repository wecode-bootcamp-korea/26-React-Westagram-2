import React, { Component } from 'react';

class Comments extends Component {
  render() {
    let { name, comment, isLiked } = this.props;

    let isSkip = false;
    let addVal;
    if (comment.length > 20) {
      comment = comment.slice(0, comment.length - 3);
      isSkip = true;
      addVal = (
        <span style={{ color: '#dee2e6', fontSize: '6px' }}> 더보기...</span>
      );
    }

    return (
      <li className="comment-item">
        <div className="comment">
          <a href="#" className="feed-bottom-account profile-name">
            {name}
          </a>
          <span className="comment-content">{comment}</span>
          {isSkip && addVal}
        </div>
        <div>
          <button>
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="heart"
              className="comment-heart"
            />
          </button>
        </div>
      </li>
    );
  }
}

export default Comments;
