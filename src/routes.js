import React from 'react';
import {Col} from 'react-bootstrap';
import {Route} from 'react-router';
import {Link} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';

import Combinations from './wrappers/Combinations';
import Items from './wrappers/Items';

export const routes = history => (
  <ConnectedRouter history={history}>
    <Col xs={12} sm={8}>
      <Link to="/items">Items</Link>
      <Link to="/combinations">Combinations</Link>

      <Route exact path="/" component={Items}/>
      <Route path="/items" component={Items}/>
      <Route path="/combinations" component={Combinations}/>
    </Col>
  </ConnectedRouter>
);
