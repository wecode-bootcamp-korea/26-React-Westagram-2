import React, { Component } from 'react';
import Comment from '../Comment/Comment';
import './Feeds.scss';

class Feeds extends Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      comment: {
        userName: 'yestagram',
        content: '',
      },
    };
  }

  handleChange = e => {
    let { comment } = this.state;
    this.setState({
      comment: {
        ...comment,
        content: e.target.value,
      },
    });
  };

  clickComment = e => {
    let { commentList, comment } = this.state;
    this.setState({
      commentList: commentList.concat(comment),
      comment: {
        ...comment,
        content: '',
      },
    });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.clickComment();
    }
  };

  changeBtnColor = () => {
    let { comment } = this.state;
    return comment.content.length > 0 ? 'activebtn' : 'unactivebtn';
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }
  render() {
    const { comment, commentList } = this.state;

    return (
      <article className="feeds">
        <div className="feeds-title">
          <div className="feeds-profile">
            <div className="feeds-profile-img">
              <img
                alt="feed profile"
                src="https://images.unsplash.com/photo-1515041219749-89347f83291a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
              />
            </div>
            <div className="feeds-dsc">iammingki</div>
          </div>
          <div className="title-more">
            <i className="fa fa-ellipsis-h" aria-hidden="true" />
          </div>
        </div>
        <div className="feeds-img">
          <img
            alt="feed img"
            src="https://images.unsplash.com/photo-1579783483458-83d02161294e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1397&q=80"
          />
        </div>
        <div className="feeds-bottom">
          <div className="feeds-icon">
            <div className="feeds-icon3">
              <i className="fa fa-heart-o" />
              <i className="fa fa-comment-o" />
              <i className="fa fa-sign-out" />
            </div>
            <div className="feeds-icon-save">
              <i className="fa fa-bookmark-o" />
            </div>
          </div>
          <div className="feedLikes">
            <p className="feedLtext">
              <span className="textBold">aineworld</span>님 외{' '}
              <span className="textBold">10명</span>이 좋아합니다
            </p>
            <div className="feedDsc">
              <span className="textBold">iammingki </span>
              <span>위워크에서 진행한 베이킹 클래스...</span>
              <span className="feedDscMore">더 보기</span>
            </div>
            <div id="CMT_WRITE" className="feedComment" />
            <ul>
              <Comment commentList={commentList} />
            </ul>
            <p className="feedTime">42분 전</p>
          </div>
        </div>
        <div className="comment">
          <input
            className="inputComment"
            type="text"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            value={comment.content}
            placeholder="댓글 달기..."
          />
          <button
            type="button"
            className={`btnComment ${this.changeBtnColor()}`}
            onClick={this.clickComment}
          >
            게시
          </button>
        </div>
      </article>
    );
  }
}

export default Feeds;
