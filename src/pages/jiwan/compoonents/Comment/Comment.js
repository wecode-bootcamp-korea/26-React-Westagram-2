import React, { Component } from 'react';
import COMMENT_LIST from './CommentData';
import './Comment.css';

export class Comment extends Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentValue: '',
    };
  }

  render() {
    return (
      <>
        {/* {this.props.commentAddList.map((comm, idx) => {
          return <li key={idx}>{comm}</li>; */}
        {/* {COMMENT_LIST.map(comment => {
          return (
            <li className="commentContainer">
              <span className="commentUserName">{comment.userName}</span>
              <span className="commentContent">{comment.content}</span>
            </li>
          );
        })} */}
        {this.props.commentAddList.map(comment => {
          //props
          return (
            <li className="commentContainer">
              <span className="commentUserName">{comment.userName}</span>
              <span className="commentContent">{comment.content}</span>
            </li>
          );
        })}
      </>
    );
  }
}

export default Comment;
