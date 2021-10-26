import { React, Component } from 'react';
import '../commonChoi.scss';
import './Main.scss';
import Feeds from './component/feeds/feeds';
import Right from './component/right/right';

class MainChoi extends Component {
  render() {
    return (
      <div className="body-contaier">
        <div className="main-container">
          <Feeds />
          <Right />
        </div>
      </div>
    );
  }
}

export default MainChoi;
