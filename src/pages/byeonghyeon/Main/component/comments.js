import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Comments extends Component {
  render() {
    let { name, comment } = this.props;

    let isSkip = false;
    let addVal;
    if (comment.length > 20) {
      comment = comment.slice(0, comment.length - 6);
      isSkip = true;
      addVal = (
        <span style={{ color: '#dee2e6', fontSize: '6px' }}> 더보기...</span>
      );
    }

    return (
      <li className="comment-item">
        <div className="comment">
          <Link to="/login/choi" className="feed-bottom-account profile-name">
            {name}
          </Link>
          <span className="comment-content">{comment}</span>
          {isSkip && addVal}
        </div>
        <button className="comment-heart">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="heart"
          />
        </button>
      </li>
    );
  }
}

export default Comments;
