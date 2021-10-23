import { React, Component } from 'react';

import Feeds from './Feeds/Feeds.js';
import MainRight from './MainRight/MainRight.js';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Feeds />
        <MainRight />
      </div>
    );
  }
}
export default Main;
