import { React, Component } from 'react';
import './Main.scss';

import Feeds from './Feeds/Feeds.js';
import MainRight from './MainRight/MainRight.js';

import { withRouter } from 'react-router-dom';

class MainYounbee extends Component {
  render() {
    return (
      <div className="main">
        <Feeds />
        <MainRight />
      </div>
    );
  }
}

export default withRouter(MainYounbee);
