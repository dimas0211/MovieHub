import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore, { history } from './services/configureStore';

const ROOT = document.getElementById('root');
const store = configureStore();

const renderer = (Component) => {
  render(
    <AppContainer>
      <Component history={history} store={store} />
    </AppContainer>,
    ROOT
  );
};

renderer(App);

if (module.hot) {
  module.hot.accept(['./App'], () => {
    const newApp = require('./App').default;

    renderer(newApp);
  });
}

serviceWorker.unregister();
