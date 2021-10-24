import React, { Component } from 'react';
import './Main.scss';
import './Common.scss';

import Nav from '../../../components/Nav/Nav';

import Feed from '../compoonents/Main/Feed/Feed';

import MainRight from '../compoonents/Main/Main-Right/MainRight';

class Main extends Component {
  render() {
    return (
      <div class="main-wrapper">
        <Nav />

        <div class="main">
          <Feed />
        </div>

        <div class="main-right">
          <MainRight />
        </div>
      </div>
    );
  }
}

export default Main;
