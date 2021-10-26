import React, { Component } from 'react';
import Bottom from '../bottom';
import './feeds.scss';

class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data,
        });
      });
  }

  render() {
    let { feeds } = this.state;
    return (
      <div className="feeds">
        {feeds.map(({ userName, profileImg, feedImg }, index) => {
          return (
            <article key={index} className="feed">
              <div className="profile-container">
                <div className="profile-left">
                  <figure
                    style={{
                      backgroundImage: `url(${profileImg})`,
                    }}
                    className="profile-item-photo"
                  />
                  <span className="profile-name feed-profile-name">
                    {userName}
                  </span>
                </div>
                <div className="profile-right">
                  <button>
                    <i className="fa fa-ellipsis-h" />
                  </button>
                </div>
              </div>
              <div
                style={{
                  backgroundImage: `url(${feedImg})`,
                }}
                className="feed-img"
              />
              <div className="feed-func-container">
                <div className="feed-func-left">
                  <button className="feed-func-btn">
                    <i className="fa fa-heart-o" />
                  </button>
                  <button className="feed-func-btn">
                    <i className="fa fa-comment-o" />
                  </button>
                  <button className="feed-func-btn">
                    <i className="fa fa-paper-plane-o" />
                  </button>
                </div>
                <div className="feed-func-right">
                  <button className="feed-func-btn">
                    <i className="fa fa-bookmark-o" />
                  </button>
                </div>
              </div>
              <Bottom />
            </article>
          );
        })}
      </div>
    );
  }
}

export default Feeds;
