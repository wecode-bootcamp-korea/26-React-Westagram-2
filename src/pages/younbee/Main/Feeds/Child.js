import React, { Component } from 'react';
import './Feeds.scss';

class Child extends Component {
  render() {
    return (
      <>
        {this.props.commentList.map(el => (
          <li className="item">
            <span className="itemText">{USER_NAME}</span>
            {el.text}
          </li>
        ))}
      </>
    );
  }
}

export default Child;

const USER_NAME = 'jyb8509 ';
