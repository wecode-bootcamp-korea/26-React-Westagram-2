import React, { Component } from 'react';
// import "../../styles/common.scss";
import './Feed.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faComment,
  faPaperPlane,
  faBookmark,
  faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';

class Nav extends Component {
  render() {
    return (
      <div className="feeds">
        <div className="article">
          <div className="identi">
            <img className="selfi-identi" alt="selfi-img" src="about.png" />
            <span className="name"> Jiwan Jeon </span>

            {/* <i id="test" class="fa fa-ellipsis-h" aria-hidden="true"></i> */}
            <div className="faEllipsisH">
              <FontAwesomeIcon icon={faEllipsisH} />
            </div>
          </div>

          <div className="pic">
            <img id="feed-pic" src="ucscPic.png" />
          </div>

          <div className="show-box">
            <div className="reaction-icons">
              <FontAwesomeIcon icon={faHeart} className="heart" />
              <FontAwesomeIcon icon={faComment} className="comment" />
              <FontAwesomeIcon icon={faPaperPlane} className="plane" />
              <FontAwesomeIcon icon={faBookmark} className="bookMark" />
            </div>

            <div className="like-counts">
              <span>like 4,000</span>
            </div>

            <div className="check-comments">
              <span>
                UC Santa Cruz will continue to offer most courses remotely or
                online for spring and summer 2021, providing in-person
                instruction for a small
              </span>
              <a id="space" href="">
                expanding
              </a>
              <br />
              <a href="">Check the all comments</a>
              <ul className="feed-comments">
                <li>test</li>
              </ul>
            </div>
          </div>
          <div className="comment">
            <i className="fa fa-smile-o" />
            <input
              className="user-input"
              type="text"
              placeholder="Add Comment..."
            />
            <button className="post">Post</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
