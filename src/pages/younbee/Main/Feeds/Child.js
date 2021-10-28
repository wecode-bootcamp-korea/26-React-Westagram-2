import React, { Component } from 'react';
import './Feeds.scss';

class Child extends Component {
  render() {
    return (
      <>
        {this.props.commentList.map(el => (
          <li key={el.id} className="item">
            <span className="itemText">{el.userName} </span>
            {el.talks}
          </li>
        ))}
      </>
    );
  }
}

export default Child;

const USER_NAME = 'jyb8509 ';
