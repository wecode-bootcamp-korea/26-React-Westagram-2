import { React, Component } from 'react';

import Feeds from './Feeds/Feeds.js';
import MainRight from './MainRight/MainRight.js';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <main className="main">
        <Feeds />
        <MainRight />
      </main>
    );
  }
}
export default Main;
