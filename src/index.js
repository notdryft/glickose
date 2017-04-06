import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import {App} from './App';
import {loadItems} from './actions/items';
import {history, store} from './store';

const render = () => {
  store.dispatch(loadItems());
  ReactDOM.render(
    <AppContainer>
      <App history={history} store={store}/>
    </AppContainer>,
    document.getElementById('react-container')
  );
};

render();

if (module.hot) {
  module.hot.accept('./App', () => {
    setTimeout(render);
  });
}
