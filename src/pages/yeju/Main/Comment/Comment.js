import React, { Component } from 'react';
import '../Feeds/Feeds.scss';

class Comment extends Component {
  render() {
    return (
      <>
        {this.props.commentList.map((el, i) => {
          return (
            <li className="inputCmt" key={i}>
              <span className="bold">{el.userName} </span>
              {el.content}
            </li>
          );
        })}
      </>
    );
  }
}

export default Comment;
