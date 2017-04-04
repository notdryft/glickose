import React from 'react';
import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';

import Items from './wrappers/Items';

export const routes = history => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Items}/>
      <Route exact path="/items" component={Items}/>
    </Switch>
  </ConnectedRouter>
);
