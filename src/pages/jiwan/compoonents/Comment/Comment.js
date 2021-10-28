import React, { Component } from 'react';
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
