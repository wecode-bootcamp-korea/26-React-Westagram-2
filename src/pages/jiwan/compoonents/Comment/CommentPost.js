import React, { Component } from 'react';

export class Child extends Component {
  render() {
    return (
      <div>
        {(this.props.commentList || []).map(comm => {
          return <li>{comm}</li>;
        })}
      </div>
    );
  }
}

export default Child;
