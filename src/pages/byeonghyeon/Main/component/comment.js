import React, { Component, Fragment } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.items = [];
  }

  render() {
    this.items = this.props.comments.map((val, index) => {
      let isSkip = false;
      let addVal;
      if (val.length > 20) {
        val = val.slice(0, val.length - 3);
        isSkip = true;
        addVal = (
          <span style={{ color: '#dee2e6', fontSize: '6px' }}> 더보기...</span>
        );
      }
      return (
        <li key={index} className="comment-item">
          <div className="comment">
            <a href="#" className="feed-bottom-account profile-name">
              orange_97
            </a>
            <span className="comment-content">{val}</span>
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
    });

    return <Fragment>{this.items}</Fragment>;
  }
}

export default Comment;
