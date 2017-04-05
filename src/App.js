import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';

import './scss/app.scss';
import './scss/vendor.scss';

import {routes} from './routes';

export class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {history, store} = this.props;
    return (
      <Provider store={store}>
        {routes(history)}
      </Provider>
    );
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};
