import React, { Component, Fragment } from 'react';
import Comments from '../comments';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.content === '') return null;
    else return { comments: prevState.comments.concat(nextProps) };
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
    let { comments } = this.state;

    return (
      <>
        {comments.map(({ userName, content }, index) => {
          return <Comments key={index} name={userName} comment={content} />;
        })}
      </>
    );
  }
}

export default CommentList;
