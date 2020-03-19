import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import ScrollToTop from './components/ScrollToTop';
import Routes from './components/Routes';
import './App.scss';

class App extends Component {
  render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ScrollToTop />
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
