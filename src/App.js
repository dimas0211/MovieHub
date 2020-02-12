import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import ViewportProvider from './services/connectWithViewport';
import ScrollToTop from './components/ScrollToTop';
import Routes from './components/Routes';
import './App.scss';

class App extends Component {
  render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <ViewportProvider>
          <ConnectedRouter history={history}>
            <ScrollToTop />
            <Routes />
          </ConnectedRouter>
        </ViewportProvider>
      </Provider>
    );
  }
}

export default App;
