import { React, Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav';

import LoginChoi from './pages/byeonghyeon/Login/Login';
import MainChoi from './pages/byeonghyeon/Main/Main';

import LoginJiwan from './pages/jiwan/Login/Login';
import MainJiwan from './pages/jiwan/Main/Main';

import LoginYeju from './pages/yeju/Login/Login';
import MainYeju from './pages/yeju/Main/Main';

import LoginYounbee from './pages/younbee/Login/Login';
import MainYounbee from './pages/younbee/Main/Main';
class Routes extends Component {
  render() {
    return (
      <>
        <Nav />
        <BrowserRouter>
          <Switch>
            <Route exact path="/login-choi" component={LoginChoi} />
            <Route exact path="/Main-choi" component={MainChoi} />

            <Route exact path="/login-jiwan" component={LoginJiwan} />
            <Route exact path="/Main-jiwan" component={MainJiwan} />

            <Route exact path="/login-yeju" component={LoginYeju} />
            <Route exact path="/Main-yeju" component={MainYeju} />

            <Route exact path="/login-younbee" component={LoginYounbee} />
            <Route exact path="/Main-younbee" component={MainYounbee} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Routes;
