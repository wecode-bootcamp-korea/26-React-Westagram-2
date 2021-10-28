import { React, Component } from 'react';
import Nav from './components/Nav/Nav';

import LoginChoi from './pages/byeonghyeon/Login/Login';
import MainChoi from './pages/byeonghyeon/Main/Main';

import LoginJiwan from './pages/jiwan/Login/Login';
import MainJiwan from './pages/jiwan/Main/Main';

import LoginYeju from './pages/yeju/Login/Login';
import MainYeju from './pages/yeju/Main/Main';

import LoginYounbee from './pages/younbee/Login/Login';
import MainYounbee from './pages/younbee/Main/Main';
import RegisterYounbee from './pages/younbee/Register/Register';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/login/choi" component={LoginChoi} />
          <Route exact path="/main/choi" component={MainChoi} />

          <Route exact path="/login/jiwan" component={LoginJiwan} />
          <Route exact path="/main/jiwan" component={MainJiwan} />

          <Route exact path="/login/yeju" component={LoginYeju} />
          <Route exact path="/main/yeju" component={MainYeju} />

          <Route exact path="/login/younbee" component={LoginYounbee} />
          <Route exact path="/register/younbee" component={RegisterYounbee} />
          <Route exact path="/main/younbee" component={MainYounbee} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
