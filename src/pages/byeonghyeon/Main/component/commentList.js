import React, { Component, Fragment } from 'react';
import Comments from '../comments';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          comments: data,
        });
      });
  }

  render() {
    let { comment } = this.props;
    let { comments } = this.state;

    return (
      <>
        {comments.map(({ id, username, content, isLiked }) => {
          return (
            <Comments
              key={id}
              name={username}
              comment={content}
              isLiked={isLiked}
            />
          );
        })}
      </>
    );
  }
}

export default CommentList;
