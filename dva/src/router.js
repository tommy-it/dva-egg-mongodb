import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import BusinessPage from './routes/BusinessPage';
import TrustPage from './routes/TrustPage';
import LocationPage from './routes/LocationPage';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/personal" exact component={IndexPage} />
        <Route path="/business" exact component={BusinessPage} />
        <Route path="/trust" exact component={TrustPage} />
        <Route path="/location" exact component={LocationPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
