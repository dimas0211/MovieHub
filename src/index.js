import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store, { history } from './store';
import { createClientIoCContainer } from './ioc/clientIoC';

const ROOT = document.getElementById('root');
const ioc = createClientIoCContainer(window);

const renderer = (Component) => {
  render(
    <AppContainer>
      <Component history={history} store={store} ioc={ioc} />
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
